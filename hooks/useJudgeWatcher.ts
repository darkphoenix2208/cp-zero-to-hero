
import { useState, useEffect, useRef } from 'react';
import { toast } from 'sonner';

export type JudgeStatus = 'idle' | 'searching' | 'verdict_found' | 'error';

export interface VerdictData {
    verdict: string;
    passed: boolean;
    testCount: number;
    time: number;
    memory: number;
    creationTimeSeconds: number;
    link: string;
}

export function useJudgeWatcher(problemId: string) {
    const [status, setStatus] = useState<JudgeStatus>('idle');
    const [verdict, setVerdict] = useState<VerdictData | null>(null);
    const [isWatching, setIsWatching] = useState(false);

    // Track when we started watching to ignore old submissions
    const watchStartTimeRef = useRef<number>(0);
    const pollingIntervalRef = useRef<NodeJS.Timeout | null>(null);

    const startWatching = () => {
        setIsWatching(true);
        setStatus('searching');
        setVerdict(null);
        watchStartTimeRef.current = Math.floor(Date.now() / 1000) - 900; // Look back 15 minutes
    };

    const stopWatching = () => {
        setIsWatching(false);
        if (pollingIntervalRef.current) {
            clearInterval(pollingIntervalRef.current);
            pollingIntervalRef.current = null;
        }
    };

    useEffect(() => {
        if (!isWatching || !problemId) return;

        let attempts = 0;
        const maxAttempts = 60; // 3 minutes approx (3s interval)

        const checkSubmission = async () => {
            attempts++;
            if (attempts > maxAttempts) {
                toast.error("Stopped watching: No new submission found in 3 minutes.");
                stopWatching();
                setStatus('idle');
                return;
            }

            try {
                const res = await fetch('/api/dojo/verify-cf', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ problemName: problemId })
                });

                if (!res.ok) return; // Continue polling on error

                const data = await res.json();

                if (data.verdict === "NOT_FOUND") return; // Continue polling

                // Check if this submission is "new" enough
                if (data.creationTimeSeconds >= watchStartTimeRef.current) {
                    // Check if strictly "TESTING" (CF API usually filters this, but just in case)
                    if (data.verdict === "TESTING") {
                        // Still waiting for final
                        return;
                    }

                    // FOUND IT!
                    setVerdict(data);
                    setStatus('verdict_found');
                    stopWatching();
                    toast.success("Verdict Found: " + data.verdict);
                }
            } catch (e) {
                console.error("Polling error", e);
            }
        };

        // Initial check immediately? No, wait for interval to avoid double-tap if user just clicked.
        pollingIntervalRef.current = setInterval(checkSubmission, 3000);

        return () => stopWatching();
    }, [isWatching, problemId]);

    return {
        startWatching,
        status,
        verdict
    };
}
