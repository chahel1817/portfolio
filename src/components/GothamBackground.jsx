'use client';
import { useEffect, useMemo, useState } from 'react';

function CityLayer({ opacity = 0.2, offset = 0, height = 220, tone = '#1a2238' }) {
  const buildings = useMemo(
    () => [
      [0, 70, 110], [55, 40, 150], [95, 80, 120], [170, 55, 160], [220, 90, 130],
      [305, 50, 170], [350, 95, 140], [435, 45, 180], [470, 80, 125], [540, 60, 155],
      [595, 95, 135], [680, 50, 175], [725, 90, 145], [805, 60, 165], [860, 88, 128],
      [940, 52, 172], [990, 86, 148], [1068, 62, 160], [1128, 100, 132], [1218, 54, 170],
      [1268, 90, 142], [1350, 70, 152],
    ],
    []
  );

  return (
    <svg
      viewBox="0 0 1440 220"
      preserveAspectRatio="none"
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: offset,
        width: '100%',
        height,
        opacity,
      }}
    >
      {buildings.map(([x, w, h], i) => (
        <rect key={i} x={x} y={220 - h} width={w} height={h} fill={i % 2 ? tone : '#141a2e'} />
      ))}
      <rect x="0" y="218" width="1440" height="2" fill="#2a3855" />
    </svg>
  );
}

function BatSilhouette({ size = 26, opacity = 0.35 }) {
  return (
    <svg width={size} height={Math.round(size * 0.6)} viewBox="0 0 200 124" fill="none" style={{ opacity }}>
      <path
        d="M6 70 L30 42 L44 60 L70 34 L88 64 L100 50 L112 64 L130 34 L156 60 L170 42 L194 70 L168 76 L146 94 L124 80 L100 102 L76 80 L54 94 L32 76 Z"
        fill="#f5c518"
      />
    </svg>
  );
}

