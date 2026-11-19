'use client';
import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useSpring, useReducedMotion, AnimatePresence } from 'framer-motion';

const PRISM_PALETTE = ['#00f5ff', '#f5c518', '#a855f7', '#ec4899', '#38bdf8', '#34d399'];

function KineticChar({ char, index, totalChars, mousePos, burstTrigger }) {
    const charRef = useRef(null);
    const reducedMotion = useReducedMotion();

    const [isHovered, setIsHovered] = useState(false);
    const [colorIdx, setColorIdx] = useState(0);

    // Physical spring values for ultra-smooth elastic response
    const springConfig = { stiffness: 360, damping: 16, mass: 0.5 };
    const x = useSpring(0, springConfig);
    const y = useSpring(0, springConfig);
    const rotate = useSpring(0, springConfig);
    const scale = useSpring(1, springConfig);

    // Mouse proximity repulsion
    useEffect(() => {
        if (reducedMotion || !charRef.current || mousePos.x === -999) {
            x.set(0);
            y.set(0);
            rotate.set(0);
            scale.set(1);
            return;
        }

        const rect = charRef.current.getBoundingClientRect();
        const charCenterX = rect.left + rect.width / 2;
        const charCenterY = rect.top + rect.height / 2;

        const dx = mousePos.x - charCenterX;
        const dy = mousePos.y - charCenterY;
        const dist = Math.hypot(dx, dy);
        const maxDist = 140;

        if (dist < maxDist) {
            const factor = Math.pow(1 - dist / maxDist, 1.8);
            const angle = Math.atan2(dy, dx);
            const force = factor * 24;

            x.set(-Math.cos(angle) * force * 0.85);
            y.set(-Math.sin(angle) * force * 1.5 - factor * 14); // Lift upward
            rotate.set((-Math.cos(angle) * 18 * factor));
            scale.set(1 + factor * 0.25);
            setIsHovered(true);
        } else {
            x.set(0);
            y.set(0);
            rotate.set(0);
            scale.set(1);
            setIsHovered(false);
        }
    }, [mousePos, reducedMotion, x, y, rotate, scale]);

    // Prismatic explosion impulse when burstTrigger increments
    useEffect(() => {
        if (!burstTrigger || reducedMotion) return;

        const normalizedPos = (index - totalChars / 2) / (totalChars / 2);
        const burstAngle = normalizedPos * 0.95 + (Math.random() - 0.5) * 0.45;
        const burstForce = 38 + Math.random() * 42;

        setColorIdx(prev => (prev + 1) % PRISM_PALETTE.length);

        // Explosive kick outwards & upwards
        x.set(Math.sin(burstAngle) * burstForce);
        y.set(-Math.abs(Math.cos(burstAngle)) * burstForce - 24);
        rotate.set((Math.random() - 0.5) * 85);
        scale.set(1.35 + Math.random() * 0.3);

        const resetTimer = setTimeout(() => {
            x.set(0);
            y.set(0);
            rotate.set(0);
            scale.set(1);
        }, 180 + Math.random() * 80);

        return () => clearTimeout(resetTimer);
    }, [burstTrigger, index, totalChars, reducedMotion, x, y, rotate, scale]);

    if (char === ' ') {
        return <span style={{ display: 'inline-block', width: '0.35em' }}>&nbsp;</span>;
    }

    const activeColor = PRISM_PALETTE[colorIdx];

    return (
        <motion.span
            ref={charRef}
            style={{
                display: 'inline-block',
                position: 'relative',
                x,
                y,
                rotate,
                scale,
                transformStyle: 'preserve-3d',
                cursor: 'pointer',
                userSelect: 'none',
            }}
            whileHover={{ scale: 1.28 }}
        >
            <span
                style={{
                    display: 'inline-block',
                    color: isHovered || burstTrigger > 0 ? '#ffffff' : '#f1f5f9',
                    textShadow: isHovered
                        ? `
                            -2px 0 12px rgba(0, 245, 255, 0.95),
                            2px 0 12px rgba(245, 197, 24, 0.95),
                            0 0 28px rgba(168, 85, 247, 0.8)
                        `
                        : burstTrigger > 0
                            ? `0 0 24px ${activeColor}, 0 0 45px ${activeColor}80`
                            : '0 0 20px rgba(255, 255, 255, 0.2)',
                    transition: 'color 0.2s, text-shadow 0.2s',
                }}
            >
                {char}
            </span>

            {/* Chromatic dispersion ghost underlay */}
            {(isHovered || burstTrigger > 0) && (
                <>
                    <span
                        aria-hidden="true"
                        style={{
                            position: 'absolute',
                            inset: 0,
                            color: 'rgba(0, 245, 255, 0.85)',
                            transform: 'translate(-3px, -2px)',
                            pointerEvents: 'none',
                            mixBlendMode: 'screen',
                            filter: 'blur(1px)',
                        }}
                    >
                        {char}
                    </span>
                    <span
                        aria-hidden="true"
                        style={{
                            position: 'absolute',
                            inset: 0,
                            color: 'rgba(245, 197, 24, 0.85)',
                            transform: 'translate(3px, 2px)',
                            pointerEvents: 'none',
                            mixBlendMode: 'screen',
                            filter: 'blur(1px)',
                        }}
                    >
                        {char}
                    </span>
                </>
            )}
        </motion.span>
    );
}

