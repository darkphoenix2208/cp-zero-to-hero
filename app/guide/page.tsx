
'use client';
import { motion } from 'framer-motion';
import { Sword, Brain, Activity, Users, ArrowRight, Zap, Target, Book, LayoutDashboard, Terminal, Share2, Mic, Trophy } from 'lucide-react';
import Link from 'next/link';

const guideSections = [
    {
        id: "path",
        title: "The RPG Skill Tree",
        icon: <Sword size={24} className="text-amber-400" />,
        color: "text-amber-400",
        border: "border-amber-500/30",
        bg: "bg-amber-500/10",
        content: (
            <div className="space-y-4 text-zinc-300">
                <p>
                    CodeForge keeps your progress in a <strong>DAG (Directed Acyclic Graph)</strong> structure.
                    Each node represents a Competitive Programming topic (e.g., "Binary Search", "DP").
                </p>
                <ul className="list-disc list-inside space-y-2 marker:text-amber-500">
                    <li><strong>Locked Nodes:</strong> You must complete prerequisite topics to unlock advanced ones.</li>
                    <li><strong>Boss Fights:</strong> Some nodes are "Boss Nodes". You must solve a specific problem within a time limit to pass.</li>
                    <li><strong>XP System:</strong> Every accepted solution grants XP. Level up to unlock cosmetic badges.</li>
                </ul>
            </div>
        )
    },
    {
        id: "dojo",
        title: "The AI Dojo",
        icon: <Brain size={24} className="text-indigo-400" />,
        color: "text-indigo-400",
        border: "border-indigo-500/30",
        bg: "bg-indigo-500/10",
        content: (
            <div className="space-y-4 text-zinc-300">
                <p>
                    Got stuck? The Dojo is your intelligent training ground. Paste any problem link here.
                </p>
                <ul className="list-disc list-inside space-y-2 marker:text-indigo-500">
                    <li><strong>Code Surgeon:</strong> Paste your broken code. The AI will debug it <em>without</em> rewriting the whole thing, creating a diff view.</li>
                    <li><strong>Sensei Mode:</strong> Ask for a hint. The AI will nudge you in the right direction without revealing the full solution.</li>
                    <li><strong>Judge Watcher:</strong> The system automatically verifies your Codeforces submissions in real-time.</li>
                </ul>
            </div>
        )
    },
    {
        id: "studio",
        title: "Algorithm Studio",
        icon: <Activity size={24} className="text-pink-400" />,
        color: "text-pink-400",
        border: "border-pink-500/30",
        bg: "bg-pink-500/10",
        content: (
            <div className="space-y-4 text-zinc-300">
                <p>
                    Visualizers for standard CP algorithms. Great for debugging your intuition.
                </p>
                <ul className="list-disc list-inside space-y-2 marker:text-pink-500">
                    <li><strong>Graph Editor:</strong> A CS-Academy style graph builder. Nodes force-directed layout and then freeze (static mode).</li>
                    <li><strong>Array Animator:</strong> Visualize sorting algorithms and binary search on arrays.</li>
                    <li><strong>Recursion Tree:</strong> Input a recursion depth (N) and see the Fibonacci call stack visually.</li>
                </ul>
            </div>
        )
    },
    {
        id: "flashback",
        title: "The Ritual (Flashback)",
        icon: <Share2 size={24} className="text-emerald-400" />,
        color: "text-emerald-400",
        border: "border-emerald-500/30",
        bg: "bg-emerald-500/10",
        content: (
            <div className="space-y-4 text-zinc-300">
                <p>
                    Based on the "Forgetting Curve". We track every problem you solve.
                </p>
                <ul className="list-disc list-inside space-y-2 marker:text-emerald-500">
                    <li><strong>Review Queue:</strong> Every morning, check your Flashback queue.</li>
                    <li><strong>Spaced Repetition:</strong> Problems reappear after 1 day, 3 days, 1 week, and 1 month.</li>
                    <li><strong>Retention:</strong> Solving a problem once isn't enough. You must prove you still know it.</li>
                </ul>
            </div>
        )
    },
    {
        id: "interview",
        title: "Mock Interviewer",
        icon: <Mic size={24} className="text-blue-400" />,
        color: "text-blue-400",
        border: "border-blue-500/30",
        bg: "bg-blue-500/10",
        content: (
            <div className="space-y-4 text-zinc-300">
                <p>
                    A full voice-enabled mock interview simulation.
                </p>
                <ul className="list-disc list-inside space-y-2 marker:text-blue-500">
                    <li><strong>Voice Interaction:</strong> Speak to the AI. It listens and responds with text-to-speech.</li>
                    <li><strong>Live Coding:</strong> Write code in the shared editor while explaining your thought process.</li>
                    <li><strong>Interrupts:</strong> The AI will interrupt you if you go silent for too long or make a mistake.</li>
                </ul>
            </div>
        )
    },
    {
        id: "contests",
        title: "Contest Calendar",
        icon: <Trophy size={24} className="text-yellow-400" />,
        color: "text-yellow-400",
        border: "border-yellow-500/30",
        bg: "bg-yellow-500/10",
        content: (
            <div className="space-y-4 text-zinc-300">
                <p>
                    Never miss a round. Aggregates contests from all major platforms.
                </p>
                <ul className="list-disc list-inside space-y-2 marker:text-yellow-500">
                    <li><strong>Virtual Participation:</strong> Click "Virtual" to start a timer for old contests.</li>
                    <li><strong>Filters:</strong> Toggle between Codeforces, LeetCode, AtCoder, and CodeChef.</li>
                    <li><strong>Sync:</strong> Add contests directly to your Google Calendar.</li>
                </ul>
            </div>
        )
    }
];

