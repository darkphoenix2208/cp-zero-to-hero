'use client'
import { useState, useEffect } from 'react';
import { generateMashup } from '@/app/actions';
import { Zap, Brain, ArrowRight, Dna, Clock, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export function MashupGenerator() {
    const [range, setRange] = useState([800, 1600]);
    const [count, setCount] = useState(5);
    const [duration, setDuration] = useState(120); // minutes

    const [loading, setLoading] = useState(false);
    const [mashup, setMashup] = useState<any>(null);
    const [weakness, setWeakness] = useState<string[]>([]);

    const [contestStatus, setContestStatus] = useState<'idle' | 'running'>('idle');
    const [timeLeft, setTimeLeft] = useState(0);

    // Fallback handle logic: assume stored in localStorage
    // In real app, props.handle or context
    const getHandle = () => localStorage.getItem('cp-handle') || '';

    const handleGenerate = async () => {
        const h = getHandle();
        if (!h) return;

        setLoading(true);
        setMashup(null);
        setContestStatus('idle');

        const res = await generateMashup(h, range[0], range[1], count);
        if (res.success) {
            setMashup(res.problems);
            setWeakness(res.weakTags || []);
            // Start Timer Logic
            setTimeLeft(duration * 60);
            setContestStatus('running');
        }
        setLoading(false);
    }

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (contestStatus === 'running' && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft(curr => curr - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [contestStatus, timeLeft]);

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }

    return (
        <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 backdrop-blur-sm relative overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                    <Dna size={24} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white">Smart Mashup Generator</h3>
                    <p className="text-zinc-400 text-sm">AI-driven contest based on your weak topics.</p>
                </div>
            </div>

            {/* Config & Controls (Hidden when running?) No, let's keep them disabled or collapsed */}
            <div className={contestStatus === 'running' ? "opacity-50 pointer-events-none filter blur-[1px] transition duration-500" : "transition duration-500"}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {/* Rating */}
                    <div className="p-4 bg-zinc-950/50 rounded-xl border border-zinc-800/50">
                        <label className="text-xs text-zinc-500 uppercase font-bold tracking-wider mb-2 block">Difficulty</label>
                        <div className="flex items-center gap-2">
                            <input
                                type="number" value={range[0]} onChange={(e) => setRange([Number(e.target.value), range[1]])}
                                className="w-16 bg-transparent text-white font-mono border-b border-zinc-700 focus:border-purple-500 outline-none text-center"
                            />
                            <span className="text-zinc-600">-</span>
                            <input
                                type="number" value={range[1]} onChange={(e) => setRange([range[0], Number(e.target.value)])}
                                className="w-16 bg-transparent text-white font-mono border-b border-zinc-700 focus:border-purple-500 outline-none text-center"
                            />
                        </div>
                    </div>
                    {/* Count */}
                    <div className="p-4 bg-zinc-950/50 rounded-xl border border-zinc-800/50">
                        <label className="text-xs text-zinc-500 uppercase font-bold tracking-wider mb-2 block">Problems</label>
                        <div className="flex items-center gap-4">
                            <input
                                type="range" min="3" max="10" value={count} onChange={(e) => setCount(Number(e.target.value))}
                                className="flex-1 accent-purple-500 h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
                            />
                            <span className="font-mono text-white text-lg w-6">{count}</span>
                        </div>
                    </div>
                    {/* Duration */}
                    <div className="p-4 bg-zinc-950/50 rounded-xl border border-zinc-800/50">
                        <label className="text-xs text-zinc-500 uppercase font-bold tracking-wider mb-2 block">Duration (min)</label>
                        <div className="flex items-center gap-4">
                            <input
                                type="range" min="30" max="300" step="15" value={duration} onChange={(e) => setDuration(Number(e.target.value))}
                                className="flex-1 accent-purple-500 h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
                            />
                            <span className="font-mono text-white text-lg w-10">{duration}</span>
                        </div>
                    </div>
                </div>

                <button
                    onClick={handleGenerate}
                    disabled={loading}
                    className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl font-bold transition flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg shadow-purple-900/20"
                >
                    {loading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                        <>
                            <Play size={18} fill="currentColor" /> Start Contest
                        </>
                    )}
                </button>
            </div>

            {/* Results / Active Contest */}
            {contestStatus === 'running' && mashup && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 pt-8 border-t border-zinc-800 relative"
                >
                    {/* Timer Banner */}
                    <div className="absolute top-0 right-0 -mt-14 bg-zinc-900 border border-zinc-700 px-4 py-2 rounded-lg flex items-center gap-3 shadow-xl">
                        <Clock size={16} className="text-red-400 animate-pulse" />
                        <span className="font-mono text-2xl font-bold text-white tracking-widest">
                            {formatTime(timeLeft)}
                        </span>
                    </div>

                    {weakness.length > 0 && (
                        <div className="mb-6 bg-red-500/10 border border-red-500/20 p-4 rounded-xl">
                            <h4 className="text-red-300 font-bold flex items-center gap-2 text-sm mb-2">
                                <Brain size={16} /> Targeted Weaknesses
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {weakness.map(t => (
                                    <span key={t} className="px-2 py-1 bg-red-500/20 text-red-200 text-xs rounded uppercase font-bold tracking-wider">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                        Problems <span className="text-zinc-500 font-normal">({mashup.length})</span>
                    </h4>

                    <div className="space-y-3">
                        {mashup.map((p: any, i: number) => (
                            <div key={i} className="flex items-center justify-between p-4 bg-zinc-950 rounded-xl border border-zinc-900 group hover:border-purple-500/50 transition">
                                <div className="flex items-center gap-4">
                                    <span className="w-8 h-8 flex items-center justify-center bg-zinc-900 rounded-full text-zinc-500 font-bold text-sm group-hover:bg-purple-600 group-hover:text-white transition">
                                        {String.fromCharCode(65 + i)}
                                    </span>
                                    <div>
                                        <a href={`https://codeforces.com/problemset/problem/${p.contestId}/${p.index}`} target="_blank" className="font-bold text-zinc-200 hover:text-white">
                                            {p.name}
                                        </a>
                                        <div className="text-xs text-zinc-500 mt-0.5 flex items-center gap-2">
                                            <span>Rating: {p.rating}</span>
                                            <span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
                                            <span className="text-purple-400 capitalize">{p.chosenTag}</span>
                                        </div>
                                    </div>
                                </div>
                                <a
                                    href={`https://codeforces.com/problemset/problem/${p.contestId}/${p.index}`}
                                    target="_blank"
                                    className="p-2 text-zinc-600 hover:text-purple-400 transition"
                                >
                                    <ArrowRight size={18} />
                                </a>
                            </div>
                        ))}
                    </div>
                </motion.div>
            )}
        </div>
    );
}
