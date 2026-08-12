'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

export default function CustomCursor() {
    const [pos, setPos] = useState({ x: -100, y: -100 });
    const [dot, setDot] = useState({ x: -100, y: -100 });
    const [hover, setHov] = useState(false);
    const [sparks, setSparks] = useState([]);
    const lastSparkRef = useRef(0);
    const reducedMotion = useReducedMotion();

    useEffect(() => {
        if (reducedMotion) return;
        const move = (e) => {
            setPos({ x: e.clientX, y: e.clientY });
            setTimeout(() => setDot({ x: e.clientX, y: e.clientY }), 60);

            const now = performance.now();
            if (now - lastSparkRef.current > 45) {
                lastSparkRef.current = now;
                const id = now;
                setSparks((s) => [...s.slice(-9), { id, x: e.clientX, y: e.clientY }]);
                setTimeout(() => setSparks((s) => s.filter((p) => p.id !== id)), 450);
            }
        };
        const over = (e) => {
            if (e.target.closest('a,button,[role="button"]')) setHov(true);
        };
        const out = (e) => {
            if (e.target.closest('a,button,[role="button"]')) setHov(false);
        };
        window.addEventListener('mousemove', move);
        document.addEventListener('mouseover', over);
        document.addEventListener('mouseout', out);
        return () => {
            window.removeEventListener('mousemove', move);
            document.removeEventListener('mouseover', over);
            document.removeEventListener('mouseout', out);
        };
    }, [reducedMotion]);

    if (reducedMotion) return null;

    return (
        <>
            {/* Spark trail */}
            <AnimatePresence>
                {sparks.map((p) => (
                    <motion.span
                        key={p.id}
                        initial={{ opacity: 0.55, scale: 1 }}
                        animate={{ opacity: 0, scale: 0.15 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.45, ease: 'easeOut' }}
                        style={{
                            position: 'fixed', top: p.y - 2, left: p.x - 2, pointerEvents: 'none', zIndex: 9997,
                            width: 4, height: 4, borderRadius: '50%',
                            background: '#f5c518', boxShadow: '0 0 6px rgba(245,197,24,0.8)',
                        }}
                    />
                ))}
            </AnimatePresence>

            {/* Crosshair reticle — locks on when hovering an interactive element */}
            <AnimatePresence>
                {hover && (
                    <motion.svg
                        key="reticle"
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1, rotate: 360 }}
                        exit={{ opacity: 0, scale: 0.6 }}
                        transition={{ opacity: { duration: 0.2 }, scale: { duration: 0.2 }, rotate: { duration: 6, repeat: Infinity, ease: 'linear' } }}
                        width="46"
                        height="46"
                        viewBox="0 0 46 46"
                        style={{
                            position: 'fixed', top: pos.y - 23, left: pos.x - 23, pointerEvents: 'none', zIndex: 9999,
                            mixBlendMode: 'difference',
                        }}
                    >
                        <circle cx="23" cy="23" r="18" fill="none" stroke="rgba(245,197,24,0.8)" strokeWidth="1" strokeDasharray="4 5" />
                        <path d="M23 2 L23 10 M23 36 L23 44 M2 23 L10 23 M36 23 L44 23" stroke="rgba(245,197,24,0.9)" strokeWidth="1.5" strokeLinecap="round" />
                    </motion.svg>
                )}
            </AnimatePresence>

            {/* Main cursor ring */}
            <motion.div
                animate={{ x: pos.x - (hover ? 20 : 14), y: pos.y - (hover ? 20 : 14) }}
                transition={{ type: 'spring', stiffness: 220, damping: 20, mass: 0.5 }}
                style={{
                    position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 9998,
                    width: hover ? 40 : 28, height: hover ? 40 : 28,
                    borderRadius: '50%',
                    border: `1.5px solid ${hover ? 'rgba(245,197,24,0.9)' : 'rgba(245,197,24,0.6)'}`,
                    boxShadow: hover ? '0 0 12px rgba(245,197,24,0.7)' : 'none',
                    transition: 'width 0.2s, height 0.2s, border-color 0.2s, box-shadow 0.2s',
                    mixBlendMode: 'difference',
                }}
            />
            {/* Inner dot */}
            <motion.div
                animate={{ x: dot.x - 3, y: dot.y - 3 }}
                transition={{ type: 'spring', stiffness: 600, damping: 30 }}
                style={{
                    position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 9998,
                    width: 6, height: 6, borderRadius: '50%',
                    background: '#f5c518',
                    boxShadow: '0 0 6px rgba(245,197,24,0.8)',
                    opacity: hover ? 0 : 1, transition: 'opacity 0.2s',
                }}
            />
        </>
    );
}
