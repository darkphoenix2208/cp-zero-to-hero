(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/features/skill-tree/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SKILL_TREE_DATA",
    ()=>SKILL_TREE_DATA,
    "getIcon",
    ()=>getIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calculator.js [app-client] (ecmascript) <export default as Calculator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/network.js [app-client] (ecmascript) <export default as Network>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Binary$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/binary.js [app-client] (ecmascript) <export default as Binary>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$graph$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitGraph$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/git-graph.js [app-client] (ecmascript) <export default as GitGraph>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$narrow$2d$wide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SortAsc$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-narrow-wide.js [app-client] (ecmascript) <export default as SortAsc>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$braces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Braces$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/braces.js [app-client] (ecmascript) <export default as Braces>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hash.js [app-client] (ecmascript) <export default as Hash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
;
const SKILL_TREE_DATA = [
    // Tier 1 (Roots)
    {
        id: 'complexity',
        label: 'Time Complexity',
        description: 'Big O Notation, Loops, and Limits',
        xpRequired: 100,
        prerequisites: [],
        iconName: 'Cpu',
        tier: 1
    },
    {
        id: 'math',
        label: 'Basic Math',
        description: 'GCD, Modular Arithmetic, Primes',
        xpRequired: 100,
        prerequisites: [],
        iconName: 'Calculator',
        tier: 1
    },
    {
        id: 'arrays',
        label: 'Arrays & Strings',
        description: 'Sliding Window, Prefix Sums',
        xpRequired: 100,
        prerequisites: [],
        iconName: 'Braces',
        tier: 1
    },
    // Tier 2
    {
        id: 'number-theory',
        label: 'Number Theory',
        description: 'Sieve, Euler Totient, Mod Inverse',
        xpRequired: 100,
        prerequisites: [
            'math'
        ],
        iconName: 'Hash',
        tier: 2
    },
    {
        id: 'binary-search',
        label: 'Binary Search',
        description: 'Search on Answer, monotonic functions',
        xpRequired: 100,
        prerequisites: [
            'complexity',
            'arrays'
        ],
        iconName: 'Search',
        tier: 2
    },
    {
        id: 'two-pointers',
        label: 'Two Pointers',
        description: 'Efficient array traversal',
        xpRequired: 100,
        prerequisites: [
            'arrays'
        ],
        iconName: 'Code',
        tier: 2
    },
    {
        id: 'greedy',
        label: 'Sorting & Greedy',
        description: 'Intervals, custom comparators',
        xpRequired: 100,
        prerequisites: [
            'arrays',
            'complexity'
        ],
        iconName: 'SortAsc',
        tier: 2
    },
    {
        id: 'recursion',
        label: 'Recursion',
        description: 'Recursive thinking, backtracking',
        xpRequired: 100,
        prerequisites: [
            'complexity'
        ],
        iconName: 'Layers',
        tier: 2
    },
    // Tier 3
    {
        id: 'dp',
        label: 'Dynamic Programming',
        description: 'Memoization, Tabulation, Knapsack',
        xpRequired: 100,
        prerequisites: [
            'recursion'
        ],
        iconName: 'Box',
        tier: 3
    },
    {
        id: 'graphs',
        label: 'Graph Theory',
        description: 'BFS, DFS, Adjacency Lists',
        xpRequired: 100,
        prerequisites: [
            'recursion',
            'arrays'
        ],
        iconName: 'Share2',
        tier: 3
    },
    {
        id: 'trees',
        label: 'Trees',
        description: 'Traversals, Diameter, LCA',
        xpRequired: 100,
        prerequisites: [
            'graphs'
        ],
        iconName: 'GitGraph',
        tier: 3
    },
    // Tier 4
    {
        id: 'segtree',
        label: 'Segment Trees',
        description: 'Range Queries, Updates',
        xpRequired: 100,
        prerequisites: [
            'trees',
            'binary-search'
        ],
        iconName: 'Binary',
        tier: 4
    },
    {
        id: 'flow',
        label: 'Network Flow',
        description: 'Max Flow, Min Cut',
        xpRequired: 100,
        prerequisites: [
            'graphs'
        ],
        iconName: 'Network',
        tier: 4
    }
];
const getIcon = (name)=>{
    switch(name){
        case 'Cpu':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"];
        case 'Calculator':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"];
        case 'Braces':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$braces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Braces$3e$__["Braces"];
        case 'Hash':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__["Hash"];
        case 'Search':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"];
        case 'Code':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"];
        case 'SortAsc':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$narrow$2d$wide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SortAsc$3e$__["SortAsc"];
        case 'Layers':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"];
        case 'Box':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"];
        case 'Share2':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"];
        case 'GitGraph':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$graph$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitGraph$3e$__["GitGraph"];
        case 'Binary':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Binary$3e$__["Binary"];
        case 'Network':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"];
        default:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"];
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/features/skill-tree/SkillNode.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SkillNode",
    ()=>SkillNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reactflow/core/dist/esm/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$features$2f$skill$2d$tree$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/features/skill-tree/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function SkillNode({ data, id }) {
    _s();
    const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$features$2f$skill$2d$tree$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIcon"])(data.iconName);
    const [isShaking, setIsShaking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Calculate progress percentage
    const progress = Math.min(data.xp / data.xpRequired * 100, 100);
    const handleClick = ()=>{
        if (!data.unlocked) {
            setIsShaking(true);
            setTimeout(()=>setIsShaking(false), 500); // Shorter duration
            return;
        }
        // Handle selection event if needed (passed via ReactFlow context later ideally)
        console.log("Selected:", data.label);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "relative",
        animate: isShaking ? {
            x: [
                -5,
                5,
                -5,
                5,
                0
            ]
        } : {},
        transition: {
            duration: 0.4
        },
        onClick: handleClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `
                    w-[200px] p-4 rounded-xl border-2 transition-all duration-300 relative overflow-hidden group
                    ${data.mastered ? 'bg-yellow-950/40 border-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.3)]' : data.unlocked ? 'bg-zinc-900 border-zinc-700 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] cursor-pointer' : 'bg-zinc-950 border-zinc-800 opacity-80 cursor-not-allowed'}
                `,
                children: [
                    data.unlocked && !data.mastered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 h-1 bg-blue-500 transition-all duration-300",
                        style: {
                            width: `${progress}%`
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/features/skill-tree/SkillNode.tsx",
                        lineNumber: 56,
                        columnNumber: 21
                    }, this),
                    data.mastered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-yellow-500/5 z-0 animate-pulse pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/components/features/skill-tree/SkillNode.tsx",
                        lineNumber: 64,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Handle"], {
                        type: "target",
                        position: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Top,
                        className: "!bg-zinc-600 !w-3 !h-3"
                    }, void 0, false, {
                        fileName: "[project]/components/features/skill-tree/SkillNode.tsx",
                        lineNumber: 67,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-3 relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-2 rounded-lg ${data.mastered ? 'bg-yellow-500 text-black' : data.unlocked ? 'bg-blue-500/20 text-blue-400' : 'bg-zinc-800 text-zinc-600'}`,
                                children: data.unlocked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/components/features/skill-tree/SkillNode.tsx",
                                    lineNumber: 71,
                                    columnNumber: 42
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/components/features/skill-tree/SkillNode.tsx",
                                    lineNumber: 71,
                                    columnNumber: 63
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/features/skill-tree/SkillNode.tsx",
                                lineNumber: 70,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: `font-bold text-sm truncate ${data.mastered ? 'text-yellow-400' : data.unlocked ? 'text-zinc-100' : 'text-zinc-500'}`,
                                                children: data.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/features/skill-tree/SkillNode.tsx",
                                                lineNumber: 76,
                                                columnNumber: 29
                                            }, this),
                                            data.mastered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                                size: 14,
                                                className: "text-yellow-500 animate-bounce"
                                            }, void 0, false, {
                                                fileName: "[project]/components/features/skill-tree/SkillNode.tsx",
                                                lineNumber: 79,
                                                columnNumber: 47
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/features/skill-tree/SkillNode.tsx",
                                        lineNumber: 75,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-zinc-500 mt-1 truncate",
                                        children: data.unlocked ? data.mastered ? 'Mastered!' : `${Math.floor(progress)}% Complete` : 'Locked'
                                    }, void 0, false, {
                                        fileName: "[project]/components/features/skill-tree/SkillNode.tsx",
                                        lineNumber: 82,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/features/skill-tree/SkillNode.tsx",
                                lineNumber: 74,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/features/skill-tree/SkillNode.tsx",
                        lineNumber: 69,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Handle"], {
                        type: "source",
                        position: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Bottom,
                        className: "!bg-zinc-600 !w-3 !h-3"
                    }, void 0, false, {
                        fileName: "[project]/components/features/skill-tree/SkillNode.tsx",
                        lineNumber: 94,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/features/skill-tree/SkillNode.tsx",
                lineNumber: 43,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isShaking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "absolute -top-10 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded whitespace-nowrap z-50",
                    children: "Complete prerequisites first!"
                }, void 0, false, {
                    fileName: "[project]/components/features/skill-tree/SkillNode.tsx",
                    lineNumber: 100,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/features/skill-tree/SkillNode.tsx",
                lineNumber: 98,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/features/skill-tree/SkillNode.tsx",
        lineNumber: 37,
        columnNumber: 9
    }, this);
}
_s(SkillNode, "nsW8usx2+uxzev726f8UdfGrERY=");
_c = SkillNode;
var _c;
__turbopack_context__.k.register(_c, "SkillNode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/features/skill-tree/topic-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TOPIC_DATA",
    ()=>TOPIC_DATA
]);
const TOPIC_DATA = {
    'complexity': {
        title: "Time Complexity",
        videoGuide: "https://www.youtube.com/watch?v=9TlHvipP5yA",
        resources: [
            {
                title: "CP-Algorithms: Complexity",
                url: "https://cp-algorithms.com/"
            },
            {
                title: "Big O Cheatsheet",
                url: "https://www.bigocheatsheet.com/"
            }
        ],
        cheatSheet: `// Common Complexities
// N = 10^8  -> O(N) or O(N log N) usually TLE
// N = 10^5  -> O(N) or O(N log N) is OK
// N = 1000  -> O(N^2) is OK
// N = 20    -> O(2^N) is OK

// Python: 1 sec ~ 10^7 operations
// C++: 1 sec ~ 10^8 operations`,
        problemSet: [
            {
                name: "Way Too Long Words",
                id: "71A",
                rating: 800
            },
            {
                name: "Helpful Maths",
                id: "339A",
                rating: 800
            },
            {
                name: "Beautiful Matrix",
                id: "263A",
                rating: 800
            },
            {
                name: "Bit++",
                id: "282A",
                rating: 800
            },
            {
                name: "Petya and Strings",
                id: "112A",
                rating: 800
            },
            {
                name: "Team",
                id: "231A",
                rating: 800
            }
        ]
    },
    'math': {
        title: "Basic Math",
        videoGuide: "https://www.youtube.com/watch?v=1p3L7n9_h-Q",
        resources: [
            {
                title: "CP-Algorithms: Modular Arithmetic",
                url: "https://cp-algorithms.com/algebra/module-inverse.html"
            }
        ],
        cheatSheet: `// Modular Exponentiation (a^b % m)
long long binpow(long long a, long long b, long long m) {
    a %= m;
    long long res = 1;
    while (b > 0) {
        if (b & 1) res = res * a % m;
        a = a * a % m;
        b >>= 1;
    }
    return res;
}

// GCD
int gcd(int a, int b) {
    return b ? gcd(b, a % b) : a;
}`,
        problemSet: [
            {
                name: "Watermelon",
                id: "4A",
                rating: 800
            },
            {
                name: "Elephant",
                id: "617A",
                rating: 800
            },
            {
                name: "Design Tutorial: Learn from Math",
                id: "472A",
                rating: 900
            },
            {
                name: "Restoring Three Numbers",
                id: "1154A",
                rating: 800
            },
            {
                name: "Divisibility Problem",
                id: "1328A",
                rating: 800
            },
            {
                name: "Minimal Square",
                id: "1360A",
                rating: 800
            }
        ]
    },
    'arrays': {
        title: "Arrays & Strings",
        videoGuide: "https://www.youtube.com/watch?v=P8Xa2BitN3I",
        resources: [
            {
                title: "GFG: Array Data Structure",
                url: "https://www.geeksforgeeks.org/array-data-structure/"
            }
        ],
        cheatSheet: `// Prefix Sums 1D
vector<int> p(n + 1, 0);
for(int i = 0; i < n; i++) {
    p[i+1] = p[i] + a[i];
}
// Sum [l, r] (0-indexed) = p[r+1] - p[l]

// 2D Prefix Sums
// pref[i][j] = val + pref[i-1][j] + pref[i][j-1] - pref[i-1][j-1]`,
        problemSet: [
            {
                name: "Petya and Strings",
                id: "112A",
                rating: 800
            },
            {
                name: "Word Capitalization",
                id: "281A",
                rating: 800
            },
            {
                name: "Boy or Girl",
                id: "236A",
                rating: 800
            },
            {
                name: "Kuriyama Mirai's Stones",
                id: "433B",
                rating: 1200
            },
            {
                name: "Karen and Coffee",
                id: "816B",
                rating: 1600
            },
            {
                name: "Prefix Sum Primes",
                id: "1166B",
                rating: 1300
            },
            {
                name: "Little Girl and Maximum Sum",
                id: "276C",
                rating: 1500
            }
        ]
    },
    'number-theory': {
        title: "Number Theory",
        videoGuide: "https://www.youtube.com/watch?v=L8grWxBlIZ4",
        resources: [
            {
                title: "CP-Algorithms: Sieve",
                url: "https://cp-algorithms.com/algebra/sieve-of-eratosthenes.html"
            }
        ],
        cheatSheet: `// Sieve of Eratosthenes
const int MAXN = 1000005;
vector<bool> is_prime(MAXN, true);
void sieve() {
    is_prime[0] = is_prime[1] = false;
    for (int i = 2; i * i < MAXN; i++) {
        if (is_prime[i]) {
            for (int j = i * i; j < MAXN; j += i)
                is_prime[j] = false;
        }
    }
}`,
        problemSet: [
            {
                name: "T-primes",
                id: "230B",
                rating: 1300
            },
            {
                name: "Sherlock and his girlfriend",
                id: "776B",
                rating: 1500
            },
            {
                name: "Bachgold Problem",
                id: "749A",
                rating: 800
            },
            {
                name: "Almost All Divisors",
                id: "1199B",
                rating: 1200
            },
            {
                name: "Composite Coloring",
                id: "1332B",
                rating: 1300
            },
            {
                name: "Orac and Models",
                id: "1350B",
                rating: 1600
            }
        ]
    },
    'binary-search': {
        title: "Binary Search",
        videoGuide: "https://www.youtube.com/watch?v=GU7DpgHINFc",
        resources: [
            {
                title: "TopCoder: Binary Search",
                url: "https://www.topcoder.com/thrive/articles/Binary%20Search"
            }
        ],
        cheatSheet: `// Standard Binary Search
int l = 0, r = n - 1;
while (l <= r) {
    int mid = l + (r - l) / 2;
    if (check(mid)) {
        // ... find match
    } else if (arr[mid] < target) {
        l = mid + 1;
    } else {
        r = mid - 1;
    }
}

// Binary Search on Answer
long long l = 0, r = 1e18; // monotonic range
long long ans = -1;
while (l <= r) {
    long long mid = l + (r - l) / 2;
    if (isValid(mid)) {
        ans = mid;
        r = mid - 1; // try smaller
    } else {
        l = mid + 1;
    }
}`,
        problemSet: [
            {
                name: "Interesting drink",
                id: "706B",
                rating: 1100
            },
            {
                name: "Vanya and Lanterns",
                id: "492B",
                rating: 1200
            },
            {
                name: "Worms",
                id: "474B",
                rating: 1200
            },
            {
                name: "K-th Not Divisible by n",
                id: "1352C",
                rating: 1200
            },
            {
                name: "Magic Powder - 1",
                id: "670D1",
                rating: 1300
            },
            {
                name: "Hamburgers",
                id: "371C",
                rating: 1600
            }
        ]
    },
    'two-pointers': {
        title: "Two Pointers",
        videoGuide: "https://www.youtube.com/watch?v=On03HWe2tZM",
        resources: [
            {
                title: "CF Edu: Two Pointers",
                url: "https://codeforces.com/edu/course/2/lesson/9"
            }
        ],
        cheatSheet: `// Two Pointers Sum
int l = 0, r = n - 1;
while(l < r) {
   if(a[l] + a[r] == target) return true;
   if(a[l] + a[r] < target) l++;
   else r--;
}`,
        problemSet: [
            {
                name: "Books",
                id: "279B",
                rating: 1400
            },
            {
                name: "Sereja and Dima",
                id: "381A",
                rating: 800
            },
            {
                name: "Favorite Sequence",
                id: "1462A",
                rating: 800
            },
            {
                name: "Three Parts of the Array",
                id: "1006C",
                rating: 1200
            },
            {
                name: "They Are Everywhere",
                id: "701C",
                rating: 1500
            },
            {
                name: "Cellular Network",
                id: "702C",
                rating: 1500
            }
        ]
    },
    'greedy': {
        title: "Sorting & Greedy",
        videoGuide: "https://www.youtube.com/watch?v=H7tshfF-7Hk",
        resources: [
            {
                title: "CP-Algorithms: Algebra",
                url: "https://cp-algorithms.com/"
            }
        ],
        cheatSheet: `// Custom Comparator (Lambda)
sort(v.begin(), v.end(), [](const Item& a, const Item& b) {
    return a.value * b.weight > b.value * a.weight;
});

// Priority Queue (Max Heap)
priority_queue<int> pq; 
// Min Heap
priority_queue<int, vector<int>, greater<int>> min_pq;`,
        problemSet: [
            {
                name: "Twins",
                id: "160A",
                rating: 900
            },
            {
                name: "Chat Room",
                id: "58A",
                rating: 1000
            },
            {
                name: "Dragons",
                id: "230A",
                rating: 1000
            },
            {
                name: "Puzzles",
                id: "337A",
                rating: 900
            },
            {
                name: "Similar Pairs",
                id: "1360C",
                rating: 1000
            },
            {
                name: "Construct the String",
                id: "1335B",
                rating: 1000
            }
        ]
    },
    'recursion': {
        title: "Recursion & Backtracking",
        videoGuide: "https://www.youtube.com/watch?v=T_S-3w49yL0",
        resources: [],
        cheatSheet: `// Backtracking Template
void backtrack(State current) {
    if (isSolution(current)) {
        process(current);
        return;
    }
    for (auto next : getCandidates(current)) {
        makeMove(next);
        backtrack(next);
        undoMove(next); // Backtrack
    }
}`,
        problemSet: [
            {
                name: "Queen",
                id: "1143C",
                rating: 1500
            },
            {
                name: "Recursive Queries",
                id: "855B",
                rating: 1600
            },
            {
                name: "Apple Division",
                id: "CSES-1623",
                rating: 1100
            },
            {
                name: "Creating Strings",
                id: "CSES-1622",
                rating: 1200
            },
            {
                name: "Grid Paths",
                id: "CSES-1625",
                rating: 1600
            }
        ]
    },
    'dp': {
        title: "Dynamic Programming",
        videoGuide: "https://www.youtube.com/watch?v=OQ5jsbhAv_M",
        resources: [
            {
                title: "DP Patterns",
                url: "https://leetcode.com/discuss/general-discussion/458695/Dynamic-Programming-Patterns"
            }
        ],
        cheatSheet: `// 1D DP (Fibonacci)
vector<int> dp(n+1);
dp[0] = 0; dp[1] = 1;
for(int i=2; i<=n; i++) dp[i] = dp[i-1] + dp[i-2];

// Knapsack 0/1
for (int i = 0; i < n; i++) {
    for (int w = W; w >= weight[i]; w--) {
        dp[w] = max(dp[w], dp[w - weight[i]] + value[i]);
    }
}`,
        problemSet: [
            {
                name: "Hit the Lottery",
                id: "996A",
                rating: 800
            },
            {
                name: "Cut Ribbon",
                id: "189A",
                rating: 1300
            },
            {
                name: "Boredom",
                id: "455A",
                rating: 1500
            },
            {
                name: "K-Tree",
                id: "431C",
                rating: 1600
            },
            {
                name: "Tetrahedron",
                id: "166E",
                rating: 1500
            },
            {
                name: "Filling Shapes",
                id: "1182A",
                rating: 1100
            }
        ]
    },
    'graphs': {
        title: "Graph Theory",
        videoGuide: "https://www.youtube.com/watch?v=pcKY4hjDrxk",
        resources: [
            {
                title: "CP-Algorithms: Graphs",
                url: "https://cp-algorithms.com/graph/breadth-first-search.html"
            }
        ],
        cheatSheet: `// BFS
queue<int> q;
q.push(start);
visited[start] = true;
while(!q.empty()) {
    int u = q.front(); q.pop();
    for(int v : adj[u]) {
        if(!visited[v]) {
            visited[v] = true;
            q.push(v);
        }
    }
}

// DFS
void dfs(int u) {
    visited[u] = true;
    for(int v : adj[u]) {
        if(!visited[v]) dfs(v);
    }
}`,
        problemSet: [
            {
                name: "News Distribution",
                id: "1167C",
                rating: 1400
            },
            {
                name: "Kefa and Park",
                id: "580C",
                rating: 1500
            },
            {
                name: "Two Buttons",
                id: "520B",
                rating: 1400
            },
            {
                name: "Party",
                id: "115A",
                rating: 900
            },
            {
                name: "Metro",
                id: "1055A",
                rating: 1000
            },
            {
                name: "Rumor",
                id: "893C",
                rating: 1300
            },
            {
                name: "Badge",
                id: "1020B",
                rating: 1200
            }
        ]
    },
    'trees': {
        title: "Trees",
        videoGuide: "https://www.youtube.com/watch?v=1-l_UOFi1Xw",
        resources: [],
        cheatSheet: `// Tree Diameter (2 DFS)
// 1. DFS from arbitrary node to find furthest node X
// 2. DFS from X to find furthest node Y
// Dist(X, Y) is diameter.

// LCA (Binary Lifting)
// up[u][i] is 2^i-th ancestor of u
void dfs(int u, int p) {
    up[u][0] = p;
    for(int i=1; i<LOG; i++) 
        up[u][i] = up[up[u][i-1]][i-1];
    // ... dfs children
}`,
        problemSet: [
            {
                name: "Christmas Spruce",
                id: "913B",
                rating: 1200
            },
            {
                name: "Queen",
                id: "1143C",
                rating: 1600
            },
            {
                name: "Tree Diameter",
                id: "CSES-1131",
                rating: 1400
            },
            {
                name: "Subordinates",
                id: "CSES-1674",
                rating: 1300
            },
            {
                name: "Distance in Tree",
                id: "161D",
                rating: 1600
            },
            {
                name: "Linova and Kingdom",
                id: "1336A",
                rating: 1700
            }
        ]
    },
    'segtree': {
        title: "Segment Trees",
        videoGuide: "https://www.youtube.com/watch?v=-dUiRtJ8ot0",
        resources: [
            {
                title: "CP-Algorithms: Segment Tree",
                url: "https://cp-algorithms.com/data_structures/segment_tree.html"
            }
        ],
        cheatSheet: `// Build
void build(int v, int tl, int tr) {
    if (tl == tr) t[v] = a[tl];
    else {
        int tm = (tl + tr) / 2;
        build(v*2, tl, tm);
        build(v*2+1, tm+1, tr);
        t[v] = t[v*2] + t[v*2+1];
    }
}
// Sum Query
int sum(int v, int tl, int tr, int l, int r) {
    if (l > r) return 0;
    if (l == tl && r == tr) return t[v];
    int tm = (tl + tr) / 2;
    return sum(v*2, tl, tm, l, min(r, tm)) +
           sum(v*2+1, tm+1, tr, max(l, tm+1), r);
}`,
        problemSet: [
            {
                name: "Xenia and Bit Operations",
                id: "339D",
                rating: 1700
            },
            {
                name: "Enemy is weak",
                id: "61E",
                rating: 1900
            },
            {
                name: "Dynamic Range Sum Queries",
                id: "CSES-1648",
                rating: 1600
            },
            {
                name: "Range Update Queries",
                id: "CSES-1651",
                rating: 1600
            },
            {
                name: "Pashmak and Parmida's problem",
                id: "459D",
                rating: 1800
            },
            {
                name: "Ant colony",
                id: "474F",
                rating: 2100
            }
        ]
    },
    'flow': {
        title: "Network Flow",
        videoGuide: "https://www.youtube.com/watch?v=M6cm8UeeziI",
        resources: [],
        cheatSheet: `// Edmonds-Karp with BFS (simplified)
while (bfs()) {
    int path_flow = INF;
    for (v=t; v!=s; v=parent[v]) {
         u = parent[v];
         path_flow = min(path_flow, residual[u][v]);
    }
    for (v=t; v!=s; v=parent[v]) {
         u = parent[v];
         residual[u][v] -= path_flow;
         residual[v][u] += path_flow;
    }
    max_flow += path_flow;
}`,
        problemSet: [
            {
                name: "Download Speed",
                id: "CSES-1694",
                rating: 2200
            },
            {
                name: "Police Chase",
                id: "CSES-1695",
                rating: 2200
            },
            {
                name: "School Dance",
                id: "CSES-1696",
                rating: 2200
            },
            {
                name: "Distinct Routes",
                id: "CSES-1711",
                rating: 2300
            }
        ]
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/features/skill-tree/TopicModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TopicModal",
    ()=>TopicModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/youtube.js [app-client] (ecmascript) <export default as Youtube>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Book$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book.js [app-client] (ecmascript) <export default as Book>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-play.js [app-client] (ecmascript) <export default as PlayCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)"); // Assuming generic utility exists, else standard string concat
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function TopicModal({ isOpen, onClose, data }) {
    _s();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('learn');
    if (!data) return null;
    // Helper to extract YouTube ID if needed or just use link
    // Assuming videoGuide is a full URL.
    const getVideoId = (url)=>{
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return match && match[2].length === 11 ? match[2] : null;
    };
    const videoId = getVideoId(data.videoGuide);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                className: "fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                    onClick: (e)=>e.stopPropagation(),
                    className: "bg-zinc-950 border border-zinc-800 w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between p-6 border-b border-zinc-800 bg-zinc-900/50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold text-white mb-1",
                                            children: data.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                                            lineNumber: 51,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] uppercase font-bold tracking-wider text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded",
                                                    children: "Topic Hub"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] uppercase font-bold tracking-wider text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded",
                                                    children: [
                                                        data.problemSet.length,
                                                        " Problems"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                                            lineNumber: 52,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                                    lineNumber: 50,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "p-2 hover:bg-zinc-800 rounded-full transition text-zinc-400 hover:text-white",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                                        lineNumber: 58,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                                    lineNumber: 57,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                            lineNumber: 49,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex border-b border-zinc-800 bg-zinc-950",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setTab('learn'),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 py-3 text-sm font-medium border-b-2 transition-colors flex items-center justify-center gap-2", tab === 'learn' ? "border-blue-500 text-blue-400 bg-blue-500/5" : "border-transparent text-zinc-500 hover:text-zinc-300"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__["Youtube"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                                            lineNumber: 68,
                                            columnNumber: 37
                                        }, this),
                                        " Learn"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                                    lineNumber: 64,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setTab('practice'),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 py-3 text-sm font-medium border-b-2 transition-colors flex items-center justify-center gap-2", tab === 'practice' ? "border-green-500 text-green-400 bg-green-500/5" : "border-transparent text-zinc-500 hover:text-zinc-300"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__["PlayCircle"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                                            lineNumber: 74,
                                            columnNumber: 37
                                        }, this),
                                        " Practice"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                                    lineNumber: 70,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setTab('cheatsheet'),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 py-3 text-sm font-medium border-b-2 transition-colors flex items-center justify-center gap-2", tab === 'cheatsheet' ? "border-purple-500 text-purple-400 bg-purple-500/5" : "border-transparent text-zinc-500 hover:text-zinc-300"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                                            lineNumber: 80,
                                            columnNumber: 37
                                        }, this),
                                        " Cheatsheet"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                                    lineNumber: 76,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                            lineNumber: 63,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 overflow-y-auto custom-scrollbar flex-1 bg-zinc-950",
                            children: [
                                tab === 'learn' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "aspect-video w-full bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 relative group",
                                            children: videoId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                                width: "100%",
                                                height: "100%",
                                                src: `https://www.youtube.com/embed/${videoId}`,
                                                title: "YouTube video player",
                                                frameBorder: "0",
                                                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                                allowFullScreen: true
                                            }, void 0, false, {
                                                fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                                                lineNumber: 91,
                                                columnNumber: 49
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-center h-full text-zinc-500",
                                                children: "Video not available"
                                            }, void 0, false, {
                                                fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                                                lineNumber: 101,
                                                columnNumber: 49
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                                            lineNumber: 89,
                                            columnNumber: 41
                                        }, this),
                                        data.resources.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-sm font-bold text-zinc-300 mb-3 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Book$3e$__["Book"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                                                            lineNumber: 108,
                                                            columnNumber: 126
                                                        }, this),
                                                        " Recommended Reading"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 49
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: data.resources.map((res, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: res.url,
                                                            target: "_blank",
                                                            className: "block p-3 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-900 hover:border-zinc-700 transition group",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm text-blue-400 group-hover:underline",
                                                                        children: res.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                                                                        lineNumber: 118,
                                                                        columnNumber: 65
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                        size: 14,
                                                                        className: "text-zinc-600 group-hover:text-zinc-400"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                                                                        lineNumber: 119,
                                                                        columnNumber: 65
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                                                                lineNumber: 117,
                                                                columnNumber: 61
                                                            }, this)
                                                        }, i, false, {
                                                            fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                                                            lineNumber: 111,
                                                            columnNumber: 57
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 49
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                                            lineNumber: 107,
                                            columnNumber: 45
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                                    lineNumber: 87,
                                    columnNumber: 37
                                }, this),
                                tab === 'practice' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-zinc-400 mb-2",
                                            children: "Solve these problems to gain XP for this skill."
                                        }, void 0, false, {
                                            fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                                            lineNumber: 131,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-2",
                                            children: data.problemSet.map((prob)=>{
                                                const link = prob.id.includes("CSES") ? `https://cses.fi/problemset/task/${prob.id.split('-')[1]}` : `https://codeforces.com/problemset/problem/${prob.id.replace(/\D/g, '')}/${prob.id.replace(/\d/g, '')}`;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between p-4 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-green-500/30 transition group relative overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative z-10",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-mono text-zinc-500 text-xs",
                                                                            children: prob.id
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                                                                            lineNumber: 144,
                                                                            columnNumber: 65
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-bold text-zinc-200 group-hover:text-green-400 transition",
                                                                            children: prob.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                                                                            lineNumber: 145,
                                                                            columnNumber: 65
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                                                                    lineNumber: 143,
                                                                    columnNumber: 61
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 mt-1",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400",
                                                                        children: [
                                                                            "Rating: ",
                                                                            prob.rating
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                                                                        lineNumber: 148,
                                                                        columnNumber: 65
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                                                                    lineNumber: 147,
                                                                    columnNumber: 61
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 57
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: link,
                                                            target: "_blank",
                                                            className: "relative z-10 p-2 bg-green-500/10 text-green-500 rounded-lg hover:bg-green-500 hover:text-black transition",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                                                                lineNumber: 156,
                                                                columnNumber: 61
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                                                            lineNumber: 151,
                                                            columnNumber: 57
                                                        }, this)
                                                    ]
                                                }, prob.id, true, {
                                                    fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 53
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                                            lineNumber: 134,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                                    lineNumber: 130,
                                    columnNumber: 37
                                }, this),
                                tab === 'cheatsheet' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-4 right-4 z-10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>navigator.clipboard.writeText(data.cheatSheet),
                                                className: "text-xs bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-1.5 rounded-lg border border-zinc-700 shadow-xl transition opacity-0 group-hover:opacity-100",
                                                children: "Copy Snippet"
                                            }, void 0, false, {
                                                fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                                                lineNumber: 168,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                                            lineNumber: 167,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                            className: "p-4 rounded-xl bg-[#0d1117] border border-zinc-800 overflow-x-auto text-sm font-mono text-zinc-300 leading-relaxed shadow-inner",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                children: data.cheatSheet
                                            }, void 0, false, {
                                                fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                                                lineNumber: 176,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                                            lineNumber: 175,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-zinc-500 mt-4 text-center",
                                            children: "Pro Tip: Memorize the logic, not just the code."
                                        }, void 0, false, {
                                            fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                                            lineNumber: 178,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                                    lineNumber: 166,
                                    columnNumber: 37
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                            lineNumber: 85,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                    lineNumber: 41,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
                lineNumber: 33,
                columnNumber: 21
            }, this)
        }, void 0, false)
    }, void 0, false, {
        fileName: "[project]/components/features/skill-tree/TopicModal.tsx",
        lineNumber: 29,
        columnNumber: 9
    }, this);
}
_s(TopicModal, "RPtKdtN9VI6GLg7GKzWP+J8jCgI=");
_c = TopicModal;
var _c;
__turbopack_context__.k.register(_c, "TopicModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/data:7bd314 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getUserSkills",
    ()=>$$RSC_SERVER_ACTION_11
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"407533944573458631de7650fc106143fd9f7a2e61":"getUserSkills"},"app/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("407533944573458631de7650fc106143fd9f7a2e61", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getUserSkills");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcclxuaW1wb3J0IHsgZ2V0Q0ZVc2VyLCBnZXRVc2VyU3VibWlzc2lvbnMgfSBmcm9tICdAL2xpYi9jb2RlZm9yY2VzJztcclxuXHJcbmNvbnN0IEFQSV9CQVNFID0gXCJodHRwczovL2NvZGVmb3JjZXMuY29tL2FwaVwiO1xyXG5cclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9saWIvZGInO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZlcmlmeVVzZXIoaGFuZGxlOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRDRlVzZXIoaGFuZGxlKTtcclxuICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgLy8gU3luYyB3aXRoIERCXHJcbiAgICAgICAgYXdhaXQgcHJpc21hLnVzZXIudXBzZXJ0KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaGFuZGxlOiB1c2VyLmhhbmRsZSB9LFxyXG4gICAgICAgICAgICB1cGRhdGU6IHtcclxuICAgICAgICAgICAgICAgIHJhdGluZzogdXNlci5yYXRpbmcgfHwgMCxcclxuICAgICAgICAgICAgICAgIHJhbms6IHVzZXIucmFuayB8fCBcInVucmF0ZWRcIixcclxuICAgICAgICAgICAgICAgIGF2YXRhclVybDogdXNlci50aXRsZVBob3RvLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjcmVhdGU6IHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZTogdXNlci5oYW5kbGUsXHJcbiAgICAgICAgICAgICAgICByYXRpbmc6IHVzZXIucmF0aW5nIHx8IDAsXHJcbiAgICAgICAgICAgICAgICByYW5rOiB1c2VyLnJhbmsgfHwgXCJ1bnJhdGVkXCIsXHJcbiAgICAgICAgICAgICAgICBhdmF0YXJVcmw6IHVzZXIudGl0bGVQaG90byxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVzZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzeW5jVXNlclN0YXRzKGhhbmRsZTogc3RyaW5nLCBzdGF0czogeyBjdXJyZW50U3RyZWFrOiBudW1iZXI7IHRvdGFsU29sdmVkOiBudW1iZXI7IG1heFJhdGluZzogbnVtYmVyOyBsYXN0QWN0aXZlOiBEYXRlIH0pIHtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaGFuZGxlIH0gfSk7XHJcbiAgICBpZiAoIXVzZXIpIHJldHVybjtcclxuXHJcbiAgICBhd2FpdCBwcmlzbWEudXNlclN0YXRzLnVwc2VydCh7XHJcbiAgICAgICAgd2hlcmU6IHsgdXNlcklkOiB1c2VyLmlkIH0sXHJcbiAgICAgICAgdXBkYXRlOiB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTdHJlYWs6IHN0YXRzLmN1cnJlbnRTdHJlYWssXHJcbiAgICAgICAgICAgIHRvdGFsU29sdmVkOiBzdGF0cy50b3RhbFNvbHZlZCxcclxuICAgICAgICAgICAgbWF4UmF0aW5nOiBzdGF0cy5tYXhSYXRpbmcsXHJcbiAgICAgICAgICAgIGxhc3RBY3RpdmU6IHN0YXRzLmxhc3RBY3RpdmVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZToge1xyXG4gICAgICAgICAgICB1c2VySWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgICAgIGN1cnJlbnRTdHJlYWs6IHN0YXRzLmN1cnJlbnRTdHJlYWssXHJcbiAgICAgICAgICAgIHRvdGFsU29sdmVkOiBzdGF0cy50b3RhbFNvbHZlZCxcclxuICAgICAgICAgICAgbWF4UmF0aW5nOiBzdGF0cy5tYXhSYXRpbmcsXHJcbiAgICAgICAgICAgIGxhc3RBY3RpdmU6IHN0YXRzLmxhc3RBY3RpdmVcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN1Ym1pc3Npb25zKGhhbmRsZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gYXdhaXQgZ2V0VXNlclN1Ym1pc3Npb25zKGhhbmRsZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9ibGVtc0J5UmF0aW5nKHJhdGluZzogbnVtYmVyLCB0YWc6IHN0cmluZyA9IFwiXCIpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gdGFnXHJcbiAgICAgICAgICAgID8gYCR7QVBJX0JBU0V9L3Byb2JsZW1zZXQucHJvYmxlbXM/dGFncz0ke3RhZ31gXHJcbiAgICAgICAgICAgIDogYCR7QVBJX0JBU0V9L3Byb2JsZW1zZXQucHJvYmxlbXNgO1xyXG5cclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbmV4dDogeyByZXZhbGlkYXRlOiAzNjAwIH0gfSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAgIGlmIChkYXRhLnN0YXR1cyAhPT0gXCJPS1wiKSByZXR1cm4gW107XHJcblxyXG4gICAgICAgIC8vIEZpbHRlciBieSByYXRpbmcgYW5kIGVuc3VyZSB3ZSBkb24ndCBnZXQgZ3ltIHByb2JsZW1zIGlmIHBvc3NpYmxlICh1c3VhbGx5IGluZGV4IGlzIG51bWVyaWMtaXNoKVxyXG4gICAgICAgIGNvbnN0IHByb2JsZW1zID0gZGF0YS5yZXN1bHQucHJvYmxlbXMuZmlsdGVyKChwOiBhbnkpID0+IHAucmF0aW5nID09PSByYXRpbmcpO1xyXG4gICAgICAgIHJldHVybiBwcm9ibGVtcy5zbGljZSgwLCA1MCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29udGVzdHMoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFfS9jb250ZXN0Lmxpc3RgLCB7IG5leHQ6IHsgcmV2YWxpZGF0ZTogMzYwMCB9IH0pO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIGlmIChkYXRhLnN0YXR1cyAhPT0gXCJPS1wiKSByZXR1cm4gW107XHJcblxyXG4gICAgICAgIC8vIEZpbHRlciBmb3IgRGl2LiAzIGFuZCBEaXYuIDQgY29udGVzdHMgdGhhdCBhcmUgRklOSVNIRURcclxuICAgICAgICByZXR1cm4gZGF0YS5yZXN1bHRcclxuICAgICAgICAgICAgLmZpbHRlcigoYzogYW55KSA9PiBjLnBoYXNlID09PSAnRklOSVNIRUQnICYmIChjLm5hbWUuaW5jbHVkZXMoXCJEaXYuIDNcIikgfHwgYy5uYW1lLmluY2x1ZGVzKFwiRGl2LiA0XCIpKSlcclxuICAgICAgICAgICAgLnNsaWNlKDAsIDIwKTsgLy8gUmV0dXJuIHRvcCAyMCByZWNlbnQgb25lc1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8g8J+Vte+4jyBTdGFsa2VyIE1vZGUgKFJpdmFscnkgVHJhY2tlcilcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRQaW5uZWRSaXZhbChoYW5kbGU6IHN0cmluZywgcml2YWxIYW5kbGU6IHN0cmluZykge1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBoYW5kbGUgfSB9KTtcclxuICAgIGlmICghdXNlcikgcmV0dXJuIHsgZXJyb3I6IFwiVXNlciBub3QgZm91bmQuIFBsZWFzZSByZWZyZXNoLlwiIH07XHJcblxyXG4gICAgLy8gMS4gVmFsaWRhdGUgUml2YWwgZXhpc3RzXHJcbiAgICBjb25zdCByaXZhbEluZm8gPSBhd2FpdCBnZXRDRlVzZXIocml2YWxIYW5kbGUpO1xyXG4gICAgaWYgKCFyaXZhbEluZm8pIHtcclxuICAgICAgICByZXR1cm4geyBlcnJvcjogYFVzZXIgJyR7cml2YWxIYW5kbGV9JyBub3QgZm91bmQgb24gQ29kZWZvcmNlcy5gIH07XHJcbiAgICB9XHJcbiAgICBjb25zdCByZWFsUml2YWxIYW5kbGUgPSByaXZhbEluZm8uaGFuZGxlOyAvLyBVc2Ugb2ZmaWNpYWwgY2FzaW5nXHJcblxyXG4gICAgaWYgKHJlYWxSaXZhbEhhbmRsZS50b0xvd2VyQ2FzZSgpID09PSBoYW5kbGUudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgIHJldHVybiB7IGVycm9yOiBcIllvdSBjYW5ub3QgcGluIHlvdXJzZWxmLlwiIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gMi4gTGltaXQgdG8gMyByaXZhbHNcclxuICAgIGNvbnN0IGNvdW50ID0gYXdhaXQgcHJpc21hLnBpbm5lZFJpdmFsLmNvdW50KHsgd2hlcmU6IHsgdXNlcklkOiB1c2VyLmlkIH0gfSk7XHJcbiAgICBpZiAoY291bnQgPj0gMykgcmV0dXJuIHsgZXJyb3I6IFwiTWF4IDMgcml2YWxzIGFsbG93ZWQuIFVucGluIHNvbWVvbmUgZmlyc3QuXCIgfTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IHByaXNtYS5waW5uZWRSaXZhbC5jcmVhdGUoe1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgICAgICAgICByaXZhbEhhbmRsZTogcmVhbFJpdmFsSGFuZGxlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgICByZXR1cm4geyBlcnJvcjogXCJBbHJlYWR5IHBpbm5lZFwiIH07IC8vIFByaXNtYSB1bmlxdWUgY29uc3RyYWludFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Uml2YWxzKGhhbmRsZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGhhbmRsZSB9LCBpbmNsdWRlOiB7IHBpbm5lZFJpdmFsczogdHJ1ZSB9IH0pO1xyXG4gICAgaWYgKCF1c2VyKSByZXR1cm4gW107XHJcblxyXG4gICAgY29uc3Qgcml2YWxzID0gdXNlci5waW5uZWRSaXZhbHMubWFwKHIgPT4gci5yaXZhbEhhbmRsZSk7XHJcbiAgICBpZiAocml2YWxzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIFtdO1xyXG5cclxuICAgIC8vIEZldGNoIGxpdmUgZGF0YSBmcm9tIENGIGZvciBhbGwgcml2YWxzXHJcbiAgICBjb25zdCBwcm9taXNlcyA9IHJpdmFscy5tYXAoYXN5bmMgKGgpID0+IHtcclxuICAgICAgICBjb25zdCBpbmZvID0gYXdhaXQgZ2V0Q0ZVc2VyKGgpO1xyXG4gICAgICAgIHJldHVybiBpbmZvIHx8IHsgaGFuZGxlOiBoLCByYXRpbmc6IDAsIHJhbms6ICd1bnJhdGVkJyB9OyAvLyBGYWxsYmFja1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxufVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbW92ZVBpbm5lZFJpdmFsKGhhbmRsZTogc3RyaW5nLCByaXZhbEhhbmRsZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGhhbmRsZSB9IH0pO1xyXG4gICAgaWYgKCF1c2VyKSByZXR1cm4geyBlcnJvcjogXCJVc2VyIG5vdCBmb3VuZFwiIH07XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBwcmlzbWEucGlubmVkUml2YWwuZGVsZXRlTWFueSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgICAgICAgICByaXZhbEhhbmRsZTogcml2YWxIYW5kbGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHVucGluXCIsIGUpO1xyXG4gICAgICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byByZW1vdmUgcml2YWxcIiB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VhcmNoUHJvYmxlbXMocXVlcnk6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZiAocXVlcnkubGVuZ3RoIDwgMikgcmV0dXJuIFtdO1xyXG5cclxuICAgICAgICAvLyBGZXRjaCB1c2VyIHBlcm1pc3Npb25zL3Byb2JsZW1zZXQgKHVzaW5nIHB1YmxpYyBBUEkgZm9yIG5vdylcclxuICAgICAgICAvLyBXZSdsbCB0cnVzdCB0aGUgcHJvYmxlbXNldC5wcm9ibGVtcyBlbmRwb2ludCB0byBiZSBjYWNoZWQgYnkgTmV4dC5qc1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFfS9wcm9ibGVtc2V0LnByb2JsZW1zYCwgeyBuZXh0OiB7IHJldmFsaWRhdGU6IDM2MDAgfSB9KTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICBpZiAoZGF0YS5zdGF0dXMgIT09IFwiT0tcIikgcmV0dXJuIFtdO1xyXG5cclxuICAgICAgICBjb25zdCBxID0gcXVlcnkudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgLy8gU2VhcmNoIGJ5IElEIChlLmcuIFwiNEFcIikgb3IgTmFtZSAoZS5nLiBcIldhdGVybWVsb25cIilcclxuICAgICAgICBjb25zdCBtYXRjaGVzID0gZGF0YS5yZXN1bHQucHJvYmxlbXNcclxuICAgICAgICAgICAgLmZpbHRlcigocDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGAke3AuY29udGVzdElkfSR7cC5pbmRleH1gLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gcC5uYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaWQuaW5jbHVkZXMocSkgfHwgbmFtZS5pbmNsdWRlcyhxKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnNsaWNlKDAsIDEwKSAvLyBMaW1pdCB0byAxMCByZXN1bHRzXHJcbiAgICAgICAgICAgIC5tYXAoKHA6IGFueSkgPT4gKHtcclxuICAgICAgICAgICAgICAgIGlkOiBgJHtwLmNvbnRlc3RJZH0ke3AuaW5kZXh9YCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IHAubmFtZSxcclxuICAgICAgICAgICAgICAgIHJhdGluZzogcC5yYXRpbmdcclxuICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICByZXR1cm4gbWF0Y2hlcztcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRUb1Jldmlld1F1ZXVlKGhhbmRsZTogc3RyaW5nLCBwcm9ibGVtOiB7IGlkOiBzdHJpbmc7IG5hbWU6IHN0cmluZyB9KSB7XHJcbiAgICBjb25zb2xlLmxvZyhgW0ZsYXNoYmFja10gQWRkaW5nICR7cHJvYmxlbS5pZH0gZm9yICR7aGFuZGxlfWApO1xyXG5cclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaGFuZGxlIH0gfSk7XHJcblxyXG4gICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiVXNlciBub3QgZm91bmQuIFBsZWFzZSBzeW5jIGRhc2hib2FyZC5cIiB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIGlmIGFscmVhZHkgZXhpc3RzICh1c2luZyBmaW5kRmlyc3QgdG8gYXZvaWQgdW5pcXVlIGNvbnN0cmFpbnQgdHlwZSBpc3N1ZXMgaWYgY2xpZW50IGRpZG4ndCByZWdlbilcclxuICAgIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgcHJpc21hLnJldmlld1F1ZXVlLmZpbmRGaXJzdCh7XHJcbiAgICAgICAgd2hlcmU6IHsgdXNlcklkOiB1c2VyLmlkLCBwcm9ibGVtSWQ6IHByb2JsZW0uaWQgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGV4aXN0aW5nKSB7XHJcbiAgICAgICAgYXdhaXQgcHJpc21hLnJldmlld1F1ZXVlLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBleGlzdGluZy5pZCB9LFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBuZXh0UmV2aWV3RGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogJ3Jldmlld2luZydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiUmV2aWV3IHJlc2NoZWR1bGVkIHRvIG5vd1wiIH07XHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgcHJpc21hLnJldmlld1F1ZXVlLmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICB1c2VySWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgICAgIHByb2JsZW1JZDogcHJvYmxlbS5pZCxcclxuICAgICAgICAgICAgcHJvYmxlbU5hbWU6IHByb2JsZW0ubmFtZSxcclxuICAgICAgICAgICAgc3RhdHVzOiBcImxlYXJuaW5nXCJcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIPCfjLMgUlBHIFNraWxsIFRyZWUgQWN0aW9uc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlZWRTa2lsbHMoKSB7XHJcbiAgICAvLyBCYXNpYyBDUCBIaWVyYXJjaHlcclxuICAgIGNvbnN0IHNraWxscyA9IFtcclxuICAgICAgICB7IG5hbWU6IFwiVGltZSBDb21wbGV4aXR5XCIsIHNsdWc6IFwiY29tcGxleGl0eVwiLCB0aWVyOiAxLCBkZXA6IFtdIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcIkJhc2ljIE1hdGhcIiwgc2x1ZzogXCJtYXRoXCIsIHRpZXI6IDEsIGRlcDogW10gfSxcclxuICAgICAgICB7IG5hbWU6IFwiQXJyYXlzICYgU3RyaW5nc1wiLCBzbHVnOiBcImFycmF5c1wiLCB0aWVyOiAxLCBkZXA6IFtdIH0sXHJcblxyXG4gICAgICAgIHsgbmFtZTogXCJOdW1iZXIgVGhlb3J5XCIsIHNsdWc6IFwibnVtYmVyLXRoZW9yeVwiLCB0aWVyOiAyLCBkZXA6IFtcIm1hdGhcIl0gfSxcclxuICAgICAgICB7IG5hbWU6IFwiQmluYXJ5IFNlYXJjaFwiLCBzbHVnOiBcImJpbmFyeS1zZWFyY2hcIiwgdGllcjogMiwgZGVwOiBbXCJjb21wbGV4aXR5XCIsIFwiYXJyYXlzXCJdIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcIlR3byBQb2ludGVyc1wiLCBzbHVnOiBcInR3by1wb2ludGVyc1wiLCB0aWVyOiAyLCBkZXA6IFtcImFycmF5c1wiXSB9LFxyXG5cclxuICAgICAgICB7IG5hbWU6IFwiU29ydGluZyAmIEdyZWVkeVwiLCBzbHVnOiBcImdyZWVkeVwiLCB0aWVyOiAyLCBkZXA6IFtcImFycmF5c1wiLCBcImNvbXBsZXhpdHlcIl0gfSxcclxuICAgICAgICB7IG5hbWU6IFwiUmVjdXJzaW9uXCIsIHNsdWc6IFwicmVjdXJzaW9uXCIsIHRpZXI6IDIsIGRlcDogW1wiY29tcGxleGl0eVwiXSB9LFxyXG5cclxuICAgICAgICB7IG5hbWU6IFwiRHluYW1pYyBQcm9ncmFtbWluZ1wiLCBzbHVnOiBcImRwXCIsIHRpZXI6IDMsIGRlcDogW1wicmVjdXJzaW9uXCJdIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcIkdyYXBoIFRoZW9yeVwiLCBzbHVnOiBcImdyYXBoc1wiLCB0aWVyOiAzLCBkZXA6IFtcInJlY3Vyc2lvblwiLCBcImFycmF5c1wiXSB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJUcmVlc1wiLCBzbHVnOiBcInRyZWVzXCIsIHRpZXI6IDMsIGRlcDogW1wiZ3JhcGhzXCJdIH0sXHJcblxyXG4gICAgICAgIHsgbmFtZTogXCJTZWdtZW50IFRyZWVzXCIsIHNsdWc6IFwic2VndHJlZVwiLCB0aWVyOiA0LCBkZXA6IFtcInRyZWVzXCIsIFwiYmluYXJ5LXNlYXJjaFwiXSB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJOZXR3b3JrIEZsb3dcIiwgc2x1ZzogXCJmbG93XCIsIHRpZXI6IDQsIGRlcDogW1wiZ3JhcGhzXCJdIH0sXHJcbiAgICBdO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBzIG9mIHNraWxscykge1xyXG4gICAgICAgICAgICAvLyBVcHNlcnQgU2tpbGxcclxuICAgICAgICAgICAgY29uc3Qgc2tpbGwgPSBhd2FpdCBwcmlzbWEuc2tpbGwudXBzZXJ0KHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IHNsdWc6IHMuc2x1ZyB9LFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlOiB7fSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZTogeyBuYW1lOiBzLm5hbWUsIHNsdWc6IHMuc2x1ZywgdGllcjogcy50aWVyIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBIYW5kbGUgRGVwZW5kZW5jaWVzXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZGVwU2x1ZyBvZiBzLmRlcCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gYXdhaXQgcHJpc21hLnNraWxsLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBzbHVnOiBkZXBTbHVnIH0gfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgbGluayBleGlzdHNcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBleGlzdHMgPSBhd2FpdCBwcmlzbWEuc2tpbGxEZXBlbmRlbmN5LmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBza2lsbElkX3ByZXJlcXVpc2l0ZUlkOiB7IHNraWxsSWQ6IHNraWxsLmlkLCBwcmVyZXF1aXNpdGVJZDogcGFyZW50LmlkIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZXhpc3RzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5za2lsbERlcGVuZGVuY3kuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgc2tpbGxJZDogc2tpbGwuaWQsIHByZXJlcXVpc2l0ZUlkOiBwYXJlbnQuaWQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJTa2lsbCBUcmVlIFNlZWRlZCBTdWNjZXNzZnVsbHlcIiB9O1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJTZWVkaW5nIEVycm9yOlwiLCBlKTtcclxuICAgICAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gc2VlZCBza2lsbHNcIiB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlclNraWxscyhoYW5kbGU6IHN0cmluZykge1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBoYW5kbGUgfSB9KTtcclxuICAgIGlmICghdXNlcikgcmV0dXJuIFtdO1xyXG5cclxuICAgIC8vIEdldCBhbGwgc2tpbGxzIHdpdGggZGVwZW5kZW5jaWVzXHJcbiAgICBjb25zdCBhbGxTa2lsbHMgPSBhd2FpdCBwcmlzbWEuc2tpbGwuZmluZE1hbnkoe1xyXG4gICAgICAgIGluY2x1ZGU6IHsgcHJlcmVxdWlzaXRlczogdHJ1ZSB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBHZXQgdXNlciBwcm9ncmVzc1xyXG4gICAgY29uc3QgdXNlclByb2dyZXNzID0gYXdhaXQgcHJpc21hLnVzZXJTa2lsbC5maW5kTWFueSh7XHJcbiAgICAgICAgd2hlcmU6IHsgdXNlcklkOiB1c2VyLmlkIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE1lcmdlIGxvZ2ljXHJcbiAgICAvLyBBIHNraWxsIGlzIFVOTE9DS0VEIGlmIGFsbCBwcmVyZXF1aXNpdGVzIGFyZSBNQVNURVJFRCAobWFzdGVyeUxldmVsID49IDEwMClcclxuICAgIC8vIE9yIGlmIGl0IGhhcyBubyBwcmVyZXF1aXNpdGVzIChUaWVyIDEpXHJcblxyXG4gICAgcmV0dXJuIGFsbFNraWxscy5tYXAoc2tpbGwgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2dyZXNzID0gdXNlclByb2dyZXNzLmZpbmQodXAgPT4gdXAuc2tpbGxJZCA9PT0gc2tpbGwuaWQpO1xyXG4gICAgICAgIGNvbnN0IG1hc3RlcnkgPSBwcm9ncmVzcyA/IHByb2dyZXNzLm1hc3RlcnlMZXZlbCA6IDA7XHJcblxyXG4gICAgICAgIC8vIGNoZWNrIHVubG9jayBzdGF0dXNcclxuICAgICAgICBsZXQgdW5sb2NrZWQgPSB0cnVlO1xyXG4gICAgICAgIGlmIChza2lsbC5wcmVyZXF1aXNpdGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgcHJlcmVxSWRzID0gc2tpbGwucHJlcmVxdWlzaXRlcy5tYXAocCA9PiBwLnByZXJlcXVpc2l0ZUlkKTtcclxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdXNlciBoYXMgbWFzdGVyZWQgYWxsIHByZXJlcXNcclxuICAgICAgICAgICAgY29uc3QgbWFzdGVyZWRQcmVyZXFzID0gdXNlclByb2dyZXNzLmZpbHRlcih1cCA9PlxyXG4gICAgICAgICAgICAgICAgcHJlcmVxSWRzLmluY2x1ZGVzKHVwLnNraWxsSWQpICYmIHVwLm1hc3RlcnlMZXZlbCA+PSAxMDBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKG1hc3RlcmVkUHJlcmVxcy5sZW5ndGggPCBwcmVyZXFJZHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB1bmxvY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5za2lsbCxcclxuICAgICAgICAgICAgbWFzdGVyeSxcclxuICAgICAgICAgICAgdW5sb2NrZWQ6IHVubG9ja2VkIHx8IHNraWxsLnRpZXIgPT09IDEgLy8gVGllciAxIGFsd2F5cyB1bmxvY2tlZFxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldER1ZUZsYXNoY2FyZHMoaGFuZGxlOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaGFuZGxlIH0gfSk7XHJcbiAgICBpZiAoIXVzZXIpIHJldHVybiBbXTtcclxuXHJcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgcmV0dXJuIGF3YWl0IHByaXNtYS5yZXZpZXdRdWV1ZS5maW5kTWFueSh7XHJcbiAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgdXNlcklkOiB1c2VyLmlkLFxyXG4gICAgICAgICAgICBuZXh0UmV2aWV3RGF0ZTogeyBsdGU6IG5vdyB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcmRlckJ5OiB7IG5leHRSZXZpZXdEYXRlOiAnYXNjJyB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gUXVhbGl0eTogMCAoQmxhY2tvdXQpIHRvIDUgKFBlcmZlY3QpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcm9jZXNzUmV2aWV3KHJlcXVlc3Q6IHsgaWQ6IHN0cmluZzsgcXVhbGl0eTogbnVtYmVyIH0pIHtcclxuICAgIGNvbnN0IGNhcmQgPSBhd2FpdCBwcmlzbWEucmV2aWV3UXVldWUuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGlkOiByZXF1ZXN0LmlkIH0gfSk7XHJcbiAgICBpZiAoIWNhcmQpIHJldHVybjtcclxuXHJcbiAgICBsZXQgeyBlYXNlRmFjdG9yLCBpbnRlcnZhbCwgcmVwZXRpdGlvbnMgfSA9IGNhcmQ7XHJcbiAgICBjb25zdCBxID0gcmVxdWVzdC5xdWFsaXR5O1xyXG5cclxuICAgIC8vIFNNLTIgQWxnb3JpdGhtIChNb2RpZmllZClcclxuICAgIC8vIFF1YWxpdHk6IDAgKEZvcmdvdCkgdG8gNSAoRWFzeSlcclxuICAgIGlmIChxID49IDMpIHtcclxuICAgICAgICBpZiAocmVwZXRpdGlvbnMgPT09IDApIHtcclxuICAgICAgICAgICAgLy8gRmlyc3Qgc3VjY2Vzc2Z1bCByZXZpZXdcclxuICAgICAgICAgICAgLy8gQ29uc3RyYWludDogTWluIDMgZGF5cyBzdGFydCBpZiBnb29kL2Vhc3lcclxuICAgICAgICAgICAgaW50ZXJ2YWwgPSAzO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVwZXRpdGlvbnMgPT09IDEpIHtcclxuICAgICAgICAgICAgaW50ZXJ2YWwgPSA2O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGludGVydmFsID0gTWF0aC5yb3VuZChpbnRlcnZhbCAqIGVhc2VGYWN0b3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVwZXRpdGlvbnMrKztcclxuICAgICAgICAvLyBTdGFuZGFyZCBTTS0yIEVGIHVwZGF0ZVxyXG4gICAgICAgIGVhc2VGYWN0b3IgPSBlYXNlRmFjdG9yICsgKDAuMSAtICg1IC0gcSkgKiAoMC4wOCArICg1IC0gcSkgKiAwLjAyKSk7XHJcbiAgICAgICAgaWYgKGVhc2VGYWN0b3IgPCAxLjMpIGVhc2VGYWN0b3IgPSAxLjM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEZvcmdvdFxyXG4gICAgICAgIHJlcGV0aXRpb25zID0gMDtcclxuICAgICAgICBpbnRlcnZhbCA9IDE7IC8vIFJlc2V0IHRvIDEgZGF5XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbmV4dERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbmV4dERhdGUuc2V0RGF0ZShuZXh0RGF0ZS5nZXREYXRlKCkgKyBpbnRlcnZhbCk7XHJcblxyXG4gICAgYXdhaXQgcHJpc21hLnJldmlld1F1ZXVlLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHJlcXVlc3QuaWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGVhc2VGYWN0b3IsXHJcbiAgICAgICAgICAgIGludGVydmFsLFxyXG4gICAgICAgICAgICByZXBldGl0aW9ucyxcclxuICAgICAgICAgICAgbmV4dFJldmlld0RhdGU6IG5leHREYXRlLFxyXG4gICAgICAgICAgICBsYXN0UmV2aWV3ZWRBdDogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgc3RhdHVzOiBxID49IDQgPyBcIm1hc3RlcmVkXCIgOiBcInJldmlld2luZ1wiXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxGbGFzaGNhcmRzKGhhbmRsZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGhhbmRsZSB9IH0pO1xyXG4gICAgaWYgKCF1c2VyKSByZXR1cm4gW107XHJcblxyXG4gICAgY29uc3QgYWxsID0gYXdhaXQgcHJpc21hLnJldmlld1F1ZXVlLmZpbmRNYW55KHtcclxuICAgICAgICB3aGVyZTogeyB1c2VySWQ6IHVzZXIuaWQgfSxcclxuICAgICAgICBvcmRlckJ5OiB7IG5leHRSZXZpZXdEYXRlOiAnYXNjJyB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gYWxsLm1hcChpdGVtID0+ICh7XHJcbiAgICAgICAgLi4uaXRlbSxcclxuICAgICAgICBpc0R1ZTogbmV3IERhdGUoaXRlbS5uZXh0UmV2aWV3RGF0ZSkgPD0gbmV3IERhdGUoKVxyXG4gICAgfSkpO1xyXG59XHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8g8J+Vte+4jyBTdGFsa2VyIE1vZGUgKFJpdmFscnkpXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Uml2YWxBY3Rpdml0eShoYW5kbGVzOiBzdHJpbmdbXSkge1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xyXG5cclxuICAgIC8vIFNlcXVlbnRpYWwgZmV0Y2hpbmcgdG8gcmVzcGVjdCByYXRlIGxpbWl0cyAoNSByZXEvc2VjKVxyXG4gICAgZm9yIChjb25zdCBoYW5kbGUgb2YgaGFuZGxlcykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2NvZGVmb3JjZXMuY29tL2FwaS91c2VyLnN0YXR1cz9oYW5kbGU9JHtoYW5kbGV9JmZyb209MSZjb3VudD0xMGApO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09PSAnT0snKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goZGF0YS5yZXN1bHQubWFwKChzdWI6IGFueSkgPT4gKHsgLi4uc3ViLCBoYW5kbGUgfSkpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgW1JpdmFsQWN0aXZpdHldIEZhaWxlZCBmb3IgJHtoYW5kbGV9OiAke2RhdGEuY29tbWVudH1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgW1JpdmFsQWN0aXZpdHldIE5ldHdvcmsgZXJyb3IgZm9yICR7aGFuZGxlfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTbWFsbCBkZWxheSBiZXR3ZWVuIHJlcXVlc3RzICgyNTBtcylcclxuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyID0+IHNldFRpbWVvdXQociwgMjUwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWxsU3VicyA9IHJlc3VsdHMuZmxhdCgpO1xyXG4gICAgLy8gU29ydCBieSByZWNlbnQgZmlyc3RcclxuICAgIHJldHVybiBhbGxTdWJzLnNvcnQoKGEsIGIpID0+IGIuY3JlYXRpb25UaW1lU2Vjb25kcyAtIGEuY3JlYXRpb25UaW1lU2Vjb25kcykuc2xpY2UoMCwgMzApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Uml2YWxIaXN0b3J5KGhhbmRsZXM6IHN0cmluZ1tdKSB7XHJcbiAgICBjb25zdCByZXN1bHRzID0gW107XHJcblxyXG4gICAgZm9yIChjb25zdCBoYW5kbGUgb2YgaGFuZGxlcykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2NvZGVmb3JjZXMuY29tL2FwaS91c2VyLnJhdGluZz9oYW5kbGU9JHtoYW5kbGV9YCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT09ICdPSycpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IGhhbmRsZSwgaGlzdG9yeTogZGF0YS5yZXN1bHQgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBoYW5kbGUsIGhpc3Rvcnk6IFtdIH0pOyAvLyBQdXNoIGVtcHR5IHNvIGdyYXBoIGRvZXNuJ3QgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgaGFuZGxlLCBoaXN0b3J5OiBbXSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UociA9PiBzZXRUaW1lb3V0KHIsIDI1MCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHRzO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5T3duZXJzaGlwKGhhbmRsZTogc3RyaW5nLCB0b2tlbjogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIEZldGNoIGZyZXNoIHVzZXIgZGF0YSBmcm9tIENvZGVmb3JjZXNcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9jb2RlZm9yY2VzLmNvbS9hcGkvdXNlci5pbmZvP2hhbmRsZXM9JHtoYW5kbGV9JmNoZWNrSGlzdG9yaWNIYW5kbGVzPWZhbHNlYCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAgIGlmIChkYXRhLnN0YXR1cyA9PT0gJ09LJyAmJiBkYXRhLnJlc3VsdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBkYXRhLnJlc3VsdFswXTtcclxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdG9rZW4gaXMgcHJlc2VudCBpbiBmaXJzdE5hbWUgb3IgbGFzdE5hbWUgKGNhc2UgaW5zZW5zaXRpdmUpXHJcbiAgICAgICAgICAgIGNvbnN0IGZuID0gKHVzZXIuZmlyc3ROYW1lIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBsbiA9ICh1c2VyLmxhc3ROYW1lIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB0ayA9IHRva2VuLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZm4uaW5jbHVkZXModGspIHx8IGxuLmluY2x1ZGVzKHRrKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJWZXJpZmljYXRpb24gZmFpbGVkXCIsIGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZlcmlmeVN1Ym1pc3Npb25BdXRoKGhhbmRsZTogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIEZldGNoIGxhc3QgNSBzdWJtaXNzaW9uc1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2NvZGVmb3JjZXMuY29tL2FwaS91c2VyLnN0YXR1cz9oYW5kbGU9JHtoYW5kbGV9JmZyb209MSZjb3VudD01YCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAgIGlmIChkYXRhLnN0YXR1cyA9PT0gJ09LJyAmJiBkYXRhLnJlc3VsdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIENoZWNrIGZvciBzcGVjaWZpYyBzaWduYWw6XHJcbiAgICAgICAgICAgIC8vIFByb2JsZW06IDRBIChXYXRlcm1lbG9uKVxyXG4gICAgICAgICAgICAvLyBWZXJkaWN0OiBDT01QSUxBVElPTl9FUlJPUiAoRWFzaWVzdCB0byBmb3JjZSBzYWZlbHkpXHJcbiAgICAgICAgICAgIC8vIFRpbWU6IExhc3QgNSBtaW51dGVzXHJcblxyXG4gICAgICAgICAgICBjb25zdCBub3cgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcclxuICAgICAgICAgICAgY29uc3QgdmVyaWZpZWQgPSBkYXRhLnJlc3VsdC5maW5kKChzdWI6IGFueSkgPT5cclxuICAgICAgICAgICAgICAgIHN1Yi5wcm9ibGVtLmNvbnRlc3RJZCA9PT0gNCAmJlxyXG4gICAgICAgICAgICAgICAgc3ViLnByb2JsZW0uaW5kZXggPT09ICdBJyAmJlxyXG4gICAgICAgICAgICAgICAgc3ViLnZlcmRpY3QgPT09ICdDT01QSUxBVElPTl9FUlJPUicgJiZcclxuICAgICAgICAgICAgICAgIChub3cgLSBzdWIuY3JlYXRpb25UaW1lU2Vjb25kcykgPCAzMDAgLy8gNSBtaW5zXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBpZiAodmVyaWZpZWQpIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlN1Ym1pc3Npb24gY2hlY2sgZmFpbGVkXCIsIGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlTWFzaHVwKGhhbmRsZTogc3RyaW5nLCBtaW5SYXRpbmc6IG51bWJlciA9IDgwMCwgbWF4UmF0aW5nOiBudW1iZXIgPSAyMDAwLCBjb3VudDogbnVtYmVyID0gNSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyAxLiBGZXRjaCBVc2VyIFN1Ym1pc3Npb25zIChsYXN0IDUwMClcclxuICAgICAgICBjb25zdCBzdWJSZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9jb2RlZm9yY2VzLmNvbS9hcGkvdXNlci5zdGF0dXM/aGFuZGxlPSR7aGFuZGxlfSZmcm9tPTEmY291bnQ9NTAwYCk7XHJcbiAgICAgICAgY29uc3Qgc3ViRGF0YSA9IGF3YWl0IHN1YlJlcy5qc29uKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHdlYWtUYWdzID0gbmV3IFNldDxzdHJpbmc+KCk7XHJcbiAgICAgICAgaWYgKHN1YkRhdGEuc3RhdHVzID09PSAnT0snKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhZ0ZhaWx1cmVzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0ge307XHJcbiAgICAgICAgICAgIGNvbnN0IHRhZ1RvdGFsOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0ge307XHJcblxyXG4gICAgICAgICAgICAvLyBBbmFseXplIGZhaWx1cmVzXHJcbiAgICAgICAgICAgIHN1YkRhdGEucmVzdWx0LmZvckVhY2goKHM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcy5wcm9ibGVtLnRhZ3MuZm9yRWFjaCgodDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0YWdUb3RhbFt0XSkgeyB0YWdUb3RhbFt0XSA9IDA7IHRhZ0ZhaWx1cmVzW3RdID0gMDsgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRhZ1RvdGFsW3RdKys7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMudmVyZGljdCAhPT0gJ09LJykgdGFnRmFpbHVyZXNbdF0rKztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIElkZW50aWZ5IHdlYWsgdGFncyAoRmFpbHVyZSByYXRlID4gNDAlIGFuZCBhdCBsZWFzdCAzIGF0dGVtcHRzKVxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0YWdUb3RhbCkuZm9yRWFjaCh0ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0YWdUb3RhbFt0XSA+PSAzICYmICh0YWdGYWlsdXJlc1t0XSAvIHRhZ1RvdGFsW3RdKSA+IDAuNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdlYWtUYWdzLmFkZCh0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAyLiBEZXRlcm1pbmUgVGFncyB0byB1c2UgKFdlYWtlc3Qgb3IgUmFuZG9tIFN0YW5kYXJkIG9uZXMgaWYgbm8gd2Vha25lc3MgZm91bmQpXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0VGFncyA9IHdlYWtUYWdzLnNpemUgPiAwID8gQXJyYXkuZnJvbSh3ZWFrVGFncykgOiBbXCJkcFwiLCBcImdyZWVkeVwiLCBcImdyYXBoc1wiLCBcIm1hdGhcIiwgXCJ0cmVlc1wiXTtcclxuXHJcbiAgICAgICAgLy8gMy4gR2VuZXJhdGUgUHJvYmxlbXNcclxuICAgICAgICAvLyBMaW5lYXIgaW50ZXJwb2xhdGlvbiBmb3IgcmF0aW5nc1xyXG4gICAgICAgIGNvbnN0IHJhdGluZ3M6IG51bWJlcltdID0gW107XHJcbiAgICAgICAgaWYgKGNvdW50ID09PSAxKSB7XHJcbiAgICAgICAgICAgIHJhdGluZ3MucHVzaChtaW5SYXRpbmcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0ZXAgPSBNYXRoLmZsb29yKChtYXhSYXRpbmcgLSBtaW5SYXRpbmcpIC8gKGNvdW50IC0gMSkpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHJhdGluZ3MucHVzaChtaW5SYXRpbmcgKyAoc3RlcCAqIGkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcHJvYmxlbXMgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gSGVscGVyIHRvIGZldGNoIHJhbmRvbSBwcm9ibGVtIG9mIHJhdGluZyAmIHRhZ1xyXG4gICAgICAgIGZvciAoY29uc3QgciBvZiByYXRpbmdzKSB7XHJcbiAgICAgICAgICAgIC8vIFJvdW5kIHRvIG5lYXJlc3QgMTAwIGZvciBDRiBBUEkgdXN1YWxseVxyXG4gICAgICAgICAgICBjb25zdCBlZmZlY3RpdmVSYXRpbmcgPSBNYXRoLnJvdW5kKHIgLyAxMDApICogMTAwO1xyXG5cclxuICAgICAgICAgICAgLy8gUGljayBhIHJhbmRvbSB0YWcgZnJvbSB0YXJnZXRUYWdzIGZvciB0aGlzIHNsb3RcclxuICAgICAgICAgICAgY29uc3QgdGFnID0gdGFyZ2V0VGFnc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0YXJnZXRUYWdzLmxlbmd0aCldO1xyXG5cclxuICAgICAgICAgICAgLy8gRmV0Y2ggcG90ZW50aWFsIHByb2JsZW1zIChjYWNoZWQgZW5kcG9pbnQpXHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSBhd2FpdCBnZXRQcm9ibGVtc0J5UmF0aW5nKGVmZmVjdGl2ZVJhdGluZywgdGFnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIFBpY2sgcmFuZG9tXHJcbiAgICAgICAgICAgICAgICBjb25zdCByYW5kb21Qcm9iID0gcFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwLmxlbmd0aCldO1xyXG4gICAgICAgICAgICAgICAgcHJvYmxlbXMucHVzaCh7IC4uLnJhbmRvbVByb2IsIGNob3NlblRhZzogdGFnIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBwcm9ibGVtcywgd2Vha1RhZ3M6IEFycmF5LmZyb20od2Vha1RhZ3MpIH07XHJcblxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNYXNodXAgZ2VuIGZhaWxlZFwiLCBlKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIGdlbmVyYXRlIG1hc2h1cFwiIH07XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJnUkFtU3NCLDRMQUFBIn0=
}),
"[project]/app/data:e6e0b7 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "seedSkills",
    ()=>$$RSC_SERVER_ACTION_10
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"00f96856d535a990beb4540c73d34ca84984f7dd78":"seedSkills"},"app/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("00f96856d535a990beb4540c73d34ca84984f7dd78", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "seedSkills");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcclxuaW1wb3J0IHsgZ2V0Q0ZVc2VyLCBnZXRVc2VyU3VibWlzc2lvbnMgfSBmcm9tICdAL2xpYi9jb2RlZm9yY2VzJztcclxuXHJcbmNvbnN0IEFQSV9CQVNFID0gXCJodHRwczovL2NvZGVmb3JjZXMuY29tL2FwaVwiO1xyXG5cclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9saWIvZGInO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZlcmlmeVVzZXIoaGFuZGxlOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRDRlVzZXIoaGFuZGxlKTtcclxuICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgLy8gU3luYyB3aXRoIERCXHJcbiAgICAgICAgYXdhaXQgcHJpc21hLnVzZXIudXBzZXJ0KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaGFuZGxlOiB1c2VyLmhhbmRsZSB9LFxyXG4gICAgICAgICAgICB1cGRhdGU6IHtcclxuICAgICAgICAgICAgICAgIHJhdGluZzogdXNlci5yYXRpbmcgfHwgMCxcclxuICAgICAgICAgICAgICAgIHJhbms6IHVzZXIucmFuayB8fCBcInVucmF0ZWRcIixcclxuICAgICAgICAgICAgICAgIGF2YXRhclVybDogdXNlci50aXRsZVBob3RvLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjcmVhdGU6IHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZTogdXNlci5oYW5kbGUsXHJcbiAgICAgICAgICAgICAgICByYXRpbmc6IHVzZXIucmF0aW5nIHx8IDAsXHJcbiAgICAgICAgICAgICAgICByYW5rOiB1c2VyLnJhbmsgfHwgXCJ1bnJhdGVkXCIsXHJcbiAgICAgICAgICAgICAgICBhdmF0YXJVcmw6IHVzZXIudGl0bGVQaG90byxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVzZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzeW5jVXNlclN0YXRzKGhhbmRsZTogc3RyaW5nLCBzdGF0czogeyBjdXJyZW50U3RyZWFrOiBudW1iZXI7IHRvdGFsU29sdmVkOiBudW1iZXI7IG1heFJhdGluZzogbnVtYmVyOyBsYXN0QWN0aXZlOiBEYXRlIH0pIHtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaGFuZGxlIH0gfSk7XHJcbiAgICBpZiAoIXVzZXIpIHJldHVybjtcclxuXHJcbiAgICBhd2FpdCBwcmlzbWEudXNlclN0YXRzLnVwc2VydCh7XHJcbiAgICAgICAgd2hlcmU6IHsgdXNlcklkOiB1c2VyLmlkIH0sXHJcbiAgICAgICAgdXBkYXRlOiB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTdHJlYWs6IHN0YXRzLmN1cnJlbnRTdHJlYWssXHJcbiAgICAgICAgICAgIHRvdGFsU29sdmVkOiBzdGF0cy50b3RhbFNvbHZlZCxcclxuICAgICAgICAgICAgbWF4UmF0aW5nOiBzdGF0cy5tYXhSYXRpbmcsXHJcbiAgICAgICAgICAgIGxhc3RBY3RpdmU6IHN0YXRzLmxhc3RBY3RpdmVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZToge1xyXG4gICAgICAgICAgICB1c2VySWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgICAgIGN1cnJlbnRTdHJlYWs6IHN0YXRzLmN1cnJlbnRTdHJlYWssXHJcbiAgICAgICAgICAgIHRvdGFsU29sdmVkOiBzdGF0cy50b3RhbFNvbHZlZCxcclxuICAgICAgICAgICAgbWF4UmF0aW5nOiBzdGF0cy5tYXhSYXRpbmcsXHJcbiAgICAgICAgICAgIGxhc3RBY3RpdmU6IHN0YXRzLmxhc3RBY3RpdmVcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN1Ym1pc3Npb25zKGhhbmRsZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gYXdhaXQgZ2V0VXNlclN1Ym1pc3Npb25zKGhhbmRsZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9ibGVtc0J5UmF0aW5nKHJhdGluZzogbnVtYmVyLCB0YWc6IHN0cmluZyA9IFwiXCIpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gdGFnXHJcbiAgICAgICAgICAgID8gYCR7QVBJX0JBU0V9L3Byb2JsZW1zZXQucHJvYmxlbXM/dGFncz0ke3RhZ31gXHJcbiAgICAgICAgICAgIDogYCR7QVBJX0JBU0V9L3Byb2JsZW1zZXQucHJvYmxlbXNgO1xyXG5cclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbmV4dDogeyByZXZhbGlkYXRlOiAzNjAwIH0gfSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAgIGlmIChkYXRhLnN0YXR1cyAhPT0gXCJPS1wiKSByZXR1cm4gW107XHJcblxyXG4gICAgICAgIC8vIEZpbHRlciBieSByYXRpbmcgYW5kIGVuc3VyZSB3ZSBkb24ndCBnZXQgZ3ltIHByb2JsZW1zIGlmIHBvc3NpYmxlICh1c3VhbGx5IGluZGV4IGlzIG51bWVyaWMtaXNoKVxyXG4gICAgICAgIGNvbnN0IHByb2JsZW1zID0gZGF0YS5yZXN1bHQucHJvYmxlbXMuZmlsdGVyKChwOiBhbnkpID0+IHAucmF0aW5nID09PSByYXRpbmcpO1xyXG4gICAgICAgIHJldHVybiBwcm9ibGVtcy5zbGljZSgwLCA1MCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29udGVzdHMoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFfS9jb250ZXN0Lmxpc3RgLCB7IG5leHQ6IHsgcmV2YWxpZGF0ZTogMzYwMCB9IH0pO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIGlmIChkYXRhLnN0YXR1cyAhPT0gXCJPS1wiKSByZXR1cm4gW107XHJcblxyXG4gICAgICAgIC8vIEZpbHRlciBmb3IgRGl2LiAzIGFuZCBEaXYuIDQgY29udGVzdHMgdGhhdCBhcmUgRklOSVNIRURcclxuICAgICAgICByZXR1cm4gZGF0YS5yZXN1bHRcclxuICAgICAgICAgICAgLmZpbHRlcigoYzogYW55KSA9PiBjLnBoYXNlID09PSAnRklOSVNIRUQnICYmIChjLm5hbWUuaW5jbHVkZXMoXCJEaXYuIDNcIikgfHwgYy5uYW1lLmluY2x1ZGVzKFwiRGl2LiA0XCIpKSlcclxuICAgICAgICAgICAgLnNsaWNlKDAsIDIwKTsgLy8gUmV0dXJuIHRvcCAyMCByZWNlbnQgb25lc1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8g8J+Vte+4jyBTdGFsa2VyIE1vZGUgKFJpdmFscnkgVHJhY2tlcilcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRQaW5uZWRSaXZhbChoYW5kbGU6IHN0cmluZywgcml2YWxIYW5kbGU6IHN0cmluZykge1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBoYW5kbGUgfSB9KTtcclxuICAgIGlmICghdXNlcikgcmV0dXJuIHsgZXJyb3I6IFwiVXNlciBub3QgZm91bmQuIFBsZWFzZSByZWZyZXNoLlwiIH07XHJcblxyXG4gICAgLy8gMS4gVmFsaWRhdGUgUml2YWwgZXhpc3RzXHJcbiAgICBjb25zdCByaXZhbEluZm8gPSBhd2FpdCBnZXRDRlVzZXIocml2YWxIYW5kbGUpO1xyXG4gICAgaWYgKCFyaXZhbEluZm8pIHtcclxuICAgICAgICByZXR1cm4geyBlcnJvcjogYFVzZXIgJyR7cml2YWxIYW5kbGV9JyBub3QgZm91bmQgb24gQ29kZWZvcmNlcy5gIH07XHJcbiAgICB9XHJcbiAgICBjb25zdCByZWFsUml2YWxIYW5kbGUgPSByaXZhbEluZm8uaGFuZGxlOyAvLyBVc2Ugb2ZmaWNpYWwgY2FzaW5nXHJcblxyXG4gICAgaWYgKHJlYWxSaXZhbEhhbmRsZS50b0xvd2VyQ2FzZSgpID09PSBoYW5kbGUudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgIHJldHVybiB7IGVycm9yOiBcIllvdSBjYW5ub3QgcGluIHlvdXJzZWxmLlwiIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gMi4gTGltaXQgdG8gMyByaXZhbHNcclxuICAgIGNvbnN0IGNvdW50ID0gYXdhaXQgcHJpc21hLnBpbm5lZFJpdmFsLmNvdW50KHsgd2hlcmU6IHsgdXNlcklkOiB1c2VyLmlkIH0gfSk7XHJcbiAgICBpZiAoY291bnQgPj0gMykgcmV0dXJuIHsgZXJyb3I6IFwiTWF4IDMgcml2YWxzIGFsbG93ZWQuIFVucGluIHNvbWVvbmUgZmlyc3QuXCIgfTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IHByaXNtYS5waW5uZWRSaXZhbC5jcmVhdGUoe1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgICAgICAgICByaXZhbEhhbmRsZTogcmVhbFJpdmFsSGFuZGxlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgICByZXR1cm4geyBlcnJvcjogXCJBbHJlYWR5IHBpbm5lZFwiIH07IC8vIFByaXNtYSB1bmlxdWUgY29uc3RyYWludFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Uml2YWxzKGhhbmRsZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGhhbmRsZSB9LCBpbmNsdWRlOiB7IHBpbm5lZFJpdmFsczogdHJ1ZSB9IH0pO1xyXG4gICAgaWYgKCF1c2VyKSByZXR1cm4gW107XHJcblxyXG4gICAgY29uc3Qgcml2YWxzID0gdXNlci5waW5uZWRSaXZhbHMubWFwKHIgPT4gci5yaXZhbEhhbmRsZSk7XHJcbiAgICBpZiAocml2YWxzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIFtdO1xyXG5cclxuICAgIC8vIEZldGNoIGxpdmUgZGF0YSBmcm9tIENGIGZvciBhbGwgcml2YWxzXHJcbiAgICBjb25zdCBwcm9taXNlcyA9IHJpdmFscy5tYXAoYXN5bmMgKGgpID0+IHtcclxuICAgICAgICBjb25zdCBpbmZvID0gYXdhaXQgZ2V0Q0ZVc2VyKGgpO1xyXG4gICAgICAgIHJldHVybiBpbmZvIHx8IHsgaGFuZGxlOiBoLCByYXRpbmc6IDAsIHJhbms6ICd1bnJhdGVkJyB9OyAvLyBGYWxsYmFja1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxufVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbW92ZVBpbm5lZFJpdmFsKGhhbmRsZTogc3RyaW5nLCByaXZhbEhhbmRsZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGhhbmRsZSB9IH0pO1xyXG4gICAgaWYgKCF1c2VyKSByZXR1cm4geyBlcnJvcjogXCJVc2VyIG5vdCBmb3VuZFwiIH07XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBwcmlzbWEucGlubmVkUml2YWwuZGVsZXRlTWFueSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgICAgICAgICByaXZhbEhhbmRsZTogcml2YWxIYW5kbGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHVucGluXCIsIGUpO1xyXG4gICAgICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byByZW1vdmUgcml2YWxcIiB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VhcmNoUHJvYmxlbXMocXVlcnk6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZiAocXVlcnkubGVuZ3RoIDwgMikgcmV0dXJuIFtdO1xyXG5cclxuICAgICAgICAvLyBGZXRjaCB1c2VyIHBlcm1pc3Npb25zL3Byb2JsZW1zZXQgKHVzaW5nIHB1YmxpYyBBUEkgZm9yIG5vdylcclxuICAgICAgICAvLyBXZSdsbCB0cnVzdCB0aGUgcHJvYmxlbXNldC5wcm9ibGVtcyBlbmRwb2ludCB0byBiZSBjYWNoZWQgYnkgTmV4dC5qc1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFfS9wcm9ibGVtc2V0LnByb2JsZW1zYCwgeyBuZXh0OiB7IHJldmFsaWRhdGU6IDM2MDAgfSB9KTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICBpZiAoZGF0YS5zdGF0dXMgIT09IFwiT0tcIikgcmV0dXJuIFtdO1xyXG5cclxuICAgICAgICBjb25zdCBxID0gcXVlcnkudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgLy8gU2VhcmNoIGJ5IElEIChlLmcuIFwiNEFcIikgb3IgTmFtZSAoZS5nLiBcIldhdGVybWVsb25cIilcclxuICAgICAgICBjb25zdCBtYXRjaGVzID0gZGF0YS5yZXN1bHQucHJvYmxlbXNcclxuICAgICAgICAgICAgLmZpbHRlcigocDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGAke3AuY29udGVzdElkfSR7cC5pbmRleH1gLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gcC5uYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaWQuaW5jbHVkZXMocSkgfHwgbmFtZS5pbmNsdWRlcyhxKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnNsaWNlKDAsIDEwKSAvLyBMaW1pdCB0byAxMCByZXN1bHRzXHJcbiAgICAgICAgICAgIC5tYXAoKHA6IGFueSkgPT4gKHtcclxuICAgICAgICAgICAgICAgIGlkOiBgJHtwLmNvbnRlc3RJZH0ke3AuaW5kZXh9YCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IHAubmFtZSxcclxuICAgICAgICAgICAgICAgIHJhdGluZzogcC5yYXRpbmdcclxuICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICByZXR1cm4gbWF0Y2hlcztcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRUb1Jldmlld1F1ZXVlKGhhbmRsZTogc3RyaW5nLCBwcm9ibGVtOiB7IGlkOiBzdHJpbmc7IG5hbWU6IHN0cmluZyB9KSB7XHJcbiAgICBjb25zb2xlLmxvZyhgW0ZsYXNoYmFja10gQWRkaW5nICR7cHJvYmxlbS5pZH0gZm9yICR7aGFuZGxlfWApO1xyXG5cclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaGFuZGxlIH0gfSk7XHJcblxyXG4gICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiVXNlciBub3QgZm91bmQuIFBsZWFzZSBzeW5jIGRhc2hib2FyZC5cIiB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIGlmIGFscmVhZHkgZXhpc3RzICh1c2luZyBmaW5kRmlyc3QgdG8gYXZvaWQgdW5pcXVlIGNvbnN0cmFpbnQgdHlwZSBpc3N1ZXMgaWYgY2xpZW50IGRpZG4ndCByZWdlbilcclxuICAgIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgcHJpc21hLnJldmlld1F1ZXVlLmZpbmRGaXJzdCh7XHJcbiAgICAgICAgd2hlcmU6IHsgdXNlcklkOiB1c2VyLmlkLCBwcm9ibGVtSWQ6IHByb2JsZW0uaWQgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGV4aXN0aW5nKSB7XHJcbiAgICAgICAgYXdhaXQgcHJpc21hLnJldmlld1F1ZXVlLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBleGlzdGluZy5pZCB9LFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBuZXh0UmV2aWV3RGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogJ3Jldmlld2luZydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiUmV2aWV3IHJlc2NoZWR1bGVkIHRvIG5vd1wiIH07XHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgcHJpc21hLnJldmlld1F1ZXVlLmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICB1c2VySWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgICAgIHByb2JsZW1JZDogcHJvYmxlbS5pZCxcclxuICAgICAgICAgICAgcHJvYmxlbU5hbWU6IHByb2JsZW0ubmFtZSxcclxuICAgICAgICAgICAgc3RhdHVzOiBcImxlYXJuaW5nXCJcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIPCfjLMgUlBHIFNraWxsIFRyZWUgQWN0aW9uc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlZWRTa2lsbHMoKSB7XHJcbiAgICAvLyBCYXNpYyBDUCBIaWVyYXJjaHlcclxuICAgIGNvbnN0IHNraWxscyA9IFtcclxuICAgICAgICB7IG5hbWU6IFwiVGltZSBDb21wbGV4aXR5XCIsIHNsdWc6IFwiY29tcGxleGl0eVwiLCB0aWVyOiAxLCBkZXA6IFtdIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcIkJhc2ljIE1hdGhcIiwgc2x1ZzogXCJtYXRoXCIsIHRpZXI6IDEsIGRlcDogW10gfSxcclxuICAgICAgICB7IG5hbWU6IFwiQXJyYXlzICYgU3RyaW5nc1wiLCBzbHVnOiBcImFycmF5c1wiLCB0aWVyOiAxLCBkZXA6IFtdIH0sXHJcblxyXG4gICAgICAgIHsgbmFtZTogXCJOdW1iZXIgVGhlb3J5XCIsIHNsdWc6IFwibnVtYmVyLXRoZW9yeVwiLCB0aWVyOiAyLCBkZXA6IFtcIm1hdGhcIl0gfSxcclxuICAgICAgICB7IG5hbWU6IFwiQmluYXJ5IFNlYXJjaFwiLCBzbHVnOiBcImJpbmFyeS1zZWFyY2hcIiwgdGllcjogMiwgZGVwOiBbXCJjb21wbGV4aXR5XCIsIFwiYXJyYXlzXCJdIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcIlR3byBQb2ludGVyc1wiLCBzbHVnOiBcInR3by1wb2ludGVyc1wiLCB0aWVyOiAyLCBkZXA6IFtcImFycmF5c1wiXSB9LFxyXG5cclxuICAgICAgICB7IG5hbWU6IFwiU29ydGluZyAmIEdyZWVkeVwiLCBzbHVnOiBcImdyZWVkeVwiLCB0aWVyOiAyLCBkZXA6IFtcImFycmF5c1wiLCBcImNvbXBsZXhpdHlcIl0gfSxcclxuICAgICAgICB7IG5hbWU6IFwiUmVjdXJzaW9uXCIsIHNsdWc6IFwicmVjdXJzaW9uXCIsIHRpZXI6IDIsIGRlcDogW1wiY29tcGxleGl0eVwiXSB9LFxyXG5cclxuICAgICAgICB7IG5hbWU6IFwiRHluYW1pYyBQcm9ncmFtbWluZ1wiLCBzbHVnOiBcImRwXCIsIHRpZXI6IDMsIGRlcDogW1wicmVjdXJzaW9uXCJdIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcIkdyYXBoIFRoZW9yeVwiLCBzbHVnOiBcImdyYXBoc1wiLCB0aWVyOiAzLCBkZXA6IFtcInJlY3Vyc2lvblwiLCBcImFycmF5c1wiXSB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJUcmVlc1wiLCBzbHVnOiBcInRyZWVzXCIsIHRpZXI6IDMsIGRlcDogW1wiZ3JhcGhzXCJdIH0sXHJcblxyXG4gICAgICAgIHsgbmFtZTogXCJTZWdtZW50IFRyZWVzXCIsIHNsdWc6IFwic2VndHJlZVwiLCB0aWVyOiA0LCBkZXA6IFtcInRyZWVzXCIsIFwiYmluYXJ5LXNlYXJjaFwiXSB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJOZXR3b3JrIEZsb3dcIiwgc2x1ZzogXCJmbG93XCIsIHRpZXI6IDQsIGRlcDogW1wiZ3JhcGhzXCJdIH0sXHJcbiAgICBdO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBzIG9mIHNraWxscykge1xyXG4gICAgICAgICAgICAvLyBVcHNlcnQgU2tpbGxcclxuICAgICAgICAgICAgY29uc3Qgc2tpbGwgPSBhd2FpdCBwcmlzbWEuc2tpbGwudXBzZXJ0KHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IHNsdWc6IHMuc2x1ZyB9LFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlOiB7fSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZTogeyBuYW1lOiBzLm5hbWUsIHNsdWc6IHMuc2x1ZywgdGllcjogcy50aWVyIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBIYW5kbGUgRGVwZW5kZW5jaWVzXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZGVwU2x1ZyBvZiBzLmRlcCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gYXdhaXQgcHJpc21hLnNraWxsLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBzbHVnOiBkZXBTbHVnIH0gfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgbGluayBleGlzdHNcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBleGlzdHMgPSBhd2FpdCBwcmlzbWEuc2tpbGxEZXBlbmRlbmN5LmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBza2lsbElkX3ByZXJlcXVpc2l0ZUlkOiB7IHNraWxsSWQ6IHNraWxsLmlkLCBwcmVyZXF1aXNpdGVJZDogcGFyZW50LmlkIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZXhpc3RzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5za2lsbERlcGVuZGVuY3kuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgc2tpbGxJZDogc2tpbGwuaWQsIHByZXJlcXVpc2l0ZUlkOiBwYXJlbnQuaWQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJTa2lsbCBUcmVlIFNlZWRlZCBTdWNjZXNzZnVsbHlcIiB9O1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJTZWVkaW5nIEVycm9yOlwiLCBlKTtcclxuICAgICAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gc2VlZCBza2lsbHNcIiB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlclNraWxscyhoYW5kbGU6IHN0cmluZykge1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBoYW5kbGUgfSB9KTtcclxuICAgIGlmICghdXNlcikgcmV0dXJuIFtdO1xyXG5cclxuICAgIC8vIEdldCBhbGwgc2tpbGxzIHdpdGggZGVwZW5kZW5jaWVzXHJcbiAgICBjb25zdCBhbGxTa2lsbHMgPSBhd2FpdCBwcmlzbWEuc2tpbGwuZmluZE1hbnkoe1xyXG4gICAgICAgIGluY2x1ZGU6IHsgcHJlcmVxdWlzaXRlczogdHJ1ZSB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBHZXQgdXNlciBwcm9ncmVzc1xyXG4gICAgY29uc3QgdXNlclByb2dyZXNzID0gYXdhaXQgcHJpc21hLnVzZXJTa2lsbC5maW5kTWFueSh7XHJcbiAgICAgICAgd2hlcmU6IHsgdXNlcklkOiB1c2VyLmlkIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE1lcmdlIGxvZ2ljXHJcbiAgICAvLyBBIHNraWxsIGlzIFVOTE9DS0VEIGlmIGFsbCBwcmVyZXF1aXNpdGVzIGFyZSBNQVNURVJFRCAobWFzdGVyeUxldmVsID49IDEwMClcclxuICAgIC8vIE9yIGlmIGl0IGhhcyBubyBwcmVyZXF1aXNpdGVzIChUaWVyIDEpXHJcblxyXG4gICAgcmV0dXJuIGFsbFNraWxscy5tYXAoc2tpbGwgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2dyZXNzID0gdXNlclByb2dyZXNzLmZpbmQodXAgPT4gdXAuc2tpbGxJZCA9PT0gc2tpbGwuaWQpO1xyXG4gICAgICAgIGNvbnN0IG1hc3RlcnkgPSBwcm9ncmVzcyA/IHByb2dyZXNzLm1hc3RlcnlMZXZlbCA6IDA7XHJcblxyXG4gICAgICAgIC8vIGNoZWNrIHVubG9jayBzdGF0dXNcclxuICAgICAgICBsZXQgdW5sb2NrZWQgPSB0cnVlO1xyXG4gICAgICAgIGlmIChza2lsbC5wcmVyZXF1aXNpdGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgcHJlcmVxSWRzID0gc2tpbGwucHJlcmVxdWlzaXRlcy5tYXAocCA9PiBwLnByZXJlcXVpc2l0ZUlkKTtcclxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdXNlciBoYXMgbWFzdGVyZWQgYWxsIHByZXJlcXNcclxuICAgICAgICAgICAgY29uc3QgbWFzdGVyZWRQcmVyZXFzID0gdXNlclByb2dyZXNzLmZpbHRlcih1cCA9PlxyXG4gICAgICAgICAgICAgICAgcHJlcmVxSWRzLmluY2x1ZGVzKHVwLnNraWxsSWQpICYmIHVwLm1hc3RlcnlMZXZlbCA+PSAxMDBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKG1hc3RlcmVkUHJlcmVxcy5sZW5ndGggPCBwcmVyZXFJZHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB1bmxvY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5za2lsbCxcclxuICAgICAgICAgICAgbWFzdGVyeSxcclxuICAgICAgICAgICAgdW5sb2NrZWQ6IHVubG9ja2VkIHx8IHNraWxsLnRpZXIgPT09IDEgLy8gVGllciAxIGFsd2F5cyB1bmxvY2tlZFxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldER1ZUZsYXNoY2FyZHMoaGFuZGxlOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaGFuZGxlIH0gfSk7XHJcbiAgICBpZiAoIXVzZXIpIHJldHVybiBbXTtcclxuXHJcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgcmV0dXJuIGF3YWl0IHByaXNtYS5yZXZpZXdRdWV1ZS5maW5kTWFueSh7XHJcbiAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgdXNlcklkOiB1c2VyLmlkLFxyXG4gICAgICAgICAgICBuZXh0UmV2aWV3RGF0ZTogeyBsdGU6IG5vdyB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcmRlckJ5OiB7IG5leHRSZXZpZXdEYXRlOiAnYXNjJyB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gUXVhbGl0eTogMCAoQmxhY2tvdXQpIHRvIDUgKFBlcmZlY3QpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcm9jZXNzUmV2aWV3KHJlcXVlc3Q6IHsgaWQ6IHN0cmluZzsgcXVhbGl0eTogbnVtYmVyIH0pIHtcclxuICAgIGNvbnN0IGNhcmQgPSBhd2FpdCBwcmlzbWEucmV2aWV3UXVldWUuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGlkOiByZXF1ZXN0LmlkIH0gfSk7XHJcbiAgICBpZiAoIWNhcmQpIHJldHVybjtcclxuXHJcbiAgICBsZXQgeyBlYXNlRmFjdG9yLCBpbnRlcnZhbCwgcmVwZXRpdGlvbnMgfSA9IGNhcmQ7XHJcbiAgICBjb25zdCBxID0gcmVxdWVzdC5xdWFsaXR5O1xyXG5cclxuICAgIC8vIFNNLTIgQWxnb3JpdGhtIChNb2RpZmllZClcclxuICAgIC8vIFF1YWxpdHk6IDAgKEZvcmdvdCkgdG8gNSAoRWFzeSlcclxuICAgIGlmIChxID49IDMpIHtcclxuICAgICAgICBpZiAocmVwZXRpdGlvbnMgPT09IDApIHtcclxuICAgICAgICAgICAgLy8gRmlyc3Qgc3VjY2Vzc2Z1bCByZXZpZXdcclxuICAgICAgICAgICAgLy8gQ29uc3RyYWludDogTWluIDMgZGF5cyBzdGFydCBpZiBnb29kL2Vhc3lcclxuICAgICAgICAgICAgaW50ZXJ2YWwgPSAzO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVwZXRpdGlvbnMgPT09IDEpIHtcclxuICAgICAgICAgICAgaW50ZXJ2YWwgPSA2O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGludGVydmFsID0gTWF0aC5yb3VuZChpbnRlcnZhbCAqIGVhc2VGYWN0b3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVwZXRpdGlvbnMrKztcclxuICAgICAgICAvLyBTdGFuZGFyZCBTTS0yIEVGIHVwZGF0ZVxyXG4gICAgICAgIGVhc2VGYWN0b3IgPSBlYXNlRmFjdG9yICsgKDAuMSAtICg1IC0gcSkgKiAoMC4wOCArICg1IC0gcSkgKiAwLjAyKSk7XHJcbiAgICAgICAgaWYgKGVhc2VGYWN0b3IgPCAxLjMpIGVhc2VGYWN0b3IgPSAxLjM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEZvcmdvdFxyXG4gICAgICAgIHJlcGV0aXRpb25zID0gMDtcclxuICAgICAgICBpbnRlcnZhbCA9IDE7IC8vIFJlc2V0IHRvIDEgZGF5XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbmV4dERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbmV4dERhdGUuc2V0RGF0ZShuZXh0RGF0ZS5nZXREYXRlKCkgKyBpbnRlcnZhbCk7XHJcblxyXG4gICAgYXdhaXQgcHJpc21hLnJldmlld1F1ZXVlLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHJlcXVlc3QuaWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGVhc2VGYWN0b3IsXHJcbiAgICAgICAgICAgIGludGVydmFsLFxyXG4gICAgICAgICAgICByZXBldGl0aW9ucyxcclxuICAgICAgICAgICAgbmV4dFJldmlld0RhdGU6IG5leHREYXRlLFxyXG4gICAgICAgICAgICBsYXN0UmV2aWV3ZWRBdDogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgc3RhdHVzOiBxID49IDQgPyBcIm1hc3RlcmVkXCIgOiBcInJldmlld2luZ1wiXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxGbGFzaGNhcmRzKGhhbmRsZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGhhbmRsZSB9IH0pO1xyXG4gICAgaWYgKCF1c2VyKSByZXR1cm4gW107XHJcblxyXG4gICAgY29uc3QgYWxsID0gYXdhaXQgcHJpc21hLnJldmlld1F1ZXVlLmZpbmRNYW55KHtcclxuICAgICAgICB3aGVyZTogeyB1c2VySWQ6IHVzZXIuaWQgfSxcclxuICAgICAgICBvcmRlckJ5OiB7IG5leHRSZXZpZXdEYXRlOiAnYXNjJyB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gYWxsLm1hcChpdGVtID0+ICh7XHJcbiAgICAgICAgLi4uaXRlbSxcclxuICAgICAgICBpc0R1ZTogbmV3IERhdGUoaXRlbS5uZXh0UmV2aWV3RGF0ZSkgPD0gbmV3IERhdGUoKVxyXG4gICAgfSkpO1xyXG59XHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8g8J+Vte+4jyBTdGFsa2VyIE1vZGUgKFJpdmFscnkpXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Uml2YWxBY3Rpdml0eShoYW5kbGVzOiBzdHJpbmdbXSkge1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xyXG5cclxuICAgIC8vIFNlcXVlbnRpYWwgZmV0Y2hpbmcgdG8gcmVzcGVjdCByYXRlIGxpbWl0cyAoNSByZXEvc2VjKVxyXG4gICAgZm9yIChjb25zdCBoYW5kbGUgb2YgaGFuZGxlcykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2NvZGVmb3JjZXMuY29tL2FwaS91c2VyLnN0YXR1cz9oYW5kbGU9JHtoYW5kbGV9JmZyb209MSZjb3VudD0xMGApO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09PSAnT0snKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goZGF0YS5yZXN1bHQubWFwKChzdWI6IGFueSkgPT4gKHsgLi4uc3ViLCBoYW5kbGUgfSkpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgW1JpdmFsQWN0aXZpdHldIEZhaWxlZCBmb3IgJHtoYW5kbGV9OiAke2RhdGEuY29tbWVudH1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgW1JpdmFsQWN0aXZpdHldIE5ldHdvcmsgZXJyb3IgZm9yICR7aGFuZGxlfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTbWFsbCBkZWxheSBiZXR3ZWVuIHJlcXVlc3RzICgyNTBtcylcclxuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyID0+IHNldFRpbWVvdXQociwgMjUwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWxsU3VicyA9IHJlc3VsdHMuZmxhdCgpO1xyXG4gICAgLy8gU29ydCBieSByZWNlbnQgZmlyc3RcclxuICAgIHJldHVybiBhbGxTdWJzLnNvcnQoKGEsIGIpID0+IGIuY3JlYXRpb25UaW1lU2Vjb25kcyAtIGEuY3JlYXRpb25UaW1lU2Vjb25kcykuc2xpY2UoMCwgMzApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Uml2YWxIaXN0b3J5KGhhbmRsZXM6IHN0cmluZ1tdKSB7XHJcbiAgICBjb25zdCByZXN1bHRzID0gW107XHJcblxyXG4gICAgZm9yIChjb25zdCBoYW5kbGUgb2YgaGFuZGxlcykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2NvZGVmb3JjZXMuY29tL2FwaS91c2VyLnJhdGluZz9oYW5kbGU9JHtoYW5kbGV9YCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT09ICdPSycpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IGhhbmRsZSwgaGlzdG9yeTogZGF0YS5yZXN1bHQgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBoYW5kbGUsIGhpc3Rvcnk6IFtdIH0pOyAvLyBQdXNoIGVtcHR5IHNvIGdyYXBoIGRvZXNuJ3QgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgaGFuZGxlLCBoaXN0b3J5OiBbXSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UociA9PiBzZXRUaW1lb3V0KHIsIDI1MCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHRzO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5T3duZXJzaGlwKGhhbmRsZTogc3RyaW5nLCB0b2tlbjogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIEZldGNoIGZyZXNoIHVzZXIgZGF0YSBmcm9tIENvZGVmb3JjZXNcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9jb2RlZm9yY2VzLmNvbS9hcGkvdXNlci5pbmZvP2hhbmRsZXM9JHtoYW5kbGV9JmNoZWNrSGlzdG9yaWNIYW5kbGVzPWZhbHNlYCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAgIGlmIChkYXRhLnN0YXR1cyA9PT0gJ09LJyAmJiBkYXRhLnJlc3VsdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBkYXRhLnJlc3VsdFswXTtcclxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdG9rZW4gaXMgcHJlc2VudCBpbiBmaXJzdE5hbWUgb3IgbGFzdE5hbWUgKGNhc2UgaW5zZW5zaXRpdmUpXHJcbiAgICAgICAgICAgIGNvbnN0IGZuID0gKHVzZXIuZmlyc3ROYW1lIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBsbiA9ICh1c2VyLmxhc3ROYW1lIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB0ayA9IHRva2VuLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZm4uaW5jbHVkZXModGspIHx8IGxuLmluY2x1ZGVzKHRrKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJWZXJpZmljYXRpb24gZmFpbGVkXCIsIGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZlcmlmeVN1Ym1pc3Npb25BdXRoKGhhbmRsZTogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIEZldGNoIGxhc3QgNSBzdWJtaXNzaW9uc1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2NvZGVmb3JjZXMuY29tL2FwaS91c2VyLnN0YXR1cz9oYW5kbGU9JHtoYW5kbGV9JmZyb209MSZjb3VudD01YCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAgIGlmIChkYXRhLnN0YXR1cyA9PT0gJ09LJyAmJiBkYXRhLnJlc3VsdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIENoZWNrIGZvciBzcGVjaWZpYyBzaWduYWw6XHJcbiAgICAgICAgICAgIC8vIFByb2JsZW06IDRBIChXYXRlcm1lbG9uKVxyXG4gICAgICAgICAgICAvLyBWZXJkaWN0OiBDT01QSUxBVElPTl9FUlJPUiAoRWFzaWVzdCB0byBmb3JjZSBzYWZlbHkpXHJcbiAgICAgICAgICAgIC8vIFRpbWU6IExhc3QgNSBtaW51dGVzXHJcblxyXG4gICAgICAgICAgICBjb25zdCBub3cgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcclxuICAgICAgICAgICAgY29uc3QgdmVyaWZpZWQgPSBkYXRhLnJlc3VsdC5maW5kKChzdWI6IGFueSkgPT5cclxuICAgICAgICAgICAgICAgIHN1Yi5wcm9ibGVtLmNvbnRlc3RJZCA9PT0gNCAmJlxyXG4gICAgICAgICAgICAgICAgc3ViLnByb2JsZW0uaW5kZXggPT09ICdBJyAmJlxyXG4gICAgICAgICAgICAgICAgc3ViLnZlcmRpY3QgPT09ICdDT01QSUxBVElPTl9FUlJPUicgJiZcclxuICAgICAgICAgICAgICAgIChub3cgLSBzdWIuY3JlYXRpb25UaW1lU2Vjb25kcykgPCAzMDAgLy8gNSBtaW5zXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBpZiAodmVyaWZpZWQpIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlN1Ym1pc3Npb24gY2hlY2sgZmFpbGVkXCIsIGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlTWFzaHVwKGhhbmRsZTogc3RyaW5nLCBtaW5SYXRpbmc6IG51bWJlciA9IDgwMCwgbWF4UmF0aW5nOiBudW1iZXIgPSAyMDAwLCBjb3VudDogbnVtYmVyID0gNSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyAxLiBGZXRjaCBVc2VyIFN1Ym1pc3Npb25zIChsYXN0IDUwMClcclxuICAgICAgICBjb25zdCBzdWJSZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9jb2RlZm9yY2VzLmNvbS9hcGkvdXNlci5zdGF0dXM/aGFuZGxlPSR7aGFuZGxlfSZmcm9tPTEmY291bnQ9NTAwYCk7XHJcbiAgICAgICAgY29uc3Qgc3ViRGF0YSA9IGF3YWl0IHN1YlJlcy5qc29uKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHdlYWtUYWdzID0gbmV3IFNldDxzdHJpbmc+KCk7XHJcbiAgICAgICAgaWYgKHN1YkRhdGEuc3RhdHVzID09PSAnT0snKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhZ0ZhaWx1cmVzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0ge307XHJcbiAgICAgICAgICAgIGNvbnN0IHRhZ1RvdGFsOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0ge307XHJcblxyXG4gICAgICAgICAgICAvLyBBbmFseXplIGZhaWx1cmVzXHJcbiAgICAgICAgICAgIHN1YkRhdGEucmVzdWx0LmZvckVhY2goKHM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcy5wcm9ibGVtLnRhZ3MuZm9yRWFjaCgodDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0YWdUb3RhbFt0XSkgeyB0YWdUb3RhbFt0XSA9IDA7IHRhZ0ZhaWx1cmVzW3RdID0gMDsgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRhZ1RvdGFsW3RdKys7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMudmVyZGljdCAhPT0gJ09LJykgdGFnRmFpbHVyZXNbdF0rKztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIElkZW50aWZ5IHdlYWsgdGFncyAoRmFpbHVyZSByYXRlID4gNDAlIGFuZCBhdCBsZWFzdCAzIGF0dGVtcHRzKVxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0YWdUb3RhbCkuZm9yRWFjaCh0ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0YWdUb3RhbFt0XSA+PSAzICYmICh0YWdGYWlsdXJlc1t0XSAvIHRhZ1RvdGFsW3RdKSA+IDAuNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdlYWtUYWdzLmFkZCh0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAyLiBEZXRlcm1pbmUgVGFncyB0byB1c2UgKFdlYWtlc3Qgb3IgUmFuZG9tIFN0YW5kYXJkIG9uZXMgaWYgbm8gd2Vha25lc3MgZm91bmQpXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0VGFncyA9IHdlYWtUYWdzLnNpemUgPiAwID8gQXJyYXkuZnJvbSh3ZWFrVGFncykgOiBbXCJkcFwiLCBcImdyZWVkeVwiLCBcImdyYXBoc1wiLCBcIm1hdGhcIiwgXCJ0cmVlc1wiXTtcclxuXHJcbiAgICAgICAgLy8gMy4gR2VuZXJhdGUgUHJvYmxlbXNcclxuICAgICAgICAvLyBMaW5lYXIgaW50ZXJwb2xhdGlvbiBmb3IgcmF0aW5nc1xyXG4gICAgICAgIGNvbnN0IHJhdGluZ3M6IG51bWJlcltdID0gW107XHJcbiAgICAgICAgaWYgKGNvdW50ID09PSAxKSB7XHJcbiAgICAgICAgICAgIHJhdGluZ3MucHVzaChtaW5SYXRpbmcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0ZXAgPSBNYXRoLmZsb29yKChtYXhSYXRpbmcgLSBtaW5SYXRpbmcpIC8gKGNvdW50IC0gMSkpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHJhdGluZ3MucHVzaChtaW5SYXRpbmcgKyAoc3RlcCAqIGkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcHJvYmxlbXMgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gSGVscGVyIHRvIGZldGNoIHJhbmRvbSBwcm9ibGVtIG9mIHJhdGluZyAmIHRhZ1xyXG4gICAgICAgIGZvciAoY29uc3QgciBvZiByYXRpbmdzKSB7XHJcbiAgICAgICAgICAgIC8vIFJvdW5kIHRvIG5lYXJlc3QgMTAwIGZvciBDRiBBUEkgdXN1YWxseVxyXG4gICAgICAgICAgICBjb25zdCBlZmZlY3RpdmVSYXRpbmcgPSBNYXRoLnJvdW5kKHIgLyAxMDApICogMTAwO1xyXG5cclxuICAgICAgICAgICAgLy8gUGljayBhIHJhbmRvbSB0YWcgZnJvbSB0YXJnZXRUYWdzIGZvciB0aGlzIHNsb3RcclxuICAgICAgICAgICAgY29uc3QgdGFnID0gdGFyZ2V0VGFnc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0YXJnZXRUYWdzLmxlbmd0aCldO1xyXG5cclxuICAgICAgICAgICAgLy8gRmV0Y2ggcG90ZW50aWFsIHByb2JsZW1zIChjYWNoZWQgZW5kcG9pbnQpXHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSBhd2FpdCBnZXRQcm9ibGVtc0J5UmF0aW5nKGVmZmVjdGl2ZVJhdGluZywgdGFnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIFBpY2sgcmFuZG9tXHJcbiAgICAgICAgICAgICAgICBjb25zdCByYW5kb21Qcm9iID0gcFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwLmxlbmd0aCldO1xyXG4gICAgICAgICAgICAgICAgcHJvYmxlbXMucHVzaCh7IC4uLnJhbmRvbVByb2IsIGNob3NlblRhZzogdGFnIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBwcm9ibGVtcywgd2Vha1RhZ3M6IEFycmF5LmZyb20od2Vha1RhZ3MpIH07XHJcblxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNYXNodXAgZ2VuIGZhaWxlZFwiLCBlKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIGdlbmVyYXRlIG1hc2h1cFwiIH07XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI2UUE2T3NCLHlMQUFBIn0=
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dagre$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/dagre/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$features$2f$skill$2d$tree$2f$SkillNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/features/skill-tree/SkillNode.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$features$2f$skill$2d$tree$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/features/skill-tree/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$features$2f$skill$2d$tree$2f$topic$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/features/skill-tree/topic-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$features$2f$skill$2d$tree$2f$TopicModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/features/skill-tree/TopicModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$7bd314__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/data:7bd314 [app-client] (ecmascript) <text/javascript>"); // Reuse existing actions for data fetching
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$e6e0b7__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/data:e6e0b7 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
const nodeTypes = {
    skill: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$features$2f$skill$2d$tree$2f$SkillNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkillNode"]
};
// Dagre Layouting Logic
const getLayoutedElements = (nodes, edges)=>{
    const dagreGraph = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dagre$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphlib.Graph();
    dagreGraph.setDefaultEdgeLabel(()=>({}));
    const nodeWidth = 220;
    const nodeHeight = 100;
    dagreGraph.setGraph({
        rankdir: 'TB',
        nodesep: 50,
        ranksep: 100
    });
    nodes.forEach((node)=>{
        dagreGraph.setNode(node.id, {
            width: nodeWidth,
            height: nodeHeight
        });
    });
    edges.forEach((edge)=>{
        dagreGraph.setEdge(edge.source, edge.target);
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dagre$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].layout(dagreGraph);
    nodes.forEach((node)=>{
        const nodeWithPosition = dagreGraph.node(node.id);
        node.targetPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Top;
        node.sourcePosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Bottom;
        // Shift slightly to center
        node.position = {
            x: nodeWithPosition.x - nodeWidth / 2,
            y: nodeWithPosition.y - nodeHeight / 2
        };
    });
    return {
        nodes,
        edges
    };
};
function SkillTreeGraph() {
    _s();
    const [nodes, setNodes, onNodesChange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNodesState"])([]);
    const [edges, setEdges, onEdgesChange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEdgesState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [selectedTopic, setSelectedTopic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const onConnect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SkillTreeGraph.useCallback[onConnect]": (params)=>setEdges({
                "SkillTreeGraph.useCallback[onConnect]": (eds)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addEdge"])({
                        ...params,
                        type: 'smoothstep',
                        animated: true
                    }, eds)
            }["SkillTreeGraph.useCallback[onConnect]"])
    }["SkillTreeGraph.useCallback[onConnect]"], [
        setEdges
    ]);
    // Node Click Handler
    const onNodeClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SkillTreeGraph.useCallback[onNodeClick]": (event, node)=>{
            if (node.data.unlocked) {
                setSelectedTopic(node.id);
            } else {
            // Shake/Lock feedback was handled in SkillNode internally for visuals,
            // but we can also do global toast here if needed.
            }
        }
    }["SkillTreeGraph.useCallback[onNodeClick]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SkillTreeGraph.useEffect": ()=>{
            const init = {
                "SkillTreeGraph.useEffect.init": async ()=>{
                    const handle = localStorage.getItem('cp-handle');
                    // ... (rest of useEffect is unchanged)
                    if (!handle) return;
                    // Ensure skills in DB (if first time)
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$e6e0b7__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["seedSkills"])();
                    // Get live user progress
                    // Note: getUserSkills currently returns a mapped list. 
                    // We should use that to determine 'unlocked' / 'mastery'.
                    const userSkills = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$7bd314__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getUserSkills"])(handle);
                    // Build Nodes from STATIC DATA but enriched with DYNAMIC USER DATA
                    const initialNodes = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$features$2f$skill$2d$tree$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SKILL_TREE_DATA"].map({
                        "SkillTreeGraph.useEffect.init.initialNodes": (skill)=>{
                            // Find matching progress
                            const progress = userSkills.find({
                                "SkillTreeGraph.useEffect.init.initialNodes.progress": (us)=>us.slug === skill.id
                            }["SkillTreeGraph.useEffect.init.initialNodes.progress"]);
                            // Fallback if not found (default locked/0)
                            const unlocked = progress ? progress.unlocked : skill.prerequisites.length === 0;
                            const mastery = progress ? progress.mastery : 0;
                            return {
                                id: skill.id,
                                type: 'skill',
                                data: {
                                    label: skill.label,
                                    iconName: skill.iconName,
                                    xp: mastery,
                                    xpRequired: skill.xpRequired,
                                    unlocked: unlocked,
                                    mastered: mastery >= 100
                                },
                                position: {
                                    x: 0,
                                    y: 0
                                } // Layout will fix this
                            };
                        }
                    }["SkillTreeGraph.useEffect.init.initialNodes"]);
                    // Build Edges
                    const initialEdges = [];
                    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$features$2f$skill$2d$tree$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SKILL_TREE_DATA"].forEach({
                        "SkillTreeGraph.useEffect.init": (skill)=>{
                            skill.prerequisites.forEach({
                                "SkillTreeGraph.useEffect.init": (parentId)=>{
                                    const parent = initialNodes.find({
                                        "SkillTreeGraph.useEffect.init.parent": (n)=>n.id === parentId
                                    }["SkillTreeGraph.useEffect.init.parent"]);
                                    const isUnlocked = initialNodes.find({
                                        "SkillTreeGraph.useEffect.init": (n)=>n.id === skill.id
                                    }["SkillTreeGraph.useEffect.init"])?.data.unlocked;
                                    if (parent) {
                                        initialEdges.push({
                                            id: `${parentId}-${skill.id}`,
                                            source: parentId,
                                            target: skill.id,
                                            type: 'smoothstep',
                                            animated: true,
                                            style: {
                                                stroke: isUnlocked ? '#3b82f6' : '#3f3f46',
                                                strokeWidth: 2
                                            }
                                        });
                                    }
                                }
                            }["SkillTreeGraph.useEffect.init"]);
                        }
                    }["SkillTreeGraph.useEffect.init"]);
                    // Apply Dagre Layout
                    const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(initialNodes, initialEdges);
                    setNodes(layoutedNodes);
                    setEdges(layoutedEdges);
                    setLoading(false);
                }
            }["SkillTreeGraph.useEffect.init"];
            init();
        }
    }["SkillTreeGraph.useEffect"], []);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-[600px] w-full bg-zinc-950 rounded-xl border border-zinc-900",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "animate-spin text-blue-500"
            }, void 0, false, {
                fileName: "[project]/components/features/skill-tree/SkillTreeGraph.tsx",
                lineNumber: 157,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/features/skill-tree/SkillTreeGraph.tsx",
            lineNumber: 156,
            columnNumber: 13
        }, this);
    }
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
                        lineNumber: 177,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$controls$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controls"], {
                        className: "bg-zinc-800 border-zinc-700 text-white"
                    }, void 0, false, {
                        fileName: "[project]/components/features/skill-tree/SkillTreeGraph.tsx",
                        lineNumber: 178,
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
                        lineNumber: 179,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/features/skill-tree/SkillTreeGraph.tsx",
                lineNumber: 164,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$features$2f$skill$2d$tree$2f$TopicModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TopicModal"], {
                isOpen: !!selectedTopic,
                onClose: ()=>setSelectedTopic(null),
                data: selectedTopic ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$features$2f$skill$2d$tree$2f$topic$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOPIC_DATA"][selectedTopic] : null
            }, void 0, false, {
                fileName: "[project]/components/features/skill-tree/SkillTreeGraph.tsx",
                lineNumber: 192,
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
                                    lineNumber: 202,
                                    columnNumber: 35
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/features/skill-tree/SkillTreeGraph.tsx",
                            lineNumber: 201,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-zinc-400 text-xs mt-1 max-w-[200px]",
                            children: "Complete prerequisites to unlock advanced algorithms. Click unlocked nodes to practice."
                        }, void 0, false, {
                            fileName: "[project]/components/features/skill-tree/SkillTreeGraph.tsx",
                            lineNumber: 204,
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
                                            lineNumber: 209,
                                            columnNumber: 66
                                        }, this),
                                        " Locked"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/features/skill-tree/SkillTreeGraph.tsx",
                                    lineNumber: 209,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 rounded-full bg-blue-500"
                                        }, void 0, false, {
                                            fileName: "[project]/components/features/skill-tree/SkillTreeGraph.tsx",
                                            lineNumber: 210,
                                            columnNumber: 66
                                        }, this),
                                        " Unlocked"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/features/skill-tree/SkillTreeGraph.tsx",
                                    lineNumber: 210,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 rounded-full bg-yellow-500"
                                        }, void 0, false, {
                                            fileName: "[project]/components/features/skill-tree/SkillTreeGraph.tsx",
                                            lineNumber: 211,
                                            columnNumber: 66
                                        }, this),
                                        " Mastered"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/features/skill-tree/SkillTreeGraph.tsx",
                                    lineNumber: 211,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/features/skill-tree/SkillTreeGraph.tsx",
                            lineNumber: 208,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/features/skill-tree/SkillTreeGraph.tsx",
                    lineNumber: 200,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/features/skill-tree/SkillTreeGraph.tsx",
                lineNumber: 199,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/features/skill-tree/SkillTreeGraph.tsx",
        lineNumber: 163,
        columnNumber: 9
    }, this);
}
_s(SkillTreeGraph, "p5iL/mntNO2KH6iFHk/q4Deaj10=", false, function() {
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
            lineNumber: 223,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/features/skill-tree/SkillTreeGraph.tsx",
        lineNumber: 222,
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

//# sourceMappingURL=_1435b743._.js.map