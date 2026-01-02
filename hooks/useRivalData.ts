import { useState, useEffect } from 'react';
import { getRivals, getRivalActivity, getRivalHistory } from '@/app/actions';
import type { CFUser } from '@/lib/codeforces';

export function useRivalData(user: CFUser | null) {
    const [rivals, setRivals] = useState<any[]>([]);
    const [activity, setActivity] = useState<any[]>([]);
    const [graphData, setGraphData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) return;

        const fetchData = async () => {
            setLoading(true);
            try {
                // 1. Get List of Rivals
                const rivalList = await getRivals(user.handle);
                setRivals(rivalList);

                // 2. Prepare all handles (Me + Rivals)
                // rivals return from getRivals are CFUser objects, so use .handle
                const allHandles = [user.handle, ...rivalList.map((r: any) => r.handle)];

                // 3. Fetch Data Sereially/Safely via Actions
                const [feedData, historyRes] = await Promise.all([
                    getRivalActivity(allHandles),
                    getRivalHistory(allHandles)
                ]);

                setActivity(feedData || []);

                // 5. Process Graph Data (Normalization)
                // We need to map to a common timeline.
                // Data Source: [{ handle: "A", history: [{ updateTimeSeconds, newRating }, ...] }]
                // Output: [{ time: 1600000000, "A": 1200, "B": 1300 }]

                // Collect all unique time points
                const timePoints = new Set<number>();
                historyRes.forEach((h: any) => {
                    h.history.forEach((fw: any) => timePoints.add(fw.ratingUpdateTimeSeconds));
                });
                const sortedTimes = Array.from(timePoints).sort((a, b) => a - b);

                // Build data points
                // For "step" charts, we should ideally fill forward, but Recharts line chart handles nulls by breaking lines or interpolation.
                // Standard approach: just plot points.
                // Better approach for comparison: For every time point t, find the user's rating AT that time (most recent update before or at t).

                const normalizedGraph = sortedTimes.map(t => {
                    const point: any = { time: t };
                    historyRes.forEach((h: any) => {
                        // Find last rating update <= t
                        const entry = h.history.find((e: any) => e.ratingUpdateTimeSeconds === t);
                        // Or if not exact match (which is rare to share contest times exactly unless same div),
                        // we loop.
                        // Actually, purely plotting points is easier for Recharts Type "step" or "monotone".
                        // To avoid complex interpolation logic in JS, let's just create a sparse array where valid points exist.
                        // Recharts `connectNulls` can be useful.

                        // BUT, to compare properly, we often want updates aligned.
                        // Simplified: Just push raw data points for each line and let them be on their own time.
                        // Recharts supports different data arrays for different lines? No, it prefers one array.
                        // SO: We MUST merge.

                        // let's do: point = { time: t, "userA": 1500, "userB": null } -> connectNulls={true}
                        if (entry) {
                            point[h.handle] = entry.newRating;
                        }
                    });
                    return point;
                });

                // Optimization: Filter out points where nobody has data? (Implicitly handled)
                setGraphData(normalizedGraph);

            } catch (error) {
                console.error("Failed to sync Stalker data", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [user]);

    return { rivals, activity, graphData, loading };
}
