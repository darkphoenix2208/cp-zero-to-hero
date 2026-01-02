'use client';

import { useState, useRef, useMemo } from 'react';
import Editor from '@monaco-editor/react';
import { Play, Pause, Settings, Info, Share2, Maximize2, SkipForward, RotateCcw } from 'lucide-react';
import GraphVis from './GraphVis';
import ArrayCanvas, { ArrayCanvasHandle } from './ArrayCanvas';
import { parseGraphInput, GraphData } from './InputParser';
import useMeasure from 'react-use-measure';
import { generateFibonacciTree } from './RecursionLogic';

type Mode = 'GRAPH' | 'ARRAY' | 'RECURSION';

const DEFAULT_GRAPH_INPUT = `5 6
1 2
1 3
2 4
3 4
4 5
1 5`;

export default function VisualizerCanvas() {
    const [mode, setMode] = useState<Mode>('GRAPH');
    const [input, setInput] = useState(DEFAULT_GRAPH_INPUT);
    const [graphData, setGraphData] = useState<GraphData>(parseGraphInput(DEFAULT_GRAPH_INPUT));

    // Auto-resize canvas
    const [ref, bounds] = useMeasure();
    const arrayCanvasRef = useRef<ArrayCanvasHandle>(null);

    // Recursion Input
    const [fibN, setFibN] = useState(5);
    const recursionData = useMemo(() => generateFibonacciTree(fibN), [fibN]);

    const handleConfirmInput = () => {
        if (mode === 'GRAPH') {
            const data = parseGraphInput(input);
            setGraphData(data);
        }
    };

    const handlePlay = () => {
        if (mode === 'ARRAY') arrayCanvasRef.current?.play();
    };

    const handlePause = () => {
        if (mode === 'ARRAY') arrayCanvasRef.current?.pause();
    };

    const handleStep = () => {
        if (mode === 'ARRAY') arrayCanvasRef.current?.step();
    };

    const handleReset = () => {
        if (mode === 'ARRAY') arrayCanvasRef.current?.reset();
    };

    return (
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 min-h-[85vh]">
            {/* LEFT: Editor / Controls */}
            <div className="lg:col-span-1 flex flex-col gap-4 h-[50vh] lg:h-auto">
                {/* Visualizer Mode Selector */}
                <div className="bg-zinc-900 border border-zinc-800 p-1 rounded-xl flex">
                    {(['GRAPH', 'ARRAY', 'RECURSION'] as Mode[]).map(m => (
                        <button
                            key={m}
                            onClick={() => setMode(m)}
                            className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${mode === m
                                ? 'bg-zinc-800 text-white shadow-sm'
                                : 'text-zinc-500 hover:text-zinc-300'
                                }`}
                        >
                            {m}
                        </button>
                    ))}
                </div>

                {/* Input Area */}
                <div className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden flex flex-col">
                    <div className="px-4 py-3 border-b border-zinc-800 flex justify-between items-center">
                        <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                            {mode === 'RECURSION' ? 'Configs' : 'Input Data'}
                        </span>

                        {mode === 'GRAPH' && (
                            <div className="flex gap-2">
                                <button onClick={handleConfirmInput} className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded text-xs font-bold transition">
                                    Visualize
                                </button>
                            </div>
                        )}
                    </div>

                    {mode === 'RECURSION' ? (
                        <div className="p-6">
                            <label className="block text-zinc-400 text-sm mb-2">Recursion Depth (N)</label>
                            <input
                                type="number"
                                value={fibN}
                                onChange={(e) => setFibN(Math.min(10, Math.max(0, Number(e.target.value))))} // Cap at 10 to prevent lag
                                className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-white"
                            />
                            <p className="text-xs text-zinc-500 mt-2">
                                Generates a call stack tree for Fibonacci(N). Nodes highlight overlaps.
                            </p>
                        </div>
                    ) : (
                        <Editor
                            height="100%"
                            defaultLanguage="plaintext"
                            value={input}
                            theme="vs-dark"
                            onChange={(val) => setInput(val || '')}
                            options={{
                                minimap: { enabled: false },
                                fontSize: 14,
                                lineNumbers: 'off',
                                padding: { top: 16 },
                                fontFamily: "'JetBrains Mono', monospace",
                            }}
                        />
                    )}
                </div>
            </div>

            {/* RIGHT: Visualizer Stage */}
            <div className="lg:col-span-2 flex flex-col gap-4">
                {/* Toolbar */}
                <div className="bg-zinc-900/50 border border-zinc-800 text-zinc-400 p-2 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <button onClick={handlePlay} className="p-2 hover:bg-zinc-800 rounded-lg transition text-green-400"><Play size={18} /></button>
                        <button onClick={handlePause} className="p-2 hover:bg-zinc-800 rounded-lg transition text-yellow-400"><Pause size={18} /></button>
                        <button onClick={handleStep} className="p-2 hover:bg-zinc-800 rounded-lg transition text-blue-400"><SkipForward size={18} /></button>
                        <button onClick={handleReset} className="p-2 hover:bg-zinc-800 rounded-lg transition text-red-400"><RotateCcw size={18} /></button>
                        <div className="h-6 w-px bg-zinc-800 mx-2" />
                        <span className="text-xs font-mono">{mode} MODE</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-zinc-800 rounded-lg transition"><Settings size={18} /></button>
                        <button className="p-2 hover:bg-zinc-800 rounded-lg transition"><Maximize2 size={18} /></button>
                    </div>
                </div>

                {/* Canvas */}
                <div ref={ref} className="h-[50vh] lg:h-auto lg:flex-1 bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden relative shadow-2xl">
                    {bounds.width > 0 && mode === 'GRAPH' && (
                        <GraphVis data={graphData} height={bounds.height} />
                    )}

                    {mode === 'ARRAY' && (
                        <ArrayCanvas ref={arrayCanvasRef} />
                    )}

                    {bounds.width > 0 && mode === 'RECURSION' && (
                        <GraphVis data={recursionData} height={bounds.height} />
                    )}
                </div>
            </div>
        </div>
    );
}