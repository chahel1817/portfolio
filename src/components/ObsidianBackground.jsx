'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import PrismaticFluidWaves from '@/components/PrismaticFluidWaves';

export default function ObsidianBackground() {
  const { isLofi } = useTheme();
  const reducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 35 });
  const [sparkles, setSparkles] = useState([]);
  const lastSparkleRef = useRef(0);
  const rafIdRef = useRef(null);

  // Micro-photons / crystalline stardust floating in the background
  const photons = useMemo(
    () =>
      Array.from({ length: reducedMotion ? 0 : isMobile ? 12 : 28 }).map((_, i) => ({
        id: i,
        left: (i * 13.7) % 98 + 1,
        top: (i * 17.3) % 92 + 2,
        size: 2 + (i % 3),
        dur: 7 + (i % 8) * 1.5,
        delay: (i * 0.45) % 5,
        color:
          i % 4 === 0
            ? '#00f5ff' // Neon Cyan
            : i % 4 === 1
            ? '#f5c518' // Warm Gold
            : i % 4 === 2
            ? '#a855f7' // Prismatic Violet
            : '#ffffff', // Pure Specular White
        glowRadius: 4 + (i % 3) * 3,
      })),
    [reducedMotion, isMobile]
  );

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });

    const onMove = (e) => {
      if (reducedMotion || window.innerWidth < 768) return;
      if (rafIdRef.current) return;
      rafIdRef.current = requestAnimationFrame(() => {
        rafIdRef.current = null;
        const px = (e.clientX / window.innerWidth) * 100;
        const py = (e.clientY / window.innerHeight) * 100;
        setMousePos({ x: px, y: py });

        // Spawn interactive chromatic prism glints on cursor movement
        const now = performance.now();
        if (now - lastSparkleRef.current > 200) {
          lastSparkleRef.current = now;
          const id = now;
          setSparkles((prev) => [
            ...prev.slice(-5),
            {
              id,
              x: e.clientX,
              y: e.clientY,
              size: 14 + Math.random() * 12,
              hue: Math.random() > 0.5 ? 'cyan' : 'gold',
            },
          ]);
          setTimeout(() => {
            setSparkles((prev) => prev.filter((s) => s.id !== id));
          }, 800);
        }
      });
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', onMove);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [reducedMotion]);

  if (!mounted) return null;

  /* ─────────────────────────────────────────────────────────────
     LOFI / LIGHT MODE: Frosted Alabaster & Sunlit Golden Quartz
     ───────────────────────────────────────────────────────────── */
  if (isLofi) {
    return (
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 40%, #f1f5f9 100%)',
        }}
      >
        {/* Dynamic Sunlit Cursor Follower */}
        {!reducedMotion && (
          <div
            style={{
              position: 'absolute',
              top: `${mousePos.y}%`,
              left: `${mousePos.x}%`,
              width: isMobile ? 320 : 540,
              height: isMobile ? 320 : 540,
              transform: 'translate(-50%, -50%)',
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, rgba(2, 132, 199, 0.08) 35%, transparent 70%)',
              filter: 'blur(50px)',
              transition: 'top 0.25s cubic-bezier(0.2, 0.8, 0.2, 1), left 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)',
              pointerEvents: 'none',
            }}
          />
        )}

        {/* Soft Golden Prism Aurora - Top Right */}
        <div
          style={{
            position: 'absolute',
            top: '-10%',
            right: '-8%',
            width: '65vw',
            height: '65vw',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(245, 158, 11, 0.18) 0%, rgba(254, 243, 199, 0.25) 30%, transparent 68%)',
            filter: 'blur(70px)',
            animation: reducedMotion ? 'none' : 'sunbeamDrift 14s ease-in-out infinite alternate',
          }}
        />

        {/* Crystal Azure Sky Tint - Bottom Left */}
        <div
          style={{
            position: 'absolute',
            bottom: '-12%',
            left: '-10%',
            width: '60vw',
            height: '60vw',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(2, 132, 199, 0.14) 0%, rgba(224, 242, 254, 0.3) 40%, transparent 72%)',
            filter: 'blur(80px)',
            animation: reducedMotion ? 'none' : 'azureDrift 16s ease-in-out infinite alternate',
          }}
        />

        {/* Prismatic Violet Center Sheen */}
        <div
          style={{
            position: 'absolute',
            top: '40%',
            left: '30%',
            width: '45vw',
            height: '45vw',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(168, 85, 247, 0.06) 0%, transparent 65%)',
            filter: 'blur(90px)',
          }}
        />

        {/* Frosted Glass Geometric Lattice */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(148, 163, 184, 0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(148, 163, 184, 0.12) 1px, transparent 1px)
            `,
            backgroundSize: '72px 72px',
            opacity: 0.7,
          }}
        />

        {/* Interactive Sunlit Glint Sparkles */}
        {sparkles.map((s) => (
          <div
            key={s.id}
            style={{
              position: 'fixed',
              top: s.y,
              left: s.x,
              width: s.size,
              height: s.size,
              transform: 'translate(-50%, -50%) rotate(45deg)',
              background:
                s.hue === 'gold'
                  ? 'radial-gradient(circle, #f59e0b 0%, #fbbf24 40%, transparent 75%)'
                  : 'radial-gradient(circle, #0284c7 0%, #38bdf8 40%, transparent 75%)',
              filter: 'blur(1px) drop-shadow(0 0 6px rgba(245, 158, 11, 0.5))',
              animation: 'sparklePop 0.8s ease-out forwards',
              pointerEvents: 'none',
              zIndex: 3,
            }}
          />
        ))}

        {/* Ambient floating quartz micro-photons */}
        {photons.slice(0, 18).map((p) => {
          const photonColor =
            p.id % 3 === 0
              ? '#d97706' // Warm Amber
              : p.id % 3 === 1
              ? '#0284c7' // Azure
              : '#7c3aed'; // Violet
          return (
            <div
              key={p.id}
              style={{
                position: 'absolute',
                left: `${p.left}%`,
                top: `${p.top}%`,
                width: p.size + 1,
                height: p.size + 1,
                borderRadius: '50%',
                background: photonColor,
                opacity: 0.5,
                boxShadow: `0 0 10px ${photonColor}60`,
                animation: reducedMotion ? 'none' : `quartzFloat ${p.dur}s ease-in-out ${p.delay}s infinite`,
              }}
            />
          );
        })}

        <style>{`
          @keyframes sunbeamDrift {
            0% { transform: translate(0, 0) scale(1); opacity: 0.85; }
            50% { transform: translate(-30px, 20px) scale(1.08); opacity: 1; }
            100% { transform: translate(20px, -15px) scale(0.96); opacity: 0.9; }
          }
          @keyframes azureDrift {
            0% { transform: translate(0, 0) scale(1); opacity: 0.8; }
            50% { transform: translate(25px, -20px) scale(1.06); opacity: 1; }
            100% { transform: translate(-20px, 15px) scale(0.94); opacity: 0.85; }
          }
          @keyframes quartzFloat {
            0%, 100% { transform: translateY(0) scale(1); opacity: 0.35; }
            50% { transform: translateY(-20px) scale(1.25); opacity: 0.75; }
          }
          @keyframes sparklePop {
            0% { transform: translate(-50%, -50%) rotate(45deg) scale(0.4); opacity: 0; }
            40% { transform: translate(-50%, -50%) rotate(90deg) scale(1.2); opacity: 1; }
            100% { transform: translate(-50%, -50%) rotate(135deg) scale(0.2); opacity: 0; }
          }
        `}</style>
      </div>
    );
  }

  /* ─────────────────────────────────────────────────────────────
     DARK MODE: Obsidian Prismatic Glass & Chromatic Caustics
     ───────────────────────────────────────────────────────────── */
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1,
        pointerEvents: 'none',
        overflow: 'hidden',
        background: '#07080d',
      }}
    >
      {/* 1. Deep Obsidian Luxury Slate Base Gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 90% 60% at 50% -10%, rgba(20, 26, 45, 0.75) 0%, transparent 70%),
            radial-gradient(ellipse 70% 50% at 90% 40%, rgba(13, 20, 36, 0.5) 0%, transparent 60%),
            radial-gradient(ellipse 70% 50% at 10% 75%, rgba(18, 16, 32, 0.45) 0%, transparent 60%),
            linear-gradient(180deg, #07080d 0%, #090b12 50%, #050609 100%)
          `,
        }}
      />

      {/* 2. Interactive Prismatic Cursor Light Lens */}
      {!reducedMotion && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `
              radial-gradient(450px circle at ${mousePos.x}% ${mousePos.y}%, rgba(0, 245, 255, 0.075), transparent 55%),
              radial-gradient(350px circle at ${mousePos.x + 3}% ${mousePos.y + 2}%, rgba(245, 197, 24, 0.06), transparent 50%),
              radial-gradient(280px circle at ${mousePos.x - 2}% ${mousePos.y - 3}%, rgba(168, 85, 247, 0.05), transparent 45%)
            `,
            transition: 'background 0.15s ease-out',
          }}
        />
      )}

      {/* 3. Prismatic Caustic Light Waves (Angular Spectral Refraction) */}
      <div
        className="prism-caustic-layer"
        style={{
          position: 'absolute',
          inset: '-20%',
          width: '140%',
          height: '140%',
          opacity: 0.16,
          mixBlendMode: 'screen',
          background: `
            linear-gradient(115deg,
              transparent 20%,
              rgba(0, 245, 255, 0.28) 32%,
              rgba(168, 85, 247, 0.22) 40%,
              rgba(245, 197, 24, 0.26) 48%,
              transparent 60%
            )
          `,
          filter: 'blur(35px)',
          animation: reducedMotion ? 'none' : 'causticSweep 18s ease-in-out infinite alternate',
        }}
      />

      {/* Secondary Counter-Refraction Wave for depth */}
      <div
        className="prism-caustic-layer-secondary"
        style={{
          position: 'absolute',
          inset: '-20%',
          width: '140%',
          height: '140%',
          opacity: 0.12,
          mixBlendMode: 'screen',
          background: `
            linear-gradient(245deg,
              transparent 25%,
              rgba(245, 197, 24, 0.25) 38%,
              rgba(0, 245, 255, 0.3) 48%,
              rgba(59, 130, 246, 0.2) 56%,
              transparent 70%
            )
          `,
          filter: 'blur(45px)',
          animation: reducedMotion ? 'none' : 'causticCounterSweep 24s ease-in-out infinite alternate',
        }}
      />

      {/* Interactive Mathematical Fluid Aurora Waves */}
      <PrismaticFluidWaves />

      {/* 4. Elegant Minimalist Architectural Grid (Subtle Glass Lattice) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: '96px 96px',
          opacity: 0.75,
          maskImage: 'radial-gradient(ellipse at 50% 45%, black 40%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 45%, black 40%, transparent 85%)',
        }}
      />

      {/* 5. Scanning Chromatic Axis Laser Lines (Horizontal & Vertical Precision sweep) */}
      {!reducedMotion && (
        <>
          <div
            style={{
              position: 'absolute',
              top: '28%',
              left: 0,
              right: 0,
              height: 1,
              background: 'linear-gradient(90deg, transparent 5%, rgba(0, 245, 255, 0.45) 50%, transparent 95%)',
              opacity: 0.35,
              filter: 'drop-shadow(0 0 6px rgba(0, 245, 255, 0.8))',
              animation: 'axisPulse 9s ease-in-out infinite',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '72%',
              left: 0,
              right: 0,
              height: 1,
              background: 'linear-gradient(90deg, transparent 10%, rgba(245, 197, 24, 0.4) 55%, transparent 90%)',
              opacity: 0.3,
              filter: 'drop-shadow(0 0 6px rgba(245, 197, 24, 0.8))',
              animation: 'axisPulse 12s ease-in-out 4.5s infinite',
            }}
          />
        </>
      )}

      {/* 6. Floating Prismatic Photons / Crystalline Stardust */}
      <div style={{ position: 'absolute', inset: 0 }}>
        {photons.map((p) => (
          <div
            key={p.id}
            style={{
              position: 'absolute',
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
              borderRadius: '50%',
              background: p.color,
              boxShadow: `0 0 ${p.glowRadius}px ${p.color}, 0 0 ${p.glowRadius * 2}px ${p.color}`,
              opacity: 0.35,
              animation: reducedMotion ? 'none' : `photonDrift ${p.dur}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* 7. Interactive Cursor Sparkle Glints (Flares when user interacts) */}
      <div style={{ position: 'absolute', inset: 0 }}>
        {sparkles.map((s) => (
          <span
            key={s.id}
            style={{
              position: 'absolute',
              left: s.x,
              top: s.y,
              width: s.size,
              height: s.size,
              marginLeft: -s.size / 2,
              marginTop: -s.size / 2,
              borderRadius: '50%',
              background:
                s.hue === 'cyan'
                  ? 'radial-gradient(circle, rgba(0, 245, 255, 0.9) 0%, rgba(0, 245, 255, 0) 70%)'
                  : 'radial-gradient(circle, rgba(245, 197, 24, 0.9) 0%, rgba(245, 197, 24, 0) 70%)',
              boxShadow: s.hue === 'cyan' ? '0 0 16px rgba(0, 245, 255, 0.7)' : '0 0 16px rgba(245, 197, 24, 0.7)',
              animation: 'sparklePop 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            }}
          />
        ))}
      </div>

      {/* 8. Vignette Edge Darkening (Ensures crisp contrast for content) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            linear-gradient(180deg, rgba(7, 8, 13, 0.25) 0%, transparent 20%, transparent 80%, rgba(7, 8, 13, 0.75) 100%),
            linear-gradient(90deg, rgba(7, 8, 13, 0.4) 0%, transparent 15%, transparent 85%, rgba(7, 8, 13, 0.4) 100%)
          `,
        }}
      />

      <style>{`
        @keyframes causticSweep {
          0% { transform: rotate(0deg) translate(-4%, -6%) scale(1); }
          50% { transform: rotate(4deg) translate(3%, 4%) scale(1.06); }
          100% { transform: rotate(-3deg) translate(-2%, 2%) scale(0.98); }
        }
        @keyframes causticCounterSweep {
          0% { transform: rotate(0deg) translate(4%, 3%) scale(1.04); }
          50% { transform: rotate(-5deg) translate(-3%, -4%) scale(0.96); }
          100% { transform: rotate(2deg) translate(2%, -1%) scale(1.02); }
        }
        @keyframes photonDrift {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); opacity: 0.25; }
          50% { transform: translateY(-22px) translateX(8px) scale(1.4); opacity: 0.75; }
        }
        @keyframes axisPulse {
          0%, 100% { opacity: 0.15; transform: scaleX(0.92); }
          50% { opacity: 0.45; transform: scaleX(1); }
        }
        @keyframes sparklePop {
          0% { transform: scale(0.1) rotate(0deg); opacity: 1; }
          50% { transform: scale(1.4) rotate(45deg); opacity: 0.8; }
          100% { transform: scale(2.2) rotate(90deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

