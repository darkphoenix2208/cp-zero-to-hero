'use client';
import { useState, useEffect } from 'react';
import { Contest } from '@/lib/contests';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ExternalLink, Filter, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';
import { isSameDay, format } from 'date-fns';
import { ContestCalendar } from './ContestCalendar';

export function ContestList({ initialContests }: { initialContests: Contest[] }) {
    const [filter, setFilter] = useState<string>('All');
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [contests, setContests] = useState(initialContests);
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        // Hydration helper and Client Side Fetch
        async function refreshData() {
            try {
                const res = await fetch('https://kontests.net/api/v1/all');
                if (res.ok) {
                    const data: Contest[] = await res.json();
                    const allContests = data
                        .filter(c => ['Codeforces', 'LeetCode', 'AtCoder', 'CodeChef'].includes(c.site))
                        // .filter(c => new Date(c.end_time) > new Date()) // Allow History
                        .sort((a, b) => new Date(a.start_time).getTime() - new Date(b.start_time).getTime());

                    if (allContests.length > 0) {
                        setContests(allContests);
                    }
                }
            } catch (e) {
                // Silently fail
            }
        }
        refreshData();
        const timer = setInterval(() => setNow(new Date()), 60000);
        return () => clearInterval(timer);
    }, []);

    // Filter Logic: Platform + Date
    const filtered = contests.filter(c => {
        const matchesPlatform = filter === 'All' || c.site === filter;
        const matchesDate = selectedDate ? isSameDay(new Date(c.start_time), selectedDate) : true;
        return matchesPlatform && matchesDate;
    });

    const getGoogleCalendarUrl = (c: Contest) => {
        const start = c.start_time.replace(/-|:|\.\d\d\d/g, "");
        const end = c.end_time.replace(/-|:|\.\d\d\d/g, "");
        return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(c.name)}&dates=${start}/${end}&details=Platform: ${c.site}%0AURL: ${c.url}`;
    }

    return (
        <div className="grid lg:grid-cols-[400px_1fr] gap-8 items-start">
            {/* Left Column: Calendar & Filters */}
            <div className="space-y-6 lg:sticky lg:top-24">
                <ContestCalendar
                    contests={contests}
                    selectedDate={selectedDate}
                    onSelectDate={setSelectedDate}
                />

                <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-semibold text-zinc-400 flex items-center gap-2">
                            <Filter size={16} /> Filters
                        </h3>
                        {(filter !== 'All' || selectedDate) && (
                            <button
                                onClick={() => { setFilter('All'); setSelectedDate(null); }}
                                className="text-xs text-primary hover:underline flex items-center gap-1"
                            >
                                <RotateCcw size={12} /> Reset
                            </button>
                        )}
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {['All', 'Codeforces', 'LeetCode', 'AtCoder', 'CodeChef'].map(site => (
                            <button
                                key={site}
                                onClick={() => setFilter(site)}
                                className={cn(
                                    "px-3 py-1.5 rounded-lg text-xs font-medium transition-all border",
                                    filter === site
                                        ? "bg-primary/20 text-primary border-primary/50"
                                        : "bg-zinc-900 text-zinc-500 border-zinc-800 hover:border-zinc-700"
                                )}
                            >
                                {site}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Column: Contest List */}
            <div className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold">
                        {selectedDate
                            ? `Contests on ${selectedDate.toLocaleDateString(undefined, { month: 'long', day: 'numeric' })}`
                            : 'All Contests (Recent & Upcoming)'}
                        <span className="ml-2 text-sm font-normal text-zinc-500">({filtered.length})</span>
                    </h3>
                </div>

                <AnimatePresence mode='popLayout'>
                    {filtered.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            className="bg-zinc-900/30 p-12 rounded-xl text-center text-zinc-500 border border-zinc-800 border-dashed"
                        >
                            No contests found for this selection.
                        </motion.div>
                    ) : filtered.map((contest, i) => {
                        const startTime = new Date(contest.start_time);
                        const endTime = new Date(contest.end_time);
                        const isLive = now >= startTime && now < endTime;
                        const isFinished = now >= endTime;

                        const diff = startTime.getTime() - now.getTime();
                        let countdown = "LIVE";

                        if (isFinished) {
                            countdown = "ENDED";
                        } else if (!isLive) {
                            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                            if (days > 0) countdown = `In ${days}d`;
                            else if (hours > 0) countdown = `In ${hours}h`;
                            else countdown = `Starting soon`;
                        }

                        const siteColor =
                            contest.site === 'Codeforces' ? 'bg-red-500/10 text-red-500 border-red-500/20' :
                                contest.site === 'LeetCode' ? 'bg-orange-500/10 text-orange-500 border-orange-500/20' :
                                    contest.site === 'AtCoder' ? 'bg-zinc-100/10 text-zinc-100 border-zinc-100/20' :
                                        'bg-amber-700/10 text-amber-700 border-amber-700/20';

                        const badgeStyle = isFinished
                            ? "bg-zinc-800 text-zinc-500"
                            : isLive
                                ? "bg-green-500/20 text-green-500 animate-pulse"
                                : "bg-zinc-800 text-zinc-400";

                        return (
                            <motion.div
                                key={contest.name + contest.start_time}
                                layout
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ delay: i * 0.05 }}
                                className={cn(
                                    "group relative bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all shadow-sm",
                                    isFinished && "opacity-60 grayscale hover:grayscale-0"
                                )}
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-3">
                                            <span className={cn("px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border", siteColor)}>
                                                {contest.site}
                                            </span>
                                            <span className={cn("text-xs font-mono px-2 py-0.5 rounded", badgeStyle)}>
                                                {countdown}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                                            {contest.name}
                                        </h3>
                                        <div className="flex items-center gap-4 text-sm text-zinc-400">
                                            <div className="flex items-center gap-1.5">
                                                <Calendar size={14} />
                                                {format(startTime, "EEE, MMM d, h:mm a")}
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Clock size={14} />
                                                {Math.round(parseInt(contest.duration) / 3600)}h {Math.round((parseInt(contest.duration) % 3600) / 60)}m
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 pt-4 md:pt-0 border-t md:border-t-0 border-zinc-800">
                                        <a
                                            href={contest.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                                        >
                                            Register <ExternalLink size={14} />
                                        </a>
                                        <a
                                            href={getGoogleCalendarUrl(contest)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white rounded-lg transition-colors"
                                            title="Add to Google Calendar"
                                        >
                                            <Calendar size={18} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>
        </div>
    );
}
