'use client';
import { useCallback, useEffect, useState } from 'react';

export default function ParticlesBackground() {
    const [loaded, setLoaded] = useState(false);
    const [Particles, setParticles] = useState(null);

    useEffect(() => {
        let cancelled = false;
        (async () => {
            try {
                const [{ default: P }, { loadSlim }] = await Promise.all([
                    import('@tsparticles/react'),
                    import('@tsparticles/slim'),
                ]);
                if (cancelled) return;
                setParticles(() => P);
                // pre-init engine
                const { tsParticles } = await import('@tsparticles/engine');
                await loadSlim(tsParticles);
                if (!cancelled) setLoaded(true);
            } catch { /* ignore */ }
        })();
        return () => { cancelled = true; };
    }, []);

    if (!loaded || !Particles) return null;

    const options = {
        fullScreen: { enable: false },
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        particles: {
            number: { value: 40, density: { enable: true, value_area: 900 } },
            color: { value: ['#f5c518', '#00f5ff', '#ffffff'] },
            opacity: { value: { min: 0.05, max: 0.2 }, animation: { enable: true, speed: 0.6, minimize: true } },
            size: { value: { min: 1, max: 2.5 } },
            links: { enable: true, distance: 140, color: 'rgba(245,197,24,0.06)', opacity: 0.4, width: 0.8 },
            move: { enable: true, speed: 0.5, random: true, out_mode: 'out' },
        },
        interactivity: {
            events: { onHover: { enable: true, mode: 'grab' }, onClick: { enable: true, mode: 'push' } },
            modes: { grab: { distance: 120, links: { opacity: 0.3 } }, push: { quantity: 2 } },
        },
        detectRetina: true,
    };

    return (
        <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
            <Particles id="tsparticles" options={options} style={{ position: 'absolute', inset: 0 }} />
        </div>
    );
}
