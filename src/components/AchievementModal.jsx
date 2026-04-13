'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GOLD = '#f5c518';
const CYAN = '#00f5ff';

const AUTO_DISMISS_MS = 5000; // auto-close after 5 seconds

// Sparkle particle component
function Sparkle({ delay, x, y, size }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [0, -30 - Math.random() * 40],
                x: [0, (Math.random() - 0.5) * 60],
            }}
            transition={{ duration: 2, delay, repeat: Infinity, repeatDelay: Math.random() * 2 + 1 }}
            style={{
                position: 'absolute',
                left: x,
                top: y,
                width: size,
                height: size,
                borderRadius: '50%',
                background: Math.random() > 0.5 ? GOLD : CYAN,
                boxShadow: `0 0 ${size * 3}px ${Math.random() > 0.5 ? GOLD : CYAN}`,
                pointerEvents: 'none',
            }}
        />
    );
}

export default function AchievementModal() {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const dismissTimerRef = useRef(null);

    const handleClose = useCallback(() => {
        if (isClosing) return; // prevent double-fire
        setIsClosing(true);
        setTimeout(() => {
            setIsVisible(false);
            setIsClosing(false);
            sessionStorage.setItem('achievement_modal_seen', 'true');
        }, 600);
    }, [isClosing]);

    useEffect(() => {
        const hasSeen = sessionStorage.getItem('achievement_modal_seen');
        if (!hasSeen) {
            const showTimer = setTimeout(() => {
                setIsVisible(true);
            }, 1400);
            return () => clearTimeout(showTimer);
        }
    }, []);

    // Auto-dismiss timer — starts when modal becomes visible
    useEffect(() => {
        if (isVisible && !isClosing) {
            dismissTimerRef.current = setTimeout(() => {
                handleClose();
            }, AUTO_DISMISS_MS);
            return () => clearTimeout(dismissTimerRef.current);
        }
    }, [isVisible, isClosing, handleClose]);

    // Close on Escape or click
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isVisible) handleClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isVisible, handleClose]);

    // Sparkle particles
    const sparkles = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        delay: Math.random() * 3,
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
        size: Math.random() * 4 + 2,
    }));

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    id="achievement-modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isClosing ? 0 : 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    onClick={handleClose}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'radial-gradient(ellipse at center, rgba(8, 8, 16, 0.9) 0%, rgba(4, 4, 10, 0.96) 100%)',
                        backdropFilter: 'blur(14px)',
                        WebkitBackdropFilter: 'blur(14px)',
                        padding: '16px',
                        cursor: 'pointer',
                    }}
                >
                    {/* Background particles */}
                    {sparkles.map((s) => (
                        <Sparkle key={s.id} {...s} />
                    ))}

                    {/* Modal Card — compact */}
                    <motion.div
                        id="achievement-modal-card"
                        initial={{ scale: 0.5, opacity: 0, y: 60, rotateX: 12 }}
                        animate={{
                            scale: isClosing ? 0.85 : 1,
                            opacity: isClosing ? 0 : 1,
                            y: isClosing ? 30 : 0,
                            rotateX: 0,
                        }}
                        exit={{ scale: 0.85, opacity: 0, y: 30 }}
                        transition={{
                            type: 'spring',
                            stiffness: 140,
                            damping: 22,
                            mass: 0.7,
                        }}
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            position: 'relative',
                            maxWidth: 440,
                            width: '100%',
                            background: 'linear-gradient(165deg, rgba(18, 18, 32, 0.95) 0%, rgba(12, 12, 22, 0.98) 50%, rgba(8, 8, 18, 0.95) 100%)',
                            borderRadius: 16,
                            border: '1px solid rgba(245, 197, 24, 0.2)',
                            boxShadow: `
                                0 0 50px rgba(245, 197, 24, 0.1),
                                0 0 100px rgba(245, 197, 24, 0.05),
                                0 20px 50px rgba(0, 0, 0, 0.6),
                                inset 0 1px 0 rgba(255, 255, 255, 0.06)
                            `,
                            overflow: 'hidden',
                            cursor: 'default',
                        }}
                    >
                        {/* Top glow accent */}
                        <motion.div
                            animate={{ opacity: [0.5, 0.8, 0.5] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                            style={{
                                position: 'absolute',
                                top: -1,
                                left: '10%',
                                right: '10%',
                                height: 2,
                                background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
                                borderRadius: '0 0 100% 100%',
                                boxShadow: `0 0 20px ${GOLD}60, 0 0 40px ${GOLD}30`,
                            }}
                        />

                        {/* Header — compact */}
                        <div style={{ padding: '20px 24px 0', textAlign: 'center' }}>
                            {/* Trophy + Badge row */}
                            <motion.div
                                initial={{ y: -15, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 10 }}
                            >
                                <motion.span
                                    animate={{
                                        filter: [
                                            'drop-shadow(0 0 8px rgba(245,197,24,0.4))',
                                            'drop-shadow(0 0 18px rgba(245,197,24,0.7))',
                                            'drop-shadow(0 0 8px rgba(245,197,24,0.4))',
                                        ],
                                    }}
                                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                                    style={{ fontSize: 32 }}
                                >
                                    🏆
                                </motion.span>
                                <div
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: 7,
                                        background: `linear-gradient(135deg, rgba(245, 197, 24, 0.15), rgba(245, 197, 24, 0.05))`,
                                        border: `1px solid rgba(245, 197, 24, 0.3)`,
                                        borderRadius: 40,
                                        padding: '5px 16px',
                                    }}
                                >
                                    <motion.div
                                        animate={{ scale: [1, 1.3, 1] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                        style={{
                                            width: 7,
                                            height: 7,
                                            borderRadius: '50%',
                                            background: GOLD,
                                            boxShadow: `0 0 8px ${GOLD}`,
                                        }}
                                    />
                                    <span
                                        style={{
                                            fontFamily: "'Orbitron', monospace",
                                            fontSize: 9,
                                            fontWeight: 700,
                                            letterSpacing: '0.18em',
                                            color: GOLD,
                                            textTransform: 'uppercase',
                                        }}
                                    >
                                        Latest Achievement
                                    </span>
                                </div>
                            </motion.div>

                            {/* Title */}
                            <motion.h2
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.35, duration: 0.5 }}
                                style={{
                                    fontFamily: "'Orbitron', monospace",
                                    fontSize: 'clamp(16px, 3vw, 22px)',
                                    fontWeight: 800,
                                    color: '#ffffff',
                                    margin: '0 0 2px',
                                    letterSpacing: '0.04em',
                                    textShadow: `0 0 30px rgba(245, 197, 24, 0.25)`,
                                }}
                            >
                                3rd Place 🥉
                            </motion.h2>
                            <motion.p
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.45, duration: 0.5 }}
                                style={{
                                    fontFamily: "'Rajdhani', sans-serif",
                                    fontSize: 'clamp(13px, 2.2vw, 15px)',
                                    color: CYAN,
                                    fontWeight: 600,
                                    letterSpacing: '0.08em',
                                    textShadow: `0 0 14px rgba(0, 245, 255, 0.4)`,
                                    margin: '0 0 14px',
                                }}
                            >
                                TechHack 2025 — State Level Hackathon
                            </motion.p>
                        </div>

                        {/* Image — compact height */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.94 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                            style={{ padding: '0 18px', marginBottom: 14 }}
                        >
                            <div
                                style={{
                                    position: 'relative',
                                    borderRadius: 10,
                                    overflow: 'hidden',
                                    border: '1px solid rgba(245, 197, 24, 0.15)',
                                    boxShadow: '0 6px 24px rgba(0, 0, 0, 0.4)',
                                }}
                            >
                                <img
                                    src="/hackathon_win.jpg"
                                    alt="TechHack 2025 - 3rd Place Win"
                                    style={{
                                        width: '100%',
                                        height: 200,
                                        display: 'block',
                                        objectFit: 'cover',
                                        objectPosition: 'center 30%',
                                    }}
                                />
                                {/* Image overlay gradient */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'linear-gradient(180deg, transparent 50%, rgba(8, 8, 16, 0.5) 100%)',
                                        pointerEvents: 'none',
                                    }}
                                />
                                {/* Position badge on image */}
                                <motion.div
                                    initial={{ x: 15, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.8, duration: 0.4 }}
                                    style={{
                                        position: 'absolute',
                                        bottom: 8,
                                        right: 8,
                                        background: 'rgba(8, 8, 16, 0.85)',
                                        backdropFilter: 'blur(10px)',
                                        border: `1px solid ${GOLD}50`,
                                        borderRadius: 8,
                                        padding: '5px 10px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 6,
                                    }}
                                >
                                    <span style={{ fontSize: 16 }}>🥉</span>
                                    <div>
                                        <div
                                            style={{
                                                fontFamily: "'Orbitron', monospace",
                                                fontSize: 9,
                                                fontWeight: 700,
                                                color: GOLD,
                                                letterSpacing: '0.06em',
                                            }}
                                        >
                                            3rd Position
                                        </div>
                                        <div
                                            style={{
                                                fontFamily: "'Rajdhani', sans-serif",
                                                fontSize: 9,
                                                color: 'rgba(255,255,255,0.6)',
                                                letterSpacing: '0.04em',
                                            }}
                                        >
                                            Rai University
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Description — one compact line */}
                        <motion.div
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.65, duration: 0.5 }}
                            style={{ padding: '0 24px', marginBottom: 16, textAlign: 'center' }}
                        >
                            <p
                                style={{
                                    fontFamily: "'Rajdhani', sans-serif",
                                    fontSize: 13,
                                    color: '#a8b4c7',
                                    lineHeight: 1.6,
                                    margin: 0,
                                }}
                            >
                                Secured <span style={{ color: GOLD, fontWeight: 700 }}>3rd place</span> at{' '}
                                <span style={{ color: '#fff', fontWeight: 600 }}>TechHack 2025</span>, a state-level
                                hackathon hosted by Rai University.
                            </p>
                        </motion.div>

                        {/* Auto-dismiss progress bar */}
                        <div style={{ padding: '0 18px 16px' }}>
                            <div
                                style={{
                                    height: 3,
                                    borderRadius: 2,
                                    background: 'rgba(255,255,255,0.06)',
                                    overflow: 'hidden',
                                }}
                            >
                                <motion.div
                                    initial={{ width: '100%' }}
                                    animate={{ width: '0%' }}
                                    transition={{ duration: AUTO_DISMISS_MS / 1000, ease: 'linear' }}
                                    style={{
                                        height: '100%',
                                        background: `linear-gradient(90deg, ${GOLD}, ${CYAN})`,
                                        borderRadius: 2,
                                        boxShadow: `0 0 8px ${GOLD}60`,
                                    }}
                                />
                            </div>
                        </div>

                        {/* Bottom accent */}
                        <motion.div
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            style={{
                                position: 'absolute',
                                bottom: -1,
                                left: '15%',
                                right: '15%',
                                height: 1,
                                background: `linear-gradient(90deg, transparent, ${CYAN}40, transparent)`,
                            }}
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
