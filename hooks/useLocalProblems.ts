import { useLiveQuery } from "dexie-react-hooks";
import { db, type ProblemRecord } from "@/lib/local-db";

export function useLocalProblems() {

    // Live Query: Automatically re-renders when DB changes
    const localProblems = useLiveQuery(() => db.problems.toArray(), [], []);

    const addLocalProblem = async (problem: Omit<ProblemRecord, 'id'>) => {
        try {
            // Check if already exists to prevent duplicates (optional logic)
            const existing = await db.problems
                .where('problem_link')
                .equals(problem.problem_link)
                .first();

            if (existing) {
                // Update specific fields if needed, or skip
                // For now, let's just update the timestamp/verdict
                await db.problems.update(existing.id, {
                    verdict: problem.verdict,
                    date: Date.now()
                });
            } else {
                await db.problems.add({
                    ...problem,
                } as ProblemRecord);
            }
        } catch (error) {
            console.error("Failed to save locally:", error);
        }
    };

    const isSolvedLocally = async (link: string) => {
        const record = await db.problems.where('problem_link').equals(link).first();
        return record?.verdict === 'OK';
    };

    const clearLocalProblems = async () => {
        await db.problems.clear();
    };

    return {
        localProblems,
        addLocalProblem,
        isSolvedLocally,
        clearLocalProblems
    };
}
