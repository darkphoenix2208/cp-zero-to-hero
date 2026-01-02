'use client';
import { useState, useRef } from 'react';
import Editor, { DiffEditor, OnMount } from '@monaco-editor/react';
import { RACER_TEMPLATES, Template } from './templates';
import { Play, RotateCcw, Trophy, Check, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


import { Toaster } from 'sonner';


export default function TemplateRacer() {
    const [template, setTemplate] = useState<Template>(RACER_TEMPLATES[0]);
    const [code, setCode] = useState('');
    const [isPlaying, setIsPlaying] = useState(false);
    const [isReviewed, setIsReviewed] = useState(false);

    // Stats
    const [startTime, setStartTime] = useState<number | null>(null);
    const [finalStats, setFinalStats] = useState<{ wpm: number; accuracy: number } | null>(null);

    const editorRef = useRef<any>(null);

    // Reset Game
    const resetGame = () => {
        setCode('');
        setIsPlaying(false);
        setIsReviewed(false);
        setStartTime(null);
        setFinalStats(null);
        if (editorRef.current) {
            editorRef.current.setValue('');
        }
    };

    const handleStart = () => {
        resetGame();
        setIsPlaying(true);
        setStartTime(Date.now());
        // Focus editor
        setTimeout(() => {
            if (editorRef.current) editorRef.current.focus();
        }, 100);
    };

    const handleEditorDidMount: OnMount = (editor, monaco) => {
        editorRef.current = editor;
    };

    const handleSubmit = () => {
        if (!startTime) return;

        setIsPlaying(false);
        setIsReviewed(true);
        const endTime = Date.now();

        // Calculate Stats
        const target = template.code.trim();
        const user = code.trim();

        // Count matching lines
        const targetLines = target.split('\n');
        const userLines = user.split('\n');
        let matchingLines = 0;
        userLines.forEach((line, i) => {
            if (i < targetLines.length && line.trim() === targetLines[i].trim()) {
                matchingLines++;
            }
        });

        const accuracy = Math.round((matchingLines / Math.max(targetLines.length, 1)) * 100);

        // WPM
        const timeInMinutes = (endTime - startTime) / 60000;
        const words = user.length / 5;
        const wpm = Math.round(words / timeInMinutes);

        setFinalStats({ wpm, accuracy });
    };

    return (
        <div className="w-full max-w-6xl mx-auto p-6 bg-zinc-950 min-h-screen text-white font-sans">

            {/* Header / Config */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-extrabold bg-gradient-to-r from-teal-400 to-emerald-600 bg-clip-text text-transparent italic tracking-tighter">
                        TEMPLATE RECALL <span className="text-xl not-italic">🧠</span>
                    </h1>
                    <p className="text-zinc-500 text-sm mt-1">Test your memory. Write standard templates from scratch.</p>
                </div>

                <div className="flex items-center gap-4">
                    <select
                        value={template.id}
                        onChange={(e) => {
                            const t = RACER_TEMPLATES.find(t => t.id === e.target.value);
                            if (t) {
                                setTemplate(t);
                                resetGame();
                            }
                        }}
                        className="bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                    >
                        {RACER_TEMPLATES.map(t => (
                            <option key={t.id} value={t.id}>{t.title} ({t.difficulty})</option>
                        ))}
                    </select>

                    {!isPlaying && !isReviewed ? (
                        <button
                            onClick={handleStart}
                            className="bg-teal-600 hover:bg-teal-500 text-white px-6 py-2 rounded-lg font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(13,148,136,0.4)] transition hover:scale-105"
                        >
                            <Play size={18} fill="currentColor" /> START RECALL
                        </button>
                    ) : (
                        <button
                            onClick={resetGame}
                            className="bg-zinc-800 hover:bg-zinc-700 text-zinc-400 px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition"
                        >
                            <RotateCcw size={18} /> RESTART
                        </button>
                    )}

                    {isPlaying && (
                        <button
                            onClick={handleSubmit}
                            className="bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-lg font-bold flex items-center gap-2 animate-pulse"
                        >
                            <Check size={18} /> SUBMIT & CHECK
                        </button>
                    )}
                </div>
            </div>

            {/* FINISH SCREEN */}
            <AnimatePresence>
                {isReviewed && finalStats && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8 grid grid-cols-2 gap-4"
                    >
                        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex flex-col items-center justify-center">
                            <span className="text-zinc-500 text-sm uppercase tracking-widest">Speed</span>
                            <span className="text-4xl font-mono font-bold text-white">{finalStats.wpm}</span>
                            <span className="text-zinc-600 text-xs">WPM</span>
                        </div>
                        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex flex-col items-center justify-center">
                            <span className="text-zinc-500 text-sm uppercase tracking-widest">Line Match</span>
                            <span className={`text-4xl font-mono font-bold ${finalStats.accuracy === 100 ? 'text-green-500' : 'text-orange-400'}`}>
                                {finalStats.accuracy}%
                            </span>
                            <span className="text-zinc-600 text-xs">Accuracy</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Editors Area */}
            <div className="border border-zinc-800 rounded-xl overflow-hidden shadow-2xl h-[60vh] min-h-[400px] bg-[#1e1e1e] relative">

                {/* BLIND INPUT MODE */}
                {!isReviewed && (
                    <div className="h-full flex flex-col">
                        <div className="bg-zinc-900/90 backdrop-blur px-4 py-2 text-xs font-bold text-teal-400 uppercase tracking-widest z-10 border-b border-zinc-800 flex justify-between items-center">
                            <span>Your Memory</span>
                            <div className="flex items-center gap-2">
                                <span className="text-zinc-500">{isPlaying ? 'Typing...' : 'Ready'}</span>
                                {isPlaying && <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />}
                            </div>
                        </div>

                        {!isPlaying && !code ? (
                            <div className="flex-1 flex flex-col items-center justify-center text-zinc-600 gap-4">
                                <Eye size={48} className="opacity-20" />
                                <p>Press Start to Recall the Code</p>
                            </div>
                        ) : (
                            <Editor
                                height="100%"
                                defaultLanguage="cpp"
                                value={code}
                                theme="vs-dark"
                                onChange={(val) => setCode(val || '')}
                                onMount={handleEditorDidMount}
                                options={{
                                    minimap: { enabled: false },
                                    fontSize: 14,
                                    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                                    lineNumbers: 'on',
                                    autoClosingBrackets: 'always',
                                    padding: { top: 20 },
                                }}
                            />
                        )}
                    </div>
                )}

                {/* REVIEW DIFF MODE */}
                {isReviewed && (
                    <div className="h-full flex flex-col">
                        <div className="bg-zinc-900 px-4 py-2 border-b border-zinc-800 grid grid-cols-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
                            <div>Standard Template (The Goal)</div>
                            <div>Your Recall (The Attempt)</div>
                        </div>
                        <DiffEditor
                            height="100%"
                            original={template.code} // Left side (Ideal)
                            modified={code}          // Right side (User)
                            language="cpp"
                            theme="vs-dark"
                            options={{
                                originalEditable: false,
                                readOnly: true,
                                renderSideBySide: true,
                                minimap: { enabled: false },
                                fontSize: 13,
                            }}
                        />
                    </div>
                )}
            </div>

            <div className="mt-8 text-zinc-500 text-xs text-center">
                {isReviewed
                    ? "Study the diff. Red highlights show where you deviated from the standard template."
                    : "Type the algorithm exactly as you remember it. Don't peek!"}
            </div>
        </div>
    );
}
