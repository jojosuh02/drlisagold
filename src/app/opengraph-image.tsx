import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Dr. Lisa Gold — Integrative Relationship, Sex & Psychedelic-Assisted Psychotherapist';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #faf6ee 0%, #f4ecd8 50%, #e8d9b0 100%)',
          padding: 80,
        }}
      >
        <div style={{ fontSize: 20, letterSpacing: 8, color: '#9a7834', textTransform: 'uppercase', marginBottom: 24 }}>
          Dr. Lisa Gold, PhD
        </div>
        <div style={{ fontSize: 64, lineHeight: 1.1, color: '#1a1a1a', fontWeight: 500, maxWidth: 900 }}>
          Integrative Relationship, Sex &amp; Psychedelic-Assisted Psychotherapist
        </div>
        <div style={{ marginTop: 48, fontSize: 22, color: '#555' }}>drlisagold.com</div>
      </div>
    ),
    size,
  );
}
