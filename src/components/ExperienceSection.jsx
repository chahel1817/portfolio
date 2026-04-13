'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiAward, FiBookOpen, FiArrowUpRight } from 'react-icons/fi';

const C = '#f5c518';
const CC = '#00f5ff';

const EDUCATION_DATA = [
    {
        id: 'LATEST',
        degree: 'B.Tech in Computer Science & Engineering',
        institution: 'Rai University × CodingGita',
        period: '2025 – Present',
        color: CC,
        desc: 'Advanced engineering curriculum with intensive focus on full-stack systems and specialized coding workflows.',
        bullets: [
            'Won 3rd Prize in TechHack 2025 State Level Hackathon',
            'Currently building enterprise-grade MERN architectures',
            'Applying system design principles to real-world AI pipelines'
        ],
        cta: {
            label: 'View Hackathon Achievement',
            href: 'https://www.linkedin.com/posts/chahel-tanna-87300a269_techhack2025-hackathon-learning-activity-7382258039925641217-ZjHc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEGs2FcBhvSqKKqUBOhJm9Uun-m2HYhm6VE'
        }
    },
    {
        id: 'DIPLOMA',
        degree: 'Diploma in Computer Engineering',
        institution: 'Marwadi University',
        period: '2022 – 2025',
        color: C,
        grade: 'CGPA: 9.02/10',
        desc: 'Foundational degree covering Core CS concepts, networking, and system software.',
        bullets: [
            'Ranked within the Top 10 Students of the Department',
            'Excellence in Database Management and SQL Optimization',
            'Led multiple group projects for internal university portals'
        ]
    },
    {
        id: 'SCHOOL',
        degree: 'Secondary Schooling (SSC)',
        institution: 'Tata Chem DAV Public School',
        period: 'Until 2022',
        color: '#a855f7',
        desc: 'Completed secondary education with a strong focus on Mathematics and Science fundamentals.',
        bullets: [
            'Consistent academic performance throughout schooling',
            'Active participation in regional science exhibitions',
            'Foundation for future engineering discipline established'
        ]
    }
];

