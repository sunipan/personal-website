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
        <svg width="140" height="140" viewBox="0 0 512 512">
          <defs>
            <linearGradient id="g" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
          </defs>
          <path
            d="M190 175 L110 256 L190 337"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="22"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="242"
            y="138"
            width="28"
            height="236"
            rx="14"
            fill="url(#g)"
            transform="rotate(15, 256, 256)"
          />
          <path
            d="M322 175 L402 256 L322 337"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="22"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
