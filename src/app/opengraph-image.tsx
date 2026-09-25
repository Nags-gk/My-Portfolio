import { ImageResponse } from 'next/og';

export const alt = 'Nagaraj GK — Software Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background: 'linear-gradient(160deg, #f4efe8 0%, #ece5da 55%, #e6ded1 100%)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: 520,
            height: 520,
            borderRadius: '50%',
            background: '#ff8a65',
            opacity: 0.35,
            filter: 'blur(100px)',
            top: -160,
            left: -120,
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: 520,
            height: 520,
            borderRadius: '50%',
            background: '#7b8dff',
            opacity: 0.3,
            filter: 'blur(100px)',
            bottom: -160,
            right: -120,
            display: 'flex',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 16, height: 16, borderRadius: 8, background: '#ff4d4d', display: 'flex' }} />
          <div style={{ fontSize: 28, fontWeight: 700, color: '#1a1a1a', display: 'flex' }}>NGK</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ fontSize: 72, fontWeight: 800, color: '#1a1a1a', letterSpacing: -2, display: 'flex' }}>
            Nagaraj G. Kanni
          </div>
          <div style={{ fontSize: 32, color: '#3a382f', display: 'flex' }}>
            Software Engineer, Applied ML and Full-Stack Systems
          </div>
        </div>

        <div style={{ display: 'flex', gap: 12 }}>
          {['Taxbot', 'Snooptrade', 'Quantum ML', 'Canvas-Go'].map((t) => (
            <div
              key={t}
              style={{
                fontSize: 18,
                fontFamily: 'monospace',
                color: '#767267',
                border: '1px solid #d9d6cf',
                borderRadius: 999,
                padding: '8px 18px',
                background: 'rgba(255,255,255,0.55)',
                display: 'flex',
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
