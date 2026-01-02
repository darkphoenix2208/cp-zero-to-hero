import { NextRequest, NextResponse } from 'next/server';
import { groq } from '@/lib/groq';

export async function POST(req: NextRequest) {
    try {
        const { code, language, algorithm } = await req.json();

        if (!code) {
            return NextResponse.json({ message: "No code provided" }, { status: 400 });
        }

        const prompt = `
You are an expert Competitive Programming Coach.
Your task is to VERIFY if the following code implements the "${algorithm}" algorithm correctly in ${language}.

Do NOT check for exact syntax matching with a standard template.
Check for LOGICAL CORRECTNESS.
Variable names, whitespace, and minor stylistic choices should optionally be ignored if the core logic is correct.
However, if the time complexity is significantly worse than optimal (e.g., O(N^2) for a DSU find operation without path compression), mark it as incorrect.

User Code:
\`\`\`${language}
${code}
\`\`\`

Respond in JSON format only:
{
    "isCorrect": boolean,
    "feedback": "Two sentence explanation of why it is correct or what is wrong."
}
        `;

        const completion = await groq.chat.completions.create({
            messages: [{ role: 'user', content: prompt }],
            model: "llama-3.3-70b-versatile",
            temperature: 0,
            response_format: { type: "json_object" }
        });

        const result = JSON.parse(completion.choices[0]?.message?.content || '{}');

        return NextResponse.json(result);

    } catch (error) {
        console.error("Template Verification Error:", error);
        return NextResponse.json({
            isCorrect: false,
            feedback: "AI Verification failed due to a server error. Please try again."
        }, { status: 500 });
    }
}
