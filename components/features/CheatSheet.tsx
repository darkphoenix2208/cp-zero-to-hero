'use client'
import { useState } from 'react';
import { ChevronRight, Book, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SNIPPETS = [
    {
        title: "C++ Template",
        code: `#include <bits/stdc++.h>
using namespace std;
using ll = long long;

void solve() {
  // Your code here
}

int main() {
  ios::sync_with_stdio(0); 
  cin.tie(0);
  int t = 1; 
  cin >> t;
  while(t--) solve();
}`
    },
    {
        title: "Time Complexity",
        content: [
            "N ≤ 10: O(N!)",
            "N ≤ 20: O(2^N)",
            "N ≤ 400: O(N³)",
            "N ≤ 2000: O(N²)",
            "N ≤ 10⁵: O(N log N)",
            "N ≤ 10⁸: O(N)"
        ]
    },
    {
        title: "Common Limits",
        content: [
            "int: ~2 × 10⁹",
            "long long: ~9 × 10¹⁸",
            "Stack: ~256 MB (careful with recursion)"
        ]
    }
];

export function CheatSheet() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed right-0 top-1/2 -translate-y-1/2 bg-blue-600 p-2 rounded-l-md z-50 hover:bg-blue-700 transition shadow-lg group"
                title="Open Cheat Sheet"
            >
                {isOpen ? <ChevronRight className="text-white" /> : <Book className="text-white group-hover:scale-110 transition" />}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-screen w-80 bg-zinc-950 border-l border-zinc-800 shadow-2xl z-40 p-6 overflow-y-auto"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-blue-400 flex items-center gap-2">
                                <Code size={20} /> Cheat Sheet
                            </h2>
                            <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white">
                                <ChevronRight />
                            </button>
                        </div>

                        <div className="space-y-6">
                            {SNIPPETS.map((item, idx) => (
                                <div key={idx} className="bg-zinc-900 p-4 rounded-lg border border-zinc-800">
                                    <h3 className="font-semibold mb-2 text-zinc-200">{item.title}</h3>
                                    {item.code ? (
                                        <pre className="text-xs bg-black p-3 rounded border border-zinc-800 overflow-x-auto text-green-400 font-mono scrollbar-thin scrollbar-thumb-zinc-700">
                                            {item.code}
                                        </pre>
                                    ) : (
                                        <ul className="text-sm text-zinc-400 space-y-1 font-mono">
                                            {item.content?.map((line, i) => <li key={i} className="border-b border-zinc-800/50 last:border-0 pb-1 last:pb-0">{line}</li>)}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
