'use client';
import { useState, useEffect } from 'react';
import { FlashbackCard } from '@/components/features/FlashbackCard';
import { getDueFlashcards, processReview, addToReviewQueue, searchProblems, getAllFlashcards } from '@/app/actions';
import { ArrowLeft, CheckCheck, Loader2, Plus, Search as SearchIcon, X } from 'lucide-react';
import Link from 'next/link';

export default function FlashbackPage() {
    const [cards, setCards] = useState<any[]>([]);
    const [allCards, setAllCards] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [finished, setFinished] = useState(false);

    // Search State
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<any[]>([]);
    const [searching, setSearching] = useState(false);
    const [selectedProblem, setSelectedProblem] = useState<{ id: string; name: string } | null>(null);
    const [adding, setAdding] = useState(false);

    useEffect(() => {
        refreshCards();
    }, []);

    // Robust Debounce Search with Cleanup
    useEffect(() => {
        let active = true;
        const timer = setTimeout(async () => {
            if (query.length >= 2 && !selectedProblem) {
                setSearching(true);
                try {
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
        const handle = localStorage.getItem('cp-handle');
        if (handle) {
            Promise.all([
                getDueFlashcards(handle),
                getAllFlashcards(handle)
            ]).then(([due, all]) => {
                setCards(due);
                setAllCards(all);
                setLoading(false);
            });
        } else {
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
            const handle = localStorage.getItem('cp-handle');
            if (handle) {
                const res = await addToReviewQueue(handle, selectedProblem);
                if (res.error) {
                    alert(res.error);
                } else {
                    // Clear ONLY on success
                    clearSelection();
                    // Refresh to show the new card immediately
                    refreshCards();
                    if (res.message) alert(res.message); // Optional: notify if rescheduled
                }
            } else {
                alert("No user handle found. Please verify in Dashboard.");
            }
        } catch (error) {
            console.error(error);
            alert("Failed to add problem. Please check your connection.");
        } finally {
            setAdding(false);
        }
    };

    const handleRate = async (quality: number) => {
        const current = cards[0];
        const remaining = cards.slice(1);
        setCards(remaining); // Optimistic

        await processReview({ id: current.id, quality });

        if (remaining.length === 0) setFinished(true);
    };

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-pink-500/30 p-8">
            <div className="max-w-4xl mx-auto space-y-8">
                <Link
                    href="/dashboard"
                    className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition" /> Back to Dashboard
                </Link>

                <div className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-2">
                        Flashback
                    </h1>
                    <p className="text-zinc-500">Spaced repetition to permanently cement your algorithms.</p>
                </div>

                {/* Search / Add Form */}
                <form
                    onSubmit={handleAdd}
                    className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800 flex flex-col md:flex-row gap-4 items-center relative z-50"
                >
                    <div className="relative flex-1 w-full">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">
                            {searching ? <Loader2 size={16} className="animate-spin" /> : <SearchIcon size={16} />}
                        </div>
                        <input
                            value={query}
                            onChange={(e) => {
                                setQuery(e.target.value);
                                if (selectedProblem) setSelectedProblem(null);
                            }}
                            placeholder="Search by ID (4A) or Name (Watermelon)..."
                            className="bg-zinc-950 border border-zinc-800 rounded-lg pl-10 pr-10 py-2 w-full text-sm focus:ring-pink-500 focus:outline-none focus:border-pink-500/50 transition"
                        />
                        {query && (
                            <button
                                type="button"
                                onClick={clearSelection}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                            >
                                <X size={14} />
                            </button>
                        )}

                        {/* Results Dropdown */}
                        {results.length > 0 && !selectedProblem && (
                            <div className="absolute top-full left-0 right-0 mt-2 bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl overflow-hidden max-h-60 overflow-y-auto z-50">
                                {results.map((p) => (
                                    <button
                                        key={p.id}
                                        type="button"
                                        onClick={() => handleSelect(p)}
                                        className="w-full text-left px-4 py-3 hover:bg-zinc-800 transition border-b border-zinc-800/50 last:border-0 flex items-center justify-between group"
                                    >
                                        <span className="text-sm text-zinc-200 font-bold group-hover:text-pink-400 transition">
                                            {p.id}
                                        </span>
                                        <span className="text-sm text-zinc-400 truncate ml-4 flex-1">{p.name}</span>
                                        <span className="text-xs text-zinc-600 bg-zinc-950 px-2 py-1 rounded">
                                            {p.rating || 'N/A'}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={adding || !selectedProblem}
                        className="w-full md:w-auto bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                    >
                        {adding ? <Loader2 size={16} className="animate-spin" /> : <Plus size={16} />}
                        {adding ? 'Adding...' : 'Add to Queue'}
                    </button>
                </form>

                {/* Queue Display */}
                <div className="flex justify-center min-h-[400px] items-center">
                    {loading ? (
                        <Loader2 className="animate-spin text-zinc-600" size={40} />
                    ) : finished || cards.length === 0 ? (
                        <div className="text-center space-y-4 animate-in fade-in zoom-in duration-500">
                            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                                <CheckCheck className="text-green-500" size={40} />
                            </div>
                            <h2 className="text-2xl font-bold text-white">All Caught Up!</h2>
                            <p className="text-zinc-400">You have no pending reviews for today.</p>
                            <Link
                                href="/dashboard"
                                className="inline-block mt-4 text-pink-400 hover:text-pink-300 font-bold"
                            >
                                Return Home
                            </Link>
                        </div>
                    ) : (
                        <div className="w-full">
                            <div className="text-center mb-4 text-zinc-600 text-sm font-bold tracking-widest uppercase">
                                Queue: {cards.length} Remaining
                            </div>
                            <FlashbackCard card={cards[0]} onRate={handleRate} />
                        </div>
                    )}
                </div>
            </div>

            {/* Full History List */}
            <div className="mt-12 border-t border-zinc-800 pt-8">
                <h3 className="text-xl font-bold text-zinc-300 mb-4 flex items-center gap-2">
                    <Loader2 className="text-pink-500" size={20} /> Repository ({allCards.length})
                </h3>
                <div className="bg-zinc-900/30 rounded-xl border border-zinc-800 overflow-hidden">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-zinc-900 text-zinc-400 font-medium">
                            <tr>
                                <th className="px-4 py-3">Problem</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3">Next Review</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-800">
                            {allCards.map(card => (
                                <tr key={card.id} className="hover:bg-zinc-900/50 transition">
                                    <td className="px-4 py-3 font-mono text-zinc-300">
                                        <span className="text-pink-400 font-bold mr-2">{card.problemId}</span>
                                        {card.problemName}
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className={`px-2 py-1 rounded text-xs font-bold uppercase tracking-wide ${card.status === 'mastered' ? 'bg-yellow-500/10 text-yellow-500' :
                                            card.status === 'reviewing' ? 'bg-blue-500/10 text-blue-400' : 'bg-zinc-800 text-zinc-500'
                                            }`}>
                                            {card.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-zinc-500">
                                        {card.isDue ? (
                                            <span className="text-green-400 font-bold flex items-center gap-1"><CheckCheck size={12} /> Now</span>
                                        ) : (
                                            new Date(card.nextReviewDate).toLocaleDateString()
                                        )}
                                    </td>
                                </tr>
                            ))}
                            {allCards.length === 0 && (
                                <tr>
                                    <td colSpan={3} className="px-4 py-8 text-center text-zinc-600">
                                        No problems tracked yet. Use the search above to add one.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
