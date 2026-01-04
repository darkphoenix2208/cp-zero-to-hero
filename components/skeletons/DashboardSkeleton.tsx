export function DashboardSkeleton() {
    return (
        <div className="space-y-8 animate-pulse">
            {/* Header Skeleton */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
                <div className="w-24 h-24 rounded-full bg-zinc-800" />
                <div className="flex-1 text-center md:text-left space-y-3">
                    <div className="h-8 w-48 bg-zinc-800 rounded mx-auto md:mx-0" />
                    <div className="h-4 w-32 bg-zinc-800/50 rounded mx-auto md:mx-0" />
                </div>
                <div className="w-20 h-9 bg-zinc-800 rounded-lg md:ml-auto" />
            </div>

            {/* Grid Skeleton */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Col (Arcade) */}
                <div className="lg:col-span-8 space-y-6">
                    <div className="w-24 h-4 bg-zinc-800 rounded mb-2" />

                    {/* Feature Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[...Array(9)].map((_, i) => (
                            <div key={i} className="h-32 bg-zinc-900/40 rounded-2xl border border-zinc-800/50" />
                        ))}
                    </div>

                    {/* Heatmap Skeleton */}
                    <div className="bg-zinc-900/40 p-6 rounded-2xl border border-zinc-800/50 mt-6 h-56" />
                </div>

                {/* Right Col (Mission Control) */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="w-32 h-4 bg-zinc-800 rounded mb-2" />

                    {/* Mission Card */}
                    <div className="h-56 bg-zinc-800/20 rounded-2xl border border-zinc-800" />

                    {/* Stats */}
                    <div className="h-40 bg-zinc-900/40 rounded-2xl border border-zinc-800" />

                    {/* Rivals */}
                    <div className="h-32 bg-zinc-900/40 rounded-2xl border border-zinc-800" />
                </div>
            </div>
        </div>
    );
}
