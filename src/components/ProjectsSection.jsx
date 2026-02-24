'use client';
import { useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiGithub, FiExternalLink, FiStar, FiGitBranch } from 'react-icons/fi';

const C = '#f5c518';

const PROJECTS = [
    {
        id: 'P001', title: 'Dark Knight Portfolio', sub: 'Personal Portfolio', cat: 'Frontend', status: 'LIVE', sColor: '#00f5ff', featured: true,
        desc: 'Batman-themed portfolio with particle effects, custom cursor, Framer Motion animations, and glassmorphism panels.',
        tech: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'React'], stars: 48, border: 'rgba(245,197,24,0.25)', github: '#', live: '#'
    },
    {
        id: 'P002', title: 'Gotham Commerce', sub: 'E-commerce Platform', cat: 'Full Stack', status: 'LIVE', sColor: '#00f5ff', featured: true,
        desc: 'Full-stack e-commerce platform with real-time inventory, Stripe payments, admin dashboard, and Redis caching for 10K concurrent users.',
        tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Redis'], stars: 127, border: 'rgba(0,245,255,0.25)', github: '#', live: '#'
    },
    {
        id: 'P003', title: 'Oracle AI Chat', sub: 'AI Chat Application', cat: 'Full Stack', status: 'IN DEV', sColor: C, featured: false,
        desc: 'Real-time AI chat with voice recognition, context memory, and multi-model support. Built like Oracle from Gotham.',
        tech: ['React', 'Socket.io', 'OpenAI', 'Express', 'PostgreSQL'], stars: 89, border: 'rgba(168,85,247,0.25)', github: '#', live: null
    },
    {
        id: 'P004', title: 'Wayne Finance Tracker', sub: 'Finance Dashboard', cat: 'Frontend', status: 'LIVE', sColor: '#00f5ff', featured: false,
        desc: 'Sophisticated finance tracker with predictive analytics, budget planning, and D3.js data visualizations.',
        tech: ['React', 'D3.js', 'Node.js', 'MongoDB', 'JWT'], stars: 63, border: 'rgba(34,197,94,0.2)', github: '#', live: '#'
    },
    {
        id: 'P005', title: 'Arkham Task Manager', sub: 'Productivity App', cat: 'Full Stack', status: 'LIVE', sColor: '#00f5ff', featured: false,
        desc: 'Kanban board with time tracking, real-time collaboration, drag-and-drop, and dark Gotham UI.',
        tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Framer Motion', 'Zustand'], stars: 41, border: 'rgba(220,38,38,0.2)', github: '#', live: '#'
    },
    {
        id: 'P006', title: 'Batmobile API Gateway', sub: 'Backend Architecture', cat: 'Backend', status: 'OPEN SOURCE', sColor: '#a855f7', featured: false,
        desc: 'High-performance API gateway with rate limiting, load balancing, JWT auth, and Redis caching.',
        tech: ['Node.js', 'Redis', 'Docker', 'Nginx', 'PostgreSQL'], stars: 72, border: 'rgba(107,114,128,0.2)', github: '#', live: null
    },
];

const CATS = ['All', 'Featured', 'Full Stack', 'Frontend', 'Backend'];

