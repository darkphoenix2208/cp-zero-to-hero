
import { Client } from 'pg';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

// Load env from project root
dotenv.config({ path: path.resolve(__dirname, '../.env') });

async function migrate() {
    console.log("🚀 Starting DB Migration...");

    if (!process.env.DATABASE_URL) {
        throw new Error("DATABASE_URL not found in .env");
    }

    // Direct connection to Postgres (Supabase exposes this usually on port 5432 or 6543)
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false } // Required for Supabase usually
    });

    try {
        await client.connect();
        console.log("✅ Connected to Database.");

        // Read the SQL file
        const sqlPath = path.resolve(__dirname, '../supabase/migrations/20240101_init_vectors.sql');
        const sql = fs.readFileSync(sqlPath, 'utf8');

        // Execute
        await client.query(sql);
        console.log("✅ Migration '20240101_init_vectors' applied successfully.");

    } catch (err) {
        console.error("❌ Migration Error:", err);
    } finally {
        await client.end();
    }
}

migrate();
