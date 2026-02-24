'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
    const [pos, setPos] = useState({ x: -100, y: -100 });
    const [dot, setDot] = useState({ x: -100, y: -100 });
    const [hover, setHov] = useState(false);

    useEffect(() => {
        const move = (e) => {
            setPos({ x: e.clientX, y: e.clientY });
            setTimeout(() => setDot({ x: e.clientX, y: e.clientY }), 60);
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
    }, []);

    return (
        <>
            {/* Main cursor ring */}
            <motion.div
                animate={{ x: pos.x - (hover ? 20 : 14), y: pos.y - (hover ? 20 : 14), scale: hover ? 1 : 1 }}
                transition={{ type: 'spring', stiffness: 220, damping: 20, mass: 0.5 }}
                style={{
                    position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 9999,
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
                    position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 9999,
                    width: 6, height: 6, borderRadius: '50%',
                    background: '#f5c518',
                    boxShadow: '0 0 6px rgba(245,197,24,0.8)',
                    opacity: hover ? 0 : 1, transition: 'opacity 0.2s',
                }}
            />
        </>
    );
}
