
'use client';
import { useEffect } from 'react';
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';
import { useSearchParams, useRouter } from 'next/navigation';

export function DashboardTour() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const shouldRunTour = searchParams.get('tour') === 'true';

    useEffect(() => {
        if (shouldRunTour) {
            const driverObj = driver({
                showProgress: true,
                animate: true,
                steps: [
                    {
                        element: 'nav',
                        popover: {
                            title: 'The Command Center',
                            description: 'Navigate between the Dojo, RPG Skills, and Flashback limits from here.',
                            side: "bottom",
                            align: 'start'
                        }
                    },
                    {
                        element: 'a[href="/senpai"]',
                        popover: {
                            title: 'The Dojo',
                            description: 'Stuck on a problem? Visit Ai Senpai to get hints or verify your logic before submitting.',
                            side: "bottom"
                        }
                    },
                    {
                        element: 'a[href="/flashback"]',
                        popover: {
                            title: 'Flashback Ritual',
                            description: 'We track what you forget. Visit this daily to keep your streak alive.',
                            side: "bottom"
                        }
                    },
                    {
                        element: '.react-flow__pane', // Generic target for Skill Tree canvas
                        popover: {
                            title: 'The Skill Tree',
                            description: 'Your main progression path. Click on unlocked planets to start missions.',
                            side: "top",
                            align: 'center'
                        }
                    }
                ],
                onDestroyStarted: () => {
                    // Remove query param without reload
                    router.replace('/dashboard');
                    driverObj.destroy();
                }
            });

            driverObj.drive();
        }
    }, [shouldRunTour]);

    return null; // Logic only component
}
