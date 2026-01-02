'use client';
import { Handle, Position, NodeProps } from 'reactflow';
import { motion, AnimatePresence } from 'framer-motion';
import { getIcon } from './data';
import { Lock, CheckCircle, Award } from 'lucide-react';
import { useState } from 'react';

// Custom Node Props Interface
interface SkillNodeData {
    label: string;
    iconName: string;
    xp: number; // Current XP
    xpRequired: number; // Total XP needed
    unlocked: boolean;
    mastered: boolean;
    description?: string;
}

export function SkillNode({ data, id }: NodeProps<SkillNodeData>) {
    const Icon = getIcon(data.iconName);
    const [isShaking, setIsShaking] = useState(false);

    // Calculate progress percentage
    const progress = Math.min((data.xp / data.xpRequired) * 100, 100);

    const handleClick = () => {
        if (!data.unlocked) {
            setIsShaking(true);
            setTimeout(() => setIsShaking(false), 500); // Shorter duration
            return;
        }
        // Handle selection event if needed (passed via ReactFlow context later ideally)
        console.log("Selected:", data.label);
    };

    return (
        <motion.div
            className="relative"
            animate={isShaking ? { x: [-5, 5, -5, 5, 0] } : {}}
            transition={{ duration: 0.4 }}
            onClick={handleClick}
        >
            <div
                className={`
                    w-[200px] p-4 rounded-xl border-2 transition-all duration-300 relative overflow-hidden group
                    ${data.mastered
                        ? 'bg-yellow-950/40 border-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.3)]'
                        : data.unlocked
                            ? 'bg-zinc-900 border-zinc-700 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] cursor-pointer'
                            : 'bg-zinc-950 border-zinc-800 opacity-80 cursor-not-allowed'
                    }
                `}
            >
                {/* Background Progress Fill (Subtle) */}
                {data.unlocked && !data.mastered && (
                    <div
                        className="absolute bottom-0 left-0 h-1 bg-blue-500 transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    />
                )}

                {/* Mastered Glow Effect */}
                {data.mastered && (
                    <div className="absolute inset-0 bg-yellow-500/5 z-0 animate-pulse pointer-events-none" />
                )}

                <Handle type="target" position={Position.Top} className="!bg-zinc-600 !w-3 !h-3" />

                <div className="flex items-start gap-3 relative z-10">
                    <div className={`p-2 rounded-lg ${data.mastered ? 'bg-yellow-500 text-black' : data.unlocked ? 'bg-blue-500/20 text-blue-400' : 'bg-zinc-800 text-zinc-600'}`}>
                        {data.unlocked ? <Icon size={20} /> : <Lock size={20} />}
                    </div>

                    <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                            <h3 className={`font-bold text-sm truncate ${data.mastered ? 'text-yellow-400' : data.unlocked ? 'text-zinc-100' : 'text-zinc-500'}`}>
                                {data.label}
                            </h3>
                            {data.mastered && <Award size={14} className="text-yellow-500 animate-bounce" />}
                        </div>

                        <div className="text-[10px] text-zinc-500 mt-1 truncate">
                            {data.unlocked
                                ? data.mastered ? 'Mastered!' : `${Math.floor(progress)}% Complete`
                                : 'Locked'
                            }
                        </div>
                    </div>
                </div>

                {/* Locked Tooltip (Conditional on shake/hover could be added) */}
                {/* Implementing basic tooltip via sibling if needed, but sticking to visual cues for now */}

                <Handle type="source" position={Position.Bottom} className="!bg-zinc-600 !w-3 !h-3" />
            </div>

            {/* Locked Feedback Message */}
            <AnimatePresence>
                {isShaking && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute -top-10 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded whitespace-nowrap z-50"
                    >
                        Complete prerequisites first!
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
