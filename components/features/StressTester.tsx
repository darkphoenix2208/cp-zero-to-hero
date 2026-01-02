'use client';
import { useState, useRef, useEffect } from 'react';
import { Play, Pause, AlertTriangle, Bug, CheckCircle, RotateCcw } from 'lucide-react';

const DEFAULT_GEN = `// Generator: Coins [1, 3, 4] vs Target N
function generate() {
    // Generate a random target between 1 and 20
    const target = Math.floor(Math.random() * 20) + 1;
    return target.toString();
}`;

const DEFAULT_WRONG = `// Greedy Solution (Fails for [1, 3, 4])
function solve(input) {
    let n = parseInt(input);
    const coins = [4, 3, 1]; // Sorted descending
    let count = 0;
    
    for(let c of coins) {
        while(n >= c) {
            n -= c;
            count++;
        }
    }
    return count.toString();
}`;

const DEFAULT_BRUTE = `// Brute Force (Recursive/DP) - Correct
function solve(input) {
    const n = parseInt(input);
    const coins = [1, 3, 4];
    
    // Simple recursion for small N
    function minCoins(amount) {
        if(amount === 0) return 0;
        if(amount < 0) return Infinity;
        
        let res = Infinity;
        for(let c of coins) {
            res = Math.min(res, minCoins(amount - c) + 1);
        }
        return res;
    }
    
    const ans = minCoins(n);
    return ans.toString();
}`;

