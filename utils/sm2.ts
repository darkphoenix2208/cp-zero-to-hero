/**
 * SuperMemo-2 (SM-2) Algorithm Implementation
 * Used to calculate the next review interval for spaced repetition.
 * 
 * @param quality 0-5 rating of the user's recall quality
 *                0 - Complete blackout
 *                3 - Correct with significant effort
 *                5 - Perfect recall, instant handling
 * @param previousInterval The previous interval in days
 * @param repetitions The number of times successfully recalled in a row
 * @returns Object containing the new interval, new repetition count, and next review date
 */

export interface SM2Item {
    interval: number;
    repetitions: number;
    easeFactor: number;
}

export function calculateNextReview(
    quality: number,
    previousItem: SM2Item
): SM2Item {
    let { interval, repetitions, easeFactor } = previousItem;

    if (quality >= 3) {
        // Correct response
        if (repetitions === 0) {
            interval = 1;
        } else if (repetitions === 1) {
            interval = 6;
        } else {
            interval = Math.round(interval * easeFactor);
        }
        repetitions += 1;
    } else {
        // Incorrect response - Reset progress
        repetitions = 0;
        interval = 1;
    }

    // Update Ease Factor
    // EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
    easeFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));

    // Safety lower bound for EF
    if (easeFactor < 1.3) {
        easeFactor = 1.3;
    }

    return {
        interval,
        repetitions,
        easeFactor
    };
}

// Helper to get the actual Date object for the next review
export function getNextReviewDate(intervalDays: number): Date {
    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + intervalDays);
    return nextDate;
}
