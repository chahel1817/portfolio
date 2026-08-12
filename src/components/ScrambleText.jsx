'use client';
import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*<>/\\01';

/**
 * Decrypts scrambled characters into the target text once scrolled into view — a terminal-style reveal.
 * Pass `active` when this sits inside another clip-path/opacity-driven reveal (e.g. IrisReveal) —
 * ancestor clipping starves this component's own IntersectionObserver of any visible area, so it
 * needs to be told from outside instead of detecting visibility itself.
 */
export default function ScrambleText({ text, as: Tag = 'span', className, style, speed = 32, active }) {
    const ref = useRef(null);
    const autoInView = useInView(ref, { once: true, margin: '-60px' });
    const inView = active !== undefined ? active : autoInView;
    const reducedMotion = useReducedMotion();
    // Seed with a fixed (non-random, non-whitespace) filler — a run of pure spaces collapses to
    // zero width under normal CSS whitespace rules, starving IntersectionObserver of any area to
    // detect. It must stay deterministic (no Math.random here) so SSR and client hydration match;
    // the actual randomized scrambling only happens inside the client-only effect below.
    const [display, setDisplay] = useState(() => (reducedMotion ? text : text.replace(/\S/g, '#')));

    useEffect(() => {
        if (!inView || reducedMotion) return;
        let revealed = 0;
        const id = setInterval(() => {
            revealed += 1;
            let out = '';
            for (let i = 0; i < text.length; i++) {
                if (text[i] === ' ') out += ' ';
                else out += i < revealed ? text[i] : CHARS[Math.floor(Math.random() * CHARS.length)];
            }
            setDisplay(out);
            if (revealed >= text.length) clearInterval(id);
        }, speed);
        return () => clearInterval(id);
    }, [inView, reducedMotion, text, speed]);

    return (
        <Tag ref={ref} className={className} style={style}>
            {display}
        </Tag>
    );
}
