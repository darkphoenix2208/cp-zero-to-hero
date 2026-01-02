"use client";

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog"; // Assuming we have shadcn or similar, or will build a simple modal
import { CheckCircle2, Loader2, ArrowRight, X } from "lucide-react";
import Editor from "@monaco-editor/react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

interface SubmissionSuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
    onNextProblem: () => void;
    userCode: string;
    problemTitle: string;
    problemDescription: string;
    stats?: {
        time: string;
        memory: string;
    };
}

export function SubmissionSuccessModal({
    isOpen,
    onClose,
    onNextProblem,
    userCode,
    problemTitle,
    problemDescription,
    stats = { time: "45ms", memory: "1.2MB" }
}: SubmissionSuccessModalProps) {
    const [view, setView] = useState<'SUCCESS' | 'SURGERY'>('SUCCESS');
    const [isLoading, setIsLoading] = useState(false);
    const [surgeryData, setSurgeryData] = useState<any>(null);

    const handleAnalyze = async () => {
        setIsLoading(true);
        try {
            const res = await fetch("/api/interview/refactor", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    code: userCode,
                    problemTitle,
                    problemDescription
                })
            });
            const data = await res.json();
            if (data.error) throw new Error(data.error);
            setSurgeryData(data);
            setView('SURGERY');
        } catch (e) {
            toast.error("Dr. AI is busy.");
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
            <div className="bg-zinc-900 border border-zinc-800 w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">

                {/* Header / Close */}
                <div className="p-4 flex justify-end">
                    <button onClick={onClose} className="p-2 hover:bg-zinc-800 rounded-full transition"><X size={20} /></button>
                </div>

                <div className="flex-1 overflow-y-auto px-8 pb-8">
                    <AnimatePresence mode="wait">
                        {view === 'SUCCESS' ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="flex flex-col items-center justify-center space-y-8 py-12"
                            >
                                <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center border-4 border-green-500 shadow-xl shadow-green-500/20 animate-bounce">
                                    <CheckCircle2 size={48} className="text-green-500" />
                                </div>
                                <div className="text-center space-y-2">
                                    <h2 className="text-4xl font-extrabold text-white">Accepted!</h2>
                                    <p className="text-zinc-400">You crushed this problem.</p>
                                </div>

                                <div className="flex gap-8 text-center">
                                    <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800 w-32">
                                        <div className="text-2xl font-mono font-bold text-white">{stats.time}</div>
                                        <div className="text-xs uppercase text-zinc-500 font-bold tracking-wider">Runtime</div>
                                    </div>
                                    <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800 w-32">
                                        <div className="text-2xl font-mono font-bold text-white">{stats.memory}</div>
                                        <div className="text-xs uppercase text-zinc-500 font-bold tracking-wider">Memory</div>
                                    </div>
                                </div>

                                <div className="flex gap-4 pt-4">
                                    <button
                                        onClick={handleAnalyze}
                                        disabled={isLoading}
                                        className="py-3 px-6 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl flex items-center gap-2 transition shadow-lg shadow-indigo-900/20"
                                    >
                                        {isLoading ? <Loader2 className="animate-spin" /> : "🩺 Analyze Quality"}
                                    </button>
                                    <button
                                        onClick={onNextProblem}
                                        className="py-3 px-6 bg-zinc-800 hover:bg-zinc-700 text-white font-bold rounded-xl flex items-center gap-2 transition"
                                    >
                                        Next Problem <ArrowRight size={18} />
                                    </button>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="surgery"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="h-full flex flex-col"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-2xl font-bold flex items-center gap-3">
                                        <span className="text-indigo-400">Code Surgery Report</span>
                                    </h2>
                                    {/* Circle Score */}
                                    <div className="relative w-16 h-16 flex items-center justify-center">
                                        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="45" fill="none" stroke="#27272a" strokeWidth="8" />
                                            <circle
                                                cx="50" cy="50" r="45" fill="none"
                                                stroke={
                                                    surgeryData?.quality_score > 80 ? '#10b981' :
                                                        surgeryData?.quality_score > 50 ? '#eab308' : '#ef4444'
                                                }
                                                strokeWidth="8"
                                                strokeDasharray="283"
                                                strokeDashoffset={283 - (283 * surgeryData?.quality_score) / 100}
                                                strokeLinecap="round"
                                                className="transition-all duration-1000 ease-out"
                                            />
                                        </svg>
                                        <span className="text-sm font-bold">{surgeryData?.quality_score}</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[500px]">
                                    {/* Left: Prescriptions */}
                                    <div className="space-y-4 overflow-y-auto pr-2">
                                        <h3 className="text-sm font-bold uppercase text-zinc-500">Prescription</h3>
                                        <div className="space-y-3">
                                            {surgeryData?.critique.map((point: string, i: number) => (
                                                <div key={i} className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-100 text-sm">
                                                    {point}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-4 p-4 rounded-xl bg-zinc-800/50 border border-zinc-800">
                                            <h4 className="text-xs font-bold text-zinc-500 uppercase mb-2">Key Takeaway</h4>
                                            <p className="text-zinc-300 text-sm italic">"{surgeryData?.key_fix}"</p>
                                        </div>
                                    </div>

                                    {/* Right: Code */}
                                    <div className="border border-zinc-800 rounded-xl overflow-hidden bg-[#1e1e1e] flex flex-col">
                                        <div className="bg-zinc-950 p-2 text-xs font-mono text-center text-zinc-500">Refactored Output</div>
                                        <Editor
                                            height="100%"
                                            defaultLanguage="cpp"
                                            value={surgeryData?.refactored_code}
                                            theme="vs-dark"
                                            options={{ readOnly: true, minimap: { enabled: false }, fontSize: 13 }}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
