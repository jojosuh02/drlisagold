import { NextResponse } from 'next/server';
import { z } from 'zod';

const listKey = z.enum(['retreats', 'trainings', 'general']);

const schema = z.object({
  email: z.string().email().max(200),
  firstName: z.string().max(80).optional(),
  lists: z.array(listKey).min(1).max(3),
});

type ListKey = z.infer<typeof listKey>;

const AUDIENCE_ENV: Record<ListKey, string> = {
  retreats: 'RESEND_AUDIENCE_RETREATS_ID',
  trainings: 'RESEND_AUDIENCE_TRAININGS_ID',
  general: 'RESEND_AUDIENCE_GENERAL_ID',
};

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
  const { email, firstName, lists } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY not configured');
    return NextResponse.json({ error: 'Newsletter not configured' }, { status: 503 });
  }

  const uniqueLists = Array.from(new Set(lists));
  const audienceIds = uniqueLists.map((key) => ({
    key,
    id: process.env[AUDIENCE_ENV[key]],
  }));

  const missing = audienceIds.filter((a) => !a.id);
  if (missing.length > 0) {
    console.error(
      'Missing Resend audience IDs:',
      missing.map((m) => AUDIENCE_ENV[m.key]).join(', '),
    );
    return NextResponse.json({ error: 'Newsletter not configured' }, { status: 503 });
  }

  // Add the contact to each selected audience. Resend rejects with 422 if the
  // contact already exists in an audience — we treat that as success.
  const results = await Promise.all(
    audienceIds.map(async ({ key, id }) => {
      const res = await fetch(`https://api.resend.com/audiences/${id}/contacts`, {
        method: 'POST',
        headers: {
          authorization: `Bearer ${apiKey}`,
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          email,
          first_name: firstName,
          unsubscribed: false,
        }),
      });
      const ok = res.ok || res.status === 422;
      if (!ok) {
        const text = await res.text().catch(() => '');
        console.error(`Resend add to ${key} failed`, res.status, text);
      }
      return { key, ok };
    }),
  );

  const failed = results.filter((r) => !r.ok);
  if (failed.length > 0) {
    return NextResponse.json(
      {
        error: 'Subscribe partially failed',
        failedLists: failed.map((f) => f.key),
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, lists: uniqueLists });
}
