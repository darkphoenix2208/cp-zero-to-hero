'use client';

import { useEffect, useState } from 'react';
import { getDueFlashcards, getProblemTags, processReview } from '@/app/actions';
import { Loader2, Brain, AlarmClock, Calendar, Tag as TagIcon, Repeat, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FlashbackModal } from '@/components/features/flashback/FlashbackModal';

interface Flashcard {
    id: string; // ReviewQueue ID
    problemId: string;
    problemName: string;
    nextReviewDate: string; // serialized date
    tags?: string[]; // We fetch this dynamically
    repetition: number;
    interval: number;
}

export default function FlashbackDashboard() {
    const [cards, setCards] = useState<Flashcard[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeCardId, setActiveCardId] = useState<string | null>(null);
    const [isFlipped, setIsFlipped] = useState(false);

    // For the modal
    const [reviewingCard, setReviewingCard] = useState<Flashcard | null>(null);

    useEffect(() => {
        loadDue();
    }, []);

    const loadDue = async () => {
        setLoading(true);
        const handle = localStorage.getItem('cp-handle');
        if (handle) {
            const due = await getDueFlashcards(handle);

            // Enrich with tags
            const enriched = await Promise.all(due.map(async (c: any) => {
                const tags = await getProblemTags(c.problemId);
                return { ...c, tags };
            }));

            setCards(enriched);
        }
        setLoading(false);
    };

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const handleMarkComplete = (card: Flashcard) => {
        setReviewingCard(card); // Open modal
    };

    const handleModalClose = () => {
        setReviewingCard(null);
        // Remove card from local list immediately for snappiness, or reload
        // Optimistic remove:
        if (reviewingCard) {
            setCards(prev => prev.filter(c => c.id !== reviewingCard.id));
        }
    };

    if (loading) return <div className="flex h-96 items-center justify-center"><Loader2 className="animate-spin text-purple-500" /></div>;

    if (cards.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-full p-12 text-center text-zinc-500">
                <Brain size={48} className="mb-4 text-zinc-700" />
                <h2 className="text-xl font-bold text-white mb-2">All Caught Up!</h2>
                <p className="max-w-md">Your memory queue is empty. Go solve some more problems to populate your Flashback deck.</p>
            </div>
        );
    }

    const currentCard = cards[0]; // Stack mode: show top card

    return (
        <div className="min-h-screen bg-black text-white p-6">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent flex items-center gap-3">
                            Flashback <span className="text-xs font-mono text-zinc-500 border border-zinc-800 px-2 py-1 rounded bg-zinc-900">BETA</span>
                        </h1>
                        <p className="text-zinc-500 mt-1">Spaced Repetition for Algorithms</p>
                    </div>
                    <div className="text-right">
                        <div className="text-2xl font-bold text-white">{cards.length}</div>
                        <div className="text-xs text-zinc-500 uppercase tracking-widest">Cards Due</div>
                    </div>
                </div>

                {/* The Flashcard Stage */}
                <div className="flex flex-col items-center justify-center py-12">

                    <div className="perspective-1000 w-full max-w-xl aspect-[3/2] relative group cursor-pointer" onClick={handleFlip}>
                        <motion.div
                            className="w-full h-full relative preserve-3d transition-all duration-500"
                            animate={{ rotateY: isFlipped ? 180 : 0 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            {/* FRONT (Tags Only) */}
                            <div className="absolute inset-0 backface-hidden bg-zinc-900 border border-zinc-700 rounded-3xl p-8 flex flex-col items-center justify-center shadow-2xl hover:border-purple-500/50 transition">
                                <div className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-4">Topic Hints</div>
                                <div className="flex flex-wrap gap-2 justify-center max-w-[80%]">
                                    {currentCard.tags?.map(t => (
                                        <span key={t} className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-sm font-bold border border-zinc-700">
                                            #{t}
                                        </span>
                                    ))}
                                    {(!currentCard.tags || currentCard.tags.length === 0) && (
                                        <span className="text-zinc-600 italic">No tags available... mystery card!</span>
                                    )}
                                </div>
                                <p className="absolute bottom-8 text-zinc-600 text-xs animate-pulse">Click to Reveal Problem</p>
                            </div>

                            {/* BACK (Problem Name + Actions) */}
                            <div
                                className="absolute inset-0 backface-hidden bg-zinc-900 border border-purple-500 rounded-3xl p-8 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(168,85,247,0.2)]"
                                style={{ transform: 'rotateY(180deg)' }}
                            >
                                <div className="text-purple-400 font-mono text-xs uppercase tracking-widest mb-2">Problem {currentCard.problemId}</div>
                                <h2 className="text-3xl font-bold text-white mb-6 text-center">{currentCard.problemName}</h2>

                                <div className="flex gap-4 mt-4" onClick={(e) => e.stopPropagation()}>
                                    <button
                                        onClick={() => handleMarkComplete(currentCard)}
                                        className="px-6 py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-full transition shadow-lg flex items-center gap-2"
                                    >
                                        <Brain size={18} /> recall
                                    </button>
                                    <a
                                        href={`https://codeforces.com/problemset/problem/${currentCard.problemId.replace(/\D/g, '')}/${currentCard.problemId.replace(/\d/g, '')}`}
                                        target="_blank"
                                        className="px-6 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold rounded-full transition border border-zinc-700"
                                    >
                                        View Problem
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="mt-8 text-center text-zinc-500 text-sm">
                        <div className="flex items-center gap-6 justify-center">
                            <div className="flex items-center gap-2"><Repeat size={14} /> Repetition: {currentCard.repetition || 0}</div>
                            <div className="flex items-center gap-2"><AlarmClock size={14} /> Interval: {currentCard.interval}d</div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Modal */}
            {reviewingCard && (
                <FlashbackModal
                    isOpen={true}
                    onClose={handleModalClose}
                    reviewQueueId={reviewingCard.id}
                    problemName={reviewingCard.problemName}
                />
            )}
        </div>
    );
}
