'use client';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FiMapPin, FiMail, FiCode, FiZap, FiCpu } from 'react-icons/fi';
import ScrambleText from '@/components/ScrambleText';
import CountUp from '@/components/CountUp';
import ProfileCard from '@/components/ProfileCard';

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
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    const cmdTyped = useTypewriterOnView('chahel@portfolio:~$ whoami && cat about.md', inView);

    return (
        <section id="about" style={{ position: 'relative', padding: '120px 0', background: 'rgba(13,13,26,0.46)', overflow: 'hidden' }}>

            {/* Bg accents */}
            <div className="grid-bg" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: -80, left: '50%', transform: 'translateX(-50%)', width: 700, height: 420, background: 'radial-gradient(ellipse, rgba(245,197,24,0.045), transparent 68%)', pointerEvents: 'none', borderRadius: '50%' }} />

            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

                {/* ── Header ───────────────────────────── */}
                <div style={{ textAlign: 'center', marginBottom: 72 }}>
                    <div className="sec-label">
                        <span className="f-mono" style={{ color: 'rgba(245,197,24,0.5)', fontSize: 11, letterSpacing: '0.28em' }}>01 // PROFILE</span>
                    </div>
                    <h2 className="f-orbitron" style={{ fontSize: 'clamp(32px,5vw,54px)', fontWeight: 900, color: '#fff', lineHeight: 1.1 }}>
                        ABOUT <ScrambleText as="span" text="ME" style={{ color: C, textShadow: '0 0 20px rgba(245,197,24,0.55)' }} />
                    </h2>
                    <p className="f-rajdhani" style={{ color: 'rgba(220,228,240,0.82)', fontSize: 17, marginTop: 10 }}>A practical developer focused on real outcomes</p>
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
                                behindGlowColor="rgba(80, 180, 255, 0.45)"
                                innerGradient="linear-gradient(145deg, rgba(20, 26, 48, 0.95) 0%, rgba(8, 11, 24, 0.98) 100%)"
                                onContactClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                            />
                        </div>

                        {/* Quick facts */}
                        <div style={{ background: 'rgba(13,13,26,0.75)', border: '1px solid rgba(245,197,24,0.15)', borderRadius: 14, padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: 14, backdropFilter: 'blur(12px)' }}>
                            {[
                                { icon: FiMapPin, label: 'Base', value: 'Ahmedabad, Gujarat, India', color: C },
                                { icon: FiMail, label: 'Email', value: 'chahel1817@gmail.com', color: CC },
                                { icon: FiCode, label: 'Focus', value: 'Full Stack | Data Engineering', color: '#a855f7' },
                            ].map(({ icon: Icon, label, value, color }) => (
                                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                                    <div style={{ width: 36, height: 36, borderRadius: 10, background: `${color}12`, border: `1px solid ${color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <Icon size={15} style={{ color }} />
                                    </div>
                                    <div>
                                        <p className="f-mono" style={{ color: '#8b95a5', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase' }}>{label}</p>
                                        <p className="f-rajdhani" style={{ color: '#e2e8f0', fontSize: 15, fontWeight: 600 }}>{value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Principle cards — flex:1 so left col matches right col height */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, flex: 1, alignContent: 'stretch' }}>
                            {principles.map(({ icon: Icon, color, title, desc }) => (
                                <motion.div key={title}
                                    whileHover={{ y: -4, borderColor: `${color}40`, boxShadow: `0 8px 24px ${color}15` }}
                                    style={{ background: 'rgba(13,13,26,0.75)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: 18, transition: 'all 0.3s', display: 'flex', flexDirection: 'column' }}
                                >
                                    <div style={{ width: 34, height: 34, borderRadius: 10, background: `${color}14`, border: `1px solid ${color}28`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                                        <Icon size={15} style={{ color }} />
                                    </div>
                                    <p className="f-orbitron" style={{ color: '#f1f5f9', fontSize: 11, fontWeight: 700, marginBottom: 8, letterSpacing: '0.04em', lineHeight: 1.3 }}>{title}</p>
                                    <p className="f-rajdhani" style={{ color: 'rgba(200,210,225,0.75)', fontSize: 13, lineHeight: 1.6, flex: 1 }}>{desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* ── RIGHT COLUMN ─────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, x: 32 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
                    >
                        {/* Bio card */}
                        <div style={{ position: 'relative', background: 'rgba(13,13,26,0.92)', border: '1px solid rgba(0,245,255,0.14)', borderRadius: 10, padding: 36, marginBottom: 24, overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, rgba(0,245,255,0.5), rgba(245,197,24,0.5), transparent)' }} />

                            {/* Terminal bar */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
                                <div style={{ display: 'flex', gap: 6 }}>
                                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56' }} />
                                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
                                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f' }} />
                                </div>
                                <span className="f-mono" style={{ color: '#8b95a5', fontSize: 11, marginLeft: 6 }}>
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
                            <p className="f-orbitron" style={{ color: C, fontSize: 'clamp(16px,2.2vw,22px)', fontWeight: 800, lineHeight: 1.4, marginBottom: 20, textShadow: '0 0 14px rgba(245,197,24,0.3)' }}>
                                I don't just write code —<br />I engineer systems.
                            </p>

                            {/* Body copy — outcome-driven */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 22 }}>
                                <p className="f-rajdhani" style={{ color: '#9ca3af', fontSize: 17, lineHeight: 1.85 }}>
                                    I design <span style={{ color: CC, fontWeight: 700 }}>modular backend systems</span> and scalable APIs optimized for{' '}
                                    <span style={{ color: C, fontWeight: 700 }}>performance, maintainability, and long-term growth</span> — not just to make things work, but to make them <em style={{ color: '#e2e8f0', fontStyle: 'normal', fontWeight: 600 }}>last</em>.
                                </p>
                                <p className="f-rajdhani" style={{ color: '#9ca3af', fontSize: 17, lineHeight: 1.85 }}>
                                    From <span style={{ color: '#a855f7', fontWeight: 700 }}>scalable data pipelines</span> to production-ready REST APIs, every system I build is approached with{' '}
                                    <span style={{ color: C, fontWeight: 700 }}>architectural discipline</span> — because great software isn't built by accident.{' '}
                                    <span style={{ color: '#e2e8f0', fontWeight: 700 }}>It's engineered.</span>
                                </p>
                            </div>

                            {/* Authority closer */}
                            <div style={{ borderLeft: `2px solid ${C}`, paddingLeft: 16, marginBottom: 28 }}>
                                <p className="f-rajdhani" style={{ color: 'rgba(200,210,225,0.7)', fontSize: 15, lineHeight: 1.7, fontStyle: 'italic' }}>
                                    Focused on <span style={{ color: C, fontStyle: 'normal', fontWeight: 600 }}>backend architecture</span>,{' '}
                                    <span style={{ color: CC, fontStyle: 'normal', fontWeight: 600 }}>API design</span>, and scalable system engineering.
                                </p>
                            </div>

                            {/* Divider */}
                            <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)', marginBottom: 22 }} />

                            {/* Tech stack — MERN as supporting detail only */}
                            <div>
                                <p className="f-mono" style={{ color: '#8b95a5', fontSize: 10, letterSpacing: '0.2em', marginBottom: 14 }}>// CORE STACK</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                    {['Node.js', 'Express.js', 'React', 'Next.js', 'Python', 'MongoDB', 'MySQL', 'Redis', 'OpenAI API', 'Vercel'].map((tech, i) => {
                                        const colors = [C, CC, '#a855f7', '#4ade80'];
                                        const c = colors[i % colors.length];
                                        return (
                                            <motion.span key={tech} whileHover={{ scale: 1.08, y: -2 }}
                                                className="f-mono"
                                                style={{ fontSize: 11, padding: '5px 12px', borderRadius: 4, background: `${c}0d`, border: `1px solid ${c}25`, color: c, transition: 'all 0.2s' }}
                                            >{tech}</motion.span>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Stats row */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14, marginBottom: 20 }}>
                            {stats.map(({ value, label, code, color }, i) => (
                                <motion.div key={code}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    whileHover={{ scale: 1.04, y: -3 }}
                                    style={{ background: 'rgba(13,13,26,0.85)', border: `1px solid ${color}18`, borderRadius: 10, padding: '22px 16px', textAlign: 'center', position: 'relative', overflow: 'hidden', transition: 'all 0.3s' }}
                                >
                                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${color}90, transparent)` }} />
                                    <span className="f-mono" style={{ position: 'absolute', top: 10, right: 12, color: `${color}35`, fontSize: 10 }}>{code}</span>
                                    <CountUp value={value} className="f-orbitron" style={{ display: 'block', fontSize: 36, fontWeight: 900, color, textShadow: `0 0 16px ${color}55`, lineHeight: 1, marginBottom: 6 }} />
                                    <div className="f-rajdhani" style={{ color: 'rgba(200,210,225,0.7)', fontSize: 13, fontWeight: 500, lineHeight: 1.3 }}>{label}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA buttons */}
                        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                            <motion.a href="mailto:chahel1817@gmail.com"
                                whileHover={{ y: -3, boxShadow: '0 0 24px rgba(245,197,24,0.55)' }}
                                style={{ flex: 1, minWidth: 140, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '14px 20px', background: C, color: '#080810', borderRadius: 4, fontFamily: "'Orbitron', monospace", fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textDecoration: 'none', transition: 'all 0.25s' }}
                            >
                                <FiMail size={14} /> HIRE ME
                            </motion.a>
                            <motion.a href="#projects"
                                onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                                whileHover={{ y: -3, boxShadow: '0 0 18px rgba(0,245,255,0.3)', background: 'rgba(0,245,255,0.06)' }}
                                style={{ flex: 1, minWidth: 140, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '14px 20px', background: 'transparent', color: CC, border: '1px solid rgba(0,245,255,0.35)', borderRadius: 4, fontFamily: "'Orbitron', monospace", fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textDecoration: 'none', transition: 'all 0.25s' }}
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



