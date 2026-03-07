'use client';
import { useEffect, useMemo, useState } from 'react';

function GothamSkyline() {
  const blocks = [
    [0, 70, 90], [60, 52, 140], [108, 88, 110], [188, 58, 160], [242, 96, 120],
    [332, 52, 170], [380, 106, 128], [478, 54, 176], [526, 92, 122], [612, 62, 150],
    [670, 104, 132], [766, 56, 176], [816, 92, 140], [902, 64, 160], [960, 100, 128],
    [1052, 56, 170], [1104, 92, 138], [1190, 64, 162], [1248, 98, 132], [1338, 74, 148],
  ];

  return (
    <svg viewBox="0 0 1440 260" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, right: 0, bottom: 0, width: '100%', height: 300, opacity: 0.55, filter: 'blur(0.6px)' }}>
      {blocks.map(([x, w, h], i) => (
        <rect key={i} x={x} y={260 - h} width={w} height={h} fill={i % 2 ? '#121827' : '#182033'} />
      ))}
      <rect x="0" y="258" width="1440" height="2" fill="#2a3755" />
    </svg>
  );
}

function BatmanRooftopSilhouette() {
  return (
    <svg viewBox="0 0 420 260" preserveAspectRatio="xMidYMax meet" style={{ position: 'absolute', right: '4%', bottom: 12, width: 'min(28vw, 300px)', height: 'auto', opacity: 0.58 }}>
      <rect x="0" y="210" width="420" height="50" fill="#0b0f1a" />
      <rect x="30" y="198" width="180" height="12" fill="#121827" />
      <path d="M262 204 C255 184, 252 161, 254 141 C257 112, 274 86, 292 86 C310 86, 327 111, 331 141 C334 163, 331 186, 323 204 Z" fill="#090c14" />
      <path d="M273 110 L282 86 L291 110 Z" fill="#090c14" />
      <path d="M293 110 L302 86 L311 110 Z" fill="#090c14" />
      <path d="M255 156 C283 134, 303 134, 331 156 L321 180 C304 170, 282 170, 265 180 Z" fill="#090c14" />
      <path d="M244 206 C260 172, 334 172, 350 206 L334 210 C323 190, 272 190, 260 210 Z" fill="#090c14" />
      <path d="M94 198 L92 174 L100 174 L102 198 Z" fill="#1d263b" />
      <path d="M132 198 L130 168 L138 168 L140 198 Z" fill="#1d263b" />
      <path d="M170 198 L168 176 L176 176 L178 198 Z" fill="#1d263b" />
    </svg>
  );
}

function BatSignalClouds({ mouseX }) {
  return (
    <>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 20%, rgba(170,185,215,0.2), rgba(45,55,80,0.04) 45%, transparent 70%), radial-gradient(ellipse at 72% 18%, rgba(150,170,205,0.16), rgba(45,55,80,0.03) 48%, transparent 72%)', filter: 'blur(2px)' }} />
      <div
        style={{
          position: 'absolute',
          left: `${mouseX - 8}%`,
          bottom: 42,
          transform: 'translateX(-50%)',
          width: 18,
          height: 18,
          borderRadius: '50%',
          background: 'rgba(245,197,24,0.8)',
          boxShadow: '0 0 14px rgba(245,197,24,0.75), 0 0 36px rgba(245,197,24,0.5)',
          transition: 'left 0.25s ease-out',
        }}
      />
      <svg
        viewBox="0 0 600 900"
        style={{
          position: 'absolute',
          left: `${mouseX - 8}%`,
          bottom: 44,
          transform: 'translateX(-50%)',
          width: 520,
          height: 720,
          opacity: 0.55,
          transition: 'left 0.25s ease-out',
          filter: 'blur(0.3px)',
        }}
      >
        <defs>
          <linearGradient id="beamCore" x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="rgba(245,197,24,0.34)" />
            <stop offset="45%" stopColor="rgba(245,197,24,0.2)" />
            <stop offset="100%" stopColor="rgba(245,197,24,0.04)" />
          </linearGradient>
          <linearGradient id="beamSoft" x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="rgba(245,197,24,0.18)" />
            <stop offset="55%" stopColor="rgba(245,197,24,0.09)" />
            <stop offset="100%" stopColor="rgba(245,197,24,0)" />
          </linearGradient>
        </defs>
        <path d="M300 890 L284 500 L150 0 L450 0 L316 500 Z" fill="url(#beamSoft)" />
        <path d="M300 890 L292 540 L215 0 L385 0 L308 540 Z" fill="url(#beamCore)" />
      </svg>
    </>
  );
}

export default function GothamBackground() {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mouseX, setMouseX] = useState(52);

  const rain = useMemo(
    () =>
      Array.from({ length: 320 }).map((_, i) => ({
        id: i,
        left: (i * 4.1) % 100,
        delay: (i * 0.07) % 2.8,
        duration: 0.42 + ((i * 0.08) % 0.78),
        opacity: 0.24 + ((i * 0.02) % 0.34),
        height: 15 + (i % 18),
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
      {/* Rainy Gotham scenic base */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(6,9,18,0.58), rgba(7,10,22,0.66) 40%, rgba(6,8,18,0.78) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 10%, rgba(190,210,255,0.11), transparent 38%), radial-gradient(circle at 75% 12%, rgba(170,195,245,0.1), transparent 42%)', filter: 'blur(1px)' }} />

      {/* Bat-signal and cloud cover */}
      <BatSignalClouds mouseX={mouseX} />

      {/* Rain */}
      <div style={{ position: 'absolute', inset: 0, opacity: 1 }}>
        {rain.map((drop) => (
          <span
            key={drop.id}
            style={{
              position: 'absolute',
              top: '-12%',
              left: `${drop.left}%`,
              width: 1.35,
              height: drop.height,
              background: `linear-gradient(180deg, rgba(180,220,255,0), rgba(180,220,255,${drop.opacity}), rgba(180,220,255,0))`,
              animation: `rainFall ${drop.duration}s linear ${drop.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* City with parallax */}
      <div style={{ position: 'absolute', inset: 0, transform: `translateY(${scrollY * 0.035}px)` }}>
        <GothamSkyline />
      </div>
      <div style={{ position: 'absolute', inset: 0, transform: `translateY(${scrollY * 0.07}px)`, opacity: 0.38 }}>
        <GothamSkyline />
      </div>

      {/* Rooftop silhouette */}
      <div style={{ position: 'absolute', inset: 0, transform: `translateY(${scrollY * 0.05}px)` }}>
        <BatmanRooftopSilhouette />
      </div>

      {/* Dark readable overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(5,8,18,0.22), rgba(5,8,18,0.36) 58%, rgba(5,8,18,0.48) 100%)' }} />

      <style>{`
        @keyframes rainFall {
          from { transform: translateY(-10vh) skewX(-12deg); }
          to { transform: translateY(118vh) skewX(-12deg); }
        }
      `}</style>
    </div>
  );
}
