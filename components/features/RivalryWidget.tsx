'use client';
import { useState } from 'react';
import { Plus, Trash2, TrendingUp, Activity, Users, Clock, ExternalLink, Swords, Trophy, X, Settings, RefreshCw, UserX } from 'lucide-react';
import { addPinnedRival, getRivals, removePinnedRival, resetPinnedRivals } from '@/app/actions';
import { cn } from '@/lib/utils';
import type { CFUser } from '@/lib/codeforces';

import { useRivalData } from '@/hooks/useRivalData';
import { RivalryGraph } from '@/components/features/RivalryGraph';
import { ActivityFeed } from '@/components/features/ActivityFeed';

export function RivalryWidget({ user, initialRivals }: { user?: CFUser | null, initialRivals?: CFUser[] }) {
    const { rivals, activity, graphData, loading } = useRivalData(user || null, initialRivals || []);
    const [tab, setTab] = useState<'versus' | 'activity' | 'graph' | 'settings'>('versus');
    const [newHandle, setNewHandle] = useState('');
    const [error, setError] = useState('');
    const [resetting, setResetting] = useState(false);

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

    const handleReset = async () => {
        if (!confirm("Are you sure you want to remove ALL rivals?")) return;
        setResetting(true);
        const handle = user?.handle || localStorage.getItem('cp-handle');
        if (handle) {
            await resetPinnedRivals(handle);
            window.location.reload();
        }
    };

    return (
        <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 h-full flex flex-col min-h-[400px]">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-zinc-400 font-medium flex items-center gap-2">
                    <Swords className="text-red-500" size={18} /> Stalker Mode
                </h3>
                <div className="flex bg-zinc-950 rounded-lg p-1 border border-zinc-800">
                    <button onClick={() => setTab('versus')} className={cn("px-3 py-1 text-xs rounded-md transition", tab === 'versus' ? "bg-zinc-800 text-white shadow" : "text-zinc-500 hover:text-zinc-300")} title="Head-to-Head">
                        <Trophy size={14} />
                    </button>
                    <button onClick={() => setTab('activity')} className={cn("px-3 py-1 text-xs rounded-md transition", tab === 'activity' ? "bg-zinc-800 text-white shadow" : "text-zinc-500 hover:text-zinc-300")} title="Live Activity">
                        <Activity size={14} />
                    </button>
                    <button onClick={() => setTab('graph')} className={cn("px-3 py-1 text-xs rounded-md transition", tab === 'graph' ? "bg-zinc-800 text-white shadow" : "text-zinc-500 hover:text-zinc-300")} title="Rating Graph">
                        <TrendingUp size={14} />
                    </button>
                    <div className="w-px bg-zinc-800 mx-1"></div>
                    <button onClick={() => setTab('settings')} className={cn("px-3 py-1 text-xs rounded-md transition", tab === 'settings' ? "bg-zinc-800 text-white shadow" : "text-zinc-500 hover:text-zinc-300")} title="Manage Rivals">
                        <Settings size={14} />
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
                                        No active rivalries. Add someone in settings!
                                    </div>
                                ) : (
                                    <div className="space-y-3">
                                        {rivals.map((r) => {
                                            const myRating = user?.rating || 0;
                                            const rivalRating = r.rating || 0;
                                            const delta = myRating - rivalRating;

                                            return (
                                                <div key={r.handle} className="flex flex-col bg-zinc-950 p-3 rounded-xl border border-zinc-900 group hover:border-zinc-700 transition relative overflow-hidden">
                                                    {/* Background Gradient based on winning status */}
                                                    <div className={cn("absolute inset-0 opacity-5 pointer-events-none", delta > 0 ? "bg-green-500" : "bg-red-500")}></div>

                                                    <div className="flex items-center justify-between relative z-10 w-full px-2">
                                                        {/* Me */}
                                                        <div className="flex flex-col items-center gap-1 w-1/3">
                                                            <div className="w-10 h-10 rounded-full border-2 border-zinc-800 overflow-hidden bg-zinc-900">
                                                                <img
                                                                    src={user?.titlePhoto && !user.titlePhoto.includes('no-title') ? user.titlePhoto : "https://userpic.codeforces.org/no-title.jpg"}
                                                                    className="w-full h-full object-cover"
                                                                    alt="You"
                                                                />
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
                                                            <div className="w-10 h-10 rounded-full border-2 border-zinc-800 overflow-hidden bg-zinc-900">
                                                                <img src={r.titlePhoto || 'https://userpic.codeforces.org/no-title.jpg'} className="w-full h-full object-cover" alt={r.handle} />
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

                        {/* SETTINGS / MANAGE TAB */}
                        {tab === 'settings' && (
                            <div className="space-y-6">
                                {/* Add New */}
                                <div>
                                    <label className="text-xs text-zinc-500 font-bold uppercase mb-2 block">Add New Rival</label>
                                    <form onSubmit={handleAdd}>
                                        {error && <div className="mb-2 text-xs text-red-500 font-bold bg-red-500/10 p-2 rounded">{error}</div>}
                                        <div className="flex gap-2">
                                            <input
                                                value={newHandle}
                                                onChange={(e) => setNewHandle(e.target.value)}
                                                placeholder="Codeforces Handle..."
                                                className="flex-1 bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-violet-500"
                                            />
                                            <button type="submit" className="bg-violet-600 hover:bg-violet-500 text-white p-2 rounded-lg transition">
                                                <Plus size={16} />
                                            </button>
                                        </div>
                                    </form>
                                </div>

                                {/* Manage List */}
                                <div>
                                    <label className="text-xs text-zinc-500 font-bold uppercase mb-2 block">Current Rivals ({rivals.length}/3)</label>
                                    <div className="space-y-2">
                                        {rivals.length === 0 && <p className="text-zinc-600 text-xs italic">No rivals added yet.</p>}
                                        {rivals.map(r => (
                                            <div key={r.handle} className="flex items-center justify-between bg-zinc-950 p-2 rounded-lg border border-zinc-800">
                                                <div className="flex items-center gap-2">
                                                    <img src={r.titlePhoto} className="w-6 h-6 rounded-full" />
                                                    <span className="text-sm text-zinc-300 font-medium">{r.handle}</span>
                                                </div>
                                                <button
                                                    onClick={async () => {
                                                        const me = user?.handle || localStorage.getItem('cp-handle');
                                                        if (me && confirm(`Remove ${r.handle}?`)) {
                                                            await removePinnedRival(me, r.handle);
                                                            window.location.reload();
                                                        }
                                                    }}
                                                    className="text-zinc-500 hover:text-red-400 p-1"
                                                >
                                                    <X size={14} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Danger Zone */}
                                <div className="pt-4 border-t border-zinc-800/50">
                                    <button
                                        onClick={handleReset}
                                        disabled={resetting || rivals.length === 0}
                                        className="w-full flex items-center justify-center gap-2 text-xs bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 py-2 rounded-lg transition disabled:opacity-50"
                                    >
                                        {resetting ? <RefreshCw size={14} className="animate-spin" /> : <Trash2 size={14} />}
                                        Reset All Rivals
                                    </button>
                                </div>
                            </div>
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
