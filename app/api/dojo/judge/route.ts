import { NextRequest, NextResponse } from 'next/server';
import { groq } from '@/lib/groq';
import { executeCode, PistonResult } from '@/lib/piston';
import { getProblemSamples } from '@/lib/cf_scraper';
import { supabase } from '@/lib/supabase';

const MODEL = "llama-3.3-70b-versatile";

// Helper Functions for RAG (Replicated from interrupt route for stability)
function mapTopicToCategory(topic: string): string {
    const t = topic.toLowerCase();
    if (t.includes("tree") || t.includes("bst")) return "Trees";
    if (t.includes("graph") || t.includes("bfs") || t.includes("dfs") || t.includes("union")) return "Graphs";
    if (t.includes("list") || t.includes("node")) return "Linked List";
    if (t.includes("matrix") || t.includes("grid")) return "Graphs"; // Matrices often graph problems
    if (t.includes("dynamic") || t.includes("dp") || t.includes("memo")) return "Dynamic Programming";
    if (t.includes("recursion") || t.includes("backtrack")) return "Backtracking";
    if (t.includes("heap") || t.includes("queue") || t.includes("priority")) return "Heap / Priority Queue";
    if (t.includes("stack")) return "Stack";
    if (t.includes("search") || t.includes("binary search") || t.includes("bisect")) return "Binary Search";
    if (t.includes("sort") || t.includes("window") || t.includes("pointer")) return "Sliding Window"; // or Two Pointers
    if (t.includes("bit")) return "Bit Manipulation"; // Need to ensure category exists or map to Math
    return "Arrays & Hashing"; // Default fallback
}

async function extractTopic(code: string): Promise<string> {
    try {
        const completion = await groq.chat.completions.create({
            messages: [
                { role: "system", content: 'Identify the main data structure or algorithm of this code (e.g., "Linked List", "Binary Tree", "DP", "Graph"). Return ONLY the name.' },
                { role: "user", content: code.slice(0, 500) }
            ],
            model: MODEL,
            temperature: 0.1,
            max_tokens: 20
        });
        return completion.choices[0]?.message?.content?.trim() || "General";
    } catch (e) {
        return "General";
    }
}

async function getRelevantQuestion(category: string): Promise<string | null> {
    try {
        if (!supabase) {
            console.warn('Supabase not configured, skipping RAG question fetch');
            return null;
        }

        const { data, error } = await supabase
            .from('interview_questions')
            .select('question_text')
            .eq('category', category)
            .limit(200); // Expanded pool for better variety

        if (error || !data || data.length === 0) return null;

        // True Random Pick from a larger pool
        const randomIndex = Math.floor(Math.random() * data.length);
        return data[randomIndex].question_text;
    } catch (e) {
        return null;
    }
}

// System Prompt now focuses on Generating Test Cases, NOT judging.
const GENERATOR_PROMPT = `
Role: You are a Test Case Generator for Competitive Programming.
Objective: Generate 3 DISTINCT test cases for the given problem.

Output Format: JSON Array
[
  { "input": "...", "output": "..." },
  { "input": "...", "output": "..." }
]

Rules:
1. Input format must match the problem statement EXACTLY.
2. **CRITICAL**: If the problem input says "First line is t (number of test cases)", you MUST prepend "1" to your input (representing 1 test case run), unless you are providing multiple concatenated cases.
   - Example: If problem is "t, then n", generate "1\n5...". DO NOT just generate "5...".
3. "output" must be the expected correct answer.
4. Include:
   - 1 Basic Case (Example from problem)
   - 1 Edge Case (Min/Max values or tricky logic)
   - 1 Random Case
`;