function ProjectCard({ p, i }) {
    const [hov, setHov] = useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            onHoverStart={() => setHov(true)}
            onHoverEnd={() => setHov(false)}
            style={{
                position: 'relative', borderRadius: 8, overflow: 'hidden',
                background: 'rgba(13,13,26,0.75)', backdropFilter: 'blur(18px)',
                border: `1px solid ${hov ? p.border : 'rgba(255,255,255,0.05)'}`,
                boxShadow: hov ? `0 20px 60px rgba(0,0,0,0.5), 0 0 30px ${p.border.replace('rgba', 'rgba').replace(/[\d.]+\)$/, '0.12)')}` : 'none',
                transform: hov ? 'translateY(-6px)' : 'none',
                transition: 'all 0.35s cubic-bezier(0.23,1,0.32,1)',
                display: 'flex', flexDirection: 'column',
            }}
        >
            {/* Top accent bar */}
            <div style={{ height: 2, background: hov ? `linear-gradient(90deg, transparent, ${p.sColor}, transparent)` : 'transparent', transition: 'all 0.4s' }} />

            <div style={{ padding: '24px 24px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                            <span className="f-mono" style={{ color: '#374151', fontSize: 10 }}>{p.id}</span>
                            <span className="f-mono" style={{ fontSize: 10, padding: '2px 7px', borderRadius: 2, color: p.sColor, background: `${p.sColor}15`, border: `1px solid ${p.sColor}35` }}>{p.status}</span>
                        </div>
                        <h3 className="f-orbitron" style={{ color: '#e2e8f0', fontWeight: 700, fontSize: 15, lineHeight: 1.3, marginBottom: 2 }}>{p.title}</h3>
                        <p className="f-rajdhani" style={{ color: '#4b5563', fontSize: 13 }}>{p.sub}</p>
                    </div>
                    <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
                        <motion.a href={p.github} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.25, color: '#e2e8f0' }} style={{ color: '#374151', transition: 'color 0.2s' }} aria-label="GitHub"><FiGithub size={17} /></motion.a>
                        {p.live && <motion.a href={p.live} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.25 }} style={{ color: '#374151', transition: 'color 0.2s' }} aria-label="Live demo"><FiExternalLink size={17} /></motion.a>}
                    </div>
                </div>

                <p className="f-rajdhani" style={{ color: '#4b5563', fontSize: 14, lineHeight: 1.65, marginBottom: 20, flex: 1 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                    {p.tech.map(t => (
                        <span key={t} className="f-mono" style={{ fontSize: 10, padding: '4px 9px', borderRadius: 3, background: 'rgba(8,8,16,0.6)', border: '1px solid rgba(255,255,255,0.06)', color: '#374151' }}>{t}</span>
                    ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 14 }}>
                    <div style={{ display: 'flex', gap: 16 }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#374151', fontSize: 12 }}><FiStar size={12} style={{ color: 'rgba(245,197,24,0.5)' }} /><span className="f-mono">{p.stars}</span></span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#374151', fontSize: 12 }}><FiGitBranch size={12} /><span className="f-mono">main</span></span>
                    </div>
                    <span className="f-mono" style={{ fontSize: 10, color: '#1f2937' }}>{p.cat}</span>
                </div>
            </div>
        </motion.div>
    );
}

export default function ProjectsSection() {
    const [activeFilter, setFilter] = useState('All');
    const filtered = PROJECTS.filter(p => {
        if (activeFilter === 'All') return true;
        if (activeFilter === 'Featured') return p.featured;
        return p.cat === activeFilter;
    });

    return (
        <section id="projects" style={{ position: 'relative', padding: '120px 0', background: '#0d0d1a', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 60, right: 60, width: 300, height: 300, background: 'radial-gradient(circle, rgba(245,197,24,0.03), transparent)', borderRadius: '50%', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: 60, left: 60, width: 300, height: 300, background: 'radial-gradient(circle, rgba(0,245,255,0.03), transparent)', borderRadius: '50%', pointerEvents: 'none' }} />

            <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: 56 }}>
                    <div className="sec-label">
                        <span className="f-mono" style={{ color: 'rgba(245,197,24,0.5)', fontSize: 11, letterSpacing: '0.24em' }}>03 // MISSIONS</span>
                    </div>
                    <h2 className="f-orbitron" style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 900, color: '#fff' }}>
                        MY <span style={{ color: C, textShadow: '0 0 20px rgba(245,197,24,0.6)' }}>PROJECTS</span>
                    </h2>
                    <p className="f-rajdhani" style={{ color: '#374151', fontSize: 16, marginTop: 12 }}>Case files from the Batcave server</p>
                </div>

                {/* Filter tabs */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 48 }}>
                    {CATS.map(cat => (
                        <motion.button key={cat}
                            onClick={() => setFilter(cat)}
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            style={{
                                fontFamily: "'Orbitron', monospace", fontSize: 10, fontWeight: 700,
                                letterSpacing: '0.12em', textTransform: 'uppercase',
                                padding: '9px 20px', borderRadius: 3,
                                background: activeFilter === cat ? C : 'transparent',
                                color: activeFilter === cat ? '#080810' : '#4b5563',
                                border: activeFilter === cat ? `1px solid ${C}` : '1px solid rgba(255,255,255,0.08)',
                                boxShadow: activeFilter === cat ? `0 0 16px rgba(245,197,24,0.4)` : 'none',
                                transition: 'all 0.3s',
                            }}
                        >
                            {cat}
                        </motion.button>
                    ))}
                </div>

                {/* Grid */}
                <AnimatePresence mode="wait">
                    <motion.div key={activeFilter} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}
                    >
                        {filtered.map((p, i) => <ProjectCard key={p.id} p={p} i={i} />)}
                    </motion.div>
                </AnimatePresence>

                {/* Bottom CTA */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginTop: 60 }}>
                    <p className="f-rajdhani" style={{ color: '#374151', marginBottom: 20 }}>More missions in the Batcave archives</p>
                    <motion.a href="https://github.com/" target="_blank" rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(245,197,24,0.3)' }}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: "'Orbitron', monospace", fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '12px 28px', border: '1px solid rgba(245,197,24,0.3)', color: C, borderRadius: 3, textDecoration: 'none', transition: 'all 0.3s' }}
                    >
                        <FiGithub size={15} /> VIEW ALL ON GITHUB
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
