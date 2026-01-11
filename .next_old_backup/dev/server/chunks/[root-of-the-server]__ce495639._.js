module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/punycode [external] (punycode, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/node:stream/web [external] (node:stream/web, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:stream/web", () => require("node:stream/web"));

module.exports = mod;
}),
"[project]/lib/groq.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "groq",
    ()=>groq
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$groq$2d$sdk$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/groq-sdk/index.mjs [app-route] (ecmascript) <locals>");
;
const groq = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$groq$2d$sdk$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]({
    // Prevent crash if key is missing during build/init.
    // The API call will fail later if invalid, which we handle gracefully.
    apiKey: process.env.GROQ_API_KEY || "dummy_key_to_prevent_crash"
});
}),
"[project]/lib/supabase.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-route] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://tvbzuytjkrppzxrkwfze.supabase.co");
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ("TURBOPACK compile-time value", "sb_publishable_TOVkSLNW1h1aA-FuspiwPw_cZwvY0_V");
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl || '', supabaseKey || '');
}),
"[project]/app/api/interview/interrupt/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$groq$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/groq.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.ts [app-route] (ecmascript)");
;
;
;
// Using Llama 3 70B for high intelligence
const MODEL = "llama-3.3-70b-versatile";
const INTERRUPT_SYSTEM_PROMPT = `
You are a skeptical, strict Senior Google Engineer interviewing a candidate.
The candidate is writing code for {TOPIC}.
Here are 3 REAL interview questions related to this topic:
{CONTEXT_QUESTIONS}

Pick the most relevant one and challenge the candidate with it.
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
function mapTopicToCategory(topic) {
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
async function extractTopic(code) {
    try {
        const completion = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$groq$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["groq"].chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: 'Identify the main data structure or algorithm of this code (e.g., "Linked List", "Binary Tree", "DP", "Graph"). Return ONLY the name.'
                },
                {
                    role: "user",
                    content: code.slice(0, 500)
                }
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
async function getRelevantQuestions(category) {
    try {
        // Simple Metadata Filter: Get random questions from this category
        // Note: Supabase doesn't have native "random()" easily in clients without stored procedures, 
        // so we just grab the first 3 or shuffle manually if small dataset.
        // For production, a stored proc `get_random_questions(category)` is better.
        // Here we just limit 3.
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('interview_questions').select('question_text').eq('category', category).limit(50);
        if (error) {
            console.error("Supabase search error:", error);
            return [];
        }
        return data?.map((q)=>q.question_text) || [];
    } catch (e) {
        console.error("Search failed:", e);
        return [];
    }
}
async function POST(req) {
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
            let prompt = force ? SUBMIT_SYSTEM_PROMPT : INTERRUPT_SYSTEM_PROMPT;
            let questionsList = "No specific questions found.";
            // RAG Logic: Identify Topic -> Map to Category -> Retrieve Questions
            if (!force && code && code.length > 50) {
                try {
                    const topic = await extractTopic(code);
                    const category = mapTopicToCategory(topic);
                    console.log(`Topic: ${topic} -> Category: ${category}`);
                    const retrievedQuestions = await getRelevantQuestions(category);
                    if (retrievedQuestions.length > 0) {
                        questionsList = retrievedQuestions.map((q, i)=>`${i + 1}. ${q}`).join('\n');
                        prompt = prompt.replace('{TOPIC}', topic).replace('{CONTEXT_QUESTIONS}', questionsList);
                    } else {
                        prompt = prompt.replace('{TOPIC}', topic).replace('{CONTEXT_QUESTIONS}', "No specific questions found. Ask a tough one about Time Complexity.");
                    }
                } catch (err) {
                    console.error("RAG pipeline error:", err);
                    prompt = prompt.replace('{TOPIC}', "Code").replace('{CONTEXT_QUESTIONS}', "N/A");
                }
            } else if (force) {
                // For SUBMIT, we still want to get RAG questions to pass to the Judge
                try {
                    const topic = await extractTopic(code);
                    const category = mapTopicToCategory(topic);
                    const retrievedQuestions = await getRelevantQuestions(category);
                    if (retrievedQuestions.length > 0) {
                        questionsList = retrievedQuestions.map((q, i)=>`${i + 1}. ${q}`).join('\n');
                    }
                } catch (e) {
                    console.log("RAG failed for submit:", e);
                }
            } else {
                prompt = prompt.replace('{TOPIC}', "Code").replace('{CONTEXT_QUESTIONS}', "N/A");
            }
            // If we have test cases and this is a forced submission, switch to JUDGE MODE
            if (force && body.testCases && body.testCases.length > 0) {
                prompt = JUDGE_SYSTEM_PROMPT.replace('{{CODE}}', code).replace('{{TESTCASES}}', JSON.stringify(body.testCases)).replace('{CONTEXT_QUESTIONS}', questionsList);
            }
            const completion = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$groq$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["groq"].chat.completions.create({
                messages: [
                    {
                        role: "system",
                        content: prompt
                    },
                    {
                        role: "user",
                        content: `CODE SNIPPET:\n${code}`
                    }
                ],
                model: MODEL,
                temperature: 0.7,
                max_tokens: 300,
                response_format: {
                    type: "json_object"
                }
            });
            const text = completion.choices[0]?.message?.content || "{}";
            console.log("GROQ RAW RESP:", text);
            try {
                const json = JSON.parse(text);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(json);
            } catch (e) {
                console.error("JSON PARSE ERROR", text);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    trigger: true,
                    question: "I see you used a complex structure. Can you explain the Time Complexity of your approach?",
                    context: "json_parse_fallback"
                });
            }
        }
        if (type === 'validate') {
            const prompt = VALIDATE_SYSTEM_PROMPT.replace('{{QUESTION}}', question).replace('{{CODE}}', code?.slice(0, 500) || '').replace('{{ANSWER}}', answer);
            const completion = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$groq$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["groq"].chat.completions.create({
                messages: [
                    {
                        role: "system",
                        content: prompt
                    }
                ],
                model: MODEL,
                temperature: 0.7,
                max_tokens: 250,
                response_format: {
                    type: "json_object"
                }
            });
            const text = completion.choices[0]?.message?.content || "{}";
            try {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(JSON.parse(text));
            } catch (e) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    correct: true,
                    feedback: "Keep going."
                });
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Invalid type"
        }, {
            status: 400
        });
    } catch (e) {
        console.error("Groq API Error:", e);
        const errorMessage = e.message || String(e);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            trigger: true,
            question: `(System Error: ${errorMessage}) Let's skip the pleasantries. What is the Space Complexity?`,
            context: "system_error"
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ce495639._.js.map