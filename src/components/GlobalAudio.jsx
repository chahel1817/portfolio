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
                const subOsc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();

                // Punchy Triangle wave for a gamified "pop" feel
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(1200, audioCtx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(400, audioCtx.currentTime + 0.06);

                // Deep Sine wave for the "thump"
                subOsc.type = 'sine';
                subOsc.frequency.setValueAtTime(150, audioCtx.currentTime);
                subOsc.frequency.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.06);

                gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.06);

                osc.connect(gain);
                subOsc.connect(gain);
                gain.connect(audioCtx.destination);

                osc.start();
                subOsc.start();
                osc.stop(audioCtx.currentTime + 0.06);
                subOsc.stop(audioCtx.currentTime + 0.06);
            } catch (e) {
                console.warn('Audio click effect failed:', e);
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
