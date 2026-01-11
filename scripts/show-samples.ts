
import { Client } from 'pg';
import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

async function showSamples() {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false }
    });
    await client.connect();
    try {
        console.log("🔍 Fetching random samples from 'problem_embeddings' table...\n");
        const res = await client.query('SELECT problem_id, title, rating, tags FROM problem_embeddings ORDER BY RANDOM() LIMIT 10;');

        console.table(res.rows.map(r => ({
            ID: r.problem_id,
            Title: r.title.substring(0, 30),
            Rating: r.rating,
            Tags: r.tags ? r.tags.slice(0, 3).join(", ") : "N/A"
        })));

        console.log("\n📍 Location: These rows are stored in your Supabase PostgreSQL Database.");
        console.log("   Table Name: public.problem_embeddings");

    } catch (e) {
        console.error(e);
    } finally {
        await client.end();
    }
}
showSamples();
