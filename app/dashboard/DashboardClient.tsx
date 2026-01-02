'use client'
import { useState, useEffect, Suspense } from 'react';
import { getSubmissions, syncUserStats, getProblemsByRating } from '@/app/actions'; // removed verify/login actions
import { motion } from 'framer-motion';
import { Trophy, Flame, Target, Sparkles, ArrowRight, Zap, Brain, Network, BookOpen, Share2, Mic } from 'lucide-react';
import { cn } from '@/lib/utils';
import { UserHeatmap } from '@/components/features/UserHeatmap';
import { RivalryWidget } from '@/components/features/RivalryWidget';
import { signOut } from 'next-auth/react';
import { DashboardTour } from '@/components/onboarding/DashboardTour';

// Define Prop Type based on Prisma User + Stats
interface DashboardClientProps {
    user: any; // Using any temporarily to avoid Prisma type conflicts in client, but structure is known
}

export function DashboardClient({ user }: DashboardClientProps) {
    const [submissions, setSubmissions] = useState<any[]>([]);
    const [stats, setStats] = useState({
        streak: user.stats?.currentStreak || 0,
        totalSolved: user.stats?.totalSolved || 0,
        rank: user.rank || 'Newbie'
    });
    const [recommendation, setRecommendation] = useState<any>(null);

    // Initial Data Fetch
    useEffect(() => {
        const handle = user.codeforcesHandle;
        if (!handle) return; // Should be handled by server redirect, but safe guard

        const fetchData = async () => {
            try {
                // 1. Get Submissions
                const subs = await getSubmissions(handle);
                setSubmissions(subs);

                // 2. Calc Stats (Client side calc for freshness, then sync)
                processStats(handle, subs, user.rating || 0);

                // 3. Recommendation
                const currentRating = user.rating || 800;
                const targetRating = Math.max(800, Math.ceil((currentRating + 100) / 100) * 100);
                const probs = await getProblemsByRating(targetRating);
                if (probs.length > 0) setRecommendation(probs[0]);

            } catch (e) {
                console.error("Dashboard fetch failed", e);
            }
        };

        fetchData();
    }, [user.codeforcesHandle]);

    const processStats = (handle: string, subs: any[], rating: number) => {
        // 1. Calculate Solved
        const solvedSet = new Set();
        const acSubs = subs.filter((s: any) => s.verdict === 'OK');

        acSubs.forEach((s: any) => {
            solvedSet.add(`${s.problem.contestId}-${s.problem.index}`);
        });

        // 2. Calculate Streak
        let streak = 0;
        if (acSubs.length > 0) {
            const dates = new Set(
                acSubs.map((s: any) => new Date(s.creationTimeSeconds * 1000).toISOString().split('T')[0])
            );
            const today = new Date().toISOString().split('T')[0];
            let current = new Date();
            let count = 0;
            while (true) {
                const dateStr = current.toISOString().split('T')[0];
                if (dates.has(dateStr)) {
                    count++;
                    current.setDate(current.getDate() - 1);
                } else {
                    if (count === 0 && dateStr === today) {
                        current.setDate(current.getDate() - 1);
                        continue;
                    }
                    break;
                }
            }
            streak = count;
        }

        // 3. Determine Tier (Just formatting)
        let rank = "Newbie";
        if (rating >= 1200) rank = "Pupil";
        if (rating >= 1400) rank = "Specialist";
        if (rating >= 1600) rank = "Expert";
        if (rating >= 1900) rank = "CM";
        if (rating >= 2100) rank = "Master";
        if (rating >= 2400) rank = "GM";

        setStats({ streak, totalSolved: solvedSet.size, rank });

        // Sync to DB
        syncUserStats(handle, {
            currentStreak: streak,
            totalSolved: solvedSet.size,
            maxRating: 0, // We rely on CF API update elsewhere or keep 0 if not fetched fresh
            lastActive: new Date()
        });
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 backdrop-blur-sm">
                <img
                    src={user.image || user.avatarUrl || "https://cdn.codeforces.com/s/97793/images/codeforces-telegram-square.png"}
                    alt="Avatar"
                    className="w-24 h-24 rounded-full border-4 border-zinc-800 shadow-xl"
                />
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold text-white flex items-center justify-center md:justify-start gap-3">
                        {user.codeforcesHandle}
                        <span className={cn("text-sm px-2 py-0.5 rounded-full border font-mono", getRatingColor(user.rating))}>
                            {user.rating || 0}
                        </span>
                    </h2>
                    <p className="text-zinc-400 mt-1 capitalize">{stats.rank} • Authenticated via Google</p>
                </div>
                <button
                    onClick={() => signOut({ callbackUrl: '/' })}
                    className="md:ml-auto px-4 py-2 text-sm text-zinc-500 hover:text-red-400 hover:bg-zinc-800 rounded-lg transition"
                >
                    Logout
                </button>
            </div>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* LEFT COL: Feature Arcade (Span 8) */}
                <div className="lg:col-span-8 space-y-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="h-1 w-1 rounded-full bg-blue-500"></div>
                        <h3 className="text-zinc-400 font-medium text-sm uppercase tracking-wider">The Arcade</h3>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {/* Hero Features */}
                        <DashboardLink
                            href="/skills"
                            title="Skill Tree"
                            desc="RPG Progression"
                            icon={<Network size={20} />}
                            color="text-emerald-400"
                            bg="bg-emerald-500/10 border-emerald-500/20"
                        />
                        <DashboardLink
                            href="/flashback"
                            title="Flashback"
                            desc="SRS Memory"
                            icon={<Brain size={20} />}
                            color="text-pink-400"
                            bg="bg-pink-500/10 border-pink-500/20"
                        />

                        {/* Standard Features */}
                        <DashboardLink
                            href="/senpai"
                            title="AI Dojo"
                            desc="Get Hints"
                            icon={<Sparkles size={18} />}
                            color="text-indigo-400"
                            bg="bg-indigo-500/10 border-indigo-500/20"
                        />
                        <DashboardLink
                            href="/stress"
                            title="Stress Test"
                            desc="Find Bugs"
                            icon={<Zap size={18} />}
                            color="text-yellow-400"
                            bg="bg-yellow-500/10 border-yellow-500/20"
                        />
                        <DashboardLink
                            href="/racer"
                            title="Racer"
                            desc="Speed Code"
                            icon={<Flame size={18} />}
                            color="text-red-400"
                            bg="bg-red-500/10 border-red-500/20"
                        />
                        <DashboardLink
                            href="/studio"
                            title="Algo Studio"
                            desc="Visualizer"
                            icon={<Share2 size={18} />}
                            color="text-cyan-400"
                            bg="bg-cyan-500/10 border-cyan-500/20"
                        />
                        <DashboardLink
                            href="/interview"
                            title="Interviewer"
                            desc="Mock AI Test"
                            icon={<Mic size={18} />}
                            color="text-rose-400"
                            bg="bg-rose-500/10 border-rose-500/20"
                        />

                        {/* Resource Features */}
                        <DashboardLink
                            href="/roadmap"
                            title="Roadmap"
                            desc="Guide"
                            icon={<Target size={18} />}
                            color="text-blue-400"
                            bg="bg-blue-500/10 border-blue-500/20"
                        />
                        <DashboardLink
                            href="/contests"
                            title="Contests"
                            desc="Virtual"
                            icon={<Trophy size={18} />}
                            color="text-orange-400"
                            bg="bg-orange-500/10 border-orange-500/20"
                        />
                        <DashboardLink
                            href="/blog-hunter"
                            title="Blogs"
                            desc="Learn"
                            icon={<BookOpen size={18} />}
                            color="text-purple-400"
                            bg="bg-purple-500/10 border-purple-500/20"
                        />
                    </div>

                    {/* Activity Log */}
                    <div className="bg-zinc-900/40 p-6 rounded-2xl border border-zinc-800/50 mt-6">
                        <h3 className="text-zinc-500 text-xs font-bold uppercase mb-4 flex items-center gap-2">
                            <Flame className="text-zinc-600" size={14} /> Activity Heatmap
                        </h3>
                        <div className="h-32">
                            {submissions.length > 0 ? (
                                <UserHeatmap submissions={submissions} />
                            ) : (
                                <div className="h-full flex items-center justify-center text-zinc-600 text-sm">
                                    Loading Data...
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* RIGHT COL: Mission Control (Span 4) */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="h-1 w-1 rounded-full bg-violet-500"></div>
                        <h3 className="text-zinc-400 font-medium text-sm uppercase tracking-wider">Mission Control</h3>
                    </div>

                    {/* Next Mission Card */}
                    <div className="bg-gradient-to-b from-violet-900/20 to-zinc-900 border border-violet-500/30 p-6 rounded-2xl relative overflow-hidden group hover:border-violet-500/50 transition duration-500">
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-violet-500/20 rounded-xl text-violet-300">
                                    <Target size={24} />
                                </div>
                                <span className="bg-violet-500/20 text-violet-300 text-[10px] uppercase font-bold px-2 py-1 rounded">
                                    Recommended
                                </span>
                            </div>

                            {recommendation ? (
                                <>
                                    <div className="text-zinc-400 text-xs uppercase font-bold tracking-wider mb-1">Daily Challenge</div>
                                    <div className="tfont-mono text-2xl text-white font-bold mb-2 leading-tight">{recommendation.name}</div>
                                    <div className="flex gap-2 text-xs text-violet-300/60 mb-6">
                                        {recommendation.tags.slice(0, 3).join(', ')} • {recommendation.rating}
                                    </div>
                                    <a
                                        href={`https://codeforces.com/problemset/problem/${recommendation.contestId}/${recommendation.index}`}
                                        target="_blank"
                                        className="w-full flex items-center justify-center gap-2 text-sm bg-violet-600 hover:bg-violet-500 text-white px-4 py-3 rounded-xl font-bold transition shadow-lg shadow-violet-900/20"
                                    >
                                        Solve Now <ArrowRight size={16} />
                                    </a>
                                </>
                            ) : (
                                <p className="text-zinc-500 py-4">Scanning your stats for correct difficulty...</p>
                            )}
                        </div>
                        {/* Background Decoration */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-violet-600/10 blur-[50px] rounded-full pointer-events-none" />
                    </div>

                    {/* Stats Summary */}
                    <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-4 space-y-4">
                        <div className="flex items-center justify-between p-2">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-400"><Trophy size={16} /></div>
                                <span className="text-zinc-400 text-sm">Tier</span>
                            </div>
                            <span className="font-bold text-white">{stats.rank}</span>
                        </div>
                        <div className="flex items-center justify-between p-2 border-t border-zinc-800/50">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-orange-500/10 rounded-lg text-orange-400"><Flame size={16} /></div>
                                <span className="text-zinc-400 text-sm">Streak</span>
                            </div>
                            <span className="font-bold text-white">{stats.streak} Days</span>
                        </div>
                        <div className="flex items-center justify-between p-2 border-t border-zinc-800/50">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-green-500/10 rounded-lg text-green-400"><Target size={16} /></div>
                                <span className="text-zinc-400 text-sm">Solved</span>
                            </div>
                            <span className="font-bold text-white">{stats.totalSolved}</span>
                        </div>
                    </div>

                    {/* Rivals */}
                    <div className="bg-zinc-900/40 rounded-2xl border border-zinc-800/50 overflow-hidden">
                        <div className="p-4 border-b border-zinc-800/50 flex justify-between items-center">
                            <h3 className="text-xs font-bold text-zinc-500 uppercase">Rival Watch</h3>
                            <a href="#" className="text-xs text-zinc-600 hover:text-zinc-400">Manage</a>
                        </div>
                        <div className="p-2">
                            {/* We adapt RivalryWidget to use proper user object or handle if needed. Assuming it uses props.user.handle */}
                            <RivalryWidget user={{ ...user, handle: user.codeforcesHandle }} />
                        </div>
                    </div>

                </div>
            </div>
            {/* Product Tour Overlay */}
            <Suspense fallback={null}>
                <DashboardTour />
            </Suspense>
        </div>
    );
}

function DashboardLink({ href, title, desc, icon, color, bg, className }: any) {
    return (
        <a
            href={href}
            className={cn(
                "group relative p-4 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden",
                bg, // Dynamic background/border
                className
            )}
        >
            <div className="relative z-10">
                <div className={cn("p-2 rounded-lg w-fit mb-3 transition-colors", color.replace('text-', 'bg-') + '/10', color)}>
                    {icon}
                </div>
                <h4 className={cn("font-bold text-lg mb-0.5 text-zinc-200 group-hover:text-white transition")}>{title}</h4>
                <p className="text-xs text-zinc-500 group-hover:text-zinc-400">{desc}</p>
            </div>

            <div className={cn(
                "absolute -right-4 -bottom-4 opacity-0 group-hover:opacity-10 transition-opacity duration-500",
                color
            )}>
            </div>
        </a>
    )
}

function getRatingColor(rating?: number) {
    if (!rating) return "text-white border-zinc-600";
    if (rating < 1200) return "text-gray-300 border-gray-600 bg-gray-500/10";
    if (rating < 1400) return "text-green-400 border-green-700 bg-green-500/10";
    if (rating < 1600) return "text-cyan-400 border-cyan-700 bg-cyan-500/10";
    if (rating < 1900) return "text-blue-500 border-blue-800 bg-blue-500/10";
    if (rating < 2100) return "text-purple-400 border-purple-700 bg-purple-500/10";
    if (rating < 2400) return "text-orange-400 border-orange-700 bg-orange-500/10";
    return "text-red-500 border-red-700 bg-red-500/10";
}
