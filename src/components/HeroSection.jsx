'use client';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const C = '#f5c518';
const CC = '#00f5ff';
const DARK = '#080810';

/* ─── Social links ───────────────────────────── */
const social = [
    { icon: FiGithub, href: 'https://github.com/', label: 'GitHub', glow: '0 0 12px rgba(255,255,255,0.6)', hColor: '#ffffff' },
    { icon: FiLinkedin, href: 'https://linkedin.com/', label: 'LinkedIn', glow: `0 0 12px rgba(0,245,255,0.7)`, hColor: CC },
    { icon: FiMail, href: 'mailto:chahel1817@email.com', label: 'Email', glow: `0 0 12px rgba(245,197,24,0.7)`, hColor: C },
    { icon: FiTwitter, href: 'https://twitter.com/', label: 'Twitter', glow: `0 0 12px rgba(0,245,255,0.7)`, hColor: CC },
    { icon: SiLeetcode, href: 'https://leetcode.com/', label: 'LeetCode', glow: `0 0 12px rgba(245,159,11,0.7)`, hColor: '#f59e0b' },
];

/* ─── Typewriter hook ────────────────────────── */
function useTypewriter(text, speed = 55, delay = 600) {
    const [displayed, setDisplayed] = useState('');
    const [done, setDone] = useState(false);
    useEffect(() => {
        let i = 0;
        const timer = setTimeout(() => {
            const id = setInterval(() => {
                setDisplayed(text.slice(0, i + 1));
                i++;
                if (i === text.length) { clearInterval(id); setDone(true); }
            }, speed);
            return () => clearInterval(id);
        }, delay);
        return () => clearTimeout(timer);
    }, [text, speed, delay]);
    return { displayed, done };
}

/* ─── Mouse radial follow glow ───────────────── */
function MouseGlow() {
    const [pos, setPos] = useState({ x: -999, y: -999 });
    useEffect(() => {
        const h = (e) => setPos({ x: e.clientX, y: e.clientY });
        window.addEventListener('mousemove', h);
        return () => window.removeEventListener('mousemove', h);
    }, []);
    return (
        <div
            style={{
                position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
                background: `
                    radial-gradient(180px circle at ${pos.x}px ${pos.y}px, rgba(245,197,24,0.14), transparent 70%),
                    radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(245,197,24,0.07), transparent 65%)
                `,
                transition: 'background 0.05s',
            }}
        />
    );
}

/* ─── Grain texture overlay ──────────────────── */
function Grain() {
    return (
        <div style={{
            position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '128px 128px',
            opacity: 0.025,
            mixBlendMode: 'overlay',
        }} />
    );
}