export default function ExperienceSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="experience" style={{ position: 'relative', padding: '140px 0', background: 'linear-gradient(180deg, rgba(13,13,26,0.5), rgba(8,8,16,0.45))', overflow: 'hidden' }}>
            <div className="grid-bg" style={{ position: 'absolute', inset: 0 }} />

            {/* Background Accents */}
            <div style={{ position: 'absolute', top: '10%', right: '5%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(245,197,24,0.03), transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '10%', left: '5%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(0,245,255,0.035), transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

            <div className="experience-container" style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 2 }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: 80 }}>
                    <div className="sec-label">
                        <span className="f-mono" style={{ color: 'rgba(245,197,24,0.5)', fontSize: 11, letterSpacing: '0.28em' }}>04 // ACADEMIC GENESIS</span>
                    </div>
                    <h2 className="f-orbitron" style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 900, color: '#fff', lineHeight: 1.1 }}>
                        EDUCATION <span style={{ color: C, textShadow: '0 0 20px rgba(245,197,24,0.5)' }}>HISTORY</span>
                    </h2>
                    <p className="f-rajdhani" style={{ color: 'rgba(220,228,240,0.82)', fontSize: 17, marginTop: 12 }}>Education and growth timeline</p>
                </div>

                <div ref={ref} className="experience-timeline" style={{ position: 'relative', paddingLeft: 'min(20px, 4vw)' }}>

                    {/* Vertical Timeline Line */}
                    <div style={{
                        position: 'absolute',
                        left: 0,
                        top: 20,
                        bottom: 0,
                        width: 1,
                        background: 'linear-gradient(180deg, #f5c518 0%, rgba(245,197,24,0.2) 70%, transparent 100%)',
                        boxShadow: '0 0 8px rgba(245,197,24,0.2)'
                    }} />

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 60 }}>
                        {EDUCATION_DATA.map((edu, i) => (
                            <motion.div
                                key={edu.id}
                                initial={{ opacity: 0, x: -30 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: i * 0.2, ease: 'easeOut' }}
                                className="experience-item" style={{ position: 'relative', paddingLeft: 40 }}
                            >
                                {/* Timeline Node (Glowy Dot) */}
                                <div style={{
                                    position: 'absolute',
                                    left: -8,
                                    top: 10,
                                    width: 16,
                                    height: 16,
                                    borderRadius: '50%',
                                    background: 'rgba(13,13,26,0.46)',
                                    border: `2px solid ${edu.color}`,
                                    boxShadow: `0 0 10px ${edu.color}80`,
                                    zIndex: 2
                                }} />

                                {/* Content Card */}
                                <motion.div
                                    className="experience-card"
                                    whileHover={{ y: -5, boxShadow: `0 10px 30px -10px rgba(0,0,0,0.5), 0 0 20px -5px ${edu.color}20` }}
                                    style={{
                                        background: 'rgba(13,13,26,0.8)',
                                        backdropFilter: 'blur(12px)',
                                        border: `1px solid rgba(255,255,255,0.06)`,
                                        borderLeft: `3px solid ${edu.color}`,
                                        borderRadius: '0 12px 12px 0',
                                        padding: '32px',
                                        transition: 'all 0.3s cubic-bezier(0.23,1,0.32,1)'
                                    }}
                                >
                                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 20 }}>
                                        <div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                                                <FiBookOpen style={{ color: edu.color }} />
                                                <span className="f-mono" style={{ color: edu.color, fontSize: 11, letterSpacing: '0.1em' }}>{edu.period}</span>
                                            </div>
                                            <h3 className="f-orbitron" style={{ color: '#fff', fontSize: 'clamp(18px, 2.5vw, 22px)', fontWeight: 800, marginBottom: 4 }}>{edu.degree}</h3>
                                            <p className="f-rajdhani" style={{ color: '#9ca3af', fontSize: 18, fontWeight: 600 }}>{edu.institution}</p>
                                        </div>
                                        {edu.grade && (
                                            <div style={{
                                                padding: '6px 14px',
                                                background: `${edu.color}15`,
                                                border: `1px solid ${edu.color}30`,
                                                borderRadius: 4,
                                                color: edu.color,
                                                fontFamily: "'Orbitron', monospace",
                                                fontSize: 12,
                                                fontWeight: 700
                                            }}>
                                                {edu.grade}
                                            </div>
                                        )}
                                    </div>

                                    <p className="f-rajdhani" style={{ color: 'rgba(200,210,225,0.7)', fontSize: 16, lineHeight: 1.6, marginBottom: 24, maxWidth: 700 }}>{edu.desc}</p>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                        {edu.bullets.map((bullet, j) => (
                                            <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                                                <FiAward style={{ color: edu.color, marginTop: 4, flexShrink: 0 }} size={14} />
                                                <span className="f-rajdhani" style={{ color: '#9ca3af', fontSize: 15, lineHeight: 1.4 }}>{bullet}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {edu.cta && (
                                        <motion.a
                                            href={edu.cta.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ x: 5, color: '#fff' }}
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: 8,
                                                marginTop: 24,
                                                color: edu.color,
                                                textDecoration: 'none',
                                                fontFamily: "'Orbitron', monospace",
                                                fontSize: 11,
                                                fontWeight: 700,
                                                letterSpacing: '0.05em'
                                            }}
                                        >
                                            {edu.cta.label} <FiArrowUpRight />
                                        </motion.a>
                                    )}
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Footer Note */}
                <div style={{ marginTop: 80, textAlign: 'center' }}>
                    <p className="f-mono" style={{ color: '#8b95a5', fontSize: 10, letterSpacing: '0.2em' }}>END OF ACADEMIC TRANSCRIPT // SYSTEM SECURE</p>
                </div>
            </div>
            <style>{`
                @media (max-width: 640px) {
                    #experience { padding: 80px 0 !important; }
                    .experience-container { padding: 0 16px !important; }
                    .experience-timeline { padding-left: 10px !important; }
                    .experience-item { padding-left: 20px !important; }
                    .experience-card { padding: 20px !important; }
                }
            `}</style>
        </section>
    );
}


