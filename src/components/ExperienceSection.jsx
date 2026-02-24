'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const C = '#f5c518';
const CC = '#00f5ff';

const JOBS = [
    {
        id: 'JOB001', role: 'Senior Full Stack Developer', company: 'Wayne Enterprises Tech', type: 'Full-time', period: 'Jan 2024 – Present', location: 'Gotham City (Remote)', color: C,
        desc: 'Leading development of enterprise-scale apps serving 50K+ daily users. Architected microservices system reducing latency by 40%.',
        bullets: ['Reduced API response time 800ms → 120ms with Redis caching', 'Built real-time dashboard for 5,000+ concurrent users via WebSockets', 'Mentored 3 junior devs and conducted 50+ code reviews', 'CI/CD pipeline cut deployment time by 70%'],
        tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Docker']
    },
    {
        id: 'JOB002', role: 'Frontend Developer', company: 'Arkham Digital Solutions', type: 'Contract', period: 'May 2023 – Dec 2023', location: 'Remote', color: CC,
        desc: 'Built high-performance React applications for a fintech dashboard processing $2M+ in daily transactions.',
        bullets: ['Custom D3.js data visualization library with 30+ chart types', 'Improved Lighthouse score from 62 → 94', 'Integrated OpenAI for automated financial report generation', 'Bundle size reduced 45% via code splitting'],
        tech: ['React', 'TypeScript', 'D3.js', 'Tailwind CSS', 'Vite']
    },
    {
        id: 'JOB003', role: 'Backend Developer Intern', company: 'GCPD Digital Division', type: 'Internship', period: 'Dec 2022 – Apr 2023', location: 'On-site', color: '#a855f7',
        desc: 'Built RESTful APIs for a government citizen services portal and modernised the authentication layer.',
        bullets: ['JWT auth system with refresh token rotation', 'Notification microservice handling 10K+ emails/day', 'Code coverage increased from 30% → 75% with 200+ unit tests', 'SQL optimisations reduced database load 35%'],
        tech: ['Node.js', 'Express.js', 'MySQL', 'Jest', 'AWS']
    },
];

const EDUCATION = [
    {
        degree: 'B.Tech in Computer Science', institution: 'Gotham University of Technology', period: '2020 – 2024', grade: 'CGPA: 8.7/10', color: C,
        achievements: ['Top 5% of class', 'Best Project Award', 'Hackathon Winner 2×']
    },
];

const CERTS = [
    { name: 'AWS Cloud Practitioner', issuer: 'Amazon', year: '2024', color: '#f59e0b' },
    { name: 'Meta React Developer', issuer: 'Meta', year: '2023', color: CC },
    { name: 'Google IT Automation', issuer: 'Google', year: '2023', color: '#4ade80' },
];

