
'use client'

import { useState } from 'react';
import { Search, Lock } from 'lucide-react';
import { verifySubmissionAuth, linkUserHandle } from '@/app/actions';
import { useRouter } from 'next/navigation';

export function LinkHandleClient({ user }: { user: any }) {
    // Determine if we are in 'input' mode or 'verify' mode
    // If we passed handle in props/url, we might be verifying
    const [handle, setHandle] = useState('');
    const [step, setStep] = useState<'input' | 'verify'>('input');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    const checkHandle = () => {
        if (!handle.trim()) return;
        setStep('verify');
    };

    const confirm = async () => {
        setLoading(true);
        setError('');

        // 1. Check Watermelon
        const auth = await verifySubmissionAuth(handle);
        if (auth.success) {
            // 2. Link in DB
            const res = await linkUserHandle(handle);
            if (res.success) {
                if (res.merged) {
                    // Account merged, current session is invalid because we deleted the temp user
                    // Force logout/login
                    alert("Account Linked! Your old progress has been restored. Please sign in again.");
                    window.location.href = "/api/auth/signin"; // Or just reload, middleware expects auth
                } else {
                    window.location.href = '/dashboard';
                }
            } else {
                setError(res.error || "Failed to link handle.");
                setLoading(false);
            }
        } else {
            setError("Verification failed. Did you submit a Compilation Error to 4A recently?");
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-md bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 backdrop-blur-xl shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">One Last Step</h2>
            <div className="flex flex-col gap-4">
                {step === 'input' ? (
                    <div className="relative">
                        <label className="text-sm text-zinc-400 mb-2 block">Enter your Codeforces Handle</label>
                        <div className="relative">
                            <Search className="absolute left-3 top-3.5 text-zinc-500 pointer-events-none" size={20} />
                            <input
                                value={handle}
                                onChange={(e) => setHandle(e.target.value)}
                                placeholder="tourist"
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg py-3 pl-10 pr-4 focus:ring-2 focus:ring-blue-600 focus:outline-none transition text-white placeholder:text-zinc-600"
                            />
                        </div>
                        <button
                            onClick={checkHandle}
                            disabled={!handle.trim()}
                            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold transition disabled:opacity-50"
                        >
                            Verify Ownership
                        </button>
                    </div>
                ) : (
                    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2">
                        <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg text-sm text-red-200">
                            <p className="font-bold flex items-center gap-2 mb-2">
                                <Lock size={16} /> Anti-Impersonation Check
                            </p>
                            <p className="mb-2">To prove <b>{handle}</b> is yours:</p>
                            <ol className="list-decimal list-inside space-y-2 text-zinc-300">
                                <li>Go to <a href="https://codeforces.com/problemset/problem/4/A" target="_blank" className="text-blue-400 underline font-bold">Problem 4A (Watermelon)</a>.</li>
                                <li>Submit a solution that causes a <b className="text-red-400">COMPILATION ERROR</b>.</li>
                                <li className="text-xs text-zinc-500">(e.g. submit a file with just the text "verify me")</li>
                                <li>Wait 30 seconds, then click below.</li>
                            </ol>
                        </div>
                        <button
                            onClick={confirm}
                            disabled={loading}
                            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold transition disabled:opacity-50 flex justify-center items-center"
                        >
                            {loading ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : 'I have submitted code'}
                        </button>
                        <button
                            onClick={() => { setStep('input'); setError(''); }}
                            className="w-full text-xs text-zinc-500 hover:text-white transition"
                        >
                            Cancel / Change Handle
                        </button>
                    </div>
                )}
            </div>

            {error && <p className="text-red-400 text-sm mt-4 text-center">{error}</p>}
        </div>
    );
}
