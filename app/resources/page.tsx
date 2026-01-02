'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Video, Code, ExternalLink, Filter, Youtube, Pin } from 'lucide-react';
import { cn } from '@/lib/utils';

// Expanded "Bible" of Resources
// Expanded "Bible" of Resources - Verified Gold Standard Links
const ALL_RESOURCES = [
    // --- GRAPH ALGORITHMS ---
    { topic: "Graphs", title: "Graph Theory Playlist (WilliamFiset)", url: "https://www.youtube.com/playlist?list=PLDV1Zeh2NRsDGO4--qE8yH72HFL1Km93P", type: "VIDEO", tags: ["The Best", "Playlist"] },
    { topic: "Graphs", title: "DFS & BFS Visualized", url: "https://visualgo.net/en/dfsbfs", type: "TOOL", tags: ["Beginner"] },
    { topic: "Graphs", title: "Dijkstra's Algorithm (Abdul Bari)", url: "https://www.youtube.com/watch?v=XB4MIexjvY0", type: "VIDEO", tags: ["Shortest Path"] },
    { topic: "Graphs", title: "Lowest Common Ancestor (Errichto)", url: "https://www.youtube.com/watch?v=dOAxrhAUIhA", type: "VIDEO", tags: ["Trees", "LCA"] },
    { topic: "Graphs", title: "Max Flow (Ford-Fulkerson)", url: "https://cp-algorithms.com/graph/edmonds_karp.html", type: "BLOG", tags: ["Network Flow"] },
    { topic: "Graphs", title: "Centroid Decomposition", url: "https://usaco.guide/plat/centroid", type: "BLOG", tags: ["Advanced"] },
    { topic: "Graphs", title: "Topological Sort", url: "https://www.youtube.com/watch?v=eL-KzMXSXXI", type: "VIDEO", tags: ["DAG"] },

    // --- DYNAMIC PROGRAMMING ---
    { topic: "DP", title: "Dynamic Programming Playlist (Aditya Verma)", url: "https://www.youtube.com/playlist?list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go", type: "VIDEO", tags: ["The Best", "Hindi/English"] },
    { topic: "DP", title: "Errichto's DP Contest Stream", url: "https://www.youtube.com/watch?v=faqDn8XyeVA", type: "VIDEO", tags: ["Walkthrough"] },
    { topic: "DP", title: "AtCoder DP Contest (Tasks)", url: "https://atcoder.jp/contests/dp/tasks", type: "PRACTICE", tags: ["Must Solve"] },
    { topic: "DP", title: "DP Optimization: Convex Hull Trick", url: "https://cp-algorithms.com/geometry/convex_hull_trick.html", type: "BLOG", tags: ["Advanced"] },
    { topic: "DP", title: "Digit DP Explained", url: "https://codeforces.com/blog/entry/53960", type: "BLOG", tags: ["Technique"] },
    { topic: "DP", title: "Knapsack Problem (Tushar Roy)", url: "https://www.youtube.com/watch?v=8LusJS5-AGo", type: "VIDEO", tags: ["Classic"] },
    { topic: "DP", title: "DP on Trees (Errichto)", url: "https://www.youtube.com/watch?v=If4slgeGwVE", type: "VIDEO", tags: ["Trees"] },

    // --- DATA STRUCTURES ---
    { topic: "Data Structures", title: "Segment Tree Visualization", url: "https://visualgo.net/en/segmenttree", type: "TOOL", tags: ["Visual"] },
    { topic: "Data Structures", title: "Fenwick Tree Tutorial (HackerEarth)", url: "https://www.hackerearth.com/practice/notes/binary-indexed-tree-or-fenwick-tree/", type: "BLOG", tags: ["BIT"] },
    { topic: "Data Structures", title: "Disjoint Set Union (CP-Algorithms)", url: "https://cp-algorithms.com/data_structures/disjoint_set_union.html", type: "BLOG", tags: ["DSU"] },
    { topic: "Data Structures", title: "Sparse Table (Range Queries)", url: "https://cp-algorithms.com/data_structures/sparse-table.html", type: "BLOG", tags: ["RMQ"] },
    { topic: "Data Structures", title: "Treaps Explained", url: "https://cp-algorithms.com/data_structures/treap.html", type: "BLOG", tags: ["Randomized"] },
    { topic: "Data Structures", title: "Segment Tree Video (Errichto)", url: "https://www.youtube.com/watch?v=Oq2E2yGadnU", type: "VIDEO", tags: ["SegTree"] },

    // --- MATH & NUMBER THEORY ---
    { topic: "Math", title: "Number Theory Playlist (Luv)", url: "https://www.youtube.com/playlist?list=PLauivoElc3gXraQSSuGqJmzANJOwGRz2q", type: "VIDEO", tags: ["Comprehensive"] },
    { topic: "Math", title: "Sieve of Eratosthenes", url: "https://cp-algorithms.com/algebra/sieve-of-eratosthenes.html", type: "BLOG", tags: ["Primes"] },
    { topic: "Math", title: "Modular Arithmetic (Khan Academy)", url: "https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/what-is-modular-arithmetic", type: "VIDEO", tags: ["Basics"] },
    { topic: "Math", title: "Game Theory (Sprague-Grundy)", url: "https://cp-algorithms.com/game_theory/sprague-grundy-nim.html", type: "BLOG", tags: ["Game Theory"] },
    { topic: "Math", title: "Fast Fourier Transform (Reducible)", url: "https://www.youtube.com/watch?v=h7apO7q16V0", type: "VIDEO", tags: ["Best Explanation"] },

    // --- STRINGS ---
    { topic: "Strings", title: "KMP Algorithm (Abdul Bari)", url: "https://www.youtube.com/watch?v=V5-7GzOfADQ", type: "VIDEO", tags: ["KMP", "Best"] },
    { topic: "Strings", title: "Z-Function Algorithm", url: "https://cp-algorithms.com/string/z-function.html", type: "BLOG", tags: ["Strings"] },
    { topic: "Strings", title: "Trie Data Structure", url: "https://www.geeksforgeeks.org/trie-insert-and-search/", type: "BLOG", tags: ["Trie"] },
    { topic: "Strings", title: "Suffix Automaton Guide", url: "https://cp-algorithms.com/string/suffix-automaton.html", type: "BLOG", tags: ["Advanced"] },

    // --- GENERAL / OTHER ---
    { topic: "General", title: "CP-Algorithms (The Bible)", url: "https://cp-algorithms.com", type: "BLOG", tags: ["Reference"] },
    { topic: "General", title: "How to Practice? (Colin Galen)", url: "https://www.youtube.com/watch?v=ExNbnp4HwlY", type: "VIDEO", tags: ["Guide"] },
    { topic: "General", title: "C++ STL Complete Guide (Luv)", url: "https://www.youtube.com/watch?v=zBhVZomesNg", type: "VIDEO", tags: ["C++"] },
    { topic: "General", title: "Codeforces Catalog", url: "https://codeforces.com/catalog", type: "BLOG", tags: ["Catalog"] }
];

