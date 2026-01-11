
import { Client } from 'pg';
import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

// Curated "Greatest Hits" for platforms with hard-to-scrape APIs
const CURATED_CSES = [
    { id: "CSES-1068", title: "Weird Algorithm", tags: ["intro", "math"], rating: 800 },
    { id: "CSES-1083", title: "Missing Number", tags: ["intro", "math"], rating: 800 },
    { id: "CSES-1069", title: "Repetitions", tags: ["intro", "strings"], rating: 800 },
    { id: "CSES-1094", title: "Increasing Array", tags: ["intro", "greedy"], rating: 800 },
    { id: "CSES-1070", title: "Permutations", tags: ["intro", "constructive"], rating: 900 },
    { id: "CSES-1071", title: "Number Spiral", tags: ["intro", "math"], rating: 900 },
    { id: "CSES-1623", title: "Apple Division", tags: ["recursion", "meet-in-the-middle"], rating: 1100 },
    { id: "CSES-1622", title: "Creating Strings", tags: ["recursion", "strings"], rating: 1000 },
    { id: "CSES-1633", title: "Dice Combinations", tags: ["dp"], rating: 1000 },
    { id: "CSES-1634", title: "Minimizing Coins", tags: ["dp"], rating: 1100 },
    { id: "CSES-1635", title: "Coin Combinations I", tags: ["dp"], rating: 1100 },
    { id: "CSES-1636", title: "Coin Combinations II", tags: ["dp"], rating: 1200 },
    { id: "CSES-1637", title: "Removing Digits", tags: ["dp", "greedy"], rating: 1100 },
    { id: "CSES-1638", title: "Grid Paths", tags: ["dp", "grid"], rating: 1200 },
    { id: "CSES-1158", title: "Book Shop", tags: ["dp", "knapsack"], rating: 1300 },
    { id: "CSES-1746", title: "Array Description", tags: ["dp"], rating: 1400 },
    { id: "CSES-1192", title: "Counting Rooms", tags: ["graphs", "bfs", "dfs", "grid"], rating: 1000 },
    { id: "CSES-1193", title: "Labyrinth", tags: ["graphs", "bfs", "shortest paths"], rating: 1200 },
    { id: "CSES-1666", title: "Building Roads", tags: ["graphs", "dsu", "connected components"], rating: 1300 },
    { id: "CSES-1668", title: "Building Teams", tags: ["graphs", "bipartite", "coloring"], rating: 1300 },
    { id: "CSES-1669", title: "Round Trip", tags: ["graphs", "dfs", "cycles"], rating: 1400 },
    { id: "CSES-1195", title: "Flight Discount", tags: ["graphs", "dijkstra"], rating: 1600 },
];

const CURATED_CODECHEF = [
    { id: "CC-FLOW001", title: "Add Two Numbers", tags: ["intro"], rating: 800 },
    { id: "CC-HS08TEST", title: "ATM", tags: ["intro", "math"], rating: 800 },
    { id: "CC-INTEST", title: "Enormous Input Test", tags: ["intro", "io"], rating: 800 },
    { id: "CC-TEST", title: "Life, the Universe, and Everything", tags: ["intro"], rating: 800 },
];

