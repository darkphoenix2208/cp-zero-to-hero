
import { Client } from 'pg';
import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

async function optimize() {
    console.log("🚀 Starting Database Optimization...");

    if (!process.env.DATABASE_URL) {
        throw new Error("DATABASE_URL not found in .env");
    }

    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false }
    });
    await client.connect();

    try {
        console.log("⚡ Creating HNSW Index (Fast Search)...");
        // HNSW index for cosine distance (<=> operator)
        // lists=100 is a good default for < 1M rows
        await client.query(`
            CREATE INDEX IF NOT EXISTS problem_embeddings_hnsw_idx 
            ON problem_embeddings 
            USING hnsw (embedding vector_cosine_ops);
        `);
        console.log("✅ HNSW Index Created.");

        console.log("⚡ Analyzing Table statistics...");
        await client.query("ANALYZE problem_embeddings;");
        console.log("✅ Table Analyzed.");

    } catch (e: any) {
        console.error("❌ Optimization Failed:", e.message);
    } finally {
        await client.end();
    }
}

optimize();
