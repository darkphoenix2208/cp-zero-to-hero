
export interface Contest {
    name: string;
    url: string;
    start_time: string;
    end_time: string;
    duration: string; // seconds as string
    site: string;
    in_24_hours: string;
    status: string;
}

const SITES = ['Codeforces', 'LeetCode', 'AtCoder', 'CodeChef'];


// Helper: Get date 30 days ago
const getHistoryLimit = () => new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

async function fetchCodeforces(): Promise<Contest[]> {
    try {
        const cfRes = await fetch('https://codeforces.com/api/contest.list?gym=false', { next: { revalidate: 3600 } });
        const cfData = await cfRes.json();

        if (cfData.status === 'OK') {
            const limit = getHistoryLimit().getTime() / 1000;
            return cfData.result
                .filter((c: any) => c.startTimeSeconds > limit) // Last 30 days + Future
                .map((c: any) => ({
                    name: c.name,
                    url: "https://codeforces.com/contests/" + c.id,
                    start_time: new Date(c.startTimeSeconds * 1000).toISOString(),
                    end_time: new Date((c.startTimeSeconds + c.durationSeconds) * 1000).toISOString(),
                    duration: c.durationSeconds.toString(),
                    site: "Codeforces",
                    in_24_hours: c.relativeTimeSeconds > -86400 ? "Yes" : "No",
                    status: c.phase // BEFORE or FINISHED
                }));
        }
    } catch (e) {
        console.warn("CF Direct Fetch Failed", e);
    }
    return [];
}

async function fetchLeetCode(): Promise<Contest[]> {
    const staticLC: Contest[] = [];

    // 1. Try Real API for Upcoming
    try {
        const query = `
        {
            contestUpcomingContests {
                title
                titleSlug
                startTime
                duration
            }
        }`;

        const res = await fetch('https://leetcode.com/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'User-Agent': 'Mozilla/5.0' },
            body: JSON.stringify({ query }),
            next: { revalidate: 3600 }
        });

        const data = await res.json();
        if (data.data && data.data.contestUpcomingContests) {
            const realUpcoming = data.data.contestUpcomingContests.map((c: any) => ({
                name: c.title,
                url: `https://leetcode.com/contest/${c.titleSlug}`,
                start_time: new Date(c.startTime * 1000).toISOString(),
                end_time: new Date((c.startTime + c.duration) * 1000).toISOString(),
                duration: c.duration.toString(),
                site: "LeetCode",
                in_24_hours: (c.startTime * 1000 - Date.now()) < 86400000 ? "Yes" : "No",
                status: "BEFORE"
            }));
            staticLC.push(...realUpcoming);
        }
    } catch (e) {
        console.warn("LC Direct Fetch Failed", e);
    }

    // 2. Generate BACKFILL (Past 4 Weeks) + Future Fallback (if API failed)
    const now = new Date();

    // Find PREVIOUS Sunday (for history)
    const prevSunday = new Date(now);
    prevSunday.setDate(now.getDate() - (now.getDay() + 7) % 7);
    prevSunday.setUTCHours(2, 30, 0, 0);

    // Generate Past 4 Weeks
    for (let i = 0; i < 4; i++) {
        const d = new Date(prevSunday);
        d.setDate(d.getDate() - (i * 7));
        staticLC.push({
            name: `Weekly Contest (Past)`,
            url: "https://leetcode.com/contest/",
            start_time: d.toISOString(),
            end_time: new Date(d.getTime() + 5400 * 1000).toISOString(),
            duration: "5400",
            site: "LeetCode",
            in_24_hours: "No",
            status: "FINISHED"
        });
    }

    // Generate Future 4 Weeks (Fallback if API empty)
    if (staticLC.filter(c => new Date(c.start_time) > now).length === 0) {
        const nextSunday = new Date(now);
        nextSunday.setDate(now.getDate() + (7 - now.getDay()) % 7);
        nextSunday.setUTCHours(2, 30, 0, 0);
        if (nextSunday.getTime() < now.getTime()) nextSunday.setDate(nextSunday.getDate() + 7);

        for (let i = 0; i < 4; i++) {
            const d = new Date(nextSunday);
            d.setDate(d.getDate() + (i * 7));
            staticLC.push({
                name: `Weekly Contest (Est.)`,
                url: "https://leetcode.com/contest/",
                start_time: d.toISOString(),
                end_time: new Date(d.getTime() + 5400 * 1000).toISOString(),
                duration: "5400",
                site: "LeetCode",
                in_24_hours: (d.getTime() - now.getTime()) < 86400000 ? "Yes" : "No",
                status: "BEFORE"
            });
        }
    }

    return staticLC;
}

