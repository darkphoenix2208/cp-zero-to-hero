import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { DashboardClient } from './DashboardClient';
import { prisma } from "@/lib/db";

export default async function DashboardPage() {
    const session = await auth();

    if (!session || !session.user) {
        redirect("/login");
    }

    // Double check DB for handle, as session might be stale if just updated? 
    // Actually, session strategy usually requires a refresh, but we can just fetch user here for data consistency.
    const user = await prisma.user.findUnique({
        where: { id: session.user.id },
        include: { stats: true }
    });

    if (!user || !user.codeforcesHandle) {
        redirect("/link-handle");
    }

    // We can pass the full DB user object to the client
    // excluding sensitive fields if any (but we don't have password hashes).
    return <DashboardClient user={user} />;
}

