'use client'
import { useState, useEffect } from 'react';
import { getContests } from '@/app/actions';
import { Play, Timer, ArrowRight, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ContestTimer } from '@/components/features/ContestTimer';

import { MashupGenerator } from '@/components/features/MashupGenerator';

export function ContestClient() {
    const [contests, setContests] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getContests().then(data => {
            setContests(data);
            setLoading(false);
        });
    }, []);

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            <div className="space-y-4">
                <h1 className="text-4xl font-extrabold bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                    Virtual Contests & Mashups
                </h1>
                <p className="text-zinc-400">
                    Practice past Div. 3 and Div. 4 contests or generate custom AI mashups.
                </p>
            </div>

            {/* New Generator Section */}
            <MashupGenerator />

            <div className="flex items-center gap-4 my-8">
                <div className="h-px bg-zinc-800 flex-1"></div>
                <span className="text-zinc-500 text-sm uppercase font-bold tracking-widest">Or Classic Contests</span>
                <div className="h-px bg-zinc-800 flex-1"></div>
            </div>

            {loading ? (
                <div className="text-zinc-500">Loading contests...</div>
            ) : (
                <div className="space-y-4">
                    {contests.map((c) => (
                        <div key={c.id} className="flex flex-col md:flex-row items-center justify-between p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-orange-500/30 transition">
                            <div>
                                <h3 className="text-xl font-bold text-zinc-200">{c.name}</h3>
                                <p className="text-zinc-500 text-sm mt-1">Duration: {c.durationSeconds / 3600} hours</p>
                            </div>
                            <div className="mt-4 md:mt-0 flex flex-col items-end gap-2">
                                <ContestTimer durationSeconds={c.durationSeconds} />
                                <a
                                    href={`https://codeforces.com/contest/${c.id}/virtual`}
                                    target="_blank"
                                    className="text-xs text-orange-500 hover:underline flex items-center gap-1"
                                >
                                    Open in Codeforces <ArrowRight size={10} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
