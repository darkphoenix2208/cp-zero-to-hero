export interface CFUser {
    handle: string;
    rating?: number;
    maxRating?: number;
    rank?: string;
    maxRank?: string;
    titlePhoto: string;
}

export interface CFSubmission {
    id: number;
    contestId: number;
    creationTimeSeconds: number;
    relativeTimeSeconds: number;
    problem: {
        contestId: number;
        index: string;
        name: string;
        type: string;
        rating?: number;
        tags: string[];
    };
    author: {
        contestId: number;
        members: { handle: string }[];
        participantType: string;
        ghost: boolean;
    };
    programmingLanguage: string;
    verdict: string; // "OK", "WRONG_ANSWER", etc.
    testset: string;
    passedTestCount: number;
    timeConsumedMillis: number;
    memoryConsumedBytes: number;
}

const API_BASE = "https://codeforces.com/api";

export async function getCFUser(handle: string): Promise<CFUser | null> {
    try {
        const res = await fetch(`${API_BASE}/user.info?handles=${handle}`, { next: { revalidate: 3600 } });
        const data = await res.json();
        if (data.status === "OK" && data.result.length > 0) return data.result[0];
        return null;
    } catch (err) {
        console.error("CF API Error:", err);
        return null;
    }
}

export async function getUserSubmissions(handle: string): Promise<CFSubmission[]> {
    try {
        const res = await fetch(`${API_BASE}/user.status?handle=${handle}`, { next: { revalidate: 0 } });
        const data = await res.json();
        if (data.status === "OK") return data.result;
        return [];
    } catch (err) {
        console.error("CF Submissions Error:", err);
        return [];
    }
}
