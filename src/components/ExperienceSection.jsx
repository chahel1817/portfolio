'use client';
import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiAward, FiBookOpen, FiArrowUpRight, FiBriefcase, FiCheckCircle, FiTerminal, FiCalendar } from 'react-icons/fi';
import ScrambleText from '@/components/ScrambleText';
import { useTheme } from '@/context/ThemeContext';

const C = '#f5c518';
const CC = '#00f5ff';

const EXPERIENCE_DATA = [
    {
        id: 'ambiguity-labs',
        category: 'work',
        role: 'Software Engineering Intern',
        organization: 'Ambiguity Labs',
        period: '2024 – 2025',
        location: 'Remote',
        badge: 'SWE INTERNSHIP',
        color: CC,
        summary: 'Worked as a Software Engineering Intern at Ambiguity Labs, contributing to software engineering tasks involving AI agents, evaluation, debugging, testing, and reliability analysis.',
        bullets: [
            'Analyzed complex software engineering tasks and investigated failures in AI-generated solutions to identify correctness and reliability issues.',
            'Debugged and validated solutions by reproducing issues, implementing fixes, and running tests to verify expected behavior.',
            'Evaluated AI-generated outputs across task execution, correctness, and reliability, identifying recurring failure patterns and areas for improvement.',
            'Provided structured feedback and performed quality checks to support iterative improvements in AI-agent performance and solution reliability.',
            'Gained hands-on experience with Python, Git, Docker, software testing, debugging, AI-agent evaluation, and software engineering workflows.'
        ],
        keyOutcome: 'Strengthened practical software engineering and problem-solving skills while contributing to the evaluation and improvement of AI-assisted software development workflows.',
        tech: ['Python', 'Git', 'Docker', 'AI Agent Evaluation', 'Unit Testing', 'Debugging Workflows', 'Reliability Analysis', 'Codebase Analysis']
    }
];

const EDUCATION_DATA = [
    {
        id: 'btech-rai',
        category: 'education',
        role: 'B.Tech in Computer Science & Engineering',
        organization: 'Rai University × CodingGita',
        period: '2025 – Present',
        location: 'Ahmedabad, India',
        badge: 'UNDERGRADUATE DEGREE',
        color: CC,
        summary: 'Advanced engineering curriculum with an intensive focus on scalable backend services, full-stack architectures, and production-grade software workflows.',
        bullets: [
            'Won 3rd Prize in TechHack 2025 State Level Hackathon among 50+ competing collegiate teams',
            'Architecting modular backend microservices and high-throughput data processing workflows',
            'Applying system design and algorithmic principles to real-world AI pipelines'
        ],
        cta: {
            label: 'View Hackathon Achievement',
            href: 'https://www.linkedin.com/posts/chahel-tanna-87300a269_techhack2025-hackathon-learning-activity-7382258039925641217-ZjHc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEGs2FcBhvSqKKqUBOhJm9Uun-m2HYhm6VE'
        }
    },
    {
        id: 'diploma-marwadi',
        category: 'education',
        role: 'Diploma in Computer Engineering',
        organization: 'Marwadi University',
        period: '2022 – 2025',
        location: 'Rajkot, India',
        badge: 'ENGINEERING DIPLOMA',
        color: C,
        grade: 'CGPA: 9.02/10',
        summary: 'Rigorous foundation in computer systems, relational database architecture, networking fundamentals, and operating system internals.',
        bullets: [
            'Ranked within the Top 10 Students across the entire Department of Computer Engineering',
            'Demonstrated academic excellence in Relational Database Management Systems & SQL Query Optimization',
            'Led development sprints for internal student project portals and collaborative tooling'
        ]
    },
    {
        id: 'ssc-dav',
        category: 'education',
        role: 'Secondary Schooling (SSC)',
        organization: 'Tata Chem DAV Public School',
        period: 'Until 2022',
        location: 'Mithapur, India',
        badge: 'SECONDARY EDUCATION',
        color: '#a855f7',
        summary: 'Completed secondary education with focused distinction in Mathematics and Computer Science fundamentals.',
        bullets: [
            'Consistent top-percentile academic track record across all standard board examinations',
            'Active participant and finalist in regional science, mathematics, and logic exhibitions',
            'Cultivated foundational analytical and algorithmic problem-solving discipline'
        ]
    }
];

