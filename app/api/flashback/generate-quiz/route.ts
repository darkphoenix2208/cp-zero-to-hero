import { NextRequest, NextResponse } from 'next/server';
import { groq } from '@/lib/groq';

export async function POST(req: NextRequest) {
    try {
        const { code, topic } = await req.json();

        if (!code) {
            return NextResponse.json({ message: "No source code provided" }, { status: 400 });
        }

        const prompt = `
You are a Senior Engineer acting as a rigorous interviewer.
You are testing a student on code they wrote some time ago.
Topic: ${topic || "this algorithm"}

User's Past Code:
\`\`\`
${code.slice(0, 3000)} // Truncated if too long
\`\`\`

Task:
Generate a single **Multiple Choice Question (MCQ)** to test if the student truly understands the LOGIC and DECISIONS in their own code.

Rules:
1.  **NO Trivial Syntax:** Don't ask "What is 'int'?". Ask "Why did you use a set here instead of a vector?".
2.  **Focus on Concepts:** Time Complexity, Edge Cases, Recursion Depth, Variable Roles.
3.  **Tone:** Professional, slightly challenging.
4.  **Format:** Return ONLY pure JSON. No markdown backticks.

JSON Structure:
{
    "question": "The question string",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "correctIndex": number (0-3),
    "explanation": "Brief explanation of why the answer is correct and others are wrong."
}
        `;

        const completion = await groq.chat.completions.create({
            messages: [{ role: 'user', content: prompt }],
            model: "llama-3.3-70b-versatile",
            temperature: 0.5,
            response_format: { type: "json_object" }
        });

        const content = completion.choices[0]?.message?.content || '{}';
        const quiz = JSON.parse(content);

        return NextResponse.json(quiz);

    } catch (error) {
        console.error("Quiz Gen Error:", error);
        return NextResponse.json({
            message: "Failed to generate quiz",
            question: "Failed to generate AI quiz from your code.",
            options: ["Retry later", "Check API Key", "Network Error", "Space Rays"],
            correctIndex: 0,
            explanation: "The server encountered an error."
        }, { status: 500 });
    }
}
