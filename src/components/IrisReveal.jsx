'use client';
import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

/** Reveals children through an expanding circular aperture, like a spotlight/iris opening. */
export default function IrisReveal({ children }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });
    const reducedMotion = useReducedMotion();

    return (
        <motion.div
            ref={ref}
            initial={reducedMotion ? false : { clipPath: 'circle(0% at 50% 50%)' }}
            animate={inView ? { clipPath: 'circle(150% at 50% 50%)' } : {}}
            transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
        >
            {children}
        </motion.div>
    );
}
