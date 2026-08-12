'use client';
import { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/** Wraps interactive elements so they pull gently toward the cursor when nearby. */
export default function Magnetic({ children, strength = 0.35, range = 60, style }) {
    const ref = useRef(null);
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const reducedMotion = useReducedMotion();

    const handleMove = (e) => {
        if (reducedMotion || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        if (Math.hypot(dx, dy) > range) { setPos({ x: 0, y: 0 }); return; }
        setPos({ x: dx * strength, y: dy * strength });
    };
    const handleLeave = () => setPos({ x: 0, y: 0 });

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            animate={{ x: pos.x, y: pos.y }}
            transition={{ type: 'spring', stiffness: 150, damping: 12, mass: 0.3 }}
            style={{ display: 'inline-block', ...style }}
        >
            {children}
        </motion.div>
    );
}
