'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import {
    LayoutDashboard,
    Zap,
    Brain,
    Sparkles,
    Network,
    BookOpen,
    Moon,
    Sun,
    LogOut,
    Menu,
    X,
    User,
    Mic,
    Calendar,
    Map as MapIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();
    const { data: session, status } = useSession();
    const [mounted, setMounted] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const mainNavItems = [
        { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
        { name: 'Skills', href: '/skills', icon: Network },
        { name: 'Flashback', href: '/flashback', icon: Brain },
        { name: 'Dojo', href: '/senpai', icon: Sparkles, shortName: 'Dojo' },
    ];

    const arcadeNavItems = [
        { name: 'Racer', href: '/racer', icon: Zap },
        { name: 'Studio', href: '/studio', icon: Network },
        { name: 'Interview', href: '/interview', icon: Mic },
        { name: 'Contests', href: '/contests', icon: Calendar },
        { name: 'Stress', href: '/stress', icon: Zap },
        { name: 'Blogs', href: '/blog-hunter', icon: BookOpen },
    ];

    const guideItem = { name: 'Guide', href: '/guide', icon: MapIcon };

    // Only show full menu if authenticated
    const allNavItems = status === 'authenticated'
        ? [...mainNavItems, ...arcadeNavItems, guideItem]
        : [guideItem];

    const isActive = (path: string) => pathname === path;

    // Determine display name (Handle > Google Name > "User")
    const displayName = (session?.user as any)?.codeforcesHandle || session?.user?.name || "User";
    const userImage = session?.user?.image;

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent hover:opacity-80 transition">
                        CP-ZeroToHero
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {status === 'authenticated' && (
                            <>
                                {mainNavItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={cn(
                                            "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                                            isActive(item.href)
                                                ? "bg-primary/10 text-primary"
                                                : "text-zinc-500 hover:text-foreground hover:bg-zinc-800/50"
                                        )}
                                    >
                                        <item.icon size={16} />
                                        <span className="hidden lg:inline">{item.name}</span>
                                        <span className="lg:hidden">{item.shortName || item.name}</span>
                                    </Link>
                                ))}

                                {/* Arcade Dropdown */}
                                <div className="relative group">
                                    <button className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-zinc-500 hover:text-foreground hover:bg-zinc-800/50 transition-colors">
                                        <Sparkles size={16} /> Arcade
                                    </button>
                                    <div className="absolute top-full left-0 mt-2 w-48 bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl overflow-hidden py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                                        {arcadeNavItems.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className={cn(
                                                    "flex items-center gap-3 px-4 py-3 text-sm transition-colors hover:bg-zinc-800",
                                                    isActive(item.href) ? "text-primary" : "text-zinc-400"
                                                )}
                                            >
                                                <item.icon size={16} />
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}

                        <Link
                            href="/guide"
                            className={cn(
                                "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                                isActive('/guide') ? "bg-primary/10 text-primary" : "text-zinc-500 hover:text-foreground hover:bg-zinc-800/50"
                            )}
                        >
                            <MapIcon size={16} /> Guide
                        </Link>
                    </div>

                    {/* Right Side: Theme & User */}
                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2 rounded-md hover:bg-zinc-800 transition text-zinc-500 hover:text-foreground"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                        </button>

                        {status === 'authenticated' ? (
                            <div className="relative"
                                onMouseEnter={() => setUserMenuOpen(true)}
                                onMouseLeave={() => setUserMenuOpen(false)}
                            >
                                <button className="flex items-center gap-2 pl-4 border-l border-zinc-800 hover:opacity-80 transition">
                                    <span className="text-sm font-bold text-foreground">{displayName}</span>
                                    <div className="w-8 h-8 rounded-full bg-zinc-800 overflow-hidden border border-zinc-700">
                                        {userImage ? (
                                            <img src={userImage} alt="User" className="w-full h-full object-cover" />
                                        ) : (
                                            <User className="w-full h-full p-1 text-zinc-500" />
                                        )}
                                    </div>
                                </button>

                                {/* Dropdown Menu */}
                                <AnimatePresence>
                                    {userMenuOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.15 }}
                                            className="absolute right-0 top-full mt-2 w-48 bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl overflow-hidden py-1 z-50"
                                        >
                                            <div className="px-4 py-2 border-b border-zinc-800">
                                                <p className="text-xs text-zinc-500">Signed in as</p>
                                                <p className="text-sm font-bold text-white truncate">{session?.user?.email}</p>
                                            </div>

                                            <button
                                                onClick={() => signOut({ callbackUrl: '/' })}
                                                className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 flex items-center gap-2 transition"
                                            >
                                                <LogOut size={16} />
                                                Log Out
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <Link href="/login" className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg text-sm font-medium transition shadow-lg shadow-zinc-900/20">
                                Login
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-2">
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2 text-zinc-500"
                        >
                            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="p-2 text-zinc-500 hover:text-foreground"
                        >
                            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden border-t border-zinc-800 bg-background/95 backdrop-blur-xl px-4 py-4 space-y-2 overflow-hidden"
                    >
                        {allNavItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className={cn(
                                    "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                                    isActive(item.href)
                                        ? "bg-primary/10 text-primary"
                                        : "text-zinc-500 hover:text-foreground hover:bg-zinc-800/50"
                                )}
                            >
                                <item.icon size={18} />
                                {item.name}
                            </Link>
                        ))}
                        {status === 'authenticated' ? (
                            <button
                                onClick={() => signOut()}
                                className="flex w-full items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-500 hover:bg-red-500/10 transition-colors"
                            >
                                <LogOut size={18} />
                                Logout ({displayName})
                            </button>
                        ) : (
                            <Link
                                href="/login"
                                onClick={() => setMobileOpen(false)}
                                className="flex w-full items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-white bg-zinc-800 hover:bg-zinc-700 transition-colors"
                            >
                                <User size={18} />
                                Login
                            </Link>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
