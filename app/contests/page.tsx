
import { getUpcomingContests } from '@/lib/contests';
import { ContestList } from './ContestList';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contest Radar | CP-ZeroToHero',
    description: 'Track upcoming competitive programming contests from Codeforces, LeetCode, AtCoder, and CodeChef.',
};

export default async function ContestsPage() {
    const contests = await getUpcomingContests();

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-4xl font-black text-white tracking-tight mb-2">
                        Contest <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Radar</span>
                    </h1>
                    <p className="text-zinc-400 max-w-2xl">
                        Never miss a rating update. Aggregated schedule for all major CP platforms.
                    </p>
                </div>

                {/* Stats or Decor */}
                <div className="hidden md:flex gap-8">
                    <div className="text-center">
                        <div className="text-2xl font-bold text-white">{contests.length}</div>
                        <div className="text-xs text-zinc-500 uppercase tracking-widest">Upcoming</div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <ContestList initialContests={contests} />

            <div className="text-center pt-10 text-zinc-600 text-xs">
                Data provided by <a href="https://kontests.net" target="_blank" className="underline hover:text-zinc-400">kontests.net</a> API.
            </div>
        </div>
    );
}
