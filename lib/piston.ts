
const PISTON_API = "https://emkc.org/api/v2/piston";

export type PistonResult = {
    run: {
        stdout: string;
        stderr: string;
        output: string;
        code: number;
        signal: string | null;
    };
    compile?: {
        output: string;
        code: number;
    };
    language: string;
    version: string;
};

export async function executeCode(language: string, source: string, inputs: string[]): Promise<PistonResult[]> {
    // Piston doesn't support batch inputs in one request well (it expects one stdin).
    // So we will run them in parallel for efficiency.

    // Map nice language names to Piston ids
    const langMap: Record<string, string> = {
        'cpp': 'c++',
        'c++': 'c++',
        'python': 'python',
        'js': 'javascript',
        'javascript': 'javascript',
        'java': 'java'
    };

    const langId = langMap[language.toLowerCase()] || language;

    // For C++, we must ensure it's compiled. Piston handles this if we pass "run_memory" or similar, 
    // but the standard endpoint "execute" does it automatically.

    // Piston public API has rate limits, so parallel execution often fails with "Too Many Requests" (429).
    // Switching to Sequential execution.
    const results: PistonResult[] = [];

    for (const input of inputs) {
        try {
            // Add small delay between requests to be polite
            if (results.length > 0) await new Promise(r => setTimeout(r, 500));

            const res = await fetch(`${PISTON_API}/execute`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    language: langId,
                    version: "*", // Latest
                    files: [{ content: source }],
                    stdin: input,
                    args: [],
                    compile_timeout: 10000,
                    run_timeout: 3000,
                })
            });

            if (!res.ok) {
                const text = await res.text();
                console.error("Piston failed", text);
                throw new Error(`Execution Error (${res.status}): ${text}`);
            }

            const json = await res.json();
            results.push(json);
        } catch (e: any) {
            console.error("Piston Error Case:", e.message);
            results.push({
                run: { stdout: "", stderr: `Exec Error: ${e.message}`, output: "", code: 1, signal: null },
                language: langId,
                version: "*"
            } as PistonResult);
        }
    }

    return results;
}
