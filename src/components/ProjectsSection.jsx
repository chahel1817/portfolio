'use client';
import { useState, useRef } from 'react';
import { motion, useReducedMotion, useInView } from 'framer-motion';
import Image from 'next/image';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Magnetic from '@/components/Magnetic';
import ScrambleText from '@/components/ScrambleText';
import IrisReveal from '@/components/IrisReveal';

/* ─── Project Data ─────────────────────────────────────────────────────────── */
const PROJECTS = [
    {
        id: 'P007',
        title: 'CricWarehouse',
        sub: 'IPL Data Engineering Platform',
        desc: 'End-to-end IPL data engineering and analytics platform that transforms raw ball-by-ball JSON data through Bronze, Silver, and Gold layers using PySpark. Processes and stores analytics-ready datasets in Parquet format, exposes player, team, match, and venue insights through FastAPI REST APIs, and visualizes them through an interactive Next.js frontend.',
        tech: ['Python', 'PySpark', 'Pandas', 'PyArrow', 'Parquet', 'FastAPI', 'Next.js', 'React', 'Tailwind CSS'],
        image: '/cricwarehouse.png',
        github: 'https://github.com/chahel1817/CricWarehouse',
        live: 'https://cricwarehouse.vercel.app/',
        accentColor: '#f97316',
        glowColor: 'rgba(249,115,22,0.35)',
        glowColorSoft: 'rgba(249,115,22,0.08)',
        status: 'LIVE',
        statusColor: '#f97316',
        highlights: ['Data Pipelines', 'Medallion Arch', 'REST APIs', 'Analytics'],
    },
    {
        id: 'P001',
        title: 'VivaMate',
        sub: 'AI-Powered Mock Interview Platform',
        desc: 'A MERN-stack AI interview simulator with live camera & mic support, speech-to-text answers, and AI-generated questions via OpenRouter. Evaluates responses for clarity, confidence, and technical depth with detailed analytics and downloadable PDF reports.',
        tech: ['React 19', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'OpenAI API', 'Recharts', 'JWT'],
        image: '/vivamate.png',
        github: 'https://github.com/chahel1817/VivaMate',
        live: 'https://vivamate.vercel.app/',
        accentColor: '#a855f7',
        glowColor: 'rgba(168,85,247,0.35)',
        glowColorSoft: 'rgba(168,85,247,0.08)',
        status: 'LIVE',
        statusColor: '#a855f7',
        highlights: ['AI Questions', 'Speech-to-Text', 'Analytics', 'PDF Reports'],
    },
    {
        id: 'P006',
        title: 'SQLens',
        sub: 'Advanced Database Engine & AI Query Optimizer',
        desc: 'SQLens is an advanced database engine that utilizes AST-based transpilation and AI Deep Analysis to optimize MySQL queries for PostgreSQL environments. It features a high-fidelity Visual Execution Tree and one-click "Auto-Fix" infrastructure to eliminate performance bottlenecks in real-time.',
        tech: [
            'Next.js 16 (App Router)',
            'TypeScript',
            'Gemini 1.5 Flash',
            'node-sql-parser (AST)',
            'PostgreSQL (Multi-tenant)',
            'Node.js / Express',
            'Monaco Editor'
        ],
        image: '/SQLens.png',
        github: 'https://github.com/chahel1817/SQLens',
        live: 'https://sqlens-liard.vercel.app/',
        accentColor: '#3b82f6',
        glowColor: 'rgba(59,130,246,0.35)',
        glowColorSoft: 'rgba(59,130,246,0.08)',
        status: 'LIVE',
        statusColor: '#3b82f6',
        highlights: ['AST Transpilation', 'Visual Execution Tree', 'AI Optimization', 'Auto-Fix Engine'],
    },
    {
        id: 'P002',
        title: 'PriceBuddy',
        sub: 'E-commerce Tracker & Price Monitor',
        desc: 'A full-stack tracker that monitors prices across Amazon and eBay via SerpApi and high-precision parsing with Cheerio. Features include URL canonicalization, automated price refreshes via scheduled cron jobs, and real-time Nodemailer alerts for price drops. The MySQL-backed history provides per-product trend analytics in a premium Next.js dashboard.',
        tech: ['Next.js', 'Node.js', 'Express', 'MySQL', 'SerpApi', 'Cheerio', 'Cron', 'Nodemailer', 'Tailwind CSS'],
        image: '/pricebuddy.png',
        github: 'https://github.com/chahel1817/PriceBuddy',
        live: 'https://price-buddy-three.vercel.app/',
        accentColor: '#06b6d4',
        glowColor: 'rgba(6,182,212,0.35)',
        glowColorSoft: 'rgba(6,182,212,0.08)',
        status: 'LIVE',
        statusColor: '#06b6d4',
        highlights: ['Price Scrapers', 'Cron Jobs', 'Email Alerts', 'Trend History'],
    },
    {
        id: 'P003',
        title: 'EduTrack',
        sub: 'Smart Learning & Quiz Platform',
        desc: 'A comprehensive EdTech ecosystem enabling students to take interactive quizzes and earn certificates. Features AI-powered assessment generation from PDF uploads and real-time performance tracking for educators via dynamic dashboards.',
        tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Recharts', 'JWT', 'AI API'],
        image: '/edutrack_preview.png',
        github: 'https://github.com/chahel1817/EduTrack',
        live: 'https://edu-track-coral.vercel.app/',
        accentColor: '#ec4899',
        glowColor: 'rgba(236,72,153,0.35)',
        glowColorSoft: 'rgba(236,72,153,0.08)',
        status: 'LIVE',
        statusColor: '#ec4899',
        highlights: ['AI Quiz Gen', 'PDF-to-Quiz', 'Certificates', 'Live Dashboard'],
    },
    {
        id: 'P004',
        title: 'MaxRate',
        sub: 'Next-Gen API Rate Limiting & Traffic Analytics',
        desc: 'A high-performance SaaS platform for API protection. Features intelligent rate-limiting, live traffic analytics with 5s polling, and an activity stream. Built with a premium glassmorphism UI and a robust Spring Boot backend.',
        tech: ['Next.js 16', 'React 19', 'Tailwind CSS 4', 'Framer Motion', 'Spring Boot 4', 'Spring Security', 'Hibernate/JPA', 'MySQL 8'],
        image: '/maxrate.png',
        github: 'https://github.com/chahel1817/maxrate',
        live: 'https://maxrate.vercel.app/',
        accentColor: '#f5c518',
        glowColor: 'rgba(245,197,24,0.35)',
        glowColorSoft: 'rgba(245,197,24,0.08)',
        status: 'LIVE',
        statusColor: '#f5c518',
        highlights: ['API Guard', 'Live Charts', 'SAAS Ready', 'Traffic Stream'],
    },
    {
        id: 'P005',
        title: 'Kickoff Arena',
        sub: 'Ultimate Football Manager & Squad Builder',
        desc: 'An immersive sports management platform where users build their dream squads and manage tactics. Features dynamic player cards, real-time squad valuation, and tactical lineup configurations with a high-fidelity glassmorphism interface.',
        tech: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
        image: '/kickoff.png',
        github: 'https://github.com/chahel1817/kickoff-arena',
        live: 'https://kickoff-arena.vercel.app/',
        accentColor: '#22c55e',
        glowColor: 'rgba(34,197,94,0.35)',
        glowColorSoft: 'rgba(34,197,94,0.08)',
        status: 'LIVE',
        statusColor: '#22c55e',
        highlights: ['Squad Builder', 'Tactical UI', 'Player Stats', 'Dream Team'],
    },
];

