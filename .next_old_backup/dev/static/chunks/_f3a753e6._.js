(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/galaxy.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GALAXY_SECTORS",
    ()=>GALAXY_SECTORS,
    "getSectorColor",
    ()=>getSectorColor
]);
const GALAXY_SECTORS = [
    // --- SECTOR 1: THE FOUNDATIONS (800-1000) ---
    {
        id: "stl-ships",
        title: "C++ STL Ships",
        description: "Master the standard containers: Vector, Set, Map.",
        sector: 1,
        position: {
            x: 0,
            y: 0
        },
        prerequisites: [],
        scout_mission: {
            video_url: "https://www.youtube.com/embed/R5PQQl0MNOW",
            article_url: "https://cp-algorithms.com/data_structures/stack_queue_modification.html",
            cheat_sheet_snippet: `// Common STL Operations
vector<int> v = {1, 2, 3};
v.push_back(4);
sort(v.begin(), v.end());

set<int> s;
s.insert(10);
if(s.count(10)) cout << "Found";

map<string, int> m;
m["apple"] = 5;`
        },
        colonize_mission: {
            easy_problems: [
                "231A",
                "71A",
                "4A"
            ],
            medium_problems: [
                "158B",
                "118A",
                "282A"
            ]
        },
        ascension_mission: {
            boss_problem_id: "4C",
            time_limit_minutes: 30
        }
    },
    {
        id: "complexity-void",
        title: "Time Complexity Void",
        description: "Understand Big-O and the limits of 10^8 operations.",
        sector: 1,
        position: {
            x: 0,
            y: 0
        },
        prerequisites: [],
        scout_mission: {
            video_url: "https://www.youtube.com/embed/9TlHvipP5yA",
            article_url: "https://codeforces.com/blog/entry/75730",
            cheat_sheet_snippet: `// N <= 10^5  -> O(N log N) or O(N)
// N <= 1000  -> O(N^2)
// N <= 20    -> O(2^N)
// 1 sec ~= 10^8 ops`
        },
        colonize_mission: {
            easy_problems: [
                "1030A",
                "977A",
                "617A"
            ],
            medium_problems: [
                "486A",
                "160A",
                "1328A"
            ]
        },
        ascension_mission: {
            boss_problem_id: "230B",
            time_limit_minutes: 45
        }
    },
    {
        id: "basic-math-nebula",
        title: "Basic Math Nebula",
        description: "GCD, LCM, Sieve of Eratosthenes, and Modulo.",
        sector: 1,
        position: {
            x: 0,
            y: 0
        },
        prerequisites: [],
        scout_mission: {
            video_url: "https://www.youtube.com/embed/LhO7N0JbZ5M",
            article_url: "https://cp-algorithms.com/algebra/sieve-of-eratosthenes.html",
            cheat_sheet_snippet: `// GCD
int gcd(int a, int b) {
    return b == 0 ? a : gcd(b, a % b);
}
// LCM
int lcm(int a, int b) {
    return (a / gcd(a, b)) * b;
}`
        },
        colonize_mission: {
            easy_problems: [
                "1335A",
                "1352A",
                "1294A"
            ],
            medium_problems: [
                "1343B",
                "230B",
                "1367B"
            ]
        },
        ascension_mission: {
            boss_problem_id: "1337B",
            time_limit_minutes: 40
        }
    },
    // --- SECTOR 2: THE ALGORITHMIC BELT (1100-1400) ---
    {
        id: "binary-search-star",
        title: "Binary Search Star",
        description: "Monotonic functions and 'TTTTFFFF' search space.",
        sector: 2,
        position: {
            x: 0,
            y: 0
        },
        prerequisites: [
            "complexity-void",
            "stl-ships"
        ],
        scout_mission: {
            video_url: "https://www.youtube.com/embed/zCmdfH7587o",
            article_url: "https://cp-algorithms.com/num_methods/binary_search.html",
            cheat_sheet_snippet: `// Binary Search template
int l = 0, r = n - 1;
while (l <= r) {
    int mid = l + (r - l) / 2;
    if (check(mid)) {
        ans = mid;
        l = mid + 1; // Try bigger?
    } else {
        r = mid - 1;
    }
}`
        },
        colonize_mission: {
            easy_problems: [
                "706B",
                "492B",
                "1324C"
            ],
            medium_problems: [
                "1201C",
                "1373C",
                "978C"
            ]
        },
        ascension_mission: {
            boss_problem_id: "1366A",
            time_limit_minutes: 60
        }
    },
    {
        id: "two-pointers-suns",
        title: "Two Pointers Twin Suns",
        description: "Traversing arrays with L and R indices efficiently.",
        sector: 2,
        position: {
            x: 0,
            y: 0
        },
        prerequisites: [
            "complexity-void",
            "stl-ships"
        ],
        scout_mission: {
            video_url: "https://www.youtube.com/embed/-9BMtLT7eVI",
            article_url: "https://usaco.guide/silver/two-pointers?lang=cpp",
            cheat_sheet_snippet: `// Two Pointers
int l = 0, r = 0, current_sum = 0;
while (r < n) {
    current_sum += a[r];
    while (current_sum > target) {
        current_sum -= a[l];
        l++;
    }
    ans = max(ans, r - l + 1);
    r++;
}`
        },
        colonize_mission: {
            easy_problems: [
                "381A",
                "279B",
                "6C"
            ],
            medium_problems: [
                "1360C",
                "1006C",
                "1324D"
            ]
        },
        ascension_mission: {
            boss_problem_id: "1351C",
            time_limit_minutes: 50
        }
    },
    {
        id: "prefix-sum-asteroids",
        title: "Prefix Sum Asteroids",
        description: "Precompute sums to answer range queries in O(1).",
        sector: 2,
        position: {
            x: 0,
            y: 0
        },
        prerequisites: [
            "basic-math-nebula",
            "stl-ships"
        ],
        scout_mission: {
            video_url: "https://www.youtube.com/embed/uaP-ZUEp-kI",
            article_url: "https://usaco.guide/silver/prefix-sums?lang=cpp",
            cheat_sheet_snippet: `// Prefix Sum Build
vector<long long> p(n + 1, 0);
for(int i = 0; i < n; i++) p[i+1] = p[i] + a[i];

// Query L to R (0-based)
long long sum = p[R+1] - p[L];`
        },
        colonize_mission: {
            easy_problems: [
                "313B",
                "363B",
                "466C"
            ],
            medium_problems: [
                "433B",
                "1363B",
                "1285B"
            ]
        },
        ascension_mission: {
            boss_problem_id: "1328C",
            time_limit_minutes: 55
        }
    }
];
const getSectorColor = (sector)=>{
    switch(sector){
        case 1:
            return "from-blue-500 to-cyan-400"; // Foundations
        case 2:
            return "from-emerald-500 to-lime-400"; // Algorithmic
        case 3:
            return "from-purple-500 to-pink-400"; // Graphs
        default:
            return "from-zinc-500 to-zinc-400";
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/features/skill-tree/PlanetBriefingModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlanetBriefingModal",
    ()=>PlanetBriefingModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// import { Dialog, DialogContent } from "@/components/ui/dialog"; // Removed dependency
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$galaxy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/galaxy.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$monaco$2d$editor$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@monaco-editor/react/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function PlanetBriefingModal({ planet, isOpen, onClose }) {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('INTEL');
    const [solvedCount, setSolvedCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(2); // Mock: 2 out of 6 solved
    if (!planet) return null;
    const totalTraining = planet.colonize_mission.easy_problems.length + planet.colonize_mission.medium_problems.length;
    const progress = solvedCount / totalTraining * 100;
    const isAscensionUnlocked = solvedCount === totalTraining; // Strictly locked for now
    const sectorGradient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$galaxy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSectorColor"])(planet.sector);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    onClick: onClose,
                    className: "absolute inset-0 bg-black/90 backdrop-blur-sm"
                }, void 0, false, {
                    fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                    lineNumber: 36,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        scale: 0.95,
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        scale: 1,
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        scale: 0.95,
                        opacity: 0,
                        y: 20
                    },
                    className: "bg-zinc-950 border border-zinc-800 w-full max-w-5xl h-[85vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col relative z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute top-0 left-0 w-full h-2 bg-gradient-to-r", sectorGradient)
                        }, void 0, false, {
                            fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                            lineNumber: 52,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute -top-20 -right-20 w-96 h-96 rounded-full blur-[100px] opacity-20 pointer-events-none bg-gradient-to-br", sectorGradient)
                        }, void 0, false, {
                            fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                            lineNumber: 53,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-8 flex justify-between items-start z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-wider mb-2 text-transparent bg-clip-text bg-gradient-to-r", sectorGradient),
                                            children: [
                                                "Sector ",
                                                planet.sector,
                                                " // Node ",
                                                planet.id
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                            lineNumber: 58,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-4xl font-extrabold text-white tracking-tight mb-2",
                                            children: planet.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                            lineNumber: 61,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-zinc-400 text-lg max-w-2xl",
                                            children: planet.description
                                        }, void 0, false, {
                                            fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                            lineNumber: 62,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                    lineNumber: 57,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "p-2 hover:bg-zinc-900 rounded-full text-zinc-500 hover:text-white transition",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 24
                                    }, void 0, false, {
                                        fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                        lineNumber: 65,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                    lineNumber: 64,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                            lineNumber: 56,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex px-8 gap-8 border-b border-zinc-800/50 z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabButton, {
                                    active: activeTab === 'INTEL',
                                    onClick: ()=>setActiveTab('INTEL'),
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                        lineNumber: 71,
                                        columnNumber: 115
                                    }, void 0),
                                    label: "Mission Intel"
                                }, void 0, false, {
                                    fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                    lineNumber: 71,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabButton, {
                                    active: activeTab === 'TRAINING',
                                    onClick: ()=>setActiveTab('TRAINING'),
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                        lineNumber: 72,
                                        columnNumber: 121
                                    }, void 0),
                                    label: "Colonization",
                                    badge: `${solvedCount}/${totalTraining}`
                                }, void 0, false, {
                                    fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                    lineNumber: 72,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabButton, {
                                    active: activeTab === 'ASCENSION',
                                    onClick: ()=>setActiveTab('ASCENSION'),
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                        lineNumber: 73,
                                        columnNumber: 123
                                    }, void 0),
                                    label: "Ascension",
                                    locked: !isAscensionUnlocked
                                }, void 0, false, {
                                    fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                    lineNumber: 73,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                            lineNumber: 70,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto p-8 z-10 scrollbar-hide",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                mode: "wait",
                                children: [
                                    activeTab === 'INTEL' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 10
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        exit: {
                                            opacity: 0,
                                            y: -10
                                        },
                                        className: "grid grid-cols-1 lg:grid-cols-2 gap-8 h-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "aspect-video rounded-2xl overflow-hidden border border-zinc-800 shadow-xl bg-black",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                                            width: "100%",
                                                            height: "100%",
                                                            src: planet.scout_mission.video_url,
                                                            title: "YouTube video player",
                                                            frameBorder: "0",
                                                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                                            allowFullScreen: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                            lineNumber: 90,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: planet.scout_mission.article_url,
                                                        target: "_blank",
                                                        className: "flex items-center justify-between p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-indigo-500/50 hover:bg-zinc-800 transition group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "p-2 bg-blue-500/10 rounded-lg text-blue-400",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                            size: 20
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                                            lineNumber: 106,
                                                                            columnNumber: 114
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                                        lineNumber: 106,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "font-bold text-white group-hover:text-blue-400 transition",
                                                                                children: "Read Field Manual"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                                                lineNumber: 108,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-xs text-zinc-500",
                                                                                children: "CP-Algorithms / Codeforces"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                                                lineNumber: 109,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                                        lineNumber: 107,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                                lineNumber: 105,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                size: 16,
                                                                className: "text-zinc-600 group-hover:text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                                lineNumber: 112,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                lineNumber: 88,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col h-full bg-[#1e1e1e] rounded-2xl border border-zinc-800 overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-zinc-900 px-4 py-3 border-b border-zinc-800 flex justify-between items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-mono text-zinc-500 font-bold uppercase",
                                                                children: "Standard Issue Template"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                                lineNumber: 119,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-zinc-600",
                                                                children: "C++17"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                                lineNumber: 120,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$monaco$2d$editor$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                                                            height: "100%",
                                                            defaultLanguage: "cpp",
                                                            value: planet.scout_mission.cheat_sheet_snippet,
                                                            theme: "vs-dark",
                                                            options: {
                                                                readOnly: true,
                                                                minimap: {
                                                                    enabled: false
                                                                },
                                                                scrollBeyondLastLine: false,
                                                                fontSize: 13,
                                                                fontFamily: "'JetBrains Mono', monospace"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                            lineNumber: 123,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                lineNumber: 117,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, "intel", true, {
                                        fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                        lineNumber: 80,
                                        columnNumber: 37
                                    }, this),
                                    activeTab === 'TRAINING' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            x: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        className: "max-w-4xl mx-auto space-y-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 flex items-center gap-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative w-20 h-20",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-full h-full -rotate-90",
                                                                viewBox: "0 0 36 36",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        className: "text-zinc-800",
                                                                        d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: "4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                                        lineNumber: 152,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        className: "text-emerald-500",
                                                                        strokeDasharray: `${progress}, 100`,
                                                                        d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: "4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                                        lineNumber: 153,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                                lineNumber: 151,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute inset-0 flex items-center justify-center font-bold text-sm",
                                                                children: [
                                                                    Math.round(progress),
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                                lineNumber: 155,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                        lineNumber: 150,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-xl font-bold text-white mb-1",
                                                                children: "Colony Status"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                                lineNumber: 158,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-zinc-400 text-sm",
                                                                children: "Eliminate all threats to unlock the Sector Boss."
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                                lineNumber: 159,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                lineNumber: 149,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProblemList, {
                                                        title: "Skirmishes (Level 1)",
                                                        problems: planet.colonize_mission.easy_problems,
                                                        idsAreStrings: true,
                                                        baseColor: "text-green-400",
                                                        bgColor: "bg-green-500/10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProblemList, {
                                                        title: "Warzones (Level 2)",
                                                        problems: planet.colonize_mission.medium_problems,
                                                        idsAreStrings: true,
                                                        baseColor: "text-yellow-400",
                                                        bgColor: "bg-yellow-500/10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                lineNumber: 163,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, "training", true, {
                                        fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                        lineNumber: 142,
                                        columnNumber: 37
                                    }, this),
                                    activeTab === 'ASCENSION' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            scale: 0.9
                                        },
                                        animate: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        className: "h-full flex flex-col items-center justify-center text-center space-y-8",
                                        children: isAscensionUnlocked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-32 h-32 rounded-full bg-red-500/10 border-4 border-red-500 flex items-center justify-center shadow-[0_0_50px_rgba(239,68,68,0.3)] animate-pulse",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                                        size: 64,
                                                        className: "text-red-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                        lineNumber: 192,
                                                        columnNumber: 53
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 49
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4 max-w-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-4xl font-extrabold text-white",
                                                            children: "THE BOSS AWAITS"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                            lineNumber: 195,
                                                            columnNumber: 53
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-zinc-400 text-lg",
                                                            children: [
                                                                "You have ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                    children: [
                                                                        planet.ascension_mission.time_limit_minutes,
                                                                        " minutes"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                                    lineNumber: 197,
                                                                    columnNumber: 66
                                                                }, this),
                                                                " to solve ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-mono text-red-400 font-bold",
                                                                    children: planet.ascension_mission.boss_problem_id
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                                    lineNumber: 197,
                                                                    columnNumber: 136
                                                                }, this),
                                                                ".",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                                    lineNumber: 198,
                                                                    columnNumber: 57
                                                                }, this),
                                                                "Usually requires combining multiple concepts."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 53
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 49
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "px-10 py-4 bg-red-600 hover:bg-red-500 text-white font-bold text-lg rounded-full transition shadow-xl shadow-red-900/30 flex items-center gap-3",
                                                    children: [
                                                        "Start Boss Fight ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                            fill: "currentColor"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                            lineNumber: 202,
                                                            columnNumber: 70
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 49
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-32 h-32 rounded-full bg-zinc-900 border-4 border-zinc-800 flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                        size: 48,
                                                        className: "text-zinc-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 53
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 49
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-2xl font-bold text-zinc-500",
                                                            children: "BOSS LOCKED"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                            lineNumber: 211,
                                                            columnNumber: 53
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-zinc-600 mt-2",
                                                            children: "Complete 100% of colonization missions first."
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                            lineNumber: 212,
                                                            columnNumber: 53
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                    lineNumber: 210,
                                                    columnNumber: 49
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    }, "ascension", false, {
                                        fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                        lineNumber: 183,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                lineNumber: 78,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                            lineNumber: 77,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                    lineNumber: 45,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
            lineNumber: 34,
            columnNumber: 17
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
        lineNumber: 32,
        columnNumber: 9
    }, this);
}
_s(PlanetBriefingModal, "6ss+QmUtkZO0KX8jR5PirNEx/ZA=");
_c = PlanetBriefingModal;
function TabButton({ active, onClick, icon, label, badge, locked }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        disabled: locked,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative pb-4 px-2 flex items-center gap-2 text-sm font-bold uppercase tracking-wide transition-colors outline-none", active ? "text-white" : "text-zinc-500 hover:text-zinc-300", locked && "opacity-50 cursor-not-allowed"),
        children: [
            locked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                size: 14
            }, void 0, false, {
                fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                lineNumber: 238,
                columnNumber: 23
            }, this) : icon,
            label,
            badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ml-1 px-1.5 py-0.5 rounded-full bg-zinc-800 text-zinc-400 text-[10px]",
                children: badge
            }, void 0, false, {
                fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                lineNumber: 240,
                columnNumber: 23
            }, this),
            active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                layoutId: "activeTab",
                className: "absolute bottom-0 left-0 w-full h-1 bg-white rounded-t-full shadow-[0_-2px_10px_rgba(255,255,255,0.5)]"
            }, void 0, false, {
                fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                lineNumber: 242,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
        lineNumber: 229,
        columnNumber: 9
    }, this);
}
_c1 = TabButton;
function ProblemList({ title, problems, baseColor, bgColor }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs font-bold uppercase tracking-wider flex items-center gap-2", baseColor),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-2 h-2 rounded-full bg-current")
                    }, void 0, false, {
                        fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                        lineNumber: 252,
                        columnNumber: 17
                    }, this),
                    " ",
                    title,
                    " | 3 Targets"
                ]
            }, void 0, true, {
                fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                lineNumber: 251,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: problems.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "group flex items-center justify-between p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-700 transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-xs font-mono font-bold text-zinc-500",
                                        children: i + 1
                                    }, void 0, false, {
                                        fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                        lineNumber: 258,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-bold text-white text-sm",
                                                children: [
                                                    "Sector Threat ",
                                                    p
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                lineNumber: 262,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-zinc-500",
                                                children: "Codeforces"
                                            }, void 0, false, {
                                                fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                                lineNumber: 263,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                        lineNumber: 261,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                lineNumber: 257,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `https://codeforces.com/problemset/problem/${p.replace(/([0-9]+)([A-Z]+)/, '$1/$2')}`,
                                target: "_blank",
                                className: "px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-xs font-bold text-zinc-400 hover:text-white hover:bg-zinc-800 transition",
                                children: "Solve"
                            }, void 0, false, {
                                fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                                lineNumber: 266,
                                columnNumber: 25
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                        lineNumber: 256,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
                lineNumber: 254,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/features/skill-tree/PlanetBriefingModal.tsx",
        lineNumber: 250,
        columnNumber: 9
    }, this);
}
_c2 = ProblemList;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "PlanetBriefingModal");
__turbopack_context__.k.register(_c1, "TabButton");
__turbopack_context__.k.register(_c2, "ProblemList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/features/skill-tree/SkillTreeGraph.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SkillTreeWrapper",
    ()=>SkillTreeWrapper,
    "default",
    ()=>SkillTreeGraph
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ReactFlow__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/@reactflow/core/dist/esm/index.mjs [app-client] (ecmascript) <export ReactFlow as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reactflow/core/dist/esm/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$controls$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reactflow/controls/dist/esm/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$background$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reactflow/background/dist/esm/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$minimap$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reactflow/minimap/dist/esm/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$galaxy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/galaxy.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$features$2f$skill$2d$tree$2f$PlanetBriefingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/features/skill-tree/PlanetBriefingModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function SkillTreeGraph() {
    _s();
    const [nodes, setNodes, onNodesChange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNodesState"])([]);
    const [edges, setEdges, onEdgesChange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEdgesState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [selectedPlanet, setSelectedPlanet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // ... onConnect ...
    const onNodeClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SkillTreeGraph.useCallback[onNodeClick]": (event, node)=>{
            // Find the full PlanetNode data
            const planet = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$galaxy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GALAXY_SECTORS"].find({
                "SkillTreeGraph.useCallback[onNodeClick].planet": (p)=>p.id === node.id
            }["SkillTreeGraph.useCallback[onNodeClick].planet"]);
            if (planet) {
                setSelectedPlanet(planet);
            }
        }
    }["SkillTreeGraph.useCallback[onNodeClick]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SkillTreeGraph.useEffect": ()=>{
            const init = {
                "SkillTreeGraph.useEffect.init": async ()=>{
                    const handle = localStorage.getItem('cp-handle');
                    // ...
                    // Mock User Progress for Demo:
                    // Let's assume user unlocked basics but not advanced
                    // In real app, we fetch from DB. For now, we trust the 'prerequisites' logic mainly.
                    // Build Nodes
                    const initialNodes = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$galaxy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GALAXY_SECTORS"].map({
                        "SkillTreeGraph.useEffect.init.initialNodes": (planet)=>{
                            // Simple logic: Unlocked if Sector 1, or if specific prereqs met (mocked)
                            const unlocked = planet.sector === 1 || planet.id === 'binary-search-star';
                            const mastered = planet.id === 'stl-ships'; // Mock mastery
                            return {
                                id: planet.id,
                                type: 'skill',
                                data: {
                                    label: planet.title,
                                    iconName: 'code',
                                    xp: mastered ? 100 : unlocked ? 30 : 0,
                                    xpRequired: 100,
                                    unlocked: unlocked,
                                    mastered: mastered
                                },
                                position: {
                                    x: 0,
                                    y: 0
                                }
                            };
                        }
                    }["SkillTreeGraph.useEffect.init.initialNodes"]);
                    // Build Edges from Prerequisites
                    const initialEdges = [];
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$galaxy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GALAXY_SECTORS"].forEach({
                        "SkillTreeGraph.useEffect.init": (planet)=>{
                            planet.prerequisites.forEach({
                                "SkillTreeGraph.useEffect.init": (parentId)=>{
                                    const isUnlocked = initialNodes.find({
                                        "SkillTreeGraph.useEffect.init": (n)=>n.id === planet.id
                                    }["SkillTreeGraph.useEffect.init"])?.data.unlocked;
                                    initialEdges.push({
                                        id: `${parentId}-${planet.id}`,
                                        source: parentId,
                                        target: planet.id,
                                        type: 'smoothstep',
                                        animated: true,
                                        style: {
                                            stroke: isUnlocked ? '#3b82f6' : '#3f3f46',
                                            strokeWidth: 2
                                        }
                                    });
                                }
                            }["SkillTreeGraph.useEffect.init"]);
                        }
                    }["SkillTreeGraph.useEffect.init"]);
                    const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(initialNodes, initialEdges);
                    setNodes(layoutedNodes);
                    setEdges(layoutedEdges);
                    setLoading(false);
                }
            }["SkillTreeGraph.useEffect.init"];
            init();
        }
    }["SkillTreeGraph.useEffect"], []);
    // ... loading check ...
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-[75vh] w-full border border-zinc-800 rounded-xl bg-zinc-950 overflow-hidden relative shadow-2xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ReactFlow__as__default$3e$__["default"], {
                nodes: nodes,
                edges: edges,
                onNodesChange: onNodesChange,
                onEdgesChange: onEdgesChange,
                onConnect: onConnect,
                onNodeClick: onNodeClick,
                nodeTypes: nodeTypes,
                fitView: true,
                minZoom: 0.2,
                maxZoom: 2,
                attributionPosition: "bottom-right",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$background$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Background"], {
                        color: "#18181b",
                        gap: 25,
                        size: 1
                    }, void 0, false, {
                        fileName: "[project]/components/features/skill-tree/SkillTreeGraph.tsx",
                        lineNumber: 111,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$controls$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controls"], {
                        className: "bg-zinc-800 border-zinc-700 text-white"
                    }, void 0, false, {
                        fileName: "[project]/components/features/skill-tree/SkillTreeGraph.tsx",
                        lineNumber: 112,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$minimap$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MiniMap"], {
                        nodeColor: (n)=>{
                            if (n.data.mastered) return '#eab308';
                            if (n.data.unlocked) return '#3b82f6';
                            return '#3f3f46';
                        },
                        style: {
                            background: '#09090b'
                        },
                        maskColor: "rgba(0, 0, 0, 0.7)",
                        className: "border border-zinc-800 rounded-lg"
                    }, void 0, false, {
                        fileName: "[project]/components/features/skill-tree/SkillTreeGraph.tsx",
                        lineNumber: 113,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/features/skill-tree/SkillTreeGraph.tsx",
                lineNumber: 98,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$features$2f$skill$2d$tree$2f$PlanetBriefingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlanetBriefingModal"], {
                isOpen: !!selectedPlanet,
                onClose: ()=>setSelectedPlanet(null),
                planet: selectedPlanet
            }, void 0, false, {
                fileName: "[project]/components/features/skill-tree/SkillTreeGraph.tsx",
                lineNumber: 125,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-6 left-6 pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-zinc-900/80 backdrop-blur border border-zinc-800 p-4 rounded-xl shadow-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-extrabold text-white flex items-center gap-2",
                            children: [
                                "Tech Tree ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-blue-500 text-xs px-2 py-0.5 bg-blue-500/10 rounded-full border border-blue-500/20",
                                    children: "BETA"
                                }, void 0, false, {
                                    fileName: "[project]/components/features/skill-tree/SkillTreeGraph.tsx",
                                    lineNumber: 137,
                                    columnNumber: 35
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/features/skill-tree/SkillTreeGraph.tsx",
                            lineNumber: 136,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-zinc-400 text-xs mt-1 max-w-[200px]",
                            children: "Complete prerequisites to unlock advanced algorithms. Click unlocked nodes to practice."
                        }, void 0, false, {
                            fileName: "[project]/components/features/skill-tree/SkillTreeGraph.tsx",
                            lineNumber: 139,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4 mt-3 text-[10px] font-bold uppercase tracking-widest text-zinc-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 rounded-full bg-zinc-700"
                                        }, void 0, false, {
                                            fileName: "[project]/components/features/skill-tree/SkillTreeGraph.tsx",
                                            lineNumber: 144,
                                            columnNumber: 66
                                        }, this),
                                        " Locked"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/features/skill-tree/SkillTreeGraph.tsx",
                                    lineNumber: 144,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 rounded-full bg-blue-500"
                                        }, void 0, false, {
                                            fileName: "[project]/components/features/skill-tree/SkillTreeGraph.tsx",
                                            lineNumber: 145,
                                            columnNumber: 66
                                        }, this),
                                        " Unlocked"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/features/skill-tree/SkillTreeGraph.tsx",
                                    lineNumber: 145,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 rounded-full bg-yellow-500"
                                        }, void 0, false, {
                                            fileName: "[project]/components/features/skill-tree/SkillTreeGraph.tsx",
                                            lineNumber: 146,
                                            columnNumber: 66
                                        }, this),
                                        " Mastered"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/features/skill-tree/SkillTreeGraph.tsx",
                                    lineNumber: 146,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/features/skill-tree/SkillTreeGraph.tsx",
                            lineNumber: 143,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/features/skill-tree/SkillTreeGraph.tsx",
                    lineNumber: 135,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/features/skill-tree/SkillTreeGraph.tsx",
                lineNumber: 134,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/features/skill-tree/SkillTreeGraph.tsx",
        lineNumber: 97,
        columnNumber: 9
    }, this);
}
_s(SkillTreeGraph, "0vb4/rmZkql+8LaxgUWLz9/WgWY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNodesState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEdgesState"]
    ];
});
_c = SkillTreeGraph;
function SkillTreeWrapper() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactFlowProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkillTreeGraph, {}, void 0, false, {
            fileName: "[project]/components/features/skill-tree/SkillTreeGraph.tsx",
            lineNumber: 158,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/features/skill-tree/SkillTreeGraph.tsx",
        lineNumber: 157,
        columnNumber: 9
    }, this);
}
_c1 = SkillTreeWrapper;
var _c, _c1;
__turbopack_context__.k.register(_c, "SkillTreeGraph");
__turbopack_context__.k.register(_c1, "SkillTreeWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/skills/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SkillsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$features$2f$skill$2d$tree$2f$SkillTreeGraph$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/features/skill-tree/SkillTreeGraph.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function SkillsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-black text-white font-sans selection:bg-pink-500/30 p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto space-y-8 h-full flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/dashboard",
                                className: "inline-flex items-center gap-2 text-zinc-500 hover:text-white transition group mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        size: 20,
                                        className: "group-hover:-translate-x-1 transition"
                                    }, void 0, false, {
                                        fileName: "[project]/app/skills/page.tsx",
                                        lineNumber: 13,
                                        columnNumber: 29
                                    }, this),
                                    " Back to Dashboard"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/skills/page.tsx",
                                lineNumber: 12,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent",
                                children: "RPG Skill Tree"
                            }, void 0, false, {
                                fileName: "[project]/app/skills/page.tsx",
                                lineNumber: 15,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-zinc-500",
                                children: "Master techniques to unlock advanced algorithms."
                            }, void 0, false, {
                                fileName: "[project]/app/skills/page.tsx",
                                lineNumber: 18,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/skills/page.tsx",
                        lineNumber: 11,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/skills/page.tsx",
                    lineNumber: 10,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$features$2f$skill$2d$tree$2f$SkillTreeGraph$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkillTreeWrapper"], {}, void 0, false, {
                        fileName: "[project]/app/skills/page.tsx",
                        lineNumber: 23,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/skills/page.tsx",
                    lineNumber: 22,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/skills/page.tsx",
            lineNumber: 9,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/skills/page.tsx",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}
_c = SkillsPage;
var _c;
__turbopack_context__.k.register(_c, "SkillsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_f3a753e6._.js.map