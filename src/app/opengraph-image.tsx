import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Sebi Unipan - Software Engineer';
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
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          backgroundImage:
            'radial-gradient(circle at 25% 25%, #1a1a2e 0%, transparent 50%), radial-gradient(circle at 75% 75%, #16213e 0%, transparent 50%)',
        }}
      >
        {/* Code brackets with name */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          {/* Left chevron < */}
          <span
            style={{
              fontSize: 80,
              color: 'rgba(255,255,255,0.3)',
              fontFamily: 'monospace',
            }}
          >
            {'<'}
          </span>
          
          {/* Gradient slash / - rotated bar */}
          <div
            style={{
              width: 10,
              height: 110,
              background: 'linear-gradient(180deg, #3b82f6 0%, #ef4444 100%)',
              borderRadius: 5,
              transform: 'rotate(15deg)',
            }}
          />
          
          {/* Name */}
          <span
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: 'white',
              letterSpacing: '-0.02em',
            }}
          >
            Sebi Unipan
          </span>
          
          {/* Right chevron > */}
          <span
            style={{
              fontSize: 80,
              color: 'rgba(255,255,255,0.3)',
              fontFamily: 'monospace',
            }}
          >
            {'>'}
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            marginTop: 30,
            fontSize: 28,
            color: '#22c55e',
            fontFamily: 'monospace',
          }}
        >
          /* Software engineer. Problem solver. Builder. */
        </div>

        {/* Skills */}
        <div
          style={{
            marginTop: 40,
            display: 'flex',
            gap: '12px',
          }}
        >
          {['TypeScript', 'React', 'Kotlin', 'Node.js'].map((skill) => (
            <div
              key={skill}
              style={{
                padding: '8px 16px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: 8,
                color: 'rgba(255,255,255,0.7)',
                fontSize: 20,
              }}
            >
              {skill}
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            fontSize: 20,
            color: 'rgba(255,255,255,0.4)',
          }}
        >
          sebiunipan.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
