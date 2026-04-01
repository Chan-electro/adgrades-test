import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, service, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      // Fallback: log and return success (for builds without Resend configured)
      console.warn('RESEND_API_KEY not set — email not sent');
      return NextResponse.json({ success: true });
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'AdGrades Contact Form <onboarding@resend.dev>',
        to: ['info@adgrades.in'],
        reply_to: email,
        subject: `New Inquiry from ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0B57D0;">New Contact Form Submission</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px; color: #64748B; font-weight: bold;">Name</td><td style="padding: 8px;">${name}</td></tr>
              <tr><td style="padding: 8px; color: #64748B; font-weight: bold;">Email</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
              ${service ? `<tr><td style="padding: 8px; color: #64748B; font-weight: bold;">Service</td><td style="padding: 8px;">${service}</td></tr>` : ''}
              ${budget ? `<tr><td style="padding: 8px; color: #64748B; font-weight: bold;">Budget</td><td style="padding: 8px;">${budget}</td></tr>` : ''}
            </table>
            <hr style="margin: 16px 0; border-color: #E2E8F0;" />
            <h3 style="color: #0A0A0A;">Message</h3>
            <p style="color: #374151; line-height: 1.6;">${message.replace(/\n/g, '<br/>')}</p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact route error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
