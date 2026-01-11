'use client';

import { useState } from 'react';
import { Search, Brain, Target, Zap, ExternalLink, Sparkles, Hash } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const QUICK_TAGS = [
    { label: "Dynamic Programming", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
    { label: "Graphs", color: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
    { label: "Trees", color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" },
    { label: "Game Theory", color: "bg-orange-500/20 text-orange-300 border-orange-500/30" },
    { label: "Number Theory", color: "bg-pink-500/20 text-pink-300 border-pink-500/30" }
];

export function QuestionSelector({ userRating = 1200 }: { userRating?: number }) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = async (overrideQuery?: string) => {
        const q = overrideQuery || query;
        if (!q.trim()) return;

        if (overrideQuery) setQuery(overrideQuery);

        setLoading(true);
        setHasSearched(true);
        setResults([]);

        try {
            // 1. Call Internal ML API 
            const res = await fetch('/api/ml/search', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: q, limit: 50 })
            });
            const data = await res.json();

            if (data.error) throw new Error(data.error);

            const searchResults = data.results || [];

            if (searchResults.length > 0) {
                // 2. Get Predictions 
                const predictionRes = await fetch('/api/ml/predict', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        user: { user_rating: userRating, user_id: "me" },
                        problems: searchResults.map((p: any) => ({
                            problem_id: p.problem_id,
                            rating: p.rating || 1200
                        }))
                    })
                });
                const predData = await predictionRes.json();

                // Merge Data
                const merged = searchResults.map((p: any) => {
                    const pred = (predData.predictions || []).find((x: any) => x.problem_id === p.problem_id) || {};
                    return { ...p, ...pred };
                });

                setResults(merged);
            } else {
                setResults([]);
            }

        } catch (error) {
            console.error("ML Service Error", error);
            setResults([]);
        } finally {
            setLoading(false);
        }
    };

    const getDifficultyColor = (prob: number) => {
        if (prob > 0.8) return 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]';
        if (prob > 0.5) return 'bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.4)]';
        return 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.4)]';
    };

    return (
        <div className="w-full mx-auto p-6 md:p-12 bg-zinc-900/60 rounded-3xl border border-zinc-800 backdrop-blur-2xl shadow-2xl relative overflow-hidden min-h-[80vh]">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-500/5 to-purple-500/5 pointer-events-none" />

            <div className="relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10 w-full">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-zinc-800/80 rounded-2xl border border-zinc-700 shadow-xl">
                            <Brain className="text-pink-400" size={32} />
                        </div>
                        <div>
                            <h2 className="text-3xl font-black text-white tracking-tight">
                                Neural <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Finder</span>
                            </h2>
                            <p className="text-zinc-400 text-sm font-medium">Dual-Engine AI Search • Win Probability v2.0</p>
                        </div>
                    </div>
                </div>

                {/* Search Input */}
                <div className="relative mb-8 group max-w-6xl mx-auto">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl opacity-30 group-focus-within:opacity-100 transition duration-500 blur"></div>
                    <div className="relative flex items-center bg-zinc-900 border border-zinc-700/50 rounded-2xl overflow-hidden shadow-2xl">
                        <Search className="absolute left-6 text-zinc-500 group-focus-within:text-pink-400 transition-colors" size={24} />
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                            placeholder="Describe a problem... e.g., 'Find shortest path with negative edges'"
                            className="w-full bg-transparent border-none py-6 pl-16 pr-32 text-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-0 font-medium font-sans"
                        />
                        <button
                            onClick={() => handleSearch()}
                            disabled={loading}
                            className="absolute right-3 top-3 bottom-3 bg-zinc-800 hover:bg-zinc-700 text-white px-6 rounded-xl font-bold transition-all disabled:opacity-50 border border-zinc-700/50 shadow-lg flex items-center gap-2"
                        >
                            {loading ? <span className="animate-spin">⌛</span> : <Sparkles size={18} />}
                            {loading ? 'Thinking...' : 'Find'}
                        </button>
                    </div>
                </div>

                {/* Quick Tags */}
                <div className="flex flex-wrap gap-2 mb-10 justify-center">
                    {QUICK_TAGS.map((tag) => (
                        <button
                            key={tag.label}
                            onClick={() => handleSearch(tag.label)}
                            className={`px-4 py-1.5 rounded-full text-xs font-bold border ${tag.color} hover:opacity-80 transition-all flex items-center gap-1.5`}
                        >
                            <Hash size={12} />
                            {tag.label}
                        </button>
                    ))}
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                    <AnimatePresence mode="popLayout">
                        {results.map((p, i) => {
                            const getProblemUrl = () => {
                                // 1. Codeforces (Standard: 1385C)
                                const cfMatch = p.problem_id.match(/^(\d+)([A-Z]\d?)$/);
                                if (cfMatch) return `https://codeforces.com/contest/${cfMatch[1]}/problem/${cfMatch[2]}`;
                                // 2. CSES
                                if (p.problem_id.startsWith('CSES-')) return `https://cses.fi/problemset/task/${p.problem_id.split('-')[1]}`;
                                // 3. AtCoder
                                if (p.problem_id.startsWith('ABC') || p.problem_id.startsWith('DP')) return `https://atcoder.jp/contests/${p.problem_id.split('_')[0].toLowerCase()}/tasks/${p.problem_id}`;
                                // 4. Fallback
                                const platform = p.problem_id.startsWith('LC') ? 'LeetCode' : 'Competitive Programming';
                                return `https://www.google.com/search?q=${platform}+${p.title}+problem`;
                            };

                            const platform = p.problem_id.match(/^\d+[A-Z]/) ? 'Codeforces' :
                                p.problem_id.startsWith('LC') ? 'LeetCode' :
                                    p.problem_id.startsWith('CSES') ? 'CSES' :
                                        p.problem_id.startsWith('ABC') || p.problem_id.startsWith('DP') ? 'AtCoder' : 'Other';

                            return (
                                <motion.a
                                    key={p.problem_id}
                                    href={getProblemUrl()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.03 }}
                                    className="bg-zinc-900/40 border border-zinc-800/50 p-5 rounded-2xl flex flex-col justify-between group hover:bg-zinc-800/60 hover:border-zinc-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden"
                                >
                                    {/* Win Bar Background */}
                                    <div className="absolute bottom-0 left-0 h-1 w-full bg-zinc-800/50">
                                        <div
                                            className={`h-full transition-all duration-1000 ${getDifficultyColor(p.win_probability)}`}
                                            style={{ width: `${(p.win_probability || 0) * 100}%` }}
                                        />
                                    </div>

                                    <div className="flex justify-between items-start mb-3">
                                        <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded bg-zinc-800 text-zinc-400 border border-zinc-700`}>
                                            {platform}
                                        </span>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold text-zinc-200 group-hover:text-white transition-colors mb-1 line-clamp-1">
                                            {p.title || "Unknown Problem"}
                                        </h3>
                                        <p className="text-xs text-zinc-500 font-mono mb-4">
                                            ID: {p.problem_id} • Rating: {p.rating || "N/A"}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-800/50">
                                        <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider group-hover:text-pink-400 transition-colors">
                                            {p.label || "Calculating..."}
                                        </span>
                                        <ExternalLink size={14} className="text-zinc-600 group-hover:text-white transition-colors" />
                                    </div>
                                </motion.a>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {results.length === 0 && !loading && (
                    <div className="text-center py-20">
                        <div className="inline-flex p-4 rounded-full bg-zinc-900 border border-zinc-800 mb-6">
                            <Target className="text-zinc-600" size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">
                            {hasSearched ? "No signals found." : "The Engine is Silent."}
                        </h3>
                        <p className="text-zinc-500 max-w-sm mx-auto">
                            {hasSearched
                                ? "Try broadening your query or selecting a popular topic above."
                                : "Type a description of the algorithmic challenge you are facing."}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
