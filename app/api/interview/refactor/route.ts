import { NextRequest, NextResponse } from "next/server";
import { groq } from "@/lib/groq";

const MODEL = "llama-3.3-70b-versatile";

const SURGERY_SYSTEM_PROMPT = `
**Role:**
You are a Senior Staff Software Engineer at Google and a C++ Standards Committee member. Your job is to conduct "Code Surgery" on a junior developer's working solution.

**Context:**
The user has just solved a Competitive Programming problem (Verdict: ACCEPTED).
Their code works, but it might be messy, verbose, or inefficient in terms of readability.

**Your Task:**
Analyze the user's code and provide a harsh but constructive "Code Review."

**Input:**
1.  **Problem Statement (Summary):** Provided by user.
2.  **User's Code:** Provided by user.

**Output Format (Strict JSON):**
Return a JSON object with exactly these fields:
1.  "quality_score" (Integer 0-100): Rate the cleanliness, variable naming, and modern syntax usage.
2.  "critique" (Array of Strings): 3 specific bullet points on what makes the code "smelly" (e.g., "Used int instead of long long", "Global variables used unnecessarily", "Variable names like a, b, c are confusing").
3.  "refactored_code" (String): The full, polished version of their code.
    * **MUST** use modern C++ features: auto, range-based for loops, lambdas, vectors instead of raw arrays.
    * **MUST** improve variable names (adj instead of a, visited instead of vis).
    * **MUST** keep the logic identical (do not change the algorithm, just the implementation).
4.  "key_fix" (String): A one-sentence takeaway (e.g., "Using std::sort with a lambda is cleaner than a custom comparator struct.").

**Tone Guidelines:**
* Be professional but direct. (Harsh/Strict)
* Do not praise basic functionality (it already passed). Focus on **Style** and **Modern C++**.
* If the user used bits/stdc++.h, leave it (it's standard for CP), but clean up the rest.
`;

export async function POST(req: NextRequest) {
    try {
        const { code, problemTitle, problemDescription } = await req.json();

        if (!code || !problemTitle) {
            return NextResponse.json({ error: "Missing code or problem context" }, { status: 400 });
        }

        const completion = await groq.chat.completions.create({
            messages: [
                { role: "system", content: SURGERY_SYSTEM_PROMPT },
                { role: "user", content: `PROBLEM: ${problemTitle}\n\nDESCRIPTION: ${problemDescription}\n\nUSER CODE:\n${code}` }
            ],
            model: MODEL,
            temperature: 0.5, // Deterministic but creative styling
            response_format: { type: "json_object" }
        });

        const text = completion.choices[0]?.message?.content || "{}";
        const data = JSON.parse(text);

        return NextResponse.json(data);
    } catch (e: any) {
        console.error("Code Surgery Error:", e);
        return NextResponse.json({ error: "Surgery Failed" }, { status: 500 });
    }
}
