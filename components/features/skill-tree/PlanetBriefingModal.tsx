"use client";

import { useState } from "react";
// import { Dialog, DialogContent } from "@/components/ui/dialog"; // Removed dependency
import { motion, AnimatePresence } from "framer-motion";
import { PlanetNode, getSectorColor } from "@/lib/galaxy";
import { X, Play, FileText, CheckCircle2, Lock, ExternalLink, Trophy, Flame } from "lucide-react";
import Editor from "@monaco-editor/react";
import { cn } from "@/lib/utils";

interface PlanetBriefingModalProps {
    planet: PlanetNode | null;
    isOpen: boolean;
    onClose: () => void;
}

type Tab = 'INTEL' | 'TRAINING' | 'ASCENSION';

export function PlanetBriefingModal({ planet, isOpen, onClose }: PlanetBriefingModalProps) {
    const [activeTab, setActiveTab] = useState<Tab>('INTEL');
    const [solvedCount, setSolvedCount] = useState(2); // Mock: 2 out of 6 solved

    if (!planet) return null;

    const totalTraining = planet.colonize_mission.easy_problems.length + planet.colonize_mission.medium_problems.length;
    const progress = (solvedCount / totalTraining) * 100;
    const isAscensionUnlocked = solvedCount === totalTraining; // Strictly locked for now

    const sectorGradient = getSectorColor(planet.sector);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        className="bg-zinc-950 border border-zinc-800 w-full max-w-5xl h-[85vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col relative z-10"
                    >
                        {/* Background ambient glow */}
                        <div className={cn("absolute top-0 left-0 w-full h-2 bg-gradient-to-r", sectorGradient)} />
                        <div className={cn("absolute -top-20 -right-20 w-96 h-96 rounded-full blur-[100px] opacity-20 pointer-events-none bg-gradient-to-br", sectorGradient)} />

                        {/* Header */}
                        <div className="p-8 flex justify-between items-start z-10">
                            <div>
                                <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-wider mb-2 text-transparent bg-clip-text bg-gradient-to-r", sectorGradient)}>
                                    Sector {planet.sector} // Node {planet.id}
                                </div>
                                <h2 className="text-4xl font-extrabold text-white tracking-tight mb-2">{planet.title}</h2>
                                <p className="text-zinc-400 text-lg max-w-2xl">{planet.description}</p>
                            </div>
                            <button onClick={onClose} className="p-2 hover:bg-zinc-900 rounded-full text-zinc-500 hover:text-white transition">
                                <X size={24} />
                            </button>
                        </div>

                        {/* Tabs */}
                        <div className="flex px-8 gap-8 border-b border-zinc-800/50 z-10">
                            <TabButton active={activeTab === 'INTEL'} onClick={() => setActiveTab('INTEL')} icon={<FileText size={18} />} label="Mission Intel" />
                            <TabButton active={activeTab === 'TRAINING'} onClick={() => setActiveTab('TRAINING')} icon={<Flame size={18} />} label="Colonization" badge={`${solvedCount}/${totalTraining}`} />
                            <TabButton active={activeTab === 'ASCENSION'} onClick={() => setActiveTab('ASCENSION')} icon={<Trophy size={18} />} label="Ascension" locked={!isAscensionUnlocked} />
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 overflow-y-auto p-8 z-10 scrollbar-hide">
                            <AnimatePresence mode="wait">
                                {activeTab === 'INTEL' && (
                                    <motion.div
                                        key="intel"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full"
                                    >
                                        {/* Left: Video */}
                                        <div className="space-y-4">
                                            <div className="aspect-video rounded-2xl overflow-hidden border border-zinc-800 shadow-xl bg-black">
                                                <iframe
                                                    width="100%"
                                                    height="100%"
                                                    src={planet.scout_mission.video_url}
                                                    title="YouTube video player"
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                />
                                            </div>
                                            <a
                                                href={planet.scout_mission.article_url}
                                                target="_blank"
                                                className="flex items-center justify-between p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-indigo-500/50 hover:bg-zinc-800 transition group"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400"><FileText size={20} /></div>
                                                    <div>
                                                        <div className="font-bold text-white group-hover:text-blue-400 transition">Read Field Manual</div>
                                                        <div className="text-xs text-zinc-500">CP-Algorithms / Codeforces</div>
                                                    </div>
                                                </div>
                                                <ExternalLink size={16} className="text-zinc-600 group-hover:text-white" />
                                            </a>
                                        </div>

                                        {/* Right: Cheat Sheet */}
                                        <div className="flex flex-col h-full bg-[#1e1e1e] rounded-2xl border border-zinc-800 overflow-hidden">
                                            <div className="bg-zinc-900 px-4 py-3 border-b border-zinc-800 flex justify-between items-center">
                                                <span className="text-xs font-mono text-zinc-500 font-bold uppercase">Standard Issue Template</span>
                                                <span className="text-xs text-zinc-600">C++17</span>
                                            </div>
                                            <div className="flex-1">
                                                <Editor
                                                    height="100%"
                                                    defaultLanguage="cpp"
                                                    value={planet.scout_mission.cheat_sheet_snippet}
                                                    theme="vs-dark"
                                                    options={{
                                                        readOnly: true,
                                                        minimap: { enabled: false },
                                                        scrollBeyondLastLine: false,
                                                        fontSize: 13,
                                                        fontFamily: "'JetBrains Mono', monospace"
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {activeTab === 'TRAINING' && (
                                    <motion.div
                                        key="training"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="max-w-4xl mx-auto space-y-8"
                                    >
                                        {/* Progress Header */}
                                        <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 flex items-center gap-6">
                                            <div className="relative w-20 h-20">
                                                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                                                    <path className="text-zinc-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                                                    <path className="text-emerald-500" strokeDasharray={`${progress}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                                                </svg>
                                                <div className="absolute inset-0 flex items-center justify-center font-bold text-sm">{Math.round(progress)}%</div>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-1">Colony Status</h3>
                                                <p className="text-zinc-400 text-sm">Eliminate all threats to unlock the Sector Boss.</p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <ProblemList
                                                title="Skirmishes (Level 1)"
                                                problems={planet.colonize_mission.easy_problems}
                                                idsAreStrings={true}
                                                baseColor="text-green-400"
                                                bgColor="bg-green-500/10"
                                            />
                                            <ProblemList
                                                title="Warzones (Level 2)"
                                                problems={planet.colonize_mission.medium_problems}
                                                idsAreStrings={true}
                                                baseColor="text-yellow-400"
                                                bgColor="bg-yellow-500/10"
                                            />
                                        </div>
                                    </motion.div>
                                )}

                                {activeTab === 'ASCENSION' && (
                                    <motion.div
                                        key="ascension"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="h-full flex flex-col items-center justify-center text-center space-y-8"
                                    >
                                        {isAscensionUnlocked ? (
                                            <>
                                                <div className="w-32 h-32 rounded-full bg-red-500/10 border-4 border-red-500 flex items-center justify-center shadow-[0_0_50px_rgba(239,68,68,0.3)] animate-pulse">
                                                    <Flame size={64} className="text-red-500" />
                                                </div>
                                                <div className="space-y-4 max-w-lg">
                                                    <h2 className="text-4xl font-extrabold text-white">THE BOSS AWAITS</h2>
                                                    <p className="text-zinc-400 text-lg">
                                                        You have <b>{planet.ascension_mission.time_limit_minutes} minutes</b> to solve <span className="font-mono text-red-400 font-bold">{planet.ascension_mission.boss_problem_id}</span>.
                                                        <br />Usually requires combining multiple concepts.
                                                    </p>
                                                </div>
                                                <button className="px-10 py-4 bg-red-600 hover:bg-red-500 text-white font-bold text-lg rounded-full transition shadow-xl shadow-red-900/30 flex items-center gap-3">
                                                    Start Boss Fight <Play fill="currentColor" />
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <div className="w-32 h-32 rounded-full bg-zinc-900 border-4 border-zinc-800 flex items-center justify-center">
                                                    <Lock size={48} className="text-zinc-600" />
                                                </div>
                                                <div>
                                                    <h2 className="text-2xl font-bold text-zinc-500">BOSS LOCKED</h2>
                                                    <p className="text-zinc-600 mt-2">Complete 100% of colonization missions first.</p>
                                                </div>
                                            </>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

function TabButton({ active, onClick, icon, label, badge, locked }: any) {
    return (
        <button
            onClick={onClick}
            disabled={locked}
            className={cn(
                "relative pb-4 px-2 flex items-center gap-2 text-sm font-bold uppercase tracking-wide transition-colors outline-none",
                active ? "text-white" : "text-zinc-500 hover:text-zinc-300",
                locked && "opacity-50 cursor-not-allowed"
            )}
        >
            {locked ? <Lock size={14} /> : icon}
            {label}
            {badge && <span className="ml-1 px-1.5 py-0.5 rounded-full bg-zinc-800 text-zinc-400 text-[10px]">{badge}</span>}
            {active && (
                <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-1 bg-white rounded-t-full shadow-[0_-2px_10px_rgba(255,255,255,0.5)]" />
            )}
        </button>
    )
}

function ProblemList({ title, problems, baseColor, bgColor }: any) {
    return (
        <div className="space-y-4">
            <h4 className={cn("text-xs font-bold uppercase tracking-wider flex items-center gap-2", baseColor)}>
                <div className={cn("w-2 h-2 rounded-full bg-current")} /> {title} | 3 Targets
            </h4>
            <div className="space-y-3">
                {problems.map((p: string, i: number) => (
                    <div key={i} className="group flex items-center justify-between p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-700 transition">
                        <div className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-xs font-mono font-bold text-zinc-500">
                                {i + 1}
                            </div>
                            <div>
                                <div className="font-bold text-white text-sm">Sector Threat {p}</div>
                                <div className="text-xs text-zinc-500">Codeforces</div>
                            </div>
                        </div>
                        <a
                            href={`https://codeforces.com/problemset/problem/${p.replace(/([0-9]+)([A-Z]+)/, '$1/$2')}`} // Quick hack for CF link
                            target="_blank"
                            className="px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-xs font-bold text-zinc-400 hover:text-white hover:bg-zinc-800 transition"
                        >
                            Solve
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}