export default function ExperienceSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="experience" style={{ position: 'relative', padding: '120px 0', background: 'linear-gradient(180deg, #0d0d1a, #080810)', overflow: 'hidden' }}>
            <div className="grid-bg" style={{ position: 'absolute', inset: 0 }} />

            <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: 64 }}>
                    <div className="sec-label">
                        <span className="f-mono" style={{ color: 'rgba(245,197,24,0.5)', fontSize: 11, letterSpacing: '0.24em' }}>04 // HISTORY</span>
                    </div>
                    <h2 className="f-orbitron" style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 900, color: '#fff' }}>
                        EXPERIENCE <span style={{ color: C, textShadow: '0 0 20px rgba(245,197,24,0.6)' }}>&amp;</span> EDUCATION
                    </h2>
                    <p className="f-rajdhani" style={{ color: '#374151', fontSize: 16, marginTop: 12 }}>The training montages that shaped the hero</p>
                </div>

                <div ref={ref} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: 48, alignItems: 'start' }}>

                    {/* Timeline */}
                    <div style={{ gridColumn: 'span 2' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 36 }}>
                            <div style={{ width: 3, height: 24, background: C, borderRadius: 2, boxShadow: `0 0 8px ${C}` }} />
                            <span className="f-orbitron" style={{ color: C, fontSize: 12, fontWeight: 700, letterSpacing: '0.14em' }}>WORK EXPERIENCE</span>
                        </div>

                        <div style={{ position: 'relative' }}>
                            {/* Timeline vertical line */}
                            <div style={{ position: 'absolute', left: 20, top: 0, bottom: 0, width: 1, background: `linear-gradient(180deg, ${C}, rgba(245,197,24,0.1))`, boxShadow: `0 0 6px rgba(245,197,24,0.3)` }} />

                            <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
                                {JOBS.map((job, i) => (
                                    <motion.div key={job.id}
                                        initial={{ opacity: 0, x: -28 }}
                                        animate={inView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.55, delay: i * 0.18 }}
                                        style={{ position: 'relative', paddingLeft: 60 }}
                                    >
                                        {/* Dot */}
                                        <div style={{
                                            position: 'absolute', left: 12, top: 22, width: 16, height: 16,
                                            borderRadius: '50%', background: job.color,
                                            boxShadow: `0 0 10px ${job.color}`,
                                            border: '2px solid #080810',
                                        }} />

                                        <motion.div
                                            whileHover={{ x: 4, borderColor: `${job.color}35` }}
                                            style={{ background: 'rgba(13,13,26,0.75)', backdropFilter: 'blur(18px)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 8, padding: 28, transition: 'all 0.3s', position: 'relative', overflow: 'hidden' }}
                                        >
                                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, ${job.color}, transparent)`, opacity: 0.4 }} />

                                            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12, marginBottom: 12 }}>
                                                <div>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                                                        <span className="f-mono" style={{ color: '#374151', fontSize: 10 }}>{job.id}</span>
                                                        <span className="f-mono" style={{ fontSize: 10, padding: '2px 7px', borderRadius: 2, color: job.color, background: `${job.color}15`, border: `1px solid ${job.color}30` }}>{job.type}</span>
                                                    </div>
                                                    <h3 className="f-orbitron" style={{ color: '#e2e8f0', fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{job.role}</h3>
                                                    <p className="f-rajdhani" style={{ color: job.color, fontWeight: 600, fontSize: 14 }}>{job.company}</p>
                                                </div>
                                                <div style={{ textAlign: 'right' }}>
                                                    <p className="f-mono" style={{ color: '#6b7280', fontSize: 11 }}>{job.period}</p>
                                                    <p className="f-mono" style={{ color: '#374151', fontSize: 10, marginTop: 4 }}>{job.location}</p>
                                                </div>
                                            </div>

                                            <p className="f-rajdhani" style={{ color: '#4b5563', fontSize: 15, lineHeight: 1.7, marginBottom: 16 }}>{job.desc}</p>

                                            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
                                                {job.bullets.map((b, j) => (
                                                    <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                                                        <span style={{ color: job.color, fontSize: 11, marginTop: 4, flexShrink: 0 }}>▸</span>
                                                        <span className="f-rajdhani" style={{ color: '#4b5563', fontSize: 14, lineHeight: 1.5 }}>{b}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 16 }}>
                                                {job.tech.map(t => (
                                                    <span key={t} className="f-mono" style={{ fontSize: 10, padding: '3px 8px', borderRadius: 3, background: 'rgba(8,8,16,0.6)', border: '1px solid rgba(255,255,255,0.06)', color: '#374151' }}>{t}</span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Education + Certs */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
                            <div style={{ width: 3, height: 24, background: CC, borderRadius: 2, boxShadow: `0 0 8px ${CC}` }} />
                            <span className="f-orbitron" style={{ color: CC, fontSize: 12, fontWeight: 700, letterSpacing: '0.14em' }}>EDUCATION</span>
                        </div>

                        {EDUCATION.map((edu, i) => (
                            <motion.div key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.4 }}
                                whileHover={{ y: -4 }}
                                style={{ background: 'rgba(13,13,26,0.7)', border: '1px solid rgba(0,245,255,0.15)', borderRadius: 8, padding: 28, marginBottom: 24, position: 'relative', overflow: 'hidden' }}
                            >
                                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,245,255,0.5), transparent)' }} />
                                <div style={{ fontSize: 28, marginBottom: 16 }}>🎓</div>
                                <h4 className="f-orbitron" style={{ color: '#e2e8f0', fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{edu.degree}</h4>
                                <p className="f-rajdhani" style={{ color: CC, fontWeight: 600, fontSize: 14, marginBottom: 4 }}>{edu.institution}</p>
                                <p className="f-mono" style={{ color: '#374151', fontSize: 11, marginBottom: 12 }}>{edu.period}</p>
                                <span className="f-mono" style={{ fontSize: 11, padding: '4px 10px', borderRadius: 3, color: edu.color, background: `${edu.color}15`, border: `1px solid ${edu.color}35`, display: 'inline-block', marginBottom: 16 }}>{edu.grade}</span>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                    {edu.achievements.map(a => (
                                        <div key={a} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                            <span style={{ color: C, fontSize: 12 }}>★</span>
                                            <span className="f-rajdhani" style={{ color: '#6b7280', fontSize: 14 }}>{a}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}

                        {/* Certifications */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                            <div style={{ width: 3, height: 24, background: C, borderRadius: 2 }} />
                            <span className="f-orbitron" style={{ color: C, fontSize: 12, fontWeight: 700, letterSpacing: '0.14em' }}>CERTIFICATIONS</span>
                        </div>
                        <div style={{ background: 'rgba(13,13,26,0.6)', border: '1px solid rgba(245,197,24,0.08)', borderRadius: 8, padding: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
                            {CERTS.map(cert => (
                                <motion.div key={cert.name} whileHover={{ x: 4, borderColor: `${cert.color}30` }}
                                    style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: 14, borderRadius: 6, background: 'rgba(8,8,16,0.4)', border: '1px solid rgba(255,255,255,0.04)', transition: 'all 0.25s' }}
                                >
                                    <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} style={{ width: 6, height: 6, borderRadius: '50%', background: cert.color, boxShadow: `0 0 6px ${cert.color}`, flexShrink: 0, marginTop: 6 }} />
                                    <div>
                                        <p className="f-rajdhani" style={{ color: '#9ca3af', fontWeight: 600, fontSize: 14 }}>{cert.name}</p>
                                        <p className="f-mono" style={{ color: '#374151', fontSize: 10 }}>{cert.issuer} · {cert.year}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
