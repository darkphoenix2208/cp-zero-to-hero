'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink, Sparkles, Code, Globe, Terminal, Cpu } from 'lucide-react';

interface Problem {
    title: string;
    url: string;
    platform: 'Codeforces' | 'LeetCode' | 'AtCoder' | 'CodeChef' | 'CSES' | 'Other';
    difficulty: string;
    reasoning: string;
}

export default function PlaylistPage() {
    const [topic, setTopic] = useState('');
    const [playlist, setPlaylist] = useState<Problem[]>([]);
    const [loading, setLoading] = useState(false);
    const [searched, setSearched] = useState(false);

    const generatePlaylist = async () => {
        if (!topic.trim()) return;
        setLoading(true);
        setPlaylist([]);
        setSearched(true);

        try {
            const res = await fetch('/api/playlist/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ topic }),
            });
            const data = await res.json();
            if (data.playlist) {
                setPlaylist(data.playlist);
            }
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    const getPlatformIcon = (p: string) => {
        switch (p.toLowerCase()) {
            case 'leetcode': return <Code size={16} className="text-yellow-500" />;
            case 'codeforces': return <Terminal size={16} className="text-blue-500" />;
            case 'atcoder': return <Cpu size={16} className="text-white" />;
            case 'codechef': return <Globe size={16} className="text-orange-500" />;
            default: return <ExternalLink size={16} className="text-gray-500" />;
        }
    };

    const getDifficultyColor = (d: string) => {
        const diff = d.toLowerCase();
        if (diff.includes('easy') || diff.includes('800') || diff.includes('1000')) return 'text-green-400 border-green-400/30 bg-green-400/10';
        if (diff.includes('medium') || diff.includes('1400') || diff.includes('1600')) return 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10';
        if (diff.includes('hard') || diff.includes('1900') || diff.includes('2000')) return 'text-red-400 border-red-400/30 bg-red-400/10';
        return 'text-purple-400 border-purple-400/30 bg-purple-400/10'; // Insane
    };

    return (
        <div className="min-h-screen bg-black text-white p-6 md:p-12 font-sans selection:bg-emerald-500/30">
            {/* Header */}
            <header className="flex items-center justify-between mb-16">
                <div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 flex items-center gap-4">
                        <ListMusicIcon className="text-emerald-400" size={48} />
                        SMART PLAYLIST
                    </h1>
                    <p className="text-gray-400 mt-2 text-lg">
                        Multi-Platform Curator. Codeforces • LeetCode • AtCoder • CodeChef.
                    </p>
                </div>
                <Link href="/dashboard" className="text-gray-500 hover:text-white transition-colors">
                    Back to Dojo
                </Link>
            </header>

            {/* Search Section */}
            <div className="max-w-3xl mx-auto mb-20 text-center">
                <div className="relative group z-10">
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative flex items-center bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 p-2 shadow-2xl">
                        <input
                            type="text"
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && generatePlaylist()}
                            className="bg-transparent text-white w-full px-4 py-3 text-xl focus:outline-none placeholder-zinc-600 font-medium"
                            placeholder="e.g. Dynamic Programming, Graph Theory, System Design..."
                        />
                        <button
                            onClick={generatePlaylist}
                            disabled={loading}
                            className={`px-8 py-3 rounded-md font-bold tracking-wide transition-all ${loading
                                ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                                : 'bg-emerald-500 text-black hover:bg-emerald-400 hover:scale-105 active:scale-95 shadow-lg shadow-emerald-500/20'
                                }`}
                        >
                            {loading ? 'CURATING...' : 'GENERATE'}
                        </button>
                    </div>
                </div>

                {/* Quick Tags */}
                <div className="flex flex-wrap justify-center gap-3 mt-8">
                    {['Sliding Window', 'Union Find', 'Digit DP', 'Segment Trees', 'Network Flow'].map(t => (
                        <button
                            key={t}
                            onClick={() => { setTopic(t); generatePlaylist(); }}
                            className="px-4 py-2 rounded-full border border-zinc-800 hover:border-emerald-500/50 hover:bg-emerald-500/10 text-sm text-zinc-400 hover:text-white transition-all"
                        >
                            {t}
                        </button>
                    ))}
                </div>
            </div>

            {/* Results Grid */}
            <div className="max-w-7xl mx-auto">
                {loading && (
                    <div className="flex flex-col items-center justify-center py-20 space-y-6">
                        <div className="relative">
                            <div className="h-16 w-16 rounded-full border-t-4 border-b-4 border-emerald-500 animate-spin"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Sparkles size={24} className="text-emerald-400 animate-pulse" />
                            </div>
                        </div>
                        <p className="text-zinc-400 font-mono text-sm animate-pulse tracking-widest">
                            SEARCHING ACROSS PLATFORMS...
                        </p>
                    </div>
                )}

                {!loading && searched && playlist.length === 0 && (
                    <div className="text-center py-20 text-zinc-500 border border-dashed border-zinc-800 rounded-2xl">
                        <p>No clean matches found. The archives are silent.</p>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence>
                        {playlist.map((p, i) => (
                            <motion.a
                                key={p.url + i}
                                href={p.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="group relative bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-300 flex flex-col h-full"
                            >
                                {/* Platform Badge */}
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-2 bg-zinc-800/50 px-3 py-1.5 rounded-lg border border-zinc-700/50">
                                        {getPlatformIcon(p.platform)}
                                        <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider">{p.platform}</span>
                                    </div>

                                    <span className={`text-[10px] font-bold px-2 py-1 rounded border uppercase tracking-wider ${getDifficultyColor(p.difficulty)}`}>
                                        {p.difficulty}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold mb-3 text-zinc-100 group-hover:text-emerald-400 transition-colors line-clamp-2">
                                    {p.title}
                                </h3>

                                {/* Reasoning - HIDDEN as per user request */}
                                {/* <div className="mt-auto pt-4 border-t border-zinc-800/50">
                                    <p className="text-sm text-zinc-500 italic leading-relaxed">
                                        "{p.reasoning}"
                                    </p>
                                </div> */}


                                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-500">
                                    <ExternalLink size={20} />
                                </div>
                            </motion.a>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

function ListMusicIcon({ className, size }: { className?: string, size?: number }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M21 15V6" />
            <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
            <path d="M12 12H3" />
            <path d="M16 6H3" />
            <path d="M12 18H3" />
        </svg>
    )
}