export default function KineticPrismTitle({ text = 'CHAHEL TANNA' }) {
    const containerRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: -999, y: -999 });
    const [burstTrigger, setBurstTrigger] = useState(0);
    const [particles, setParticles] = useState([]);
    const nextParticleId = useRef(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        const handleMouseLeave = () => {
            setMousePos({ x: -999, y: -999 });
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('mouseout', handleMouseLeave, { passive: true });
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseLeave);
        };
    }, []);

    const spawnParticles = useCallback((originX, originY) => {
        const newBatch = Array.from({ length: 14 }).map(() => {
            const angle = Math.random() * Math.PI * 2;
            const dist = 30 + Math.random() * 90;
            return {
                id: ++nextParticleId.current,
                x: originX,
                y: originY,
                tx: Math.cos(angle) * dist,
                ty: Math.sin(angle) * dist - 30, // upward bias
                color: PRISM_PALETTE[Math.floor(Math.random() * PRISM_PALETTE.length)],
                size: 3 + Math.random() * 5,
            };
        });

        setParticles(prev => [...prev.slice(-30), ...newBatch]);

        setTimeout(() => {
            setParticles(prev => prev.filter(p => !newBatch.some(nb => nb.id === p.id)));
        }, 800);
    }, []);

    const handleTitleClick = (e) => {
        setBurstTrigger(prev => prev + 1);

        const rect = containerRef.current?.getBoundingClientRect();
        const originX = rect ? e.clientX - rect.left : 100;
        const originY = rect ? e.clientY - rect.top : 20;
        spawnParticles(originX, originY);
    };

    const characters = text.split('');

    return (
        <span
            ref={containerRef}
            onClick={handleTitleClick}
            className="glitch-title"
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                fontSize: 'clamp(32px, 6.5vw, 68px)',
                letterSpacing: '0.08em',
                lineHeight: 1.15,
                perspective: 1000,
                cursor: 'pointer',
            }}
        >
            {characters.map((char, index) => (
                <KineticChar
                    key={index}
                    char={char}
                    index={index}
                    totalChars={characters.length}
                    mousePos={mousePos}
                    burstTrigger={burstTrigger}
                />
            ))}

            {/* Sparkle particles overlay on click */}
            <AnimatePresence>
                {particles.map((p) => (
                    <motion.span
                        key={p.id}
                        initial={{
                            opacity: 1,
                            scale: 0,
                            x: p.x,
                            y: p.y,
                        }}
                        animate={{
                            opacity: 0,
                            scale: [0, 1.3, 0.4],
                            x: p.x + p.tx,
                            y: p.y + p.ty,
                            rotate: 180,
                        }}
                        transition={{ duration: 0.75, ease: 'easeOut' }}
                        style={{
                            position: 'absolute',
                            width: p.size,
                            height: p.size,
                            borderRadius: '50%',
                            background: p.color,
                            boxShadow: `0 0 12px ${p.color}, 0 0 24px ${p.color}`,
                            pointerEvents: 'none',
                            zIndex: 20,
                        }}
                    />
                ))}
            </AnimatePresence>
        </span>
    );
}
