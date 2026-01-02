import VisualizerCanvas from '@/components/features/algo-studio/VisualizerCanvas';
import { Sparkles } from 'lucide-react';

export default function AlgorithmStudioPage() {
    return (
        <div className="min-h-screen bg-black text-white p-6 font-sans">
            <header className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent flex items-center gap-3">
                        <Sparkles className="text-blue-400" /> Algorithm Studio
                    </h1>
                    <p className="text-zinc-500 text-sm mt-1">
                        <b>"Graph-O-Vision"</b> • Interactive Data Structure Visualization
                    </p>
                </div>
                <div className="flex gap-4">
                    <a href="/dashboard" className="text-zinc-500 hover:text-white px-4 py-2 text-sm font-bold transition">
                        Back to Dashboard
                    </a>
                </div>
            </header>

            <VisualizerCanvas />
        </div>
    );
}
