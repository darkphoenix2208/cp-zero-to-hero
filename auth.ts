
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/db"

export const { handlers, auth, signIn, signOut } = NextAuth({
    debug: true,
    adapter: PrismaAdapter(prisma),
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),
    ],
    callbacks: {
        async session({ session, user }) {
            try {
                if (session.user) {
                    // Fetch extended user details (handle, etc)
                    const dbUser = await prisma.user.findUnique({
                        where: { id: user.id },
                        // select: { codeforcesHandle: true, rank: true, rating: true } 
                        // Removing select temporarily to debug if fields exist
                    });

                    if (dbUser) {
                        // Inject into session
                        (session.user as any).codeforcesHandle = (dbUser as any).codeforcesHandle;
                        (session.user as any).rank = dbUser.rank;
                        (session.user as any).rating = dbUser.rating;
                        (session.user as any).id = user.id;
                    }
                }
            } catch (e) {
                console.error("SESSION CALLBACK ERROR:", e);
            }
            return session;
        },
    },
    pages: {
        signIn: '/login', // Custom login page
    }
})
