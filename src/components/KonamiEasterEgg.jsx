'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

const KONAMI = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown', 'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a'];

const QUOTES = [
    "It's not who I am underneath, but what I do that defines me.",
    "Why do we fall? So we can learn to pick ourselves back up.",
    "It's not what I expected, but it's what I needed.",
    "I'm whatever Gotham needs me to be.",
];

const BAT_EMBLEM_PATH = 'M195 42 Q160 18 125 20 Q116 10 108 3 Q102 8 100 16 Q98 8 92 3 Q84 10 75 20 Q40 18 5 42 Q30 65 55 60 Q75 75 100 80 Q125 75 145 60 Q170 65 195 42 Z';

export default function KonamiEasterEgg() {
    const [active, setActive] = useState(false);
    const [quote, setQuote] = useState(QUOTES[0]);
    const reducedMotion = useReducedMotion();
    const { muted } = useTheme();

    useEffect(() => {
        let buffer = [];
        const onKey = (e) => {
            if (e.repeat) return; // ignore OS key-repeat from a held key — it breaks the exact sequence
            const tag = document.activeElement?.tagName;
            if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

            buffer.push(e.key.toLowerCase());
            buffer = buffer.slice(-KONAMI.length);

            if (buffer.join(',') === KONAMI.join(',')) {
                setQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
                setActive(true);
                buffer = [];

                if (!muted) {
                    try {
                        const ctx = new (window.AudioContext || window.webkitAudioContext)();
                        const osc = ctx.createOscillator();
                        const gain = ctx.createGain();
                        osc.type = 'sine';
                        osc.frequency.setValueAtTime(220, ctx.currentTime);
                        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.4);
                        gain.gain.setValueAtTime(0.08, ctx.currentTime);
                        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
                        osc.connect(gain).connect(ctx.destination);
                        osc.start();
                        osc.stop(ctx.currentTime + 0.5);
                    } catch { /* audio unsupported/blocked — ignore */ }
                }
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [muted]);

    useEffect(() => {
        if (!active) return;
        const t = setTimeout(() => setActive(false), 4200);
        return () => clearTimeout(t);
    }, [active]);

    return (
        <AnimatePresence>
            {active && (
                <motion.div
                    role="status"
                    aria-live="polite"
                    onClick={() => setActive(false)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: reducedMotion ? 0.01 : 0.3 }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 9998,
                        background: 'rgba(3,4,10,0.88)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        textAlign: 'center',
                        padding: 24,
                    }}
                >
                    <motion.svg
                        initial={{ scale: reducedMotion ? 1 : 0.4, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: reducedMotion ? 0.01 : 0.5, ease: 'backOut' }}
                        width="180"
                        height="70"
                        viewBox="0 0 200 90"
                        style={{ filter: 'drop-shadow(0 0 24px rgba(245,197,24,0.85))', marginBottom: 28 }}
                    >
                        <path d={BAT_EMBLEM_PATH} fill="#f5c518" />
                    </motion.svg>
                    <div
                        className="f-mono"
                        style={{ color: '#f5c518', fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 14, opacity: 0.85 }}
                    >
                        Detective Mode Unlocked
                    </div>
                    <div style={{ color: '#e2e8f0', fontSize: 'clamp(16px, 2.4vw, 22px)', maxWidth: 560, fontStyle: 'italic', lineHeight: 1.5 }}>
                        &ldquo;{quote}&rdquo;
                    </div>
                    <div
                        className="f-mono"
                        style={{ color: 'rgba(226,232,240,0.4)', fontSize: 10, letterSpacing: '0.2em', marginTop: 26, textTransform: 'uppercase' }}
                    >
                        Click anywhere to dismiss
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
