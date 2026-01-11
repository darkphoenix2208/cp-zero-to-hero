module.exports = [
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/lib/contests.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getUpcomingContests",
    ()=>getUpcomingContests
]);
const SITES = [
    'Codeforces',
    'LeetCode',
    'AtCoder',
    'CodeChef'
];
// Helper: Get date 30 days ago
const getHistoryLimit = ()=>new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
async function fetchCodeforces() {
    try {
        const cfRes = await fetch('https://codeforces.com/api/contest.list?gym=false', {
            next: {
                revalidate: 3600
            }
        });
        const cfData = await cfRes.json();
        if (cfData.status === 'OK') {
            const limit = getHistoryLimit().getTime() / 1000;
            return cfData.result.filter((c)=>c.startTimeSeconds > limit) // Last 30 days + Future
            .map((c)=>({
                    name: c.name,
                    url: "https://codeforces.com/contests/" + c.id,
                    start_time: new Date(c.startTimeSeconds * 1000).toISOString(),
                    end_time: new Date((c.startTimeSeconds + c.durationSeconds) * 1000).toISOString(),
                    duration: c.durationSeconds.toString(),
                    site: "Codeforces",
                    in_24_hours: c.relativeTimeSeconds > -86400 ? "Yes" : "No",
                    status: c.phase // BEFORE or FINISHED
                }));
        }
    } catch (e) {
        console.warn("CF Direct Fetch Failed", e);
    }
    return [];
}
async function fetchLeetCode() {
    const staticLC = [];
    // 1. Try Real API for Upcoming
    try {
        const query = `
        {
            contestUpcomingContests {
                title
                titleSlug
                startTime
                duration
            }
        }`;
        const res = await fetch('https://leetcode.com/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'Mozilla/5.0'
            },
            body: JSON.stringify({
                query
            }),
            next: {
                revalidate: 3600
            }
        });
        const data = await res.json();
        if (data.data && data.data.contestUpcomingContests) {
            const realUpcoming = data.data.contestUpcomingContests.map((c)=>({
                    name: c.title,
                    url: `https://leetcode.com/contest/${c.titleSlug}`,
                    start_time: new Date(c.startTime * 1000).toISOString(),
                    end_time: new Date((c.startTime + c.duration) * 1000).toISOString(),
                    duration: c.duration.toString(),
                    site: "LeetCode",
                    in_24_hours: c.startTime * 1000 - Date.now() < 86400000 ? "Yes" : "No",
                    status: "BEFORE"
                }));
            staticLC.push(...realUpcoming);
        }
    } catch (e) {
        console.warn("LC Direct Fetch Failed", e);
    }
    // 2. Generate BACKFILL (Past 4 Weeks) + Future Fallback (if API failed)
    const now = new Date();
    // Find PREVIOUS Sunday (for history)
    const prevSunday = new Date(now);
    prevSunday.setDate(now.getDate() - (now.getDay() + 7) % 7);
    prevSunday.setUTCHours(2, 30, 0, 0);
    // Generate Past 4 Weeks
    for(let i = 0; i < 4; i++){
        const d = new Date(prevSunday);
        d.setDate(d.getDate() - i * 7);
        staticLC.push({
            name: `Weekly Contest (Past)`,
            url: "https://leetcode.com/contest/",
            start_time: d.toISOString(),
            end_time: new Date(d.getTime() + 5400 * 1000).toISOString(),
            duration: "5400",
            site: "LeetCode",
            in_24_hours: "No",
            status: "FINISHED"
        });
    }
    // Generate Future 4 Weeks (Fallback if API empty)
    if (staticLC.filter((c)=>new Date(c.start_time) > now).length === 0) {
        const nextSunday = new Date(now);
        nextSunday.setDate(now.getDate() + (7 - now.getDay()) % 7);
        nextSunday.setUTCHours(2, 30, 0, 0);
        if (nextSunday.getTime() < now.getTime()) nextSunday.setDate(nextSunday.getDate() + 7);
        for(let i = 0; i < 4; i++){
            const d = new Date(nextSunday);
            d.setDate(d.getDate() + i * 7);
            staticLC.push({
                name: `Weekly Contest (Est.)`,
                url: "https://leetcode.com/contest/",
                start_time: d.toISOString(),
                end_time: new Date(d.getTime() + 5400 * 1000).toISOString(),
                duration: "5400",
                site: "LeetCode",
                in_24_hours: d.getTime() - now.getTime() < 86400000 ? "Yes" : "No",
                status: "BEFORE"
            });
        }
    }
    return staticLC;
}
function generateStaticAtCoder() {
    const contests = [];
    const now = new Date();
    // Anchor: A known Saturday.
    const nextSat = new Date(now);
    nextSat.setDate(now.getDate() + (6 - now.getDay() + 7) % 7);
    nextSat.setUTCHours(12, 0, 0, 0);
    // Generate 4 Past + 4 Future
    for(let i = -4; i < 4; i++){
        const d = new Date(nextSat);
        d.setDate(d.getDate() + i * 7);
        const isFuture = d > now;
        contests.push({
            name: `AtCoder Beginner Contest ${isFuture ? '(Est.)' : '(Past)'}`,
            url: "https://atcoder.jp/",
            start_time: d.toISOString(),
            end_time: new Date(d.getTime() + 6000 * 1000).toISOString(),
            duration: "6000",
            site: "AtCoder",
            in_24_hours: d.getTime() - now.getTime() < 86400000 && isFuture ? "Yes" : "No",
            status: isFuture ? "BEFORE" : "FINISHED"
        });
    }
    return contests;
}
function generateStaticCodeChef() {
    const contests = [];
    const now = new Date();
    const nextWed = new Date(now);
    nextWed.setDate(now.getDate() + (3 - now.getDay() + 7) % 7);
    nextWed.setUTCHours(14, 30, 0, 0);
    // Generate 4 Past + 4 Future
    for(let i = -4; i < 4; i++){
        const d = new Date(nextWed);
        d.setDate(d.getDate() + i * 7);
        const isFuture = d > now;
        contests.push({
            name: `CodeChef Starters ${isFuture ? '(Est.)' : '(Past)'}`,
            url: "https://www.codechef.com/",
            start_time: d.toISOString(),
            end_time: new Date(d.getTime() + 7200 * 1000).toISOString(),
            duration: "7200",
            site: "CodeChef",
            in_24_hours: d.getTime() - now.getTime() < 86400000 && isFuture ? "Yes" : "No",
            status: isFuture ? "BEFORE" : "FINISHED"
        });
    }
    return contests;
}
async function getUpcomingContests() {
    let contests = [];
    // NOTE: Kontests.net ONLY returns UPCOMING. 
    // Since user wants HISTORY, we MUST use our Direct/Static logic.
    // We will SKIP the aggregator for now to ensure consistency of history.
    console.warn("[Contest API] Fetching History + Upcoming using Direct APIs.");
    const [cf, lc] = await Promise.all([
        fetchCodeforces(),
        fetchLeetCode()
    ]);
    const ac = generateStaticAtCoder();
    const cc = generateStaticCodeChef();
    contests = [
        ...cf,
        ...lc,
        ...ac,
        ...cc
    ];
    // Mock if completely empty (emergency)
    if (contests.length === 0) {
        return [
            {
                name: "Codeforces Round 1000 (Div 2) [MOCK]",
                url: "https://codeforces.com",
                start_time: new Date(Date.now() + 86400000).toISOString(),
                end_time: new Date(Date.now() + 93600000).toISOString(),
                duration: "7200",
                site: "Codeforces",
                in_24_hours: "No",
                status: "BEFORE"
            }
        ];
    }
    return contests.sort((a, b)=>new Date(a.start_time).getTime() - new Date(b.start_time).getTime());
}
}),
"[project]/app/contests/ContestList.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContestList",
    ()=>ContestList
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ContestList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ContestList() from the server but ContestList is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/contests/ContestList.tsx <module evaluation>", "ContestList");
}),
"[project]/app/contests/ContestList.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContestList",
    ()=>ContestList
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ContestList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ContestList() from the server but ContestList is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/contests/ContestList.tsx", "ContestList");
}),
"[project]/app/contests/ContestList.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$contests$2f$ContestList$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/contests/ContestList.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$contests$2f$ContestList$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/app/contests/ContestList.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$contests$2f$ContestList$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/contests/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContestsPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contests$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/contests.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$contests$2f$ContestList$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/contests/ContestList.tsx [app-rsc] (ecmascript)");
;
;
;
const metadata = {
    title: 'Contest Radar | CP-ZeroToHero',
    description: 'Track upcoming competitive programming contests from Codeforces, LeetCode, AtCoder, and CodeChef.'
};
async function ContestsPage() {
    const contests = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contests$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUpcomingContests"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row md:items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-black text-white tracking-tight mb-2",
                                children: [
                                    "Contest ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500",
                                        children: "Radar"
                                    }, void 0, false, {
                                        fileName: "[project]/app/contests/page.tsx",
                                        lineNumber: 20,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/contests/page.tsx",
                                lineNumber: 19,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-zinc-400 max-w-2xl",
                                children: "Never miss a rating update. Aggregated schedule for all major CP platforms."
                            }, void 0, false, {
                                fileName: "[project]/app/contests/page.tsx",
                                lineNumber: 22,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/contests/page.tsx",
                        lineNumber: 18,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex gap-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-2xl font-bold text-white",
                                    children: contests.length
                                }, void 0, false, {
                                    fileName: "[project]/app/contests/page.tsx",
                                    lineNumber: 30,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-zinc-500 uppercase tracking-widest",
                                    children: "Upcoming"
                                }, void 0, false, {
                                    fileName: "[project]/app/contests/page.tsx",
                                    lineNumber: 31,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/contests/page.tsx",
                            lineNumber: 29,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/contests/page.tsx",
                        lineNumber: 28,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/contests/page.tsx",
                lineNumber: 17,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$contests$2f$ContestList$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ContestList"], {
                initialContests: contests
            }, void 0, false, {
                fileName: "[project]/app/contests/page.tsx",
                lineNumber: 37,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center pt-10 text-zinc-600 text-xs",
                children: [
                    "Data provided by ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://kontests.net",
                        target: "_blank",
                        className: "underline hover:text-zinc-400",
                        children: "kontests.net"
                    }, void 0, false, {
                        fileName: "[project]/app/contests/page.tsx",
                        lineNumber: 40,
                        columnNumber: 34
                    }, this),
                    " API."
                ]
            }, void 0, true, {
                fileName: "[project]/app/contests/page.tsx",
                lineNumber: 39,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/contests/page.tsx",
        lineNumber: 15,
        columnNumber: 9
    }, this);
}
}),
"[project]/app/contests/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/contests/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__23134e81._.js.map