
const { Client } = require('pg');
require('dotenv').config();

async function main() {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false }
    });
    await client.connect();

    // Check "Number of Ways"
    console.log("Searching for 'Number of Ways'...");
    const res = await client.query("SELECT problem_id, title, tags FROM problem_embeddings WHERE title ILIKE '%Number of Ways%' LIMIT 5");
    console.table(res.rows);

    // Check generic titles
    console.log("Searching for 'Counting'...");
    const res2 = await client.query("SELECT problem_id, title, tags FROM problem_embeddings WHERE title = 'Counting' LIMIT 5");
    console.table(res2.rows);

    await client.end();
}

main();
