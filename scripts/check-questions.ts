
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

console.log("Current CWD:", process.cwd());
const envLocalPath = path.resolve(process.cwd(), ".env.local");
dotenv.config({ path: envLocalPath });

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    console.log("Fallback to .env");
    dotenv.config({ path: path.resolve(process.cwd(), ".env") });
}

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error("Missing Credentials");
    process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function check() {
    const { data, error } = await supabase
        .from('interview_questions')
        .select('category, id');

    if (error) {
        console.error(error);
        return;
    }

    const counts: Record<string, number> = {};
    data.forEach(d => {
        counts[d.category] = (counts[d.category] || 0) + 1;
    });

    console.log("Database Counts by Category:");
    console.table(counts);
}

check();
