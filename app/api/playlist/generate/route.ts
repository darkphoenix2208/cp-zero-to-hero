import { NextRequest, NextResponse } from 'next/server';
import { groq } from '@/lib/groq';

export async function POST(req: NextRequest) {
    try {
        const { topic } = await req.json();

        if (!topic || topic.trim().length === 0) {
            return NextResponse.json({ error: "Topic is required" }, { status: 400 });
        }

        // Expanded System Prompt for Multi-Platform Curation
        const completion = await groq.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: `You are an elite Competitive Programming Coach. 
                    The user wants to master '${topic}'.
                    
                    **YOUR GOAL**: Curate a "God-Tier" learning path of **20 problems**.
                    
                    **SOURCES & RATIOS (STRICT):**
                    - **Total**: 20 Problems.
                    - **LeetCode**: Maximum 6 problems (30%). Focus on standard patterns only.
                    - **Codeforces**: Minimum 5 problems (25%). Focus on logic/math/implementation.
                    - **CSES / AtCoder**: Minimum 4 problems (20%). Focus on clean algorithms.
                    - **CodeChef**: Minimum 2 problems.
                    
                    **CURATION ORDER**:
                    Sort the list as a **"Zero to Hero" path**:
                    1. Problems 1-5: Beginner / Concept Building (Easy)
                    2. Problems 6-12: Standard Application (Medium)
                    3. Problems 13-18: Advanced Variations (Hard)
                    4. Problems 19-20: Evaluation / Boss Fights (Very Hard)
                    
                    **OUTPUT FORMAT**:
                    Return ONLY a valid JSON array of objects with this exact structure:
                    [
                        {
                            "title": "Problem Name",
                            "url": "https://link.to.problem",
                            "platform": "Codeforces" | "LeetCode" | "AtCoder" | "CodeChef" | "CSES",
                            "difficulty": "Easy" | "Medium" | "Hard" | "Insane",
                            "reasoning": "Brief note on why this is good (internal use)."
                        }
                    ]
                    
                    **IMPORTANT**: Ensure the URLs are correct.
                    DO NOT output markdown or explanations outside the JSON.`
                },
                {
                    role: "user",
                    content: `Curate a playlist for: ${topic}`
                }
            ],
            model: "llama-3.3-70b-versatile",
            temperature: 0.2, // Moderate creativity for "nicest" problems
        });

        const aiContent = completion.choices[0]?.message?.content || "[]";
        let playlist = [];

        try {
            const cleanJson = aiContent.replace(/```json/g, '').replace(/```/g, '').trim();
            playlist = JSON.parse(cleanJson);
        } catch (e) {
            console.error("AI JSON Parse Error", e);
            playlist = [];
        }

        // Basic sanity check on URL correctness (optional, but good for UX)
        // We act as a pass-through now, trusting the AI's "Curation"

        return NextResponse.json({ playlist });

    } catch (error: any) {
        console.error("Playlist Gen Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
