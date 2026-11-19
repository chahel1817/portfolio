'use client';
import { motion, useAnimation, useInView, useReducedMotion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { useTheme } from '@/context/ThemeContext';
import Magnetic from '@/components/Magnetic';
import CountUp from '@/components/CountUp';
import KineticPrismTitle from '@/components/KineticPrismTitle';

const C = '#f5c518';
const CC = '#00f5ff';
const DARK = '#080810';

const social = [
    { icon: FiGithub, href: 'https://github.com/chahel1817', label: 'GitHub', glow: '0 0 12px rgba(255,255,255,0.6)', hColor: '#ffffff' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/chahel-tanna-87300a269/', label: 'LinkedIn', glow: `0 0 12px rgba(0,245,255,0.7)`, hColor: CC },
    { icon: FiMail, href: 'mailto:chahel1817@gmail.com', label: 'Email', glow: `0 0 12px rgba(245,197,24,0.7)`, hColor: C },
    { icon: FiTwitter, href: 'https://x.com/chahel1817', label: 'X', glow: `0 0 12px rgba(0,245,255,0.7)`, hColor: CC },
    { icon: FiInstagram, href: 'https://www.instagram.com/chahel_9/', label: 'Instagram', glow: `0 0 12px rgba(225,48,108,0.7)`, hColor: '#e1306c' },
    { icon: FiYoutube, href: 'https://www.youtube.com/@Chahel-1817', label: 'YouTube', glow: `0 0 12px rgba(255,0,0,0.7)`, hColor: '#ff0000' },
    { icon: SiLeetcode, href: 'https://leetcode.com/u/Chahel/', label: 'LeetCode', glow: `0 0 12px rgba(245,159,11,0.7)`, hColor: '#f59e0b' },
];

function FlavorText() {
    const { isLofi } = useTheme();
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.5 }}
            style={{ display: 'flex', justifyContent: 'center', marginTop: -15, paddingBottom: 20 }}
        >
            <span
                className="f-rajdhani"
                style={{
                    fontSize: 'clamp(13px, 3.5vw, 16px)',
                    fontWeight: 600,
                    color: isLofi ? '#5a6a7a' : '#cbd5e1',
                    letterSpacing: '0.04em',
                    fontStyle: 'italic',
                    background: isLofi ? 'rgba(255,255,255,0.65)' : 'rgba(13, 13, 26, 0.65)',
                    padding: '10px 20px',
                    borderRadius: '30px',
                    border: isLofi ? '1px solid rgba(245,197,24,0.3)' : '1px solid rgba(0, 245, 255, 0.2)',
                    boxShadow: isLofi
                        ? '0 4px 20px rgba(0,0,0,0.08), inset 0 0 10px rgba(255,220,150,0.08)'
                        : '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 0 12px rgba(0, 245, 255, 0.05)',
                    backdropFilter: 'blur(8px)',
                    display: 'inline-block',
                    textAlign: 'center',
                    maxWidth: '92%',
                    lineHeight: 1.55,
                    transition: 'all 0.6s ease',
                }}
            >
                {isLofi ? (
                    <>☀️ Enjoying the sunshine? The code runs smoother in <span style={{ color: '#e89020', fontWeight: 700, fontStyle: 'normal' }}>golden hour.</span></>
                ) : (
                    <>Refracting complex challenges into <span style={{ color: '#00f5ff', textShadow: '0 0 12px rgba(0,245,255,0.7)', fontWeight: 700, fontStyle: 'normal' }}>clean, scalable architectures.</span></>
                )}
            </span>
        </motion.div>
    );
}

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

function DossierTag() {
    const { isLofi } = useTheme();
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 0.85, x: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="f-mono hero-dossier-tag"
            style={{
                position: 'absolute', top: 104, left: 24, zIndex: 4,
                padding: '5px 11px',
                border: isLofi ? '1px solid rgba(15, 23, 42, 0.12)' : '1px solid rgba(245,197,24,0.18)',
                borderRadius: 4,
                background: isLofi ? 'rgba(255, 255, 255, 0.85)' : 'rgba(8,8,16,0.35)',
                color: isLofi ? '#475569' : 'rgba(245,197,24,0.55)',
                fontSize: 9, letterSpacing: '0.1em',
            }}
        >
            SYS ID: CT-2026-DEV
        </motion.div>
    );
}