async function seedOmni() {
    console.log("🌌 Starting OMNI-PLATFORM Seed...");

    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL missing");

    // 1. Load Model
    console.log("Loading Neural Model...");
    const { pipeline } = await import('@xenova/transformers');
    const embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');

    // 2. Connect DB
    console.log("Connecting to Database...");
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false }
    });
    await client.connect();

    try {
        let allProblems: any[] = [];

        // 3. FETCH: AtCoder (via Kenkoooo)
        console.log("📡 Fetching AtCoder Problems...");
        try {
            const acRes = await fetch('https://kenkoooo.com/atcoder/resources/problems.json');
            const acData: any[] = await acRes.json();

            // Filter AtCoder (Recent & Good) -> "ABC" contests usually best for learning
            const atCoderProblems = acData
                .filter(p => p.id.startsWith('abc') || p.id.startsWith('dp_'))
                .slice(0, 500) // Take top 500
                .map(p => ({
                    id: `ABC-${p.id.toUpperCase()}`,
                    title: p.title,
                    tags: ["atcoder", "math", "ad-hoc"], // Kenkoooo doesn't send tags in this endpoint easily, defaulting
                    rating: 1200, // Default estimate
                    desc: `AtCoder problem ${p.title} from contest ${p.contest_id}`
                }));

            allProblems = [...allProblems, ...atCoderProblems];
            console.log(`✅ Loaded ${atCoderProblems.length} AtCoder problems.`);
        } catch (e) {
            console.error("Failed to fetch AtCoder:", e);
        }

        // 4. FETCH: Manual Lists
        console.log("📚 Loading Curated Lists (CSES / CodeChef)...");
        const cses = CURATED_CSES.map(p => ({ ...p, desc: `CSES Problem: ${p.title}. Tags: ${p.tags.join(", ")}` }));
        const cc = CURATED_CODECHEF.map(p => ({ ...p, desc: `CodeChef Problem: ${p.title}.` }));

        allProblems = [...allProblems, ...cses, ...cc];
        console.log(`✅ Loaded ${cses.length + cc.length} curated problems.`);

        // 5. FETCH: Codeforces (Fresh Batch)
        console.log("📡 Fetching Codeforces Problems...");
        try {
            const cfRes = await fetch('https://codeforces.com/api/problemset.problems');
            const cfData = await cfRes.json();
            if (cfData.status === 'OK') {
                const cfProblems = cfData.result.problems
                    .filter((p: any) => p.rating && p.rating >= 1000 && p.rating <= 2200) // Sweet spot
                    .slice(0, 1000) // Top 1000 recent
                    .map((p: any) => ({
                        id: `${p.contestId}${p.index}`,
                        title: p.name,
                        tags: p.tags,
                        rating: p.rating,
                        desc: `Codeforces problem ${p.name}. Tags: ${p.tags.join(", ")}`
                    }));

                allProblems = [...allProblems, ...cfProblems];
                console.log(`✅ Loaded ${cfProblems.length} Codeforces problems.`);
            }
        } catch (e) {
            console.error("Failed to fetch Codeforces:", e);
        }

        console.log(`\n🔥 Total Problems to Embed: ${allProblems.length}`);

        // Shuffle for diversity in case we stop early
        allProblems.sort(() => Math.random() - 0.5);

        // 6. EMBED LOOP
        const BATCH_SIZE = 50;
        let processed = 0;

        for (let i = 0; i < allProblems.length; i += BATCH_SIZE) {
            const batch = allProblems.slice(i, i + BATCH_SIZE);

            await Promise.all(batch.map(async (p) => {
                try {
                    // Smart Text for Embedding
                    // If "AtCoder", emphasize Math/AdHoc. If "CSES", emphasize Standard algo.
                    let text = `${p.title}. ${p.desc}. Tags: ${p.tags.join(", ")}.`;
                    if (p.id.startsWith("ABC")) text += " Competitive Programming Math Logic.";
                    if (p.id.startsWith("CSES")) text += " Standard Algorithm Library.";

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

                    await client.query(query, [p.id, p.title, p.tags, p.rating, embedding]);
                } catch (err) {
                    // console.warn(`Skipped ${p.id}`);
                }
            }));

            processed += batch.length;
            process.stdout.write(`\rProgress: ${processed}/${allProblems.length} embedded...`);
        }

        console.log("\n\n✨ OMNI-SEED COMPLETE. Neural Database is now populated with multi-platform intelligence.");

    } catch (e) {
        console.error("Fatal Error:", e);
    } finally {
        await client.end();
    }
}

seedOmni();
