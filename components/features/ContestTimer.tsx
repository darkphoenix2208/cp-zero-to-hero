'use client';
import { useState, useEffect } from 'react';
import { Timer, Pause, Play, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ContestTimer({ durationSeconds }: { durationSeconds: number }) {
    const [timeLeft, setTimeLeft] = useState(durationSeconds);
    const [isRunning, setIsRunning] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isRunning && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev <= 1) {
                        setIsFinished(true);
                        setIsRunning(false);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning, timeLeft]);

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    return (
        <div className="flex flex-col items-end gap-1">
            <div className={cn("font-mono font-bold text-xl flex items-center gap-2",
                isFinished ? "text-red-500" : isRunning ? "text-green-400" : "text-zinc-400"
            )}>
                <Timer size={18} />
                {formatTime(timeLeft)}
            </div>

            <div className="flex gap-1">
                {!isRunning && !isFinished && (
                    <button
                        onClick={() => setIsRunning(true)}
                        className="p-1.5 rounded-md bg-green-500/10 hover:bg-green-500/20 text-green-400 transition"
                        title="Start Timer"
                    >
                        <Play size={14} fill="currentColor" />
                    </button>
                )}
                {isRunning && (
                    <button
                        onClick={() => setIsRunning(false)}
                        className="p-1.5 rounded-md bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-400 transition"
                        title="Pause Timer"
                    >
                        <Pause size={14} fill="currentColor" />
                    </button>
                )}
                <button
                    onClick={() => { setIsRunning(false); setTimeLeft(durationSeconds); setIsFinished(false); }}
                    className="p-1.5 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-400 transition"
                    title="Reset Timer"
                >
                    <RotateCcw size={14} />
                </button>
            </div>
        </div>
    );
}