function LiveStatusTag() {
    const { isLofi } = useTheme();
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 0.85, x: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="f-mono hero-status-tag"
            style={{
                position: 'absolute', top: 104, right: 24, zIndex: 4,
                padding: '5px 11px',
                border: isLofi ? '1px solid rgba(15, 23, 42, 0.12)' : '1px solid rgba(0,245,255,0.18)',
                borderRadius: 4,
                background: isLofi ? 'rgba(255, 255, 255, 0.85)' : 'rgba(8,8,16,0.35)',
                color: isLofi ? '#475569' : 'rgba(0,245,255,0.55)',
                fontSize: 9, letterSpacing: '0.1em',
                display: 'flex', alignItems: 'center', gap: 7,
            }}
        >
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 4px #4ade80', flexShrink: 0 }} />
            SYSTEM ONLINE
        </motion.div>
    );
}

function HudCorner({ position }) {
    const { isLofi } = useTheme();
    const posStyle = {
        tl: { top: 8, left: 8, borderTop: '2px solid', borderLeft: '2px solid' },
        tr: { top: 8, right: 8, borderTop: '2px solid', borderRight: '2px solid' },
        bl: { bottom: 8, left: 8, borderBottom: '2px solid', borderLeft: '2px solid' },
        br: { bottom: 8, right: 8, borderBottom: '2px solid', borderRight: '2px solid' },
    }[position];
    return (
        <div
            style={{
                position: 'absolute', width: 34, height: 34, zIndex: 4, opacity: isLofi ? 0.25 : 0.35,
                borderColor: isLofi ? 'rgba(15, 23, 42, 0.25)' : 'rgba(245,197,24,0.55)',
                pointerEvents: 'none',
                ...posStyle,
            }}
        />
    );
}

function StatStrip() {
    const cardRef = useRef(null);
    const { isLofi } = useTheme();
    const [tilt, setTilt] = useState({ rx: 0, ry: 0, glareX: 50, glareY: 50, isHover: false });
    const reducedMotion = useReducedMotion();

    const handleMouseMove = (e) => {
        if (reducedMotion || !cardRef.current || window.innerWidth < 768) return;
        const rect = cardRef.current.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        const rx = (0.5 - py) * 16;
        const ry = (px - 0.5) * 18;
        setTilt({ rx, ry, glareX: px * 100, glareY: py * 100, isHover: true });
    };

    const handleMouseLeave = () => {
        setTilt({ rx: 0, ry: 0, glareX: 50, glareY: 50, isHover: false });
    };

    const STATS = [
        { value: '9+', label: 'Projects Shipped', color: isLofi ? '#b45309' : C },
        { value: '230+', label: 'LeetCode Solved', color: isLofi ? '#0284c7' : CC },
        { value: '9.02', label: 'CGPA', color: isLofi ? '#b45309' : C },
        { value: 'OPEN', label: 'To Work', color: isLofi ? '#15803d' : '#4ade80' },
    ];

    return (
        <motion.div
            ref={cardRef}
            variants={item}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{
                rotateX: tilt.rx,
                rotateY: tilt.ry,
                scale: tilt.isHover ? 1.025 : 1,
            }}
            transition={{ type: 'spring', stiffness: 280, damping: 20 }}
            className="hero-stat-strip"
            style={{
                display: 'inline-grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                background: isLofi ? 'rgba(255, 255, 255, 0.88)' : 'rgba(12, 15, 26, 0.72)',
                border: isLofi ? '1px solid rgba(15, 23, 42, 0.12)' : '1px solid rgba(255, 255, 255, 0.14)',
                borderRadius: 14,
                padding: '16px 20px',
                backdropFilter: 'blur(16px)',
                marginBottom: 44,
                boxShadow: isLofi
                    ? (tilt.isHover ? '0 16px 36px rgba(15, 23, 42, 0.12), 0 0 25px rgba(2, 132, 199, 0.12)' : '0 6px 20px rgba(15, 23, 42, 0.08)')
                    : (tilt.isHover ? '0 20px 45px rgba(0,0,0,0.65), 0 0 35px rgba(0, 245, 255, 0.18)' : '0 8px 28px rgba(0,0,0,0.4)'),
                gap: 16,
                alignItems: 'center',
                maxWidth: '100%',
                position: 'relative',
                transformStyle: 'preserve-3d',
                perspective: 1000,
                overflow: 'hidden',
                cursor: 'default',
            }}
        >
            {/* Dynamic Interactive Specular Holographic Glare Sheen */}
            {tilt.isHover && (
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        pointerEvents: 'none',
                        background: `
                            radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255, 255, 255, 0.22) 0%, rgba(0, 245, 255, 0.12) 35%, transparent 65%)
                        `,
                        mixBlendMode: 'overlay',
                        zIndex: 10,
                    }}
                />
            )}

            {/* Rotating Rainbow Prism Border Highlight */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 1,
                    background: 'linear-gradient(90deg, transparent, rgba(0,245,255,0.85) 30%, rgba(245,197,24,0.85) 70%, transparent)',
                    opacity: tilt.isHover ? 1 : 0.45,
                    transition: 'opacity 0.3s',
                }}
            />

            {STATS.map((s, i) => (
                <div key={s.label} className="hero-stat-item" style={{
                    textAlign: 'center',
                    padding: '4px 12px',
                    position: 'relative',
                    transform: 'translateZ(15px)',
                }}>
                    {i > 0 && <div className="hero-stat-divider" style={{ position: 'absolute', left: -8, top: '15%', bottom: '15%', width: 1, background: isLofi ? 'rgba(15, 23, 42, 0.1)' : 'rgba(255,255,255,0.12)' }} />}
                    <CountUp value={s.value} className="f-orbitron" style={{ fontSize: 'clamp(18px, 4vw, 22px)', fontWeight: 800, color: s.color, textShadow: isLofi ? 'none' : `0 0 14px ${s.color}70` }} />
                    <div className="f-mono" style={{ fontSize: 9, letterSpacing: '0.12em', color: isLofi ? '#64748b' : '#8b95a8', textTransform: 'uppercase', marginTop: 4, whiteSpace: 'nowrap' }}>{s.label}</div>
                </div>
            ))}
        </motion.div>
    );
}

