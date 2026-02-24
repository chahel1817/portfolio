'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const C = '#f5c518';
const CC = '#00f5ff';

function BatMark({ size = 28 }) {
    return (
        <svg width={size} height={Math.round(size * 0.62)} viewBox="0 0 200 124" fill="none">
            <ellipse cx="100" cy="82" rx="68" ry="28" fill={C} />
            <ellipse cx="46" cy="56" rx="35" ry="44" fill={C} />
            <ellipse cx="154" cy="56" rx="35" ry="44" fill={C} />
            <ellipse cx="100" cy="93" rx="38" ry="22" fill="#080810" />
            <circle cx="100" cy="64" r="21" fill="#080810" />
            <path d="M24 42 L9 16 L46 52" fill={C} />
            <path d="M176 42 L191 16 L154 52" fill={C} />
            <path d="M7 18 L2 6 L22 22" fill={C} />
            <path d="M193 18 L198 6 L178 22" fill={C} />
        </svg>
    );
}

const LINKS = [
    { href: '#hero', label: 'Home', code: '00' },
    { href: '#about', label: 'About', code: '01' },
    { href: '#skills', label: 'Skills', code: '02' },
    { href: '#projects', label: 'Projects', code: '03' },
    { href: '#experience', label: 'Experience', code: '04' },
    { href: '#contact', label: 'Contact', code: '05' },
];

function scrollTo(id) {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState('hero');
    const [menu, setMenu] = useState(false);
    const [hovered, setHovered] = useState(null);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
            const ids = LINKS.map(l => l.href.slice(1));
            for (let i = ids.length - 1; i >= 0; i--) {
                const el = document.getElementById(ids[i]);
                if (el && window.scrollY >= el.offsetTop - 180) { setActive(ids[i]); break; }
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    /* Glass navbar when scrolled */
    const navStyle = scrolled ? {
        background: 'rgba(6,6,12,0.82)',
        backdropFilter: 'blur(22px)',
        WebkitBackdropFilter: 'blur(22px)',
        borderBottom: '1px solid rgba(245,197,24,0.14)',
        boxShadow: '0 4px 32px rgba(0,0,0,0.5)',
    } : {
        background: 'transparent',
        backdropFilter: 'none',
        borderBottom: '1px solid transparent',
    };

    return (
        <>
            <motion.nav
                initial={{ y: -72, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
                    transition: 'background 0.45s, border-color 0.45s, box-shadow 0.45s, backdrop-filter 0.45s',
                    ...navStyle,
                }}
            >
                <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px', height: 70, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                    {/* ── Logo ──────────────────────────── */}
                    <button
                        onClick={() => scrollTo('#hero')}
                        style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'none', border: 'none' }}
                    >
                        <motion.div
                            animate={{ rotate: [0, 6, -6, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <BatMark size={30} />
                        </motion.div>
                        <span className="f-orbitron" style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.16em', lineHeight: 1 }}>
                            <span style={{ color: C }}>DARK</span>
                            <span style={{ color: CC }}>PORT</span>
                        </span>
                    </button>

                    {/* ── Desktop links ─────────────────── */}
                    <nav style={{ display: 'flex', gap: 38, alignItems: 'center' }} className="nav-desktop">
                        {LINKS.map(l => {
                            const isActive = active === l.href.slice(1);
                            const isHov = hovered === l.href;
                            return (
                                <button
                                    key={l.href}
                                    onClick={() => scrollTo(l.href)}
                                    onMouseEnter={() => setHovered(l.href)}
                                    onMouseLeave={() => setHovered(null)}
                                    style={{ background: 'none', border: 'none', position: 'relative', padding: '4px 0' }}
                                >
                                    <span className="f-rajdhani" style={{
                                        fontSize: 13, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
                                        color: isActive ? C : (isHov ? 'rgba(245,197,24,0.7)' : '#4b5563'),
                                        textShadow: isActive ? `0 0 10px rgba(245,197,24,0.55)` : 'none',
                                        transition: 'color 0.2s, text-shadow 0.2s',
                                        display: 'flex', alignItems: 'center', gap: 5,
                                    }}>
                                        <span className="f-mono" style={{ color: isActive ? 'rgba(245,197,24,0.5)' : 'rgba(255,255,255,0.12)', fontSize: 10 }}>{l.code}</span>
                                        {l.label}
                                    </span>
                                    {/* Neon underline */}
                                    <motion.span
                                        animate={{ scaleX: (isActive || isHov) ? 1 : 0, opacity: (isActive || isHov) ? 1 : 0 }}
                                        transition={{ duration: 0.25, ease: 'easeOut' }}
                                        style={{
                                            position: 'absolute', left: 0, right: 0, bottom: -2, height: 1,
                                            background: C,
                                            boxShadow: `0 0 6px ${C}, 0 0 12px rgba(245,197,24,0.4)`,
                                            transformOrigin: 'left',
                                            display: 'block',
                                        }}
                                    />
                                </button>
                            );
                        })}
                    </nav>

                    {/* ── Resume CTA — outline style ───── */}
                    <motion.a
                        href="#"
                        whileHover={{
                            y: -2,
                            color: C,
                            boxShadow: '0 0 16px rgba(245,197,24,0.4)',
                            background: 'rgba(245,197,24,0.08)',
                            borderColor: 'rgba(245,197,24,0.8)',
                        }}
                        whileTap={{ scale: 0.96 }}
                        style={{
                            fontFamily: "'Orbitron', monospace", fontSize: 11, fontWeight: 700,
                            letterSpacing: '0.13em', textTransform: 'uppercase',
                            background: 'transparent', color: 'rgba(245,197,24,0.7)',
                            padding: '9px 20px', borderRadius: 2, textDecoration: 'none',
                            border: '1px solid rgba(245,197,24,0.35)',
                            transition: 'all 0.25s',
                        }}
                        className="nav-desktop"
                    >
                        Resume
                    </motion.a>

                    {/* ── Hamburger ────────────────────── */}
                    <button
                        onClick={() => setMenu(!menu)}
                        style={{ background: 'none', border: 'none', color: C, display: 'none' }}
                        className="nav-mobile"
                    >
                        {menu ? <FiX size={22} /> : <FiMenu size={22} />}
                    </button>
                </div>
            </motion.nav>

            {/* ── Mobile drawer ─────────────────────── */}
            <AnimatePresence>
                {menu && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        style={{
                            position: 'fixed', inset: 0, zIndex: 48,
                            background: 'rgba(6,6,12,0.97)', backdropFilter: 'blur(28px)',
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 36,
                        }}
                    >
                        {LINKS.map((l, i) => (
                            <motion.button
                                key={l.href}
                                initial={{ opacity: 0, y: 22 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.07 }}
                                onClick={() => { scrollTo(l.href); setMenu(false); }}
                                style={{ background: 'none', border: 'none' }}
                            >
                                <span className="f-orbitron" style={{ fontSize: 24, fontWeight: 700, letterSpacing: '0.12em', color: C, textTransform: 'uppercase' }}>
                                    <span style={{ color: 'rgba(0,245,255,0.4)', fontSize: 13, marginRight: 8 }}>{l.code}.</span>
                                    {l.label}
                                </span>
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile  { display: block !important; }
        }
      `}</style>
        </>
    );
}
