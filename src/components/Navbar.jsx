'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '@/context/ThemeContext';

const C = '#f5c518';
const CC = '#00f5ff';

const LINKS = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Education' },
    { href: '#interests', label: 'Interests' },
    { href: '#contact', label: 'Contact' },
];

function scrollTo(id) {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState('hero');
    const [menu, setMenu] = useState(false);
    const [hovered, setHovered] = useState(null);
    const { theme, toggleTheme, isLofi } = useTheme();

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-40% 0px -40% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActive(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        LINKS.forEach((link) => {
            const el = document.getElementById(link.href.slice(1));
            if (el) observer.observe(el);
        });

        const onScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <>
            <motion.div
                initial={{ y: -100, x: '-50%', opacity: 0 }}
                animate={{ y: 0, x: '-50%', opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                style={{
                    position: 'fixed',
                    top: 24,
                    left: '50%',
                    zIndex: 100,
                    width: 'fit-content',
                    pointerEvents: 'auto',
                }}
            >
                <nav
                    style={{
                        padding: '12px 14px',
                        background: 'rgba(13,13,26,0.65)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: '100px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
                    }}
                    className="nav-pill"
                >
                    {/* Circle Logo (Favicon) */}
                    <div style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        paddingLeft: 4, paddingRight: 6, marginRight: 4,
                        borderRight: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        <div style={{
                            width: 30, height: 30, borderRadius: '50%', overflow: 'hidden',
                            border: `1px solid ${C}40`, boxShadow: `0 0 15px ${C}30`,
                            background: '#0d0d1a', display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                            <img src="/favicon.ico" style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="Logo" />
                        </div>
                    </div>

                    {LINKS.map((l) => {
                        const isActive = active === l.href.slice(1);
                        const isHov = hovered === l.href;
                        return (
                            <motion.button
                                key={l.href}
                                suppressHydrationWarning
                                onClick={() => scrollTo(l.href)}
                                onMouseEnter={() => setHovered(l.href)}
                                onMouseLeave={() => setHovered(null)}
                                whileHover={{ scale: 1.05, y: -1 }}
                                whileTap={{ scale: 0.96 }}
                                style={{
                                    background: isActive ? 'rgba(245,197,24,0.12)' : 'transparent',
                                    border: 'none',
                                    borderRadius: '100px',
                                    padding: '10px 24px',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    transition: 'all 0.4s cubic-bezier(0.23,1,0.32,1)',
                                }}
                            >
                                <span className="f-rajdhani" style={{
                                    fontSize: 14.5,
                                    fontWeight: 700,
                                    letterSpacing: '0.05em',
                                    textTransform: 'uppercase',
                                    color: isActive ? C : (isHov ? '#fff' : 'rgba(255,255,255,0.5)'),
                                    transition: 'color 0.4s',
                                    display: 'block',
                                    zIndex: 2,
                                    position: 'relative'
                                }}>
                                    {l.label}
                                </span>
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-glow"
                                        style={{
                                            position: 'absolute',
                                            inset: 0,
                                            borderRadius: '100px',
                                            border: `1px solid ${C}50`,
                                            boxShadow: `0 0 15px ${C}30`,
                                            background: `linear-gradient(180deg, ${C}05, ${C}10)`,
                                            zIndex: 1,
                                        }}
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </motion.button>
                        );
                    })}

                    {/* Theme Toggle — at the end */}
                    <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: 8, marginLeft: 4 }}>
                        <motion.button
                            onClick={toggleTheme}
                            whileHover={{ scale: 1.15, rotate: 15 }}
                            whileTap={{ scale: 0.9 }}
                            title={isLofi ? 'Switch to Dark Mode' : 'Switch to Lofi Mode'}
                            style={{
                                background: isLofi ? 'rgba(255, 180, 100, 0.15)' : 'rgba(0, 245, 255, 0.08)',
                                border: isLofi ? '1px solid rgba(255, 180, 100, 0.4)' : '1px solid rgba(0, 245, 255, 0.2)',
                                borderRadius: '50%',
                                width: 32,
                                height: 32,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                color: isLofi ? '#ffb060' : CC,
                                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                                boxShadow: isLofi ? '0 0 14px rgba(255, 180, 100, 0.35)' : `0 0 10px rgba(0, 245, 255, 0.2)`,
                            }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={theme}
                                    initial={{ scale: 0, rotate: -90, opacity: 0 }}
                                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                                    exit={{ scale: 0, rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.25 }}
                                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    {isLofi ? <FiSun size={14} /> : <FiMoon size={14} />}
                                </motion.div>
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </nav>
            </motion.div>

            {/* Mobile Top Bar */}
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="nav-mobile-bar"
                style={{
                    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 101,
                    height: 80, // Fixed height for reliable alignment
                    padding: '0 24px', // Use height + flex for vertical centering
                    display: 'none', alignItems: 'center', justifyContent: 'space-between',
                    background: menu ? 'transparent' : (scrolled ? 'rgba(8,8,16,0.85)' : 'transparent'),
                    backdropFilter: (menu || !scrolled) ? 'none' : 'blur(16px)',
                    borderBottom: menu ? 'none' : (scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none'),
                    transition: 'all 0.4s ease'
                }}
            >
                <div className="f-orbitron" style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{
                        width: 32, height: 32, borderRadius: '50%', overflow: 'hidden',
                        border: `1px solid ${C}40`, background: '#0d0d1a',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <img src="/favicon.ico" style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="Logo" />
                    </div>
                    <div>
                        <span style={{ color: C }}>CHAHEL</span> <span style={{ color: '#fff', marginLeft: 4 }}>TANNA</span>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    {/* Mobile Theme Toggle */}
                    <motion.button
                        onClick={toggleTheme}
                        whileTap={{ scale: 0.85 }}
                        title={isLofi ? 'Switch to Dark Mode' : 'Switch to Lofi Mode'}
                        style={{
                            background: isLofi ? 'rgba(255, 180, 100, 0.12)' : 'rgba(0, 245, 255, 0.08)',
                            border: isLofi ? '1px solid rgba(255, 180, 100, 0.35)' : '1px solid rgba(0, 245, 255, 0.2)',
                            borderRadius: '50%',
                            width: 38,
                            height: 38,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: isLofi ? '#ffb060' : CC,
                            transition: 'all 0.4s ease',
                            boxShadow: isLofi ? '0 0 12px rgba(255, 180, 100, 0.3)' : `0 0 10px rgba(0, 245, 255, 0.2)`,
                            padding: 0,
                        }}
                    >
                        {isLofi ? <FiSun size={16} /> : <FiMoon size={16} />}
                    </motion.button>

                    <button
                        suppressHydrationWarning
                        onClick={() => setMenu(!menu)}
                        style={{
                            background: menu ? 'rgba(245,197,24,0.1)' : 'none',
                            border: menu ? `1px solid ${C}50` : 'none',
                            color: C,
                            cursor: 'pointer',
                            width: 44,
                            height: 44,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease',
                            boxShadow: menu ? `0 0 20px ${C}40` : 'none',
                            padding: 0,
                        }}
                    >
                        {menu ? <FiX size={22} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </motion.div>

            <AnimatePresence>
                {menu && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        animate={{ opacity: 1, backdropFilter: 'blur(24px)' }}
                        exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        style={{
                            position: 'fixed', inset: 0, zIndex: 99,
                            background: 'rgba(6,6,12,0.9)',
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 32,
                        }}
                    >
                        {LINKS.map((l, i) => (
                            <motion.button
                                key={l.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                onClick={() => { scrollTo(l.href); setMenu(false); }}
                                style={{ background: 'none', border: 'none' }}
                            >
                                <span className="f-orbitron" style={{ fontSize: 28, fontWeight: 900, letterSpacing: '0.05em', color: active === l.href.slice(1) ? C : '#fff', textTransform: 'uppercase' }}>
                                    {l.label}
                                </span>
                            </motion.button>
                        ))}

                        {/* Resume Link instead of Download */}
                        <motion.a
                            href="https://drive.google.com/drive/u/0/folders/1ZHoSMw8iKHs5zo_PTQy6CJOM3sffOdJq"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: LINKS.length * 0.05 }}
                            style={{
                                marginTop: 24, padding: '12px 36px', borderRadius: '100px',
                                background: 'transparent', border: `1px solid ${C}`, color: C,
                                fontFamily: "'Orbitron', sans-serif", fontWeight: 700, fontSize: 13,
                                textDecoration: 'none', letterSpacing: '0.1em'
                            }}
                        >
                            RESUME
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                @media (max-width: 900px) {
                  .nav-pill { display: none !important; }
                  .nav-mobile-bar { display: flex !important; }
                }
            `}</style>
        </>
    );
}
