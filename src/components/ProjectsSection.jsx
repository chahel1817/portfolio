'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

/* ─── Project Data ─────────────────────────────────────────────────────────── */
const PROJECTS = [
    {
        id: 'P001',
        title: 'VivaMate',
        sub: 'AI-Powered Mock Interview Platform',
        desc: 'A MERN-stack AI interview simulator with live camera & mic support, speech-to-text answers, and AI-generated questions via OpenRouter. Evaluates responses for clarity, confidence, and technical depth with detailed analytics and downloadable PDF reports.',
        tech: ['React 19', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'OpenAI API', 'Recharts', 'JWT'],
        image: '/vivamate_preview.png',
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
        id: 'P002',
        title: 'EduTrack',
        sub: 'Smart Learning & Quiz Platform',
        desc: 'An EdTech platform letting students take quizzes, track progress, and earn certificates. Teachers can build custom quizzes, generate AI-powered assessments from PDF uploads, and monitor live student performance via dashboards.',
        tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Recharts', 'JWT', 'AI API'],
        image: '/edutrack_preview.png',
        github: 'https://github.com/chahel1817/EduTrack',
        live: 'https://edu-track-coral.vercel.app/',
        accentColor: '#06b6d4',
        glowColor: 'rgba(6,182,212,0.35)',
        glowColorSoft: 'rgba(6,182,212,0.08)',
        status: 'LIVE',
        statusColor: '#06b6d4',
        highlights: ['AI Quiz Gen', 'PDF-to-Quiz', 'Certificates', 'Live Dashboard'],
    },
    {
        id: 'P003',
        title: 'Kickoff Arena',
        sub: 'Football Career Simulation Game',
        desc: 'A frontend-only football career simulation built with Next.js recreating a game-style manager journey. Users create profiles, select leagues and clubs, choose managers, and build their dream squads with an immersive, game-like UI.',
        tech: ['Next.js', 'JSX', 'CSS Modules', 'Framer Motion', 'Vercel'],
        image: '/kickoff_arena_preview.png',
        github: 'https://github.com/chahel1817/kickoff-arena',
        live: 'https://kickoff-arena.vercel.app/',
        accentColor: '#f59e0b',
        glowColor: 'rgba(245,158,11,0.35)',
        glowColorSoft: 'rgba(245,158,11,0.08)',
        status: 'LIVE',
        statusColor: '#f59e0b',
        highlights: ['Squad Builder', 'Club Select', 'Manager Mode', 'Game UI'],
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

    return (
        <motion.div
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.15, ease: [0.23, 1, 0.32, 1] }}
            onHoverStart={() => setHov(true)}
            onHoverEnd={() => setHov(false)}
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
                transform: hov ? 'translateY(-10px) scale(1.01)' : 'translateY(0) scale(1)',
                transition: 'all 0.4s cubic-bezier(0.23,1,0.32,1)',
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
                <img
                    src={p.image}
                    alt={`${p.title} screenshot`}
                    style={{
                        width: '100%', height: '100%', objectFit: 'cover',
                        objectPosition: 'top center',
                        transform: hov ? 'scale(1.06)' : 'scale(1)',
                        transition: 'transform 0.6s cubic-bezier(0.23,1,0.32,1)',
                        opacity: hov ? 1 : 0.88,
                    }}
                    onError={(e) => { e.target.style.display = 'none'; }}
                />
                {/* Gradient overlay on image */}
                <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0, height: '55%',
                    background: 'linear-gradient(to top, rgba(13,13,26,0.98) 0%, rgba(13,13,26,0.4) 60%, transparent 100%)',
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
                    color: 'rgba(200,200,220,0.6)', fontSize: 13.5, lineHeight: 1.7,
                    marginBottom: 20, flex: 1,
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
                <div style={{ display: 'flex', gap: 12 }}>
                    <motion.a
                        href={p.live} target="_blank" rel="noopener noreferrer"
                        whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                        style={{
                            flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
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
                </div>
            </div>
        </motion.div>
    );
}

/* ─── Section ─────────────────────────────────────────────────────────────── */
export default function ProjectsSection() {
    return (
        <section
            id="projects"
            style={{
                position: 'relative', padding: '130px 0 140px', background: '#0d0d1a', overflow: 'hidden',
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

            <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

                {/* ── Section Header ── */}
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
                            03 // PROJECTS
                        </span>
                        <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#f5c518', boxShadow: '0 0 6px rgba(245,197,24,0.8)' }} />
                    </div>

                    {/* Title */}
                    <h2 className="f-orbitron" style={{
                        fontSize: 'clamp(34px, 5.5vw, 58px)', fontWeight: 900, color: '#fff',
                        lineHeight: 1.1, marginBottom: 14,
                    }}>
                        THINGS I&apos;VE{' '}
                        <span style={{
                            color: '#f5c518',
                            textShadow: '0 0 30px rgba(245,197,24,0.7), 0 0 60px rgba(245,197,24,0.3)',
                        }}>
                            BUILT
                        </span>
                    </h2>

                    {/* Subtitle */}
                    <p className="f-rajdhani" style={{
                        color: 'rgba(200,200,220,0.45)', fontSize: 16, maxWidth: 520, margin: '0 auto',
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

                {/* ── Cards Grid ── */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(370px, 1fr))',
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
        </section>
    );
}
