'use client';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const C = '#f5c518';
const CC = '#00f5ff';

const NAV = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
];

const STATUS = [
    { label: 'Server: Online', dot: '#4ade80' },
    { label: 'Systems: Active', dot: '#4ade80' },
    { label: 'Open for Work', dot: C },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer style={{ position: 'relative', background: 'rgba(8,8,16,0.55)', borderTop: '1px solid rgba(245,197,24,0.1)', overflow: 'hidden' }}>
            <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(245,197,24,0.4), rgba(0,245,255,0.4), transparent)' }} />

            <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 24px 32px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: 48, marginBottom: 48 }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                            <span className="f-orbitron" style={{ fontSize: 14, fontWeight: 700 }}>
                                <span style={{ color: C }}>CHAHEL</span>
                                <span style={{ color: CC, marginLeft: 6 }}>TANNA</span>
                            </span>
                        </div>
                        <p className="f-rajdhani" style={{ color: '#a8b4c7', fontSize: 15, lineHeight: 1.7, maxWidth: 280, marginBottom: 20 }}>
                            Full stack developer building reliable and high-performance web applications.
                        </p>
                        <div style={{ display: 'flex', gap: 10 }}>
                            {[{ icon: FiGithub, href: 'https://github.com/chahel1817', h: '#fff' }, { icon: FiLinkedin, href: 'https://www.linkedin.com/in/chahel-tanna-87300a269/', h: CC }, { icon: FiMail, href: 'mailto:chahel1817@gmail.com', h: C }].map(({ icon: I, href, h }, i) => (
                                <motion.a key={i} href={href} target="_blank" rel="noopener noreferrer"
                                    whileHover={{ y: -3, color: h }}
                                    style={{ width: 36, height: 36, borderRadius: 6, background: 'rgba(13,13,26,0.8)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a8b4c7', transition: 'color 0.2s' }}
                                >
                                    <I size={15} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="f-orbitron" style={{ color: C, fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', marginBottom: 20 }}>NAVIGATION</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                            {NAV.map((l) => (
                                <motion.a key={l.href} href={l.href}
                                    whileHover={{ x: 5, color: C }}
                                    className="f-rajdhani"
                                    style={{ color: '#b6c1d3', fontSize: 15, fontWeight: 500, transition: 'color 0.2s' }}
                                >
                                    {l.label}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="f-orbitron" style={{ color: CC, fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', marginBottom: 20 }}>BUILT WITH</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                            {['Next.js', 'Framer Motion', 'Tailwind CSS', 'React Icons', 'Vercel'].map((t) => (
                                <span key={t} className="f-mono" style={{ fontSize: 10, padding: '4px 10px', borderRadius: 3, background: 'rgba(13,13,26,0.8)', border: '1px solid rgba(255,255,255,0.1)', color: '#b6c1d3' }}>{t}</span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="f-orbitron" style={{ color: '#b6c1d3', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', marginBottom: 20 }}>STATUS</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                            {STATUS.map(({ label, dot }) => (
                                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                    <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} style={{ width: 6, height: 6, borderRadius: '50%', background: dot, boxShadow: `0 0 6px ${dot}` }} />
                                    <span className="f-mono" style={{ color: '#b6c1d3', fontSize: 11 }}>{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                    <p className="f-mono" style={{ color: '#94a3b8', fontSize: 11 }}>
                        (c) {year} Chahel Tanna. <span style={{ color: 'rgba(245,197,24,0.55)' }}>All rights reserved.</span>
                    </p>
                    <p className="f-mono" style={{ color: '#94a3b8', fontSize: 11 }}>
                        Built with clarity, speed, and purpose.
                    </p>
                </div>
            </div>
        </footer>
    );
}


