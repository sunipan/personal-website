import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Sebi Unipan - Software Engineer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  // Fetch fonts in parallel - both must be .woff format (not woff2)
  const [fontData, monoFontData] = await Promise.all([
    fetch(new URL('../../public/fonts/GeneralSans-Medium.woff', import.meta.url)).then((res) =>
      res.arrayBuffer(),
    ),
    fetch(new URL('../../public/fonts/SourceCodePro-Regular.woff', import.meta.url)).then((res) =>
      res.arrayBuffer(),
    ),
  ]);

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
            gap: '12px',
          }}
        >
          {/* Left chevron < as SVG path */}
          <svg width="45" height="63" viewBox="0 0 58 81" style={{ marginRight: '4px' }}>
            <path
              d="M52 6L10 40.5L52 75"
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>

          {/* Gradient slash / - sharp edges, steeper angle */}
          <div
            style={{
              width: 10,
              height: 100,
              background: 'linear-gradient(180deg, #3b82f6 0%, #ef4444 100%)',
              borderRadius: 2,
              transform: 'rotate(20deg)',
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)',
            }}
          />

          {/* Name */}
          <span
            style={{
              fontSize: 92,
              fontWeight: 500,
              fontFamily: 'General Sans',
              color: 'white',
              letterSpacing: '-0.03em',
              marginLeft: '8px',
            }}
          >
            Sebi Unipan
          </span>

          {/* Right chevron > as SVG path */}
          <svg width="45" height="63" viewBox="0 0 58 81" style={{ marginLeft: '8px' }}>
            <path
              d="M6 6L48 40.5L6 75"
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>

        {/* Tagline */}
        <div
          style={{
            marginTop: 30,
            fontSize: 26,
            color: '#22c55e',
            fontFamily: 'Source Code Pro',
            letterSpacing: '0.02em',
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
                backgroundColor: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 8,
                color: 'rgba(255,255,255,0.7)',
                fontSize: 18,
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
            fontSize: 18,
            color: 'rgba(255,255,255,0.4)',
          }}
        >
          sebiunipan.com
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'General Sans',
          data: fontData,
          style: 'normal',
          weight: 500,
        },
        {
          name: 'Source Code Pro',
          data: monoFontData,
          style: 'normal',
          weight: 400,
        },
      ],
    },
  );
}
