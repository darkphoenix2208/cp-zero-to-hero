import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { DashboardClient } from './DashboardClient';
import { prisma } from "@/lib/db";
import { getSubmissions, getProblemsByRating, getRivals } from '@/app/actions';
import { Suspense } from "react";
import { DashboardSkeleton } from "@/components/skeletons/DashboardSkeleton";

export default async function DashboardPage() {
    const session = await auth();

    if (!session || !session.user) {
        redirect("/login");
    }

    const user = await prisma.user.findUnique({
        where: { id: session.user.id },
        include: { stats: true }
    });

    if (!user || !user.codeforcesHandle) {
        redirect("/link-handle");
    }

    // Parallel Server-Side Fetching
    const currentRating = user.rating || 800;
    const targetRating = Math.max(800, Math.ceil((currentRating + 100) / 100) * 100);

    const [submissions, problems, pinnedRivals] = await Promise.all([
        getSubmissions(user.codeforcesHandle),
        getProblemsByRating(targetRating),
        getRivals(user.codeforcesHandle)
    ]);

    const recommendation = problems.length > 0 ? problems[0] : null;

    return (
        <Suspense fallback={<DashboardSkeleton />}>
            <DashboardClient
                user={user}
                initialSubmissions={submissions}
                recommendation={recommendation}
                initialRivals={pinnedRivals}
            />
        </Suspense>
    );
}
