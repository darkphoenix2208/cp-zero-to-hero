
import React, { useState } from 'react';
import {
    format, startOfMonth, endOfMonth, startOfWeek, endOfWeek,
    eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths, isToday
} from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Contest } from '@/lib/contests';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface ContestCalendarProps {
    contests: Contest[];
    onSelectDate: (date: Date | null) => void;
    selectedDate: Date | null;
}

export function ContestCalendar({ contests, onSelectDate, selectedDate }: ContestCalendarProps) {
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const startDate = startOfWeek(startOfMonth(currentMonth));
    const endDate = endOfWeek(endOfMonth(currentMonth));
    const calendarDays = eachDayOfInterval({ start: startDate, end: endDate });

    const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
    const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

    // Helper to find contests on a specific day
    const getContestsForDay = (day: Date) => {
        return contests.filter(c => isSameDay(new Date(c.start_time), day));
    };

    return (
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold font-mono text-white">
                    {format(currentMonth, 'MMMM yyyy')}
                </h2>
                <div className="flex gap-2">
                    <button onClick={prevMonth} className="p-2 hover:bg-zinc-800 rounded-lg transition-colors">
                        <ChevronLeft size={20} />
                    </button>
                    <button onClick={nextMonth} className="p-2 hover:bg-zinc-800 rounded-lg transition-colors">
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="text-center text-sm font-medium text-zinc-500 py-2">
                        {day}
                    </div>
                ))}

                <AnimatePresence mode='wait'>
                    {calendarDays.map((day, idx) => {
                        const dayContests = getContestsForDay(day);
                        const hasContest = dayContests.length > 0;
                        const isSelected = selectedDate && isSameDay(day, selectedDate);
                        const isCurrentMonth = isSameMonth(day, currentMonth);

                        return (
                            <motion.button
                                key={day.toISOString()}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.005 }}
                                onClick={() => onSelectDate(isSelected ? null : day)}
                                className={cn(
                                    "relative h-14 rounded-xl flex flex-col items-center justify-center gap-1 transition-all border",
                                    isCurrentMonth ? "bg-zinc-900/30 border-transparent hover:bg-zinc-800" : "bg-transparent text-zinc-600 border-transparent hover:bg-zinc-900/50",
                                    isSelected && "bg-primary/20 border-primary/50 !text-primary shadow-[0_0_15px_rgba(59,130,246,0.3)]",
                                    isToday(day) && !isSelected && "bg-zinc-800/80 border-zinc-700 text-white font-bold"
                                )}
                            >
                                <span className={cn("text-sm", !isCurrentMonth && "text-zinc-600")}>
                                    {format(day, 'd')}
                                </span>

                                {/* Contest Dots */}
                                {hasContest && (
                                    <div className="flex gap-1 justify-center">
                                        {dayContests.slice(0, 3).map((c, i) => {
                                            const color =
                                                c.site === 'Codeforces' ? 'bg-red-500' :
                                                    c.site === 'LeetCode' ? 'bg-orange-400' :
                                                        c.site === 'AtCoder' ? 'bg-white' :
                                                            'bg-amber-700';
                                            return (
                                                <div key={i} className={cn("w-1.5 h-1.5 rounded-full shadow-sm", color)} />
                                            )
                                        })}
                                        {dayContests.length > 3 && (
                                            <div className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
                                        )}
                                    </div>
                                )}
                            </motion.button>
                        );
                    })}
                </AnimatePresence>
            </div>

            <div className="mt-4 flex gap-4 text-xs text-zinc-500 justify-center">
                <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-red-500" /> Codeforces</div>
                <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-orange-400" /> LeetCode</div>
                <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-white" /> AtCoder</div>
                <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-amber-700" /> CodeChef</div>
            </div>
        </div>
    );
}
