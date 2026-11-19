'use client';
import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

/**
 * Animates a numeric-prefixed value ("230+", "9.02", "100%", "9+") counting up once it scrolls into view.
 * 
 * Fail-safe design:
 * 1. Default initial state is ALWAYS the actual verifiable value so SSR, web crawlers,
 *    and initial renders never show "0", "0+", or "0.00".
 * 2. On view, it smoothly rolls up from 0 to the target value.
 * 3. On animation completion or error/timeout fallback, it is guaranteed to land exactly on `value`.
 */
export default function CountUp({ value, duration = 1200, className, style }) {
    const match = typeof value === 'string' ? value.match(/^([\d.]+)(.*)$/) : null;
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.1 });
    const reducedMotion = useReducedMotion();

    // Default to the actual verifiable value from millisecond zero
    const [display, setDisplay] = useState(value);
    const animatedRef = useRef(false);

    useEffect(() => {
        // If non-numeric (e.g. "OPEN") or reduced motion or already completed, guarantee actual value
        if (!match || reducedMotion || animatedRef.current) {
            setDisplay(value);
            return;
        }

        // Only start count-up once in view
        if (!inView) return;

        animatedRef.current = true;
        const target = parseFloat(match[1]);
        if (isNaN(target)) {
            setDisplay(value);
            return;
        }

        const decimals = match[1].includes('.') ? match[1].split('.')[1].length : 0;
        const suffix = match[2] || '';

        const startTime = performance.now();
        let rafId;

        const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(1, elapsed / duration);
            // Cubic ease-out for realistic decelerating count
            const eased = 1 - Math.pow(1 - progress, 3);
            const currentNumber = target * eased;

            if (progress < 1) {
                setDisplay(currentNumber.toFixed(decimals) + suffix);
                rafId = requestAnimationFrame(tick);
            } else {
                setDisplay(value); // Land precisely on the source string
            }
        };

        rafId = requestAnimationFrame(tick);

        // Emergency fallback: guarantee final value is set even if RAF pauses in background tabs
        const fallbackId = setTimeout(() => {
            setDisplay(value);
        }, duration + 100);

        return () => {
            if (rafId) cancelAnimationFrame(rafId);
            clearTimeout(fallbackId);
        };
    }, [inView, match, reducedMotion, value, duration]);

    return (
        <span ref={ref} className={className} style={style}>
            {display}
        </span>
    );
}
