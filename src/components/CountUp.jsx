'use client';
import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

/** Animates a numeric-prefixed value ("170+", "9.02") counting up once it scrolls into view. */
export default function CountUp({ value, duration = 1400, className, style }) {
    const match = typeof value === 'string' ? value.match(/^([\d.]+)(.*)$/) : null;
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-40px' });
    const reducedMotion = useReducedMotion();
    const [display, setDisplay] = useState(() => {
        if (!match) return value;
        return (match[1].includes('.') ? (0).toFixed(match[1].split('.')[1].length) : '0') + match[2];
    });

    useEffect(() => {
        if (!inView) return;
        if (!match || reducedMotion) { setDisplay(value); return; }
        const target = parseFloat(match[1]);
        const decimals = match[1].includes('.') ? match[1].split('.')[1].length : 0;
        const suffix = match[2];
        const start = performance.now();
        let raf;
        const tick = (now) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setDisplay((target * eased).toFixed(decimals) + suffix);
            if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView]);

    return <span ref={ref} className={className} style={style}>{display}</span>;
}