/* ─── Tech Badge ────────────────────────────────────────────────────────────── */
function TechBadge({ label, accent }) {
    return (
        <span
            style={{
                fontSize: 10,
                fontFamily: "'Orbitron', monospace",
                letterSpacing: '0.08em',
                padding: '3px 9px',
                borderRadius: 3,
                background: `${accent}12`,
                border: `1px solid ${accent}30`,
                color: accent,
                whiteSpace: 'nowrap',
            }}
        >
            {label}
        </span>
    );
}

/* ─── Project Card ──────────────────────────────────────────────────────────── */
function ProjectCard({ p, i }) {
    const [hov, setHov] = useState(false);
    const [tilt, setTilt] = useState({ x: 0, y: 0, px: 50, py: 50 });
    const cardRef = useRef(null);
    const reducedMotion = useReducedMotion();

    const handleMove = (e) => {
        if (reducedMotion || !cardRef.current || window.innerWidth < 768) return;
        const rect = cardRef.current.getBoundingClientRect();
        const px = ((e.clientX - rect.left) / rect.width) * 100;
        const py = ((e.clientY - rect.top) / rect.height) * 100;
        setTilt({ x: -((py - 50) / 50) * 6, y: ((px - 50) / 50) * 6, px, py });
    };
    const handleLeave = () => {
        setHov(false);
        setTilt({ x: 0, y: 0, px: 50, py: 50 });
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.15, ease: [0.23, 1, 0.32, 1] }}
            onHoverStart={() => setHov(true)}
            onHoverEnd={handleLeave}
            onMouseMove={handleMove}
            style={{
                position: 'relative',
                borderRadius: 16,
                overflow: 'hidden',
                background: hov
                    ? `linear-gradient(135deg, rgba(13,13,26,0.95) 0%, ${p.glowColorSoft} 100%)`
                    : 'rgba(13,13,26,0.85)',
                backdropFilter: 'blur(24px)',
                border: `1px solid ${hov ? p.accentColor + '55' : 'rgba(255,255,255,0.06)'}`,
                boxShadow: hov
                    ? `0 0 0 1px ${p.accentColor}25, 0 32px 64px rgba(0,0,0,0.6), 0 0 80px ${p.glowColor}, inset 0 1px 0 rgba(255,255,255,0.06)`
                    : `0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.03)`,
                transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${hov ? 'translateY(-10px) scale(1.015)' : 'translateY(0) scale(1)'}`,
                transformStyle: 'preserve-3d',
                transition: 'background 0.4s, border-color 0.4s, box-shadow 0.4s, transform 0.15s cubic-bezier(0.23,1,0.32,1)',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {/* Glow pulse when hovered */}
            {hov && (
                <div style={{
                    position: 'absolute', inset: 0, borderRadius: 16,
                    background: `radial-gradient(ellipse at 50% 0%, ${p.glowColor} 0%, transparent 65%)`,
                    pointerEvents: 'none', zIndex: 0,
                }} />
            )}

            {/* Glare sweep — tracks cursor for a holographic sheen */}
            {hov && !reducedMotion && (
                <div style={{
                    position: 'absolute', inset: 0, borderRadius: 16, zIndex: 3,
                    background: `radial-gradient(circle at ${tilt.px}% ${tilt.py}%, rgba(255,255,255,0.14), transparent 45%)`,
                    mixBlendMode: 'overlay', pointerEvents: 'none',
                }} />
            )}

            {/* Top accent line */}
            <div style={{
                height: 3,
                background: hov
                    ? `linear-gradient(90deg, transparent 0%, ${p.accentColor} 40%, ${p.accentColor} 60%, transparent 100%)`
                    : `linear-gradient(90deg, transparent, ${p.accentColor}40, transparent)`,
                transition: 'all 0.4s',
                position: 'relative', zIndex: 1,
            }} />

            {/* ── Screenshot Preview ── */}
            <div style={{
                position: 'relative', overflow: 'hidden', height: 220,
                background: `linear-gradient(135deg, #0d0d1a, #140d28)`,
                zIndex: 1,
            }}>
                <Image
                    src={p.image}
                    alt={`${p.title} screenshot`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 370px"
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'top center',
                        transform: hov ? 'scale(1.06)' : 'scale(1)',
                        transition: 'transform 0.6s cubic-bezier(0.23,1,0.32,1)',
                    }}
                    onError={(e) => { e.target.style.display = 'none'; }}
                />
                {/* Gradient overlay on image */}
                <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0, height: '55%',
                    background: 'linear-gradient(to top, rgba(13,13,26,0.82) 0%, rgba(13,13,26,0.22) 60%, transparent 100%)',
                    pointerEvents: 'none',
                }} />
                {/* Corner glows */}
                <div style={{
                    position: 'absolute', top: 0, right: 0, width: 100, height: 100,
                    background: `radial-gradient(circle at top right, ${p.glowColor} 0%, transparent 70%)`,
                    pointerEvents: 'none', opacity: hov ? 0.7 : 0.3, transition: 'opacity 0.4s',
                }} />

                {/* Status badge on image */}
                <div style={{
                    position: 'absolute', top: 14, left: 14,
                    display: 'flex', alignItems: 'center', gap: 6,
                }}>
                    <span style={{
                        fontFamily: "'Orbitron', monospace", fontSize: 9, fontWeight: 700,
                        letterSpacing: '0.18em', padding: '4px 10px', borderRadius: 20,
                        background: `${p.accentColor}22`, border: `1px solid ${p.accentColor}55`,
                        color: p.accentColor,
                        backdropFilter: 'blur(8px)',
                        display: 'flex', alignItems: 'center', gap: 5,
                    }}>
                        <span style={{
                            width: 5, height: 5, borderRadius: '50%',
                            background: p.accentColor,
                            boxShadow: `0 0 6px ${p.accentColor}`,
                            animation: 'pulseDot 1.5s ease-in-out infinite',
                        }} />
                        {p.status}
                    </span>
                </div>

                {/* Project ID top-right */}
                <div style={{
                    position: 'absolute', top: 14, right: 14,
                    fontFamily: "'Orbitron', monospace", fontSize: 9, color: 'rgba(255,255,255,0.2)',
                    letterSpacing: '0.12em',
                }}>
                    {p.id}
                </div>

                {/* Highlights row floating at bottom of image */}
                <div style={{
                    position: 'absolute', bottom: 12, left: 14, right: 14,
                    display: 'flex', gap: 6, flexWrap: 'wrap',
                }}>
                    {p.highlights.map(h => (
                        <span key={h} style={{
                            fontFamily: "'Rajdhani', sans-serif", fontSize: 10, fontWeight: 600,
                            letterSpacing: '0.06em', padding: '2px 8px', borderRadius: 4,
                            background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)',
                            border: `1px solid ${p.accentColor}40`, color: 'rgba(255,255,255,0.75)',
                        }}>
                            {h}
                        </span>
                    ))}
                </div>
            </div>

            {/* ── Card Body ── */}
            <div style={{ padding: '22px 24px 24px', flex: 1, display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1 }}>
                {/* Title & subtitle */}
                <h3 className="f-orbitron" style={{
                    color: '#ffffff', fontWeight: 900, fontSize: 17, marginBottom: 5,
                    letterSpacing: '0.04em',
                    textShadow: hov ? `0 0 24px ${p.accentColor}55` : 'none',
                    transition: 'text-shadow 0.4s',
                }}>
                    {p.title}
                </h3>
                <p className="f-rajdhani" style={{
                    color: p.accentColor, fontSize: 12, fontWeight: 600,
                    letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 14,
                    opacity: 0.85,
                }}>
                    {p.sub}
                </p>

                {/* Description */}
                <p className="f-rajdhani" style={{
                    color: 'rgba(220,220,235,0.9)', fontSize: 14.5, lineHeight: 1.6,
                    marginBottom: 22, flex: 1, fontWeight: 450,
                }}>
                    {p.desc}
                </p>

                {/* Tech stack */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                    {p.tech.map(t => <TechBadge key={t} label={t} accent={p.accentColor} />)}
                </div>

                {/* Divider */}
                <div style={{ height: 1, background: `linear-gradient(90deg, ${p.accentColor}30, transparent)`, marginBottom: 18 }} />

                {/* Action buttons */}
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                    <Magnetic range={50} strength={0.25} style={{ flex: 1 }}>
                        <motion.a
                            href={p.live} target="_blank" rel="noopener noreferrer"
                            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                            style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
                                fontFamily: "'Orbitron', monospace", fontSize: 10, fontWeight: 700,
                                letterSpacing: '0.12em', textTransform: 'uppercase',
                                padding: '11px 16px', borderRadius: 8,
                                background: hov
                                    ? `linear-gradient(135deg, ${p.accentColor}CC, ${p.accentColor}88)`
                                    : `linear-gradient(135deg, ${p.accentColor}99, ${p.accentColor}55)`,
                                color: '#fff',
                                textDecoration: 'none',
                                boxShadow: hov ? `0 0 24px ${p.glowColor}, 0 4px 12px rgba(0,0,0,0.4)` : 'none',
                                border: `1px solid ${p.accentColor}60`,
                                transition: 'all 0.35s',
                            }}
                        >
                            <FiExternalLink size={12} />
                            Live Site
                        </motion.a>
                    </Magnetic>
                    <Magnetic range={50} strength={0.25}>
                        <motion.a
                            href={p.github} target="_blank" rel="noopener noreferrer"
                            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                            style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
                                fontFamily: "'Orbitron', monospace", fontSize: 10, fontWeight: 700,
                                letterSpacing: '0.12em', textTransform: 'uppercase',
                                padding: '11px 18px', borderRadius: 8,
                                background: 'rgba(255,255,255,0.04)',
                                color: 'rgba(255,255,255,0.6)',
                                textDecoration: 'none',
                                border: '1px solid rgba(255,255,255,0.1)',
                                transition: 'all 0.35s',
                            }}
                        >
                            <FiGithub size={13} />
                            Code
                        </motion.a>
                    </Magnetic>
                </div>
            </div>
        </motion.div>
    );
}

