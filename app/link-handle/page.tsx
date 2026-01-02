
import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { LinkHandleClient } from "./client"

export default async function LinkHandlePage() {
    const session = await auth()

    if (!session || !session.user) {
        redirect("/login")
    }

    if ((session.user as any).codeforcesHandle) {
        redirect("/dashboard")
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-950 p-4">
            <LinkHandleClient user={session.user} />
        </div>
    )
}
