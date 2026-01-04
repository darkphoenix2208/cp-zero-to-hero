import { NextRequest, NextResponse } from "next/server";
import { groq } from "@/lib/groq";
import { supabase } from "@/lib/supabase";

// Using Llama 3 70B for high intelligence
const MODEL = "llama-3.3-70b-versatile";

const INTERRUPT_SYSTEM_PROMPT = `
You are a skeptical, strict Senior Google Engineer interviewing a candidate.
The candidate is writing code for {TOPIC}.
Here are 3 REAL interview questions related to this topic:
{CONTEXT_QUESTIONS}

Pick the most relevant one and challenge the candidate with it.
Do NOT paraphrase the question. Ask it EXACTLY as written in the list.
Do NOT reveal the solution. Just ask the question naturally.

Analyze the following code snippet.
1. If the code is simple boilerplate or very short (< 5 lines), return { "trigger": false }.
2. If you see a Loop (for/while), Recursion, or Map/Set data structure:
   - STOP the candidate. Set "trigger": true.
   - Ask the question you selected above.
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

// Map Groq output to our specific Categories in DB
function mapTopicToCategory(topic: string): string {
    const t = topic.toLowerCase();
    if (t.includes("tree")) return "Trees";
    if (t.includes("graph") || t.includes("bfs") || t.includes("dfs")) return "Graphs";
    if (t.includes("list")) return "Linked List";
    if (t.includes("array") || t.includes("hash")) return "Arrays & Hashing";
    if (t.includes("dynamic") || t.includes("dp")) return "Dynamic Programming";
    if (t.includes("heap") || t.includes("queue")) return "Heap / Priority Queue";
    if (t.includes("search") || t.includes("binary")) return "Binary Search";
    if (t.includes("sort") || t.includes("window")) return "Sliding Window";
    return "Arrays & Hashing"; // Default fallback
}

// Extract topic from code using Groq
async function extractTopic(code: string): Promise<string> {
    try {
        const completion = await groq.chat.completions.create({
            messages: [
                { role: "system", content: 'Identify the main data structure or algorithm of this code (e.g., "Linked List", "Binary Tree", "DP", "Graph"). Return ONLY the name.' },
                { role: "user", content: code.slice(0, 500) }
            ],
            model: "llama-3.3-70b-versatile",
            temperature: 0.1,
            max_tokens: 20
        });
        return completion.choices[0]?.message?.content?.trim() || "General";
    } catch (e) {
        return "General";
    }
}

async function getRelevantQuestions(category: string, ignoreIds: number[] = []) {
    try {
        let query = supabase
            .from('interview_questions')
            .select('id, question_text')
            .eq('category', category);

        if (ignoreIds.length > 0) {
            query = query.not('id', 'in', `(${ignoreIds.join(',')})`); // WAIT, JS Client expects array for .in() usually, but .not() might need raw
            // Actually, the correct Supabase JS syntax for "not in" is: .not('id', 'in', '(' + list + ')') is for Raw PostgREST. 
            // BUT the JS client `not` filter signature is `not(column, operator, value)`.
            // So `query.not('id', 'in', ignoreIds)` should work if ignoreIds is array? 
            // Let's try the safest known working pattern for Supabase JS: .filter('id', 'not.in', `(${ignoreIds.join(',')})`)

            // Re-reading docs: .not('id', 'in', '(' + ids + ')') is correct for the `in` operator in PostgREST.
            // However, let's try the array syntax which is cleaner if supported: .not('id', 'in', ignoreIds)
            // If that fails, we fallback to filter.

            // Correction: The most standard way is: .filter('id', 'not.in', `(${ignoreIds.join(',')})`)
            query = query.filter('id', 'not.in', `(${ignoreIds.join(',')})`);
        }

        const { data, error } = await query.limit(200);

        if (error) {
            console.error("Supabase search error:", error);
            return [];
        }

        const questions = data?.map((q: any) => ({ id: q.id, text: q.question_text })) || [];

        // Fisher-Yates Shuffle for true randomness
        for (let i = questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [questions[i], questions[j]] = [questions[j], questions[i]];
        }

        // Return top 5 shuffled questions
        return questions.slice(0, 5);
    } catch (e) {
        console.error("Search failed:", e);
        return [];
    }
}


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

*** IMPORTANT ***
If Verdict is ACCEPTED:
You MUST now challenge the candidate with a follow-up question.
Here are some relevant interview questions for this topic:
{CONTEXT_QUESTIONS}

Select one question from the list above and append it to your "question" field.
Example Output for Accepted:
{
    "trigger": true,
    "question": "Verdict: ACCEPTED. Logic is correct. \n\nFollow-up: [Insert Selected Question Here]",
    "context": "submission_verdict"
}
`;

        if (type === 'interrupt') {
            const { force, ignoreIds } = body; // Extract ignoreIds
            let prompt = force ? SUBMIT_SYSTEM_PROMPT : INTERRUPT_SYSTEM_PROMPT;
            let questionsList = "No specific questions found.";
            let questionsListArray: { id: number, text: string }[] = [];

            // RAG Logic: Identify Topic -> Map to Category -> Retrieve Questions
            if (!force && code && code.length > 50) {
                try {
                    const topic = await extractTopic(code);
                    const category = mapTopicToCategory(topic);
                    // Pass ignoreIds to filter out seen questions
                    const retrievedQuestions = await getRelevantQuestions(category, ignoreIds || []);

                    if (retrievedQuestions.length > 0) {
                        questionsListArray = retrievedQuestions;
                        questionsList = retrievedQuestions.map((q, i) => `${i + 1}. ${q.text}`).join('\n');
                        prompt = prompt
                            .replace('{TOPIC}', topic)
                            .replace('{CONTEXT_QUESTIONS}', questionsList);
                    } else {
                        prompt = prompt
                            .replace('{TOPIC}', topic)
                            .replace('{CONTEXT_QUESTIONS}', "No specific questions found. Ask a tough one about Time Complexity.");
                    }
                } catch (err) {
                    console.error("RAG pipeline error:", err);
                    prompt = prompt
                        .replace('{TOPIC}', "Code")
                        .replace('{CONTEXT_QUESTIONS}', "N/A");
                }
            } else if (force) {
                try {
                    const topic = await extractTopic(code);
                    const category = mapTopicToCategory(topic);
                    const retrievedQuestions = await getRelevantQuestions(category, ignoreIds || []);
                    if (retrievedQuestions.length > 0) {
                        questionsListArray = retrievedQuestions;
                        questionsList = retrievedQuestions.map((q, i) => `${i + 1}. ${q.text}`).join('\n');
                    }
                } catch (e) {
                    console.log("RAG failed for submit:", e);
                }
            } else {
                prompt = prompt
                    .replace('{TOPIC}', "Code")
                    .replace('{CONTEXT_QUESTIONS}', "N/A");
            }


            // If we have test cases and this is a forced submission, switch to JUDGE MODE
            if (force && body.testCases && body.testCases.length > 0) {
                prompt = JUDGE_SYSTEM_PROMPT
                    .replace('{{CODE}}', code)
                    .replace('{{TESTCASES}}', JSON.stringify(body.testCases))
                    .replace('{CONTEXT_QUESTIONS}', questionsList);
            }

            const completion = await groq.chat.completions.create({
                messages: [
                    { role: "system", content: prompt },
                    { role: "user", content: `CODE SNIPPET:\n${code}` }
                ],
                model: MODEL,
                temperature: 0.7,
                max_tokens: 300,
                response_format: { type: "json_object" }
            });

            const text = completion.choices[0]?.message?.content || "{}";
            console.log("GROQ RAW RESP:", text);

            try {
                const json = JSON.parse(text);

                // Map Index back to Question Text and ID
                let finalQuestion = "Could you explain the Time Complexity?";
                let finalQuestionId = null;

                if (json.trigger && json.question_index && questionsListArray.length > 0) {
                    const idx = json.question_index - 1; // 1-based to 0-based
                    if (idx >= 0 && idx < questionsListArray.length) {
                        // DIRECT FROM DB - NO REWRITES
                        finalQuestion = questionsListArray[idx].text;
                        finalQuestionId = questionsListArray[idx].id;
                    }
                } else if (json.question) {
                    // Fallback
                    finalQuestion = json.question;
                }

                return NextResponse.json({
                    trigger: json.trigger,
                    question: finalQuestion,
                    question_id: finalQuestionId, // Return ID for frontend tracking
                    context: json.context
                });

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
