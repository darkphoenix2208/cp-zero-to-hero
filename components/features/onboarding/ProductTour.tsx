"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, ChevronLeft, HelpCircle } from "lucide-react";
import { usePathname } from "next/navigation";

const TOUR_STEPS = [
    {
        targetId: "nav-dashboard",
        title: "Your Dashboard",
        content: "Track your Codeforces progress, streaks, and activity heatmap here.",
        position: "bottom"
    },
    {
        targetId: "nav-dojo",
        title: "The Dojo (AI Senpai)",
        content: "Get AI-powered hints for broken code and analyze your logic with the Code Surgeon.",
        position: "bottom"
    },
    {
        targetId: "nav-interview",
        title: "Mock Interview",
        content: "Practice FAANG-style technical interviews with a strict AI interviewer.",
        position: "bottom"
    },
    {
        targetId: "nav-studio",
        title: "Algorithm Studio",
        content: "Visualize Graphs, Trees, and Sorting algorithms in real-time.",
        position: "bottom"
    },
    {
        targetId: "nav-blogs",
        title: "Blog Hunter",
        content: "Find specific tutorials from CP-Algorithms and USACO Guide instantly.",
        position: "bottom"
    }
];

export function ProductTour() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [targetRect, setTargetRect] = useState<DOMRect | null>(null);
    const pathname = usePathname();

    // Check if tour should run (First time user)
    useEffect(() => {
        const hasSeenTour = localStorage.getItem("has-seen-tour-v1");
        if (!hasSeenTour) {
            // Small delay to ensure render
            setTimeout(() => setIsOpen(true), 1000);
        }
    }, []);

    // Update target position when step changes
    useEffect(() => {
        if (!isOpen) return;

        const step = TOUR_STEPS[currentStep];
        const element = document.getElementById(step.targetId);

        if (element) {
            setTargetRect(element.getBoundingClientRect());
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            // If element not found (e.g. mobile menu closed), maybe skip or center screen?
            setTargetRect(null);
        }
    }, [currentStep, isOpen, pathname]);

    const handleNext = () => {
        if (currentStep < TOUR_STEPS.length - 1) {
            setCurrentStep(c => c + 1);
        } else {
            handleClose();
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) setCurrentStep(c => c - 1);
    };

    const handleClose = () => {
        setIsOpen(false);
        localStorage.setItem("has-seen-tour-v1", "true");
    };

    if (!isOpen) return null;

    // Calculate Popover Position
    const popoverStyling = targetRect ? {
        top: targetRect.bottom + 16,
        left: Math.max(16, Math.min(window.innerWidth - 320, targetRect.left - 100)) // Keep roughly aligned but on screen
    } : {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    };

    return (
        <div className="fixed inset-0 z-[100] pointer-events-none">
            {/* Backdrop with "Hole" effect using clip-path could be cool, but simple dim is safer for now */}
            <div className="absolute inset-0 bg-black/50 pointer-events-auto" onClick={handleClose} />

            {/* Spotlight - Option: Render a glowing box around the target */}
            {targetRect && (
                <motion.div
                    layoutId="spotlight"
                    className="absolute border-2 border-indigo-500 rounded-lg shadow-[0_0_30px_rgba(99,102,241,0.5)] z-[101] pointer-events-none"
                    style={{
                        top: targetRect.top - 4,
                        left: targetRect.left - 4,
                        width: targetRect.width + 8,
                        height: targetRect.height + 8,
                    }}
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
            )}

            {/* Popover */}
            <motion.div
                className="absolute w-80 bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl p-4 z-[102] pointer-events-auto flex flex-col gap-3"
                style={targetRect ? { top: popoverStyling.top, left: popoverStyling.left } : { top: '50%', left: '50%', x: '-50%', y: '-50%' }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
            >
                <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg text-white flex items-center gap-2">
                        <span className="bg-indigo-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                            {currentStep + 1}
                        </span>
                        {TOUR_STEPS[currentStep].title}
                    </h3>
                    <button onClick={handleClose} className="text-zinc-500 hover:text-white"><X size={16} /></button>
                </div>

                <p className="text-zinc-400 text-sm">
                    {TOUR_STEPS[currentStep].content}
                </p>

                <div className="flex justify-between items-center mt-2 border-t border-zinc-800 pt-3">
                    <div className="flex gap-1">
                        {TOUR_STEPS.map((_, i) => (
                            <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === currentStep ? 'bg-indigo-500' : 'bg-zinc-700'}`} />
                        ))}
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={handlePrev}
                            disabled={currentStep === 0}
                            className="p-1.5 hover:bg-zinc-800 rounded-lg disabled:opacity-30 transition"
                        >
                            <ChevronLeft size={16} />
                        </button>
                        <button
                            onClick={handleNext}
                            className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-lg transition flex items-center gap-1"
                        >
                            {currentStep === TOUR_STEPS.length - 1 ? 'Finish' : 'Next'} <ChevronRight size={14} />
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
