'use client'
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { format, subDays, eachDayOfInterval } from 'date-fns';

const CalendarHeatmap = dynamic(
    () => import('react-calendar-heatmap').then(mod => mod.default),
    { ssr: false }
);

// Import styles
import 'react-calendar-heatmap/dist/styles.css';

export function UserHeatmap({ submissions }: { submissions: any[] }) {
    const [hovered, setHovered] = useState<{ date: string; count: number; x: number; y: number } | null>(null);

    // 1. Process submissions into a Map
    const submissionMap = new Map<string, number>();
    submissions.forEach(sub => {
        if (sub.verdict !== 'OK') return;
        const date = new Date(sub.creationTimeSeconds * 1000).toLocaleDateString('en-CA');
        submissionMap.set(date, (submissionMap.get(date) || 0) + 1);
    });

    // 2. Generate full dataset (last 365 days) to ensure every day has a tooltip
    const today = new Date();
    const yearAgo = subDays(today, 365);

    // Create array of all dates in range
    const dates = eachDayOfInterval({ start: yearAgo, end: today });

    const values = dates.map(dateObj => {
        // Format to YYYY-MM-DD for Map lookup
        // Note: en-CA is YYYY-MM-DD. We need to be careful with timezone.
        // Let's use simple ISO string part for consistency with the map above or just consistent local usage.
        // Actually, ensuring 'en-CA' consistency is key.
        const dateStr = dateObj.toLocaleDateString('en-CA');
        return {
            date: dateStr,
            count: submissionMap.get(dateStr) || 0,
            fullDate: dateObj // Keep date object for formatting tooltip
        };
    });

    return (
        <div className="w-full h-full heatmap-container relative">
            <CalendarHeatmap
                startDate={yearAgo}
                endDate={today}
                values={values}
                classForValue={(value) => {
                    if (!value || value.count === 0) return 'color-empty';
                    return `color-grade-${Math.min(4, Math.ceil(value.count / 2))}`;
                }}
                onMouseOver={(event, value) => {
                    if (!value) return;
                    const rect = (event.target as Element).getBoundingClientRect();
                    setHovered({
                        date: format(value.fullDate, 'MMM d, yyyy'),
                        count: value.count,
                        x: rect.left + rect.width / 2,
                        y: rect.top
                    });
                }}
                onMouseLeave={() => setHovered(null)}
                showWeekdayLabels
            />

            {/* Custom Tooltip Portal/Overlay */}
            {hovered && (
                <div
                    className="fixed z-50 pointer-events-none transform -translate-x-1/2 -translate-y-full mb-2 px-3 py-2 bg-zinc-900 border border-zinc-700 text-white text-xs rounded shadow-xl whitespace-nowrap"
                    style={{ left: hovered.x, top: hovered.y - 8 }}
                >
                    <span className="font-bold block text-center mb-0.5">{hovered.count} Problems Solved</span>
                    <span className="text-zinc-400 block text-center">on {hovered.date}</span>

                    {/* Tiny Arrow */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-4 border-transparent border-t-zinc-700" />
                </div>
            )}

            <style jsx global>{`
                /* Base Text */
                .heatmap-container text {
                    font-size: 10px;
                    fill: var(--muted-foreground);
                }
                
                /* Default (Light Mode) Colors */
                .heatmap-container .color-empty { fill: #27272a; } /* zinc-800 equivalent for "empty" in dark theme context */
                .heatmap-container .color-grade-1 { fill: #0e4429; }
                .heatmap-container .color-grade-2 { fill: #006d32; }
                .heatmap-container .color-grade-3 { fill: #26a641; }
                .heatmap-container .color-grade-4 { fill: #39d353; }

                /* Override for the requested dashboard dark theme */
                .heatmap-container .color-empty { fill: rgba(255,255,255,0.05); rx: 2px; }
                .heatmap-container rect { rx: 3px; } /* Rounded corners */
            `}</style>
        </div>
    );
}
