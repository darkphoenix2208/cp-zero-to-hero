'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Youtube, Book, Code, ExternalLink, PlayCircle } from 'lucide-react';
import { TopicContent } from './topic-data';
import { useState } from 'react';
import { cn } from '@/lib/utils'; // Assuming generic utility exists, else standard string concat

interface TopicModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: TopicContent | null;
}

export function TopicModal({ isOpen, onClose, data }: TopicModalProps) {
    const [tab, setTab] = useState<'learn' | 'practice' | 'cheatsheet'>('learn');

    if (!data) return null;

    // Helper to extract YouTube ID if needed or just use link
    // Assuming videoGuide is a full URL.
    const getVideoId = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };
    const videoId = getVideoId(data.videoGuide);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-zinc-950 border border-zinc-800 w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-zinc-800 bg-zinc-900/50">
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-1">{data.title}</h2>
                                    <div className="flex gap-2">
                                        <span className="text-[10px] uppercase font-bold tracking-wider text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">Topic Hub</span>
                                        <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded">{data.problemSet.length} Problems</span>
                                    </div>
                                </div>
                                <button onClick={onClose} className="p-2 hover:bg-zinc-800 rounded-full transition text-zinc-400 hover:text-white">
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Tabs */}
                            <div className="flex border-b border-zinc-800 bg-zinc-950">
                                <button
                                    onClick={() => setTab('learn')}
                                    className={cn("flex-1 py-3 text-sm font-medium border-b-2 transition-colors flex items-center justify-center gap-2", tab === 'learn' ? "border-blue-500 text-blue-400 bg-blue-500/5" : "border-transparent text-zinc-500 hover:text-zinc-300")}
                                >
                                    <Youtube size={16} /> Learn
                                </button>
                                <button
                                    onClick={() => setTab('practice')}
                                    className={cn("flex-1 py-3 text-sm font-medium border-b-2 transition-colors flex items-center justify-center gap-2", tab === 'practice' ? "border-green-500 text-green-400 bg-green-500/5" : "border-transparent text-zinc-500 hover:text-zinc-300")}
                                >
                                    <PlayCircle size={16} /> Practice
                                </button>
                                <button
                                    onClick={() => setTab('cheatsheet')}
                                    className={cn("flex-1 py-3 text-sm font-medium border-b-2 transition-colors flex items-center justify-center gap-2", tab === 'cheatsheet' ? "border-purple-500 text-purple-400 bg-purple-500/5" : "border-transparent text-zinc-500 hover:text-zinc-300")}
                                >
                                    <Code size={16} /> Cheatsheet
                                </button>
                            </div>

                            {/* Body */}
                            <div className="p-6 overflow-y-auto custom-scrollbar flex-1 bg-zinc-950">
                                {tab === 'learn' && (
                                    <div className="space-y-6">
                                        {/* Video Embed */}
                                        <div className="aspect-video w-full bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 relative group">
                                            {videoId ? (
                                                <iframe
                                                    width="100%"
                                                    height="100%"
                                                    src={`https://www.youtube.com/embed/${videoId}`}
                                                    title="YouTube video player"
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                ></iframe>
                                            ) : (
                                                <div className="flex items-center justify-center h-full text-zinc-500">Video not available</div>
                                            )}
                                        </div>

                                        {/* Resources */}
                                        {data.resources.length > 0 && (
                                            <div>
                                                <h3 className="text-sm font-bold text-zinc-300 mb-3 flex items-center gap-2"><Book size={16} /> Recommended Reading</h3>
                                                <div className="space-y-2">
                                                    {data.resources.map((res, i) => (
                                                        <a
                                                            key={i}
                                                            href={res.url}
                                                            target="_blank"
                                                            className="block p-3 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-900 hover:border-zinc-700 transition group"
                                                        >
                                                            <div className="flex items-center justify-between">
                                                                <span className="text-sm text-blue-400 group-hover:underline">{res.title}</span>
                                                                <ExternalLink size={14} className="text-zinc-600 group-hover:text-zinc-400" />
                                                            </div>
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {tab === 'practice' && (
                                    <div className="space-y-4">
                                        <div className="text-sm text-zinc-400 mb-2">
                                            Solve these problems to gain XP for this skill.
                                        </div>
                                        <div className="grid gap-2">
                                            {data.problemSet.map((prob) => {
                                                const link = prob.id.includes("CSES")
                                                    ? `https://cses.fi/problemset/task/${prob.id.split('-')[1]}`
                                                    : `https://codeforces.com/problemset/problem/${prob.id.replace(/\D/g, '')}/${prob.id.replace(/\d/g, '')}`;

                                                return (
                                                    <div key={prob.id} className="flex items-center justify-between p-4 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-green-500/30 transition group relative overflow-hidden">
                                                        <div className="relative z-10">
                                                            <div className="flex items-center gap-3">
                                                                <span className="font-mono text-zinc-500 text-xs">{prob.id}</span>
                                                                <span className="font-bold text-zinc-200 group-hover:text-green-400 transition">{prob.name}</span>
                                                            </div>
                                                            <div className="flex items-center gap-2 mt-1">
                                                                <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400">Rating: {prob.rating}</span>
                                                            </div>
                                                        </div>
                                                        <a
                                                            href={link}
                                                            target="_blank"
                                                            className="relative z-10 p-2 bg-green-500/10 text-green-500 rounded-lg hover:bg-green-500 hover:text-black transition"
                                                        >
                                                            <ExternalLink size={16} />
                                                        </a>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}

                                {tab === 'cheatsheet' && (
                                    <div className="relative group">
                                        <div className="absolute top-4 right-4 z-10">
                                            <button
                                                onClick={() => navigator.clipboard.writeText(data.cheatSheet)}
                                                className="text-xs bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-1.5 rounded-lg border border-zinc-700 shadow-xl transition opacity-0 group-hover:opacity-100"
                                            >
                                                Copy Snippet
                                            </button>
                                        </div>
                                        <pre className="p-4 rounded-xl bg-[#0d1117] border border-zinc-800 overflow-x-auto text-sm font-mono text-zinc-300 leading-relaxed shadow-inner">
                                            <code>{data.cheatSheet}</code>
                                        </pre>
                                        <p className="text-xs text-zinc-500 mt-4 text-center">
                                            Pro Tip: Memorize the logic, not just the code.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
