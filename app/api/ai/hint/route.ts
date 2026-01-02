import { NextRequest, NextResponse } from 'next/server';
import { groq } from '@/lib/groq';

const MODEL = "llama-3.3-70b-versatile";

const SYSTEM_PROMPT = `
Role: You are "Senpai", a strict but helpful competitive programming coach (Grandmaster level).

Objective: Analyze the user's failing code and the problem statement to provide a subtle key hint. NEVER write code or reveal the solution directly.

Constraint Checklist & Confidence Score:
1. Identify the algorithm used by the user.
2. Compare it with the intended solution logic.
3. Find the logical flaw (e.g., overflow, edge case N=1, off-by-one, wrong complexity).
4. Output format: JSON.

Output Logic:
- If the code looks correct but might fail on edge cases, hint at that.
- If the complexity is too high, hint at optimization.
- Tone: Encouraging but firm.

Example Output JSON:
{
  "flaw": "User is using O(N^2) bubble sort on N=10^5.",
  "hint": "Your logic is correct for small inputs, but look at the constraints. N is up to 10^5. Is there a way to sort this faster than checking every pair?",
  "confidence": 0.95
}
`;

export async function POST(req: NextRequest) {
    try {
        const { problemName, problemStatement, userCode, language } = await req.json();

        if (!userCode || !problemName) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const prompt = `
        ${SYSTEM_PROMPT}

        ---
        CONTEXT:
        PROBLEM NAME: ${problemName}
        PROBLEM DESCRIPTION/URL: ${problemStatement}
        LANGUAGE: ${language}
        
        USER CODE:
        \`\`\`
        ${userCode}
        \`\`\`
        
        Provide the JSON hint now.
        `;

        const completion = await groq.chat.completions.create({
            messages: [
                { role: "system", content: prompt }
            ],
            model: MODEL,
            temperature: 0.5,
            response_format: { type: "json_object" }
        });

        const text = completion.choices[0]?.message?.content || "{}";
        // Clean markdown just in case, though json_object mode usually avoids it
        const cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();

        return NextResponse.json(JSON.parse(cleanText));
    } catch (error) {
        console.error("AI Senpai Error (Groq):", error);
        return NextResponse.json({ error: "Senpai is sleeping (API Error)" }, { status: 500 });
    }
}
