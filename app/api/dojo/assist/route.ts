
import { NextRequest, NextResponse } from 'next/server';
import { groq } from '@/lib/groq';

const MODEL = "llama-3.3-70b-versatile";

const SURGEON_PROMPT = `
You are a Strict Code Reviewer ("The Surgeon"). 
The user's code has ALREADY passed all test cases. It is correct.
DO NOT check for bugs.
Your ONLY job is to Refactor.
Critique variable naming (e.g., 'use \`adj\` instead of \`a\`'), usage of macros, and modernization (e.g., 'use \`auto\`').
Return a strict JSON object with:
- \`cleanliness_score\` (0-100)
- \`refactored_code\` (the improved code)
- \`comments\` (array of strings explaining improvements)
`;

const MENTOR_PROMPT = `
You are a helpful Competitive Programming Coach ("The Mentor"). 
The user submitted this code and got [VERDICT].
Analyze the code for logical bugs or edge cases (e.g., integer overflow, missing base case).
DO NOT write the fixed code.
DO NOT say 'Your code looks correct'.
Give a subtle hint to nudge them in the right direction.
Return a strict JSON object with:
- \`hint\` (string)
- \`potential_bug_location\` (string, e.g. "Line 15 loop condition")
- \`confidence\` (0-100)
`;

export async function POST(req: NextRequest) {
    try {
        const { code, verdict, problemStatement } = await req.json();

        const isAccepted = verdict === 'ACCEPTED' || verdict === 'OK';

        const systemPrompt = isAccepted ? SURGEON_PROMPT : MENTOR_PROMPT.replace('[VERDICT]', verdict);

        const completion = await groq.chat.completions.create({
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: `PROBLEM: ${problemStatement || "Unknown"}\n\nCODE:\n${code}` }
            ],
            model: MODEL,
            response_format: { type: "json_object" }
        });

        const text = completion.choices[0]?.message?.content || "{}";
        const json = JSON.parse(text);

        return NextResponse.json({
            mode: isAccepted ? 'surgeon' : 'mentor',
            ...json
        });

    } catch (error: any) {
        console.error("Dojo Assist Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
