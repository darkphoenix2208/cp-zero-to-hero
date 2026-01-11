
import { Client } from 'pg';
import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env from project root
dotenv.config({ path: path.resolve(__dirname, '../.env') });

async function seed() {
    console.log("🚀 Starting MASSIVE INGESTION (Codeforces API)...");

    if (!process.env.DATABASE_URL) {
        throw new Error("DATABASE_URL not found in .env");
    }

    // 1. Load Model
    console.log("Loading AI Model (this may take a moment)...");
    const { pipeline } = await import('@xenova/transformers');
    const embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');

    // 2. Connect to DB
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false }
    });
    await client.connect();

    try {
        // 3. Fetch from Codeforces API
        console.log("Fetching ALL problems from Codeforces...");
        const res = await fetch('https://codeforces.com/api/problemset.problems');
        const data = await res.json();

        if (data.status !== 'OK') {
            throw new Error(`Codeforces API Error: ${data.comment}`);
        }

        let problems = data.result.problems;

        // 4. Data Cleaning & Filtering
        // Keep problems with rating 800-2400 and tags
        problems = problems.filter((p: any) =>
            p.rating !== undefined &&
            p.tags.length > 0 &&
            p.rating >= 800 &&
            p.rating <= 2400
        );

        // Limit to ~2500 (User explicitly requested 2000-3000)
        const TARGET_SIZE = 2500;
        problems = problems.slice(0, TARGET_SIZE);

        console.log(`✅ Fetched & Filtered: ${problems.length} problems. preparing to embed...`);

        // 5. Batch Processing
        const BATCH_SIZE = 50;
        let processed = 0;

        for (let i = 0; i < problems.length; i += BATCH_SIZE) {
            const batch = problems.slice(i, i + BATCH_SIZE);

            await Promise.all(batch.map(async (p: any) => {
                try {
                    // Unique ID: contestId + index (e.g., 1385C)
                    const pid = `${p.contestId}${p.index}`;

                    // Simple Text for Embedding (Title + Tags)
                    // Note: We don't have full statements, but Title+Tags is surprisingly effective for finding topics
                    // e.g "Dijkstra?" tags: "graph" -> good match for shortest path
                    const text = `${p.name}. Tags: ${p.tags.join(", ")}. Platform: Codeforces`;

                    const output = await embedder(text, { pooling: 'mean', normalize: true });
                    const embedding = JSON.stringify(Array.from(output.data));

                    const query = `
                        INSERT INTO problem_embeddings (problem_id, title, tags, rating, embedding)
                        VALUES ($1, $2, $3, $4, $5)
                        ON CONFLICT (problem_id) 
                        DO UPDATE SET 
                            title = EXCLUDED.title,
                            tags = EXCLUDED.tags,
                            rating = EXCLUDED.rating,
                            embedding = EXCLUDED.embedding;
                    `;

                    await client.query(query, [pid, p.name, p.tags, p.rating, embedding]);
                } catch (err) {
                    // Ignore dupes or embedding errors for single items
                    // console.warn(`Skipped ${p.contestId}${p.index}`);
                }
            }));

            processed += batch.length;
            process.stdout.write(`\rProgress: ${processed}/${problems.length} embedded...`);
        }

        console.log("\n✨ MASSIVE INGESTION COMPLETE.");

    } catch (e: any) {
        console.error("\nSeed Error:", e);
    } finally {
        await client.end();
    }
}

seed().catch(console.error);
