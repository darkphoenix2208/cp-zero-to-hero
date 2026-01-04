'use client';
import { useState, useRef } from 'react';
import Editor, { OnMount } from '@monaco-editor/react';
import { useMockInterviewer } from '@/hooks/useMockInterviewer';
import { InterviewRoom } from '@/components/features/interview/InterviewRoom';
import { Toaster, toast } from 'sonner';
import { Play, Mic, RefreshCw, Check } from 'lucide-react';

const SAMPLE_PROBLEM = `
// PROBLEM: Determine if a string is a palindrome.
// Constraint: O(1) Space.

bool isPalindrome(string s) {
    // Write your code here...
}
`;

// ... imports

const LANGUAGES = [
    { id: 'cpp', name: 'C++', monaco: 'cpp' },
    { id: 'c', name: 'C', monaco: 'c' },
    { id: 'python', name: 'Python 3', monaco: 'python' },
    { id: 'java', name: 'Java', monaco: 'java' },
    { id: 'javascript', name: 'JavaScript', monaco: 'javascript' },
    { id: 'typescript', name: 'TypeScript', monaco: 'typescript' },
    { id: 'go', name: 'Go', monaco: 'go' },
    { id: 'rust', name: 'Rust', monaco: 'rust' },
    { id: 'csharp', name: 'C#', monaco: 'csharp' },
    { id: 'kotlin', name: 'Kotlin', monaco: 'kotlin' },
];

export default function InterviewClient() {
    const [code, setCode] = useState(SAMPLE_PROBLEM.trim());
    const [language, setLanguage] = useState(LANGUAGES[0]);
    const [isActive, setIsActive] = useState(false);

    // Stats / Controls
    const editorRef = useRef<any>(null);

    // Mock Interviewer Hook
    const {
        isLocked,
        question,
        feedback,
        isProcessing,
        triggerInterruption,
        validateAnswer,
        onCodeChange: onInterviewerCodeChange
    } = useMockInterviewer();

    const handleEditorDidMount: OnMount = (editor, monaco) => {
        editorRef.current = editor;
    };

    const handleCodeChange = (val: string | undefined) => {
        const newValue = val || '';
        setCode(newValue);

        if (isActive) {
            onInterviewerCodeChange(newValue);
        }
    };

    const handleStart = () => {
        setIsActive(true);
        if (editorRef.current) editorRef.current.focus();
    };

    const handleReset = () => {
        setIsActive(false);
        setCode(SAMPLE_PROBLEM.trim());
    };


    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = LANGUAGES.find(l => l.id === e.target.value) || LANGUAGES[0];
        setLanguage(selected);
        // Optional: Reset code template based on language? For now, keep simple.
    };

    return (
        <div className="w-full h-screen bg-zinc-950 text-white font-sans flex flex-col relative overflow-hidden">
            {/* ... Toaster & Room ... */}

            <InterviewRoom
                isOpen={isLocked || isProcessing}
                question={question}
                feedback={feedback}
                isProcessing={isProcessing}
                onValidate={(ans) => validateAnswer(code, ans, language.id)}
            />

            {/* Header */}
            <div className="border-b border-zinc-800 p-4 bg-zinc-900/50 backdrop-blur flex items-center justify-between">
                <div className="flex items-center gap-3">
                    {/* ... Logo ... */}
                    <div>
                        <h1 className="font-bold text-lg leading-none">The Mock Interviewer</h1>
                        <div className="flex items-center gap-2 mt-1">
                            <p className="text-zinc-500 text-xs">AI-Powered Pressure Testing</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <select
                        value={language.id}
                        onChange={handleLanguageChange}
                        className="bg-zinc-800 text-xs text-zinc-300 border border-zinc-700 rounded px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-red-500"
                    >
                        {LANGUAGES.map(lang => (
                            <option key={lang.id} value={lang.id}>{lang.name}</option>
                        ))}
                    </select>
                    {/* ... Buttons ... */}
                    {isActive ? (
                        <>
                            {/* ... Status ... */}
                            <button
                                onClick={() => {
                                    toast.info("Submitting...", { description: "The interviewer is reviewing your code." });
                                    triggerInterruption(code, true, { language: language.id });
                                }}
                                className="bg-green-600 hover:bg-green-500 text-white px-3 py-1.5 rounded font-bold text-xs flex items-center gap-2 shadow-[0_0_15px_rgba(22,163,74,0.4)] transition hover:scale-105"
                            >
                                <Check size={14} /> <span className="hidden sm:inline">Submit Solution</span><span className="sm:hidden">Submit</span>
                            </button>

                            <button
                                onClick={() => triggerInterruption(code, true, { language: language.id })}
                                className="text-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-400 px-3 py-1.5 rounded transition"
                            >
                                <span className="hidden sm:inline">Debug: Force Question</span><span className="sm:hidden">Debug</span>
                            </button>
                            <button
                                onClick={handleReset}
                                className="text-zinc-400 hover:text-white transition"
                                title="Reset Session"
                            >
                                <RefreshCw size={18} />
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={handleStart}
                            className="bg-white text-black hover:bg-gray-200 px-6 py-2 rounded-full font-bold flex items-center gap-2 transition"
                        >
                            <Play size={16} fill="currentColor" /> Start Interview
                        </button>
                    )}
                </div>
            </div>

            {/* Main Area */}
            <div className="flex-1 flex flex-col">
                <div className="flex-1 bg-[#1e1e1e] relative">
                    {!isActive && (
                        <div className="absolute inset-0 z-10 bg-black/50 backdrop-blur-sm flex items-center justify-center">
                            <div className="text-center">
                                <h2 className="text-xl font-bold mb-2">Ready to begin?</h2>
                                <p className="text-zinc-400 mb-6 max-w-md mx-auto">
                                    The interviewer will watch your code in real-time.
                                    If you write inefficient code or generic templates, they <b>will</b> stop you.
                                </p>
                                <button
                                    onClick={handleStart}
                                    className="bg-red-600 hover:bg-red-500 text-white px-8 py-3 rounded-full font-bold shadow-[0_0_30px_rgba(220,38,38,0.4)] transition hover:scale-105"
                                >
                                    Start Session
                                </button>
                            </div>
                        </div>
                    )}

                    <Editor
                        height="100%"
                        defaultLanguage={language.monaco}
                        language={language.monaco}
                        value={code}
                        theme="vs-dark"
                        onChange={handleCodeChange}
                        onMount={handleEditorDidMount}
                        options={{
                            readOnly: isLocked,
                            minimap: { enabled: false },
                            fontSize: 16,
                            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                            lineNumbers: 'on',
                            autoClosingBrackets: 'always',
                            padding: { top: 24, bottom: 24 },
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
