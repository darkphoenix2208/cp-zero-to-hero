import { useQuery } from "@tanstack/react-query";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/lib/local-db";
import { getAttempts } from "@/app/actions";
import { useSession } from "next-auth/react";

export function useProblems() {
    const { data: session } = useSession();
    const userId = session?.user?.id;

    // 1. Cloud Query (Enabled only when logged in)
    const cloudQuery = useQuery({
        queryKey: ['problems', userId],
        queryFn: async () => {
            if (!userId) return [];
            return await getAttempts(); // Server Action
        },
        enabled: !!userId,
        staleTime: 1000 * 60 * 5 // 5 minutes
    });

    // 2. Local Query (Enabled always, but used primarily when guest)
    const localProblems = useLiveQuery(
        () => db.problems.orderBy('date').reverse().toArray(),
        [],
        []
    );

    // 3. Unified Interface
    if (userId) {
        return {
            problems: cloudQuery.data || [],
            isLoading: cloudQuery.isLoading,
            isError: cloudQuery.isError,
            source: 'cloud'
        };
    } else {
        return {
            problems: localProblems || [],
            isLoading: false, // Local is instant
            isError: false,
            source: 'local'
        };
    }
}
