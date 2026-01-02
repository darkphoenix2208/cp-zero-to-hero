'use server'
import { getCFUser, getUserSubmissions } from '@/lib/codeforces';

const API_BASE = "https://codeforces.com/api";

import { prisma } from '@/lib/db';

// ... imports
import { auth } from '@/auth';

export async function linkUserHandle(handle: string) {
    const session = await auth();
    if (!session || !session.user || !session.user.id) {
        return { error: "Unauthorized" };
    }

    const userId = session.user.id;

    // Verify Codeforces existence again just to be sure
    const cfUser = await getCFUser(handle);
    if (!cfUser) return { error: "Handle not found" };

    // Check if handle is already taken by ANOTHER user
    const existingUser = await prisma.user.findUnique({
        where: { codeforcesHandle: cfUser.handle } // use canonical handle
    });

    if (existingUser) {
        if (existingUser.id === userId) {
            return { success: true }; // Already linked to self
        }

        // HANDLE MERGE: Legacy User (with handle) <-> New User (with Google)
        try {
            // 1. Move Google Account link to the Legacy User
            await prisma.account.updateMany({
                where: { userId: userId },
                data: { userId: existingUser.id }
            });

            // 2. Update Legacy User with Email/Image from the new Google session
            await prisma.user.update({
                where: { id: existingUser.id },
                data: {
                    email: session.user.email,
                    image: session.user.image || existingUser.image, // Prefer Google image if none
                    emailVerified: new Date()
                }
            });

            // 3. Delete the temporary User created by Google Login
            await prisma.user.delete({
                where: { id: userId }
            });

            return { success: true, merged: true };
        } catch (e) {
            console.error("Merge failed", e);
            return { error: "Failed to merge accounts. Please contact support." };
        }
    }

    // Standard Link (Handle was free)
    try {
        await prisma.user.update({
            where: { id: userId },
            data: {
                codeforcesHandle: cfUser.handle,
                rating: cfUser.rating || 0,
                rank: cfUser.rank || "unrated",
                image: cfUser.titlePhoto
            }
        });
        return { success: true };
    } catch (e) {
        console.error("Link failed", e);
        return { error: "Failed to link. Handle might be taken." };
    }
}

export async function verifyUser(handle: string) {
    const user = await getCFUser(handle);
    if (user) {
        // Sync with DB
        await prisma.user.upsert({
            where: { codeforcesHandle: user.handle },
            update: {
                rating: user.rating || 0,
                rank: user.rank || "unrated",
                image: user.titlePhoto,
            },
            create: {
                codeforcesHandle: user.handle,
                rating: user.rating || 0,
                rank: user.rank || "unrated",
                image: user.titlePhoto,
            }
        });
    }
    return user;
}


