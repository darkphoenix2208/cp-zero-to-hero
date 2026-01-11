import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

// Global pipeline cache to prevent reloading model on every req (Hot/Cold start)
let pipeline: any = null;

export async function POST(req: NextRequest) {
    try {
        const { query, limit = 10 } = await req.json();

        if (!query) return NextResponse.json({ error: "Query required" }, { status: 400 });

        // Lazy load transformers pipeline
        if (!pipeline) {
            const { pipeline: p } = await import('@xenova/transformers');
            // Use quantized version for speed
            pipeline = await p('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
        }

        // 1. Embed Query
        const output = await pipeline(query, { pooling: 'mean', normalize: true });
        const embedding = JSON.stringify(Array.from(output.data));

        // 2. Call Function via Prisma Raw Query
        // Note: Prisma needs explicit casting for vector operations
        const results: any[] = await prisma.$queryRawUnsafe(`
            SELECT * FROM match_problems(
                $1::vector(384), 
                $2::double precision, 
                $3::int
            );
        `, embedding, 0.3, limit);

        return NextResponse.json({ results: results || [] });

    } catch (e: any) {
        console.error("ML Search Error:", e);
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
