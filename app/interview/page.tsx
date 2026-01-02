"use client";

import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { Mic, Play, RefreshCw, Send, Lock, Loader2, CheckCircle2 } from "lucide-react";
import { useMockInterviewer } from "@/hooks/useMockInterviewer";
import { InterviewRoom } from "@/components/features/interview/InterviewRoom";
import { toast } from "sonner";
// import ReactMarkdown from 'react-markdown'; // Removed to avoid missing dependency

export default function InterviewPage() {
    // Problem State
    const [problem, setProblem] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [code, setCode] = useState("// Loading starter code...");

    // Interview State
    const { isLocked, question, feedback, isProcessing, triggerInterruption, validateAnswer, onCodeChange } = useMockInterviewer();
    const [isInterviewActive, setIsInterviewActive] = useState(false);

    // Fetch Problem on Mount
    const fetchProblem = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/interview/start", { method: "POST" });
            const data = await res.json();
            if (data.error) throw new Error(data.error);

            setProblem(data);
            setCode(data.starterCode || "// Write your solution here");
            toast.success("New Problem Generated");
        } catch (e) {
            console.error(e);
            toast.error("Failed to load problem");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProblem();
    }, []);

    // Handle Code Change
    const handleEditorChange = (value: string | undefined) => {
        if (!value) return;
        setCode(value);
        if (isInterviewActive) {
            onCodeChange(value);
        }
    };

    // Manual Trigger
    const handleManualSubmit = () => {
        // Allow submission even without voice
        triggerInterruption(code, true, { testCases: problem?.testCases || [] });
    };

    // Surgery State
    const [surgeryResult, setSurgeryResult] = useState<any>(null);
    const [isSurgeryOpen, setIsSurgeryOpen] = useState(false);
    const [isSurgeryLoading, setIsSurgeryLoading] = useState(false);

    const handleCodeSurgery = async () => {
        setIsSurgeryLoading(true);
        try {
            const res = await fetch("/api/interview/refactor", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    code,
                    problemTitle: problem?.title || "Unknown",
                    problemDescription: problem?.description || ""
                })
            });
            const data = await res.json();
            if (data.error) throw new Error(data.error);

            setSurgeryResult(data);
            setIsSurgeryOpen(true);
            toast.success("Code Surgery Complete", { description: "Your code has been refactored." });
        } catch (e) {
            toast.error("Surgery Failed");
        } finally {
            setIsSurgeryLoading(false);
        }
    };

    return (
        <div className="min-h-[calc(100vh-64px)] bg-zinc-950 text-white flex flex-col md:flex-row overflow-hidden relative">

            {/* SURGERY MODAL/OVERLAY */}
            {isSurgeryOpen && surgeryResult && (
                <div className="absolute inset-0 z-50 bg-black/80 backdrop-blur-lg flex items-center justify-center p-8 animate-in fade-in duration-300">
                    <div className="w-full max-w-6xl h-[90vh] bg-zinc-900 border border-zinc-800 rounded-2xl flex flex-col shadow-2xl overflow-hidden">

                        {/* Header */}
                        <div className="p-6 border-b border-zinc-800 flex justify-between items-center bg-zinc-950">
                            <div>
                                <h2 className="text-2xl font-bold flex items-center gap-3">
                                    <span className="text-emerald-400">Code Surgery Report</span>
                                    <span className={`text-sm px-3 py-1 rounded-full border ${surgeryResult.quality_score > 80 ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' :
                                        surgeryResult.quality_score > 50 ? 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400' :
                                            'bg-red-500/10 border-red-500/20 text-red-400'
                                        }`}>
                                        Quality: {surgeryResult.quality_score}/100
                                    </span>
                                </h2>
                                <p className="text-zinc-500 text-sm mt-1">{surgeryResult.key_fix}</p>
                            </div>
                            <button onClick={() => setIsSurgeryOpen(false)} className="p-2 hover:bg-zinc-800 rounded-full transition"><CheckCircle2 /></button>
                        </div>

                        {/* Content Grid */}
                        <div className="flex-1 grid grid-cols-2 overflow-hidden">
                            {/* Left: Critique */}
                            <div className="p-6 border-r border-zinc-800 overflow-y-auto space-y-6 bg-zinc-900/50">
                                <div className="space-y-4">
                                    <h3 className="text-sm font-bold uppercase tracking-wider text-red-400 flex items-center gap-2">
                                        <Loader2 className="animate-pulse" size={14} /> Critical Analysis
                                    </h3>
                                    <div className="space-y-3">
                                        {surgeryResult.critique.map((point: string, i: number) => (
                                            <div key={i} className="p-4 rounded-xl bg-red-500/5 border border-red-500/10 text-zinc-300 text-sm leading-relaxed">
                                                • {point}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right: Refactored Code */}
                            <div className="flex flex-col bg-[#1e1e1e]">
                                <div className="p-2 text-xs text-zinc-500 bg-zinc-950 border-b border-zinc-900 font-mono text-center">
                                    REFACTORED_SOLUTION_FINAL.cpp
                                </div>
                                <Editor
                                    height="100%"
                                    defaultLanguage="cpp"
                                    value={surgeryResult.refactored_code}
                                    theme="vs-dark"
                                    options={{ readOnly: true, minimap: { enabled: false }, fontSize: 13 }}
                                />
                                <div className="p-4 bg-zinc-950 border-t border-zinc-800 flex justify-end gap-3">
                                    <button
                                        onClick={() => { setCode(surgeryResult.refactored_code); setIsSurgeryOpen(false); }}
                                        className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-bold transition"
                                    >
                                        Accept Fixes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* LEFT PANEL: PROBLEM */}
            <div className="w-full md:w-1/3 border-r border-zinc-800 flex flex-col h-[calc(100vh-64px)]">
                {/* Header */}
                <div className="p-4 border-b border-zinc-800 bg-zinc-900/50 flex justify-between items-center">
                    <h2 className="font-bold flex items-center gap-2">
                        <Mic className="text-red-500" size={18} />
                        Mock Interview
                    </h2>
                    <button
                        onClick={fetchProblem}
                        disabled={loading}
                        className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-400 transition"
                        title="New Problem"
                    >
                        <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center h-64 space-y-4">
                            <Loader2 className="animate-spin text-zinc-500" size={32} />
                            <p className="text-zinc-500 text-sm animate-pulse">Generating Algorithm...</p>
                        </div>
                    ) : problem ? (
                        <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-500">
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <h1 className="text-2xl font-bold">{problem.title}</h1>
                                    <span className={`px-2 py-1 rounded text-xs font-bold uppercase tracking-wider ${problem.difficulty === "Hard" ? "bg-red-500/10 text-red-400 border border-red-500/20" : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                                        }`}>
                                        {problem.difficulty}
                                    </span>
                                </div>
                                <div className="prose prose-invert prose-sm max-w-none text-zinc-300">
                                    {problem.description}
                                </div>
                            </div>

                            {/* Examples */}
                            <div className="space-y-4">
                                <h3 className="text-sm font-bold uppercase text-zinc-500">Examples</h3>
                                {problem.examples?.map((ex: any, i: number) => (
                                    <div key={i} className="bg-zinc-900 rounded-lg p-3 border border-zinc-800 text-sm font-mono">
                                        <div className="mb-2">
                                            <span className="text-zinc-500">Input:</span> <span className="text-white">{ex.input}</span>
                                        </div>
                                        <div>
                                            <span className="text-zinc-500">Output:</span> <span className="text-green-400">{ex.output}</span>
                                        </div>
                                        {ex.explanation && (
                                            <div className="mt-2 text-zinc-500 italic text-xs border-t border-zinc-800 pt-2">
                                                {ex.explanation}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Constraints */}
                            <div>
                                <h3 className="text-sm font-bold uppercase text-zinc-500 mb-2">Constraints</h3>
                                <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1 font-mono">
                                    {problem.constraints?.map((c: any, i: number) => (
                                        <li key={i}>
                                            {typeof c === 'object' ? JSON.stringify(c) : c}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center text-zinc-500 mt-20">Failed to load problem.</div>
                    )}
                </div>

                {/* Integration Controls */}
                <div className="p-4 border-t border-zinc-800 bg-zinc-900/30 space-y-3">
                    {!isInterviewActive ? (
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={() => setIsInterviewActive(true)}
                                className="py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition shadow-lg shadow-red-900/20"
                            >
                                <Mic size={18} /> Interview
                            </button>
                            <button
                                onClick={handleCodeSurgery}
                                disabled={isSurgeryLoading}
                                className="py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition shadow-lg shadow-indigo-900/20"
                            >
                                {isSurgeryLoading ? <Loader2 className="animate-spin" size={18} /> : <CheckCircle2 size={18} />}
                                Code Surgery
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center justify-between text-sm text-red-400 bg-red-950/30 border border-red-900/50 p-3 rounded-xl animate-pulse">
                            <span className="flex items-center gap-2 font-bold uppercase tracking-wider">
                                <span className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
                                Live Session
                            </span>
                            <button onClick={() => setIsInterviewActive(false)} className="hover:text-white underline">End</button>
                        </div>
                    )}
                </div>
            </div>

            {/* RIGHT PANEL: EDITOR */}
            <div className="w-full md:w-2/3 flex flex-col h-[calc(100vh-64px)] relative">
                {isLocked && (
                    <div className="absolute inset-0 z-10 bg-black/50 backdrop-blur-sm flex items-center justify-center animate-in fade-in">
                        <div className="flex flex-col items-center gap-4 text-zinc-400">
                            <Lock size={48} />
                            <p className="font-mono uppercase tracking-widest">Locked by Interviewer</p>
                        </div>
                    </div>
                )}

                <Editor
                    height="100%"
                    defaultLanguage="cpp"
                    language="cpp"
                    theme="vs-dark"
                    value={code}
                    onChange={handleEditorChange}
                    options={{
                        minimap: { enabled: false },
                        fontSize: 14,
                        padding: { top: 20 },
                        fontFamily: "'JetBrains Mono', monospace",
                        scrollBeyondLastLine: false,
                    }}
                />

                {/* Floating Submit Button */}
                <div className="absolute bottom-6 right-6 z-20">
                    <button
                        onClick={handleManualSubmit}
                        disabled={isProcessing}
                        className="bg-green-600 hover:bg-green-500 text-white p-4 rounded-full shadow-2xl transition disabled:opacity-50 disabled:cursor-not-allowed group"
                        title="Submit Solution"
                    >
                        {isProcessing ? <Loader2 className="animate-spin" /> : <Send size={24} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition" />}
                    </button>
                </div>
            </div>

            {/* INTERVIEW OVERLAY (The Voice Room) */}
            {/* Only visible when locked or actively asking/answering */}
            <InterviewRoom
                isOpen={isLocked || !!question}
                question={question}
                onValidate={(ans) => validateAnswer(code, ans)}
                feedback={feedback}
                isProcessing={isProcessing}
            />

        </div>
    );
}
