
import { useState, useRef, useCallback } from 'react';
import { toast } from 'sonner';

export function useMockInterviewer() {
    const [isLocked, setIsLocked] = useState(false);
    const [question, setQuestion] = useState<string | null>(null);
    const [feedback, setFeedback] = useState<string | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);

    // Limits
    const lastCheckTime = useRef<number>(Date.now());
    const lineCountRef = useRef<number>(0);

    const [seenQuestionIds, setSeenQuestionIds] = useState<number[]>(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('seen_question_ids');
            return saved ? JSON.parse(saved) : [];
        }
        return [];
    });

    // Helper to add ID
    const markQuestionAsSeen = (id: number) => {
        setSeenQuestionIds(prev => {
            if (prev.includes(id)) return prev;
            const next = [...prev, id];
            localStorage.setItem('seen_question_ids', JSON.stringify(next));
            return next;
        });
    };

    const triggerInterruption = async (code: string, isManual = false, extraData?: any) => {
        setIsProcessing(true);
        try {
            const res = await fetch('/api/interview/interrupt', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'interrupt',
                    code,
                    force: isManual,
                    ignoreIds: seenQuestionIds, // Send history
                    ...extraData
                })
            });

            if (!res.ok) {
                throw new Error(`API Error: ${res.status}`);
            }

            const data = await res.json();

            if (data.trigger) {
                const cleanQuestion = typeof data.question === 'object' ? JSON.stringify(data.question) : String(data.question || "Can you explain this?");
                setQuestion(cleanQuestion);
                setIsLocked(true);
                toast.warning("INTERRUPTION!", { description: "The interviewer has a question." });

                // Track ID if provided
                if (data.question_id) {
                    markQuestionAsSeen(data.question_id);
                }
            } else if (isManual) {
                // If Manually triggered and NO question, that's a Good Thing!
                toast.success("Accepted", { description: "The interviewer is satisfied with your code." });
            }

            return data.trigger; // Useful for caller
        } catch (e) {
            console.error("Interruption Failed:", e);
            if (isManual) {
                toast.error("Connection Failed", { description: "Could not reach the interviewer." });
            }
            return false;
        } finally {
            setIsProcessing(false);
        }
    };

    const validateAnswer = async (code: string, answer: string, languageId?: string) => {
        setIsProcessing(true);
        try {
            const res = await fetch('/api/interview/interrupt', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'validate',
                    code,
                    question,
                    answer,
                    language: languageId // Pass language to backend
                })
            });
            const data = await res.json();

            const cleanFeedback = typeof data.feedback === 'object'
                ? JSON.stringify(data.feedback)
                : String(data.feedback || "Check your logic.");

            if (data.correct) {
                toast.success("Good answer.", { description: cleanFeedback });
                setIsLocked(false);
                setQuestion(null);
                setFeedback(null);
            } else {
                toast.error("Not quite.", { description: cleanFeedback });
                setFeedback(cleanFeedback);
                // Remain locked
            }

        } catch (e) {
            console.error(e);
            // Emergency unlock if API fails
            setIsLocked(false);
        } finally {
            setIsProcessing(false);
        }
    };

    // Called by Code Editor onChange
    const onCodeChange = useCallback((value: string | undefined) => {
        if (!value) return;

        const lines = value.split('\n').length;

        // TRIGGER LOGIC
        // If user added > 10 lines since last check, trigger.
        // This is "aggressive" for demo purposes.
        if (Math.abs(lines - lineCountRef.current) > 10) {
            console.log("Triggering Interview Check...");
            lineCountRef.current = lines; // Reset threshold
            triggerInterruption(value);
        } else {
            // Just update ref if small change? No, only update ref when we trigger/checkpoint
            // Actually, we should track "lastCheckLineCount" separate from "currentLineCount"
            // But for simplicity:
            // lineCountRef.current = lines; // NO, this would reset diff every keystroke
        }

    }, []);

    // Check time
    // This hook exposes the logic, the Component will run the interval

    return {
        isLocked,
        question,
        feedback,
        isProcessing,
        triggerInterruption,
        validateAnswer,
        onCodeChange
    };
}
