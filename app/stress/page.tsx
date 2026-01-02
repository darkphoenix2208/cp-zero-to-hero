import { StressTester } from '@/components/features/StressTester';
import { ArrowLeft, Zap } from 'lucide-react';
import Link from 'next/link';

export default function StressManagerPage() {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-yellow-500/30 p-8">
            <div className="max-w-6xl mx-auto space-y-8">
                <Link href="/dashboard" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition group">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition" /> Back to Dashboard
                </Link>

                <div className="mb-8">
                    <h1 className="text-4xl font-extrabold text-white mb-2 flex items-center gap-3">
                        <Zap className="text-yellow-500" fill="currentColor" /> Stress Tester
                    </h1>
                    <p className="text-zinc-500 text-lg">
                        Execute your logic against a brute-force solution to find counter-examples.
                    </p>
                </div>

                <StressTester />
            </div>
        </div>
    );
}
