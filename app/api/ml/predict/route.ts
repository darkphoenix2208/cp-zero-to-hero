import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { user, problems } = await req.json();

        if (!user || !problems) return NextResponse.json({ error: "Invalid payload" }, { status: 400 });

        const results = problems.map((prob: any) => {
            const userRating = user.user_rating || 1200;
            const probRating = prob.rating || 1200;

            const ratingDiff = userRating - probRating;

            // Heuristic Sigmoid Function (Simulating ML Model)
            // z score: diff / 400 (Elo style)
            const z = ratingDiff / 400.0;
            const probability = 1.0 / (1.0 + Math.exp(-z));

            let label = "Challenge";
            if (probability > 0.8) label = "Comfort Zone";
            else if (probability > 0.5) label = "Sweet Spot";

            return {
                problem_id: prob.problem_id,
                win_probability: Number(probability.toFixed(2)),
                label
            };
        });

        return NextResponse.json({ predictions: results });

    } catch (e: any) {
        console.error("ML Predict Error:", e);
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
