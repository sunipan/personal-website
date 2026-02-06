import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          borderRadius: 6,
        }}
      >
        <div
          style={{
            width: 4,
            height: 20,
            background: 'linear-gradient(180deg, #3b82f6 0%, #ef4444 100%)',
            borderRadius: 2,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
