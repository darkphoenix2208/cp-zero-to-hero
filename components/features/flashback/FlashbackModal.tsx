'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, X } from 'lucide-react';
import { useState } from 'react';
import { processReview } from '@/app/actions';

interface FlashbackModalProps {
    isOpen: boolean;
    onClose: () => void;
    reviewQueueId: string; // The ID of the ReviewQueue Record
    problemName: string;
}

export function FlashbackModal({ isOpen, onClose, reviewQueueId, problemName }: FlashbackModalProps) {
    const [submitting, setSubmitting] = useState(false);

    const handleRate = async (quality: number) => {
        setSubmitting(true);
        await processReview({ id: reviewQueueId, quality });
        setSubmitting(false);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 20 }}
                        className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 max-w-md w-full shadow-2xl relative overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
                                <Brain size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">Memory Check</h3>
                                <p className="text-zinc-500 text-xs">Spaced Repetition System</p>
                            </div>
                        </div>

                        <div className="text-center mb-8">
                            <p className="text-zinc-400 text-sm mb-2">How difficult was it to recall the logic for:</p>
                            <h2 className="text-xl font-bold text-white">{problemName}</h2>
                        </div>

                        {/* Rating Buttons */}
                        <div className="grid grid-cols-4 gap-2">
                            <button
                                disabled={submitting}
                                onClick={() => handleRate(0)}
                                className="flex flex-col items-center gap-1 p-3 rounded-xl bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 hover:border-red-500/40 transition group"
                            >
                                <span className="text-2xl group-hover:scale-110 transition">🔴</span>
                                <span className="text-[10px] font-bold text-red-400 uppercase">Forgot</span>
                            </button>

                            <button
                                disabled={submitting}
                                onClick={() => handleRate(3)}
                                className="flex flex-col items-center gap-1 p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 hover:bg-orange-500/20 hover:border-orange-500/40 transition group"
                            >
                                <span className="text-2xl group-hover:scale-110 transition">🟠</span>
                                <span className="text-[10px] font-bold text-orange-400 uppercase">Hard</span>
                            </button>

                            <button
                                disabled={submitting}
                                onClick={() => handleRate(4)}
                                className="flex flex-col items-center gap-1 p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/40 transition group"
                            >
                                <span className="text-2xl group-hover:scale-110 transition">🔵</span>
                                <span className="text-[10px] font-bold text-blue-400 uppercase">Good</span>
                            </button>

                            <button
                                disabled={submitting}
                                onClick={() => handleRate(5)}
                                className="flex flex-col items-center gap-1 p-3 rounded-xl bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 hover:border-green-500/40 transition group"
                            >
                                <span className="text-2xl group-hover:scale-110 transition">🟢</span>
                                <span className="text-[10px] font-bold text-green-400 uppercase">Easy</span>
                            </button>
                        </div>

                        {/* Decoration */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-600/20 blur-[80px] rounded-full point-events-none" />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