/* ─── Gotham skyline ──────────────────────────── */
function GothamSkyline() {
    const buildings = [
        [0, 55, 115, 85], [5, 40, 20, 65], [65, 80, 155, 45], [78, 54, 20, 25], [155, 48, 128, 72],
        [213, 95, 170, 30], [225, 70, 20, 10], [318, 65, 138, 62], [393, 105, 175, 25], [408, 74, 18, 7],
        [508, 58, 143, 57], [576, 88, 162, 38], [588, 66, 20, 18], [674, 52, 128, 72], [736, 98, 152, 48],
        [748, 76, 24, 24], [844, 68, 138, 62], [922, 112, 172, 28], [938, 80, 16, 12], [1044, 62, 142, 58],
        [1116, 92, 162, 38], [1128, 68, 22, 16], [1218, 78, 132, 68], [1306, 72, 152, 48], [1388, 52, 118, 82],
    ];
    const fills = ['#1a1a2e', '#1a1a2e', '#16213e', '#16213e', '#1a1a2e', '#16213e', '#16213e', '#1a1a2e', '#0d0d1a', '#0d0d1a', '#1a1a2e', '#16213e', '#16213e', '#1a1a2e', '#16213e', '#16213e', '#1a1a2e', '#0d0d1a', '#0d0d1a', '#1a1a2e', '#16213e', '#16213e', '#1a1a2e', '#16213e', '#1a1a2e'];
    const windows = [[76, 80], [105, 80], [125, 100], [115, 120], [135, 140], [225, 35], [270, 65], [285, 80], [400, 35], [416, 35], [448, 35], [580, 28], [612, 28], [740, 34], [756, 34], [788, 34], [930, 22], [946, 22], [1130, 26], [1162, 26]];
    const cyanWin = [[621, 22], [780, 28], [1172, 12]];
    return (
        <motion.div
            style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 240, overflow: 'hidden', pointerEvents: 'none' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
        >
            {/* Foreground gradient fade — pulls skyline behind content */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 2, background: 'linear-gradient(0deg, rgba(6,6,10,0.72) 0%, rgba(6,6,10,0.15) 45%, transparent 100%)', pointerEvents: 'none' }} />
            {/* Pushed-back skyline: more blur, less opacity */}
            <svg viewBox="0 0 1440 200" fill="none" preserveAspectRatio="none" style={{ width: '100%', height: '100%', opacity: 0.18, filter: 'blur(1.2px)' }}>
                {buildings.map(([x, w, h, y], i) => <rect key={i} x={x} y={y} width={w} height={h} fill={fills[i]} />)}
                {windows.map(([x, y], i) => <rect key={`w${i}`} x={x} y={y} width={6} height={8} fill={C} opacity={0.7} />)}
                {cyanWin.map(([x, y], i) => <rect key={`c${i}`} x={x} y={y} width={5} height={7} fill={CC} opacity={0.6} />)}
                <rect x="103" y="0" width="4" height="25" fill={C} opacity="0.8" />
                <rect x="447" y="0" width="3" height="20" fill={C} opacity="0.7" />
                <rect x="786" y="10" width="3" height="18" fill={C} opacity="0.7" />
                <rect x="974" y="0" width="3" height="20" fill={C} opacity="0.6" />
                <rect x="621" y="2" width="2" height="16" fill={CC} opacity="0.6" />
                <rect x="1165" y="0" width="2" height="16" fill={CC} opacity="0.5" />
                <rect x="0" y="197" width="1440" height="3" fill="#16213e" />
            </svg>
        </motion.div>
    );
}

/* ─── Animation variants ─────────────────────── */
const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.13, delayChildren: 0.4 } },
};
const item = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 75, damping: 17 } },
};

