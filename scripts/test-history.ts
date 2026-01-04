
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

// Load Env
const envLocalPath = path.resolve(process.cwd(), ".env.local");
dotenv.config({ path: envLocalPath });

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    console.log("Fallback to .env");
    dotenv.config({ path: path.resolve(process.cwd(), ".env") });
}

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function testHistory() {
    const category = "Arrays & Hashing";

    // 1. Fetch first batch
    console.log("Fetching Batch 1...");
    const { data: batch1 } = await supabase
        .from('interview_questions')
        .select('id, question_text')
        .eq('category', category)
        .limit(3);

    if (!batch1 || batch1.length === 0) {
        console.error("No questions found!");
        return;
    }

    const seenIds = batch1.map(q => q.id);
    console.log("Seen IDs:", seenIds);
    console.log("Seen Questions:", batch1.map(q => q.question_text.substring(0, 30) + "..."));

    // 2. Fetch second batch IGNORING first batch
    console.log("\nFetching Batch 2 (With Filter)...");

    // Reproducing logic from route.ts
    const { data: batch2, error } = await supabase
        .from('interview_questions')
        .select('id, question_text')
        .eq('category', category)
        .filter('id', 'not.in', `(${seenIds.join(',')})`) // Testing the fix logic
        .limit(5);

    if (error) {
        console.error("Filter Error:", error);
    } else {
        console.log("Batch 2 IDs:", batch2?.map(q => q.id));

        // Verification
        const overlap = batch2?.filter(q => seenIds.includes(q.id));
        if (overlap && overlap.length > 0) {
            console.error("FAIL: Overlap found!", overlap);
        } else {
            console.log("SUCCESS: No overlap. Filter working.");
        }
    }
}

testHistory();
