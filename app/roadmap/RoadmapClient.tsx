'use client'
import { useState, useEffect } from 'react';
import { getProblemsByRating, getSubmissions } from '@/app/actions';
import { CheckCircle, Lock, Play, RefreshCw, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function RoadmapClient() {
  const [handle, setHandle] = useState('');
  const [activeTier, setActiveTier] = useState<number>(800);
  const [problems, setProblems] = useState<any[]>([]);
  const [solvedIds, setSolvedIds] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(false);
  const [tiers, setTiers] = useState<number[]>([
    800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000
  ]);
  const [selectedTag, setSelectedTag] = useState('');
  const [solvedByRating, setSolvedByRating] = useState<Map<number, number>>(new Map());

  const TOPICS = [
    { label: "All Topics", value: "" },
    { label: "Math", value: "math" },
    { label: "Greedy", value: "greedy" },
    { label: "Dynamic Programming", value: "dp" },
    { label: "Graphs", value: "graphs" },
    { label: "Data Structures", value: "data structures" },
    { label: "Constructive", value: "constructive algorithms" },
    { label: "Strings", value: "strings" },
  ];

  useEffect(() => {
    const h = localStorage.getItem('cp-handle');
    if (h) {
      setHandle(h);
      loadTier(h, activeTier);
    }
  }, [selectedTag]); // Reload when tag changes

  const loadTier = async (userHandle: string, tier: number) => {
    setLoading(true);
    setActiveTier(tier);

    // 1. Fetch User Solves
    const submissions = await getSubmissions(userHandle);
    const solved = new Set<string>();
    const ratingCount = new Map<number, number>();

    submissions.forEach((s: any) => {
      if (s.verdict === 'OK') {
        solved.add(`${s.problem.contestId}${s.problem.index}`);
        if (s.problem.rating) {
          ratingCount.set(s.problem.rating, (ratingCount.get(s.problem.rating) || 0) + 1);
        }
      }
    });

    setSolvedIds(solved);
    setSolvedByRating(ratingCount);

    // 2. Fetch Problems
    const probs = await getProblemsByRating(tier, selectedTag);
    setProblems(probs);
    setLoading(false);
  };

  const getProgress = (tier: number) => {
    return solvedIds.size > 0 ? Math.min(100, (solvedIds.size % 20) * 5) : 0;
  };

  return (
    <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
      <div className="flex flex-col md:flex-row justify-between items-end border-b border-zinc-800 pb-6">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            Smart Roadmap
          </h1>
          <p className="text-zinc-400 mt-2">Master rating {activeTier} to unlock {activeTier + 100}.</p>

          {/* Topic Filter */}
          <div className="flex gap-2 mt-4 flex-wrap">
            {TOPICS.map(topic => (
              <button
                key={topic.value}
                onClick={() => { setSelectedTag(topic.value); }}
                className={cn(
                  "px-3 py-1 text-xs rounded-full border transition",
                  selectedTag === topic.value
                    ? "bg-blue-600 border-blue-500 text-white"
                    : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700"
                )}
              >
                {topic.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0 flex-wrap max-w-md justify-end">
          {tiers.map(t => {
            // Unlock rule: To unlock Tier X, you must solve at least 10 problems of Tier X-100 (or have rating > X-200)
            // Exception: 800 is always unlocked.
            const neededForPrev = t - 100;
            const solvedCount = solvedByRating.get(neededForPrev) || 0;
            const isLocked = t > 800 && solvedCount < 5; // Simplified: Solve 5 probelms of prev tier to unlock next
            return (
              <button
                key={t}
                onClick={() => !isLocked && loadTier(handle, t)}
                className={cn(
                  "px-4 py-2 rounded-lg font-mono text-sm border transition flex items-center gap-2",
                  activeTier === t ? "bg-green-600/20 border-green-600 text-green-400" :
                    isLocked ? "bg-zinc-900 border-zinc-800 text-zinc-600 cursor-not-allowed" : "bg-zinc-900 border-zinc-700 hover:bg-zinc-800"
                )}
              >
                {isLocked ? <Lock size={12} /> : <Layers size={12} />}
                {t}
              </button>
            )
          })}
        </div>
      </div>

      {loading ? (
        <div className="h-64 flex items-center justify-center">
          <RefreshCw className="animate-spin text-green-500" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((p, idx) => {
            const id = `${p.contestId}${p.index}`;
            const isSolved = solvedIds.has(id);
            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className={cn(
                  "p-4 rounded-xl border group relative overflow-hidden",
                  isSolved ? "bg-green-950/20 border-green-900/50 opacity-60" : "bg-zinc-900 border-zinc-800 hover:border-green-500/50"
                )}
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="font-bold text-lg text-zinc-200">{p.name}</span>
                  {isSolved && <CheckCircle className="text-green-500" size={20} />}
                </div>

                <div className="flex gap-2 flex-wrap mb-4">
                  {p.tags.slice(0, 3).map((tag: string) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded bg-zinc-950 text-zinc-500 border border-zinc-800">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={`https://codeforces.com/problemset/problem/${p.contestId}/${p.index}`}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm text-green-400 font-medium hover:underline"
                >
                  Solve Problem <Play size={12} />
                </a>
              </motion.div>
            )
          })}
        </div>
      )}
    </div>
  );
}
