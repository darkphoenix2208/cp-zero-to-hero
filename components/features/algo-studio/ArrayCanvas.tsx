'use client';

import { useState, useMemo, forwardRef, useImperativeHandle, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAlgorithmPlayer } from './useAlgorithmPlayer';

// --- Generators ---
function* bubbleSort(arr: number[]) {
    const a = [...arr];
    const n = a.length;
    let swapped;

    // Initial state
    yield { array: [...a], active: [], swap: false, sorted: [] };

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            yield { array: [...a], active: [i, i + 1], swap: false, sorted: [] };

            if (a[i] > a[i + 1]) {
                const temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
                swapped = true;
                yield { array: [...a], active: [i, i + 1], swap: true, sorted: [] };
            }
        }
    } while (swapped);
    yield { array: [...a], active: [], swap: false, sorted: a.map((_, i) => i) };
}

function* binarySearch(arr: number[]) {
    // Binary Search requires sorted array. We'll sort it first visually or assume sorted?
    // Let's sort it instantly for the demo or fail? 
    // Better: Sort it as pre-processing step but don't animate that.
    const sorted = [...arr].sort((a, b) => a - b);
    yield { array: sorted, active: [], swap: false, message: "Sorted Input First" };

    const target = sorted[Math.floor(Math.random() * sorted.length)]; // Pick random target
    let start = 0;
    let end = sorted.length - 1;

    yield { array: sorted, active: [], swap: false, message: `Searching for ${target}` };

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        // Highlight Bounds and Mid
        yield { array: sorted, active: [mid], bounds: [start, end], swap: false, message: `Mid: ${sorted[mid]}` };

        if (sorted[mid] === target) {
            yield { array: sorted, active: [mid], bounds: [], swap: true, found: true, message: "Found!" };
            return;
        } else if (sorted[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
}

// Simple visual merge sort (recursive generator is tricky, we use iterative or helper)
function* selectionSort(arr: number[]) {
    // Just a placeholder for now as full merge sort viz is complex to do bar-in-place
    // We can do Selection Sort as it's easier to visualize on bars
    const a = [...arr];
    const n = a.length;

    for (let i = 0; i < n; i++) {
        let minIdx = i;
        yield { array: [...a], active: [i, minIdx], swap: false };

        for (let j = i + 1; j < n; j++) {
            yield { array: [...a], active: [i, j, minIdx], swap: false };
            if (a[j] < a[minIdx]) {
                minIdx = j;
                yield { array: [...a], active: [i, j, minIdx], swap: true };
            }
        }
        if (minIdx !== i) {
            [a[i], a[minIdx]] = [a[minIdx], a[i]];
            yield { array: [...a], active: [i, minIdx], swap: true };
        }
    }
    yield { array: [...a], active: [], swap: false, sorted: a.map((_, i) => i) };
}


export interface ArrayCanvasHandle {
    play: () => void;
    pause: () => void;
    step: () => void;
    reset: () => void;
}

interface ArrayCanvasProps {
    initialData?: number[];
}

const ALGORITHMS = [
    { name: "Bubble Sort", fn: bubbleSort },
    { name: "Selection Sort", fn: selectionSort }, // Using Selection as placeholder for "Sort 2"
    { name: "Binary Search", fn: binarySearch }
];

const ArrayCanvas = forwardRef<ArrayCanvasHandle, ArrayCanvasProps>(({ initialData }, ref) => {
    const [selectedAlgo, setSelectedAlgo] = useState(0);

    // Default random array
    const baseData = useMemo(() => initialData || Array.from({ length: 15 }, () => Math.floor(Math.random() * 40) + 5), [initialData]);

    const { currentFrame, play, pause, stepForward, reset } = useAlgorithmPlayer(ALGORITHMS[selectedAlgo].fn, baseData);

    // Reset when algo changes
    useEffect(() => {
        reset();
    }, [selectedAlgo, reset]);

    useImperativeHandle(ref, () => ({
        play,
        pause,
        step: stepForward,
        reset
    }));

    const displayArray = currentFrame ? currentFrame.array : baseData;
    const activeIndices = currentFrame ? currentFrame.active : [];
    const bounds = currentFrame ? (currentFrame.bounds || []) : [];
    const isSwap = currentFrame ? currentFrame.swap : false;
    const message = currentFrame ? currentFrame.message : "";

    const maxVal = Math.max(...baseData, 50);

    return (
        <div className="flex flex-col h-full w-full relative">
            {/* Algorithm Selector overlay */}
            <div className="absolute top-4 right-4 z-10 flex gap-2">
                <select
                    value={selectedAlgo}
                    onChange={(e) => setSelectedAlgo(Number(e.target.value))}
                    className="bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-1 text-sm text-zinc-300 focus:outline-none focus:border-zinc-700 cursor-pointer hover:bg-zinc-800 transition"
                >
                    {ALGORITHMS.map((algo, i) => (
                        <option key={i} value={i}>{algo.name}</option>
                    ))}
                </select>
            </div>

            {message && (
                <div className="absolute top-4 left-4 z-10 bg-zinc-900/80 px-3 py-1 rounded text-xs text-white backdrop-blur border border-zinc-700">
                    <span className="font-bold text-blue-400">INFO:</span> {message}
                </div>
            )}

            <div className="flex-1 flex items-end justify-center gap-1 p-8 pb-12">
                <AnimatePresence mode='popLayout'>
                    {displayArray.map((val: number, idx: number) => {
                        let color = 'bg-indigo-500';
                        if (activeIndices.includes(idx)) color = isSwap ? 'bg-red-500' : 'bg-yellow-400';

                        // Bounds for Binary Search
                        if (bounds.length === 2) {
                            if (idx >= bounds[0] && idx <= bounds[1]) {
                                // Within bounds
                            } else {
                                color = 'bg-zinc-800 opacity-50';
                            }
                        }

                        const height = `${Math.max((val / maxVal) * 80, 5)}%`;

                        return (
                            <motion.div
                                key={idx}
                                layout
                                initial={{ height: 0 }}
                                animate={{ height, backgroundColor: activeIndices.includes(idx) ? (isSwap ? '#ef4444' : '#facc15') : bounds.length === 2 && (idx < bounds[0] || idx > bounds[1]) ? '#27272a' : '#6366f1' }}
                                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                className={`w-8 rounded-t-md ${color} relative group`}
                            >
                                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-zinc-500 opacity-0 group-hover:opacity-100 transition whitespace-nowrap bg-zinc-900 px-1 rounded border border-zinc-800 z-20">
                                    Idx: {idx} | Val: {val}
                                </span>
                                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px] text-white/50 font-mono">
                                    {val}
                                </span>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>
        </div>
    );
});

ArrayCanvas.displayName = "ArrayCanvas";
export default ArrayCanvas;
