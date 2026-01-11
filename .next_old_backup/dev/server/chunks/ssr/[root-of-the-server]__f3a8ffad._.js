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
                revalidate: 0
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
"[project]/lib/db.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "pool",
    ()=>pool,
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import, [project]/node_modules/pg)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/node_modules/@prisma/client)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
let pool;
if (!global.pgPool) {
    global.pgPool = new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["Pool"]({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        },
        max: 5,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 2000
    });
}
pool = global.pgPool;
// -----------------------------------------------------------------------------
// 2. Prisma Client (For NextAuth, Type-Safe ORM, and Migrations)
// -----------------------------------------------------------------------------
const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma || new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClient"]();
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = prisma;
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/auth.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "auth",
    ()=>auth,
    "handlers",
    ()=>handlers,
    "signIn",
    ()=>signIn,
    "signOut",
    ()=>signOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$google$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/providers/google.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$node_modules$2f40$auth$2f$core$2f$providers$2f$google$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/node_modules/@auth/core/providers/google.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$prisma$2d$adapter$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@auth/prisma-adapter/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const { handlers, auth, signIn, signOut } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
    debug: true,
    adapter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$prisma$2d$adapter$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrismaAdapter"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"]),
    providers: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$node_modules$2f40$auth$2f$core$2f$providers$2f$google$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET
        })
    ],
    callbacks: {
        async session ({ session, user }) {
            try {
                if (session.user) {
                    // Fetch extended user details (handle, etc)
                    const dbUser = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
                        where: {
                            id: user.id
                        }
                    });
                    if (dbUser) {
                        // Inject into session
                        session.user.codeforcesHandle = dbUser.codeforcesHandle;
                        session.user.rank = dbUser.rank;
                        session.user.rating = dbUser.rating;
                        session.user.id = user.id;
                    }
                }
            } catch (e) {
                console.error("SESSION CALLBACK ERROR:", e);
            }
            return session;
        }
    },
    pages: {
        signIn: '/login'
    }
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/app/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"006f25accfaa7d3f99d1feade969e9170a4f239e3b":"getContests","00f96856d535a990beb4540c73d34ca84984f7dd78":"seedSkills","401ce2eedf29c5653b30c6423dec8536c63a437e5d":"getRivals","403bcbd4daba7e12bdd3cc67e24c156861f1c98197":"getDueFlashcards","40425e834eff0591465653416d14b501cc717ceeed":"verifySubmissionAuth","40520a2b44dd4ac4f8fa317908a15284310d93ce99":"getRivalHistory","406658f6265698984035112808e3db3abd1996bd25":"verifyUser","407533944573458631de7650fc106143fd9f7a2e61":"getUserSkills","407c1ce181e847cb7dcc2757bfcce8163b4ee4cf8b":"linkUserHandle","407e374e0ddc97a006bafc145d4c86173579e17666":"getSubmissions","40a4c75babbb3b276786237642c7121842996d44d8":"getRivalActivity","40c97b0135d98c84b4878951770aa96c849f0a1969":"processReview","40d901821efbbc33dbb4e5dff49e1a6535b1b251eb":"searchProblems","40df22f103dc5d62a6c047b8f1560231d9ab9e9dce":"getProblemTags","40ffd66f6e2fdf1be97a7175da19be83a4b632c09e":"getAllFlashcards","602aff27313e7ea81a3f2a05f04617975ebeba8fda":"removePinnedRival","6050cd750607f05df5f8be67038817822c648407c2":"addPinnedRival","606941c5a1729f6b7466fbfbb8f561ea04ee7bed05":"verifyOwnership","60778efe2bb1c913deb5ac0cadcb73941d84ed756d":"addToReviewQueue","60a545c6402cbfed2bd68794e2aeaae7d08da29f9a":"getProblemsByRating","60a62555e39cb7e413ff6407818f840327adf3734a":"syncUserStats","7847fcc4ca1c4b85f89006b386dd58cef4aa25c736":"generateMashup"},"",""] */ __turbopack_context__.s([
    "addPinnedRival",
    ()=>addPinnedRival,
    "addToReviewQueue",
    ()=>addToReviewQueue,
    "generateMashup",
    ()=>generateMashup,
    "getAllFlashcards",
    ()=>getAllFlashcards,
    "getContests",
    ()=>getContests,
    "getDueFlashcards",
    ()=>getDueFlashcards,
    "getProblemTags",
    ()=>getProblemTags,
    "getProblemsByRating",
    ()=>getProblemsByRating,
    "getRivalActivity",
    ()=>getRivalActivity,
    "getRivalHistory",
    ()=>getRivalHistory,
    "getRivals",
    ()=>getRivals,
    "getSubmissions",
    ()=>getSubmissions,
    "getUserSkills",
    ()=>getUserSkills,
    "linkUserHandle",
    ()=>linkUserHandle,
    "processReview",
    ()=>processReview,
    "removePinnedRival",
    ()=>removePinnedRival,
    "searchProblems",
    ()=>searchProblems,
    "seedSkills",
    ()=>seedSkills,
    "syncUserStats",
    ()=>syncUserStats,
    "verifyOwnership",
    ()=>verifyOwnership,
    "verifySubmissionAuth",
    ()=>verifySubmissionAuth,
    "verifyUser",
    ()=>verifyUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$codeforces$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/codeforces.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-rsc] (ecmascript)");
// ... imports
var __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const API_BASE = "https://codeforces.com/api";
;
;
async function linkUserHandle(handle) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session || !session.user || !session.user.id) {
        return {
            error: "Unauthorized"
        };
    }
    const userId = session.user.id;
    // Verify Codeforces existence again just to be sure
    const cfUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$codeforces$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCFUser"])(handle);
    if (!cfUser) return {
        error: "Handle not found"
    };
    // Check if handle is already taken by ANOTHER user
    const existingUser = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
        where: {
            codeforcesHandle: cfUser.handle
        } // use canonical handle
    });
    if (existingUser) {
        if (existingUser.id === userId) {
            return {
                success: true
            }; // Already linked to self
        }
        // HANDLE MERGE: Legacy User (with handle) <-> New User (with Google)
        try {
            // 1. Move Google Account link to the Legacy User
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].account.updateMany({
                where: {
                    userId: userId
                },
                data: {
                    userId: existingUser.id
                }
            });
            // 2. Update Legacy User with Email/Image from the new Google session
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.update({
                where: {
                    id: existingUser.id
                },
                data: {
                    email: session.user.email,
                    image: session.user.image || existingUser.image,
                    emailVerified: new Date()
                }
            });
            // 3. Delete the temporary User created by Google Login
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.delete({
                where: {
                    id: userId
                }
            });
            return {
                success: true,
                merged: true
            };
        } catch (e) {
            console.error("Merge failed", e);
            return {
                error: "Failed to merge accounts. Please contact support."
            };
        }
    }
    // Standard Link (Handle was free)
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.update({
            where: {
                id: userId
            },
            data: {
                codeforcesHandle: cfUser.handle,
                rating: cfUser.rating || 0,
                rank: cfUser.rank || "unrated",
                image: cfUser.titlePhoto
            }
        });
        return {
            success: true
        };
    } catch (e) {
        console.error("Link failed", e);
        return {
            error: "Failed to link. Handle might be taken."
        };
    }
}
async function verifyUser(handle) {
    const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$codeforces$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCFUser"])(handle);
    if (user) {
        // Sync with DB
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.upsert({
            where: {
                codeforcesHandle: user.handle
            },
            update: {
                rating: user.rating || 0,
                rank: user.rank || "unrated",
                image: user.titlePhoto
            },
            create: {
                codeforcesHandle: user.handle,
                rating: user.rating || 0,
                rank: user.rank || "unrated",
                image: user.titlePhoto
            }
        });
    }
    return user;
}
async function syncUserStats(handle, stats) {
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
        where: {
            codeforcesHandle: handle
        }
    });
    if (!user) return;
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].userStats.upsert({
        where: {
            userId: user.id
        },
        update: {
            currentStreak: stats.currentStreak,
            totalSolved: stats.totalSolved,
            maxRating: stats.maxRating,
            lastActive: stats.lastActive
        },
        create: {
            userId: user.id,
            currentStreak: stats.currentStreak,
            totalSolved: stats.totalSolved,
            maxRating: stats.maxRating,
            lastActive: stats.lastActive
        }
    });
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
async function addPinnedRival(handle, rivalHandle) {
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
        where: {
            codeforcesHandle: handle
        }
    });
    if (!user) return {
        error: "User not found. Please refresh."
    };
    // 1. Validate Rival exists
    const rivalInfo = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$codeforces$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCFUser"])(rivalHandle);
    if (!rivalInfo) {
        return {
            error: `User '${rivalHandle}' not found on Codeforces.`
        };
    }
    const realRivalHandle = rivalInfo.handle; // Use official casing
    if (realRivalHandle.toLowerCase() === handle.toLowerCase()) {
        return {
            error: "You cannot pin yourself."
        };
    }
    // 2. Limit to 3 rivals
    const count = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].pinnedRival.count({
        where: {
            userId: user.id
        }
    });
    if (count >= 3) return {
        error: "Max 3 rivals allowed. Unpin someone first."
    };
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].pinnedRival.create({
            data: {
                userId: user.id,
                rivalHandle: realRivalHandle
            }
        });
        return {
            success: true
        };
    } catch  {
        return {
            error: "Already pinned"
        }; // Prisma unique constraint
    }
}
async function getRivals(handle) {
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
        where: {
            codeforcesHandle: handle
        },
        include: {
            pinnedRivals: true
        }
    });
    if (!user) return [];
    const rivals = user.pinnedRivals.map((r)=>r.rivalHandle);
    if (rivals.length === 0) return [];
    // Fetch live data from CF for all rivals
    const promises = rivals.map(async (h)=>{
        const info = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$codeforces$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCFUser"])(h);
        return info || {
            handle: h,
            rating: 0,
            rank: 'unrated',
            titlePhoto: 'https://userpic.codeforces.org/no-title.jpg'
        }; // Fallback
    });
    return await Promise.all(promises);
}
async function removePinnedRival(handle, rivalHandle) {
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
        where: {
            codeforcesHandle: handle
        }
    });
    if (!user) return {
        error: "User not found"
    };
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].pinnedRival.deleteMany({
            where: {
                userId: user.id,
                rivalHandle: rivalHandle
            }
        });
        return {
            success: true
        };
    } catch (e) {
        console.error("Failed to unpin", e);
        return {
            error: "Failed to remove rival"
        };
    }
}
async function searchProblems(query) {
    try {
        if (query.length < 2) return [];
        // Fetch user permissions/problemset (using public API for now)
        // We'll trust the problemset.problems endpoint to be cached by Next.js
        const res = await fetch(`${API_BASE}/problemset.problems`, {
            next: {
                revalidate: 3600
            }
        });
        const data = await res.json();
        if (data.status !== "OK") return [];
        const q = query.toLowerCase();
        // Search by ID (e.g. "4A") or Name (e.g. "Watermelon")
        const matches = data.result.problems.filter((p)=>{
            const id = `${p.contestId}${p.index}`.toLowerCase();
            const name = p.name.toLowerCase();
            return id.includes(q) || name.includes(q);
        }).slice(0, 10) // Limit to 10 results
        .map((p)=>({
                id: `${p.contestId}${p.index}`,
                name: p.name,
                rating: p.rating
            }));
        return matches;
    } catch (err) {
        console.error(err);
        return [];
    }
}
async function getProblemTags(problemId) {
    try {
        const res = await fetch(`${API_BASE}/problemset.problems`, {
            next: {
                revalidate: 3600
            }
        });
        const data = await res.json();
        if (data.status !== "OK") return [];
        // Parse ID (e.g. "4A" -> contestId: 4, index: "A")
        // But the input might be just "4A".
        // Robust matching:
        const target = problemId.toUpperCase();
        const problem = data.result.problems.find((p)=>`${p.contestId}${p.index}` === target);
        return problem ? problem.tags : [];
    } catch (e) {
        console.error(e);
        return [];
    }
}
async function addToReviewQueue(handle, problem) {
    console.log(`[Flashback] Adding ${problem.id} for ${handle}`);
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
        where: {
            codeforcesHandle: handle
        }
    });
    if (!user) {
        return {
            error: "User not found. Please sync dashboard."
        };
    }
    // Check if already exists (using findFirst to avoid unique constraint type issues if client didn't regen)
    const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].reviewQueue.findFirst({
        where: {
            userId: user.id,
            problemId: problem.id
        }
    });
    if (existing) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].reviewQueue.update({
            where: {
                id: existing.id
            },
            data: {
                nextReviewDate: new Date(),
                status: 'reviewing'
            }
        });
        return {
            success: true,
            message: "Review rescheduled to now"
        };
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].reviewQueue.create({
        data: {
            userId: user.id,
            problemId: problem.id,
            problemName: problem.name,
            status: "learning"
        }
    });
    return {
        success: true
    };
}
async function seedSkills() {
    // Basic CP Hierarchy
    const skills = [
        {
            name: "Time Complexity",
            slug: "complexity",
            tier: 1,
            dep: []
        },
        {
            name: "Basic Math",
            slug: "math",
            tier: 1,
            dep: []
        },
        {
            name: "Arrays & Strings",
            slug: "arrays",
            tier: 1,
            dep: []
        },
        {
            name: "Number Theory",
            slug: "number-theory",
            tier: 2,
            dep: [
                "math"
            ]
        },
        {
            name: "Binary Search",
            slug: "binary-search",
            tier: 2,
            dep: [
                "complexity",
                "arrays"
            ]
        },
        {
            name: "Two Pointers",
            slug: "two-pointers",
            tier: 2,
            dep: [
                "arrays"
            ]
        },
        {
            name: "Sorting & Greedy",
            slug: "greedy",
            tier: 2,
            dep: [
                "arrays",
                "complexity"
            ]
        },
        {
            name: "Recursion",
            slug: "recursion",
            tier: 2,
            dep: [
                "complexity"
            ]
        },
        {
            name: "Dynamic Programming",
            slug: "dp",
            tier: 3,
            dep: [
                "recursion"
            ]
        },
        {
            name: "Graph Theory",
            slug: "graphs",
            tier: 3,
            dep: [
                "recursion",
                "arrays"
            ]
        },
        {
            name: "Trees",
            slug: "trees",
            tier: 3,
            dep: [
                "graphs"
            ]
        },
        {
            name: "Segment Trees",
            slug: "segtree",
            tier: 4,
            dep: [
                "trees",
                "binary-search"
            ]
        },
        {
            name: "Network Flow",
            slug: "flow",
            tier: 4,
            dep: [
                "graphs"
            ]
        }
    ];
    try {
        for (const s of skills){
            // Upsert Skill
            const skill = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].skill.upsert({
                where: {
                    slug: s.slug
                },
                update: {},
                create: {
                    name: s.name,
                    slug: s.slug,
                    tier: s.tier
                }
            });
            // Handle Dependencies
            for (const depSlug of s.dep){
                const parent = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].skill.findUnique({
                    where: {
                        slug: depSlug
                    }
                });
                if (parent) {
                    // Check if link exists
                    const exists = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].skillDependency.findUnique({
                        where: {
                            skillId_prerequisiteId: {
                                skillId: skill.id,
                                prerequisiteId: parent.id
                            }
                        }
                    });
                    if (!exists) {
                        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].skillDependency.create({
                            data: {
                                skillId: skill.id,
                                prerequisiteId: parent.id
                            }
                        });
                    }
                }
            }
        }
        return {
            success: true,
            message: "Skill Tree Seeded Successfully"
        };
    } catch (e) {
        console.error("Seeding Error:", e);
        return {
            error: "Failed to seed skills"
        };
    }
}
async function getUserSkills(handle) {
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
        where: {
            codeforcesHandle: handle
        }
    });
    if (!user) return [];
    // Get all skills with dependencies
    const allSkills = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].skill.findMany({
        include: {
            prerequisites: true
        }
    });
    // Get user progress
    const userProgress = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].userSkill.findMany({
        where: {
            userId: user.id
        }
    });
    // Merge logic
    // A skill is UNLOCKED if all prerequisites are MASTERED (masteryLevel >= 100)
    // Or if it has no prerequisites (Tier 1)
    return allSkills.map((skill)=>{
        const progress = userProgress.find((up)=>up.skillId === skill.id);
        const mastery = progress ? progress.masteryLevel : 0;
        // check unlock status
        let unlocked = true;
        if (skill.prerequisites.length > 0) {
            const prereqIds = skill.prerequisites.map((p)=>p.prerequisiteId);
            // Check if user has mastered all prereqs
            const masteredPrereqs = userProgress.filter((up)=>prereqIds.includes(up.skillId) && up.masteryLevel >= 100);
            if (masteredPrereqs.length < prereqIds.length) {
                unlocked = false;
            }
        }
        return {
            ...skill,
            mastery,
            unlocked: unlocked || skill.tier === 1 // Tier 1 always unlocked
        };
    });
}
async function getDueFlashcards(handle) {
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
        where: {
            codeforcesHandle: handle
        }
    });
    if (!user) return [];
    const now = new Date();
    return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].reviewQueue.findMany({
        where: {
            userId: user.id,
            nextReviewDate: {
                lte: now
            }
        },
        orderBy: {
            nextReviewDate: 'asc'
        }
    });
}
async function processReview(request) {
    const card = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].reviewQueue.findUnique({
        where: {
            id: request.id
        }
    });
    if (!card) return;
    let { easeFactor, interval, repetitions } = card;
    const q = request.quality;
    // SM-2 Algorithm (Modified)
    // Quality: 0 (Forgot) to 5 (Easy)
    if (q >= 3) {
        if (repetitions === 0) {
            // First successful review
            // Constraint: Min 3 days start if good/easy
            interval = 3;
        } else if (repetitions === 1) {
            interval = 6;
        } else {
            interval = Math.round(interval * easeFactor);
        }
        repetitions++;
        // Standard SM-2 EF update
        easeFactor = easeFactor + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
        if (easeFactor < 1.3) easeFactor = 1.3;
    } else {
        // Forgot
        repetitions = 0;
        interval = 1; // Reset to 1 day
    }
    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + interval);
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].reviewQueue.update({
        where: {
            id: request.id
        },
        data: {
            easeFactor,
            interval,
            repetitions,
            nextReviewDate: nextDate,
            // Only update lastReviewedAt if successful (repaired). 
            // If failed, visual health should remain low (rusted).
            ...q >= 3 ? {
                lastReviewedAt: new Date()
            } : {},
            status: q >= 4 ? "mastered" : "reviewing"
        }
    });
}
async function getAllFlashcards(handle) {
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
        where: {
            codeforcesHandle: handle
        }
    });
    if (!user) return [];
    const all = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].reviewQueue.findMany({
        where: {
            userId: user.id
        },
        orderBy: {
            nextReviewDate: 'asc'
        }
    });
    return all.map((item)=>({
            ...item,
            isDue: new Date(item.nextReviewDate) <= new Date()
        }));
}
async function getRivalActivity(handles) {
    // Parallel fetching with 5-minute cache
    const promises = handles.map(async (handle)=>{
        try {
            const res = await fetch(`https://codeforces.com/api/user.status?handle=${handle}&from=1&count=10`, {
                next: {
                    revalidate: 300
                }
            });
            const data = await res.json();
            if (data.status === 'OK') {
                return data.result.map((sub)=>({
                        ...sub,
                        handle
                    }));
            }
        } catch (e) {
            console.error(`[RivalActivity] Network error for ${handle}`);
        }
        return [];
    });
    const results = await Promise.all(promises);
    const allSubs = results.flat();
    // Sort by recent first
    return allSubs.sort((a, b)=>b.creationTimeSeconds - a.creationTimeSeconds).slice(0, 30);
}
async function getRivalHistory(handles) {
    // Parallel fetching with 1-hour cache (Ratings update rarely)
    const promises = handles.map(async (handle)=>{
        try {
            const res = await fetch(`https://codeforces.com/api/user.rating?handle=${handle}`, {
                next: {
                    revalidate: 3600
                }
            });
            const data = await res.json();
            if (data.status === 'OK') {
                return {
                    handle,
                    history: data.result
                };
            }
        } catch (e) {
            console.error(e);
        }
        return {
            handle,
            history: []
        };
    });
    return await Promise.all(promises);
}
async function verifyOwnership(handle, token) {
    try {
        // Fetch fresh user data from Codeforces
        const res = await fetch(`https://codeforces.com/api/user.info?handles=${handle}&checkHistoricHandles=false`);
        const data = await res.json();
        if (data.status === 'OK' && data.result.length > 0) {
            const user = data.result[0];
            // Check if token is present in firstName or lastName (case insensitive)
            const fn = (user.firstName || '').toLowerCase();
            const ln = (user.lastName || '').toLowerCase();
            const tk = token.toLowerCase();
            if (fn.includes(tk) || ln.includes(tk)) {
                return {
                    success: true
                };
            }
        }
    } catch (e) {
        console.error("Verification failed", e);
    }
    return {
        success: false
    };
}
async function verifySubmissionAuth(handle) {
    try {
        // Fetch last 5 submissions
        const res = await fetch(`https://codeforces.com/api/user.status?handle=${handle}&from=1&count=5`);
        const data = await res.json();
        if (data.status === 'OK' && data.result.length > 0) {
            // Check for specific signal:
            // Problem: 4A (Watermelon)
            // Verdict: COMPILATION_ERROR (Easiest to force safely)
            // Time: Last 5 minutes
            const now = Math.floor(Date.now() / 1000);
            const verified = data.result.find((sub)=>sub.problem.contestId === 4 && sub.problem.index === 'A' && sub.verdict === 'COMPILATION_ERROR' && now - sub.creationTimeSeconds < 300 // 5 mins
            );
            if (verified) return {
                success: true
            };
        }
    } catch (e) {
        console.error("Submission check failed", e);
    }
    return {
        success: false
    };
}
async function generateMashup(handle, minRating = 800, maxRating = 2000, count = 5) {
    try {
        // 1. Fetch User Submissions (last 500)
        const subRes = await fetch(`https://codeforces.com/api/user.status?handle=${handle}&from=1&count=500`);
        const subData = await subRes.json();
        const weakTags = new Set();
        if (subData.status === 'OK') {
            const tagFailures = {};
            const tagTotal = {};
            // Analyze failures
            subData.result.forEach((s)=>{
                s.problem.tags.forEach((t)=>{
                    if (!tagTotal[t]) {
                        tagTotal[t] = 0;
                        tagFailures[t] = 0;
                    }
                    tagTotal[t]++;
                    if (s.verdict !== 'OK') tagFailures[t]++;
                });
            });
            // Identify weak tags (Failure rate > 40% and at least 3 attempts)
            Object.keys(tagTotal).forEach((t)=>{
                if (tagTotal[t] >= 3 && tagFailures[t] / tagTotal[t] > 0.4) {
                    weakTags.add(t);
                }
            });
        }
        // 2. Determine Tags to use (Weakest or Random Standard ones if no weakness found)
        const targetTags = weakTags.size > 0 ? Array.from(weakTags) : [
            "dp",
            "greedy",
            "graphs",
            "math",
            "trees"
        ];
        // 3. Generate Problems
        // Linear interpolation for ratings
        const ratings = [];
        if (count === 1) {
            ratings.push(minRating);
        } else {
            const step = Math.floor((maxRating - minRating) / (count - 1));
            for(let i = 0; i < count; i++){
                ratings.push(minRating + step * i);
            }
        }
        const problems = [];
        // Helper to fetch random problem of rating & tag
        for (const r of ratings){
            // Round to nearest 100 for CF API usually
            const effectiveRating = Math.round(r / 100) * 100;
            // Pick a random tag from targetTags for this slot
            const tag = targetTags[Math.floor(Math.random() * targetTags.length)];
            // Fetch potential problems (cached endpoint)
            const p = await getProblemsByRating(effectiveRating, tag);
            if (p.length > 0) {
                // Pick random
                const randomProb = p[Math.floor(Math.random() * p.length)];
                problems.push({
                    ...randomProb,
                    chosenTag: tag
                });
            }
        }
        return {
            success: true,
            problems,
            weakTags: Array.from(weakTags)
        };
    } catch (e) {
        console.error("Mashup gen failed", e);
        return {
            success: false,
            error: "Failed to generate mashup"
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    linkUserHandle,
    verifyUser,
    syncUserStats,
    getSubmissions,
    getProblemsByRating,
    getContests,
    addPinnedRival,
    getRivals,
    removePinnedRival,
    searchProblems,
    getProblemTags,
    addToReviewQueue,
    seedSkills,
    getUserSkills,
    getDueFlashcards,
    processReview,
    getAllFlashcards,
    getRivalActivity,
    getRivalHistory,
    verifyOwnership,
    verifySubmissionAuth,
    generateMashup
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(linkUserHandle, "407c1ce181e847cb7dcc2757bfcce8163b4ee4cf8b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(verifyUser, "406658f6265698984035112808e3db3abd1996bd25", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(syncUserStats, "60a62555e39cb7e413ff6407818f840327adf3734a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSubmissions, "407e374e0ddc97a006bafc145d4c86173579e17666", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProblemsByRating, "60a545c6402cbfed2bd68794e2aeaae7d08da29f9a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getContests, "006f25accfaa7d3f99d1feade969e9170a4f239e3b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addPinnedRival, "6050cd750607f05df5f8be67038817822c648407c2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getRivals, "401ce2eedf29c5653b30c6423dec8536c63a437e5d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(removePinnedRival, "602aff27313e7ea81a3f2a05f04617975ebeba8fda", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(searchProblems, "40d901821efbbc33dbb4e5dff49e1a6535b1b251eb", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProblemTags, "40df22f103dc5d62a6c047b8f1560231d9ab9e9dce", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addToReviewQueue, "60778efe2bb1c913deb5ac0cadcb73941d84ed756d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(seedSkills, "00f96856d535a990beb4540c73d34ca84984f7dd78", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUserSkills, "407533944573458631de7650fc106143fd9f7a2e61", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDueFlashcards, "403bcbd4daba7e12bdd3cc67e24c156861f1c98197", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(processReview, "40c97b0135d98c84b4878951770aa96c849f0a1969", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAllFlashcards, "40ffd66f6e2fdf1be97a7175da19be83a4b632c09e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getRivalActivity, "40a4c75babbb3b276786237642c7121842996d44d8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getRivalHistory, "40520a2b44dd4ac4f8fa317908a15284310d93ce99", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(verifyOwnership, "606941c5a1729f6b7466fbfbb8f561ea04ee7bed05", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(verifySubmissionAuth, "40425e834eff0591465653416d14b501cc717ceeed", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generateMashup, "7847fcc4ca1c4b85f89006b386dd58cef4aa25c736", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/dashboard/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
;
;
;
;
;
;
;
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/dashboard/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "006f25accfaa7d3f99d1feade969e9170a4f239e3b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getContests"],
    "00f96856d535a990beb4540c73d34ca84984f7dd78",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedSkills"],
    "401ce2eedf29c5653b30c6423dec8536c63a437e5d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRivals"],
    "403bcbd4daba7e12bdd3cc67e24c156861f1c98197",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDueFlashcards"],
    "40425e834eff0591465653416d14b501cc717ceeed",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifySubmissionAuth"],
    "40520a2b44dd4ac4f8fa317908a15284310d93ce99",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRivalHistory"],
    "406658f6265698984035112808e3db3abd1996bd25",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyUser"],
    "407533944573458631de7650fc106143fd9f7a2e61",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserSkills"],
    "407c1ce181e847cb7dcc2757bfcce8163b4ee4cf8b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["linkUserHandle"],
    "407e374e0ddc97a006bafc145d4c86173579e17666",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSubmissions"],
    "40a4c75babbb3b276786237642c7121842996d44d8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRivalActivity"],
    "40c97b0135d98c84b4878951770aa96c849f0a1969",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["processReview"],
    "40d901821efbbc33dbb4e5dff49e1a6535b1b251eb",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["searchProblems"],
    "40df22f103dc5d62a6c047b8f1560231d9ab9e9dce",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProblemTags"],
    "40ffd66f6e2fdf1be97a7175da19be83a4b632c09e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllFlashcards"],
    "602aff27313e7ea81a3f2a05f04617975ebeba8fda",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removePinnedRival"],
    "6050cd750607f05df5f8be67038817822c648407c2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addPinnedRival"],
    "606941c5a1729f6b7466fbfbb8f561ea04ee7bed05",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyOwnership"],
    "60778efe2bb1c913deb5ac0cadcb73941d84ed756d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addToReviewQueue"],
    "60a545c6402cbfed2bd68794e2aeaae7d08da29f9a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProblemsByRating"],
    "60a62555e39cb7e413ff6407818f840327adf3734a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["syncUserStats"],
    "7847fcc4ca1c4b85f89006b386dd58cef4aa25c736",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateMashup"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/dashboard/page/actions.js { ACTIONS_MODULE0 => "[project]/app/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f3a8ffad._.js.map