function Grain() {
    return (
        <div style={{
            position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '128px 128px',
            opacity: 0.02,
            mixBlendMode: 'overlay',
        }} />
    );
}

const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.13, delayChildren: 0.2 } },
};
const item = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 75, damping: 17 } },
};

export default function HeroSection() {
    const controls = useAnimation();
    const { displayed, done } = useTypewriter('> READY TO BUILD', 50, 700);
    const { isLofi } = useTheme();

    useEffect(() => {
        controls.start('visible');
    }, [controls]);

    return (
        <section id="hero" className="hero-container" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <MouseGlow />
            <Grain />
            <DossierTag />
            <LiveStatusTag />

            <motion.div
                animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.06, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                style={{ position: 'absolute', top: '38%', left: '50%', transform: 'translate(-50%, -50%)', width: 640, height: 380, background: 'radial-gradient(circle at center, rgba(255,208,0,0.065), transparent 62%)', borderRadius: '50%', pointerEvents: 'none', zIndex: 1 }}
            />
            <div style={{ position: 'absolute', inset: 0, background: isLofi ? 'none' : 'linear-gradient(90deg, rgba(6,6,10,0.32) 0%, transparent 28%, transparent 72%, rgba(6,6,10,0.32) 100%)', pointerEvents: 'none', zIndex: 1 }} />
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '35%', background: isLofi ? 'none' : 'linear-gradient(180deg, rgba(6,6,10,0.24) 0%, transparent 100%)', pointerEvents: 'none', zIndex: 1 }} />
            <div style={{ position: 'absolute', bottom: 0, right: '8%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(0,245,255,0.035), transparent 70%)', borderRadius: '50%', pointerEvents: 'none', zIndex: 1 }} />

            {[10, 30, 70, 90].map((pct, i) => (
                <motion.div key={i}
                    animate={{ opacity: [0, 0.4, 0] }}
                    transition={{ duration: 5 + i, repeat: Infinity, delay: i * 0.9 }}
                    style={{ position: 'absolute', top: 0, bottom: 0, width: 1, left: `${pct}%`, background: isLofi ? 'linear-gradient(180deg, transparent, rgba(15,23,42,0.04), transparent)' : 'linear-gradient(180deg, transparent, rgba(245,197,24,0.04), transparent)', pointerEvents: 'none', zIndex: 1 }}
                />
            ))}

            <motion.div
                variants={stagger}
                initial="hidden"
                animate={controls}
                className="hero-content"
                style={{ position: 'relative', zIndex: 3, textAlign: 'center', padding: '130px 24px 100px', maxWidth: 940, margin: '0 auto', width: '100%' }}
            >
                <HudCorner position="tl" />
                <HudCorner position="tr" />
                <HudCorner position="bl" />
                <HudCorner position="br" />

                <motion.div variants={item} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 32 }}>
                    <div style={{ height: 1, width: 64, background: isLofi ? 'linear-gradient(90deg, transparent, #b45309)' : 'linear-gradient(90deg, transparent, #f5c518)', boxShadow: isLofi ? 'none' : '0 0 6px #f5c518' }} />
                    <span className="f-mono" style={{ color: isLofi ? '#b45309' : '#f5c518', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600 }}>
                        {displayed}
                        {!done && <span style={{ animation: 'blink 0.9s step-end infinite', borderRight: isLofi ? '1.5px solid #b45309' : '1.5px solid #f5c518', marginLeft: 2, paddingRight: 2 }} />}
                    </span>
                    <div style={{ height: 1, width: 64, background: isLofi ? 'linear-gradient(90deg, #b45309, transparent)' : 'linear-gradient(90deg, #f5c518, transparent)', boxShadow: isLofi ? 'none' : '0 0 6px #f5c518' }} />
                </motion.div>

                <motion.div variants={item} style={{ marginBottom: 24, position: 'relative' }}>
                    <h1 className="f-orbitron" style={{ fontWeight: 900, position: 'relative', zIndex: 2 }}>
                        <motion.span
                            initial={{ opacity: 0, letterSpacing: '0.8em' }}
                            animate={{ opacity: 1, letterSpacing: '0.65em' }}
                            transition={{ duration: 1.2, delay: 0.8, ease: 'easeOut' }}
                            style={{ display: 'block', color: isLofi ? '#475569' : 'rgba(255,255,255,0.5)', fontSize: 'clamp(13px,1.8vw,20px)', fontWeight: 600, marginBottom: 10, fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.65em' }}
                        >
                            HELLO, I AM
                        </motion.span>
                        <KineticPrismTitle text="CHAHEL TANNA" />
                    </h1>
                </motion.div>

                <motion.div variants={item} style={{ marginBottom: 44 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 18 }}>
                        <span className="f-rajdhani" style={{ color: isLofi ? '#0284c7' : CC, fontSize: 'clamp(15px,2.4vw,22px)', fontWeight: 700, letterSpacing: '0.12em', textShadow: isLofi ? 'none' : '0 0 14px rgba(0,245,255,0.45)' }}>
                            FULL STACK DEVELOPER
                        </span>
                    </div>
                    <p className="f-rajdhani" style={{ color: isLofi ? '#334155' : '#a8b4c7', fontSize: 18, lineHeight: 1.78, maxWidth: 700, margin: '0 auto' }}>
                        I build fast, scalable, and user-friendly web applications.
                        From backend APIs to frontend interfaces, I focus on clean architecture and great user experience.
                    </p>
                </motion.div>

                <motion.div variants={item} style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 52 }}>
                    <Magnetic range={70} strength={0.3}>
                        <motion.button
                            suppressHydrationWarning
                            whileHover={{ y: -4, boxShadow: isLofi ? '0 10px 24px rgba(217, 119, 6, 0.35)' : '0 0 22px rgba(245,197,24,0.75), 0 8px 24px rgba(0,0,0,0.5)' }}
                            whileTap={{ scale: 0.96, y: 0 }}
                            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                            style={{ fontFamily: "'Orbitron', monospace", fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', background: isLofi ? '#b45309' : C, color: '#ffffff', padding: '15px 34px', borderRadius: 2, border: 'none', cursor: 'pointer', transition: 'box-shadow 0.25s, transform 0.25s' }}
                        >
                            View My Work
                        </motion.button>
                    </Magnetic>
                    <Magnetic range={70} strength={0.3}>
                        <motion.a
                            href="https://drive.google.com/file/d/1oq3uNYZfnftjkqnGN-nWsGcyyv8FZ2B4/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -4, boxShadow: isLofi ? '0 8px 20px rgba(15, 23, 42, 0.12)' : '0 0 22px rgba(255,255,255,0.3), 0 8px 24px rgba(0,0,0,0.5)', background: isLofi ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.1)' }}
                            whileTap={{ scale: 0.96, y: 0 }}
                            style={{ fontFamily: "'Orbitron', monospace", fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', background: isLofi ? 'rgba(255, 255, 255, 0.85)' : 'transparent', color: isLofi ? '#0f172a' : '#fff', padding: '15px 34px', borderRadius: 2, border: isLofi ? '1px solid rgba(15, 23, 42, 0.22)' : '1px solid rgba(255,255,255,0.4)', cursor: 'pointer', transition: 'all 0.25s', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            Resume
                        </motion.a>
                    </Magnetic>
                    <Magnetic range={70} strength={0.3}>
                        <motion.button
                            suppressHydrationWarning
                            whileHover={{ y: -4, boxShadow: isLofi ? '0 8px 20px rgba(2, 132, 199, 0.2)' : '0 0 18px rgba(0,245,255,0.45), 0 8px 24px rgba(0,0,0,0.5)', background: isLofi ? 'rgba(2, 132, 199, 0.12)' : 'rgba(0,245,255,0.07)' }}
                            whileTap={{ scale: 0.96, y: 0 }}
                            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                            style={{ fontFamily: "'Orbitron', monospace", fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', background: isLofi ? 'rgba(2, 132, 199, 0.06)' : 'transparent', color: isLofi ? '#0284c7' : CC, padding: '15px 34px', borderRadius: 2, border: isLofi ? '1px solid rgba(2, 132, 199, 0.45)' : '1px solid rgba(0,245,255,0.45)', cursor: 'pointer', transition: 'all 0.25s' }}
                        >
                            Contact Me
                        </motion.button>
                    </Magnetic>
                </motion.div>

                <StatStrip />

                <motion.div variants={item} style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(14px, 3.5vw, 24px)', flexWrap: 'wrap', marginBottom: 60 }}>
                    {social.map(({ icon: Icon, href, label, glow, hColor }) => (
                        <Magnetic key={label} range={46} strength={0.45}>
                            <motion.a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                whileHover={{ y: -7, scale: 1.35, color: hColor, filter: `drop-shadow(${glow}) drop-shadow(0 0 8px ${hColor}60)` }}
                                whileTap={{ scale: 0.9 }}
                                style={{ color: isLofi ? '#475569' : '#9aa8bf', transition: 'color 0.2s', display: 'inline-block' }}
                            >
                                <Icon size={22} />
                            </motion.a>
                        </Magnetic>
                    ))}
                </motion.div>

                {/* Flavor Text / Easter Egg */}
                <FlavorText />
            </motion.div>

            <style>{`
                @keyframes blink {
                  0%, 100% { opacity: 1; }
                  50% { opacity: 0; }
                }
                @media (max-width: 860px) {
                  .hero-dossier-tag, .hero-status-tag { display: none !important; }
                  .hero-content { padding: 110px 16px 70px !important; }
                }
                @media (max-width: 640px) {
                  .hero-stat-strip {
                    grid-template-columns: repeat(2, 1fr) !important;
                    gap: 12px 0 !important;
                    padding: 14px 10px !important;
                    width: 100% !important;
                  }
                  .hero-stat-divider {
                    display: none !important;
                  }
                  .hero-stat-item {
                    border-bottom: 1px solid rgba(255,255,255,0.08);
                    padding: 10px 4px !important;
                  }
                  .hero-stat-item:nth-child(3), .hero-stat-item:nth-child(4) {
                    border-bottom: none !important;
                  }
                  .hero-stat-item:nth-child(even) {
                    border-left: 1px solid rgba(255,255,255,0.08);
                  }
                }
            `}</style>
        </section>
    );
}

