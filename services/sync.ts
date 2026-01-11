import { db } from "@/lib/local-db";
import { syncAttempts } from "@/app/actions";

export async function syncLocalToCloud(userId: string) {
    console.log(`[Sync] Starting sync for user ${userId}...`);

    // 1. Get all local problems
    const localProblems = await db.problems.toArray();

    if (localProblems.length === 0) {
        console.log("[Sync] No local data to sync.");
        return { success: true, count: 0 };
    }

    // 2. Send to Server Action
    try {
        const result = await syncAttempts(localProblems);

        if (result.success) {
            console.log(`[Sync] Successfully synced ${localProblems.length} records.`);

            // 3. Clear Local DB (Optional: keep as cache, or clear to free space)
            // For this requirements: "Clear local guest data?" -> Yes
            await db.problems.clear();
            return { success: true, count: localProblems.length };
        } else {
            console.error("[Sync] Server failed to accept data.");
            return { success: false, error: "Server Error" };
        }
    } catch (e) {
        console.error("[Sync] Network Error:", e);
        return { success: false, error: "Network Error" };
    }
}
