'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, ExternalLink, RefreshCw, CheckCircle, Clock } from 'lucide-react';

interface FlashbackCardProps {
    card: any;
    onRate: (quality: number) => void;
}

export function FlashbackCard({ card, onRate }: FlashbackCardProps) {
    const [revealed, setRevealed] = useState(false);

    const handleRate = (q: number) => {
        onRate(q);
        setRevealed(false); // Reset for next card if recycled, though usually parent switches component
    };

    return (
        <div className="w-full max-w-xl mx-auto bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-pink-900/30 to-purple-900/30 p-8 text-center border-b border-white/5">
                <div className="inline-flex p-3 bg-pink-500/20 rounded-full mb-4">
                    <Brain className="text-pink-400" size={32} />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">{card.problemName}</h2>
                <div className="flex justify-center gap-4 text-sm text-zinc-400">
                    <span className="flex items-center gap-1"><RefreshCw size={14} /> Reps: {card.repetitions}</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> Interval: {card.interval}d</span>
                </div>
            </div>

            {/* Content */}
            <div className="p-8 space-y-8">
                <div className="text-center">
                    <p className="text-zinc-400 mb-6">
                        Solve this problem again to strengthen your memory trace.
                    </p>
                    <a
                        href={`https://codeforces.com/problemset/problem/${card.problemId.replace(/([0-9]+)([A-Z]+)/, '$1/$2')}`} // Heuristic URL constrcution
                        target="_blank"
                        className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-zinc-200 transition"
                    >
                        <ExternalLink size={18} /> Open Problem
                    </a>
                </div>

                {!revealed ? (
                    <button
                        onClick={() => setRevealed(true)}
                        className="w-full py-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-xl font-medium transition"
                    >
                        I have attempted it. Rate difficulty.
                    </button>
                ) : (
                    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2">
                        <p className="text-center text-sm text-zinc-500 font-bold uppercase tracking-widest">How difficult was it?</p>
                        <div className="grid grid-cols-4 gap-2">
                            <button onClick={() => handleRate(0)} className="p-3 bg-red-900/30 hover:bg-red-900/50 border border-red-500/30 rounded-lg flex flex-col items-center gap-1 group">
                                <span className="text-xl">😫</span>
                                <span className="text-xs text-red-300 font-bold">Blackout</span>
                                <span className="text-[10px] text-red-400/50 group-hover:text-red-400">Reset</span>
                            </button>
                            <button onClick={() => handleRate(3)} className="p-3 bg-orange-900/30 hover:bg-orange-900/50 border border-orange-500/30 rounded-lg flex flex-col items-center gap-1 group">
                                <span className="text-xl">😓</span>
                                <span className="text-xs text-orange-300 font-bold">Hard</span>
                                <span className="text-[10px] text-orange-400/50 group-hover:text-orange-400">Short Int</span>
                            </button>
                            <button onClick={() => handleRate(4)} className="p-3 bg-blue-900/30 hover:bg-blue-900/50 border border-blue-500/30 rounded-lg flex flex-col items-center gap-1 group">
                                <span className="text-xl">🙂</span>
                                <span className="text-xs text-blue-300 font-bold">Good</span>
                                <span className="text-[10px] text-blue-400/50 group-hover:text-blue-400">Normal</span>
                            </button>
                            <button onClick={() => handleRate(5)} className="p-3 bg-green-900/30 hover:bg-green-900/50 border border-green-500/30 rounded-lg flex flex-col items-center gap-1 group">
                                <span className="text-xl">😎</span>
                                <span className="text-xs text-green-300 font-bold">Easy</span>
                                <span className="text-[10px] text-green-400/50 group-hover:text-green-400">Long Int</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
