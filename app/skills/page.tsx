'use client';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { SkillTreeWrapper } from '@/components/features/skill-tree/SkillTreeGraph';

export default function SkillsPage() {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-pink-500/30 p-8">
            <div className="max-w-6xl mx-auto space-y-8 h-full flex flex-col">
                <div className="flex items-center justify-between">
                    <div>
                        <Link href="/dashboard" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition group mb-4">
                            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition" /> Back to Dashboard
                        </Link>
                        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            RPG Skill Tree
                        </h1>
                        <p className="text-zinc-500">Master techniques to unlock advanced algorithms.</p>
                    </div>
                </div>

                <div className="flex-1">
                    <SkillTreeWrapper />
                </div>
            </div>
        </div>
    );
}
