'use client';
import { useState, useEffect } from 'react';
import { useSession } from "next-auth/react";
import { getDueFlashcards, getAllFlashcards, processReview } from '@/app/actions';
import { ArrowLeft, Loader2, RefreshCcw, Search, ExternalLink, Plus } from 'lucide-react';
import Link from 'next/link';
import { usePlanetHealth, PlanetHealth } from '@/hooks/usePlanetHealth';
import QuizModal from '@/components/features/flashback/QuizModal';
import { motion, AnimatePresence } from 'framer-motion';

// Separate component for the "Node" (Box Style)
const FlashbackNode = ({ card, onClick }: { card: any, onClick: () => void }) => {
    // Determine health based on lastReviewedAt (or created if never)
    const { health, visualState, filterStyle, isDecayed } = usePlanetHealth(card.lastReviewedAt);

    return (
        <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={`relative group flex flex-col items-center justify-between p-6 rounded-xl transition-all duration-500 border w-48 h-48 overflow-hidden`}
            style={{
                borderColor: isDecayed ? 'rgba(239, 68, 68, 0.5)' : 'rgba(39, 39, 42, 0.5)',
                background: isDecayed ? 'linear-gradient(135deg, rgba(20,20,20,0.9), rgba(40,10,10,0.9))' : 'linear-gradient(135deg, rgba(24,24,27,0.9), rgba(9,9,11,0.9))',
                boxShadow: isDecayed ? '0 0 20px rgba(239, 68, 68, 0.2)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            }}
        >
            {/* Background Noise/Rust if Decayed */}
            {isDecayed && (
                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none" />
            )}

            {/* Status Indicator */}
            <div className="w-full flex justify-between items-start z-10">
                <div className={`text-5xl font-bold tracking-tighter opacity-20 ${isDecayed ? 'text-red-500' : 'text-zinc-500'}`}>
                    {Math.round(health)}%
                </div>
                {isDecayed ? (
                    <RefreshCcw className="text-red-500 animate-spin-slow" size={20} />
                ) : (
                    <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_lime]" />
                )}
            </div>

            {/* Label */}
            <div className="z-10 text-left w-full mt-auto">
                <div className="text-xs text-zinc-500 font-mono mb-1">{card.problemId}</div>
                <div className={`font-bold leading-tight ${isDecayed ? 'text-red-200' : 'text-zinc-200 group-hover:text-white'}`}>
                    {card.problemName}
                </div>
            </div>

            {/* Health Bar at Bottom */}
            <div className="absolute bottom-0 left-0 h-1 bg-zinc-800 w-full">
                <div
                    className={`h-full transition-all duration-1000 ${isDecayed ? 'bg-red-600' : 'bg-green-500'}`}
                    style={{ width: `${health}%` }}
                />
            </div>
        </motion.button>
    );
};

export default function FlashbackPage() {
    const { data: session, status } = useSession();
    const [cards, setCards] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    // Quiz State
    const [selectedCard, setSelectedCard] = useState<any | null>(null);
    const [isQuizOpen, setIsQuizOpen] = useState(false);

    // Search State (Scanner)
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<any[]>([]);
    const [searching, setSearching] = useState(false);
    const [selectedProblem, setSelectedProblem] = useState<{ id: string; name: string } | null>(null);
    const [adding, setAdding] = useState(false);

    // Get Handle Helper
    const getUserHandle = () => {
        if (session?.user && (session.user as any).codeforcesHandle) {
            return (session.user as any).codeforcesHandle;
        }
        if (typeof window !== 'undefined') {
            return localStorage.getItem('cp-handle');
        }
        return null;
    };

    useEffect(() => {
        if (status === 'loading') return;
        refreshCards();
    }, [status, session]);

    // Search Debouncer
    useEffect(() => {
        let active = true;
        const timer = setTimeout(async () => {
            if (query.length >= 2 && !selectedProblem) {
                setSearching(true);
                try {
                    // Import dynamically if needed, or assume imported
                    const { searchProblems } = await import('@/app/actions');
                    const hits = await searchProblems(query);
                    if (active) setResults(hits);
                } catch (e) {
                    console.error(e);
                } finally {
                    if (active) setSearching(false);
                }
            } else {
                if (active) setResults([]);
            }
        }, 300);
        return () => {
            active = false;
            clearTimeout(timer);
        };
    }, [query, selectedProblem]);

    const refreshCards = () => {
        const handle = getUserHandle();
        if (handle) {
            getAllFlashcards(handle).then((all) => {
                setCards(all);
                setLoading(false);
            });
        } else {
            console.log("No handle found in session or local storage.");
            setLoading(false);
        }
    };

    const handleSelect = (problem: any) => {
        setQuery(`${problem.id} - ${problem.name}`);
        setSelectedProblem(problem);
        setResults([]);
    };

    const clearSelection = () => {
        setQuery('');
        setSelectedProblem(null);
        setResults([]);
    };

    const handleAdd = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedProblem) return;

        setAdding(true);
        try {
            const handle = getUserHandle();
            if (handle) {
                const { addToReviewQueue } = await import('@/app/actions');
                const res = await addToReviewQueue(handle, selectedProblem);
                if (res.error) {
                    alert(res.error);
                } else {
                    clearSelection();
                    refreshCards();
                    if (res.message) alert(res.message);
                }
            } else {
                alert("No linked Codeforces handle found. Please link your account in the Dashboard.");
            }
        } catch (error) {
            console.error(error);
            alert("Failed to add problem.");
        } finally {
            setAdding(false);
        }
    };

    const handlePlanetClick = (card: any) => {
        setSelectedCard(card);
        setIsQuizOpen(true);
    };

    const handleQuizComplete = async (success: boolean) => {
        setIsQuizOpen(false);
        if (!selectedCard) return;

        // Optimistic Update
        const quality = success ? 5 : 0; // Simple Binary for now

        await processReview({ id: selectedCard.id, quality });

        // Refresh to show updated health
        refreshCards();
        setSelectedCard(null);
    };

    // Mock Code for now (Real implementation would fetch submission source)
    const mockCode = `
// Source code for ${selectedCard?.problemName || 'Problem'}
#include <bits/stdc++.h>
using namespace std;

void solve() {
    int n; cin >> n;
    vector<int> a(n);
    for(int &x : a) cin >> x;
    
    // Logic potentially relevant to the problem
    sort(a.begin(), a.end());
    
    int ans = 0;
    for(int i = 0; i < n; i++) {
        if(a[i] > ans) ans++;
    }
    cout << ans << endl;
}

int main() {
    solve();
    return 0;
}
`;

    return (
        <div className="min-h-screen bg-black text-white font-sans overflow-hidden relative">
            {/* Starry Background */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto p-8 h-screen flex flex-col">
                {/* Header */}
                <div className="flex justify-between items-start mb-12">
                    <div>
                        <Link
                            href="/dashboard"
                            className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition group mb-4"
                        >
                            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition" /> Output
                        </Link>
                        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight">
                            Memory Galaxy
                        </h1>
                        <p className="text-zinc-500 mt-2 text-lg">
                            Maintain the health of your knowledge nodes. <span className="text-pink-400">Rust means decay.</span>
                        </p>
                    </div>

                    <div className="flex flex-col items-end gap-4">
                        <div className="flex items-center gap-2 text-xs text-zinc-500 border border-zinc-800 px-3 py-1 rounded-full">
                            <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_lime]" /> Fresh
                            <span className="w-2 h-2 rounded-full bg-zinc-500 ml-2" /> Fading
                            <span className="w-2 h-2 rounded-full bg-orange-700 ml-2 shadow-[0_0_10px_orange]" /> Rusted
                        </div>

                        {/* SCANNER (Search Bar) */}
                        <form onSubmit={handleAdd} className="relative z-50 flex items-center gap-2 bg-zinc-900/80 backdrop-blur p-1 pl-4 rounded-full border border-zinc-700 shadow-xl w-[320px] transition-all focus-within:w-[400px] focus-within:border-indigo-500">
                            <div className="text-zinc-500">
                                {searching ? <Loader2 size={16} className="animate-spin" /> : <Search size={16} />}
                            </div>
                            <input
                                value={query}
                                onChange={(e) => {
                                    setQuery(e.target.value);
                                    if (selectedProblem) setSelectedProblem(null);
                                }}
                                placeholder="Scan for problems (e.g. 4A)..."
                                className="bg-transparent border-none text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-0 flex-1 w-full"
                            />
                            {query && (
                                <button type="button" onClick={clearSelection} className="text-zinc-500 hover:text-white px-2">
                                    <ExternalLink size={12} className="rotate-45" /> {/* Use X icon ideally, reusing import */}
                                </button>
                            )}

                            <button
                                type="submit"
                                disabled={adding || !selectedProblem}
                                className={`bg-indigo-600 hover:bg-indigo-500 text-white p-2 rounded-full transition disabled:opacity-50 disabled:grayscale ${selectedProblem ? 'animate-pulse' : ''}`}
                            >
                                {adding ? <Loader2 size={16} className="animate-spin" /> : <Plus size={16} />}
                            </button>

                            {/* Dropdown Results */}
                            {results.length > 0 && !selectedProblem && (
                                <div className="absolute top-full right-0 mt-3 w-full bg-zinc-900/95 backdrop-blur border border-zinc-700 rounded-xl shadow-2xl overflow-hidden max-h-60 overflow-y-auto">
                                    {results.map((p) => (
                                        <button
                                            key={p.id}
                                            type="button"
                                            onClick={() => handleSelect(p)}
                                            className="w-full text-left px-4 py-3 hover:bg-white/5 transition border-b border-white/5 last:border-0 flex items-center justify-between group"
                                        >
                                            <span className="text-sm text-indigo-300 font-bold group-hover:text-white">
                                                {p.id}
                                            </span>
                                            <span className="text-sm text-zinc-400 truncate ml-4 flex-1">{p.name}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </form>
                    </div>
                </div>

                {/* The Galaxy Grid */}
                {loading ? (
                    <div className="flex-1 flex items-center justify-center">
                        <Loader2 className="animate-spin text-purple-500 w-12 h-12" />
                    </div>
                ) : cards.length === 0 ? (
                    <div className="flex-1 flex flex-col items-center justify-center text-zinc-600">
                        <p className="text-xl font-medium">Your galaxy is empty.</p>
                        <p className="text-sm mt-2">Add problems from the Search bar to track them.</p>
                        {/* Re-add search bar later if needed, or link to search */}
                    </div>
                ) : (
                    <div className="flex-1 relative">
                        {/* Physics-like layout or Grid for now */}
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
                            {cards.map(card => (
                                <FlashbackNode
                                    key={card.id}
                                    card={card}
                                    onClick={() => handlePlanetClick(card)}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Quiz Modal Integration */}
            <QuizModal
                isOpen={isQuizOpen}
                onClose={() => setIsQuizOpen(false)}
                onComplete={handleQuizComplete}
                code={mockCode} // Passing mock code for now
                topic={selectedCard?.problemName || 'Algorithm'}
            />
        </div>
    );
}
