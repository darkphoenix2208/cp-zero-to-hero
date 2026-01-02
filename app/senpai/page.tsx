import { AiSenpai } from '@/components/features/AiSenpai';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function SenpaiPage() {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30 p-8">
            <div className="max-w-5xl mx-auto space-y-8">
                <Link href="/dashboard" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition group">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition" /> Back to Dashboard
                </Link>

                <div className="mb-8">
                    <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">The Dojo</h1>
                    <p className="text-zinc-500 text-lg">Master your specific weaknesses with AI assistance.</p>
                </div>
                <AiSenpai />
            </div>
        </div>
    );
}
