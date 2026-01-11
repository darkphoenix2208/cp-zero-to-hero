'use client';

import { useState, useCallback } from 'react';
import { useSocketResult } from './useSocketResult';

interface RunResult {
    output?: string;
    error?: string;
    status: 'idle' | 'running' | 'completed' | 'failed';
}

export function useRunCode(userId: string | undefined) {
    const [result, setResult] = useState<RunResult>({ status: 'idle' });
    const { result: socketResult, clearResult } = useSocketResult(userId);

    // Update result when socket event is received
    if (socketResult) {
        setResult({
            output: socketResult.output,
            error: socketResult.error,
            status: socketResult.status
        });
        clearResult(); // Clear to avoid duplicate processing
    }

    const runCode = useCallback(async (code: string, language: string, input: string) => {
        setResult({ status: 'running' });

        try {
            // Submit Job (no polling needed!)
            const res = await fetch('/api/run', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ code, language, input })
            });
            const data = await res.json();

            if (data.error) throw new Error(data.error);

            // Job submitted! Now we wait for the socket event
            console.log(`✅ Job ${data.jobId} submitted. Waiting for socket event...`);

        } catch (e: any) {
            setResult({ status: 'failed', error: e.message });
        }
    }, []);

    return { runCode, result };
}
