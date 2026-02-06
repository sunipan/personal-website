import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
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
          borderRadius: 32,
        }}
      >
        {/* Left chevron */}
        <span
          style={{
            fontSize: 60,
            color: 'rgba(255,255,255,0.4)',
            fontFamily: 'monospace',
            marginRight: -5,
          }}
        >
          {'<'}
        </span>
        
        {/* Gradient bar */}
        <div
          style={{
            width: 12,
            height: 80,
            background: 'linear-gradient(180deg, #3b82f6 0%, #ef4444 100%)',
            borderRadius: 4,
            margin: '0 2px',
          }}
        />
        
        {/* Right chevron */}
        <span
          style={{
            fontSize: 60,
            color: 'rgba(255,255,255,0.4)',
            fontFamily: 'monospace',
            marginLeft: -5,
          }}
        >
          {'>'}
        </span>
      </div>
    ),
    { ...size }
  );
}
