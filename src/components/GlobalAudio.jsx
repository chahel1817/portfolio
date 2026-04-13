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
                const now = audioCtx.currentTime;

                // 1. Aggressive Sawtooth for the "grit"
                const osc = audioCtx.createOscillator();
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(450, now);
                osc.frequency.exponentialRampToValueAtTime(80, now + 0.12);

                // 2. Heavy Square for the "punch"
                const punch = audioCtx.createOscillator();
                punch.type = 'square';
                punch.frequency.setValueAtTime(120, now);
                punch.frequency.exponentialRampToValueAtTime(30, now + 0.1);

                // 3. Noise for the "crunchy impact"
                const bufferSize = audioCtx.sampleRate * 0.1;
                const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
                const data = buffer.getChannelData(0);
                for (let i = 0; i < bufferSize; i++) {
                    data[i] = Math.random() * 2 - 1;
                }
                const noise = audioCtx.createBufferSource();
                noise.buffer = buffer;

                // Envelopes
                const gain = audioCtx.createGain();
                const noiseGain = audioCtx.createGain();

                gain.gain.setValueAtTime(0, now);
                gain.gain.linearRampToValueAtTime(0.25, now + 0.005); // Rapid attack
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);

                noiseGain.gain.setValueAtTime(0.12, now);
                noiseGain.gain.exponentialRampToValueAtTime(0.01, now + 0.06);

                // Connections
                osc.connect(gain);
                punch.connect(gain);
                noise.connect(noiseGain);

                gain.connect(audioCtx.destination);
                noiseGain.connect(audioCtx.destination);

                osc.start();
                punch.start();
                noise.start();

                osc.stop(now + 0.12);
                punch.stop(now + 0.12);
                noise.stop(now + 0.08);

                // Cleanup ctx after sound
                setTimeout(() => audioCtx.close(), 200);
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
