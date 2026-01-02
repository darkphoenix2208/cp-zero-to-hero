
import { Mic, MicOff, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface VoiceAnswerProps {
    transcript: string;
    isListening: boolean;
    startListening: () => void;
    stopListening: () => void;
    onSubmit: () => void;
    isProcessing: boolean;
}

export function VoiceAnswer({ transcript, isListening, startListening, stopListening, onSubmit, isProcessing }: VoiceAnswerProps) {

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

            <div className="w-full max-w-lg min-h-[100px] bg-zinc-950/50 border border-zinc-800 rounded-lg p-4 text-center">
                {transcript ? (
                    <p className="text-zinc-200">{transcript}</p>
                ) : (
                    <p className="text-zinc-600 italic">Tap mic and speak your answer...</p>
                )}
            </div>

            {transcript && !isListening && (
                <button
                    onClick={onSubmit}
                    disabled={isProcessing}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full font-bold transition"
                >
                    {isProcessing ? <Loader2 className="animate-spin" size={16} /> : "Submit Answer"}
                </button>
            )}
        </div>
    );
}
