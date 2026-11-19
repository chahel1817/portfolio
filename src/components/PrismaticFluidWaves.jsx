'use client';
import { useRef, useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';

export default function PrismaticFluidWaves() {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: 0.5, y: 0.5, speed: 0 });
    const lastMouseRef = useRef({ x: 0.5, y: 0.5, time: 0 });
    const reducedMotion = useReducedMotion();

    useEffect(() => {
        if (reducedMotion) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId;
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize, { passive: true });

        const handleMouseMove = (e) => {
            const now = performance.now();
            const dt = Math.max(1, now - lastMouseRef.current.time);
            const nx = e.clientX / width;
            const ny = e.clientY / height;
            const dist = Math.hypot(nx - lastMouseRef.current.x, ny - lastMouseRef.current.y);
            const speed = Math.min((dist / dt) * 600, 3.0);

            mouseRef.current = { x: nx, y: ny, speed };
            lastMouseRef.current = { x: nx, y: ny, time: now };
        };
        window.addEventListener('mousemove', handleMouseMove, { passive: true });

        let step = 0;
        const waves = [
            { color: 'rgba(0, 245, 255, 0.35)', freq: 0.0018, speed: 0.015, amp: 46, yOffset: 0.62 },
            { color: 'rgba(168, 85, 247, 0.28)', freq: 0.0024, speed: 0.02, amp: 36, yOffset: 0.66 },
            { color: 'rgba(245, 197, 24, 0.25)', freq: 0.0015, speed: 0.012, amp: 52, yOffset: 0.58 },
        ];

        const render = () => {
            step++;
            ctx.clearRect(0, 0, width, height);

            // Decay mouse velocity impulse smoothly
            mouseRef.current.speed *= 0.96;

            waves.forEach((wave) => {
                ctx.beginPath();
                ctx.strokeStyle = wave.color;
                ctx.lineWidth = 2.2;
                ctx.shadowColor = wave.color;
                ctx.shadowBlur = 16;

                const baseAmp = wave.amp + mouseRef.current.speed * 28;
                const baseFreq = wave.freq;

                for (let x = 0; x <= width; x += 6) {
                    const nx = x / width;
                    const mouseDist = Math.abs(nx - mouseRef.current.x);
                    const mouseMod = Math.max(0, 1 - mouseDist * 3.2) * mouseRef.current.speed * 35;

                    const y =
                        height * wave.yOffset +
                        Math.sin(x * baseFreq + step * wave.speed) * baseAmp +
                        Math.cos(x * baseFreq * 1.5 + step * wave.speed * 0.8) * (baseAmp * 0.45) +
                        Math.sin(step * 0.025 + nx * 5.5) * mouseMod;

                    if (x === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }
                ctx.stroke();
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [reducedMotion]);

    if (reducedMotion) return null;

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                mixBlendMode: 'screen',
                opacity: 0.85,
            }}
        />
    );
}

