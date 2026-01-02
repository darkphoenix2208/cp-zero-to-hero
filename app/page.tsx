import Link from 'next/link';
import { ArrowRight, Code, Trophy, Zap, ChevronRight } from 'lucide-react';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-12">
      <div className="space-y-6 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          The Ultimate Codeforces Companion
        </div>

        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
          Master Competitive Programming.
        </h1>

        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
          CP-ZeroToHero eliminates the confusion. Get a guided roadmap, curated resources, and real-time progress tracking—designed for results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link
            href="/dashboard"
            className="group px-8 py-4 bg-white text-zinc-950 font-bold rounded-full transition hover:bg-zinc-200 flex items-center justify-center gap-2"
          >
            Start Your Journey <ArrowRight className="group-hover:translate-x-1 transition" />
          </Link>
          <a
            href="https://codeforces.com"
            target="_blank"
            className="px-8 py-4 bg-zinc-900 text-white font-semibold rounded-full border border-zinc-800 hover:bg-zinc-800 transition"
          >
            Visit Codeforces
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl text-left">
        <Link href="/roadmap" className="block h-full">
          <FeatureCard
            icon={<Zap className="text-yellow-400" />}
            title="Smart Roadmap"
            desc="Automated problem sets that adapt to your rating. Unlock levels as you improve."
          />
        </Link>
        <Link href="/resources" className="block h-full">
          <FeatureCard
            icon={<Code className="text-blue-400" />}
            title="Curated Knowledge"
            desc="No more searching. Access the best tutorials, blogs, and videos instantly."
          />
        </Link>
        <Link href="/contests" className="block h-full">
          <FeatureCard
            icon={<Trophy className="text-green-400" />}
            title="Virtual Contests"
            desc="Practice past Div. 3 contests with a simulated timer."
          />
        </Link>
      </div>

      <Footer />
    </div>
  );
}

function FeatureCard({ icon, title, desc }: any) {
  return (
    <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-900 transition">
      <div className="w-12 h-12 bg-zinc-950 rounded-lg flex items-center justify-center border border-zinc-800 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-zinc-400 leading-relaxed">{desc}</p>
    </div>
  )
}
