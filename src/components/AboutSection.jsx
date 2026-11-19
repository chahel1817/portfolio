'use client';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FiMapPin, FiMail, FiCode, FiZap, FiCpu } from 'react-icons/fi';
import ScrambleText from '@/components/ScrambleText';
import CountUp from '@/components/CountUp';
import ProfileCard from '@/components/ProfileCard';
import { useTheme } from '@/context/ThemeContext';

const C = '#f5c518';
const CC = '#00f5ff';

const stats = [
    { value: '100%', label: 'Data Integrity', code: 'ACID', color: C },
    { value: '5', label: 'Projects Shipped', code: 'PRJ', color: CC },
    { value: '15+', label: 'APIs Designed', code: 'API', color: '#a855f7' },
    { value: '10+', label: 'Technologies Mastered', code: 'STK', color: '#4ade80' },
];

const principles = [
    { icon: FiZap, color: C, title: 'Performance-First', desc: 'Optimized backend workflows and efficient data handling for scalable, high-throughput systems.' },
    { icon: FiCpu, color: CC, title: 'Data Engineering', desc: 'Mastered high-level SQL and currently advancing Python proficiency to architect robust, scalable data systems.' },
    { icon: FiZap, color: '#a855f7', title: 'DevOps & Deployment Pipelines', desc: 'Designing automated CI/CD workflows, containerized deployments, and scalable infrastructure for reliable, production-grade applications' },
    { icon: FiCode, color: '#4ade80', title: 'AI Integration & Automation', desc: 'Building intelligent features by integrating AI APIs, automating workflows, and enhancing applications with smart, data-driven capabilities' },
];

function useTypewriterOnView(text, inView, speed = 26, startDelay = 350) {
    const [out, setOut] = useState('');
    useEffect(() => {
        if (!inView) return;
        let i = 0;
        const start = setTimeout(() => {
            const id = setInterval(() => {
                i += 1;
                setOut(text.slice(0, i));
                if (i >= text.length) clearInterval(id);
            }, speed);
        }, startDelay);
        return () => clearTimeout(start);
    }, [inView, text, speed, startDelay]);
    return out;
}

