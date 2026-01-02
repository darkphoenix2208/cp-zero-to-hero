'use client'
import dynamic from 'next/dynamic';

const CalendarHeatmap = dynamic(
    () => import('react-calendar-heatmap').then(mod => mod.default),
    { ssr: false }
);

// Import styles
import 'react-calendar-heatmap/dist/styles.css';

export function UserHeatmap({ submissions }: { submissions: any[] }) {
    // Process submissions into values
    // Use Local Time for accurate "Day" representation
    const data = new Map<string, number>();

    submissions.forEach(sub => {
        // Convert UNIX timestamp to Local Date String (YYYY-MM-DD)
        // We use the browser's local timezone (client-side)
        const date = new Date(sub.creationTimeSeconds * 1000).toLocaleDateString('en-CA');
        data.set(date, (data.get(date) || 0) + 1);
    });

    const values = Array.from(data.entries()).map(([date, count]) => ({ date, count }));

    // Get last 365 days
    const today = new Date();
    const yearAgo = new Date();
    yearAgo.setFullYear(today.getFullYear() - 1);

    return (
        <div className="w-full h-full heatmap-container">
            <CalendarHeatmap
                startDate={yearAgo}
                endDate={today}
                values={values}
                classForValue={(value) => {
                    if (!value) return 'color-empty';
                    return `color-grade-${Math.min(4, Math.ceil(value.count / 2))}`; // Scale: 1-2=1, 3-4=2, etc.
                }}
                tooltipDataAttrs={(value: any) => ({
                    'data-tip': value && value.date ? `${value.date}: ${value.count} submissions` : 'No activity',
                })}
                showWeekdayLabels
            />
            <style jsx global>{`
                /* Base Text */
                .heatmap-container text {
                    font-size: 10px;
                    fill: var(--muted-foreground);
                }
                
                /* Default (Light Mode) Colors - GitHub Light Style */
                .heatmap-container .color-empty { fill: #ebedf0; }
                .heatmap-container .color-grade-1 { fill: #9be9a8; }
                .heatmap-container .color-grade-2 { fill: #40c463; }
                .heatmap-container .color-grade-3 { fill: #30a14e; }
                .heatmap-container .color-grade-4 { fill: #216e39; }

                /* Dark Mode Colors - GitHub Dark Style */
                .dark .heatmap-container .color-empty { fill: #161b22; } /* Darker gray */
                .dark .heatmap-container .color-grade-1 { fill: #0e4429; }
                .dark .heatmap-container .color-grade-2 { fill: #006d32; }
                .dark .heatmap-container .color-grade-3 { fill: #26a641; }
                .dark .heatmap-container .color-grade-4 { fill: #39d353; }
            `}</style>
        </div>
    );
}
