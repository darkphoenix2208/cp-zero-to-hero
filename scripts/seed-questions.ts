
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

console.log("Current CWD:", process.cwd());
const envLocalPath = path.resolve(process.cwd(), ".env.local");
console.log(".env.local exists?", fs.existsSync(envLocalPath));

dotenv.config({ path: envLocalPath });

// Try loading .env as fallback
if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    console.log("Fallback to .env");
    dotenv.config({ path: path.resolve(process.cwd(), ".env") });
}

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log("URL Found:", !!SUPABASE_URL);
console.log("KEY Found:", !!SUPABASE_KEY);

if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error("Missing Supabase credentials. URL:", !!SUPABASE_URL, "KEY:", !!SUPABASE_KEY);
    process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function seed() {
    const questionsPath = path.join(process.cwd(), "scripts", "questions.json");
    const questions = JSON.parse(fs.readFileSync(questionsPath, "utf-8"));

    console.log(`Found ${questions.length} questions to process...`);

    // Deep Clean: Delete all existing questions
    console.log("Clearing existing questions...");
    const { error: deleteError } = await supabase
        .from('interview_questions')
        .delete()
        .neq('id', 0);

    if (deleteError) console.error("Error clearing table:", deleteError);
    else console.log("Table cleared.");

    for (const q of questions) {
        console.log(`Processing: ${q.question_text.substring(0, 50)}...`);

        try {
            // Direct Insert into Supabase (No Embeddings)
            const { error } = await supabase
                .from("interview_questions")
                .insert({
                    category: q.category,
                    difficulty: q.difficulty,
                    question_text: q.question_text
                });

            if (error) {
                console.error("Error inserting:", error);
            } else {
                console.log("Saved to Supabase.");
            }

        } catch (e) {
            console.error("Failed to process question:", e);
        }
    }

    console.log("Seeding complete!");
}

seed();
