import { QuestionSelector } from "@/components/features/QuestionSelector";

export default function SelectorPage() {
    return (
        <div className="min-h-screen bg-black text-white py-8">
            <div className="w-[95%] mx-auto mb-8 text-center">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent mb-4">
                    AI Question Coach
                </h1>
                <p className="text-zinc-400 text-lg">
                    Find problems by meaning, not just tags. Checks your win probability instantly.
                </p>
            </div>

            <QuestionSelector />
        </div>
    );
}
