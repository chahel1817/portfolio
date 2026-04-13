'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const C = '#f5c518';
const CC = '#00f5ff';

/**
 * Premium section divider with animated wave SVG, glow lines, and particles.
 * 
 * variant: 'gold' | 'cyan' | 'mixed' — controls the color scheme
 * flip: boolean — flips the wave vertically for variety
 */
export default function SectionDivider({ variant = 'gold', flip = false }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-50px' });

    const colors = {
        gold: { primary: C, secondary: '#e0a800', glow: 'rgba(245,197,24,0.5)', bg: 'rgba(245,197,24,0.04)' },
        cyan: { primary: CC, secondary: '#00c4cc', glow: 'rgba(0,245,255,0.5)', bg: 'rgba(0,245,255,0.04)' },
        mixed: { primary: C, secondary: CC, glow: 'rgba(245,197,24,0.35)', bg: 'rgba(0,245,255,0.03)' },
    };

    const c = colors[variant] || colors.gold;

    return (
        <div
            ref={ref}
            style={{
                position: 'relative',
                width: '100%',
                height: 80,
                overflow: 'hidden',
                transform: flip ? 'scaleY(-1)' : 'none',
            }}
        >
            {/* Wave SVG */}
            <svg
                viewBox="0 0 1440 80"
                preserveAspectRatio="none"
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    left: 0,
                    top: 0,
                }}
            >
                <defs>
                    <linearGradient id={`divGrad-${variant}-${flip}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={c.primary} stopOpacity="0" />
                        <stop offset="30%" stopColor={c.primary} stopOpacity="0.15" />
                        <stop offset="50%" stopColor={c.secondary} stopOpacity="0.2" />
                        <stop offset="70%" stopColor={c.primary} stopOpacity="0.15" />
                        <stop offset="100%" stopColor={c.primary} stopOpacity="0" />
                    </linearGradient>
                </defs>
                <path
                    d="M0 40 Q180 10, 360 35 Q540 60, 720 40 Q900 20, 1080 45 Q1260 65, 1440 40"
                    fill="none"
                    stroke={`url(#divGrad-${variant}-${flip})`}
                    strokeWidth="1.5"
                />
                <path
                    d="M0 42 Q240 65, 480 38 Q720 15, 960 42 Q1200 65, 1440 38"
                    fill="none"
                    stroke={`url(#divGrad-${variant}-${flip})`}
                    strokeWidth="0.8"
                    opacity="0.5"
                />
            </svg>

            {/* Center glow diamond */}
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%) ${flip ? 'scaleY(-1)' : ''}`,
                    width: 8,
                    height: 8,
                    background: c.primary,
                    borderRadius: 1,
                    rotate: '45deg',
                    boxShadow: `0 0 12px ${c.glow}, 0 0 24px ${c.glow}`,
                }}
            />

            {/* Expanding glow lines from center */}
            <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={inView ? { scaleX: 1, opacity: 1 } : {}}
                transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
                style={{
                    position: 'absolute',
                    left: '20%',
                    right: '20%',
                    top: '50%',
                    height: 1,
                    background: `linear-gradient(90deg, transparent, ${c.primary}40, ${c.secondary}60, ${c.primary}40, transparent)`,
                    boxShadow: `0 0 8px ${c.glow}`,
                    transformOrigin: 'center',
                    transform: flip ? 'scaleY(-1)' : '',
                }}
            />

            {/* Side ornaments — left */}
            <motion.div
                initial={{ x: 30, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 0.6 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{
                    position: 'absolute',
                    left: '15%',
                    top: '50%',
                    transform: `translateY(-50%) ${flip ? 'scaleY(-1)' : ''}`,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                }}
            >
                <div style={{ width: 16, height: 1, background: `linear-gradient(90deg, transparent, ${c.primary}80)` }} />
                <div style={{ width: 3, height: 3, borderRadius: '50%', background: c.primary, boxShadow: `0 0 6px ${c.glow}` }} />
            </motion.div>

            {/* Side ornaments — right */}
            <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 0.6 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{
                    position: 'absolute',
                    right: '15%',
                    top: '50%',
                    transform: `translateY(-50%) ${flip ? 'scaleY(-1)' : ''}`,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                }}
            >
                <div style={{ width: 3, height: 3, borderRadius: '50%', background: c.secondary, boxShadow: `0 0 6px rgba(0,245,255,0.5)` }} />
                <div style={{ width: 16, height: 1, background: `linear-gradient(90deg, ${c.secondary}80, transparent)` }} />
            </motion.div>

            {/* Ambient background glow */}
            <div
                style={{
                    position: 'absolute',
                    left: '30%',
                    right: '30%',
                    top: '30%',
                    bottom: '30%',
                    background: `radial-gradient(ellipse, ${c.bg}, transparent 70%)`,
                    filter: 'blur(10px)',
                    pointerEvents: 'none',
                }}
            />
        </div>
    );
}
