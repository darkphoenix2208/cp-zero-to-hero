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
"[project]/app/api/interview/interrupt/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$groq$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/groq.ts [app-route] (ecmascript)");
;
;
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
If All Passed: "Verdict: ACCEPTED. Your logic is sound. What is the complexity?"
If Failed: "Verdict: WRONG ANSWER on Case 2. Input: [X], Expected: [Y], Your Code Produced: [Z]."
`;
        if (type === 'interrupt') {
            let prompt = force ? SUBMIT_SYSTEM_PROMPT : INTERRUPT_SYSTEM_PROMPT;
            // If we have test cases and this is a forced submission, switch to JUDGE MODE
            if (force && body.testCases && body.testCases.length > 0) {
                prompt = JUDGE_SYSTEM_PROMPT.replace('{{CODE}}', code).replace('{{TESTCASES}}', JSON.stringify(body.testCases));
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
                max_tokens: 250,
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

//# sourceMappingURL=%5Broot-of-the-server%5D__6d2c7532._.js.map