function generateStaticAtCoder(): Contest[] {
    const contests: Contest[] = [];
    const now = new Date();

    // Anchor: A known Saturday.
    const nextSat = new Date(now);
    nextSat.setDate(now.getDate() + (6 - now.getDay() + 7) % 7);
    nextSat.setUTCHours(12, 0, 0, 0);

    // Generate 4 Past + 4 Future
    for (let i = -4; i < 4; i++) {
        const d = new Date(nextSat);
        d.setDate(d.getDate() + (i * 7));
        const isFuture = d > now;

        contests.push({
            name: `AtCoder Beginner Contest ${isFuture ? '(Est.)' : '(Past)'}`,
            url: "https://atcoder.jp/",
            start_time: d.toISOString(),
            end_time: new Date(d.getTime() + 6000 * 1000).toISOString(),
            duration: "6000",
            site: "AtCoder",
            in_24_hours: (d.getTime() - now.getTime()) < 86400000 && isFuture ? "Yes" : "No",
            status: isFuture ? "BEFORE" : "FINISHED"
        });
    }
    return contests;
}

function generateStaticCodeChef(): Contest[] {
    const contests: Contest[] = [];
    const now = new Date();

    const nextWed = new Date(now);
    nextWed.setDate(now.getDate() + (3 - now.getDay() + 7) % 7);
    nextWed.setUTCHours(14, 30, 0, 0);

    // Generate 4 Past + 4 Future
    for (let i = -4; i < 4; i++) {
        const d = new Date(nextWed);
        d.setDate(d.getDate() + (i * 7));
        const isFuture = d > now;

        contests.push({
            name: `CodeChef Starters ${isFuture ? '(Est.)' : '(Past)'}`,
            url: "https://www.codechef.com/",
            start_time: d.toISOString(),
            end_time: new Date(d.getTime() + 7200 * 1000).toISOString(),
            duration: "7200",
            site: "CodeChef",
            in_24_hours: (d.getTime() - now.getTime()) < 86400000 && isFuture ? "Yes" : "No",
            status: isFuture ? "BEFORE" : "FINISHED"
        });
    }
    return contests;
}

export async function getUpcomingContests() {
    let contests: Contest[] = [];

    // NOTE: Kontests.net ONLY returns UPCOMING. 
    // Since user wants HISTORY, we MUST use our Direct/Static logic.
    // We will SKIP the aggregator for now to ensure consistency of history.

    console.warn("[Contest API] Fetching History + Upcoming using Direct APIs.");

    const [cf, lc] = await Promise.all([fetchCodeforces(), fetchLeetCode()]);
    const ac = generateStaticAtCoder();
    const cc = generateStaticCodeChef();

    contests = [...cf, ...lc, ...ac, ...cc];

    // Mock if completely empty (emergency)
    if (contests.length === 0) {
        return [
            { name: "Codeforces Round 1000 (Div 2) [MOCK]", url: "https://codeforces.com", start_time: new Date(Date.now() + 86400000).toISOString(), end_time: new Date(Date.now() + 93600000).toISOString(), duration: "7200", site: "Codeforces", in_24_hours: "No", status: "BEFORE" },
        ];
    }

    return contests.sort((a, b) => new Date(a.start_time).getTime() - new Date(b.start_time).getTime());
}