export default function AboutSection() {
    const { isLofi } = useTheme();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    const cmdTyped = useTypewriterOnView('chahel@portfolio:~$ whoami && cat about.md', inView);

    // Dynamic Daylight vs Dark tokens
    const goldColor = isLofi ? '#b45309' : C;
    const cyanColor = isLofi ? '#0284c7' : CC;
    const purpleColor = isLofi ? '#7c3aed' : '#a855f7';
    const greenColor = isLofi ? '#15803d' : '#4ade80';

    return (
        <section id="about" style={{ position: 'relative', padding: '160px 0 120px', background: isLofi ? 'transparent' : 'rgba(13,13,26,0.46)', overflow: 'hidden', scrollMarginTop: 110 }}>

            {/* Bg accents */}
            <div className="grid-bg" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: -80, left: '50%', transform: 'translateX(-50%)', width: 700, height: 420, background: isLofi ? 'radial-gradient(ellipse, rgba(245,158,11,0.08), transparent 68%)' : 'radial-gradient(ellipse, rgba(245,197,24,0.045), transparent 68%)', pointerEvents: 'none', borderRadius: '50%' }} />

            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

                {/* ── Header ───────────────────────────── */}
                <div style={{ textAlign: 'center', marginBottom: 72 }}>
                    <div className="sec-label">
                        <span className="f-mono" style={{ color: goldColor, fontSize: 11, letterSpacing: '0.28em' }}>01 // PROFILE</span>
                    </div>
                    <h2 className="f-orbitron" style={{ fontSize: 'clamp(32px,5vw,54px)', fontWeight: 900, color: isLofi ? '#0f172a' : '#fff', lineHeight: 1.1 }}>
                        ABOUT <ScrambleText as="span" text="ME" style={{ color: goldColor, textShadow: isLofi ? 'none' : '0 0 20px rgba(245,197,24,0.55)' }} />
                    </h2>
                    <p className="f-rajdhani" style={{ color: isLofi ? '#475569' : 'rgba(220,228,240,0.82)', fontSize: 17, marginTop: 10, fontWeight: 500 }}>A practical developer focused on real outcomes</p>
                </div>

                <div ref={ref} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40, alignItems: 'stretch' }}>

                    {/* ── LEFT COLUMN ──────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, x: -32 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
                    >
                        {/* Profile card — High level organic presentation */}
                        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <ProfileCard
                                avatarUrl="/pic-removebg-preview.png"
                                name="Chahel Tanna"
                                title="Software Engineer"
                                handle="chahel1817"
                                status="Open to Work"
                                contactText="Contact Me"
                                showUserInfo={true}
                                enableTilt={true}
                                enableMobileTilt={false}
                                behindGlowColor={isLofi ? 'rgba(245, 158, 11, 0.25)' : 'rgba(80, 180, 255, 0.45)'}
                                innerGradient={isLofi ? 'linear-gradient(160deg, #ffffff 0%, #f8fafc 55%, #f1f5f9 100%)' : 'linear-gradient(145deg, rgba(20, 26, 48, 0.95) 0%, rgba(8, 11, 24, 0.98) 100%)'}
                                onContactClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                            />
                        </div>

                        {/* Quick facts */}
                        <div className="about-card" style={{
                            background: isLofi ? 'rgba(255,255,255,0.94)' : 'rgba(13,13,26,0.75)',
                            border: isLofi ? '1px solid rgba(15,23,42,0.1)' : '1px solid rgba(245,197,24,0.15)',
                            borderRadius: 14,
                            padding: '20px 22px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 14,
                            backdropFilter: 'blur(12px)',
                            boxShadow: isLofi ? '0 12px 30px rgba(15, 23, 42, 0.06)' : 'none'
                        }}>
                            {[
                                { icon: FiMapPin, label: 'Base', value: 'Ahmedabad, Gujarat, India', color: goldColor },
                                { icon: FiMail, label: 'Email', value: 'chahel1817@gmail.com', color: cyanColor },
                                { icon: FiCode, label: 'Focus', value: 'Full Stack | Data Engineering', color: purpleColor },
                            ].map(({ icon: Icon, label, value, color }) => (
                                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                                    <div style={{ width: 36, height: 36, borderRadius: 10, background: `${color}15`, border: `1px solid ${color}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <Icon size={15} style={{ color }} />
                                    </div>
                                    <div>
                                        <p className="f-mono" style={{ color: isLofi ? '#64748b' : '#8b95a5', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600 }}>{label}</p>
                                        <p className="f-rajdhani" style={{ color: isLofi ? '#0f172a' : '#e2e8f0', fontSize: 15, fontWeight: 700 }}>{value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Principle cards — flex:1 so left col matches right col height */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, flex: 1, alignContent: 'stretch' }}>
                            {principles.map(({ icon: Icon, color, title, desc }) => {
                                const cardColor = isLofi
                                    ? (color === C ? goldColor : color === CC ? cyanColor : color === '#a855f7' ? purpleColor : greenColor)
                                    : color;
                                return (
                                    <motion.div key={title}
                                        whileHover={{ y: -4, borderColor: `${cardColor}60`, boxShadow: isLofi ? `0 12px 28px rgba(15,23,42,0.08)` : `0 8px 24px ${color}15` }}
                                        className="about-card"
                                        style={{
                                            background: isLofi ? 'rgba(255,255,255,0.94)' : 'rgba(13,13,26,0.75)',
                                            border: isLofi ? '1px solid rgba(15,23,42,0.1)' : '1px solid rgba(255,255,255,0.07)',
                                            borderRadius: 14,
                                            padding: 18,
                                            transition: 'all 0.3s',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            boxShadow: isLofi ? '0 6px 20px rgba(15, 23, 42, 0.04)' : 'none'
                                        }}
                                    >
                                        <div style={{ width: 34, height: 34, borderRadius: 10, background: `${cardColor}18`, border: `1px solid ${cardColor}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                                            <Icon size={15} style={{ color: cardColor }} />
                                        </div>
                                        <p className="f-orbitron" style={{ color: isLofi ? '#0f172a' : '#f1f5f9', fontSize: 11, fontWeight: 800, marginBottom: 8, letterSpacing: '0.04em', lineHeight: 1.3 }}>{title}</p>
                                        <p className="f-rajdhani" style={{ color: isLofi ? '#334155' : 'rgba(200,210,225,0.75)', fontSize: 13, lineHeight: 1.6, flex: 1, fontWeight: 500 }}>{desc}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* ── RIGHT COLUMN ─────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, x: 32 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
                    >
                        {/* Bio card */}
                        <div className="bio-card" style={{
                            position: 'relative',
                            background: isLofi ? 'rgba(255,255,255,0.96)' : 'rgba(13,13,26,0.92)',
                            border: isLofi ? '1px solid rgba(15,23,42,0.12)' : '1px solid rgba(0,245,255,0.14)',
                            borderRadius: 14,
                            padding: 36,
                            marginBottom: 24,
                            overflow: 'hidden',
                            boxShadow: isLofi ? '0 20px 45px -10px rgba(15,23,42,0.08), 0 1px 3px rgba(15,23,42,0.04)' : 'none'
                        }}>
                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: isLofi ? 'linear-gradient(90deg, transparent, rgba(2,132,199,0.5), rgba(217,119,6,0.5), transparent)' : 'linear-gradient(90deg, transparent, rgba(0,245,255,0.5), rgba(245,197,24,0.5), transparent)' }} />

                            {/* Terminal bar */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
                                <div style={{ display: 'flex', gap: 6 }}>
                                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56' }} />
                                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
                                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f' }} />
                                </div>
                                <span className="f-mono" style={{ color: isLofi ? '#0284c7' : '#8b95a5', fontSize: 11, marginLeft: 6, fontWeight: 600 }}>
                                    {cmdTyped}
                                    <motion.span
                                        animate={{ opacity: [1, 0] }}
                                        transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                                        style={{ marginLeft: 2 }}
                                    >
                                        _
                                    </motion.span>
                                </span>
                            </div>

                            {/* Lead statement */}
                            <p className="f-orbitron" style={{ color: goldColor, fontSize: 'clamp(16px,2.2vw,22px)', fontWeight: 800, lineHeight: 1.4, marginBottom: 20, textShadow: isLofi ? 'none' : '0 0 14px rgba(245,197,24,0.3)' }}>
                                I don't just write code —<br />I engineer systems.
                            </p>

                            {/* Body copy — outcome-driven */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 22 }}>
                                <p className="f-rajdhani" style={{ color: isLofi ? '#1e293b' : '#9ca3af', fontSize: 17, lineHeight: 1.85 }}>
                                    I design <span style={{ color: cyanColor, fontWeight: 700 }}>modular backend systems</span> and scalable APIs optimized for{' '}
                                    <span style={{ color: goldColor, fontWeight: 700 }}>performance, maintainability, and long-term growth</span> — not just to make things work, but to make them <em style={{ color: isLofi ? '#0f172a' : '#e2e8f0', fontStyle: 'normal', fontWeight: 700 }}>last</em>.
                                </p>
                                <p className="f-rajdhani" style={{ color: isLofi ? '#1e293b' : '#9ca3af', fontSize: 17, lineHeight: 1.85 }}>
                                    From <span style={{ color: purpleColor, fontWeight: 700 }}>scalable data pipelines</span> to production-ready REST APIs, every system I build is approached with{' '}
                                    <span style={{ color: goldColor, fontWeight: 700 }}>architectural discipline</span> — because great software isn't built by accident.{' '}
                                    <span style={{ color: isLofi ? '#0f172a' : '#e2e8f0', fontWeight: 700 }}>It's engineered.</span>
                                </p>
                            </div>

                            {/* Authority closer */}
                            <div style={{ borderLeft: `3px solid ${goldColor}`, paddingLeft: 16, marginBottom: 28 }}>
                                <p className="f-rajdhani" style={{ color: isLofi ? '#334155' : 'rgba(200,210,225,0.7)', fontSize: 15, lineHeight: 1.7, fontStyle: 'italic', fontWeight: 500 }}>
                                    Focused on <span style={{ color: goldColor, fontStyle: 'normal', fontWeight: 700 }}>backend architecture</span>,{' '}
                                    <span style={{ color: cyanColor, fontStyle: 'normal', fontWeight: 700 }}>API design</span>, and scalable system engineering.
                                </p>
                            </div>

                            {/* Divider */}
                            <div style={{ height: 1, background: isLofi ? 'linear-gradient(90deg, transparent, rgba(15,23,42,0.1), transparent)' : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)', marginBottom: 22 }} />

                            {/* Tech stack — MERN as supporting detail only */}
                            <div>
                                <p className="f-mono" style={{ color: isLofi ? '#64748b' : '#8b95a5', fontSize: 10, letterSpacing: '0.2em', marginBottom: 14, fontWeight: 600 }}>// CORE STACK</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                    {['Node.js', 'Express.js', 'React', 'Next.js', 'Python', 'MongoDB', 'MySQL', 'Redis', 'OpenAI API', 'Vercel'].map((tech, i) => {
                                        const colors = isLofi
                                            ? [goldColor, cyanColor, purpleColor, greenColor]
                                            : [C, CC, '#a855f7', '#4ade80'];
                                        const c = colors[i % colors.length];
                                        return (
                                            <motion.span key={tech} whileHover={{ scale: 1.08, y: -2 }}
                                                className="f-mono"
                                                style={{
                                                    fontSize: 11,
                                                    fontWeight: 600,
                                                    padding: '5px 12px',
                                                    borderRadius: 6,
                                                    background: isLofi ? `${c}12` : `${c}0d`,
                                                    border: `1px solid ${c}35`,
                                                    color: c,
                                                    transition: 'all 0.2s'
                                                }}
                                            >{tech}</motion.span>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Stats row */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14, marginBottom: 20 }}>
                            {stats.map(({ value, label, code, color }, i) => {
                                const statColor = isLofi
                                    ? (color === C ? goldColor : color === CC ? cyanColor : color === '#a855f7' ? purpleColor : greenColor)
                                    : color;
                                return (
                                    <motion.div key={code}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={inView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 0.3 + i * 0.1 }}
                                        whileHover={{ scale: 1.04, y: -3 }}
                                        className="about-card"
                                        style={{
                                            background: isLofi ? 'rgba(255,255,255,0.94)' : 'rgba(13,13,26,0.85)',
                                            border: isLofi ? '1px solid rgba(15,23,42,0.1)' : `1px solid ${color}18`,
                                            borderRadius: 14,
                                            padding: '22px 16px',
                                            textAlign: 'center',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            transition: 'all 0.3s',
                                            boxShadow: isLofi ? '0 10px 25px rgba(15,23,42,0.05)' : 'none'
                                        }}
                                    >
                                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${statColor}90, transparent)` }} />
                                        <span className="f-mono" style={{ position: 'absolute', top: 10, right: 12, color: `${statColor}60`, fontSize: 10, fontWeight: 700 }}>{code}</span>
                                        <CountUp value={value} className="f-orbitron" style={{ display: 'block', fontSize: 36, fontWeight: 900, color: statColor, textShadow: isLofi ? 'none' : `0 0 16px ${color}55`, lineHeight: 1, marginBottom: 6 }} />
                                        <div className="f-rajdhani" style={{ color: isLofi ? '#475569' : 'rgba(200,210,225,0.7)', fontSize: 13, fontWeight: 600, lineHeight: 1.3 }}>{label}</div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* CTA buttons */}
                        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                            <motion.a href="mailto:chahel1817@gmail.com"
                                whileHover={{ y: -3, boxShadow: isLofi ? '0 8px 24px rgba(217,119,6,0.35)' : '0 0 24px rgba(245,197,24,0.55)' }}
                                style={{
                                    flex: 1, minWidth: 140, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '14px 20px',
                                    background: isLofi ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' : C,
                                    color: isLofi ? '#ffffff' : '#080810',
                                    borderRadius: 8, fontFamily: "'Orbitron', monospace", fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', textDecoration: 'none', transition: 'all 0.25s',
                                    boxShadow: isLofi ? '0 4px 14px rgba(245,158,11,0.25)' : 'none'
                                }}
                            >
                                <FiMail size={14} /> HIRE ME
                            </motion.a>
                            <motion.a href="#projects"
                                onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                                whileHover={{ y: -3, boxShadow: isLofi ? '0 8px 20px rgba(2,132,199,0.2)' : '0 0 18px rgba(0,245,255,0.3)', background: isLofi ? 'rgba(2,132,199,0.08)' : 'rgba(0,245,255,0.06)' }}
                                style={{
                                    flex: 1, minWidth: 140, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '14px 20px',
                                    background: 'transparent',
                                    color: cyanColor,
                                    border: isLofi ? '1px solid #0284c7' : '1px solid rgba(0,245,255,0.35)',
                                    borderRadius: 8, fontFamily: "'Orbitron', monospace", fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', textDecoration: 'none', transition: 'all 0.25s'
                                }}
                            >
                                VIEW PROJECTS
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}



