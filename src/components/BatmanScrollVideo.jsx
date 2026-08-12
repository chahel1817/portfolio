'use client';
import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * Full-bleed hero background video — plays start to finish on load and loops, rather than
 * waiting on scroll input. `prefers-reduced-motion` users get a static first frame instead.
 */
export default function BatmanScrollVideo() {
    const videoRef = useRef(null);
    const reducedMotion = useReducedMotion();

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        if (reducedMotion) {
            video.pause();
            video.currentTime = 0;
            return;
        }
        video.play().catch(() => { });
    }, [reducedMotion]);

    return (
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, overflow: 'hidden', pointerEvents: 'none' }}>
            <video
                ref={videoRef}
                src="/batman.mp4"
                autoPlay={!reducedMotion}
                loop
                muted
                playsInline
                preload="auto"
                style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                    pointerEvents: 'none',
                }}
            />
            {/* Darkening pass — the video plays continuously behind constantly-visible text, so
                coverage needs to hold up everywhere, not just one frame: a radial vignette plus
                top/bottom bands so the name, subtitle, paragraph and CTA row all stay readable. */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                background: 'radial-gradient(ellipse at 50% 45%, rgba(6,6,10,0.35) 0%, rgba(6,6,10,0.6) 55%, rgba(6,6,10,0.88) 100%)',
            }} />
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                background: 'linear-gradient(180deg, rgba(6,6,10,0.65) 0%, rgba(6,6,10,0.35) 22%, rgba(6,6,10,0.45) 55%, rgba(6,6,10,0.7) 78%, rgba(6,6,10,0.9) 100%)',
            }} />
        </div>
    );
}
