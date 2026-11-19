'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBookOpen, FiMusic, FiUsers } from 'react-icons/fi';
import { GiSoccerBall, GiTennisRacket, GiWeightLiftingUp } from 'react-icons/gi';
import ScrambleText from '@/components/ScrambleText';
import { useTheme } from '@/context/ThemeContext';

const C = '#f5c518';
const CC = '#00f5ff';

const INTERESTS = [
    {
        icon: FiBookOpen,
        title: 'Reading',
        desc: 'Focusing on self-growth and biopics. I enjoy learning from the journeys of successful people and expanding my perspective.',
        color: '#a855f7',
    },
    {
        icon: GiSoccerBall,
        title: 'Football',
        desc: 'Love playing and watching football. The teamwork and strategy involved on the pitch are truly inspiring.',
        color: CC,
    },
    {
        icon: GiTennisRacket,
        title: 'Tennis',
        desc: 'A frequent player on the court. It helps me stay agile and sharp, both physically and mentally.',
        color: C,
    },
    {
        icon: GiWeightLiftingUp,
        title: 'Fitness & Gym',
        desc: 'Consistent gym-goer. Working out is my daily ritual to maintain discipline and high energy levels.',
        color: '#4ade80',
    },
    {
        icon: FiMusic,
        title: 'Music',
        desc: 'Essential for my workflow. Lofi, Synthwave, and energetic beats keep me in the flow during long coding sessions.',
        color: '#f472b6',
    },
    {
        icon: FiUsers,
        title: 'Cultures & Mindsets',
        desc: 'Fascinated by exploring new cultures and understanding different human perspectives. I love learning how people think and live across the globe.',
        color: '#fb923c',
    }
];

export default function InterestsSection() {
    const { isLofi } = useTheme();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    const goldColor = isLofi ? '#b45309' : C;

    return (
        <section id="interests" style={{ position: 'relative', padding: '160px 0 120px', background: isLofi ? 'transparent' : 'linear-gradient(180deg, rgba(8,8,16,0.45), rgba(13,13,26,0.5))', overflow: 'hidden', scrollMarginTop: 110 }}>
            <div className="grid-bg" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundSize: '40px 40px' }} />

            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: 80 }}>
                    <div className="sec-label" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                        <span className="f-mono" style={{ color: goldColor, fontSize: 11, letterSpacing: '0.28em' }}>05 // BEYOND THE CODE</span>
                    </div>
                    <h2 className="f-orbitron" style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 900, color: isLofi ? '#0f172a' : '#fff', lineHeight: 1.1 }}>
                        OFFLINE <ScrambleText as="span" text="MODE" style={{ color: goldColor, textShadow: isLofi ? 'none' : '0 0 20px rgba(245,197,24,0.5)' }} />
                    </h2>
                    <p className="f-rajdhani" style={{ color: isLofi ? '#475569' : '#6b7280', fontSize: 17, marginTop: 12, fontWeight: 500 }}>What I do when I'm not in front of a terminal</p>
                </div>

                <div ref={ref} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
                    {INTERESTS.map((interest, i) => {
                        const iconColor = isLofi && interest.color === C ? goldColor : isLofi && interest.color === CC ? '#0284c7' : interest.color;
                        return (
                            <motion.div
                                key={interest.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                whileHover={{ y: -8, boxShadow: isLofi ? '0 16px 36px rgba(15,23,42,0.1)' : 'none' }}
                                className="interest-card"
                                style={{
                                    background: isLofi ? 'rgba(255,255,255,0.94)' : 'rgba(13,13,26,0.8)',
                                    border: isLofi ? '1px solid rgba(15,23,42,0.1)' : '1px solid rgba(255,255,255,0.06)',
                                    borderRadius: 14,
                                    padding: 32,
                                    transition: 'all 0.3s cubic-bezier(0.23,1,0.32,1)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    boxShadow: isLofi ? '0 10px 30px rgba(15, 23, 42, 0.05)' : 'none'
                                }}
                            >
                                {/* Accent Glow */}
                                <div style={{
                                    position: 'absolute', top: -40, right: -40, width: 120, height: 120,
                                    background: `radial-gradient(circle, ${iconColor}15 0%, transparent 70%)`,
                                    borderRadius: '50%'
                                }} />

                                <div style={{
                                    width: 44, height: 44, borderRadius: 10,
                                    background: `${iconColor}14`,
                                    border: `1px solid ${iconColor}35`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    marginBottom: 20, color: iconColor
                                }}>
                                    <interest.icon size={22} />
                                </div>

                                <h3 className="f-orbitron" style={{ color: isLofi ? '#0f172a' : '#fff', fontSize: 18, fontWeight: 800, marginBottom: 12 }}>{interest.title}</h3>
                                <p className="f-rajdhani" style={{ color: isLofi ? '#334155' : '#9ca3af', fontSize: 15, lineHeight: 1.6, fontWeight: 500 }}>{interest.desc}</p>

                                {/* Bottom Progress Bar Decoration */}
                                <div style={{
                                    position: 'absolute', bottom: 0, left: 0, height: 2, width: '100%',
                                    background: `linear-gradient(90deg, ${iconColor}50, transparent)`
                                }} />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Motivational Quote or Footer */}
                <div style={{ marginTop: 80, textAlign: 'center' }}>
                    <div className="f-rajdhani" style={{ color: isLofi ? '#475569' : '#c9d5e7ff', fontSize: 15, fontStyle: 'italic', letterSpacing: '0.05em', fontWeight: 600 }}>
                        "Balance is not something you find, it's something you create."
                    </div>
                </div>
            </div>

            <style jsx>{`
                .grid-bg {
                    background-image: 
                        linear-gradient(rgba(255,255,255,.02) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,.02) 1px, transparent 1px);
                }
            `}</style>
        </section>
    );
}