export async function syncUserStats(handle: string, stats: { currentStreak: number; totalSolved: number; maxRating: number; lastActive: Date }) {
    const user = await prisma.user.findUnique({ where: { codeforcesHandle: handle } });
    if (!user) return;

    await prisma.userStats.upsert({
        where: { userId: user.id },
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

export async function getSubmissions(handle: string) {
    return await getUserSubmissions(handle);
}

export async function getProblemsByRating(rating: number, tag: string = "") {
    try {
        const url = tag
            ? `${API_BASE}/problemset.problems?tags=${tag}`
            : `${API_BASE}/problemset.problems`;

        const res = await fetch(url, { next: { revalidate: 3600 } });
        const data = await res.json();

        if (data.status !== "OK") return [];

        // Filter by rating and ensure we don't get gym problems if possible (usually index is numeric-ish)
        const problems = data.result.problems.filter((p: any) => p.rating === rating);
        return problems.slice(0, 50);
    } catch (err) {
        console.error(err);
        return [];
    }
}

export async function getContests() {
    try {
        const res = await fetch(`${API_BASE}/contest.list`, { next: { revalidate: 3600 } });
        const data = await res.json();
        if (data.status !== "OK") return [];

        // Filter for Div. 3 and Div. 4 contests that are FINISHED
        return data.result
            .filter((c: any) => c.phase === 'FINISHED' && (c.name.includes("Div. 3") || c.name.includes("Div. 4")))
            .slice(0, 20); // Return top 20 recent ones
    } catch (err) {
        console.error(err);
        return [];
    }
}

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// 🕵️ Stalker Mode (Rivalry Tracker)
// -----------------------------------------------------------------------------

export async function addPinnedRival(handle: string, rivalHandle: string) {
    const user = await prisma.user.findUnique({ where: { codeforcesHandle: handle } });
    if (!user) return { error: "User not found. Please refresh." };

    // 1. Validate Rival exists
    const rivalInfo = await getCFUser(rivalHandle);
    if (!rivalInfo) {
        return { error: `User '${rivalHandle}' not found on Codeforces.` };
    }
    const realRivalHandle = rivalInfo.handle; // Use official casing

    if (realRivalHandle.toLowerCase() === handle.toLowerCase()) {
        return { error: "You cannot pin yourself." };
    }

    // 2. Limit to 3 rivals
    const count = await prisma.pinnedRival.count({ where: { userId: user.id } });
    if (count >= 3) return { error: "Max 3 rivals allowed. Unpin someone first." };

    try {
        await prisma.pinnedRival.create({
            data: {
                userId: user.id,
                rivalHandle: realRivalHandle
            }
        });
        return { success: true };
    } catch {
        return { error: "Already pinned" }; // Prisma unique constraint
    }
}

export async function getRivals(handle: string) {
    const user = await prisma.user.findUnique({ where: { codeforcesHandle: handle }, include: { pinnedRivals: true } });
    if (!user) return [];

    const rivals = user.pinnedRivals.map(r => r.rivalHandle);
    if (rivals.length === 0) return [];

    // Fetch live data from CF for all rivals
    const promises = rivals.map(async (h) => {
        const info = await getCFUser(h);
        return info || { handle: h, rating: 0, rank: 'unrated' }; // Fallback
    });

    return await Promise.all(promises);
}
// -----------------------------------------------------------------------------

export async function removePinnedRival(handle: string, rivalHandle: string) {
    const user = await prisma.user.findUnique({ where: { codeforcesHandle: handle } });
    if (!user) return { error: "User not found" };

    try {
        await prisma.pinnedRival.deleteMany({
            where: {
                userId: user.id,
                rivalHandle: rivalHandle
            }
        });
        return { success: true };
    } catch (e) {
        console.error("Failed to unpin", e);
        return { error: "Failed to remove rival" };
    }
}

export async function searchProblems(query: string) {
    try {
        if (query.length < 2) return [];

        // Fetch user permissions/problemset (using public API for now)
        // We'll trust the problemset.problems endpoint to be cached by Next.js
        const res = await fetch(`${API_BASE}/problemset.problems`, { next: { revalidate: 3600 } });
        const data = await res.json();
        if (data.status !== "OK") return [];

        const q = query.toLowerCase();

        // Search by ID (e.g. "4A") or Name (e.g. "Watermelon")
        const matches = data.result.problems
            .filter((p: any) => {
                const id = `${p.contestId}${p.index}`.toLowerCase();
                const name = p.name.toLowerCase();
                return id.includes(q) || name.includes(q);
            })
            .slice(0, 10) // Limit to 10 results
            .map((p: any) => ({
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

// Helper to getting tags dynamically since DB persistence is tricky in dev env
export async function getProblemTags(problemId: string) {
    try {
        const res = await fetch(`${API_BASE}/problemset.problems`, { next: { revalidate: 3600 } });
        const data = await res.json();
        if (data.status !== "OK") return [];

        // Parse ID (e.g. "4A" -> contestId: 4, index: "A")
        // But the input might be just "4A".
        // Robust matching:
        const target = problemId.toUpperCase();

        const problem = data.result.problems.find((p: any) =>
            `${p.contestId}${p.index}` === target
        );

        return problem ? problem.tags : [];
    } catch (e) {
        console.error(e);
        return [];
    }
}

export async function addToReviewQueue(handle: string, problem: { id: string; name: string }) {
    console.log(`[Flashback] Adding ${problem.id} for ${handle}`);

    const user = await prisma.user.findUnique({ where: { codeforcesHandle: handle } });

    if (!user) {
        return { error: "User not found. Please sync dashboard." };
    }

    // Check if already exists (using findFirst to avoid unique constraint type issues if client didn't regen)
    const existing = await prisma.reviewQueue.findFirst({
        where: { userId: user.id, problemId: problem.id }
    });

    if (existing) {
        await prisma.reviewQueue.update({
            where: { id: existing.id },
            data: {
                nextReviewDate: new Date(),
                status: 'reviewing'
            }
        });
        return { success: true, message: "Review rescheduled to now" };
    }

    await prisma.reviewQueue.create({
        data: {
            userId: user.id,
            problemId: problem.id,
            problemName: problem.name,
            status: "learning"
        }
    });

    return { success: true };
}

// -----------------------------------------------------------------------------
// 🌳 RPG Skill Tree Actions
// -----------------------------------------------------------------------------

export async function seedSkills() {
    // Basic CP Hierarchy
    const skills = [
        { name: "Time Complexity", slug: "complexity", tier: 1, dep: [] },
        { name: "Basic Math", slug: "math", tier: 1, dep: [] },
        { name: "Arrays & Strings", slug: "arrays", tier: 1, dep: [] },

        { name: "Number Theory", slug: "number-theory", tier: 2, dep: ["math"] },
        { name: "Binary Search", slug: "binary-search", tier: 2, dep: ["complexity", "arrays"] },
        { name: "Two Pointers", slug: "two-pointers", tier: 2, dep: ["arrays"] },

        { name: "Sorting & Greedy", slug: "greedy", tier: 2, dep: ["arrays", "complexity"] },
        { name: "Recursion", slug: "recursion", tier: 2, dep: ["complexity"] },

        { name: "Dynamic Programming", slug: "dp", tier: 3, dep: ["recursion"] },
        { name: "Graph Theory", slug: "graphs", tier: 3, dep: ["recursion", "arrays"] },
        { name: "Trees", slug: "trees", tier: 3, dep: ["graphs"] },

        { name: "Segment Trees", slug: "segtree", tier: 4, dep: ["trees", "binary-search"] },
        { name: "Network Flow", slug: "flow", tier: 4, dep: ["graphs"] },
    ];

    try {
        for (const s of skills) {
            // Upsert Skill
            const skill = await prisma.skill.upsert({
                where: { slug: s.slug },
                update: {},
                create: { name: s.name, slug: s.slug, tier: s.tier }
            });

            // Handle Dependencies
            for (const depSlug of s.dep) {
                const parent = await prisma.skill.findUnique({ where: { slug: depSlug } });
                if (parent) {
                    // Check if link exists
                    const exists = await prisma.skillDependency.findUnique({
                        where: { skillId_prerequisiteId: { skillId: skill.id, prerequisiteId: parent.id } }
                    });
                    if (!exists) {
                        await prisma.skillDependency.create({
                            data: { skillId: skill.id, prerequisiteId: parent.id }
                        });
                    }
                }
            }
        }
        return { success: true, message: "Skill Tree Seeded Successfully" };
    } catch (e) {
        console.error("Seeding Error:", e);
        return { error: "Failed to seed skills" };
    }
}

export async function getUserSkills(handle: string) {
    const user = await prisma.user.findUnique({ where: { codeforcesHandle: handle } });
    if (!user) return [];

    // Get all skills with dependencies
    const allSkills = await prisma.skill.findMany({
        include: { prerequisites: true }
    });

    // Get user progress
    const userProgress = await prisma.userSkill.findMany({
        where: { userId: user.id }
    });

    // Merge logic
    // A skill is UNLOCKED if all prerequisites are MASTERED (masteryLevel >= 100)
    // Or if it has no prerequisites (Tier 1)

    return allSkills.map(skill => {
        const progress = userProgress.find(up => up.skillId === skill.id);
        const mastery = progress ? progress.masteryLevel : 0;

        // check unlock status
        let unlocked = true;
        if (skill.prerequisites.length > 0) {
            const prereqIds = skill.prerequisites.map(p => p.prerequisiteId);
            // Check if user has mastered all prereqs
            const masteredPrereqs = userProgress.filter(up =>
                prereqIds.includes(up.skillId) && up.masteryLevel >= 100
            );
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

export async function getDueFlashcards(handle: string) {
    const user = await prisma.user.findUnique({ where: { codeforcesHandle: handle } });
    if (!user) return [];

    const now = new Date();
    return await prisma.reviewQueue.findMany({
        where: {
            userId: user.id,
            nextReviewDate: { lte: now }
        },
        orderBy: { nextReviewDate: 'asc' }
    });
}

// Quality: 0 (Blackout) to 5 (Perfect)
export async function processReview(request: { id: string; quality: number }) {
    const card = await prisma.reviewQueue.findUnique({ where: { id: request.id } });
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

    await prisma.reviewQueue.update({
        where: { id: request.id },
        data: {
            easeFactor,
            interval,
            repetitions,
            nextReviewDate: nextDate,
            lastReviewedAt: new Date(),
            status: q >= 4 ? "mastered" : "reviewing"
        }
    });
}

export async function getAllFlashcards(handle: string) {
    const user = await prisma.user.findUnique({ where: { codeforcesHandle: handle } });
    if (!user) return [];

    const all = await prisma.reviewQueue.findMany({
        where: { userId: user.id },
        orderBy: { nextReviewDate: 'asc' }
    });

    return all.map(item => ({
        ...item,
        isDue: new Date(item.nextReviewDate) <= new Date()
    }));
}


// -----------------------------------------------------------------------------
// 🕵️ Stalker Mode (Rivalry)
// -----------------------------------------------------------------------------

export async function getRivalActivity(handles: string[]) {
    const results = [];

    // Sequential fetching to respect rate limits (5 req/sec)
    for (const handle of handles) {
        try {
            const res = await fetch(`https://codeforces.com/api/user.status?handle=${handle}&from=1&count=10`);
            const data = await res.json();
            if (data.status === 'OK') {
                results.push(data.result.map((sub: any) => ({ ...sub, handle })));
            } else {
                console.warn(`[RivalActivity] Failed for ${handle}: ${data.comment}`);
            }
        } catch (e) {
            console.error(`[RivalActivity] Network error for ${handle}`);
        }
        // Small delay between requests (250ms)
        await new Promise(r => setTimeout(r, 250));
    }

    const allSubs = results.flat();
    // Sort by recent first
    return allSubs.sort((a, b) => b.creationTimeSeconds - a.creationTimeSeconds).slice(0, 30);
}

export async function getRivalHistory(handles: string[]) {
    const results = [];

    for (const handle of handles) {
        try {
            const res = await fetch(`https://codeforces.com/api/user.rating?handle=${handle}`);
            const data = await res.json();
            if (data.status === 'OK') {
                results.push({ handle, history: data.result });
            } else {
                results.push({ handle, history: [] }); // Push empty so graph doesn't break
            }
        } catch (e) {
            console.error(e);
            results.push({ handle, history: [] });
        }
        await new Promise(r => setTimeout(r, 250));
    }

    return results;
}

export async function verifyOwnership(handle: string, token: string) {
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
                return { success: true };
            }
        }
    } catch (e) {
        console.error("Verification failed", e);
    }
    return { success: false };
}

export async function verifySubmissionAuth(handle: string) {
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
            const verified = data.result.find((sub: any) =>
                sub.problem.contestId === 4 &&
                sub.problem.index === 'A' &&
                sub.verdict === 'COMPILATION_ERROR' &&
                (now - sub.creationTimeSeconds) < 300 // 5 mins
            );

            if (verified) return { success: true };
        }
    } catch (e) {
        console.error("Submission check failed", e);
    }
    return { success: false };
}

export async function generateMashup(handle: string, minRating: number = 800, maxRating: number = 2000, count: number = 5) {
    try {
        // 1. Fetch User Submissions (last 500)
        const subRes = await fetch(`https://codeforces.com/api/user.status?handle=${handle}&from=1&count=500`);
        const subData = await subRes.json();

        const weakTags = new Set<string>();
        if (subData.status === 'OK') {
            const tagFailures: Record<string, number> = {};
            const tagTotal: Record<string, number> = {};

            // Analyze failures
            subData.result.forEach((s: any) => {
                s.problem.tags.forEach((t: string) => {
                    if (!tagTotal[t]) { tagTotal[t] = 0; tagFailures[t] = 0; }
                    tagTotal[t]++;
                    if (s.verdict !== 'OK') tagFailures[t]++;
                });
            });

            // Identify weak tags (Failure rate > 40% and at least 3 attempts)
            Object.keys(tagTotal).forEach(t => {
                if (tagTotal[t] >= 3 && (tagFailures[t] / tagTotal[t]) > 0.4) {
                    weakTags.add(t);
                }
            });
        }

        // 2. Determine Tags to use (Weakest or Random Standard ones if no weakness found)
        const targetTags = weakTags.size > 0 ? Array.from(weakTags) : ["dp", "greedy", "graphs", "math", "trees"];

        // 3. Generate Problems
        // Linear interpolation for ratings
        const ratings: number[] = [];
        if (count === 1) {
            ratings.push(minRating);
        } else {
            const step = Math.floor((maxRating - minRating) / (count - 1));
            for (let i = 0; i < count; i++) {
                ratings.push(minRating + (step * i));
            }
        }

        const problems = [];

        // Helper to fetch random problem of rating & tag
        for (const r of ratings) {
            // Round to nearest 100 for CF API usually
            const effectiveRating = Math.round(r / 100) * 100;

            // Pick a random tag from targetTags for this slot
            const tag = targetTags[Math.floor(Math.random() * targetTags.length)];

            // Fetch potential problems (cached endpoint)
            const p = await getProblemsByRating(effectiveRating, tag);

            if (p.length > 0) {
                // Pick random
                const randomProb = p[Math.floor(Math.random() * p.length)];
                problems.push({ ...randomProb, chosenTag: tag });
            }
        }

        return { success: true, problems, weakTags: Array.from(weakTags) };

    } catch (e) {
        console.error("Mashup gen failed", e);
        return { success: false, error: "Failed to generate mashup" };
    }
}
