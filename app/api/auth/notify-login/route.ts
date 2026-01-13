
import { auth } from '@/auth'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import LoginAlertEmail from '@/emails/LoginAlert'

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
    try {
        const resendApiKey = process.env.RESEND_API_KEY
        if (!resendApiKey) {
            console.warn('RESEND_API_KEY is not set')
            return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
        }
        const resend = new Resend(resendApiKey)

        // Verify session using NextAuth
        const session = await auth()

        if (!session?.user?.email) {
            console.log("❌ Helper Alert: Authentication failed - No session found.")
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        // Extract device info from headers
        const ip = req.headers.get('x-forwarded-for') || 'Unknown IP'
        const userAgent = req.headers.get('user-agent') || 'Unknown Device'
        const loginTime = new Date().toLocaleString()

        // Send email via Resend
        const { data, error } = await resend.emails.send({
            from: 'CP Zero To Hero Security <onboarding@resend.dev>', // Free tier Requirement
            to: [session.user.email],
            subject: 'New Login Detected',
            react: LoginAlertEmail({
                userEmail: session.user.email,
                loginTime,
                ipAddress: ip,
                device: userAgent,
            }),
        })

        if (error) {
            console.error('❌ Resend Error:', error)
            return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
        }

        console.log('✅ Notification Sent Successfully to:', session.user.email)
        return NextResponse.json({ success: true, data })

    } catch (err) {
        console.error('Unexpected error in notify-login:', err)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
