'use client';
import { Clock } from 'lucide-react';

interface ActivityFeedProps {
    activity: any[];
}

export function ActivityFeed({ activity }: ActivityFeedProps) {
    if (activity.length === 0) {
        return <div className="text-center py-8 text-zinc-600 text-xs">No recent activity detected.</div>;
    }

    return (
        <div className="space-y-3 custom-scrollbar overflow-y-auto max-h-[300px] pr-2">
            {activity.map((sub: any, i) => (
                <div key={`${sub.id}-${i}`} className="bg-zinc-950 p-3 rounded-lg border border-zinc-900 text-xs hover:border-zinc-800 transition group">
                    <div className="flex justify-between mb-1">
                        <span className="font-bold text-zinc-300 group-hover:text-white transition">{sub.handle}</span>
                        <span className="text-zinc-600 flex items-center gap-1">
                            <Clock size={10} />
                            {Math.floor((Date.now() / 1000 - sub.creationTimeSeconds) / 60) < 60
                                ? `${Math.floor((Date.now() / 1000 - sub.creationTimeSeconds) / 60)}m ago`
                                : `${Math.floor((Date.now() / 1000 - sub.creationTimeSeconds) / 3600)}h ago`}
                        </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2 truncate">
                            <span className="text-zinc-500 font-mono">[{sub.problem.rating || '?'}]</span>
                            <a href={`https://codeforces.com/problemset/problem/${sub.problem.contestId}/${sub.problem.index}`} target="_blank" className="text-blue-400 hover:underline truncate max-w-[180px]">
                                {sub.problem.index}. {sub.problem.name}
                            </a>
                        </div>
                        {/* Dynamic Verdict Badge */}
                        <span className={`px-2 py-0.5 rounded font-bold tracking-wider text-[10px] uppercase ${sub.verdict === 'OK' ? 'bg-green-500/10 text-green-500' :
                                sub.verdict === 'WRONG_ANSWER' ? 'bg-red-500/10 text-red-500' :
                                    sub.verdict === 'TIME_LIMIT_EXCEEDED' ? 'bg-yellow-500/10 text-yellow-500' :
                                        'bg-zinc-800 text-zinc-400'
                            }`}>
                            {sub.verdict === 'OK' ? 'AC' :
                                sub.verdict === 'WRONG_ANSWER' ? 'WA' :
                                    sub.verdict === 'TIME_LIMIT_EXCEEDED' ? 'TLE' :
                                        sub.verdict === 'COMPILATION_ERROR' ? 'CE' :
                                            sub.verdict === 'RUNTIME_ERROR' ? 'RE' : '??'}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}