export async function POST(req: NextRequest) {
    try {
        const { problemName, problemStatement, userCode, language } = await req.json();

        if (!userCode || !problemName) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 });
        }

        // Step 0: Try to Scrape Real Test Cases (Gold Standard)
        let cases: { input: string, output: string }[] = await getProblemSamples(problemName);
        let source = "SCRAPER";

        // Step 1: Fallback to LLM if Scraper failed or no valid ID found
        if (cases.length === 0) {
            source = "LLM_GENERATOR";
            try {
                const caseRes = await groq.chat.completions.create({
                    messages: [{
                        role: "system",
                        content: `${GENERATOR_PROMPT}\n\nPROBLEM: ${problemName} ${problemStatement || ""}`
                    }],
                    model: MODEL,
                    response_format: { type: "json_object" }
                });

                const text = caseRes.choices[0]?.message?.content || "{\"cases\": []}";
                const cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();
                const json = JSON.parse(cleanText);
                cases = Array.isArray(json) ? json : (json.cases || json.test_cases || []);
            } catch (e) {
                console.warn("LLM Gen failed, using dummy fallback", e);
            }
        }

        if (cases.length === 0) {
            // Ultimate Fallback
            cases = [{ input: "1\n10", output: "10" }];
            source = "FALLBACK";
        }

        // Step 2: Execute Code (Piston)
        const inputs = cases.map(c => c.input);
        const results = await executeCode(language || 'cpp', userCode, inputs);

        // Step 3: Verify Results
        let passed = 0;
        let firstFailReason = "";
        let verdict = "ACCEPTED";

        for (let i = 0; i < results.length; i++) {
            const res = results[i];
            const expected = cases[i].output.trim();

            if (!res) {
                verdict = "JUDGE_ERROR";
                firstFailReason = "Execution failed silently.";
                break;
            }

            // Check Compilation/Runtime Error
            if (res.run.code !== 0) {
                // Determine if it's Runtime or Compilation
                // Piston puts compilation errors in `res.compile.output` mostly.
                // Runtime errors (like segfault) are in `res.run.signal` or `res.run.stderr`.

                if (res.run.signal || res.run.stderr.includes('core dumped') || res.run.stderr.includes('Exception')) {
                    verdict = "RUNTIME_ERROR";
                    firstFailReason = `Runtime Error (${res.run.signal || 'Signal'}): ${res.run.stderr}`;
                } else if (res.compile && res.compile.code !== 0) {
                    verdict = "COMPILATION_ERROR";
                    firstFailReason = res.compile.output;
                } else {
                    // Fallback check
                    verdict = "RUNTIME_ERROR";
                    firstFailReason = res.run.stderr || "Unknown Runtime Error";
                }
                break;
            }

            // Check Output
            const actual = res.run.stdout.trim();
            if (actual !== expected) {
                verdict = "WRONG_ANSWER";
                firstFailReason = `Test Case ${i + 1} Failed. Input: ${inputs[i].replace(/\n/g, ' ')}. Expected: ${expected}. Got: ${actual}`;
                break;
            }
            passed++;
        }

        // Step 4: RAG Integration (If Accepted)
        // Step 4: RAG Integration (If Accepted)
        let followUpQuestion = null;
        if (verdict === "ACCEPTED") {
            try {
                const topic = await extractTopic(userCode);
                const category = mapTopicToCategory(topic);
                const dbQuestion = await getRelevantQuestion(category);

                if (dbQuestion) {
                    // DIRECT SERVE: No LLM Rewriting to prevent "hallucinated variations"
                    followUpQuestion = `Good job! Here is a related interview question to think about:\n\n${dbQuestion}`;
                } else {
                    // Fallback if DB is empty for this category
                    followUpQuestion = `Excellent work on the ${topic} implementation! Can you analyze the time complexity of your solution?`;
                }
            } catch (e) {
                console.error("RAG fetch failed:", e);
                followUpQuestion = "Great job! What is the Time and Space complexity of your solution?";
            }
        }
        return NextResponse.json({
            verdict,
            passed,
            total: cases.length,
            reason: firstFailReason,
            followUp: followUpQuestion
        });

    } catch (error: any) {
        console.error("Dojo Judge Error:", error);
        return NextResponse.json({
            verdict: "JUDGE_ERROR",
            reason: error.message || "Judge Server Error"
        });
    }
}