export function StressTester() {
    const [genScript, setGenScript] = useState(DEFAULT_GEN);
    const [userScript, setUserScript] = useState(DEFAULT_WRONG);
    const [bruteScript, setBruteScript] = useState(DEFAULT_BRUTE);

    const [status, setStatus] = useState<'IDLE' | 'RUNNING' | 'FOUND_MISMATCH' | 'ERROR'>('IDLE');
    const [logs, setLogs] = useState<string[]>([]);
    const [foundCase, setFoundCase] = useState<{ input: string, userOut: string, bruteOut: string } | null>(null);
    const [iterations, setIterations] = useState(0);

    const stopRef = useRef(false);

    const addLog = (msg: string) => {
        setLogs(prev => [msg, ...prev].slice(0, 50));
    };

    const runTests = async () => {
        setStatus('RUNNING');
        setLogs([]);
        setFoundCase(null);
        setIterations(0);
        stopRef.current = false;

        try {
            // Function wrapping requires "return" statement handling or simple eval
            // We use new Function for isolation
            // Note: Users must define functions properly or we wrap them
            // Simplified: User defines "function generate() {...}" inside the text
            // We append "return generate();" to execute it.

            // Helper to create callable function from string code
            const createCallable = (code: string, funcName: string) => {
                // If code doesn't start with function, simplistic check
                return new Function(code + `\nreturn ${funcName};`)();
            };

            const genFn = createCallable(genScript, 'generate');
            const userFn = createCallable(userScript, 'solve');
            const bruteFn = createCallable(bruteScript, 'solve');

            let count = 0;
            while (!stopRef.current) {
                count++;
                setIterations(count);

                const input = genFn();
                const userOut = String(userFn(input)).trim();
                const bruteOut = String(bruteFn(input)).trim();

                if (userOut !== bruteOut) {
                    setStatus('FOUND_MISMATCH');
                    setFoundCase({ input, userOut, bruteOut });
                    addLog(`❌ Mismatch found on test #${count}`);
                    return;
                }

                if (count % 100 === 0) {
                    addLog(`✅ Passed ${count} tests...`);
                    // Yield to UI
                    await new Promise(r => setTimeout(r, 0));
                }
            }
            if (status !== 'FOUND_MISMATCH') setStatus('IDLE');

        } catch (err: any) {
            setStatus('ERROR');
            addLog(`🔥 Script Error: ${err.message}`);
        }
    };

    const stopTests = () => {
        stopRef.current = true;
        setStatus('IDLE');
        addLog("⏹️ Stopped by user.");
    };

    return (
        <div className="space-y-6">
            {/* Controls */}
            <div className="flex items-center justify-between bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
                <div className="flex items-center gap-4">
                    <div className="text-sm text-zinc-400">
                        Status: <span className={`font-bold ${status === 'RUNNING' ? 'text-green-400' : status === 'FOUND_MISMATCH' ? 'text-red-500' : 'text-zinc-200'}`}>{status}</span>
                    </div>
                    {iterations > 0 && <div className="text-sm text-zinc-500">Iterations: {iterations}</div>}
                </div>
                <div className="flex gap-2">
                    {status === 'RUNNING' ? (
                        <button onClick={stopTests} className="bg-red-500/10 text-red-500 hover:bg-red-500/20 px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition border border-red-500/50">
                            <Pause size={16} /> Stop
                        </button>
                    ) : (
                        <button onClick={runTests} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-bold flex items-center gap-2 transition shadow-lg shadow-green-900/20">
                            <Play size={16} /> Run Stress Test
                        </button>
                    )}
                </div>
            </div>

            {/* Editors Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[500px]">
                {/* Generator */}
                <div className="flex flex-col h-full bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                    <div className="bg-zinc-950 p-2 text-xs font-bold text-zinc-500 uppercase tracking-wider border-b border-zinc-800 flex justify-between items-center">
                        <span>Generator (JS)</span>
                        <span className="text-xs text-zinc-600">Fn: generate() return string</span>
                    </div>
                    <textarea
                        value={genScript}
                        onChange={e => setGenScript(e.target.value)}
                        className="flex-1 bg-zinc-900 p-4 font-mono text-sm text-green-300 resize-none focus:outline-none"
                    />
                </div>

                {/* Wrong Solution */}
                <div className="flex flex-col h-full bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                    <div className="bg-zinc-950 p-2 text-xs font-bold text-zinc-500 uppercase tracking-wider border-b border-zinc-800 flex justify-between items-center">
                        <span>Optimized Sol  (JS)</span>
                        <span className="text-xs text-zinc-600">Fn: solve(input)</span>
                    </div>
                    <textarea
                        value={userScript}
                        onChange={e => setUserScript(e.target.value)}
                        className="flex-1 bg-zinc-900 p-4 font-mono text-sm text-yellow-300 resize-none focus:outline-none"
                    />
                </div>

                {/* Brute Force */}
                <div className="flex flex-col h-full bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                    <div className="bg-zinc-950 p-2 text-xs font-bold text-zinc-500 uppercase tracking-wider border-b border-zinc-800 flex justify-between items-center">
                        <span>Brute Force (JS)</span>
                        <span className="text-xs text-zinc-600">Ref implementation</span>
                    </div>
                    <textarea
                        value={bruteScript}
                        onChange={e => setBruteScript(e.target.value)}
                        className="flex-1 bg-zinc-900 p-4 font-mono text-sm text-blue-300 resize-none focus:outline-none"
                    />
                </div>
            </div>

            {/* Results Section */}
            {foundCase && (
                <div className="bg-red-900/10 border border-red-500/50 p-6 rounded-xl animate-in fade-in slide-in-from-top-4">
                    <h3 className="text-red-400 font-bold text-lg mb-4 flex items-center gap-2">
                        <Bug /> Counter-Example Found!
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <span className="text-xs font-bold text-red-500/70 uppercase block mb-1">Input</span>
                            <pre className="bg-zinc-950 p-3 rounded-lg text-sm font-mono border border-red-900/30 overflow-x-auto text-zinc-300">
                                {foundCase.input}
                            </pre>
                        </div>
                        <div>
                            <span className="text-xs font-bold text-red-500/70 uppercase block mb-1">Checking Output</span>
                            <pre className="bg-zinc-950 p-3 rounded-lg text-sm font-mono border border-red-900/30 text-yellow-400">
                                {foundCase.userOut}
                            </pre>
                        </div>
                        <div>
                            <span className="text-xs font-bold text-green-500/70 uppercase block mb-1">Expected Output</span>
                            <pre className="bg-zinc-950 p-3 rounded-lg text-sm font-mono border border-green-900/30 text-green-400">
                                {foundCase.bruteOut}
                            </pre>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
