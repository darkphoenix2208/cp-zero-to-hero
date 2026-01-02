'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Search, Sparkles, BookOpen, ExternalLink, Loader2 } from 'lucide-react';

const ALL_RESOURCES = [
    // --- GRAPH ALGORITHMS ---
    { topic: "Graphs", title: "Graph Theory Playlist (WilliamFiset)", url: "https://www.youtube.com/playlist?list=PLDV1Zeh2NRsDGO4--qE8yH72HFL1Km93P", type: "VIDEO", tags: ["The Best", "Playlist"] },
    { topic: "Graphs", title: "DFS & BFS Visualized", url: "https://visualgo.net/en/dfsbfs", type: "TOOL", tags: ["Beginner"] },
    { topic: "Graphs", title: "Dijkstra's Algorithm (Abdul Bari)", url: "https://www.youtube.com/watch?v=XB4MIexjvY0", type: "VIDEO", tags: ["Shortest Path"] },
    { topic: "Graphs", title: "Max Flow (Ford-Fulkerson)", url: "https://cp-algorithms.com/graph/edmonds_karp.html", type: "BLOG", tags: ["Network Flow"] },

    // --- DYNAMIC PROGRAMMING ---
    { topic: "DP", title: "Dynamic Programming Playlist (Aditya Verma)", url: "https://www.youtube.com/playlist?list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go", type: "VIDEO", tags: ["The Best", "Hindi/English"] },
    { topic: "DP", title: "Errichto's DP Contest Stream", url: "https://www.youtube.com/watch?v=faqDn8XyeVA", type: "VIDEO", tags: ["Walkthrough"] },
    { topic: "DP", title: "AtCoder DP Contest (Tasks)", url: "https://atcoder.jp/contests/dp/tasks", type: "PRACTICE", tags: ["Must Solve"] },
    { topic: "DP", title: "DP Optimization: Convex Hull Trick", url: "https://cp-algorithms.com/geometry/convex_hull_trick.html", type: "BLOG", tags: ["Advanced"] },

    // --- DATA STRUCTURES ---
    { topic: "Data Structures", title: "Segment Tree Visualization", url: "https://visualgo.net/en/segmenttree", type: "TOOL", tags: ["Visual"] },
    { topic: "Data Structures", title: "Fenwick Tree Tutorial (HackerEarth)", url: "https://www.hackerearth.com/practice/notes/binary-indexed-tree-or-fenwick-tree/", type: "BLOG", tags: ["BIT"] },
    { topic: "Data Structures", title: "Disjoint Set Union (CP-Algorithms)", url: "https://cp-algorithms.com/data_structures/disjoint_set_union.html", type: "BLOG", tags: ["DSU"] },

    // --- MATH ---
    { topic: "Math", title: "Number Theory Playlist (Luv)", url: "https://www.youtube.com/playlist?list=PLauivoElc3gXraQSSuGqJmzANJOwGRz2q", type: "VIDEO", tags: ["Comprehensive"] },
    { topic: "Math", title: "Sieve of Eratosthenes", url: "https://cp-algorithms.com/algebra/sieve-of-eratosthenes.html", type: "BLOG", tags: ["Primes"] },

    // --- STRINGS ---
    { topic: "Strings", title: "KMP Algorithm (Abdul Bari)", url: "https://www.youtube.com/watch?v=V5-7GzOfADQ", type: "VIDEO", tags: ["KMP", "Best"] },
    { topic: "Strings", title: "Z-Function Algorithm", url: "https://cp-algorithms.com/string/z-function.html", type: "BLOG", tags: ["Strings"] },

    // --- GENERAL ---
    { topic: "General", title: "CP-Algorithms (The Bible)", url: "https://cp-algorithms.com", type: "BLOG", tags: ["Reference"] },
    { topic: "General", title: "How to Practice? (Colin Galen)", url: "https://www.youtube.com/watch?v=ExNbnp4HwlY", type: "VIDEO", tags: ["Guide"] },
];

const TOPICS = ["All", "Graphs", "DP", "Data Structures", "Math", "Strings", "General"];

