(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/actions.ts [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/app/actions.ts'\n\n'import', and 'export' cannot be used outside of module code");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/components/features/onboarding/ProductTour.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductTour",
    ()=>ProductTour
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const TOUR_STEPS = [
    {
        targetId: "nav-dashboard",
        title: "Your Dashboard",
        content: "Track your Codeforces progress, streaks, and activity heatmap here.",
        position: "bottom"
    },
    {
        targetId: "nav-dojo",
        title: "The Dojo (AI Senpai)",
        content: "Get AI-powered hints for broken code and analyze your logic with the Code Surgeon.",
        position: "bottom"
    },
    {
        targetId: "nav-interview",
        title: "Mock Interview",
        content: "Practice FAANG-style technical interviews with a strict AI interviewer.",
        position: "bottom"
    },
    {
        targetId: "nav-studio",
        title: "Algorithm Studio",
        content: "Visualize Graphs, Trees, and Sorting algorithms in real-time.",
        position: "bottom"
    },
    {
        targetId: "nav-blogs",
        title: "Blog Hunter",
        content: "Find specific tutorials from CP-Algorithms and USACO Guide instantly.",
        position: "bottom"
    }
];
function ProductTour() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [targetRect, setTargetRect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    // Check if tour should run (First time user)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductTour.useEffect": ()=>{
            const hasSeenTour = localStorage.getItem("has-seen-tour-v1");
            if (!hasSeenTour) {
                // Small delay to ensure render
                setTimeout({
                    "ProductTour.useEffect": ()=>setIsOpen(true)
                }["ProductTour.useEffect"], 1000);
            }
        }
    }["ProductTour.useEffect"], []);
    // Update target position when step changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductTour.useEffect": ()=>{
            if (!isOpen) return;
            const step = TOUR_STEPS[currentStep];
            const element = document.getElementById(step.targetId);
            if (element) {
                setTargetRect(element.getBoundingClientRect());
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            } else {
                // If element not found (e.g. mobile menu closed), maybe skip or center screen?
                setTargetRect(null);
            }
        }
    }["ProductTour.useEffect"], [
        currentStep,
        isOpen,
        pathname
    ]);
    const handleNext = ()=>{
        if (currentStep < TOUR_STEPS.length - 1) {
            setCurrentStep((c)=>c + 1);
        } else {
            handleClose();
        }
    };
    const handlePrev = ()=>{
        if (currentStep > 0) setCurrentStep((c)=>c - 1);
    };
    const handleClose = ()=>{
        setIsOpen(false);
        localStorage.setItem("has-seen-tour-v1", "true");
    };
    if (!isOpen) return null;
    // Calculate Popover Position
    const popoverStyling = targetRect ? {
        top: targetRect.bottom + 16,
        left: Math.max(16, Math.min(window.innerWidth - 320, targetRect.left - 100)) // Keep roughly aligned but on screen
    } : {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[100] pointer-events-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/50 pointer-events-auto",
                onClick: handleClose
            }, void 0, false, {
                fileName: "[project]/components/features/onboarding/ProductTour.tsx",
                lineNumber: 104,
                columnNumber: 13
            }, this),
            targetRect && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                layoutId: "spotlight",
                className: "absolute border-2 border-indigo-500 rounded-lg shadow-[0_0_30px_rgba(99,102,241,0.5)] z-[101] pointer-events-none",
                style: {
                    top: targetRect.top - 4,
                    left: targetRect.left - 4,
                    width: targetRect.width + 8,
                    height: targetRect.height + 8
                },
                initial: false,
                transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                }
            }, void 0, false, {
                fileName: "[project]/components/features/onboarding/ProductTour.tsx",
                lineNumber: 108,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute w-80 bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl p-4 z-[102] pointer-events-auto flex flex-col gap-3",
                style: targetRect ? {
                    top: popoverStyling.top,
                    left: popoverStyling.left
                } : {
                    top: '50%',
                    left: '50%',
                    x: '-50%',
                    y: '-50%'
                },
                initial: {
                    opacity: 0,
                    scale: 0.9
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                transition: {
                    duration: 0.2
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-lg text-white flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-indigo-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full",
                                        children: currentStep + 1
                                    }, void 0, false, {
                                        fileName: "[project]/components/features/onboarding/ProductTour.tsx",
                                        lineNumber: 132,
                                        columnNumber: 25
                                    }, this),
                                    TOUR_STEPS[currentStep].title
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/features/onboarding/ProductTour.tsx",
                                lineNumber: 131,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleClose,
                                className: "text-zinc-500 hover:text-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/components/features/onboarding/ProductTour.tsx",
                                    lineNumber: 137,
                                    columnNumber: 94
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/features/onboarding/ProductTour.tsx",
                                lineNumber: 137,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/features/onboarding/ProductTour.tsx",
                        lineNumber: 130,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-zinc-400 text-sm",
                        children: TOUR_STEPS[currentStep].content
                    }, void 0, false, {
                        fileName: "[project]/components/features/onboarding/ProductTour.tsx",
                        lineNumber: 140,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mt-2 border-t border-zinc-800 pt-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-1",
                                children: TOUR_STEPS.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-1.5 h-1.5 rounded-full ${i === currentStep ? 'bg-indigo-500' : 'bg-zinc-700'}`
                                    }, i, false, {
                                        fileName: "[project]/components/features/onboarding/ProductTour.tsx",
                                        lineNumber: 147,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/features/onboarding/ProductTour.tsx",
                                lineNumber: 145,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handlePrev,
                                        disabled: currentStep === 0,
                                        className: "p-1.5 hover:bg-zinc-800 rounded-lg disabled:opacity-30 transition",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/components/features/onboarding/ProductTour.tsx",
                                            lineNumber: 156,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/features/onboarding/ProductTour.tsx",
                                        lineNumber: 151,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleNext,
                                        className: "px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-lg transition flex items-center gap-1",
                                        children: [
                                            currentStep === TOUR_STEPS.length - 1 ? 'Finish' : 'Next',
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/components/features/onboarding/ProductTour.tsx",
                                                lineNumber: 162,
                                                columnNumber: 89
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/features/onboarding/ProductTour.tsx",
                                        lineNumber: 158,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/features/onboarding/ProductTour.tsx",
                                lineNumber: 150,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/features/onboarding/ProductTour.tsx",
                        lineNumber: 144,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/features/onboarding/ProductTour.tsx",
                lineNumber: 123,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/features/onboarding/ProductTour.tsx",
        lineNumber: 102,
        columnNumber: 9
    }, this);
}
_s(ProductTour, "ttSUEQeh4Wyi6Ot3BLkHpbRXq8U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = ProductTour;
var _c;
__turbopack_context__.k.register(_c, "ProductTour");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/features/UserHeatmap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserHeatmap",
    ()=>UserHeatmap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
'use client';
;
;
;
const CalendarHeatmap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/node_modules/react-calendar-heatmap/dist/react-calendar-heatmap.umd.js [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.default), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-calendar-heatmap/dist/react-calendar-heatmap.umd.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = CalendarHeatmap;
;
function UserHeatmap({ submissions }) {
    // Process submissions into values
    // Use Local Time for accurate "Day" representation
    const data = new Map();
    submissions.forEach((sub)=>{
        // Convert UNIX timestamp to Local Date String (YYYY-MM-DD)
        // We use the browser's local timezone (client-side)
        const date = new Date(sub.creationTimeSeconds * 1000).toLocaleDateString('en-CA');
        data.set(date, (data.get(date) || 0) + 1);
    });
    const values = Array.from(data.entries()).map(([date, count])=>({
            date,
            count
        }));
    // Get last 365 days
    const today = new Date();
    const yearAgo = new Date();
    yearAgo.setFullYear(today.getFullYear() - 1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-1e8edaac65c5de33" + " " + "w-full h-full heatmap-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CalendarHeatmap, {
                startDate: yearAgo,
                endDate: today,
                values: values,
                classForValue: (value)=>{
                    if (!value) return 'color-empty';
                    return `color-grade-${Math.min(4, Math.ceil(value.count / 2))}`; // Scale: 1-2=1, 3-4=2, etc.
                },
                tooltipDataAttrs: (value)=>({
                        'data-tip': value && value.date ? `${value.date}: ${value.count} submissions` : 'No activity'
                    }),
                showWeekdayLabels: true
            }, void 0, false, {
                fileName: "[project]/components/features/UserHeatmap.tsx",
                lineNumber: 33,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "1e8edaac65c5de33",
                children: ".heatmap-container text{fill:var(--muted-foreground);font-size:10px}.heatmap-container .color-empty{fill:#ebedf0}.heatmap-container .color-grade-1{fill:#9be9a8}.heatmap-container .color-grade-2{fill:#40c463}.heatmap-container .color-grade-3{fill:#30a14e}.heatmap-container .color-grade-4{fill:#216e39}.dark .heatmap-container .color-empty{fill:#161b22}.dark .heatmap-container .color-grade-1{fill:#0e4429}.dark .heatmap-container .color-grade-2{fill:#006d32}.dark .heatmap-container .color-grade-3{fill:#26a641}.dark .heatmap-container .color-grade-4{fill:#39d353}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/features/UserHeatmap.tsx",
        lineNumber: 32,
        columnNumber: 9
    }, this);
}
_c1 = UserHeatmap;
var _c, _c1;
__turbopack_context__.k.register(_c, "CalendarHeatmap");
__turbopack_context__.k.register(_c1, "UserHeatmap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useRivalData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRivalData",
    ()=>useRivalData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useRivalData(user) {
    _s();
    const [rivals, setRivals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activity, setActivity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [graphData, setGraphData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRivalData.useEffect": ()=>{
            if (!user) return;
            const fetchData = {
                "useRivalData.useEffect.fetchData": async ()=>{
                    setLoading(true);
                    try {
                        // 1. Get List of Rivals
                        const rivalList = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRivals"])(user.handle);
                        setRivals(rivalList);
                        // 2. Prepare all handles (Me + Rivals)
                        // rivals return from getRivals are CFUser objects, so use .handle
                        const allHandles = [
                            user.handle,
                            ...rivalList.map({
                                "useRivalData.useEffect.fetchData": (r)=>r.handle
                            }["useRivalData.useEffect.fetchData"])
                        ];
                        // 3. Fetch Data Sereially/Safely via Actions
                        const [feedData, historyRes] = await Promise.all([
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRivalActivity"])(allHandles),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRivalHistory"])(allHandles)
                        ]);
                        setActivity(feedData || []);
                        // 5. Process Graph Data (Normalization)
                        // We need to map to a common timeline.
                        // Data Source: [{ handle: "A", history: [{ updateTimeSeconds, newRating }, ...] }]
                        // Output: [{ time: 1600000000, "A": 1200, "B": 1300 }]
                        // Collect all unique time points
                        const timePoints = new Set();
                        historyRes.forEach({
                            "useRivalData.useEffect.fetchData": (h)=>{
                                h.history.forEach({
                                    "useRivalData.useEffect.fetchData": (fw)=>timePoints.add(fw.ratingUpdateTimeSeconds)
                                }["useRivalData.useEffect.fetchData"]);
                            }
                        }["useRivalData.useEffect.fetchData"]);
                        const sortedTimes = Array.from(timePoints).sort({
                            "useRivalData.useEffect.fetchData.sortedTimes": (a, b)=>a - b
                        }["useRivalData.useEffect.fetchData.sortedTimes"]);
                        // Build data points
                        // For "step" charts, we should ideally fill forward, but Recharts line chart handles nulls by breaking lines or interpolation.
                        // Standard approach: just plot points.
                        // Better approach for comparison: For every time point t, find the user's rating AT that time (most recent update before or at t).
                        const normalizedGraph = sortedTimes.map({
                            "useRivalData.useEffect.fetchData.normalizedGraph": (t)=>{
                                const point = {
                                    time: t
                                };
                                historyRes.forEach({
                                    "useRivalData.useEffect.fetchData.normalizedGraph": (h)=>{
                                        // Find last rating update <= t
                                        const entry = h.history.find({
                                            "useRivalData.useEffect.fetchData.normalizedGraph.entry": (e)=>e.ratingUpdateTimeSeconds === t
                                        }["useRivalData.useEffect.fetchData.normalizedGraph.entry"]);
                                        // Or if not exact match (which is rare to share contest times exactly unless same div),
                                        // we loop.
                                        // Actually, purely plotting points is easier for Recharts Type "step" or "monotone".
                                        // To avoid complex interpolation logic in JS, let's just create a sparse array where valid points exist.
                                        // Recharts `connectNulls` can be useful.
                                        // BUT, to compare properly, we often want updates aligned.
                                        // Simplified: Just push raw data points for each line and let them be on their own time.
                                        // Recharts supports different data arrays for different lines? No, it prefers one array.
                                        // SO: We MUST merge.
                                        // let's do: point = { time: t, "userA": 1500, "userB": null } -> connectNulls={true}
                                        if (entry) {
                                            point[h.handle] = entry.newRating;
                                        }
                                    }
                                }["useRivalData.useEffect.fetchData.normalizedGraph"]);
                                return point;
                            }
                        }["useRivalData.useEffect.fetchData.normalizedGraph"]);
                        // Optimization: Filter out points where nobody has data? (Implicitly handled)
                        setGraphData(normalizedGraph);
                    } catch (error) {
                        console.error("Failed to sync Stalker data", error);
                    } finally{
                        setLoading(false);
                    }
                }
            }["useRivalData.useEffect.fetchData"];
            fetchData();
        }
    }["useRivalData.useEffect"], [
        user
    ]);
    return {
        rivals,
        activity,
        graphData,
        loading
    };
}
_s(useRivalData, "F1E2WSgFL+X/pEde1qDzA/ZbNHI=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/features/RivalryGraph.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RivalryGraph",
    ()=>RivalryGraph
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/LineChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Legend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
'use client';
;
;
;
function RivalryGraph({ data, handles }) {
    // Colors for lines
    const colors = [
        '#ef4444',
        '#3b82f6',
        '#10b981',
        '#f59e0b',
        '#8b5cf6'
    ];
    if (!data || data.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full flex items-center justify-center text-zinc-600 text-xs",
            children: "No rating history available available."
        }, void 0, false, {
            fileName: "[project]/components/features/RivalryGraph.tsx",
            lineNumber: 15,
            columnNumber: 16
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-[300px] w-full mt-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            width: "100%",
            height: "100%",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
                data: data,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                        strokeDasharray: "3 3",
                        stroke: "#333",
                        vertical: false
                    }, void 0, false, {
                        fileName: "[project]/components/features/RivalryGraph.tsx",
                        lineNumber: 22,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                        dataKey: "time",
                        domain: [
                            'auto',
                            'auto'
                        ],
                        type: "number",
                        tickFormatter: (unix)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(unix * 1000), 'MMM yy'),
                        stroke: "#666",
                        fontSize: 10,
                        tickCount: 6
                    }, void 0, false, {
                        fileName: "[project]/components/features/RivalryGraph.tsx",
                        lineNumber: 23,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                        domain: [
                            'auto',
                            'auto'
                        ],
                        stroke: "#666",
                        fontSize: 10,
                        width: 30
                    }, void 0, false, {
                        fileName: "[project]/components/features/RivalryGraph.tsx",
                        lineNumber: 32,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                        contentStyle: {
                            backgroundColor: '#18181b',
                            border: '1px solid #27272a',
                            borderRadius: '8px'
                        },
                        itemStyle: {
                            fontSize: '12px'
                        },
                        labelFormatter: (unix)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(unix * 1000), 'MMM d, yyyy')
                    }, void 0, false, {
                        fileName: "[project]/components/features/RivalryGraph.tsx",
                        lineNumber: 38,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
                        iconType: "circle",
                        wrapperStyle: {
                            fontSize: '12px',
                            paddingTop: '10px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/features/RivalryGraph.tsx",
                        lineNumber: 43,
                        columnNumber: 21
                    }, this),
                    handles.map((handle, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                            connectNulls: true,
                            type: "monotone",
                            dataKey: handle,
                            stroke: colors[i % colors.length],
                            strokeWidth: 2,
                            dot: {
                                r: 2
                            },
                            activeDot: {
                                r: 5
                            },
                            animationDuration: 1500
                        }, handle, false, {
                            fileName: "[project]/components/features/RivalryGraph.tsx",
                            lineNumber: 46,
                            columnNumber: 25
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/features/RivalryGraph.tsx",
                lineNumber: 21,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/features/RivalryGraph.tsx",
            lineNumber: 20,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/features/RivalryGraph.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
}
_c = RivalryGraph;
var _c;
__turbopack_context__.k.register(_c, "RivalryGraph");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/features/ActivityFeed.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActivityFeed",
    ()=>ActivityFeed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
'use client';
;
;
function ActivityFeed({ activity }) {
    if (activity.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-8 text-zinc-600 text-xs",
            children: "No recent activity detected."
        }, void 0, false, {
            fileName: "[project]/components/features/ActivityFeed.tsx",
            lineNumber: 10,
            columnNumber: 16
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3 custom-scrollbar overflow-y-auto max-h-[300px] pr-2",
        children: activity.map((sub, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-zinc-950 p-3 rounded-lg border border-zinc-900 text-xs hover:border-zinc-800 transition group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between mb-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-zinc-300 group-hover:text-white transition",
                                children: sub.handle
                            }, void 0, false, {
                                fileName: "[project]/components/features/ActivityFeed.tsx",
                                lineNumber: 18,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-zinc-600 flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        size: 10
                                    }, void 0, false, {
                                        fileName: "[project]/components/features/ActivityFeed.tsx",
                                        lineNumber: 20,
                                        columnNumber: 29
                                    }, this),
                                    Math.floor((Date.now() / 1000 - sub.creationTimeSeconds) / 60) < 60 ? `${Math.floor((Date.now() / 1000 - sub.creationTimeSeconds) / 60)}m ago` : `${Math.floor((Date.now() / 1000 - sub.creationTimeSeconds) / 3600)}h ago`
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/features/ActivityFeed.tsx",
                                lineNumber: 19,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/features/ActivityFeed.tsx",
                        lineNumber: 17,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 truncate",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-zinc-500 font-mono",
                                        children: [
                                            "[",
                                            sub.problem.rating || '?',
                                            "]"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/features/ActivityFeed.tsx",
                                        lineNumber: 28,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `https://codeforces.com/problemset/problem/${sub.problem.contestId}/${sub.problem.index}`,
                                        target: "_blank",
                                        className: "text-blue-400 hover:underline truncate max-w-[180px]",
                                        children: [
                                            sub.problem.index,
                                            ". ",
                                            sub.problem.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/features/ActivityFeed.tsx",
                                        lineNumber: 29,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/features/ActivityFeed.tsx",
                                lineNumber: 27,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `px-2 py-0.5 rounded font-bold tracking-wider text-[10px] uppercase ${sub.verdict === 'OK' ? 'bg-green-500/10 text-green-500' : sub.verdict === 'WRONG_ANSWER' ? 'bg-red-500/10 text-red-500' : sub.verdict === 'TIME_LIMIT_EXCEEDED' ? 'bg-yellow-500/10 text-yellow-500' : 'bg-zinc-800 text-zinc-400'}`,
                                children: sub.verdict === 'OK' ? 'AC' : sub.verdict === 'WRONG_ANSWER' ? 'WA' : sub.verdict === 'TIME_LIMIT_EXCEEDED' ? 'TLE' : sub.verdict === 'COMPILATION_ERROR' ? 'CE' : sub.verdict === 'RUNTIME_ERROR' ? 'RE' : '??'
                            }, void 0, false, {
                                fileName: "[project]/components/features/ActivityFeed.tsx",
                                lineNumber: 34,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/features/ActivityFeed.tsx",
                        lineNumber: 26,
                        columnNumber: 21
                    }, this)
                ]
            }, `${sub.id}-${i}`, true, {
                fileName: "[project]/components/features/ActivityFeed.tsx",
                lineNumber: 16,
                columnNumber: 17
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/features/ActivityFeed.tsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
_c = ActivityFeed;
var _c;
__turbopack_context__.k.register(_c, "ActivityFeed");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/features/RivalryWidget.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RivalryWidget",
    ()=>RivalryWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$swords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Swords$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/swords.js [app-client] (ecmascript) <export default as Swords>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions.ts [app-client] (ecmascript)"); // partial imports as hook handles fetching
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useRivalData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useRivalData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$features$2f$RivalryGraph$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/features/RivalryGraph.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$features$2f$ActivityFeed$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/features/ActivityFeed.tsx [app-client] (ecmascript)");
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
function RivalryWidget({ user }) {
    _s();
    const { rivals, activity, graphData, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useRivalData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRivalData"])(user || null);
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('versus');
    const [newHandle, setNewHandle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleAdd = async (e)=>{
        e.preventDefault();
        setError('');
        if (!newHandle.trim()) return;
        const handle = user?.handle || localStorage.getItem('cp-handle');
        if (handle) {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPinnedRival"])(handle, newHandle);
            if (res.error) {
                setError(res.error);
                setTimeout(()=>setError(''), 3000);
            } else {
                setNewHandle('');
                window.location.reload();
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 h-full flex flex-col min-h-[400px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-zinc-400 font-medium flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$swords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Swords$3e$__["Swords"], {
                                className: "text-red-500",
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/components/features/RivalryWidget.tsx",
                                lineNumber: 40,
                                columnNumber: 21
                            }, this),
                            " Stalker Mode"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/features/RivalryWidget.tsx",
                        lineNumber: 39,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex bg-zinc-950 rounded-lg p-1 border border-zinc-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setTab('versus'),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3 py-1 text-xs rounded-md transition", tab === 'versus' ? "bg-zinc-800 text-white shadow" : "text-zinc-500 hover:text-zinc-300"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/components/features/RivalryWidget.tsx",
                                    lineNumber: 44,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/features/RivalryWidget.tsx",
                                lineNumber: 43,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setTab('activity'),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3 py-1 text-xs rounded-md transition", tab === 'activity' ? "bg-zinc-800 text-white shadow" : "text-zinc-500 hover:text-zinc-300"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/components/features/RivalryWidget.tsx",
                                    lineNumber: 47,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/features/RivalryWidget.tsx",
                                lineNumber: 46,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setTab('graph'),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3 py-1 text-xs rounded-md transition", tab === 'graph' ? "bg-zinc-800 text-white shadow" : "text-zinc-500 hover:text-zinc-300"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/components/features/RivalryWidget.tsx",
                                    lineNumber: 50,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/features/RivalryWidget.tsx",
                                lineNumber: 49,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/features/RivalryWidget.tsx",
                        lineNumber: 42,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/features/RivalryWidget.tsx",
                lineNumber: 38,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto min-h-0 relative custom-scrollbar",
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 flex items-center justify-center text-zinc-600 text-xs",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-5 h-5 border-2 border-zinc-600 border-t-zinc-400 rounded-full animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/components/features/RivalryWidget.tsx",
                                lineNumber: 60,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Syncing Data..."
                            }, void 0, false, {
                                fileName: "[project]/components/features/RivalryWidget.tsx",
                                lineNumber: 61,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/features/RivalryWidget.tsx",
                        lineNumber: 59,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/features/RivalryWidget.tsx",
                    lineNumber: 58,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        tab === 'versus' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                rivals.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-zinc-600 text-xs italic text-center py-8",
                                    children: "Add a rival to compare stats."
                                }, void 0, false, {
                                    fileName: "[project]/components/features/RivalryWidget.tsx",
                                    lineNumber: 70,
                                    columnNumber: 37
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: rivals.map((r)=>{
                                        const myRating = user?.rating || 0;
                                        const rivalRating = r.rating || 0;
                                        const delta = myRating - rivalRating;
                                        // r comes from getCFUser which returns { handle, rating, etc. }
                                        // Handle Remove
                                        const handleRemove = async (target)=>{
                                            if (confirm(`Unpin ${target}?`)) {
                                                const me = user?.handle || localStorage.getItem('cp-handle');
                                                if (me) {
                                                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removePinnedRival"])(me, target);
                                                    window.location.reload();
                                                }
                                            }
                                        };
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col bg-zinc-950 p-3 rounded-xl border border-zinc-900 group hover:border-zinc-700 transition relative overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 opacity-5 pointer-events-none", delta > 0 ? "bg-green-500" : "bg-red-500")
                                                }, void 0, false, {
                                                    fileName: "[project]/components/features/RivalryWidget.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 53
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleRemove(r.handle),
                                                    className: "absolute top-2 right-2 z-20 text-zinc-600 hover:text-red-500 opacity-0 group-hover:opacity-100 transition p-1 bg-zinc-900/50 rounded",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/features/RivalryWidget.tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 57
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/features/RivalryWidget.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 53
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between relative z-10 w-full px-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col items-center gap-1 w-1/3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-10 h-10 rounded-full border-2 border-zinc-800 overflow-hidden",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: user?.titlePhoto,
                                                                        className: "w-full h-full object-cover"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/features/RivalryWidget.tsx",
                                                                        lineNumber: 110,
                                                                        columnNumber: 65
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/features/RivalryWidget.tsx",
                                                                    lineNumber: 109,
                                                                    columnNumber: 61
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] font-bold text-zinc-400",
                                                                    children: "YOU"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/features/RivalryWidget.tsx",
                                                                    lineNumber: 112,
                                                                    columnNumber: 61
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-mono font-bold text-white",
                                                                    children: myRating
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/features/RivalryWidget.tsx",
                                                                    lineNumber: 113,
                                                                    columnNumber: 61
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/features/RivalryWidget.tsx",
                                                            lineNumber: 108,
                                                            columnNumber: 57
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col items-center justify-center w-1/3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] font-black text-zinc-600 bg-zinc-900 px-2 py-1 rounded",
                                                                    children: "VS"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/features/RivalryWidget.tsx",
                                                                    lineNumber: 118,
                                                                    columnNumber: 61
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs font-bold mt-1 px-2 py-0.5 rounded-full", delta > 0 ? "text-green-400 bg-green-500/10" : "text-red-400 bg-red-500/10"),
                                                                    children: delta > 0 ? `+${delta}` : delta
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/features/RivalryWidget.tsx",
                                                                    lineNumber: 119,
                                                                    columnNumber: 61
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/features/RivalryWidget.tsx",
                                                            lineNumber: 117,
                                                            columnNumber: 57
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col items-center gap-1 w-1/3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-10 h-10 rounded-full border-2 border-zinc-800 overflow-hidden",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: r.titlePhoto || 'https://userpic.codeforces.org/no-title.jpg',
                                                                        className: "w-full h-full object-cover"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/features/RivalryWidget.tsx",
                                                                        lineNumber: 127,
                                                                        columnNumber: 65
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/features/RivalryWidget.tsx",
                                                                    lineNumber: 126,
                                                                    columnNumber: 61
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: `https://codeforces.com/profile/${r.handle}`,
                                                                    target: "_blank",
                                                                    className: "text-[10px] font-bold text-blue-400 hover:underline truncate max-w-full",
                                                                    children: r.handle
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/features/RivalryWidget.tsx",
                                                                    lineNumber: 129,
                                                                    columnNumber: 61
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-mono font-bold text-white",
                                                                    children: rivalRating
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/features/RivalryWidget.tsx",
                                                                    lineNumber: 132,
                                                                    columnNumber: 61
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/features/RivalryWidget.tsx",
                                                            lineNumber: 125,
                                                            columnNumber: 57
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/features/RivalryWidget.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 53
                                                }, this)
                                            ]
                                        }, r.handle, true, {
                                            fileName: "[project]/components/features/RivalryWidget.tsx",
                                            lineNumber: 94,
                                            columnNumber: 49
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/components/features/RivalryWidget.tsx",
                                    lineNumber: 74,
                                    columnNumber: 37
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleAdd,
                                    className: "mt-4",
                                    children: [
                                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-2 text-xs text-red-500 font-bold bg-red-500/10 p-2 rounded",
                                            children: error
                                        }, void 0, false, {
                                            fileName: "[project]/components/features/RivalryWidget.tsx",
                                            lineNumber: 141,
                                            columnNumber: 47
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: newHandle,
                                                    onChange: (e)=>setNewHandle(e.target.value),
                                                    placeholder: "Add rival handle...",
                                                    className: "flex-1 bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-red-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/features/RivalryWidget.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    className: "bg-zinc-800 hover:bg-zinc-700 text-white p-2 rounded-lg transition",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/features/RivalryWidget.tsx",
                                                        lineNumber: 150,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/features/RivalryWidget.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/features/RivalryWidget.tsx",
                                            lineNumber: 142,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/features/RivalryWidget.tsx",
                                    lineNumber: 140,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/features/RivalryWidget.tsx",
                            lineNumber: 68,
                            columnNumber: 29
                        }, this),
                        tab === 'activity' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$features$2f$ActivityFeed$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActivityFeed"], {
                            activity: activity
                        }, void 0, false, {
                            fileName: "[project]/components/features/RivalryWidget.tsx",
                            lineNumber: 159,
                            columnNumber: 29
                        }, this),
                        tab === 'graph' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$features$2f$RivalryGraph$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RivalryGraph"], {
                            data: graphData,
                            handles: [
                                user?.handle || 'Me',
                                ...rivals.map((r)=>r.handle)
                            ]
                        }, void 0, false, {
                            fileName: "[project]/components/features/RivalryWidget.tsx",
                            lineNumber: 164,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/components/features/RivalryWidget.tsx",
                lineNumber: 56,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/features/RivalryWidget.tsx",
        lineNumber: 37,
        columnNumber: 9
    }, this);
}
_s(RivalryWidget, "iZ3BGtRnUnKmy/mU2xsb68XpyEE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useRivalData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRivalData"]
    ];
});
_c = RivalryWidget;
function getRatingColor(rating) {
    if (!rating) return "text-zinc-500";
    if (rating < 1200) return "text-gray-400";
    if (rating < 1400) return "text-green-400";
    if (rating < 1600) return "text-cyan-400";
    if (rating < 1900) return "text-blue-500";
    if (rating < 2100) return "text-purple-400";
    if (rating < 2400) return "text-orange-400";
    return "text-red-500";
}
var _c;
__turbopack_context__.k.register(_c, "RivalryWidget");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/dashboard/DashboardClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardClient",
    ()=>DashboardClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/network.js [app-client] (ecmascript) <export default as Network>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$features$2f$onboarding$2f$ProductTour$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/features/onboarding/ProductTour.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$features$2f$UserHeatmap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/features/UserHeatmap.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$features$2f$RivalryWidget$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/features/RivalryWidget.tsx [app-client] (ecmascript)");
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
function DashboardClient() {
    _s();
    const [handle, setHandle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [submissions, setSubmissions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        streak: 0,
        totalSolved: 0,
        rank: 'Intro'
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [recommendation, setRecommendation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const processStats = (u, subs)=>{
        // 1. Calculate Solved
        const solvedSet = new Set();
        subs.forEach((s)=>{
            if (s.verdict === 'OK') solvedSet.add(`${s.problem.contestId}-${s.problem.index}`);
        });
        // 2. Calculate Streak
        // 2. Calculate Streak (Accepted Solutions Only)
        let streak = 0;
        const acSubs = subs.filter((s)=>s.verdict === 'OK');
        if (acSubs.length > 0) {
            const dates = new Set(acSubs.map((s)=>new Date(s.creationTimeSeconds * 1000).toISOString().split('T')[0]));
            const today = new Date().toISOString().split('T')[0];
            // Better iterator
            let current = new Date();
            let count = 0;
            while(true){
                const dateStr = current.toISOString().split('T')[0];
                if (dates.has(dateStr)) {
                    count++;
                    current.setDate(current.getDate() - 1);
                } else {
                    // Allow missing today if checked early
                    // (Streak is preserved if you solved yesterday, even if not yet today)
                    if (count === 0 && dateStr === today) {
                        current.setDate(current.getDate() - 1);
                        continue;
                    }
                    break;
                }
            }
            streak = count;
        }
        // 3. Determine Tier
        let rank = "Newbie";
        const r = u.rating || 0;
        if (r >= 1200) rank = "Pupil";
        if (r >= 1400) rank = "Specialist";
        if (r >= 1600) rank = "Expert";
        if (r >= 1900) rank = "CM";
        if (r >= 2100) rank = "Master";
        if (r >= 2400) rank = "GM";
        setStats({
            streak,
            totalSolved: solvedSet.size,
            rank
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syncUserStats"])(u.handle, {
            currentStreak: streak,
            totalSolved: solvedSet.size,
            maxRating: u.maxRating || 0,
            lastActive: new Date()
        }).catch((err)=>console.error("Failed to sync stats", err));
    };
    const [verificationStep, setVerificationStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('input');
    const [verifying, setVerifying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleLogin = async (e)=>{
        if (e) e.preventDefault();
        if (!handle.trim()) return;
        setLoading(true);
        setError('');
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyUser"])(handle);
        if (data) {
            // STEP 1: Found User, Now Verify
            if (verificationStep === 'input') {
                setVerificationStep('verify');
                setLoading(false);
                return;
            }
        } else {
            setError('User not found on Codeforces');
            setLoading(false);
        }
    };
    const confirmSubmission = async ()=>{
        setVerifying(true);
        setError('');
        const auth = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifySubmissionAuth"])(handle);
        if (auth.success) {
            // SUCCESS!
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyUser"])(handle); // Re-fetch to be safe
            if (data) {
                setUser(data);
                localStorage.setItem('cp-handle', handle);
                window.dispatchEvent(new Event('nav-update')); // Update Navbar
                // Fetch data
                const subs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSubmissions"])(handle);
                setSubmissions(subs);
                processStats(data, subs);
                const currentRating = data.rating || 800;
                const targetRating = Math.max(800, Math.ceil((currentRating + 100) / 100) * 100);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProblemsByRating"])(targetRating).then((probs)=>{
                    if (probs.length > 0) setRecommendation(probs[0]);
                });
            }
        } else {
            setError('Verification failed. We could not find a recent Compilation Error on 4A from you. Please try again.');
        }
        setVerifying(false);
    };
    // Auto-login check (skip verification if already logged in previously)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardClient.useEffect": ()=>{
            const saved = localStorage.getItem('cp-handle');
            if (saved) {
                setHandle(saved);
                setLoading(true);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyUser"])(saved).then({
                    "DashboardClient.useEffect": async (u)=>{
                        if (u) {
                            setUser(u);
                            const subs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSubmissions"])(saved);
                            setSubmissions(subs);
                            processStats(u, subs);
                            // ... rest of logic
                            const currentRating = u.rating || 800;
                            const targetRating = Math.max(800, Math.ceil((currentRating + 100) / 100) * 100);
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProblemsByRating"])(targetRating).then({
                                "DashboardClient.useEffect": (probs)=>{
                                    if (probs.length > 0) setRecommendation(probs[0]);
                                }
                            }["DashboardClient.useEffect"]);
                        }
                        setLoading(false);
                    }
                }["DashboardClient.useEffect"]);
            }
        }
    }["DashboardClient.useEffect"], []);
    if (!user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center min-h-[60vh] space-y-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent",
                            children: "CP-ZeroToHero"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/DashboardClient.tsx",
                            lineNumber: 166,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-zinc-400 text-lg",
                            children: "Your guided path from Newbie to Master."
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/DashboardClient.tsx",
                            lineNumber: 169,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/DashboardClient.tsx",
                    lineNumber: 165,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-md bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 backdrop-blur-xl shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleLogin,
                            className: "flex flex-col gap-4",
                            children: verificationStep === 'input' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "absolute left-3 top-3.5 text-zinc-500 pointer-events-none",
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                        lineNumber: 176,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: handle,
                                        onChange: (e)=>setHandle(e.target.value),
                                        placeholder: "Enter Codeforces Handle",
                                        className: "w-full bg-zinc-950 border border-zinc-800 rounded-lg py-3 pl-10 pr-4 focus:ring-2 focus:ring-blue-600 focus:outline-none transition text-white placeholder:text-zinc-600"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                        lineNumber: 177,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: loading,
                                        className: "w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold transition disabled:opacity-50 flex justify-center items-center",
                                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                            lineNumber: 189,
                                            columnNumber: 41
                                        }, this) : 'Verify & Connect'
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                        lineNumber: 183,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                lineNumber: 175,
                                columnNumber: 29
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4 animate-in fade-in slide-in-from-bottom-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-red-500/10 border border-red-500/20 p-4 rounded-lg text-sm text-red-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold flex items-center gap-2 mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 41
                                                    }, this),
                                                    " Anti-Impersonation Check"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                                lineNumber: 196,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-2",
                                                children: [
                                                    "To prove ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: handle
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                                        lineNumber: 199,
                                                        columnNumber: 66
                                                    }, this),
                                                    " is yours:"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                                lineNumber: 199,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                                className: "list-decimal list-inside space-y-2 text-zinc-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            "Go to ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "https://codeforces.com/problemset/problem/4/A",
                                                                target: "_blank",
                                                                className: "text-blue-400 underline font-bold",
                                                                children: "Problem 4A (Watermelon)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                                                lineNumber: 201,
                                                                columnNumber: 51
                                                            }, this),
                                                            "."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                                        lineNumber: 201,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            "Submit a solution that causes a ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                className: "text-red-400",
                                                                children: "COMPILATION ERROR"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                                                lineNumber: 202,
                                                                columnNumber: 77
                                                            }, this),
                                                            "."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                                        lineNumber: 202,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "text-xs text-zinc-500",
                                                        children: '(e.g. submit a file with just the text "verify me")'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Wait 10 seconds, then click below."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                                lineNumber: 200,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                        lineNumber: 195,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: confirmSubmission,
                                        disabled: verifying,
                                        className: "w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold transition disabled:opacity-50 flex justify-center items-center",
                                        children: verifying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                            lineNumber: 214,
                                            columnNumber: 41
                                        }, this) : 'I have submitted code'
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                        lineNumber: 207,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            setVerificationStep('input');
                                            setError('');
                                        },
                                        className: "w-full text-xs text-zinc-500 hover:text-white transition",
                                        children: "Cancel / Change Handle"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                        lineNumber: 217,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                lineNumber: 194,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/DashboardClient.tsx",
                            lineNumber: 173,
                            columnNumber: 21
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-400 text-sm mt-4 text-center",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/DashboardClient.tsx",
                            lineNumber: 228,
                            columnNumber: 31
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/DashboardClient.tsx",
                    lineNumber: 172,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/DashboardClient.tsx",
            lineNumber: 164,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row items-center md:items-start gap-6 bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 backdrop-blur-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: user.titlePhoto,
                        alt: "Avatar",
                        className: "w-24 h-24 rounded-full border-4 border-zinc-800 shadow-xl"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                        lineNumber: 238,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center md:text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold text-white flex items-center justify-center md:justify-start gap-3",
                                children: [
                                    user.handle,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm px-2 py-0.5 rounded-full border font-mono", getRatingColor(user.rating)),
                                        children: user.rating || 0
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                        lineNumber: 242,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                lineNumber: 240,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-zinc-400 mt-1 capitalize",
                                children: [
                                    user.rank || 'Unrated',
                                    " • Peak: ",
                                    user.maxRank,
                                    " (",
                                    user.maxRating,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                lineNumber: 246,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                        lineNumber: 239,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            localStorage.removeItem('cp-handle');
                            setUser(null);
                            setHandle('');
                        },
                        className: "md:ml-auto px-4 py-2 text-sm text-zinc-500 hover:text-red-400 hover:bg-zinc-800 rounded-lg transition",
                        children: "Logout"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                        lineNumber: 248,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/DashboardClient.tsx",
                lineNumber: 237,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-12 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-8 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-1 w-1 rounded-full bg-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                        lineNumber: 262,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-zinc-400 font-medium text-sm uppercase tracking-wider",
                                        children: "The Arcade"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                        lineNumber: 263,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                lineNumber: 261,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 md:grid-cols-3 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardLink, {
                                        href: "/skills",
                                        title: "Skill Tree",
                                        desc: "RPG Progression",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                            lineNumber: 272,
                                            columnNumber: 35
                                        }, void 0),
                                        color: "text-emerald-400",
                                        bg: "bg-emerald-500/10 border-emerald-500/20"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                        lineNumber: 268,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardLink, {
                                        href: "/flashback",
                                        title: "Flashback",
                                        desc: "SRS Memory",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                            lineNumber: 280,
                                            columnNumber: 35
                                        }, void 0),
                                        color: "text-pink-400",
                                        bg: "bg-pink-500/10 border-pink-500/20"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                        lineNumber: 276,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardLink, {
                                        href: "/senpai",
                                        title: "AI Dojo",
                                        desc: "Get Hints",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                            lineNumber: 290,
                                            columnNumber: 35
                                        }, void 0),
                                        color: "text-indigo-400",
                                        bg: "bg-indigo-500/10 border-indigo-500/20"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                        lineNumber: 286,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardLink, {
                                        href: "/stress",
                                        title: "Stress Test",
                                        desc: "Find Bugs",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                            lineNumber: 298,
                                            columnNumber: 35
                                        }, void 0),
                                        color: "text-yellow-400",
                                        bg: "bg-yellow-500/10 border-yellow-500/20"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                        lineNumber: 294,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardLink, {
                                        href: "/racer",
                                        title: "Racer",
                                        desc: "Speed Code",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                            lineNumber: 306,
                                            columnNumber: 35
                                        }, void 0),
                                        color: "text-red-400",
                                        bg: "bg-red-500/10 border-red-500/20"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                        lineNumber: 302,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardLink, {
                                        href: "/studio",
                                        title: "Algo Studio",
                                        desc: "Visualizer",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                            lineNumber: 314,
                                            columnNumber: 35
                                        }, void 0),
                                        color: "text-cyan-400",
                                        bg: "bg-cyan-500/10 border-cyan-500/20"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                        lineNumber: 310,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardLink, {
                                        href: "/interview",
                                        title: "Interviewer",
                                        desc: "Mock AI Test",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                            lineNumber: 322,
                                            columnNumber: 35
                                        }, void 0),
                                        color: "text-rose-400",
                                        bg: "bg-rose-500/10 border-rose-500/20"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                        lineNumber: 318,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardLink, {
                                        href: "/roadmap",
                                        title: "Roadmap",
                                        desc: "Guide",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                            lineNumber: 332,
                                            columnNumber: 35
                                        }, void 0),
                                        color: "text-blue-400",
                                        bg: "bg-blue-500/10 border-blue-500/20"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                        lineNumber: 328,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardLink, {
                                        href: "/contests",
                                        title: "Contests",
                                        desc: "Virtual",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                            lineNumber: 340,
                                            columnNumber: 35
                                        }, void 0),
                                        color: "text-orange-400",
                                        bg: "bg-orange-500/10 border-orange-500/20"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                        lineNumber: 336,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardLink, {
                                        href: "/blog-hunter",
                                        title: "Blogs",
                                        desc: "Learn",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                            lineNumber: 348,
                                            columnNumber: 35
                                        }, void 0),
                                        color: "text-purple-400",
                                        bg: "bg-purple-500/10 border-purple-500/20"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                        lineNumber: 344,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                lineNumber: 266,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-zinc-900/40 p-6 rounded-2xl border border-zinc-800/50 mt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-zinc-500 text-xs font-bold uppercase mb-4 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                                className: "text-zinc-600",
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                                lineNumber: 357,
                                                columnNumber: 29
                                            }, this),
                                            " Activity Heatmap"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                        lineNumber: 356,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-32",
                                        children: submissions.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$features$2f$UserHeatmap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserHeatmap"], {
                                            submissions: submissions
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                            lineNumber: 361,
                                            columnNumber: 33
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full flex items-center justify-center text-zinc-600 text-sm",
                                            children: "No recent activity found."
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                            lineNumber: 363,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                        lineNumber: 359,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                lineNumber: 355,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                        lineNumber: 260,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-4 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-1 w-1 rounded-full bg-violet-500"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                        lineNumber: 374,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-zinc-400 font-medium text-sm uppercase tracking-wider",
                                        children: "Mission Control"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                        lineNumber: 375,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                lineNumber: 373,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-b from-violet-900/20 to-zinc-900 border border-violet-500/30 p-6 rounded-2xl relative overflow-hidden group hover:border-violet-500/50 transition duration-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-start mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-3 bg-violet-500/20 rounded-xl text-violet-300",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                                            size: 24
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                                            lineNumber: 383,
                                                            columnNumber: 37
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                                        lineNumber: 382,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-violet-500/20 text-violet-300 text-[10px] uppercase font-bold px-2 py-1 rounded",
                                                        children: "Recommended"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                                        lineNumber: 385,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                                lineNumber: 381,
                                                columnNumber: 29
                                            }, this),
                                            recommendation ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-zinc-400 text-xs uppercase font-bold tracking-wider mb-1",
                                                        children: "Daily Challenge"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                                        lineNumber: 392,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-mono text-2xl text-white font-bold mb-2 leading-tight",
                                                        children: recommendation.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                                        lineNumber: 393,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2 text-xs text-violet-300/60 mb-6",
                                                        children: [
                                                            recommendation.tags.slice(0, 3).join(', '),
                                                            " • ",
                                                            recommendation.rating
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                                        lineNumber: 394,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: `https://codeforces.com/problemset/problem/${recommendation.contestId}/${recommendation.index}`,
                                                        target: "_blank",
                                                        className: "w-full flex items-center justify-center gap-2 text-sm bg-violet-600 hover:bg-violet-500 text-white px-4 py-3 rounded-xl font-bold transition shadow-lg shadow-violet-900/20",
                                                        children: [
                                                            "Solve Now ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                                                lineNumber: 402,
                                                                columnNumber: 51
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                                        lineNumber: 397,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-zinc-500 py-4",
                                                children: "Scanning your stats for correct difficulty..."
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                                lineNumber: 406,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                        lineNumber: 380,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -bottom-10 -right-10 w-40 h-40 bg-violet-600/10 blur-[50px] rounded-full pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                        lineNumber: 410,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                lineNumber: 379,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-zinc-900/40 border border-zinc-800 rounded-2xl p-4 space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between p-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2 bg-yellow-500/10 rounded-lg text-yellow-400",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                                            lineNumber: 417,
                                                            columnNumber: 98
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                                        lineNumber: 417,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-zinc-400 text-sm",
                                                        children: "Tier"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                                        lineNumber: 418,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                                lineNumber: 416,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-white",
                                                children: stats.rank
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                                lineNumber: 420,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                        lineNumber: 415,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between p-2 border-t border-zinc-800/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2 bg-orange-500/10 rounded-lg text-orange-400",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                                            lineNumber: 424,
                                                            columnNumber: 98
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                                        lineNumber: 424,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-zinc-400 text-sm",
                                                        children: "Streak"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                                        lineNumber: 425,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                                lineNumber: 423,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-white",
                                                children: [
                                                    stats.streak,
                                                    " Days"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                                lineNumber: 427,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                        lineNumber: 422,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between p-2 border-t border-zinc-800/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2 bg-green-500/10 rounded-lg text-green-400",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                                            lineNumber: 431,
                                                            columnNumber: 96
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                                        lineNumber: 431,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-zinc-400 text-sm",
                                                        children: "Solved"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                                        lineNumber: 432,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                                lineNumber: 430,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-white",
                                                children: stats.totalSolved
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                                lineNumber: 434,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                        lineNumber: 429,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                lineNumber: 414,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-zinc-900/40 rounded-2xl border border-zinc-800/50 overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 border-b border-zinc-800/50 flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xs font-bold text-zinc-500 uppercase",
                                                children: "Rival Watch"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                                lineNumber: 441,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "text-xs text-zinc-600 hover:text-zinc-400",
                                                children: "Manage"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                                lineNumber: 442,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                        lineNumber: 440,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$features$2f$RivalryWidget$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RivalryWidget"], {
                                            user: user,
                                            compact: true
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                            lineNumber: 445,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                        lineNumber: 444,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/DashboardClient.tsx",
                                lineNumber: 439,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                        lineNumber: 372,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/DashboardClient.tsx",
                lineNumber: 257,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$features$2f$onboarding$2f$ProductTour$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductTour"], {}, void 0, false, {
                fileName: "[project]/app/dashboard/DashboardClient.tsx",
                lineNumber: 452,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/DashboardClient.tsx",
        lineNumber: 235,
        columnNumber: 9
    }, this);
}
_s(DashboardClient, "RLW/tF+v5HIr8tR1NrnGZbIKJrw=");
_c = DashboardClient;
function DashboardLink({ href, title, desc, icon, color, bg, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: href,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group relative p-4 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden", bg, className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-2 rounded-lg w-fit mb-3 transition-colors", color.replace('text-', 'bg-') + '/10', color),
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                        lineNumber: 468,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-bold text-lg mb-0.5 text-zinc-200 group-hover:text-white transition"),
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                        lineNumber: 471,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-zinc-500 group-hover:text-zinc-400",
                        children: desc
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/DashboardClient.tsx",
                        lineNumber: 472,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/DashboardClient.tsx",
                lineNumber: 467,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute -right-4 -bottom-4 opacity-0 group-hover:opacity-10 transition-opacity duration-500", color)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/DashboardClient.tsx",
                lineNumber: 475,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/DashboardClient.tsx",
        lineNumber: 459,
        columnNumber: 9
    }, this);
}
_c1 = DashboardLink;
function getRatingColor(rating) {
    if (!rating) return "text-white border-zinc-600";
    if (rating < 1200) return "text-gray-300 border-gray-600 bg-gray-500/10";
    if (rating < 1400) return "text-green-400 border-green-700 bg-green-500/10";
    if (rating < 1600) return "text-cyan-400 border-cyan-700 bg-cyan-500/10";
    if (rating < 1900) return "text-blue-500 border-blue-800 bg-blue-500/10";
    if (rating < 2100) return "text-purple-400 border-purple-700 bg-purple-500/10";
    if (rating < 2400) return "text-orange-400 border-orange-700 bg-orange-500/10";
    return "text-red-500 border-red-700 bg-red-500/10";
}
var _c, _c1;
__turbopack_context__.k.register(_c, "DashboardClient");
__turbopack_context__.k.register(_c1, "DashboardLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_308b88f2._.js.map