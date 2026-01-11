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
"[project]/app/api/interview/start/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$groq$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/groq.ts [app-route] (ecmascript)");
;
;
const MODEL = "llama-3.3-70b-versatile";
const PROBLEM_GEN_PROMPT = `
You are a ruthless Competitive Programming Problem Setter (like strict Codeforces or LeetCode Hard setters).
Your goal is to create a difficult algorithmic problem WITHOUT revealing the solution method.

Rules for the Problem Statement:
1. Describe the TASK (what to calculate), not the METHOD (how to calculate it).
2. NEVER mention specific names of data structures or algorithms in the description (e.g., do NOT say "Use a Priority Queue", "Use DP", "Use Binary Search"). Say "Find the K-th smallest" or "Maximize the value".
3. The title should be abstract (e.g., "Kingdom Division", "Task Scheduling") not descriptive (e.g., "Heap Sort Implementation").

Return a JSON object with this EXACT structure:
{
    "title": "Abstract Problem Title (e.g. 'Mysterious Array')",
    "difficulty": "Medium" | "Hard",
    "description": "Formal, mathematical problem statement. Do NOT use LaTeX or dollar signs ($). Use plain text for math (e.g. 'O(N)', 'A[i]', '10^5'). Be precise but give ZERO hints about the solution approach.",
    "inputFormat": "Input format description...",
    "outputFormat": "Output format description...",
    "constraints": ["1 <= N <= 10^5", ...],
    "examples": [
        { 
            "input": "...", 
            "output": "...", 
            "explanation": "Strictly verify the output based on the problem rules. Do NOT explain the algorithm." 
        }
    ],
    "testCases": [
        { "input": "...", "output": "..." },
        { "input": "...", "output": "..." },
        { "input": "...", "output": "..." }
    ],
    "starterCodeCpp": "C++ code boilerplate (class Solution { ... })",
    "starterCodeC": "C code boilerplate (struct Solution* solve(...) or just function)",
    "starterCodePython": "Python code boilerplate (class Solution: ...)",
    "starterCodeJava": "Java code boilerplate (class Solution { ... })",
    "starterCodeJavascript": "JavaScript code boilerplate (class Solution { ... })",
    "starterCodeGo": "Go code boilerplate (func Solve(...) ...)",
    "starterCodeRust": "Rust code boilerplate (impl Solution { ... })",
    "starterCodeCSharp": "C# code boilerplate (public class Solution { ... })",
    "starterCodeKotlin": "Kotlin code boilerplate (class Solution { ... })"
}

IMPORTANT: 
1. The starter codes MUST be ONLY the empty function signature and necessary imports.
2. DO NOT WRITE THE SOLUTION.
3. DO NOT IMPLEMENT THE LOGIC.
4. Keep the "explanation" field in examples EXTREMELY concise.
5. Example starterCode:
"#include <bits/stdc++.h>\\nusing namespace std;\\n\\nclass Solution {\\npublic:\\n    int solve(vector<int>& nums) {\\n        // Your code here\\n        return 0;\\n    }\\n};"
`;
const TOPICS = [
    "Arrays & Hashing (Medium)",
    "Two Pointers (Medium)",
    "Sliding Window (Medium)",
    "Stack (Medium)",
    "Binary Search (Medium)",
    "Linked List (Medium)",
    "Trees (Medium/Hard)",
    "Heap / Priority Queue (Medium)",
    "Backtracking (Medium/Hard)",
    "Graphs (Medium/Hard)",
    "Advanced Dynamic Programming (Hard)",
    "Greedy (Medium)",
    "Tries (Medium)",
    "Math & Geometry (Medium)",
    "Bit Manipulation (Medium)"
];
async function POST(req) {
    try {
        const randomTopic = TOPICS[Math.floor(Math.random() * TOPICS.length)];
        const completion = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$groq$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["groq"].chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: PROBLEM_GEN_PROMPT.replace("Focus on: Graphs, DP, Trees, or Heaps.", `Focus strictly on this topic: ${randomTopic}.`)
                }
            ],
            model: MODEL,
            temperature: 0.4,
            response_format: {
                type: "json_object"
            }
        });
        const text = completion.choices[0]?.message?.content || "{}";
        const data = JSON.parse(text);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data);
    } catch (error) {
        console.error("Problem Gen Error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to generate problem"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__552a2bcb._.js.map