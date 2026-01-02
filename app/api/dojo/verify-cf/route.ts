import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { getUserSubmissions } from '@/lib/codeforces';

export async function POST(req: NextRequest) {
    try {
        const session = await auth();
        if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const { problemName } = await req.json(); // e.g., "1385C"

        // Extract ContestID and Index
        // 1385C -> contest: 1385, index: C
        // Helper to extract ID from various likely inputs
        // Inputs: "1385C", "1385 C", "https://codeforces.com/problemset/problem/1385/C"
        let contestId, index;

        // Try strict ID first
        const strictMatch = problemName.match(/(\d+)\s*([A-Z]\d?)/i);
        if (strictMatch) {
            contestId = parseInt(strictMatch[1]);
            index = strictMatch[2].toUpperCase();
        } else {
            // Try URL extraction
            const urlMatch = problemName.match(/contest\/(\d+)\/problem\/([A-Z1-9]+)/i) ||
                problemName.match(/problemset\/problem\/(\d+)\/([A-Z1-9]+)/i);
            if (urlMatch) {
                contestId = parseInt(urlMatch[1]);
                index = urlMatch[2].toUpperCase();
            } else {
                return NextResponse.json({ error: "Invalid Problem ID. Use '1385C' or paste the link." }, { status: 400 });
            }
        }

        // Use handle from session or fallback (if user linked CF)
        // For now, assuming session.user.cfHandle exists or we ask user
        // Wait, session structure might not have it unless we extended it. 
        // Let's check session.user.
        // If not in session, we might need to fetch user from DB. 
        // For MVP, if handle is passed in body, use that, else check session.

        const handle = (session.user as any).codeforcesHandle;

        if (!handle) {
            return NextResponse.json({ error: "Link your Codeforces account in settings first." }, { status: 400 });
        }

        const submissions = await getUserSubmissions(handle);

        // Find latest submission for this problem
        const sub = submissions.find(s =>
            s.problem.contestId === contestId && s.problem.index === index
        );

        if (!sub) {
            return NextResponse.json({
                verdict: "NOT_FOUND",
                message: `No submission found for ${contestId}${index} on account ${handle}`
            });
        }

        return NextResponse.json({
            verdict: sub.verdict, // OK, WRONG_ANSWER
            passed: sub.verdict === "OK",
            testCount: sub.passedTestCount + 1, // approximate
            time: sub.timeConsumedMillis,
            memory: sub.memoryConsumedBytes,
            creationTimeSeconds: sub.creationTimeSeconds,
            link: `https://codeforces.com/contest/${contestId}/submission/${sub.id}`
        });

    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
