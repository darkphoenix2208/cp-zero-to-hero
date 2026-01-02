import Link from 'next/link';
import { Github, Twitter, Linkedin, Code2 } from 'lucide-react';

export function Footer() {
    return (
        <footer className="w-full bg-zinc-950 border-t border-zinc-800 py-12 mt-24">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* Brand */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-white font-bold text-xl">
                        <Code2 className="text-blue-500" /> CodeForge
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        The ultimate gamified platform for competitive programmers.
                        Level up your skills, fight boss battles, and master algorithms.
                    </p>
                    <div className="text-zinc-500 text-xs">
                        &copy; {new Date().getFullYear()} CodeForge. All rights reserved.
                    </div>
                </div>

                {/* Docs */}
                <div className="space-y-4">
                    <h3 className="text-white font-semibold">Documentation</h3>
                    <ul className="space-y-2 text-sm text-zinc-400">
                        <li><Link href="/guide" className="hover:text-amber-400 transition-colors">Feature Manual</Link></li>
                        <li><Link href="/guide" className="hover:text-amber-400 transition-colors">User Guide</Link></li>
                    </ul>
                </div>

                {/* Platform */}
                <div className="space-y-4">
                    <h3 className="text-white font-semibold">Platform</h3>
                    <ul className="space-y-2 text-sm text-zinc-400">
                        <li><Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
                        <li><Link href="/login" className="hover:text-white transition-colors">Login / Sign Up</Link></li>
                    </ul>
                </div>

                {/* Socials */}
                <div className="space-y-4">
                    <h3 className="text-white font-semibold">Connect</h3>
                    <div className="flex gap-4">
                        <a href="https://github.com/darkphoenix2208/cp-zero-to-hero" target="_blank" className="flex items-center justify-center w-10 h-10 bg-zinc-900 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors shrink-0">
                            <Github size={20} />
                        </a>
                        <a href="#" className="flex items-center justify-center w-10 h-10 bg-zinc-900 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors shrink-0">
                            <Twitter size={20} />
                        </a>
                        <a href="#" className="flex items-center justify-center w-10 h-10 bg-zinc-900 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors shrink-0">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
