import { useMemo } from 'react';
import { differenceInDays } from 'date-fns';

export type VisualState = 'fresh' | 'fading' | 'rusted';

export interface PlanetHealth {
    health: number; // 0-100
    visualState: VisualState;
    filterStyle: string; // CSS Filter string
    isDecayed: boolean; // True if health < 90 (Recall needed)
}

export function usePlanetHealth(lastReviewedAt: Date | string | null): PlanetHealth {
    // If never reviewed, treat as 0% health (fully rusted)
    const lastReviewDate = useMemo(() =>
        lastReviewedAt ? new Date(lastReviewedAt) : null
        , [lastReviewedAt]);

    const stats = useMemo(() => {
        if (!lastReviewDate) {
            return {
                health: 0,
                visualState: 'rusted' as VisualState,
                filterStyle: 'sepia(0.8) hue-rotate(-30deg) contrast(1.2) brightness(0.8)',
                isDecayed: true
            };
        }

        const daysSince = differenceInDays(new Date(), lastReviewDate);

        // Decay Logic: Lose 10% health per day (Example linear decay)
        // Realistically, SM-2 handles the "Internal", this visual is just a proxy for "Urgency"
        // Let's say if interval is passed, health drops rapidly.
        // For simplicity: 
        // 0-1 days: 100%
        // 2-3 days: 80%
        // 4-7 days: 50%
        // >7 days: 20%

        let health = 100;
        if (daysSince > 7) health = 20;
        else if (daysSince > 4) health = 50;
        else if (daysSince > 2) health = 80;
        else if (daysSince > 0) health = 95;

        let visualState: VisualState = 'fresh';
        let filterStyle = 'none';

        if (health < 40) {
            visualState = 'rusted';
            // The "Rust" effect: Sepia for brown tone, hue-rotate for rust/orange, contrast for grit.
            filterStyle = 'sepia(0.8) hue-rotate(-30deg) contrast(1.2) brightness(0.8)';
        } else if (health < 90) {
            visualState = 'fading';
            filterStyle = 'grayscale(0.4) brightness(0.9)';
        } else {
            visualState = 'fresh';
            filterStyle = 'drop-shadow(0 0 10px rgba(74, 222, 128, 0.5))'; // Green glow
        }

        return {
            health,
            visualState,
            filterStyle,
            isDecayed: health < 90
        };

    }, [lastReviewDate]);

    return stats;
}
