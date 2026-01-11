import { NextResponse } from 'next/server';
import { codeQueue } from '@/lib/queue';

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const jobId = searchParams.get('jobId');

    if (!jobId) return NextResponse.json({ error: "Missing Job ID" }, { status: 400 });

    try {
        const job = await codeQueue.getJob(jobId);

        if (!job) {
            return NextResponse.json({ status: "not_found" }, { status: 404 });
        }

        const state = await job.getState();
        const result = job.returnvalue; // BullMQ stores result here

        if (state === 'completed') {
            return NextResponse.json({ status: "completed", output: result });
        } else if (state === 'failed') {
            return NextResponse.json({ status: "failed", error: job.failedReason });
        } else {
            return NextResponse.json({ status: "pending" });
        }

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
