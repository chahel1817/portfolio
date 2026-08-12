'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const C = '#f5c518';

export default function ScrollToTop() {
    const [show, setShow] = useState(false);
    const [spin, setSpin] = useState(false);
    const reducedMotion = useReducedMotion();

    useEffect(() => {
        const onScroll = () => setShow(window.scrollY > 700);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
        if (!reducedMotion) {
            setSpin(true);
            setTimeout(() => setSpin(false), 700);
        }
    };

    return (
        <AnimatePresence>
            {show && (
                <motion.button
                    onClick={handleClick}
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    whileHover={{ scale: 1.1, boxShadow: `0 0 26px rgba(245,197,24,0.6)` }}
                    whileTap={{ scale: 0.9 }}
                    title="Back to rooftop"
                    aria-label="Scroll back to top"
                    style={{
                        position: 'fixed',
                        right: 24,
                        bottom: 28,
                        zIndex: 90,
                        width: 46,
                        height: 46,
                        borderRadius: '50%',
                        background: 'rgba(13,13,26,0.75)',
                        backdropFilter: 'blur(14px)',
                        border: `1px solid rgba(245,197,24,0.35)`,
                        boxShadow: '0 8px 24px rgba(0,0,0,0.5), 0 0 14px rgba(245,197,24,0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        padding: 0,
                    }}
                >
                    <motion.svg
                        width="22"
                        height="22"
                        viewBox="0 0 100 100"
                        animate={spin ? { rotate: 360 } : { rotate: 0 }}
                        transition={spin ? { duration: 0.7, ease: 'easeOut' } : { duration: 0 }}
                        style={{ filter: `drop-shadow(0 0 4px ${C})` }}
                    >
                        {/* Batarang silhouette — four-pointed bat throwing blade */}
                        <path
                            d="M50 8 L58 38 L88 22 L66 48 L92 58 L60 58 L72 90 L50 64 L28 90 L40 58 L8 58 L34 48 L12 22 L42 38 Z"
                            fill={C}
                        />
                        <circle cx="50" cy="50" r="7" fill="#080810" />
                    </motion.svg>
                </motion.button>
            )}
        </AnimatePresence>
    );
}
