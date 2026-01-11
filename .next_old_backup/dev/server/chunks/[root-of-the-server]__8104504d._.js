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
"[project]/lib/piston.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "executeCode",
    ()=>executeCode
]);
const PISTON_API = "https://emkc.org/api/v2/piston";
async function executeCode(language, source, inputs) {
    // Piston doesn't support batch inputs in one request well (it expects one stdin).
    // So we will run them in parallel for efficiency.
    // Map nice language names to Piston ids
    const langMap = {
        'cpp': 'c++',
        'c++': 'c++',
        'python': 'python',
        'js': 'javascript',
        'javascript': 'javascript',
        'java': 'java'
    };
    const langId = langMap[language.toLowerCase()] || language;
    // For C++, we must ensure it's compiled. Piston handles this if we pass "run_memory" or similar, 
    // but the standard endpoint "execute" does it automatically.
    return Promise.all(inputs.map(async (input)=>{
        try {
            const res = await fetch(`${PISTON_API}/execute`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    language: langId,
                    version: "*",
                    files: [
                        {
                            content: source
                        }
                    ],
                    stdin: input,
                    args: [],
                    compile_timeout: 10000,
                    run_timeout: 3000
                })
            });
            if (!res.ok) {
                console.error("Piston failed", await res.text());
                throw new Error("Execution Server Error");
            }
            return await res.json();
        } catch (e) {
            console.error(e);
            return null; // Handle nulls later
        }
    }));
}
}),
"[project]/app/api/dojo/judge/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$groq$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/groq.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$piston$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/piston.ts [app-route] (ecmascript)");
;
;
;
const MODEL = "llama-3.3-70b-versatile";
// System Prompt now focuses on Generating Test Cases, NOT judging.
const GENERATOR_PROMPT = `
Role: You are a Test Case Generator for Competitive Programming.
Objective: Generate 3 DISTINCT test cases for the given problem.

Output Format: JSON Array
[
  { "input": "...", "output": "..." },
  { "input": "...", "output": "..." }
]

Rules:
1. Input format must match the problem statement EXACTLY (whitespace, newlines).
2. "output" must be the expected correct answer.
3. Include:
   - 1 Basic Case (Example from problem)
   - 1 Edge Case (Min/Max values or tricky logic)
   - 1 Random Case
`;
async function POST(req) {
    try {
        const { problemName, problemStatement, userCode, language } = await req.json();
        if (!userCode || !problemName) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Missing fields"
            }, {
                status: 400
            });
        }
        // Step 1: Generate Test Cases (LLM)
        const caseRes = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$groq$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["groq"].chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: `${GENERATOR_PROMPT}\n\nPROBLEM: ${problemName} ${problemStatement || ""}`
                }
            ],
            model: MODEL,
            response_format: {
                type: "json_object"
            }
        });
        // Parse cases (Handle partial JSON wrapper if model adds it)
        const text = caseRes.choices[0]?.message?.content || "{\"cases\": []}";
        // Sometimes models wrap in { "cases": [...] } or just [...]
        let cases = [];
        try {
            const json = JSON.parse(text);
            cases = Array.isArray(json) ? json : json.cases || json.test_cases || [];
        } catch (e) {
            console.error("Failed to parse generated cases", text);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                verdict: "JUDGE_ERROR",
                reason: "Failed to generate test cases."
            });
        }
        if (cases.length === 0) {
            // Fallback if LLM fails
            cases = [
                {
                    input: "1\n10",
                    output: "10"
                }
            ]; // Dummy fallback to prevent crash
        }
        // Step 2: Execute Code (Piston)
        const inputs = cases.map((c)=>c.input);
        const results = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$piston$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["executeCode"])(language || 'cpp', userCode, inputs);
        // Step 3: Verify Results
        let passed = 0;
        let firstFailReason = "";
        let verdict = "ACCEPTED";
        for(let i = 0; i < results.length; i++){
            const res = results[i];
            const expected = cases[i].output.trim();
            if (!res) {
                verdict = "JUDGE_ERROR";
                firstFailReason = "Execution failed silently.";
                break;
            }
            // Check Compilation/Runtime Error
            if (res.run.code !== 0) {
                verdict = res.run.signal ? "RUNTIME_ERROR" : "COMPILATION_ERROR";
                firstFailReason = res.run.stderr || res.compile?.output || "Unknown Error";
                break;
            }
            // Check Output
            const actual = res.run.stdout.trim();
            if (actual !== expected) {
                verdict = "WRONG_ANSWER";
                firstFailReason = `Test Case ${i + 1} Failed. Input: ${inputs[i].replace(/\n/g, ' ')}. Expected: ${expected}. Got: ${actual}`;
                break;
            }
            passed++;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            verdict,
            reason: verdict === "ACCEPTED" ? "All test cases passed!" : firstFailReason,
            cases_passed: passed,
            total_cases: cases.length,
            confidence: 1.0 // It's deterministic now
        });
    } catch (error) {
        console.error("Dojo Judge Error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            verdict: "JUDGE_ERROR",
            reason: error.message || "Judge Server Error"
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8104504d._.js.map