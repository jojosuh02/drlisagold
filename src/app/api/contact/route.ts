import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import { site } from '@/lib/site';

const schema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(200),
  message: z.string().min(1).max(5000),
  subject: z.string().optional(),
  honeypot: z.string().max(0).optional(),
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
  }

  const { name, email, message, subject, honeypot } = parsed.data;
  if (honeypot) return NextResponse.json({ ok: true });

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? site.contactEmail;
  if (!apiKey) {
    console.error('RESEND_API_KEY not configured');
    return NextResponse.json({ error: 'Email not configured' }, { status: 503 });
  }

  const resend = new Resend(apiKey);
  try {
    await resend.emails.send({
      from: 'Dr. Lisa Gold <noreply@drlisagold.com>',
      to,
      replyTo: email,
      subject: subject ? `[Contact] ${subject}` : `[Contact] New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Resend error', err);
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}
