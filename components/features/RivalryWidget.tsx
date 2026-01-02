'use client';
import { useState } from 'react';
import { Plus, Trash2, TrendingUp, Activity, Users, Clock, ExternalLink, Swords, Trophy, X } from 'lucide-react';
import { addPinnedRival, getRivals, removePinnedRival } from '@/app/actions'; // partial imports as hook handles fetching
import { cn } from '@/lib/utils';
import type { CFUser } from '@/lib/codeforces';

import { useRivalData } from '@/hooks/useRivalData';
import { RivalryGraph } from '@/components/features/RivalryGraph';
import { ActivityFeed } from '@/components/features/ActivityFeed';

export function RivalryWidget({ user }: { user?: CFUser | null }) {
    const { rivals, activity, graphData, loading } = useRivalData(user || null);
    const [tab, setTab] = useState<'versus' | 'activity' | 'graph'>('versus');
    const [newHandle, setNewHandle] = useState('');
    const [error, setError] = useState('');

    const handleAdd = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        if (!newHandle.trim()) return;

        const handle = user?.handle || localStorage.getItem('cp-handle');
        if (handle) {
            const res = await addPinnedRival(handle, newHandle);
            if (res.error) {
                setError(res.error);
                setTimeout(() => setError(''), 3000);
            } else {
                setNewHandle('');
                window.location.reload();
            }
        }
    };

    return (
        <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 h-full flex flex-col min-h-[400px]">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-zinc-400 font-medium flex items-center gap-2">
                    <Swords className="text-red-500" size={18} /> Stalker Mode
                </h3>
                <div className="flex bg-zinc-950 rounded-lg p-1 border border-zinc-800">
                    <button onClick={() => setTab('versus')} className={cn("px-3 py-1 text-xs rounded-md transition", tab === 'versus' ? "bg-zinc-800 text-white shadow" : "text-zinc-500 hover:text-zinc-300")}>
                        <Trophy size={14} />
                    </button>
                    <button onClick={() => setTab('activity')} className={cn("px-3 py-1 text-xs rounded-md transition", tab === 'activity' ? "bg-zinc-800 text-white shadow" : "text-zinc-500 hover:text-zinc-300")}>
                        <Activity size={14} />
                    </button>
                    <button onClick={() => setTab('graph')} className={cn("px-3 py-1 text-xs rounded-md transition", tab === 'graph' ? "bg-zinc-800 text-white shadow" : "text-zinc-500 hover:text-zinc-300")}>
                        <TrendingUp size={14} />
                    </button>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto min-h-0 relative custom-scrollbar">
                {loading ? (
                    <div className="absolute inset-0 flex items-center justify-center text-zinc-600 text-xs">
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-5 h-5 border-2 border-zinc-600 border-t-zinc-400 rounded-full animate-spin"></div>
                            <span>Syncing Data...</span>
                        </div>
                    </div>
                ) : (
                    <>
                        {/* HEAD-TO-HEAD TAB */}
                        {tab === 'versus' && (
                            <div className="space-y-4">
                                {rivals.length === 0 ? (
                                    <div className="text-zinc-600 text-xs italic text-center py-8">
                                        Add a rival to compare stats.
                                    </div>
                                ) : (
                                    <div className="space-y-3">
                                        {rivals.map((r) => {
                                            const myRating = user?.rating || 0;
                                            const rivalRating = r.rating || 0;
                                            const delta = myRating - rivalRating;

                                            // r comes from getCFUser which returns { handle, rating, etc. }

                                            // Handle Remove
                                            const handleRemove = async (target: string) => {
                                                if (confirm(`Unpin ${target}?`)) {
                                                    const me = user?.handle || localStorage.getItem('cp-handle');
                                                    if (me) {
                                                        await removePinnedRival(me, target);
                                                        window.location.reload();
                                                    }
                                                }
                                            }

                                            return (
                                                <div key={r.handle} className="flex flex-col bg-zinc-950 p-3 rounded-xl border border-zinc-900 group hover:border-zinc-700 transition relative overflow-hidden">
                                                    {/* Background Gradient based on winning status */}
                                                    <div className={cn("absolute inset-0 opacity-5 pointer-events-none", delta > 0 ? "bg-green-500" : "bg-red-500")}></div>

                                                    {/* Remove Button (Visible on Hover or always?) */}
                                                    <button
                                                        onClick={() => handleRemove(r.handle)}
                                                        className="absolute top-2 right-2 z-20 text-zinc-600 hover:text-red-500 opacity-0 group-hover:opacity-100 transition p-1 bg-zinc-900/50 rounded"
                                                    >
                                                        <X size={12} />
                                                    </button>

                                                    <div className="flex items-center justify-between relative z-10 w-full px-2">
                                                        {/* Me */}
                                                        <div className="flex flex-col items-center gap-1 w-1/3">
                                                            <div className="w-10 h-10 rounded-full border-2 border-zinc-800 overflow-hidden">
                                                                <img src={user?.titlePhoto} className="w-full h-full object-cover" />
                                                            </div>
                                                            <span className="text-[10px] font-bold text-zinc-400">YOU</span>
                                                            <span className="font-mono font-bold text-white">{myRating}</span>
                                                        </div>

                                                        {/* VS Badge */}
                                                        <div className="flex flex-col items-center justify-center w-1/3">
                                                            <span className="text-[10px] font-black text-zinc-600 bg-zinc-900 px-2 py-1 rounded">VS</span>
                                                            <div className={cn("text-xs font-bold mt-1 px-2 py-0.5 rounded-full", delta > 0 ? "text-green-400 bg-green-500/10" : "text-red-400 bg-red-500/10")}>
                                                                {delta > 0 ? `+${delta}` : delta}
                                                            </div>
                                                        </div>

                                                        {/* Rival */}
                                                        <div className="flex flex-col items-center gap-1 w-1/3">
                                                            <div className="w-10 h-10 rounded-full border-2 border-zinc-800 overflow-hidden">
                                                                <img src={r.titlePhoto || 'https://userpic.codeforces.org/no-title.jpg'} className="w-full h-full object-cover" />
                                                            </div>
                                                            <a href={`https://codeforces.com/profile/${r.handle}`} target="_blank" className="text-[10px] font-bold text-blue-400 hover:underline truncate max-w-full">
                                                                {r.handle}
                                                            </a>
                                                            <span className="font-mono font-bold text-white">{rivalRating}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )}
                                <form onSubmit={handleAdd} className="mt-4">
                                    {error && <div className="mb-2 text-xs text-red-500 font-bold bg-red-500/10 p-2 rounded">{error}</div>}
                                    <div className="flex gap-2">
                                        <input
                                            value={newHandle}
                                            onChange={(e) => setNewHandle(e.target.value)}
                                            placeholder="Add rival handle..."
                                            className="flex-1 bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-red-500"
                                        />
                                        <button type="submit" className="bg-zinc-800 hover:bg-zinc-700 text-white p-2 rounded-lg transition">
                                            <Plus size={16} />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}

                        {/* ACTIVITY TAB */}
                        {tab === 'activity' && (
                            <ActivityFeed activity={activity} />
                        )}

                        {/* GRAPH TAB */}
                        {tab === 'graph' && (
                            <RivalryGraph
                                data={graphData}
                                handles={[user?.handle || 'Me', ...rivals.map(r => r.handle)]}
                            />
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

function getRatingColor(rating: number) {
    if (!rating) return "text-zinc-500";
    if (rating < 1200) return "text-gray-400";
    if (rating < 1400) return "text-green-400";
    if (rating < 1600) return "text-cyan-400";
    if (rating < 1900) return "text-blue-500";
    if (rating < 2100) return "text-purple-400";
    if (rating < 2400) return "text-orange-400";
    return "text-red-500";
}
