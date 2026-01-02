import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const CLIENT_ID = process.env.CF_CLIENT_ID;
    const REDIRECT_URI = `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3003'}/api/oauth/callback`;

    if (!CLIENT_ID) {
        return NextResponse.json({ error: "CF_CLIENT_ID not configured in .env" }, { status: 500 });
    }

    const url = `https://codeforces.com/oauth/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;
    return NextResponse.redirect(url);
}
