'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const FADE_MS = 500;

/** Full-screen intro: plays start.mp4 once, then fades out to reveal the homepage.
 * Stays muted throughout — unmuting a playing video without a prior user gesture makes
 * Chrome's autoplay policy pause it outright, which broke playback entirely. */
export default function IntroScreen() {
    const reducedMotion = useReducedMotion();
    const videoRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const [exiting, setExiting] = useState(false);

    const finish = useCallback(() => {
        setExiting((prev) => {
            if (prev) return prev;
            sessionStorage.setItem('gotham_intro_seen', 'true');
            setTimeout(() => {
                setVisible(false);
                document.body.style.overflow = '';
            }, FADE_MS);
            return true;
        });
    }, []);

    useEffect(() => {
        const seen = sessionStorage.getItem('gotham_intro_seen');
        if (seen || reducedMotion) return;
        setVisible(true);
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = ''; };
    }, [reducedMotion]);

    useEffect(() => {
        if (!visible) return;
        const onKey = (e) => { if (e.key === 'Escape') finish(); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [visible, finish]);

    useEffect(() => {
        const video = videoRef.current;
        if (!visible || !video) return;
        video.play().catch(() => { });
        // Safety net — never leave a visitor stuck on a black screen if the video fails to
        // load/play for any reason (slow network, codec issue, blocked request, etc.).
        const failSafe = setTimeout(finish, 9000);
        const onError = () => finish();
        video.addEventListener('error', onError);
        return () => {
            clearTimeout(failSafe);
            video.removeEventListener('error', onError);
        };
    }, [visible, finish]);

    if (!visible) return null;

    return (
        <>
            <motion.div
                role="status"
                aria-label="Site loading"
                onClick={finish}
                animate={{ opacity: exiting ? 0 : 1 }}
                transition={{ duration: FADE_MS / 1000 }}
                style={{
                    position: 'fixed', inset: 0, zIndex: 10000, cursor: 'pointer',
                    overflow: 'hidden', background: '#000',
                }}
            >
                <video
                    ref={videoRef}
                    src="/start.mp4"
                    muted
                    playsInline
                    preload="auto"
                    onEnded={finish}
                    className="intro-video"
                />

                <motion.button
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    whileHover={{ scale: 1.05, borderColor: 'rgba(245,197,24,0.8)', background: 'rgba(245,197,24,0.12)' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => { e.stopPropagation(); finish(); }}
                    aria-label="Skip intro"
                    className="f-mono"
                    style={{
                        position: 'absolute', bottom: 24, right: 24,
                        display: 'flex', alignItems: 'center', gap: 8,
                        padding: '10px 18px', borderRadius: 20,
                        background: 'rgba(6,6,10,0.55)', backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(245,197,24,0.4)',
                        color: '#f5c518', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase',
                        cursor: 'pointer', transition: 'border-color 0.2s, background 0.2s',
                    }}
                >
                    Skip
                    <span style={{ opacity: 0.6, fontSize: 10 }}>Esc</span>
                </motion.button>
            </motion.div>

            <style>{`
                .intro-video {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: 50% 50%;
                    /* A centered, modest overscan trims the source clip's corner watermark
                       without throwing off centered compositions like the bat emblem. */
                    transform: scale(1.1);
                    transform-origin: 50% 50%;
                }
                /* On phones/tablets in portrait, "cover" would crop most of the video's width
                   away (it's a landscape clip), clipping the emblem's wingtips. Switch to
                   "contain" so the full frame is always visible, letterboxed top/bottom instead. */
                @media (orientation: portrait) {
                    .intro-video {
                        object-fit: contain;
                        transform: none;
                    }
                }
            `}</style>
        </>
    );
}