export default function BlogHunterPage() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [selectedTopic, setSelectedTopic] = useState("All");

    const filteredResources = selectedTopic === "All"
        ? ALL_RESOURCES
        : ALL_RESOURCES.filter(r => r.topic === selectedTopic);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) return;

        setLoading(true);
        // Reset topic to hide curated list temporarily if searching? 
        // No, let's keep them below or separate.
        try {
            const res = await fetch('/api/ai/blog-search', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query })
            });
            const data = await res.json();
            if (data.results) {
                setResults(data.results);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30 p-8">
            <div className="max-w-6xl mx-auto space-y-8">
                <Link
                    href="/dashboard"
                    className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition" /> Back to Dashboard
                </Link>

                <div className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2 flex items-center justify-center gap-3">
                        <BookOpen className="text-purple-400" /> Blog Hunter + Library
                    </h1>
                    <p className="text-zinc-500">Global Search & Curated Collections.</p>
                </div>

                {/* SEARCH SECTION */}
                <div className="max-w-2xl mx-auto mb-16">
                    <form onSubmit={handleSearch} className="relative shadow-2xl rounded-2xl">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">
                            <Search size={20} />
                        </div>
                        <input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Ask AI: 'Best tutorials for Heavy Light Decomposition'..."
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl py-4 pl-12 pr-4 text-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="absolute right-2 top-2 bottom-2 bg-purple-600 hover:bg-purple-700 text-white px-6 rounded-xl font-bold transition disabled:opacity-50 flex items-center gap-2"
                        >
                            {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={18} />}
                            Find
                        </button>
                    </form>

                    {/* SEARCH RESULTS */}
                    {results.length > 0 && (
                        <div className="mt-8 space-y-4 animate-in fade-in slide-in-from-bottom-4">
                            <h3 className="text-zinc-400 font-bold uppercase text-sm tracking-widest mb-4">AI Search Results</h3>
                            {results.map((blog, i) => (
                                <a
                                    key={i}
                                    href={blog.url}
                                    target="_blank"
                                    className="block bg-zinc-900/50 border border-zinc-800 hover:border-purple-500/50 p-6 rounded-xl transition group hover:bg-zinc-900"
                                >
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-xl font-bold text-zinc-200 group-hover:text-purple-300 transition mb-1 flex items-center gap-2">
                                                {blog.title}
                                                <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition" />
                                            </h3>
                                            <p className="text-sm text-zinc-400 mb-3">{blog.description || blog.snippet}</p>
                                            <div className="text-xs text-zinc-600 font-mono uppercase tracking-widest">
                                                By {blog.author}
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    )}
                </div>

                {/* VISUAL DIVIDER */}
                <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent my-12" />

                {/* CURATED LIBRARY SECTION */}
                <div className="space-y-6">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                        <div>
                            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                                <span className="text-yellow-500 text-3xl">📚</span> The Holy Grail
                            </h2>
                            <p className="text-zinc-400 text-sm mt-1">Hand-picked collection of the absolute best resources.</p>
                        </div>

                        {/* Filters */}
                        <div className="flex flex-wrap gap-2">
                            {TOPICS.map(t => (
                                <button
                                    key={t}
                                    onClick={() => setSelectedTopic(t)}
                                    className={`px-3 py-1.5 text-xs rounded-full border transition font-medium ${selectedTopic === t
                                            ? "bg-purple-600/20 border-purple-500 text-purple-300"
                                            : "bg-zinc-900 border-zinc-800 text-zinc-500 hover:border-zinc-700"
                                        }`}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredResources.map((item, idx) => (
                            <a
                                key={idx}
                                href={item.url}
                                target="_blank"
                                className="group block p-5 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900 hover:border-purple-500/30 transition relative overflow-hidden"
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <div className="px-2 py-1 rounded-md bg-zinc-950 border border-zinc-800 text-[10px] font-bold text-zinc-400 uppercase tracking-wider group-hover:text-purple-400 transition">
                                        {item.type}
                                    </div>
                                    <ExternalLink size={14} className="text-zinc-700 group-hover:text-purple-400 transition" />
                                </div>
                                <h3 className="font-bold text-zinc-200 group-hover:text-white transition mb-2">
                                    {item.title}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {item.tags.map(tag => (
                                        <span key={tag} className="text-[10px] text-zinc-500">#{tag}</span>
                                    ))}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
