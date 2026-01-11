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
    // Piston public API has rate limits, so parallel execution often fails with "Too Many Requests" (429).
    // Switching to Sequential execution.
    const results = [];
    for (const input of inputs){
        try {
            // Add small delay between requests to be polite
            if (results.length > 0) await new Promise((r)=>setTimeout(r, 500));
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
                const text = await res.text();
                console.error("Piston failed", text);
                throw new Error(`Execution Error (${res.status}): ${text}`);
            }
            const json = await res.json();
            results.push(json);
        } catch (e) {
            console.error("Piston Error Case:", e.message);
            results.push({
                run: {
                    stdout: "",
                    stderr: `Exec Error: ${e.message}`,
                    output: "",
                    code: 1,
                    signal: null
                },
                language: langId,
                version: "*"
            });
        }
    }
    return results;
}
}),
"[project]/lib/cf_scraper.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getProblemSamples",
    ()=>getProblemSamples
]);
async function getProblemSamples(problemIdOrUrl) {
    try {
        let url = problemIdOrUrl;
        // Normalize Input: "1500A" -> "https://codeforces.com/contest/1500/problem/A"
        if (!url.startsWith('http')) {
            const match = url.match(/(\d+)([A-Z]\d?)/i);
            if (match) {
                url = `https://codeforces.com/contest/${match[1]}/problem/${match[2].toUpperCase()}`;
            } else {
                return []; // Invalid format for ID
            }
        }
        const res = await fetch(url, {
            headers: {
                // CF blocks requests without user-agent sometimes
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
            }
        });
        if (!res.ok) return [];
        const html = await res.text();
        const cases = [];
        // Regex Strategies
        // Standard CF format: <div class="input">...<pre>CONTENT</pre>...</div>
        // Match all INPUT sections
        const inputRegex = /<div class="input">[\s\S]*?<pre>([\s\S]*?)<\/pre>/g;
        // Match all OUTPUT sections
        const outputRegex = /<div class="output">[\s\S]*?<pre>([\s\S]*?)<\/pre>/g;
        const inputs = [];
        const outputs = [];
        let match;
        while((match = inputRegex.exec(html)) !== null){
            // Replace <br> with newlines and strip other tags if any
            let content = match[1].replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, '').trim();
            inputs.push(content);
        }
        while((match = outputRegex.exec(html)) !== null){
            let content = match[1].replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, '').trim();
            outputs.push(content);
        }
        // Zip them
        const count = Math.min(inputs.length, outputs.length);
        for(let i = 0; i < count; i++){
            cases.push({
                input: inputs[i],
                output: outputs[i]
            });
        }
        return cases;
    } catch (e) {
        console.error("CF Scraper Error:", e);
        return [];
    }
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cf_scraper$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cf_scraper.ts [app-route] (ecmascript)");
;
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
1. Input format must match the problem statement EXACTLY.
2. **CRITICAL**: If the problem input says "First line is t (number of test cases)", you MUST prepend "1" to your input (representing 1 test case run), unless you are providing multiple concatenated cases.
   - Example: If problem is "t, then n", generate "1\n5...". DO NOT just generate "5...".
3. "output" must be the expected correct answer.
4. Include:
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
        // Step 0: Try to Scrape Real Test Cases (Gold Standard)
        let cases = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cf_scraper$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getProblemSamples"])(problemName);
        let source = "SCRAPER";
        // Step 1: Fallback to LLM if Scraper failed or no valid ID found
        if (cases.length === 0) {
            source = "LLM_GENERATOR";
            try {
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
                const text = caseRes.choices[0]?.message?.content || "{\"cases\": []}";
                const cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();
                const json = JSON.parse(cleanText);
                cases = Array.isArray(json) ? json : json.cases || json.test_cases || [];
            } catch (e) {
                console.warn("LLM Gen failed, using dummy fallback", e);
            }
        }
        if (cases.length === 0) {
            // Ultimate Fallback
            cases = [
                {
                    input: "1\n10",
                    output: "10"
                }
            ];
            source = "FALLBACK";
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
                // Determine if it's Runtime or Compilation
                // Piston puts compilation errors in `res.compile.output` mostly.
                // Runtime errors (like segfault) are in `res.run.signal` or `res.run.stderr`.
                if (res.run.signal || res.run.stderr.includes('core dumped') || res.run.stderr.includes('Exception')) {
                    verdict = "RUNTIME_ERROR";
                    firstFailReason = `Runtime Error (${res.run.signal || 'Signal'}): ${res.run.stderr}`;
                } else if (res.compile && res.compile.code !== 0) {
                    verdict = "COMPILATION_ERROR";
                    firstFailReason = res.compile.output;
                } else {
                    // Fallback check
                    verdict = "RUNTIME_ERROR";
                    firstFailReason = res.run.stderr || "Unknown Runtime Error";
                }
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
            confidence: 1.0,
            source
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

//# sourceMappingURL=%5Broot-of-the-server%5D__7bc980b0._.js.map