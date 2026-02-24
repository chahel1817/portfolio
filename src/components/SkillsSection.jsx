'use client';
import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
    SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
    SiTailwindcss, SiRedux, SiFramer,
    SiNodedotjs, SiMongodb, SiPostgresql, SiMysql, SiRedis,
    SiPython, SiJsonwebtokens, SiGraphql, SiSocketdotio,
    SiDocker, SiVercel, SiNetlify, SiGithubactions, SiRender,
    SiGit, SiGithub, SiPostman, SiFigma, SiNpm, SiVite,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

const C = '#f5c518';
const CC = '#00f5ff';

/* Express.js has no SVG in simple-icons — text badge fallback */
function ExpressIcon({ size = 22, style: s }) {
    return (
        <span style={{ fontSize: Math.round(size * 0.5), fontFamily: "'Orbitron',monospace", fontWeight: 900, color: s?.color || '#ffffff', letterSpacing: '-0.03em', lineHeight: 1 }}>
            EX
        </span>
    );
}

const CATS = [
    {
        id: 'frontend',
        label: 'Frontend',
        code: '01',
        color: C,
        emoji: '🖥️',
        desc: 'UI frameworks, styling & client-side logic',
        skills: [
            { name: 'HTML5', icon: SiHtml5, color: '#e34f26' },
            { name: 'CSS3', icon: SiCss3, color: '#1572b6' },
            { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
            { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
            { name: 'React', icon: SiReact, color: '#61dafb' },
            { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
            { name: 'Vite', icon: SiVite, color: '#646cff' },
        ],
    },
    {
        id: 'backend',
        label: 'Backend & APIs',
        code: '02',
        color: '#4ade80',
        emoji: '⚙️',
        desc: 'Core strength — server runtime, databases & system design',
        skills: [
            { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
            { name: 'Express.js', icon: ExpressIcon, color: '#ffffff' },
            { name: 'Java', icon: FaJava, color: '#ed8b00' },
            { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
            { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
            { name: 'Redis', icon: SiRedis, color: '#dc382d' },
            { name: 'Socket.io', icon: SiSocketdotio, color: '#00f5ff' },
        ],
        patterns: [
            'REST API Design',
            'Middleware Architecture',
            'MVC Pattern',
            'API Error Handling',
            'Modular Structure',
            'Route Guards',
            'Rate Limiting',
            'Data Validation',
        ],
    },
    {
        id: 'auth',
        label: 'Auth & Integration',
        code: '03',
        color: CC,
        emoji: '🔐',
        desc: 'Security systems, APIs & third-party integrations — your differentiator',
        skills: [
            { name: 'JWT', icon: SiJsonwebtokens, color: '#d63aff' },
            { name: 'REST APIs', icon: SiPostman, color: '#ff6c37', label: 'REST' },
            { name: 'Socket.io', icon: SiSocketdotio, color: '#00f5ff' },
            { name: 'Postman', icon: SiPostman, color: '#ff6c37' },
            { name: 'Nodemailer', icon: SiNodedotjs, color: '#339933', label: 'Nodemailer' },
        ],
        patterns: [
            'JWT Auth Flow',
            'Role-Based Access Control',
            'Secure Token Handling',
            'OpenRouter API',
            'Speech-to-Text Integration',
            'Cookie & Session Auth',
            'OAuth2 Concepts',
            'API Key Management',
        ],
    },
    {
        id: 'devops',
        label: 'DevOps & Tools',
        code: '04',
        color: '#a855f7',
        emoji: '🚀',
        desc: 'Deployment, CI/CD, version control & tooling',
        skills: [
            { name: 'Git', icon: SiGit, color: '#f05032' },
            { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
            { name: 'Vercel', icon: SiVercel, color: '#ffffff' },
            { name: 'Render', icon: SiRender, color: '#00979d' },
            { name: 'Netlify', icon: SiNetlify, color: '#00c7b7' },
            { name: 'GH Actions', icon: SiGithubactions, color: '#2088ff' },
            { name: 'VS Code', icon: VscCode, color: '#007acc' },
            { name: 'npm', icon: SiNpm, color: '#cb3837' },
        ],
    },
];

function SkillCard({ skill, color, delay, inView }) {
    const [hov, setHov] = useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay, type: 'spring', stiffness: 160 }}
            onHoverStart={() => setHov(true)}
            onHoverEnd={() => setHov(false)}
            style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
                padding: '16px 10px', borderRadius: 10,
                background: hov ? `${skill.color}18` : 'rgba(13,13,26,0.75)',
                border: `1px solid ${hov ? `${skill.color}65` : 'rgba(255,255,255,0.1)'}`,
                boxShadow: hov ? `0 0 22px ${skill.color}35, 0 6px 24px rgba(0,0,0,0.5)` : '0 1px 4px rgba(0,0,0,0.3)',
                transform: hov ? 'translateY(-5px)' : 'translateY(0)',
                transition: 'all 0.28s cubic-bezier(0.23,1,0.32,1)',
                minWidth: 0,
            }}
        >
            <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: hov ? `${skill.color}18` : 'rgba(8,8,16,0.6)',
                border: `1px solid ${hov ? `${skill.color}40` : 'rgba(255,255,255,0.06)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.28s',
                boxShadow: hov ? `0 0 12px ${skill.color}40` : 'none',
            }}>
                <skill.icon size={22} style={{ color: hov ? skill.color : '#8b95a8', transition: 'color 0.25s' }} />
            </div>
            <span className="f-mono" style={{
                fontSize: 10, color: hov ? '#f1f5f9' : '#8b95a8',
                textAlign: 'center', lineHeight: 1.2,
                transition: 'color 0.25s',
                whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%',
            }}>
                {skill.label || skill.name}
            </span>
        </motion.div>
    );
}

export default function SkillsSection() {
    const [active, setActive] = useState('backend'); // backend is core strength — load first
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    const cat = CATS.find(c => c.id === active);

    return (
        <section id="skills" style={{ position: 'relative', padding: '120px 0', background: 'linear-gradient(180deg, #080810 0%, #0d0d1a 100%)', overflow: 'hidden' }}>
            {/* Scanline */}
            <div className="scanline" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(0,245,255,0.04), transparent 70%)', pointerEvents: 'none', borderRadius: '50%' }} />

            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

                {/* ── Header ─────────────────────────────── */}
                <div style={{ textAlign: 'center', marginBottom: 60 }}>
                    <div className="sec-label">
                        <span className="f-mono" style={{ color: 'rgba(0,245,255,0.5)', fontSize: 11, letterSpacing: '0.28em' }}>02 // ARSENAL</span>
                    </div>
                    <h2 className="f-orbitron" style={{ fontSize: 'clamp(32px,5vw,54px)', fontWeight: 900, color: '#fff', lineHeight: 1.1 }}>
                        TECH <span style={{ color: CC, textShadow: '0 0 20px rgba(0,245,255,0.55)' }}>ARSENAL</span>
                    </h2>
                    <p className="f-rajdhani" style={{ color: '#6b7280', fontSize: 17, marginTop: 10 }}>The tools in the utility belt</p>
                </div>

                {/* ── Category pills ──────────────────────── */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 48 }}>
                    {CATS.map(c => {
                        const isOn = active === c.id;
                        return (
                            <motion.button key={c.id}
                                onClick={() => setActive(c.id)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.96 }}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: 8,
                                    fontFamily: "'Orbitron', monospace", fontSize: 11, fontWeight: 700,
                                    letterSpacing: '0.1em', textTransform: 'uppercase',
                                    padding: '11px 22px', borderRadius: 4,
                                    background: isOn ? c.color : 'transparent',
                                    color: isOn ? '#080810' : '#4b5563',
                                    border: isOn ? `1px solid ${c.color}` : '1px solid rgba(255,255,255,0.08)',
                                    boxShadow: isOn ? `0 0 20px ${c.color}50` : 'none',
                                    transition: 'all 0.3s',
                                }}
                            >
                                <span style={{ fontSize: 14 }}>{c.emoji}</span>
                                {c.label}
                                <span className="f-mono" style={{ fontSize: 9, opacity: 0.55 }}>{c.code}</span>
                            </motion.button>
                        );
                    })}
                </div>

                {/* ── Active category panel ───────────────── */}
                <div ref={ref}>
                    <AnimatePresence mode="wait">
                        <motion.div key={active}
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -18 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Panel header */}
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 28, padding: '18px 24px', background: 'rgba(13,13,26,0.8)', border: `1px solid ${cat.color}20`, borderRadius: 8, position: 'relative', overflow: 'hidden' }}>
                                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${cat.color}80, transparent)` }} />
                                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                    <div style={{ width: 4, height: 28, borderRadius: 2, background: cat.color, boxShadow: `0 0 10px ${cat.color}` }} />
                                    <div>
                                        <h3 className="f-orbitron" style={{ color: '#e2e8f0', fontWeight: 700, fontSize: 14 }}>{cat.label}</h3>
                                        <p className="f-mono" style={{ color: '#374151', fontSize: 10, marginTop: 3 }}>{cat.desc}</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                    <span className="f-mono" style={{ color: `${cat.color}80`, fontSize: 11 }}>
                                        {cat.skills.length}{cat.patterns ? ` techs + ${cat.patterns.length} patterns` : ' technologies'}
                                    </span>
                                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: cat.color, boxShadow: `0 0 8px ${cat.color}` }} />
                                </div>
                            </div>

                            {/* Icon grid */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(92px, 1fr))',
                                gap: 12,
                                marginBottom: cat.patterns ? 28 : 0,
                            }}>
                                {cat.skills.map((skill, i) => (
                                    <SkillCard key={skill.name} skill={skill} color={cat.color} delay={i * 0.04} inView={inView} />
                                ))}
                            </div>

                            {/* Patterns & Practices — architectural chips */}
                            {cat.patterns && (
                                <motion.div
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.2 }}
                                    style={{ padding: '20px 24px', background: `${cat.color}07`, border: `1px solid ${cat.color}20`, borderRadius: 8, position: 'relative', overflow: 'hidden' }}
                                >
                                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${cat.color}60, transparent)` }} />
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                                        <div style={{ width: 3, height: 14, borderRadius: 2, background: cat.color, boxShadow: `0 0 8px ${cat.color}` }} />
                                        <span className="f-mono" style={{ color: `${cat.color}90`, fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Patterns & Practices</span>
                                    </div>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                        {cat.patterns.map((p, i) => (
                                            <motion.span
                                                key={p}
                                                initial={{ opacity: 0, scale: 0.85 }}
                                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                                transition={{ delay: 0.25 + i * 0.05 }}
                                                whileHover={{ scale: 1.06, y: -2, color: cat.color, borderColor: `${cat.color}70`, background: `${cat.color}12` }}
                                                className="f-mono"
                                                style={{ fontSize: 11, padding: '7px 16px', borderRadius: 4, border: `1px solid ${cat.color}28`, color: '#9ca3af', background: 'rgba(8,8,16,0.5)', transition: 'all 0.22s', cursor: 'default' }}
                                            >
                                                {p}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* ── All-tech mini strip ─────────────────── */}
                <div style={{ marginTop: 56, padding: '28px 28px 24px', background: 'rgba(13,13,26,0.6)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 10, position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(245,197,24,0.3), rgba(0,245,255,0.3), transparent)' }} />
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                        <div style={{ width: 3, height: 18, borderRadius: 2, background: C }} />
                        <span className="f-orbitron" style={{ color: C, fontSize: 11, fontWeight: 700, letterSpacing: '0.14em' }}>CURRENTLY EXPANDING</span>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                        {[
                            { name: 'Python', color: '#3776ab' },
                            { name: 'AWS Fundamentals', color: '#ff9900' },
                            { name: 'CI/CD Pipelines', color: '#2088ff' },
                            { name: 'Distributed Systems', color: '#00f5ff' },
                            { name: 'AI Workflow Automation', color: '#f5c518' },
                            { name: 'Data Engineering Basics', color: '#4ade80' },
                        ].map(t => (
                            <motion.span key={t.name}
                                whileHover={{ scale: 1.08, y: -3, borderColor: t.color, color: t.color, background: `${t.color}0d` }}
                                className="f-mono"
                                style={{ fontSize: 11, padding: '8px 18px', borderRadius: 4, border: '1px solid rgba(255,255,255,0.18)', color: '#b0bac9', transition: 'all 0.25s' }}
                            >
                                {t.name}
                            </motion.span>
                        ))}
                    </div>
                    <p className="f-rajdhani" style={{ color: '#374151', fontSize: 14, marginTop: 18, borderLeft: '2px solid rgba(245,197,24,0.2)', paddingLeft: 12 }}>
                        Focused trajectory: <span style={{ color: '#f5c518' }}>Backend → Cloud → AI Systems.</span> Depth over breadth.
                    </p>
                </div>
            </div>
        </section>
    );
}