export default function GuidePage() {
    return (
        <div className="min-h-screen bg-black text-white p-8 pt-24 pb-32">
            <div className="max-w-5xl mx-auto space-y-16">

                {/* Header */}
                <div className="text-center space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-700 text-sm font-mono text-zinc-400"
                    >
                        <Book size={16} /> User Manual v1.0
                    </motion.div>
                    <h1 className="text-6xl font-black tracking-tighter">
                        Master the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Platform</span>
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        A complete breakdown of every tool in your arsenal. <br />
                        Learn how to leverage AI to speedrun your growth.
                    </p>
                </div>

                {/* Tour CTA */}
                <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-sm">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-white/10 rounded-xl">
                            <LayoutDashboard size={32} className="text-white" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold">Interactive Dashboard Tour</h3>
                            <p className="text-zinc-400 mt-1 max-w-md">
                                Want a quick hands-on demo? Launch the interactive driver that highlights every button on your dashboard.
                            </p>
                        </div>
                    </div>
                    <Link href="/dashboard?tour=true">
                        <button className="whitespace-nowrap bg-white text-black px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                            <Zap size={20} className="fill-black" /> Launch Tour
                        </button>
                    </Link>
                </div>

                {/* Guide Sections */}
                <div className="grid grid-cols-1 gap-12">
                    {guideSections.map((section, i) => (
                        <motion.div
                            key={section.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <div className="grid md:grid-cols-[300px_1fr] h-full">
                                {/* Left: Title & Icon */}
                                <div className={`p-8 ${section.bg} border-b md:border-b-0 md:border-r border-zinc-800/50 flex flex-col items-center md:items-start justify-center text-center md:text-left`}>
                                    <div className={`p-4 rounded-2xl bg-black/40 border border-white/5 mb-4 ${section.color}`}>
                                        {section.icon}
                                    </div>
                                    <h2 className="text-2xl font-bold tracking-tight">{section.title}</h2>
                                    <div className={`h-1 w-12 rounded-full mt-4 bg-current opacity-50 ${section.color}`} />
                                </div>

                                {/* Right: Content */}
                                <div className="p-8 md:p-12 flex flex-col justify-center">
                                    {section.content}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Video Placeholder */}
                <div className="text-center pt-12 space-y-4">
                    <h3 className="text-2xl font-bold flex items-center justify-center gap-2"><Target /> Still confused?</h3>
                    <p className="text-zinc-500">I have recorded a walkthrough of the platform just for you.</p>

                    {/* Video Embed Placeholder - In reality, I will try to generate this artifact next */}
                    <div className="max-w-3xl mx-auto aspect-video bg-black border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-600">
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-16 h-16 rounded-full border-2 border-zinc-700 flex items-center justify-center">
                                <span className="text-2xl">▶️</span>
                            </div>
                            <span>Walkthrough Video Loading...</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