const TOPICS = ["All", "Graphs", "DP", "Data Structures", "Math", "Strings", "General"];

export default function ResourcesPage() {
    const [selectedTopic, setSelectedTopic] = useState("All");

    const filteredResources = selectedTopic === "All"
        ? ALL_RESOURCES
        : ALL_RESOURCES.filter(r => r.topic === selectedTopic);

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 min-h-screen">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-end border-b border-zinc-800 pb-6 gap-6">
                <div>
                    <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                        Knowledge Hub
                    </h1>
                    <p className="text-zinc-400 mt-2 max-w-xl">
                        A curated collection of the best competitive programming tutorials, videos, and tools from around the web.
                    </p>
                </div>

                {/* Filter Pills */}
                <div className="flex flex-wrap justify-end gap-2 max-w-lg">
                    {TOPICS.map(t => (
                        <button
                            key={t}
                            onClick={() => setSelectedTopic(t)}
                            className={cn(
                                "px-4 py-2 text-sm rounded-lg border transition font-medium",
                                selectedTopic === t
                                    ? "bg-purple-600/20 border-purple-500 text-purple-300"
                                    : "bg-zinc-900 border-zinc-800 text-zinc-500 hover:border-zinc-700 hover:text-zinc-300"
                            )}
                        >
                            {t}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredResources.map((item, idx) => (
                    <motion.a
                        key={idx}
                        href={item.url}
                        target="_blank"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className={cn(
                            "group block p-5 rounded-xl border transition relative overflow-hidden bg-zinc-900/40 hover:bg-zinc-900",
                            item.type === 'VIDEO' ? "border-red-900/20 hover:border-red-500/50" :
                                item.type === 'PRACTICE' ? "border-blue-900/20 hover:border-blue-500/50" :
                                    "border-zinc-800 hover:border-purple-500/50"
                        )}
                    >
                        {/* Type Badge */}
                        <div className="flex justify-between items-start mb-3">
                            <div className={cn("px-2 py-1 rounded text-[10px] font-bold tracking-wider flex items-center gap-1.5",
                                item.type === 'VIDEO' ? "bg-red-950/50 text-red-400" :
                                    item.type === 'PRACTICE' ? "bg-blue-950/50 text-blue-400" :
                                        item.type === 'TOOL' ? "bg-yellow-950/50 text-yellow-400" :
                                            "bg-purple-950/50 text-purple-400"
                            )}>
                                {item.type === 'VIDEO' ? <Youtube size={12} /> :
                                    item.type === 'PRACTICE' ? <Code size={12} /> :
                                        item.type === 'TOOL' ? <Pin size={12} /> :
                                            <BookOpen size={12} />}
                                {item.type}
                            </div>
                            <ExternalLink className="text-zinc-700 group-hover:text-zinc-400 transition" size={14} />
                        </div>

                        {/* Title */}
                        <h3 className="font-bold text-zinc-200 group-hover:text-white transition line-clamp-2 min-h-[3rem]">
                            {item.title}
                        </h3>

                        {/* Tags */}
                        <div className="mt-4 flex gap-2 flex-wrap">
                            {item.tags.map(tag => (
                                <span key={tag} className="text-[10px] px-2 py-1 rounded-full bg-zinc-950 text-zinc-500 border border-zinc-900">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.a>
                ))}
            </div>

            {filteredResources.length === 0 && (
                <div className="h-64 flex flex-col items-center justify-center text-zinc-500">
                    <Filter size={48} className="mb-4 opacity-20" />
                    <p>No resources found for this topic.</p>
                </div>
            )}
        </div>
    )
}
