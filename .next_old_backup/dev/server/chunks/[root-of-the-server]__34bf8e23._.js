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
"[project]/app/api/playlist/generate/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$groq$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/groq.ts [app-route] (ecmascript)");
;
;
async function POST(req) {
    try {
        const { topic } = await req.json();
        if (!topic || topic.trim().length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Topic is required"
            }, {
                status: 400
            });
        }
        // Expanded System Prompt for Multi-Platform Curation
        const completion = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$groq$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["groq"].chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: `You are an elite Competitive Programming Coach. 
                    The user wants to master '${topic}'.
                    
                    **YOUR GOAL**: Curate a "God-Tier" learning path of **20 problems**.
                    
                    **SOURCES & RATIOS (STRICT):**
                    - **Total**: 20 Problems.
                    - **LeetCode**: Maximum 6 problems (30%). Focus on standard patterns only.
                    - **Codeforces**: Minimum 5 problems (25%). Focus on logic/math/implementation.
                    - **CSES / AtCoder**: Minimum 4 problems (20%). Focus on clean algorithms.
                    - **CodeChef**: Minimum 2 problems.
                    
                    **CURATION ORDER**:
                    Sort the list as a **"Zero to Hero" path**:
                    1. Problems 1-5: Beginner / Concept Building (Easy)
                    2. Problems 6-12: Standard Application (Medium)
                    3. Problems 13-18: Advanced Variations (Hard)
                    4. Problems 19-20: Evaluation / Boss Fights (Very Hard)
                    
                    **OUTPUT FORMAT**:
                    Return ONLY a valid JSON array of objects with this exact structure:
                    [
                        {
                            "title": "Problem Name",
                            "url": "https://link.to.problem",
                            "platform": "Codeforces" | "LeetCode" | "AtCoder" | "CodeChef" | "CSES",
                            "difficulty": "Easy" | "Medium" | "Hard" | "Insane",
                            "reasoning": "Brief note on why this is good (internal use)."
                        }
                    ]
                    
                    **IMPORTANT**: Ensure the URLs are correct.
                    DO NOT output markdown or explanations outside the JSON.`
                },
                {
                    role: "user",
                    content: `Curate a playlist for: ${topic}`
                }
            ],
            model: "llama-3.3-70b-versatile",
            temperature: 0.2
        });
        const aiContent = completion.choices[0]?.message?.content || "[]";
        let playlist = [];
        try {
            const cleanJson = aiContent.replace(/```json/g, '').replace(/```/g, '').trim();
            playlist = JSON.parse(cleanJson);
        } catch (e) {
            console.error("AI JSON Parse Error", e);
            playlist = [];
        }
        // Basic sanity check on URL correctness (optional, but good for UX)
        // We act as a pass-through now, trusting the AI's "Curation"
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            playlist
        });
    } catch (error) {
        console.error("Playlist Gen Error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__34bf8e23._.js.map