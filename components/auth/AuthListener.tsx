"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";

export default function AuthListener() {
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === "authenticated" && session?.user?.email) {
            console.log("AuthListener: User authenticated via NextAuth", session.user.email);

            // Check if we already alerted for this specific user ID/email
            const userId = (session.user as any).id || session.user.email;
            const storageKey = `login_alert_${userId}`;

            if (sessionStorage.getItem(storageKey)) {
                return;
            }

            console.log("🔔 Triggering Login Alert...");
            sessionStorage.setItem(storageKey, "true");

            fetch("/api/auth/notify-login", { method: "POST" })
                .then(res => res.json())
                .then(data => console.log("Alert Response:", data))
                .catch(err => console.error("Alert Error:", err));

        } else if (status === "unauthenticated") {
            // Clear storage on logout so it triggers again next time
            Object.keys(sessionStorage).forEach(key => {
                if (key.startsWith('login_alert_')) {
                    sessionStorage.removeItem(key);
                }
            });
        }
    }, [session, status]);

    return null;
}
