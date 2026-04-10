'use client';
import { useEffect } from 'react';

/**
 * GlobalAudio component that attaches a click listener to the window
 * and plays a synthetic technical "blip" sound on every click to 
 * links or buttons.
 */
export default function GlobalAudio() {
    useEffect(() => {
        const playBlip = () => {
            try {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                if (!AudioContext) return;

                const audioCtx = new AudioContext();
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();

                // High-precision technical blip frequency
                osc.type = 'sine';
                osc.frequency.setValueAtTime(1000, audioCtx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.08);

                // Very soft volume to avoid being annoying
                gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.08);

                osc.connect(gain);
                gain.connect(audioCtx.destination);

                osc.start();
                osc.stop(audioCtx.currentTime + 0.08);
            } catch (e) {
                // Silently fail if audio context is blocked by browser policy
                console.warn('Audio click effect blocked or failed:', e);
            }
        };

        const handleClick = (e) => {
            // Only play sound for interactive elements
            const interactiveElements = ['BUTTON', 'A', 'INPUT', 'SELECT', 'TEXTAREA'];
            const target = e.target.closest('button, a, input[type="button"], input[type="submit"]');

            if (target || interactiveElements.includes(e.target.tagName)) {
                playBlip();
            }
        };

        window.addEventListener('mousedown', handleClick);
        return () => window.removeEventListener('mousedown', handleClick);
    }, []);

    return null; // This component doesn't render anything
}
