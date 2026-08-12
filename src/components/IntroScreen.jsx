'use client';
import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

const LINES = [
    { text: 'BOOTING GOTHAM OS v3.0', color: 'rgba(245,197,24,0.75)', dur: 480 },
    { text: 'CROSS-REFERENCING ROGUES GALLERY...', color: 'rgba(245,197,24,0.75)', dur: 520 },
    { text: '🃏  JOKER — CONTAINED', color: '#c084fc', dur: 380 },
    { text: '❓  RIDDLER — CONTAINED', color: '#4ade80', dur: 380 },
    { text: '🎭  BANE — CONTAINED', color: '#f87171', dur: 380 },
    { text: '🪙  TWO-FACE — CONTAINED', color: '#94a3b8', dur: 380 },
    { text: '☂️  PENGUIN — CONTAINED', color: '#38bdf8', dur: 380 },
    { text: 'GOTHAM STATUS: SECURE', color: '#4ade80', dur: 520 },
    { text: 'LOADING PORTFOLIO://CHAHEL_TANNA', color: 'rgba(245,197,24,0.75)', dur: 520 },
    { text: 'ACCESS GRANTED', color: '#4ade80', dur: 550 },
];

const DOOR_MS = 900;
const TOTAL_MS = LINES.reduce((sum, l) => sum + l.dur, 0) + 450;

function playAccessChime() {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        [523.25, 783.99].forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.09);
            gain.gain.setValueAtTime(0.001, ctx.currentTime + i * 0.09);
            gain.gain.exponentialRampToValueAtTime(0.09, ctx.currentTime + i * 0.09 + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.09 + 0.35);
            osc.connect(gain).connect(ctx.destination);
            osc.start(ctx.currentTime + i * 0.09);
            osc.stop(ctx.currentTime + i * 0.09 + 0.4);
        });
    } catch { /* audio unsupported/blocked — ignore */ }
}

