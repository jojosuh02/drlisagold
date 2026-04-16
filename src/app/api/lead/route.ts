import { NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email().max(200),
  listId: z.string().min(1).max(80),
  firstName: z.string().max(80).optional(),
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

  const { email, listId, firstName } = parsed.data;

  const apiKey = process.env.LOOPS_API_KEY;
  if (!apiKey) {
    console.error('LOOPS_API_KEY not configured');
    return NextResponse.json({ error: 'Newsletter not configured' }, { status: 503 });
  }

  try {
    const upsert = await fetch('https://app.loops.so/api/v1/contacts/create', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${apiKey}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email,
        firstName,
        source: listId,
        userGroup: listId,
        subscribed: true,
      }),
    });

    if (!upsert.ok && upsert.status !== 409) {
      const text = await upsert.text();
      console.error('Loops upsert failed', upsert.status, text);
      return NextResponse.json({ error: 'Subscribe failed' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Loops error', err);
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
  }
}
