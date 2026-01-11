import { NextResponse } from 'next/server';
import { codeQueue } from '@/lib/queue';
import { auth } from '@/auth';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { code, language, input } = body;

        if (!code) return NextResponse.json({ error: "No code provided" }, { status: 400 });

        // Get user session for socket room assignment
        const session = await auth();
        const userId = session?.user?.id || 'guest';

        // Add Job to Queue with userId for socket emission
        const job = await codeQueue.add('run-job', {
            code,
            language,
            input,
            userId // Pass userId to worker for socket emission
        });

        return NextResponse.json({
            jobId: job.id,
            status: "queued",
            userId // Return userId so frontend knows which room to join
        });

    } catch (error: any) {
        console.error("Queue Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
