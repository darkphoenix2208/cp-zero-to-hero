
import { Client } from 'pg';
import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

async function verifyOmni() {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false }
    });
    await client.connect();
    try {
        console.log("🔍 Verifying Omni-Platform Data...\n");

        // Count by Provider
        const counts = await client.query(`
            SELECT 
                CASE 
                    WHEN problem_id LIKE 'ABC%' THEN 'AtCoder'
                    WHEN problem_id LIKE 'CSES%' THEN 'CSES'
                    WHEN problem_id LIKE 'LC-%' THEN 'LeetCode'
                    ELSE 'Codeforces'
                END as provider,
                COUNT(*) as count
            FROM problem_embeddings
            GROUP BY provider;
        `);
        console.table(counts.rows);

        // Show AtCoder Samples
        console.log("\n🍣 AtCoder Samples:");
        const ac = await client.query("SELECT problem_id, title FROM problem_embeddings WHERE problem_id LIKE 'ABC%' LIMIT 3;");
        console.table(ac.rows);

        // Show CSES Samples
        console.log("\n🌲 CSES Samples:");
        const cses = await client.query("SELECT problem_id, title FROM problem_embeddings WHERE problem_id LIKE 'CSES%' LIMIT 3;");
        console.table(cses.rows);

    } catch (e) {
        console.error(e);
    } finally {
        await client.end();
    }
}
verifyOmni();
