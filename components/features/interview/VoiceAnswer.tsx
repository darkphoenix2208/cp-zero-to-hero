
import { Mic, MicOff, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface VoiceAnswerProps {
    value: string;
    onChange: (val: string) => void;
    transcript?: string; // Optional (legacy/internal use if needed, but we rely on value)
    isListening: boolean;
    startListening: () => void;
    stopListening: () => void;
    onSubmit: () => void;
    isProcessing: boolean;
}

export function VoiceAnswer({ value, onChange, isListening, startListening, stopListening, onSubmit, isProcessing }: VoiceAnswerProps) {

    return (
        <div className="flex flex-col items-center gap-4 w-full">
            <div className="relative">
                {isListening && (
                    <motion.div
                        className="absolute inset-0 bg-red-500/30 rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    />
                )}

                <button
                    onClick={isListening ? stopListening : startListening}
                    disabled={isProcessing}
                    className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center transition ${isListening
                        ? 'bg-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.5)]'
                        : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white'
                        }`}
                >
                    {isListening ? <MicOff size={24} /> : <Mic size={24} />}
                </button>
            </div>

            <div className="w-full max-w-lg relative group">
                <textarea
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    disabled={isProcessing}
                    placeholder="Speak or type your answer here..."
                    className="w-full min-h-[120px] bg-zinc-950/50 border border-zinc-800 rounded-xl p-4 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-red-500/50 resize-none transition"
                />
                {isListening && <div className="absolute top-2 right-2 flex items-center gap-2 text-xs text-red-500 animate-pulse font-mono uppercase tracking-wider">Listening...</div>}
            </div>

            {value.trim().length > 0 && (
                <button
                    onClick={onSubmit}
                    disabled={isProcessing}
                    className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white px-8 py-3 rounded-full font-bold transition shadow-lg shadow-red-900/40 hover:scale-105"
                >
                    {isProcessing ? <Loader2 className="animate-spin" size={18} /> : <span>Submit Answer</span>}
                </button>
            )}
        </div>
    );
}
