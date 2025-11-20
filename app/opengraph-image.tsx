import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Lazy Dev: Office Survival';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(to bottom right, #1e293b, #334155)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <div style={{ fontSize: 200, marginBottom: 20 }}>😴</div>
        <div style={{ fontSize: 72, fontWeight: 'bold', marginBottom: 20 }}>
          Lazy Dev: Office Survival
        </div>
        <div
          style={{
            fontSize: 36,
            opacity: 0.8,
            textAlign: 'center',
            maxWidth: 900,
          }}
        >
          Can you survive the workday doing the bare minimum?
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