export default function HeroSection() {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const { displayed, done } = useTypewriter('> INITIALIZING PORTFOLIO_V1.0', 50, 700);

    useEffect(() => { if (inView) controls.start('visible'); }, [inView, controls]);

    return (
        <section id="hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: 'linear-gradient(160deg, #060608 0%, #0a0a14 50%, #0d0e22 100%)' }}>

            {/* Mouse-follow radial glow */}
            <MouseGlow />

            {/* Grain texture */}
            <Grain />

            {/* ── Slow animated amber radial pulse behind name ─── */}
            <motion.div
                animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.06, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                style={{ position: 'absolute', top: '38%', left: '50%', transform: 'translate(-50%, -50%)', width: 640, height: 380, background: 'radial-gradient(circle at center, rgba(255,208,0,0.065), transparent 62%)', borderRadius: '50%', pointerEvents: 'none', zIndex: 1 }}
            />
            {/* Left vignette */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(6,6,10,0.55) 0%, transparent 28%, transparent 72%, rgba(6,6,10,0.55) 100%)', pointerEvents: 'none', zIndex: 1 }} />
            {/* Top vignette */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '35%', background: 'linear-gradient(180deg, rgba(6,6,10,0.4) 0%, transparent 100%)', pointerEvents: 'none', zIndex: 1 }} />
            {/* Cyan secondary radial — bottom right */}
            <div style={{ position: 'absolute', bottom: 0, right: '8%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(0,245,255,0.035), transparent 70%)', borderRadius: '50%', pointerEvents: 'none', zIndex: 1 }} />

            {/* Vertical scan lines */}
            {[10, 30, 70, 90].map((pct, i) => (
                <motion.div key={i}
                    animate={{ opacity: [0, 0.4, 0] }}
                    transition={{ duration: 5 + i, repeat: Infinity, delay: i * 0.9 }}
                    style={{ position: 'absolute', top: 0, bottom: 0, width: 1, left: `${pct}%`, background: 'linear-gradient(180deg, transparent, rgba(245,197,24,0.04), transparent)', pointerEvents: 'none', zIndex: 1 }}
                />
            ))}

            {/* Subtle bat icon ring — top right, faint */}
            <div style={{ position: 'absolute', top: 72, right: 64, width: 160, height: 160, pointerEvents: 'none', zIndex: 1, opacity: 0.07 }}>
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
                    style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px solid #f5c518' }} />
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
                    style={{ position: 'absolute', inset: 24, borderRadius: '50%', border: '1px solid #00f5ff' }} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="60" height="38" viewBox="0 0 200 124" fill="none">
                        <ellipse cx="100" cy="82" rx="68" ry="28" fill="#f5c518" />
                        <ellipse cx="46" cy="56" rx="35" ry="44" fill="#f5c518" />
                        <ellipse cx="154" cy="56" rx="35" ry="44" fill="#f5c518" />
                        <ellipse cx="100" cy="93" rx="38" ry="22" fill="#080810" />
                        <circle cx="100" cy="64" r="21" fill="#080810" />
                        <path d="M24 42 L9 16 L46 52" fill="#f5c518" />
                        <path d="M176 42 L191 16 L154 52" fill="#f5c518" />
                    </svg>
                </div>
            </div>

            {/* ── Main content ────────────────────── */}
            <motion.div
                ref={ref}
                variants={stagger}
                initial="hidden"
                animate={controls}
                style={{ position: 'relative', zIndex: 3, textAlign: 'center', padding: '130px 24px 100px', maxWidth: 940, margin: '0 auto', width: '100%' }}
            >

                {/* Typewriter pre-title */}
                <motion.div variants={item} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 32 }}>
                    <div style={{ height: 1, width: 64, background: 'linear-gradient(90deg, transparent, #f5c518)', boxShadow: '0 0 6px #f5c518' }} />
                    <span className="f-mono" style={{ color: '#f5c518', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase' }}>
                        {displayed}
                        {!done && <span style={{ animation: 'blink 0.9s step-end infinite', borderRight: '1.5px solid #f5c518', marginLeft: 2, paddingRight: 2 }} />}
                    </span>
                    <div style={{ height: 1, width: 64, background: 'linear-gradient(90deg, #f5c518, transparent)', boxShadow: '0 0 6px #f5c518' }} />
                </motion.div>

                {/* Heading */}
                <motion.div variants={item} style={{ marginBottom: 24, position: 'relative' }}>
                    <h1 className="f-orbitron" style={{ fontWeight: 900, position: 'relative', zIndex: 2 }}>
                        <motion.span
                            initial={{ opacity: 0, letterSpacing: '0.8em' }}
                            animate={{ opacity: 1, letterSpacing: '0.65em' }}
                            transition={{ duration: 1.2, delay: 0.8, ease: 'easeOut' }}
                            style={{ display: 'block', color: 'rgba(255,255,255,0.38)', fontSize: 'clamp(13px,1.8vw,20px)', fontWeight: 400, marginBottom: 10, fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.65em' }}
                        >
                            I AM
                        </motion.span>
                        <motion.span
                            className="glitch-title batman-title"
                            data-text="CHAHEL TANNA"
                        >
                            CHAHEL TANNA
                        </motion.span>
                    </h1>
                </motion.div>

                {/* Sub-title */}
                <motion.div variants={item} style={{ marginBottom: 44 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 18 }}>
                        <span className="f-rajdhani" style={{ color: CC, fontSize: 'clamp(15px,2.4vw,22px)', fontWeight: 600, letterSpacing: '0.14em', textShadow: '0 0 14px rgba(0,245,255,0.45)' }}>
                            FULL STACK DEVELOPER
                        </span>
                        <span style={{ color: 'rgba(245,197,24,0.25)', fontSize: 20 }}>///</span>
                        <span className="f-rajdhani" style={{ color: '#374151', fontSize: 'clamp(15px,2.4vw,22px)', fontWeight: 600, letterSpacing: '0.14em' }}>
                            CODE VIGILANTE
                        </span>
                    </div>
                    <p className="f-rajdhani" style={{ color: '#4b5563', fontSize: 17, lineHeight: 1.78, maxWidth: 580, margin: '0 auto' }}>
                        Crafting <span style={{ color: C, fontWeight: 600 }}>high-performance</span> web experiences from the shadows of Gotham.
                        Building <span style={{ color: CC, fontWeight: 600 }}>scalable solutions</span> that strike fear into slow load times.
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div variants={item} style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 52 }}>
                    {/* Primary */}
                    <motion.button
                        whileHover={{
                            y: -4,
                            boxShadow: '0 0 22px rgba(245,197,24,0.75), 0 8px 24px rgba(0,0,0,0.5)',
                        }}
                        whileTap={{ scale: 0.96, y: 0 }}
                        onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                        style={{ fontFamily: "'Orbitron', monospace", fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', background: C, color: DARK, padding: '15px 34px', borderRadius: 2, border: 'none', cursor: 'none', transition: 'box-shadow 0.25s, transform 0.25s' }}
                    >
                        &lt; View My Work &gt;
                    </motion.button>
                    {/* Secondary */}
                    <motion.button
                        whileHover={{
                            y: -4,
                            boxShadow: '0 0 18px rgba(0,245,255,0.45), 0 8px 24px rgba(0,0,0,0.5)',
                            background: 'rgba(0,245,255,0.07)',
                        }}
                        whileTap={{ scale: 0.96, y: 0 }}
                        onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                        style={{ fontFamily: "'Orbitron', monospace", fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', background: 'transparent', color: CC, padding: '15px 34px', borderRadius: 2, border: '1px solid rgba(0,245,255,0.45)', cursor: 'none', transition: 'all 0.25s' }}
                    >
                        &#123; Contact Me &#125;
                    </motion.button>
                </motion.div>

                {/* Social icons — clearly visible, strong hover glow */}
                <motion.div variants={item} style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 72 }}>
                    {social.map(({ icon: Icon, href, label, glow, hColor }) => (
                        <motion.a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            whileHover={{
                                y: -7,
                                scale: 1.35,
                                color: hColor,
                                filter: `drop-shadow(${glow}) drop-shadow(0 0 8px ${hColor}60)`,
                            }}
                            whileTap={{ scale: 0.9 }}
                            style={{ color: '#4b5563', transition: 'color 0.2s' }}
                        >
                            <Icon size={22} />
                        </motion.a>
                    ))}
                </motion.div>

                {/* Scroll cue */}
                <motion.div variants={item} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, color: '#2d3748' }}>
                    <span className="f-mono" style={{ fontSize: 10, letterSpacing: '0.28em' }}>SCROLL DOWN</span>
                    <motion.div
                        animate={{ y: [0, 9, 0] }} transition={{ repeat: Infinity, duration: 1.9 }}
                        style={{ width: 1, height: 52, background: 'linear-gradient(180deg, rgba(245,197,24,0.55), transparent)', boxShadow: '0 0 5px rgba(245,197,24,0.25)' }}
                    />
                </motion.div>
            </motion.div>

            {/* Gotham skyline */}
            <GothamSkyline />

            {/* Blinking cursor keyframe */}
            <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
        </section>
    );
}
