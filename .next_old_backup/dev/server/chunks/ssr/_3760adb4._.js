module.exports = [
"[project]/lib/codeforces.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCFUser",
    ()=>getCFUser,
    "getUserSubmissions",
    ()=>getUserSubmissions
]);
const API_BASE = "https://codeforces.com/api";
async function getCFUser(handle) {
    try {
        const res = await fetch(`${API_BASE}/user.info?handles=${handle}`, {
            next: {
                revalidate: 3600
            }
        });
        const data = await res.json();
        if (data.status === "OK" && data.result.length > 0) return data.result[0];
        return null;
    } catch (err) {
        console.error("CF API Error:", err);
        return null;
    }
}
async function getUserSubmissions(handle) {
    try {
        const res = await fetch(`${API_BASE}/user.status?handle=${handle}`, {
            next: {
                revalidate: 600
            }
        });
        const data = await res.json();
        if (data.status === "OK") return data.result;
        return [];
    } catch (err) {
        console.error("CF Submissions Error:", err);
        return [];
    }
}
}),
"[project]/app/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"006f25accfaa7d3f99d1feade969e9170a4f239e3b":"getContests","406658f6265698984035112808e3db3abd1996bd25":"verifyUser","407e374e0ddc97a006bafc145d4c86173579e17666":"getSubmissions","60a545c6402cbfed2bd68794e2aeaae7d08da29f9a":"getProblemsByRating"},"",""] */ __turbopack_context__.s([
    "getContests",
    ()=>getContests,
    "getProblemsByRating",
    ()=>getProblemsByRating,
    "getSubmissions",
    ()=>getSubmissions,
    "verifyUser",
    ()=>verifyUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$codeforces$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/codeforces.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
const API_BASE = "https://codeforces.com/api";
async function verifyUser(handle) {
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$codeforces$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCFUser"])(handle);
}
async function getSubmissions(handle) {
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$codeforces$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserSubmissions"])(handle);
}
async function getProblemsByRating(rating, tag = "") {
    try {
        const url = tag ? `${API_BASE}/problemset.problems?tags=${tag}` : `${API_BASE}/problemset.problems`;
        const res = await fetch(url, {
            next: {
                revalidate: 3600
            }
        });
        const data = await res.json();
        if (data.status !== "OK") return [];
        // Filter by rating and ensure we don't get gym problems if possible (usually index is numeric-ish)
        const problems = data.result.problems.filter((p)=>p.rating === rating);
        return problems.slice(0, 50);
    } catch (err) {
        console.error(err);
        return [];
    }
}
async function getContests() {
    try {
        const res = await fetch(`${API_BASE}/contest.list`, {
            next: {
                revalidate: 3600
            }
        });
        const data = await res.json();
        if (data.status !== "OK") return [];
        // Filter for Div. 3 and Div. 4 contests that are FINISHED
        return data.result.filter((c)=>c.phase === 'FINISHED' && (c.name.includes("Div. 3") || c.name.includes("Div. 4"))).slice(0, 20); // Return top 20 recent ones
    } catch (err) {
        console.error(err);
        return [];
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    verifyUser,
    getSubmissions,
    getProblemsByRating,
    getContests
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(verifyUser, "406658f6265698984035112808e3db3abd1996bd25", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSubmissions, "407e374e0ddc97a006bafc145d4c86173579e17666", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProblemsByRating, "60a545c6402cbfed2bd68794e2aeaae7d08da29f9a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getContests, "006f25accfaa7d3f99d1feade969e9170a4f239e3b", null);
}),
"[project]/.next-internal/server/app/roadmap/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions.ts [app-rsc] (ecmascript)");
;
;
}),
"[project]/.next-internal/server/app/roadmap/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "407e374e0ddc97a006bafc145d4c86173579e17666",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSubmissions"],
    "60a545c6402cbfed2bd68794e2aeaae7d08da29f9a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProblemsByRating"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$roadmap$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/roadmap/page/actions.js { ACTIONS_MODULE0 => "[project]/app/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions.ts [app-rsc] (ecmascript)");
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable import/no-extraneous-dependencies */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "registerServerReference", {
    enumerable: true,
    get: function() {
        return _server.registerServerReference;
    }
});
const _server = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)"); //# sourceMappingURL=server-reference.js.map
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This function ensures that all the exported values are valid server actions,
// during the runtime. By definition all actions are required to be async
// functions, but here we can only check that they are functions.
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureServerEntryExports", {
    enumerable: true,
    get: function() {
        return ensureServerEntryExports;
    }
});
function ensureServerEntryExports(actions) {
    for(let i = 0; i < actions.length; i++){
        const action = actions[i];
        if (typeof action !== 'function') {
            throw Object.defineProperty(new Error(`A "use server" file can only export async functions, found ${typeof action}.\nRead more: https://nextjs.org/docs/messages/invalid-use-server-value`), "__NEXT_ERROR_CODE", {
                value: "E352",
                enumerable: false,
                configurable: true
            });
        }
    }
} //# sourceMappingURL=action-validate.js.map
}),
];

//# sourceMappingURL=_3760adb4._.js.map