export default function GothamBackground() {
  const [scrollY, setScrollY] = useState(0);
  const [mouseX, setMouseX] = useState(50);
  const [mounted, setMounted] = useState(false);

  const rainNear = useMemo(
    () =>
      Array.from({ length: 120 }).map((_, i) => ({
        id: i,
        left: (i * 7.9) % 100,
        delay: (i * 0.09) % 2.6,
        duration: 0.5 + ((i * 0.11) % 0.8),
        opacity: 0.16 + ((i * 0.02) % 0.22),
        height: 14 + (i % 14),
      })),
    []
  );

  const rainFar = useMemo(
    () =>
      Array.from({ length: 80 }).map((_, i) => ({
        id: i,
        left: (i * 9.7) % 100,
        delay: (i * 0.14) % 3.2,
        duration: 0.8 + ((i * 0.12) % 1.2),
        opacity: 0.08 + ((i * 0.015) % 0.14),
        height: 12 + (i % 9),
      })),
    []
  );

  const bats = useMemo(
    () =>
      Array.from({ length: 8 }).map((_, i) => ({
        id: i,
        top: 12 + ((i * 9) % 42),
        delay: (i * 1.4) % 7,
        duration: 12 + (i % 6),
        size: 18 + (i % 4) * 6,
        opacity: 0.22 + (i % 3) * 0.1,
      })),
    []
  );

  const stars = useMemo(
    () =>
      Array.from({ length: 45 }).map((_, i) => ({
        id: i,
        left: (i * 17.3) % 100,
        top: 4 + ((i * 7.1) % 40),
        size: 1 + (i % 2),
        delay: (i * 0.37) % 4,
        duration: 2.5 + ((i * 0.21) % 2.2),
        opacity: 0.18 + ((i * 0.02) % 0.25),
      })),
    []
  );

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrollY(window.scrollY || 0);
    const onMove = (e) => setMouseX((e.clientX / window.innerWidth) * 100);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none', overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 20% 15%, rgba(245,197,24,0.12), transparent 32%), radial-gradient(circle at 85% 20%, rgba(0,245,255,0.09), transparent 25%), linear-gradient(180deg, rgba(4,6,14,0.14), rgba(7,9,20,0.2) 45%, rgba(4,6,14,0.28))',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: '-12%',
          left: `${mouseX - 10}%`,
          width: 280,
          height: 280,
          transform: `translateX(-50%) translateY(${scrollY * 0.03}px)`,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,232,150,0.14), transparent 64%)',
          filter: 'blur(2px)',
          transition: 'left 0.2s ease-out',
        }}
      />

      <div style={{ position: 'absolute', top: 0, left: '-25%', width: '55%', height: '100%', transform: `translateY(${scrollY * 0.03}px)` }}>
        <div style={{ width: '100%', height: '100%', background: 'linear-gradient(12deg, transparent 42%, rgba(245,197,24,0.08) 52%, rgba(245,197,24,0.015) 68%, transparent 76%)', filter: 'blur(1px)' }} />
      </div>
      <div style={{ position: 'absolute', top: 0, right: '-25%', width: '55%', height: '100%', transform: `translateY(${scrollY * 0.05}px)` }}>
        <div style={{ width: '100%', height: '100%', background: 'linear-gradient(-10deg, transparent 40%, rgba(0,245,255,0.07) 50%, rgba(0,245,255,0.015) 66%, transparent 74%)', filter: 'blur(1px)' }} />
      </div>

      <div style={{ position: 'absolute', top: '8%', left: '-20%', width: '60%', height: 140, opacity: 0.2, animation: 'fogDrift 24s ease-in-out infinite' }}>
        <div style={{ width: '100%', height: '100%', borderRadius: 120, background: 'radial-gradient(ellipse at center, rgba(170,190,220,0.2), rgba(170,190,220,0.02) 70%, transparent)' }} />
      </div>
      <div style={{ position: 'absolute', top: '18%', right: '-20%', width: '55%', height: 120, opacity: 0.16, animation: 'fogDriftReverse 30s ease-in-out infinite' }}>
        <div style={{ width: '100%', height: '100%', borderRadius: 120, background: 'radial-gradient(ellipse at center, rgba(150,180,220,0.18), rgba(150,180,220,0.02) 70%, transparent)' }} />
      </div>

      <div style={{ position: 'absolute', inset: 0, opacity: 0.95 }}>
        {rainNear.map((drop) => (
          <span
            key={`near-${drop.id}`}
            style={{
              position: 'absolute',
              top: '-14%',
              left: `${drop.left}%`,
              width: 1.2,
              height: drop.height,
              background: `linear-gradient(180deg, rgba(180,220,255,0), rgba(180,220,255,${drop.opacity}), rgba(180,220,255,0))`,
              animation: `rainFall ${drop.duration}s linear ${drop.delay}s infinite`,
            }}
          />
        ))}
      </div>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.6 }}>
        {rainFar.map((drop) => (
          <span
            key={`far-${drop.id}`}
            style={{
              position: 'absolute',
              top: '-14%',
              left: `${drop.left}%`,
              width: 1,
              height: drop.height,
              background: `linear-gradient(180deg, rgba(180,220,255,0), rgba(180,220,255,${drop.opacity}), rgba(180,220,255,0))`,
              animation: `rainFallFar ${drop.duration}s linear ${drop.delay}s infinite`,
            }}
          />
        ))}
      </div>

      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '55%', opacity: 0.35 }}>
        {bats.map((bat) => (
          <span
            key={bat.id}
            style={{
              position: 'absolute',
              top: `${bat.top}%`,
              left: '-12%',
              animation: `batFly ${bat.duration}s linear ${bat.delay}s infinite`,
            }}
          >
            <BatSilhouette size={bat.size} opacity={bat.opacity} />
          </span>
        ))}
      </div>

      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '48%', opacity: 0.7 }}>
        {stars.map((star) => (
          <span
            key={star.id}
            style={{
              position: 'absolute',
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: star.size,
              height: star.size,
              borderRadius: '50%',
              background: 'rgba(210,225,255,1)',
              boxShadow: '0 0 6px rgba(180,210,255,0.6)',
              opacity: star.opacity,
              animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
            }}
          />
        ))}
      </div>

      <div style={{ position: 'absolute', inset: 0, background: 'rgba(170, 205, 255, 0.0)', animation: 'lightningFlash 10s ease-in-out infinite' }} />

      <div style={{ position: 'absolute', inset: 0, transform: `translateY(${scrollY * 0.04}px)` }}>
        <CityLayer opacity={0.22} offset={0} height={260} tone="#1b2744" />
      </div>
      <div style={{ position: 'absolute', inset: 0, transform: `translateY(${scrollY * 0.08}px)` }}>
        <CityLayer opacity={0.4} offset={-8} height={238} tone="#223358" />
      </div>

      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 115%, rgba(6,8,18,0.03), rgba(6,8,18,0.2) 36%, rgba(6,8,18,0.42) 72%)' }} />

      <style>{`
        @keyframes rainFall {
          from { transform: translateY(-8vh) skewX(-12deg); }
          to { transform: translateY(118vh) skewX(-12deg); }
        }
        @keyframes rainFallFar {
          from { transform: translateY(-12vh) skewX(-9deg); }
          to { transform: translateY(115vh) skewX(-9deg); }
        }
        @keyframes batFly {
          0% { transform: translateX(0) translateY(0) scale(0.9); opacity: 0; }
          8% { opacity: 1; }
          50% { transform: translateX(60vw) translateY(-16px) scale(1); opacity: 0.9; }
          100% { transform: translateX(120vw) translateY(-6px) scale(0.85); opacity: 0; }
        }
        @keyframes lightningFlash {
          0%, 8%, 46%, 100% { background: rgba(170,205,255,0); }
          6% { background: rgba(170,205,255,0.02); }
          7% { background: rgba(170,205,255,0.06); }
          44% { background: rgba(170,205,255,0.02); }
          45% { background: rgba(170,205,255,0.05); }
        }
        @keyframes fogDrift {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(10%) translateY(6px); }
        }
        @keyframes fogDriftReverse {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-12%) translateY(-5px); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.25); }
        }
      `}</style>
    </div>
  );
}