const ALL_ITEMS = [...EXPERIENCE_DATA, ...EDUCATION_DATA];

export default function ExperienceSection() {
    const { isLofi } = useTheme();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    const [filter, setFilter] = useState('all'); // 'all' | 'work' | 'education'

    const goldColor = isLofi ? '#b45309' : C;
    const cyanColor = isLofi ? '#0284c7' : CC;
    const purpleColor = isLofi ? '#7c3aed' : '#a855f7';

    const displayedItems = filter === 'all'
        ? ALL_ITEMS
        : filter === 'work'
            ? EXPERIENCE_DATA
            : EDUCATION_DATA;

    const filterTabs = [
        { id: 'all', label: 'All Milestones', count: ALL_ITEMS.length, icon: FiAward },
        { id: 'work', label: 'Work Experience', count: EXPERIENCE_DATA.length, icon: FiBriefcase },
        { id: 'education', label: 'Education', count: EDUCATION_DATA.length, icon: FiBookOpen },
    ];

    return (
        <section id="experience" style={{ position: 'relative', padding: '160px 0 120px', background: isLofi ? 'transparent' : 'linear-gradient(180deg, rgba(13,13,26,0.5), rgba(8,8,16,0.45))', overflow: 'hidden', scrollMarginTop: 110 }}>
            <div className="grid-bg" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

            {/* Background Ambient Accents */}
            <div style={{ position: 'absolute', top: '10%', right: '5%', width: 500, height: 500, background: isLofi ? 'radial-gradient(circle, rgba(217,119,6,0.06), transparent 70%)' : 'radial-gradient(circle, rgba(245,197,24,0.03), transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '10%', left: '5%', width: 400, height: 400, background: isLofi ? 'radial-gradient(circle, rgba(2,132,199,0.06), transparent 70%)' : 'radial-gradient(circle, rgba(0,245,255,0.035), transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

            <div className="experience-container" style={{ maxWidth: 1040, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 2 }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: 48 }}>
                    <div className="sec-label" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                        <span className="f-mono" style={{ color: goldColor, fontSize: 11, letterSpacing: '0.28em' }}>04 // CAREER & ACADEMICS</span>
                    </div>
                    <h2 className="f-orbitron" style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 900, color: isLofi ? '#0f172a' : '#fff', lineHeight: 1.1 }}>
                        EXPERIENCE & <ScrambleText as="span" text="JOURNEY" style={{ color: goldColor, textShadow: isLofi ? 'none' : '0 0 20px rgba(245,197,24,0.5)' }} />
                    </h2>
                    <p className="f-rajdhani" style={{ color: isLofi ? '#475569' : 'rgba(220,228,240,0.82)', fontSize: 17, marginTop: 12, fontWeight: 500 }}>
                        Professional software engineering internships, technical contributions, and academic background
                    </p>
                </div>

                {/* Filter Switcher Tabs */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 60, flexWrap: 'wrap' }}>
                    {filterTabs.map((tab) => {
                        const active = filter === tab.id;
                        const TabIcon = tab.icon;
                        return (
                            <motion.button
                                key={tab.id}
                                onClick={() => setFilter(tab.id)}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 8,
                                    padding: '10px 20px',
                                    borderRadius: 30,
                                    fontFamily: "'Orbitron', monospace",
                                    fontSize: 11,
                                    fontWeight: 800,
                                    letterSpacing: '0.08em',
                                    cursor: 'pointer',
                                    transition: 'all 0.25s cubic-bezier(0.23, 1, 0.32, 1)',
                                    background: active
                                        ? (isLofi ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' : 'rgba(245,197,24,0.14)')
                                        : (isLofi ? '#ffffff' : 'rgba(255,255,255,0.04)'),
                                    color: active
                                        ? (isLofi ? '#ffffff' : goldColor)
                                        : (isLofi ? '#475569' : '#94a3b8'),
                                    border: active
                                        ? (isLofi ? 'none' : `1px solid ${goldColor}`)
                                        : (isLofi ? '1px solid rgba(15,23,42,0.12)' : '1px solid rgba(255,255,255,0.08)'),
                                    boxShadow: active
                                        ? (isLofi ? '0 4px 14px rgba(245,158,11,0.3)' : `0 0 16px rgba(245,197,24,0.25)`)
                                        : (isLofi ? '0 2px 6px rgba(15,23,42,0.04)' : 'none')
                                }}
                            >
                                <TabIcon size={13} style={{ color: active && !isLofi ? goldColor : active && isLofi ? '#ffffff' : isLofi ? '#64748b' : '#94a3b8' }} />
                                <span>{tab.label}</span>
                                <span style={{
                                    fontSize: 10,
                                    padding: '2px 7px',
                                    borderRadius: 10,
                                    background: active
                                        ? (isLofi ? 'rgba(255,255,255,0.25)' : 'rgba(245,197,24,0.25)')
                                        : (isLofi ? 'rgba(15,23,42,0.06)' : 'rgba(255,255,255,0.08)'),
                                    color: active ? (isLofi ? '#ffffff' : goldColor) : (isLofi ? '#64748b' : '#94a3b8')
                                }}>
                                    {tab.count}
                                </span>
                            </motion.button>
                        );
                    })}
                </div>

                <div ref={ref} className="experience-timeline" style={{ position: 'relative', paddingLeft: 'min(24px, 4vw)' }}>

                    {/* Vertical Timeline Bar */}
                    <div style={{
                        position: 'absolute',
                        left: 0,
                        top: 20,
                        bottom: 0,
                        width: 1,
                        background: isLofi
                            ? 'linear-gradient(180deg, #b45309 0%, rgba(180,83,9,0.2) 70%, transparent 100%)'
                            : 'linear-gradient(180deg, #f5c518 0%, rgba(245,197,24,0.2) 70%, transparent 100%)',
                        boxShadow: isLofi ? '0 0 8px rgba(180,83,9,0.2)' : '0 0 8px rgba(245,197,24,0.2)'
                    }} />

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 52 }}>
                        <AnimatePresence mode="popLayout">
                            {displayedItems.map((item, i) => {
                                const isWork = item.category === 'work';
                                const nodeColor = isLofi && item.color === C
                                    ? goldColor
                                    : isLofi && item.color === CC
                                        ? cyanColor
                                        : item.color === '#a855f7' && isLofi
                                            ? purpleColor
                                            : item.color;

                                return (
                                    <motion.div
                                        key={item.id}
                                        layout
                                        initial={{ opacity: 0, x: -30, y: 15 }}
                                        animate={{ opacity: 1, x: 0, y: 0 }}
                                        exit={{ opacity: 0, x: -20, scale: 0.98 }}
                                        transition={{ duration: 0.45, delay: i * 0.08, ease: 'easeOut' }}
                                        className="experience-item"
                                        style={{ position: 'relative', paddingLeft: 44 }}
                                    >
                                        {/* Timeline Node (Glowing indicator dot) */}
                                        <div style={{
                                            position: 'absolute',
                                            left: -8,
                                            top: 24,
                                            width: 17,
                                            height: 17,
                                            borderRadius: '50%',
                                            background: isLofi ? '#ffffff' : '#0a0a14',
                                            border: `2.5px solid ${nodeColor}`,
                                            boxShadow: isLofi ? `0 0 10px ${nodeColor}60` : `0 0 12px ${nodeColor}90`,
                                            zIndex: 2,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <div style={{ width: 5, height: 5, borderRadius: '50%', background: nodeColor }} />
                                        </div>

                                        {/* Content Card */}
                                        <motion.div
                                            className="experience-card"
                                            whileHover={{ y: -4, boxShadow: isLofi ? `0 20px 40px rgba(15,23,42,0.08), 0 0 24px -6px ${nodeColor}30` : `0 14px 34px -10px rgba(0,0,0,0.6), 0 0 24px -5px ${nodeColor}28` }}
                                            style={{
                                                background: isLofi ? 'rgba(255,255,255,0.95)' : 'rgba(13,13,26,0.85)',
                                                backdropFilter: 'blur(16px)',
                                                border: isLofi ? '1px solid rgba(15,23,42,0.1)' : '1px solid rgba(255,255,255,0.07)',
                                                borderLeft: `3px solid ${nodeColor}`,
                                                borderRadius: '0 16px 16px 0',
                                                padding: '34px',
                                                boxShadow: isLofi ? '0 10px 30px rgba(15,23,42,0.04)' : 'none',
                                                transition: 'all 0.3s cubic-bezier(0.23,1,0.32,1)'
                                            }}
                                        >
                                            {/* Top Metadata Row */}
                                            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 18 }}>
                                                <div>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
                                                        <span style={{
                                                            display: 'inline-flex',
                                                            alignItems: 'center',
                                                            gap: 6,
                                                            padding: '4px 10px',
                                                            borderRadius: 4,
                                                            background: `${nodeColor}14`,
                                                            border: `1px solid ${nodeColor}35`,
                                                            color: nodeColor,
                                                            fontFamily: "'Orbitron', monospace",
                                                            fontSize: 10,
                                                            fontWeight: 800,
                                                            letterSpacing: '0.08em'
                                                        }}>
                                                            {isWork ? <FiBriefcase size={12} /> : <FiBookOpen size={12} />}
                                                            {item.badge}
                                                        </span>

                                                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: isLofi ? '#64748b' : '#94a3b8' }}>
                                                            <FiCalendar size={13} style={{ color: nodeColor }} />
                                                            <span className="f-mono" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.04em' }}>{item.period}</span>
                                                        </div>
                                                    </div>

                                                    <h3 className="f-orbitron" style={{ color: isLofi ? '#0f172a' : '#ffffff', fontSize: 'clamp(19px, 2.4vw, 24px)', fontWeight: 800, marginBottom: 6, lineHeight: 1.25 }}>
                                                        {item.role}
                                                    </h3>
                                                    <p className="f-rajdhani" style={{ color: isLofi ? '#334155' : '#e2e8f0', fontSize: 18, fontWeight: 700, letterSpacing: '0.02em' }}>
                                                        {item.organization}
                                                        {item.location && (
                                                            <span style={{ color: isLofi ? '#64748b' : '#94a3b8', fontSize: 14, fontWeight: 500, marginLeft: 10 }}>
                                                                • {item.location}
                                                            </span>
                                                        )}
                                                    </p>
                                                </div>

                                                {item.grade && (
                                                    <div style={{
                                                        padding: '6px 14px',
                                                        background: `${nodeColor}14`,
                                                        border: `1px solid ${nodeColor}35`,
                                                        borderRadius: 6,
                                                        color: nodeColor,
                                                        fontFamily: "'Orbitron', monospace",
                                                        fontSize: 12,
                                                        fontWeight: 800
                                                    }}>
                                                        {item.grade}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Summary */}
                                            <p className="f-rajdhani" style={{
                                                color: isLofi ? '#1e293b' : 'rgba(220,230,245,0.88)',
                                                fontSize: 16.5,
                                                lineHeight: 1.7,
                                                marginBottom: 20,
                                                fontWeight: 500
                                            }}>
                                                {item.summary}
                                            </p>

                                            {/* Key Outcome Banner for SWE Internship */}
                                            {item.keyOutcome && (
                                                <div style={{
                                                    marginBottom: 22,
                                                    padding: '14px 18px',
                                                    borderRadius: 8,
                                                    background: isLofi ? 'rgba(2, 132, 199, 0.07)' : 'rgba(0, 245, 255, 0.05)',
                                                    border: isLofi ? '1px solid rgba(2, 132, 199, 0.22)' : '1px solid rgba(0, 245, 255, 0.2)',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: 4
                                                }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                                        <FiCheckCircle size={14} style={{ color: nodeColor }} />
                                                        <span className="f-mono" style={{ color: nodeColor, fontSize: 11, fontWeight: 800, letterSpacing: '0.12em' }}>KEY OUTCOME</span>
                                                    </div>
                                                    <p className="f-rajdhani" style={{ color: isLofi ? '#0f172a' : '#f1f5f9', fontSize: 15, lineHeight: 1.6, fontWeight: 600 }}>
                                                        {item.keyOutcome}
                                                    </p>
                                                </div>
                                            )}

                                            {/* Bullets List */}
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: item.tech ? 22 : 8 }}>
                                                {item.bullets.map((bullet, j) => (
                                                    <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                                                        {isWork ? (
                                                            <div style={{ width: 6, height: 6, borderRadius: '50%', background: nodeColor, marginTop: 8, flexShrink: 0, boxShadow: `0 0 6px ${nodeColor}80` }} />
                                                        ) : (
                                                            <FiAward style={{ color: nodeColor, marginTop: 4, flexShrink: 0 }} size={15} />
                                                        )}
                                                        <span className="f-rajdhani" style={{ color: isLofi ? '#334155' : '#cbd5e1', fontSize: 15.5, lineHeight: 1.55, fontWeight: isLofi ? 600 : 500 }}>
                                                            {bullet}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Tech Stack Chips for Work Experience */}
                                            {item.tech && (
                                                <div style={{ borderTop: isLofi ? '1px solid rgba(15,23,42,0.08)' : '1px solid rgba(255,255,255,0.07)', paddingTop: 18 }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                                                        <FiTerminal size={12} style={{ color: nodeColor }} />
                                                        <span className="f-mono" style={{ color: isLofi ? '#64748b' : '#94a3b8', fontSize: 10, letterSpacing: '0.18em', fontWeight: 700 }}>
                                                            TOOLS & ENGINEERING ECOSYSTEM
                                                        </span>
                                                    </div>
                                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                                        {item.tech.map((t) => (
                                                            <span
                                                                key={t}
                                                                className="f-mono"
                                                                style={{
                                                                    fontSize: 11,
                                                                    padding: '4px 10px',
                                                                    borderRadius: 5,
                                                                    background: isLofi ? `${nodeColor}10` : `${nodeColor}0d`,
                                                                    border: `1px solid ${nodeColor}30`,
                                                                    color: isLofi ? '#0f172a' : '#e2e8f0',
                                                                    fontWeight: isLofi ? 700 : 500
                                                                }}
                                                            >
                                                                {t}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* CTA Button for Education */}
                                            {item.cta && (
                                                <motion.a
                                                    href={item.cta.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ x: 5 }}
                                                    style={{
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        gap: 8,
                                                        marginTop: 20,
                                                        color: nodeColor,
                                                        textDecoration: 'none',
                                                        fontFamily: "'Orbitron', monospace",
                                                        fontSize: 11,
                                                        fontWeight: 800,
                                                        letterSpacing: '0.05em'
                                                    }}
                                                >
                                                    {item.cta.label} <FiArrowUpRight />
                                                </motion.a>
                                            )}
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Footer Note */}
                <div style={{ marginTop: 80, textAlign: 'center' }}>
                    <p className="f-mono" style={{ color: isLofi ? '#64748b' : 'rgba(200,210,225,0.6)', fontSize: 11, letterSpacing: '0.22em', fontWeight: 600 }}>
                        END OF PROFESSIONAL MILESTONES // CONTINUOUSLY EVOLVING
                    </p>
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
