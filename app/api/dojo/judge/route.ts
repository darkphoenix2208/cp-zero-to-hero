import { NextRequest, NextResponse } from 'next/server';
import { groq } from '@/lib/groq';
import { executeCode, PistonResult } from '@/lib/piston';
import { getProblemSamples } from '@/lib/cf_scraper';

const MODEL = "llama-3.3-70b-versatile";

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

        return NextResponse.json({
            verdict,
            reason: verdict === "ACCEPTED" ? "All test cases passed!" : firstFailReason,
            cases_passed: passed,
            total_cases: cases.length,
            confidence: 1.0,
            source // "SCRAPER" | "LLM_GENERATOR" | "FALLBACK"
        });

    } catch (error: any) {
        console.error("Dojo Judge Error:", error);
        return NextResponse.json({
            verdict: "JUDGE_ERROR",
            reason: error.message || "Judge Server Error"
        });
    }
}
