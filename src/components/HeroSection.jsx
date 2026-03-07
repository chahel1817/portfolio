'use client';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const C = '#f5c518';
const CC = '#00f5ff';
const DARK = '#080810';

const social = [
    { icon: FiGithub, href: 'https://github.com/chahel1817', label: 'GitHub', glow: '0 0 12px rgba(255,255,255,0.6)', hColor: '#ffffff' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/chahel-tanna-87300a269/', label: 'LinkedIn', glow: `0 0 12px rgba(0,245,255,0.7)`, hColor: CC },
    { icon: FiMail, href: 'mailto:chahel1817@gmail.com', label: 'Email', glow: `0 0 12px rgba(245,197,24,0.7)`, hColor: C },
    { icon: FiTwitter, href: '#', label: 'Twitter', glow: `0 0 12px rgba(0,245,255,0.7)`, hColor: CC },
    { icon: SiLeetcode, href: '#', label: 'LeetCode', glow: `0 0 12px rgba(245,159,11,0.7)`, hColor: '#f59e0b' },
];

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
    const { displayed, done } = useTypewriter('> READY TO BUILD', 50, 700);

    useEffect(() => { if (inView) controls.start('visible'); }, [inView, controls]);

    return (
        <section id="hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: 'linear-gradient(160deg, #060608 0%, #0a0a14 50%, #0d0e22 100%)' }}>
            <MouseGlow />
            <Grain />

            <motion.div
                animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.06, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                style={{ position: 'absolute', top: '38%', left: '50%', transform: 'translate(-50%, -50%)', width: 640, height: 380, background: 'radial-gradient(circle at center, rgba(255,208,0,0.065), transparent 62%)', borderRadius: '50%', pointerEvents: 'none', zIndex: 1 }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(6,6,10,0.55) 0%, transparent 28%, transparent 72%, rgba(6,6,10,0.55) 100%)', pointerEvents: 'none', zIndex: 1 }} />
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '35%', background: 'linear-gradient(180deg, rgba(6,6,10,0.4) 0%, transparent 100%)', pointerEvents: 'none', zIndex: 1 }} />
            <div style={{ position: 'absolute', bottom: 0, right: '8%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(0,245,255,0.035), transparent 70%)', borderRadius: '50%', pointerEvents: 'none', zIndex: 1 }} />

            {[10, 30, 70, 90].map((pct, i) => (
                <motion.div key={i}
                    animate={{ opacity: [0, 0.4, 0] }}
                    transition={{ duration: 5 + i, repeat: Infinity, delay: i * 0.9 }}
                    style={{ position: 'absolute', top: 0, bottom: 0, width: 1, left: `${pct}%`, background: 'linear-gradient(180deg, transparent, rgba(245,197,24,0.04), transparent)', pointerEvents: 'none', zIndex: 1 }}
                />
            ))}

            <motion.div
                ref={ref}
                variants={stagger}
                initial="hidden"
                animate={controls}
                style={{ position: 'relative', zIndex: 3, textAlign: 'center', padding: '130px 24px 100px', maxWidth: 940, margin: '0 auto', width: '100%' }}
            >
                <motion.div variants={item} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 32 }}>
                    <div style={{ height: 1, width: 64, background: 'linear-gradient(90deg, transparent, #f5c518)', boxShadow: '0 0 6px #f5c518' }} />
                    <span className="f-mono" style={{ color: '#f5c518', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase' }}>
                        {displayed}
                        {!done && <span style={{ animation: 'blink 0.9s step-end infinite', borderRight: '1.5px solid #f5c518', marginLeft: 2, paddingRight: 2 }} />}
                    </span>
                    <div style={{ height: 1, width: 64, background: 'linear-gradient(90deg, #f5c518, transparent)', boxShadow: '0 0 6px #f5c518' }} />
                </motion.div>

                <motion.div variants={item} style={{ marginBottom: 24, position: 'relative' }}>
                    <h1 className="f-orbitron" style={{ fontWeight: 900, position: 'relative', zIndex: 2 }}>
                        <motion.span
                            initial={{ opacity: 0, letterSpacing: '0.8em' }}
                            animate={{ opacity: 1, letterSpacing: '0.65em' }}
                            transition={{ duration: 1.2, delay: 0.8, ease: 'easeOut' }}
                            style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(13px,1.8vw,20px)', fontWeight: 400, marginBottom: 10, fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.65em' }}
                        >
                            HELLO, I AM
                        </motion.span>
                        <motion.span className="glitch-title" data-text="CHAHEL TANNA">CHAHEL TANNA</motion.span>
                    </h1>
                </motion.div>

                <motion.div variants={item} style={{ marginBottom: 44 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 18 }}>
                        <span className="f-rajdhani" style={{ color: CC, fontSize: 'clamp(15px,2.4vw,22px)', fontWeight: 700, letterSpacing: '0.12em', textShadow: '0 0 14px rgba(0,245,255,0.45)' }}>
                            FULL STACK DEVELOPER
                        </span>
                    </div>
                    <p className="f-rajdhani" style={{ color: '#a8b4c7', fontSize: 18, lineHeight: 1.78, maxWidth: 700, margin: '0 auto' }}>
                        I build fast, scalable, and user-friendly web applications.
                        From backend APIs to frontend interfaces, I focus on clean architecture and great user experience.
                    </p>
                </motion.div>

                <motion.div variants={item} style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 52 }}>
                    <motion.button
                        whileHover={{ y: -4, boxShadow: '0 0 22px rgba(245,197,24,0.75), 0 8px 24px rgba(0,0,0,0.5)' }}
                        whileTap={{ scale: 0.96, y: 0 }}
                        onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                        style={{ fontFamily: "'Orbitron', monospace", fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', background: C, color: DARK, padding: '15px 34px', borderRadius: 2, border: 'none', cursor: 'pointer', transition: 'box-shadow 0.25s, transform 0.25s' }}
                    >
                        View My Work
                    </motion.button>
                    <motion.button
                        whileHover={{ y: -4, boxShadow: '0 0 18px rgba(0,245,255,0.45), 0 8px 24px rgba(0,0,0,0.5)', background: 'rgba(0,245,255,0.07)' }}
                        whileTap={{ scale: 0.96, y: 0 }}
                        onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                        style={{ fontFamily: "'Orbitron', monospace", fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', background: 'transparent', color: CC, padding: '15px 34px', borderRadius: 2, border: '1px solid rgba(0,245,255,0.45)', cursor: 'pointer', transition: 'all 0.25s' }}
                    >
                        Contact Me
                    </motion.button>
                </motion.div>

                <motion.div variants={item} style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 72 }}>
                    {social.map(({ icon: Icon, href, label, glow, hColor }) => (
                        <motion.a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            whileHover={{ y: -7, scale: 1.35, color: hColor, filter: `drop-shadow(${glow}) drop-shadow(0 0 8px ${hColor}60)` }}
                            whileTap={{ scale: 0.9 }}
                            style={{ color: '#9aa8bf', transition: 'color 0.2s' }}
                        >
                            <Icon size={22} />
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>

            <style>{`
                @keyframes blink {
                  0%, 100% { opacity: 1; }
                  50% { opacity: 0; }
                }
            `}</style>
        </section>
    );
}
