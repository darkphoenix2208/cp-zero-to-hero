import { NextRequest, NextResponse } from "next/server";
import { groq } from "@/lib/groq";

const MODEL = "llama-3.3-70b-versatile";

const PROBLEM_GEN_PROMPT = `
You are a ruthless Competitive Programming Problem Setter (like strict Codeforces or LeetCode Hard setters).
Your goal is to create a difficult algorithmic problem WITHOUT revealing the solution method.

Rules for the Problem Statement:
1. Describe the TASK (what to calculate), not the METHOD (how to calculate it).
2. NEVER mention specific names of data structures or algorithms in the description (e.g., do NOT say "Use a Priority Queue", "Use DP", "Use Binary Search"). Say "Find the K-th smallest" or "Maximize the value".
3. The title should be abstract (e.g., "Kingdom Division", "Task Scheduling") not descriptive (e.g., "Heap Sort Implementation").

Return a JSON object with this EXACT structure:
{
    "title": "Abstract Problem Title (e.g. 'Mysterious Array')",
    "difficulty": "Medium" | "Hard",
    "description": "Formal, mathematical problem statement. Do NOT use LaTeX or dollar signs ($). Use plain text for math (e.g. 'O(N)', 'A[i]', '10^5'). Be precise but give ZERO hints about the solution approach.",
    "inputFormat": "Input format description...",
    "outputFormat": "Output format description...",
    "constraints": ["1 <= N <= 10^5", ...],
    "examples": [
        { 
            "input": "...", 
            "output": "...", 
            "explanation": "Strictly verify the output based on the problem rules. Do NOT explain the algorithm." 
        }
    ],
    "testCases": [
        { "input": "...", "output": "..." },
        { "input": "...", "output": "..." },
        { "input": "...", "output": "..." }
    ],
    "starterCodeCpp": "C++ code boilerplate (class Solution { ... })",
    "starterCodeC": "C code boilerplate (struct Solution* solve(...) or just function)",
    "starterCodePython": "Python code boilerplate (class Solution: ...)",
    "starterCodeJava": "Java code boilerplate (class Solution { ... })",
    "starterCodeJavascript": "JavaScript code boilerplate (class Solution { ... })",
    "starterCodeGo": "Go code boilerplate (func Solve(...) ...)",
    "starterCodeRust": "Rust code boilerplate (impl Solution { ... })",
    "starterCodeCSharp": "C# code boilerplate (public class Solution { ... })",
    "starterCodeKotlin": "Kotlin code boilerplate (class Solution { ... })"
}

IMPORTANT: 
1. The starter codes MUST be ONLY the empty function signature and necessary imports.
2. DO NOT WRITE THE SOLUTION.
3. DO NOT IMPLEMENT THE LOGIC.
4. Keep the "explanation" field in examples EXTREMELY concise.
5. Example starterCode:
"#include <bits/stdc++.h>\\nusing namespace std;\\n\\nclass Solution {\\npublic:\\n    int solve(vector<int>& nums) {\\n        // Your code here\\n        return 0;\\n    }\\n};"
`;

const TOPICS = [
    "Arrays & Hashing (Medium)", "Two Pointers (Medium)", "Sliding Window (Medium)",
    "Stack (Medium)", "Binary Search (Medium)", "Linked List (Medium)", "Trees (Medium/Hard)",
    "Heap / Priority Queue (Medium)", "Backtracking (Medium/Hard)", "Graphs (Medium/Hard)",
    "Advanced Dynamic Programming (Hard)", "Greedy (Medium)", "Tries (Medium)",
    "Math & Geometry (Medium)", "Bit Manipulation (Medium)"
];

export async function POST(req: NextRequest) {
    try {
        const randomTopic = TOPICS[Math.floor(Math.random() * TOPICS.length)];

        const completion = await groq.chat.completions.create({
            messages: [
                { role: "system", content: PROBLEM_GEN_PROMPT.replace("Focus on: Graphs, DP, Trees, or Heaps.", `Focus strictly on this topic: ${randomTopic}.`) }
            ],
            model: MODEL,
            temperature: 0.4, // Lowered for mathematical precision
            response_format: { type: "json_object" }
        });

        const text = completion.choices[0]?.message?.content || "{}";
        const data = JSON.parse(text);

        return NextResponse.json(data);
    } catch (error) {
        console.error("Problem Gen Error:", error);
        return NextResponse.json({ error: "Failed to generate problem" }, { status: 500 });
    }
}
