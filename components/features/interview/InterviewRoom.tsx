import { motion, AnimatePresence } from 'framer-motion';
import { Lock, User, Loader2, Mic, Activity, XCircle } from 'lucide-react';
import { useVoiceInput } from '@/hooks/useVoiceInput';
import { VoiceAnswer } from './VoiceAnswer';
import { useEffect, useState } from 'react';

interface InterviewRoomProps {
    isOpen: boolean;
    question: string | null;
    onValidate: (answer: string) => void;
    feedback: string | null;
    isProcessing: boolean;
}

export function InterviewRoom({ isOpen, question, onValidate, feedback, isProcessing }: InterviewRoomProps) {
    const { isListening, transcript, startListening, stopListening } = useVoiceInput();
    const [typedQuestion, setTypedQuestion] = useState("");

    // Typewriter effect for question
    useEffect(() => {
        if (question) {
            setTypedQuestion("");
            let i = 0;
            const interval = setInterval(() => {
                setTypedQuestion(question.slice(0, i + 1));
                i++;
                if (i > question.length) clearInterval(interval);
            }, 30);
            return () => clearInterval(interval);
        }
    }, [question]);

    const handleSubmit = () => {
        onValidate(transcript);
    };

    if (!isOpen) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950 text-white font-sans overflow-hidden"
        >
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(220,38,38,0.15),_rgba(9,9,11,1))] pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none" />

            {/* CONTENT CONTAINER */}
            <div className="relative z-10 w-full max-w-5xl h-full flex flex-col p-6 items-center justify-center">

                {/* LOADING STATE */}
                {isProcessing && !question ? (
                    <div className="flex flex-col items-center justify-center gap-8 text-center animate-in fade-in zoom-in duration-700">
                        <div className="relative">
                            <div className="absolute inset-0 bg-red-600 blur-2xl opacity-40 animate-pulse" />
                            <div className="w-24 h-24 rounded-full border-4 border-red-500/30 flex items-center justify-center animate-[spin_3s_linear_infinite]">
                                <Loader2 size={48} className="text-red-500" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-4xl font-extrabold tracking-tighter text-white">
                                The Engine is Thinking<span className="animate-pulse">...</span>
                            </h2>
                            <p className="text-zinc-500 text-lg uppercase tracking-widest font-mono">
                                Analyzing Complexity • Detecting Smells
                            </p>
                        </div>
                    </div>
                ) : (
                    // ACTIVE INTERVIEW STATE
                    <div className="flex flex-col items-center w-full max-w-3xl animate-in slide-in-from-bottom-10 fade-in duration-500">

                        {/* Interviewer Persona */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="flex flex-col items-center mb-10"
                        >
                            <div className="relative mb-6">
                                <div className="absolute inset-0 bg-red-500 blur-3xl opacity-20" />
                                <div className="w-24 h-24 bg-gradient-to-br from-zinc-800 to-black border-2 border-red-500/50 rounded-2xl flex items-center justify-center shadow-2xl relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-red-500/10 group-hover:bg-red-500/20 transition" />
                                    <User size={48} className="text-red-200 relative z-10" />
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-500 animate-pulse" />
                                </div>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                                <span className="text-red-400 font-mono text-xs uppercase tracking-widest font-bold">Live Interrogation</span>
                            </div>
                            <h3 className="text-zinc-500 font-bold uppercase tracking-[0.2em] text-xs">Senior Google Engineer</h3>
                        </motion.div>

                        {/* The Question */}
                        <div className="mb-12 text-center min-h-[120px]">
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 drop-shadow-sm">
                                "{typedQuestion}"
                                <span className="inline-block w-1 h-8 md:h-12 bg-red-500 ml-1 animate-pulse align-middle" />
                            </h1>
                        </div>

                        {/* Interaction Area */}
                        <div className="w-full bg-zinc-900/60 border border-white/10 rounded-3xl p-1 backdrop-blur-xl shadow-2xl overflow-hidden">
                            <div className="p-8 flex flex-col items-center bg-gradient-to-b from-white/5 to-transparent rounded-[20px]">
                                <VoiceAnswer
                                    transcript={transcript}
                                    isListening={isListening}
                                    startListening={startListening}
                                    stopListening={stopListening}
                                    onSubmit={handleSubmit}
                                    isProcessing={isProcessing}
                                />

                                {feedback && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        className="mt-6 w-full"
                                    >
                                        <div className={`p-6 rounded-xl border ${feedback.includes('System Overload')
                                                ? 'bg-yellow-950/30 border-yellow-900/50 text-yellow-200'
                                                : 'bg-red-950/30 border-red-900/50 text-red-200'
                                            }`}>
                                            <div className="flex items-center gap-3 mb-2 font-bold uppercase tracking-wider text-xs opacity-70">
                                                {feedback.includes('System Overload') ? <XCircle size={14} /> : <Activity size={14} />}
                                                <span>Feedback</span>
                                            </div>
                                            <p className="text-lg leading-relaxed">{feedback}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="mt-8 flex items-center gap-3 opacity-40 hover:opacity-100 transition duration-500">
                            <Lock size={14} className="text-zinc-400" />
                            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                                Editor is locked until you answer
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
}
