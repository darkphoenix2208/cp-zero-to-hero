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
    const [displayData, setDisplayData] = useState<{ verdict?: string; reason?: string; followUp?: string; fullText: string }>({ fullText: "" });
    const [typedText, setTypedText] = useState("");
    const [userAnswer, setUserAnswer] = useState("");

    // Sync voice transcript to user answer
    useEffect(() => {
        if (transcript) setUserAnswer(transcript);
    }, [transcript]);

    // TTS Helper
    const speak = (text: string) => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 1.1;
            utterance.pitch = 1.0;
            const voices = window.speechSynthesis.getVoices();
            const preferredVoice = voices.find(v => v.name.includes('Google') || v.name.includes('English'));
            if (preferredVoice) utterance.voice = preferredVoice;
            window.speechSynthesis.speak(utterance);
        }
    };

    // Parse & Typewriter Effect
    useEffect(() => {
        if (question) {
            // Reset answer on new question
            setUserAnswer("");

            // 1. Parsing Logic
            let verdict = "";
            let reason = "";
            let followUp = question;

            // Check if it's a RAG response (Verdict: ... Follow-up: ...)
            if (question.includes("Verdict:")) {
                const parts = question.split("Follow-up:");
                const verdictPart = parts[0].replace("Verdict:", "").trim();

                // Split verdict into status and reason (e.g. "WRONG ANSWER. The code...")
                const firstDotIndex = verdictPart.indexOf(".");
                if (firstDotIndex !== -1) {
                    verdict = verdictPart.slice(0, firstDotIndex).trim(); // "WRONG ANSWER"
                    reason = verdictPart.slice(firstDotIndex + 1).trim(); // "The code..."
                } else {
                    verdict = verdictPart;
                }

                if (parts.length > 1) {
                    followUp = parts[1].trim();
                } else {
                    followUp = ""; // Just a verdict check without follow-up? Unexpected but possible
                }
            }

            setDisplayData({ verdict, reason, followUp, fullText: question });
            speak(question);

            // 2. Typewriter for the "Hero" text (Follow-up)
            const textToType = followUp || question;
            setTypedText("");
            let i = 0;
            const interval = setInterval(() => {
                setTypedText(textToType.slice(0, i + 1));
                i++;
                if (i > textToType.length) clearInterval(interval);
            }, 20); // Faster typing

            return () => {
                clearInterval(interval);
                window.speechSynthesis.cancel();
            };
        }
    }, [question]);

    const handleSubmit = () => {
        onValidate(userAnswer);
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
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(220,38,38,0.1),_rgba(9,9,11,1))] pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 mix-blend-overlay pointer-events-none" />

            {/* CONTENT CONTAINER */}
            <div className="relative z-10 w-full max-w-6xl h-full flex flex-col p-6 items-center justify-center">

                {/* LOADING STATE */}
                {isProcessing && !question ? (
                    <div className="flex flex-col items-center justify-center gap-8 text-center animate-in fade-in zoom-in duration-700">
                        {/* ... existing loader ... */}
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
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full max-w-6xl animate-in slide-in-from-bottom-10 fade-in duration-500 items-center">

                        {/* LEFT COLUMN: Persona & Verdict Status */}
                        <div className="lg:col-span-4 flex flex-col items-center lg:items-start space-y-8">

                            {/* Persona */}
                            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-zinc-800 to-black border border-red-500/50 rounded-2xl flex items-center justify-center shadow-2xl relative overflow-hidden">
                                    <User size={32} className="text-red-200" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                        <span className="text-red-400 font-mono text-[10px] uppercase tracking-widest font-bold">Interviewer</span>
                                    </div>
                                    <h3 className="text-white font-bold text-lg leading-none">Senior Engineer</h3>
                                </div>
                            </motion.div>

                            {/* Verdict Card (Only if Verdict exists) */}
                            {displayData.verdict && (
                                <div className={`w-full p-6 rounded-2xl border backdrop-blur-md ${displayData.verdict.includes("ACCEPTED") ? 'bg-emerald-950/30 border-emerald-500/30' : 'bg-red-950/20 border-red-500/30'}`}>
                                    <div className="mb-2">
                                        <span className={`text-xs font-black uppercase tracking-widest ${displayData.verdict.includes("ACCEPTED") ? 'text-emerald-500' : 'text-red-500'}`}>Previous Submission</span>
                                    </div>
                                    <div className="text-2xl font-black text-white mb-2">{displayData.verdict}</div>
                                    <p className="text-sm text-zinc-300 leading-relaxed opacity-80">{displayData.reason}</p>
                                </div>
                            )}

                            {/* Lock Status */}
                            <div className="mt-8 flex items-center gap-3 opacity-40 hover:opacity-100 transition duration-500">
                                <Lock size={14} className="text-zinc-400" />
                                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                                    Editor is locked until you answer
                                </span>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: The Question & Interaction */}
                        <div className="lg:col-span-8 flex flex-col gap-8">

                            {/* The Question Bubble */}
                            <div className="relative">
                                {/* Speech Bubble Tail */}
                                <div className="absolute top-8 -left-4 w-8 h-8 bg-zinc-800 rotate-45 hidden lg:block border-l border-b border-white/10" />

                                <div className="bg-zinc-900/80 border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-500 to-transparent opacity-50" />

                                    <h5 className="text-zinc-500 font-bold uppercase tracking-wider text-xs mb-4">Current Question</h5>
                                    <h1 className="text-2xl md:text-4xl font-bold leading-relaxed text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 drop-shadow-sm">
                                        "{typedText}"
                                        <span className="inline-block w-1 h-6 md:h-10 bg-red-500 ml-1 animate-pulse align-middle" />
                                    </h1>
                                </div>
                            </div>

                            {/* Interaction Area */}
                            <div className="w-full bg-black/20 border border-white/5 rounded-3xl p-1 backdrop-blur-xl shadow-lg">
                                <div className="p-6 flex flex-col items-center">
                                    <VoiceAnswer
                                        value={userAnswer}
                                        onChange={setUserAnswer}
                                        isListening={isListening}
                                        startListening={startListening}
                                        stopListening={stopListening}
                                        onSubmit={handleSubmit}
                                        isProcessing={isProcessing}
                                    />

                                    {feedback && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="mt-6 w-full"
                                        >
                                            <div className={`p-4 rounded-xl border flex items-start gap-4 ${feedback.includes('System Overload')
                                                ? 'bg-yellow-950/30 border-yellow-900/50 text-yellow-200'
                                                : 'bg-red-950/30 border-red-900/50 text-red-200'
                                                }`}>
                                                <div className="mt-1">
                                                    {feedback.includes('System Overload') ? <XCircle size={18} /> : <Activity size={18} />}
                                                </div>
                                                <div>
                                                    <div className="font-bold uppercase tracking-wider text-xs opacity-70 mb-1">Feedback</div>
                                                    <p className="text-sm leading-relaxed">{feedback}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </motion.div>
    );
}