export default function IntroScreen() {
    const reducedMotion = useReducedMotion();
    const { muted } = useTheme();
    const [visible, setVisible] = useState(false);
    const [exiting, setExiting] = useState(false);
    const [lineIdx, setLineIdx] = useState(0);
    const [chimed, setChimed] = useState(false);

    const finish = useCallback(() => {
        setExiting((prev) => {
            if (prev) return prev;
            sessionStorage.setItem('gotham_intro_seen', 'true');
            setTimeout(() => {
                setVisible(false);
                document.body.style.overflow = '';
            }, DOOR_MS);
            return true;
        });
    }, []);

    useEffect(() => {
        const seen = sessionStorage.getItem('gotham_intro_seen');
        if (seen || reducedMotion) return;
        setVisible(true);
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = ''; };
    }, [reducedMotion]);

    useEffect(() => {
        if (!visible) return;
        const doneTimer = setTimeout(finish, TOTAL_MS);
        const onKey = (e) => { if (e.key === 'Escape') finish(); };
        window.addEventListener('keydown', onKey);
        return () => {
            clearTimeout(doneTimer);
            window.removeEventListener('keydown', onKey);
        };
    }, [visible, finish]);

    useEffect(() => {
        if (!visible || lineIdx >= LINES.length - 1) return;
        const t = setTimeout(() => setLineIdx((i) => Math.min(i + 1, LINES.length - 1)), LINES[lineIdx].dur);
        return () => clearTimeout(t);
    }, [visible, lineIdx]);

    useEffect(() => {
        if (visible && lineIdx === LINES.length - 1 && !chimed) {
            setChimed(true);
            if (!muted) playAccessChime();
        }
    }, [visible, lineIdx, chimed, muted]);

    if (!visible) return null;

    return (
        <AnimatePresence>
            <div
                role="status"
                aria-label="Site loading"
                onClick={finish}
                style={{ position: 'fixed', inset: 0, zIndex: 10000, cursor: 'pointer', overflow: 'hidden' }}
            >
                {/* Top vault door */}
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: exiting ? '-100%' : 0 }}
                    transition={{ duration: DOOR_MS / 1000, ease: [0.76, 0, 0.24, 1] }}
                    style={{
                        position: 'absolute', top: 0, left: 0, right: 0, height: '50%',
                        background: 'linear-gradient(180deg, #050509 0%, #0b0b18 90%)',
                        borderBottom: '1px solid rgba(245,197,24,0.18)',
                    }}
                />
                {/* Bottom vault door */}
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: exiting ? '100%' : 0 }}
                    transition={{ duration: DOOR_MS / 1000, ease: [0.76, 0, 0.24, 1] }}
                    style={{
                        position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%',
                        background: 'linear-gradient(0deg, #050509 0%, #0b0b18 90%)',
                        borderTop: '1px solid rgba(245,197,24,0.18)',
                    }}
                />

                {/* Seam glow / light burst on open */}
                <motion.div
                    animate={{ opacity: exiting ? [1, 1, 0] : [0.5, 1, 0.5], scaleX: exiting ? 40 : 1 }}
                    transition={exiting ? { duration: DOOR_MS / 1000, ease: 'easeOut' } : { duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                        position: 'absolute', top: '50%', left: 0, right: 0, height: 2, transform: 'translateY(-1px)',
                        background: 'linear-gradient(90deg, transparent, #f5c518, transparent)',
                        boxShadow: '0 0 24px rgba(245,197,24,0.7)', pointerEvents: 'none',
                    }}
                />

                {/* Content */}
                <motion.div
                    animate={{ opacity: exiting ? 0 : 1 }}
                    transition={{ duration: 0.35 }}
                    style={{
                        position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
                        alignItems: 'center', justifyContent: 'center', gap: 22, padding: 24, textAlign: 'center',
                    }}
                >
                    {/* Ambient backdrop glow — keeps text legible against the seam line behind it */}
                    <div style={{
                        position: 'absolute', top: '50%', left: '50%', width: 'min(780px, 94vw)', height: 620,
                        transform: 'translate(-50%, -50%)',
                        background: 'radial-gradient(ellipse at center, rgba(5,5,12,0.6) 0%, rgba(5,5,12,0.25) 55%, transparent 78%)',
                        pointerEvents: 'none',
                    }} />

                    {/* Bat emblem — materializes out of a burst of light, then spins as a 3D hologram */}
                    <div style={{ position: 'relative', width: 'clamp(220px, 30vw, 380px)', aspectRatio: '529 / 471', zIndex: 1, perspective: 1000 }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 1.7 }}
                            animate={{ opacity: [0, 0.9, 0], scale: [1.7, 2.6, 3.2] }}
                            transition={{ duration: 1.1, ease: 'easeOut' }}
                            style={{
                                position: 'absolute', inset: 0, borderRadius: '50%',
                                background: 'radial-gradient(circle, rgba(245,197,24,0.55), transparent 70%)',
                                pointerEvents: 'none',
                            }}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.55, y: 0, rotateY: 0, filter: 'blur(16px) brightness(3) drop-shadow(0 0 0px rgba(245,197,24,0))' }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: [0, -10, 0],
                                rotateY: 360,
                                filter: 'blur(0px) brightness(1) drop-shadow(0 0 40px rgba(245,197,24,0.65))',
                            }}
                            transition={{
                                opacity: { duration: 1, ease: [0.16, 1, 0.3, 1] },
                                scale: { duration: 1, ease: [0.16, 1, 0.3, 1] },
                                filter: { duration: 1, ease: [0.16, 1, 0.3, 1] },
                                y: { duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 1 },
                                rotateY: { duration: 5, repeat: Infinity, ease: 'linear', delay: 1 },
                            }}
                            style={{ position: 'relative', width: '100%', height: '100%', transformStyle: 'preserve-3d' }}
                        >
                            <Image src="/main.png" alt="Batman emblem" fill sizes="380px" priority style={{ objectFit: 'contain' }} />
                        </motion.div>
                    </div>

                    {/* Title */}
                    <h1 style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center' }}>
                        <motion.span
                            className="glitch-title"
                            data-text="GOTHAM DOESN'T NEED A HERO."
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.85, duration: 0.6, ease: 'easeOut' }}
                            style={{ fontSize: 'clamp(19px, 3.4vw, 38px)' }}
                        >
                            GOTHAM DOESN&apos;T NEED A HERO.
                        </motion.span>
                        <motion.span
                            className="glitch-title"
                            data-text="IT NEEDS A DEVELOPER."
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.15, duration: 0.6, ease: 'easeOut' }}
                            style={{ fontSize: 'clamp(22px, 4vw, 46px)', color: '#00f5ff' }}
                        >
                            IT NEEDS A DEVELOPER.
                        </motion.span>
                    </h1>

                    <div style={{ height: 18, position: 'relative', zIndex: 1 }}>
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={lineIdx}
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                transition={{ duration: 0.2 }}
                                className="f-mono"
                                style={{
                                    display: 'inline-block',
                                    color: LINES[lineIdx].color,
                                    fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
                                }}
                            >
                                {LINES[lineIdx].text}
                            </motion.span>
                        </AnimatePresence>
                    </div>

                    <div style={{ width: 'min(240px, 60vw)', height: 2, borderRadius: 2, background: 'rgba(255,255,255,0.08)', overflow: 'hidden', position: 'relative', zIndex: 1 }}>
                        <motion.div
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            transition={{ duration: TOTAL_MS / 1000, ease: 'linear' }}
                            style={{ height: '100%', background: 'linear-gradient(90deg, #f5c518, #00f5ff)', boxShadow: '0 0 8px rgba(245,197,24,0.6)' }}
                        />
                    </div>

                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.35 }}
                        transition={{ delay: 1, duration: 0.6 }}
                        className="f-mono"
                        style={{ fontSize: 9, letterSpacing: '0.2em', color: '#c4cedd', textTransform: 'uppercase', marginTop: 4, position: 'relative', zIndex: 1 }}
                    >
                        Click or press Esc to skip
                    </motion.span>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
