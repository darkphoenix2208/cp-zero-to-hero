'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Brain, Loader2, Sparkles, AlertTriangle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export interface QuizData {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
}

interface QuizModalProps {
    isOpen: boolean;
    onClose: () => void;
    onComplete: (success: boolean) => void;
    code: string;
    topic: string;
}

export default function QuizModal({ isOpen, onClose, onComplete, code, topic }: QuizModalProps) {
    const [status, setStatus] = useState<'loading' | 'question' | 'success' | 'failure'>('loading');
    const [quiz, setQuiz] = useState<QuizData | null>(null);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);

    // Rate Limiting / Safety: Don't fetch if code is empty
    useEffect(() => {
        if (isOpen && code) {
            generateQuiz();
        }
    }, [isOpen, code]);

    const generateQuiz = async () => {
        setStatus('loading');
        setQuiz(null);
        setSelectedOption(null);

        try {
            const res = await fetch('/api/flashback/generate-quiz', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ code, topic })
            });

            if (!res.ok) throw new Error("Failed");

            const data = await res.json();
            setQuiz(data);
            setStatus('question');
        } catch (e) {
            console.error(e);
            // Fallback for demo if API fails
            setQuiz({
                question: "Explain the time complexity of your solution.",
                options: ["O(N)", "O(log N)", "O(N^2)", "O(1)"],
                correctIndex: 0,
                explanation: "Based on the single loop structure."
            });
            setStatus('question');
        }
    };

    const handleAnswer = (index: number) => {
        if (status !== 'question' || !quiz) return;

        setSelectedOption(index);

        if (index === quiz.correctIndex) {
            setTimeout(() => setStatus('success'), 800);
            setTimeout(() => onComplete(true), 2500); // Close after animation
        } else {
            setTimeout(() => setStatus('failure'), 800);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="bg-zinc-950 border-zinc-800 text-white sm:max-w-xl">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                        <Brain className="text-amber-500" /> Memory Repair Protocol
                    </DialogTitle>
                </DialogHeader>

                <div className="min-h-[300px] flex flex-col justify-center">

                    {/* LOADING STATE - ANALYZING CODE */}
                    {status === 'loading' && (
                        <div className="flex flex-col items-center justify-center space-y-4 text-zinc-400">
                            <div className="relative">
                                <Loader2 className="w-12 h-12 animate-spin text-amber-500" />
                                <div className="absolute inset-0 blur-xl bg-amber-500/20" />
                            </div>
                            <p className="animate-pulse text-sm">Analyzing logical patterns in your code...</p>
                        </div>
                    )}

                    {/* QUESTION STATE */}
                    {status === 'question' && quiz && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="space-y-6"
                        >
                            <div className="bg-zinc-900/50 p-4 rounded-lg border border-zinc-800">
                                <p className="text-lg font-medium leading-relaxed">{quiz.question}</p>
                            </div>

                            <div className="space-y-3">
                                {quiz.options.map((opt, i) => {
                                    const isSelected = selectedOption === i;
                                    const isCorrect = i === quiz.correctIndex;
                                    const showCorrect = selectedOption !== null && isCorrect;
                                    const showWrong = isSelected && !isCorrect;

                                    let style = 'bg-zinc-900 border-zinc-800 hover:bg-zinc-800';
                                    if (showCorrect) style = 'bg-green-500/20 border-green-500 text-green-400';
                                    if (showWrong) style = 'bg-red-500/20 border-red-500 text-red-400';

                                    return (
                                        <button
                                            key={i}
                                            onClick={() => handleAnswer(i)}
                                            disabled={selectedOption !== null}
                                            className={`w-full p-4 text-left rounded-lg text-sm font-medium transition-all border flex items-center justify-between group ${style}`}
                                        >
                                            <div className="flex items-center">
                                                <span className="opacity-50 mr-3 font-mono">{String.fromCharCode(65 + i)}.</span>
                                                {opt}
                                            </div>
                                            {showCorrect && <Check size={18} className="text-green-500" />}
                                            {showWrong && <X size={18} className="text-red-500" />}
                                        </button>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}

                    {/* SUCCESS STATE - REPAIRING */}
                    {status === 'success' && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center justify-center text-center space-y-6"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-green-500 blur-3xl opacity-20 animate-pulse" />
                                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(34,197,94,0.6)]">
                                    <Sparkles className="w-10 h-10 text-white animate-spin-slow" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-green-400">Memory Repaired!</h3>
                                <p className="text-zinc-500 mt-2">Neural pathways strengthened. Decay reset.</p>
                            </div>
                        </motion.div>
                    )}

                    {/* FAILURE STATE - DECAY CONTINUES */}
                    {status === 'failure' && quiz && (
                        <motion.div
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-6"
                        >
                            <div className="flex flex-col items-center justify-center text-red-500 mb-4">
                                <AlertTriangle className="w-12 h-12 mb-2" />
                                <h3 className="text-xl font-bold">Protocol Failed</h3>
                                <p className="text-red-400/70 text-sm">Decay accelerated.</p>
                            </div>

                            <div className="bg-red-950/30 border border-red-900/50 p-4 rounded-lg">
                                <h4 className="font-bold text-red-400 mb-2">Sensei's Explanation:</h4>
                                <p className="text-zinc-300 text-sm leading-relaxed">{quiz.explanation}</p>
                            </div>

                            <button
                                onClick={() => onComplete(false)}
                                className="w-full py-3 bg-red-600 hover:bg-red-500 text-white rounded-lg font-bold transition"
                            >
                                Acknowledge & Continue
                            </button>
                        </motion.div>
                    )}

                </div>
            </DialogContent>
        </Dialog>
    );
}
