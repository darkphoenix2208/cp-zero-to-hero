import { NextRequest, NextResponse } from "next/server";
import { groq } from "@/lib/groq";

// Using Llama 3 70B for high intelligence
const MODEL = "llama-3.3-70b-versatile";

const INTERRUPT_SYSTEM_PROMPT = `
You are a skeptical, strict Senior Google Engineer interviewing a candidate.
Analyze the following code snippet.
1. If the code is simple boilerplate or very short (< 5 lines), return { "trigger": false }.
2. If you see a Loop (for/while), Recursion, or Map/Set data structure:
   - STOP the candidate. Set "trigger": true.
   - Generate a short, tough question about Time Complexity, Edge Cases, or Memory.
   - Example: 'Wait, why use a Map here? Isn't a Vector faster for small N?'
   - KEEP IT SHORT (under 2 sentences). DO NOT be polite. Be direct.
3. If no complex logic found, return "trigger": false.

Return strictly JSON: { "trigger": boolean, "question": string, "context": string }
`;

const SUBMIT_SYSTEM_PROMPT = `
You are a skeptical Senior Google Engineer. The candidate claims they are DONE and has submitted this solution.
DO NOT accept it blindly. You MUST ask a follow-up question to verify their understanding.

Your Goal: Probe their intuition, Time Complexity, or ask if this is truly optimal.
- "Is this the optimal approach? What is the Time Complexity?"
- "Can you explain the intuition behind this specific loop?"
- "Did you consider the constraint N=10^5? Will this TLE?"

Return strictly JSON: { "trigger": true, "question": string, "context": "submission" }
`;

const VALIDATE_SYSTEM_PROMPT = `
You are a skeptical interviewer. The candidate has answered your question.
Evaluate if their answer is technically correct.
Question: {{QUESTION}}
Candidate Code Context: {{CODE}}
Candidate Answer: {{ANSWER}}

If correct, be briefly approving but cool.
If incorrect, explain why briefly.

Return strictly JSON: { "correct": boolean, "feedback": string }
`;

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { type, code, question, answer, force } = body;

        const JUDGE_SYSTEM_PROMPT = `
You are an Online Judge (OJ) System.
Execute the user's code MENTALLY against the provided Test Cases.

Input:
Code: {{CODE}}
Test Cases: {{TESTCASES}}

Task:
1. Trace the code logic carefully.
2. Check if it produces the Correct Output for EACH test case.
3. Check for Infinite Loops or obvious Logic Errors.

Return strictly JSON:
{
    "trigger": true,
    "question": "Verdict: [ACCEPTED / WRONG ANSWER / TLE] (Summary of what failed)",
    "context": "submission_verdict"
}
If All Passed: "Verdict: ACCEPTED. Your logic is sound. What is the complexity?"
If Failed: "Verdict: WRONG ANSWER on Case 2. Input: [X], Expected: [Y], Your Code Produced: [Z]."
`;

        if (type === 'interrupt') {
            let prompt = force ? SUBMIT_SYSTEM_PROMPT : INTERRUPT_SYSTEM_PROMPT;

            // If we have test cases and this is a forced submission, switch to JUDGE MODE
            if (force && body.testCases && body.testCases.length > 0) {
                prompt = JUDGE_SYSTEM_PROMPT
                    .replace('{{CODE}}', code)
                    .replace('{{TESTCASES}}', JSON.stringify(body.testCases));
            }

            const completion = await groq.chat.completions.create({
                messages: [
                    { role: "system", content: prompt },
                    { role: "user", content: `CODE SNIPPET:\n${code}` }
                ],
                model: MODEL,
                temperature: 0.7,
                max_tokens: 250,
                response_format: { type: "json_object" }
            });

            const text = completion.choices[0]?.message?.content || "{}";
            console.log("GROQ RAW RESP:", text);

            try {
                const json = JSON.parse(text);
                return NextResponse.json(json);
            } catch (e) {
                console.error("JSON PARSE ERROR", text);
                return NextResponse.json({
                    trigger: true,
                    question: "I see you used a complex structure. Can you explain the Time Complexity of your approach?",
                    context: "json_parse_fallback"
                });
            }
        }

        if (type === 'validate') {
            const prompt = VALIDATE_SYSTEM_PROMPT
                .replace('{{QUESTION}}', question)
                .replace('{{CODE}}', code?.slice(0, 500) || '')
                .replace('{{ANSWER}}', answer);

            const completion = await groq.chat.completions.create({
                messages: [
                    { role: "system", content: prompt }
                ],
                model: MODEL,
                temperature: 0.7,
                max_tokens: 250,
                response_format: { type: "json_object" }
            });

            const text = completion.choices[0]?.message?.content || "{}";

            try {
                return NextResponse.json(JSON.parse(text));
            } catch (e) {
                return NextResponse.json({ correct: true, feedback: "Keep going." });
            }
        }

        return NextResponse.json({ error: "Invalid type" }, { status: 400 });

    } catch (e: any) {
        console.error("Groq API Error:", e);
        const errorMessage = e.message || String(e);
        return NextResponse.json({
            trigger: true,
            question: `(System Error: ${errorMessage}) Let's skip the pleasantries. What is the Space Complexity?`,
            context: "system_error"
        });
    }
}