/* ─── Section ─────────────────────────────────────────────────────────────── */
export default function ProjectsSection() {
    // Tracked outside IrisReveal's own clip-path wrapper — ancestor clipping would otherwise
    // starve ScrambleText's own IntersectionObserver of any visible area to detect.
    const headerRef = useRef(null);
    const headerInView = useInView(headerRef, { once: true, margin: '-100px' });

    return (
        <section
            id="projects"
            style={{
                position: 'relative', padding: '130px 0 140px', background: 'rgba(13,13,26,0.46)', overflow: 'hidden',
            }}
        >
            <style>{`
        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        @keyframes floatOrb {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(10px) translateX(-10px); }
        }
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

            {/* Background ambient orbs */}
            <div style={{
                position: 'absolute', top: '10%', left: '-5%', width: 500, height: 500,
                background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)',
                borderRadius: '50%', filter: 'blur(40px)', animation: 'floatOrb 12s ease-in-out infinite',
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute', bottom: '10%', right: '-5%', width: 500, height: 500,
                background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)',
                borderRadius: '50%', filter: 'blur(40px)', animation: 'floatOrb 15s ease-in-out infinite reverse',
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute', top: '55%', left: '45%', width: 350, height: 350,
                background: 'radial-gradient(circle, rgba(245,158,11,0.04) 0%, transparent 70%)',
                borderRadius: '50%', filter: 'blur(30px)', animation: 'floatOrb 18s ease-in-out infinite',
                pointerEvents: 'none',
            }} />

            {/* Subtle grid overlay */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                backgroundImage: `
          linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
        `,
                backgroundSize: '60px 60px',
            }} />

            <div className="projects-container" style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

                {/* ── Section Header ── */}
                <div ref={headerRef}>
                <IrisReveal>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: 72 }}
                >
                    {/* Label */}
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: 10,
                        marginBottom: 20, padding: '6px 16px', borderRadius: 20,
                        background: 'rgba(245,197,24,0.07)', border: '1px solid rgba(245,197,24,0.2)',
                    }}>
                        <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#f5c518', boxShadow: '0 0 6px rgba(245,197,24,0.8)' }} />
                        <span className="f-mono" style={{ color: 'rgba(245,197,24,0.7)', fontSize: 10, letterSpacing: '0.24em' }}>
                            05 // PROJECTS
                        </span>
                        <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#f5c518', boxShadow: '0 0 6px rgba(245,197,24,0.8)' }} />
                    </div>

                    {/* Title */}
                    <h2 className="f-orbitron" style={{
                        fontSize: 'clamp(34px, 5.5vw, 58px)', fontWeight: 900, color: '#fff',
                        lineHeight: 1.1, marginBottom: 14,
                    }}>
                        THINGS I&apos;VE{' '}
                        <ScrambleText
                            as="span"
                            text="BUILT"
                            active={headerInView}
                            style={{
                                color: '#f5c518',
                                textShadow: '0 0 30px rgba(245,197,24,0.7), 0 0 60px rgba(245,197,24,0.3)',
                            }}
                        />
                    </h2>

                    {/* Subtitle */}
                    <p className="f-rajdhani" style={{
                        color: 'rgba(220,228,240,0.82)', fontSize: 16, maxWidth: 620, margin: '0 auto',
                        lineHeight: 1.6,
                    }}>
                        Real-world full-stack applications deployed and live — each one engineered to solve actual problems.
                    </p>

                    {/* Decorative line */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginTop: 28 }}>
                        <div style={{ width: 60, height: 1, background: 'linear-gradient(to right, transparent, rgba(245,197,24,0.4))' }} />
                        <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#f5c518', boxShadow: '0 0 10px rgba(245,197,24,0.8)' }} />
                        <div style={{ width: 60, height: 1, background: 'linear-gradient(to left, transparent, rgba(245,197,24,0.4))' }} />
                    </div>
                </motion.div>
                </IrisReveal>
                </div>

                {/* ── Cards Grid ── */}
                <div className="projects-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 370px), 1fr))',
                    gap: 28,
                }}>
                    {PROJECTS.map((p, i) => (
                        <ProjectCard key={p.id} p={p} i={i} />
                    ))}
                </div>

                {/* ── Bottom CTA ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    style={{ textAlign: 'center', marginTop: 72 }}
                >
                    <p className="f-rajdhani" style={{ color: 'rgba(200,200,220,0.35)', marginBottom: 24, fontSize: 15 }}>
                        More projects available on GitHub
                    </p>
                    <motion.a
                        href="https://github.com/chahel1817"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(245,197,24,0.35), 0 0 60px rgba(245,197,24,0.1)' }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: 10,
                            fontFamily: "'Orbitron', monospace", fontSize: 11, fontWeight: 700,
                            letterSpacing: '0.14em', textTransform: 'uppercase',
                            padding: '14px 32px', borderRadius: 8,
                            border: '1px solid rgba(245,197,24,0.4)',
                            color: '#f5c518',
                            textDecoration: 'none',
                            background: 'rgba(245,197,24,0.05)',
                            backdropFilter: 'blur(8px)',
                            transition: 'all 0.3s',
                        }}
                    >
                        <FiGithub size={16} />
                        View All Projects
                    </motion.a>
                </motion.div>
            </div>
            <style>{`
                @media (max-width: 640px) {
                    #projects { padding: 80px 0 100px !important; }
                    .projects-container { padding: 0 16px !important; }
                    .projects-grid { 
                        grid-template-columns: 1fr !important;
                        gap: 20px !important;
                    }
                }
            `}</style>
        </section>
    );
}

