
import { Client } from 'pg';
import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

async function check() {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false }
    });
    await client.connect();
    try {
        const res = await client.query('SELECT count(*) FROM problem_embeddings;');
        console.log(`Current Problem Count: ${res.rows[0].count}`);
    } catch (e) {
        console.error(e);
    } finally {
        await client.end();
    }
}
check();
