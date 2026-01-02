import { useState, useRef, useEffect, useCallback } from 'react';

type AlgorithmGenerator = Generator<any, void, unknown>;

export function useAlgorithmPlayer(algorithmFn: (data: any) => AlgorithmGenerator, initialData: any) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentFrame, setCurrentFrame] = useState<any>(null);
    const [stepCount, setStepCount] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    const generatorRef = useRef<AlgorithmGenerator | null>(null);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const speedRef = useRef(500); // ms per step

    // Initialize or Reset
    const reset = useCallback(() => {
        // Deep copy initial data to avoid mutation issues
        const dataCopy = JSON.parse(JSON.stringify(initialData));
        generatorRef.current = algorithmFn(dataCopy);
        setStepCount(0);
        setIsFinished(false);
        setIsPlaying(false);

        // Get initial state
        if (generatorRef.current) {
            const next = generatorRef.current.next();
            if (!next.done) {
                setCurrentFrame(next.value);
            }
        }
    }, [algorithmFn, initialData]);

    // Initial setup
    useEffect(() => {
        reset();
        return () => stop();
    }, [reset]);

    const stepForward = useCallback(() => {
        if (!generatorRef.current || isFinished) return;

        const next = generatorRef.current.next();
        if (next.done) {
            setIsFinished(true);
            setIsPlaying(false);
            stop();
        } else {
            setCurrentFrame(next.value);
            setStepCount(c => c + 1);
        }
    }, [isFinished]);

    const play = useCallback(() => {
        if (isFinished) return;
        setIsPlaying(true);
    }, [isFinished]);

    const stop = useCallback(() => {
        setIsPlaying(false);
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    }, []);

    // Loop
    useEffect(() => {
        if (isPlaying) {
            timerRef.current = setInterval(stepForward, speedRef.current);
        } else {
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isPlaying, stepForward]);

    const setSpeed = (ms: number) => {
        speedRef.current = ms;
        // If playing, restart interval
        if (isPlaying) {
            stop();
            play();
        }
    };

    return {
        isPlaying,
        isFinished,
        currentFrame,
        stepCount,
        play,
        pause: stop,
        stepForward,
        reset,
        setSpeed
    };
}
