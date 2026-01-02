
'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Bot, Code2, AlertCircle, Loader2, CheckCircle, XCircle, ArrowRight, Link as LinkIcon, Activity, Stethoscope } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useJudgeWatcher } from '@/hooks/useJudgeWatcher';

import { SubmissionSuccessModal } from './dojo/SubmissionSuccessModal';
import { toast } from 'sonner';

export function AiSenpai() {
    const [problemName, setProblemName] = useState('');
    const [userCode, setUserCode] = useState('');
    const [hint, setHint] = useState<{ flaw: string; hint: string; confidence: number } | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [verdictResult, setVerdictResult] = useState<any>(null);
    const [assistResult, setAssistResult] = useState<any>(null);

    // Watcher Hook
    const { startWatching, status: watchStatus, verdict: watchedVerdict } = useJudgeWatcher(problemName);

    // Effect: Smart Watcher Trigger
    useEffect(() => {
        if (watchStatus === 'verdict_found' && watchedVerdict) {
            setVerdictResult({
                verdict: watchedVerdict.verdict === 'OK' ? 'ACCEPTED' : watchedVerdict.verdict,
                reason: watchedVerdict.verdict === 'OK' ? 'Verified on Codeforces: Accepted!' : `Fails on Test ${watchedVerdict.testCount}`,
                cases_passed: watchedVerdict.passed ? 100 : watchedVerdict.testCount,
                total_cases: 100,
                source: "CF_WATCHER"
            });
            handleSmartAssist(watchedVerdict.verdict);
        }
    }, [watchStatus, watchedVerdict]);

    // Smart Assist Logic (The Brain)
    const handleSmartAssist = async (verdict: string) => {
        if (!userCode.trim()) return;

        const toastId = toast.loading(verdict === 'OK' ? "Calling Code Surgeon..." : "Calling Sensei...");
        try {
            const res = await fetch('/api/dojo/assist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    code: userCode,
                    verdict: verdict === 'OK' ? 'ACCEPTED' : verdict,
                    problemStatement: problemName
                })
            });
            const data = await res.json();
            setAssistResult(data);
            toast.success("AI Analysis Complete", { id: toastId });

            if (data.mode === 'surgeon') {
                setShowSuccessModal(true);
            }
        } catch (e) {
            toast.error("Assist Failed", { id: toastId });
        }
    };

    // Verify Manually
    const handleVerifyCF = async () => {
        if (!problemName.trim()) {
            setError("Please enter a Problem ID (e.g. 1385C) to verify.");
            return;
        }
        setLoading(true);
        setError('');
        setVerdictResult(null);
        setAssistResult(null);
        const toastId = toast.loading("Checking your Codeforces submissions...");

        try {
            const res = await fetch('/api/dojo/verify-cf', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ problemName })
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Verification failed");

            if (data.verdict === "NOT_FOUND") {
                toast.error("Not Found", { id: toastId, description: data.message });
                setError(data.message);
                return;
            }

            const result = {
                verdict: data.verdict === "OK" ? "ACCEPTED" : data.verdict,
                reason: data.verdict === "OK" ? "Verified on Codeforces: Accepted!" : `Fails on Test ${data.testCount}`,
                cases_passed: data.passed ? 100 : data.testCount,
                total_cases: 100,
                source: "CF_ACCOUNT"
            };

            setVerdictResult(result);
            toast.success("Found Submission!", { id: toastId });

            if (result.verdict === "ACCEPTED") {
                setShowSuccessModal(true);
            }
        } catch (e: any) {
            toast.error("Verification Error", { id: toastId, description: e.message });
            if (e.message.includes("Link your Codeforces")) {
                setError("You need to link your Codeforces account in settings first.");
            }
        } finally {
            setLoading(false);
        }
    };

    // Internal Judge Submit
    const handleSubmit = async () => {
        if (!userCode.trim() || !problemName.trim()) {
            setError("Please provide problem and code.");
            return;
        }
        setLoading(true);
        setError('');
        setVerdictResult(null);
        setAssistResult(null);

        const toastId = toast.loading("Running Judge...");

        try {
            const res = await fetch('/api/dojo/judge', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    problemName,
                    problemStatement: problemName,
                    userCode,
                    language: "cpp"
                })
            });

            if (!res.ok) {
                const text = await res.text();
                throw new Error(`Server Error: ${res.status} ${text.slice(0, 50)}`);
            }

            const verdict = await res.json();
            setVerdictResult(verdict);

            if (verdict.verdict === 'ACCEPTED') {
                toast.success("Accepted!", { id: toastId });
                setShowSuccessModal(true);
            } else {
                toast.error(verdict.verdict, { id: toastId, description: verdict.reason });
                handleSmartAssist(verdict.verdict);
            }
        } catch (e: any) {
            toast.error("Judge Error", { id: toastId, description: e.message });
            setVerdictResult({ verdict: 'ERROR', reason: e.message });
        } finally {
            setLoading(false);
        }
    };

    const handleAskSenpai = async () => {
        if (!userCode.trim()) return;
        setLoading(true);
        try {
            const res = await fetch('/api/ai/hint', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ problemName, userCode, language: "cpp" })
            });
            const data = await res.json();
            setHint(data);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-5xl mx-auto space-y-6">
            <div className="bg-zinc-900 border border-zinc-800/80 rounded-2xl p-1 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 opacity-50" />

                <div className="p-6 md:p-8 space-y-8">
                    {/* Header */}
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-xl shadow-lg shadow-indigo-900/20">
                            <Bot className="text-white" size={28} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                                Smart Dojo <span className="text-[10px] uppercase font-bold tracking-widest bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded-full border border-zinc-700">Beta</span>
                            </h2>
                            <p className="text-zinc-400 text-sm">Your AI-Powered Competitive Programming Sandbox</p>
                        </div>
                    </div>

                    {/* Problem Input */}
                    <div className="space-y-6">
                        <div className="relative group">
                            <label className="text-xs uppercase font-bold text-zinc-500 tracking-wider mb-2 block pl-1 group-focus-within:text-indigo-400 transition-colors">Problem ID / Codeforces Link</label>
                            <div className="relative">
                                <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-indigo-500 transition-colors" size={18} />
                                <input
                                    value={problemName}
                                    onChange={(e) => setProblemName(e.target.value)}
                                    placeholder="e.g. 1700A or https://codeforces..."
                                    className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl p-4 pl-12 text-white focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 focus:outline-none transition-all font-mono text-sm shadow-inner"
                                />
                            </div>
                        </div>

                        <div className="relative group">
                            <label className="text-xs uppercase font-bold text-zinc-500 tracking-wider mb-2 block pl-1 group-focus-within:text-indigo-400 transition-colors">Solution Code (C++)</label>
                            <div className="relative bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500/50 focus-within:border-indigo-500 transition-all shadow-inner">
                                <div className="absolute top-0 left-0 w-12 h-full bg-zinc-900/50 border-r border-zinc-800/50 flex flex-col items-end pt-4 pr-3 text-zinc-700 font-mono text-xs select-none">
                                    {Array.from({ length: 15 }).map((_, i) => <div key={i}>{i + 1}</div>)}
                                </div>
                                <textarea
                                    value={userCode}
                                    onChange={(e) => setUserCode(e.target.value)}
                                    placeholder="// Paste your solution here..."
                                    className="w-full h-80 bg-transparent border-none p-4 pl-16 text-sm font-mono text-zinc-300 focus:ring-0 outline-none resize-none leading-relaxed"
                                    spellCheck={false}
                                />
                            </div>
                        </div>
                    </div>

                    {error && (
                        <div className="p-4 bg-red-950/20 border border-red-900/50 rounded-xl flex items-center gap-3 text-red-400 text-sm">
                            <AlertCircle size={18} /> {error}
                        </div>
                    )}

                    {/* Action Bar */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 bg-zinc-950/30 p-2 rounded-2xl border border-zinc-800/50">
                        <button onClick={handleAskSenpai} disabled={loading} className="group relative bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 hover:text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2 transition overflow-hidden">
                            <div className="absolute inset-0 bg-indigo-500/20 opacity-0 group-hover:opacity-100 transition blur-xl"></div>
                            {loading ? <Loader2 className="animate-spin" size={18} /> : <div className="bg-indigo-500/20 p-1.5 rounded-lg"><Sparkles size={16} /></div>}
                            <span className="relative">Get Hint</span>
                        </button>

                        <button onClick={handleSubmit} disabled={loading} className="group bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 hover:text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2 transition">
                            <div className="bg-emerald-500/20 p-1.5 rounded-lg"><Code2 size={16} /></div>
                            Internal Judge
                        </button>

                        <button
                            onClick={startWatching}
                            disabled={watchStatus === 'searching'}
                            className={cn(
                                "lg:col-span-2 relative group font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition overflow-hidden",
                                watchStatus === 'searching'
                                    ? "bg-amber-500/10 text-amber-500 border border-amber-500/30"
                                    : "bg-gradient-to-r from-zinc-800 to-zinc-700 hover:from-indigo-600 hover:to-purple-600 text-white shadow-lg"
                            )}
                        >
                            {watchStatus === 'searching' ? (
                                <>
                                    <Loader2 className="animate-spin" size={16} /> Waiting for Codeforces Verdict...
                                </>
                            ) : (
                                <>
                                    <Activity size={18} className="group-hover:animate-pulse" /> I Submitted on Codeforces (Watch)
                                </>
                            )}
                        </button>
                    </div>

                    <div className="text-center">
                        <button onClick={handleVerifyCF} disabled={loading} className="text-xs font-medium text-zinc-500 hover:text-zinc-300 hover:underline decoration-dotted transition flex items-center gap-1 mx-auto">
                            Or verify a past submission instantly <ArrowRight size={12} className="inline" />
                        </button>
                    </div>

                    {/* Results Area */}
                    <AnimatePresence>
                        {verdictResult && (
                            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className={cn("rounded-2xl p-6 border flex flex-col md:flex-row items-center md:items-start gap-6 shadow-xl backdrop-blur-md", verdictResult.verdict === 'ACCEPTED' ? "bg-emerald-950/30 border-emerald-500/30" : "bg-red-950/30 border-red-500/30")}>
                                <div className={cn("p-4 rounded-full border-4", verdictResult.verdict === 'ACCEPTED' ? "bg-emerald-500/20 border-emerald-500/30 text-emerald-400" : "bg-red-500/20 border-red-500/30 text-red-400")}>
                                    {verdictResult.verdict === 'ACCEPTED' ? <CheckCircle size={32} /> : <XCircle size={32} />}
                                </div>
                                <div className="text-center md:text-left flex-1">
                                    <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                                        <h3 className={cn("text-2xl font-black tracking-tight", verdictResult.verdict === 'ACCEPTED' ? "text-white" : "text-white")}>{verdictResult.verdict}</h3>
                                        {verdictResult.source && <span className="text-[10px] font-bold bg-black/40 px-2 py-1 rounded border border-white/10 text-zinc-400">{verdictResult.source}</span>}
                                    </div>
                                    <p className={cn("font-mono text-sm mb-4", verdictResult.verdict === 'ACCEPTED' ? "text-emerald-200/70" : "text-red-200/70")}>{verdictResult.reason}</p>

                                    {verdictResult.cases_passed !== undefined && (
                                        <div className="inline-flex items-center gap-2 bg-black/20 p-2 rounded-lg border border-white/5">
                                            <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider">Tests Passed</span>
                                            <span className={cn("text-sm font-mono font-bold", verdictResult.verdict === 'ACCEPTED' ? "text-emerald-400" : "text-red-400")}>
                                                {verdictResult.cases_passed}/{verdictResult.total_cases}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Smart Assist Result */}
                    <AnimatePresence>
                        {assistResult && (
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={cn("rounded-2xl p-0.5 bg-gradient-to-br shadow-2xl relative overflow-hidden", assistResult.mode === 'surgeon' ? "from-emerald-500 to-cyan-500" : "from-amber-500 to-orange-600")}>
                                <div className="absolute inset-0 bg-white/5 opacity-50 backdrop-blur-3xl"></div>
                                <div className="bg-zinc-900 rounded-[14px] p-6 relative">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={cn("p-2 rounded-lg", assistResult.mode === 'surgeon' ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400")}>
                                            {assistResult.mode === 'surgeon' ? <Stethoscope size={24} /> : <Bot size={24} />}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-white">{assistResult.mode === 'surgeon' ? 'Code Surgeon Report' : 'Sensei Analysis'}</h3>
                                            <p className="text-xs text-zinc-400">{assistResult.mode === 'surgeon' ? 'Refactoring & Style Check' : 'Logical Bug Detection'}</p>
                                        </div>
                                    </div>

                                    {assistResult.mode === 'surgeon' ? (
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between p-3 bg-zinc-950 rounded-xl border border-zinc-800">
                                                <span className="text-sm text-zinc-400">Cleanliness Score</span>
                                                <span className="text-2xl font-black text-emerald-400">{assistResult.cleanliness_score}<span className="text-sm text-zinc-600 font-normal">/100</span></span>
                                            </div>
                                            <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 font-mono text-xs text-zinc-300 whitespace-pre-wrap overflow-x-auto">
                                                {assistResult.refactored_code}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="space-y-4">
                                            <div className="bg-amber-500/5 border border-amber-500/20 p-4 rounded-xl">
                                                <p className="text-amber-200/90 italic text-lg leading-relaxed">"{assistResult.hint}"</p>
                                            </div>
                                            {assistResult.potential_bug_location && (
                                                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 bg-zinc-950 p-2 rounded-lg border border-zinc-800 inline-block">
                                                    <AlertCircle size={12} className="text-red-400" />
                                                    Suspected location: <span className="text-white">{assistResult.potential_bug_location}</span>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <SubmissionSuccessModal
                isOpen={showSuccessModal}
                onClose={() => setShowSuccessModal(false)}
                onNextProblem={() => { setShowSuccessModal(false); setUserCode(""); setProblemName(""); }}
                userCode={userCode}
                problemTitle={problemName}
                problemDescription=""
            />
        </div>
    );
}
