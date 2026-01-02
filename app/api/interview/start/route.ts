import { NextRequest, NextResponse } from "next/server";
import { groq } from "@/lib/groq";

const MODEL = "llama-3.3-70b-versatile";

const PROBLEM_GEN_PROMPT = `
You are a Staff Engineer at Google creating a new interview question.
Generate a unique, Medium/Hard algorithmic problem.
Focus on: Graphs, DP, Trees, or Heaps.

Return a JSON object with this EXACT structure:
{
    "title": "Problem Title",
    "difficulty": "Medium" | "Hard",
    "description": "Markdown formatted problem description. Be clear and professional. Use LaTeX for math like $O(N)$.",
    "inputFormat": "Input format description...",
    "outputFormat": "Output format description...",
    "constraints": ["1 <= N <= 10^5", ...],
    "examples": [
        { "input": "...", "output": "...", "explanation": "Optional explanation" }
    ],
    "testCases": [
        { "input": "...", "output": "..." },
        { "input": "...", "output": "..." },
        { "input": "...", "output": "..." }
    ],
    "starterCode": "cpp code boilerplate"
}

IMPORTANT: The "starterCode" MUST be ONLY the empty function signature and includes.
DO NOT WRITE THE SOLUTION.
DO NOT IMPLEMENT THE LOGIC.
Just return the class/function definition returning a dummy value or void.
Example starterCode:
"#include <bits/stdc++.h>\\nusing namespace std;\\n\\nclass Solution {\\npublic:\\n    int solve(vector<int>& nums) {\\n        // Your code here\\n        return 0;\\n    }\\n};"
`;

export async function POST(req: NextRequest) {
    try {
        const completion = await groq.chat.completions.create({
            messages: [
                { role: "system", content: PROBLEM_GEN_PROMPT }
            ],
            model: MODEL,
            temperature: 0.8, // Slightly creative for new problems
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
