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
    { label: 'Status: Available', dot: C },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer style={{ position: 'relative', background: '#080810', borderTop: '1px solid rgba(245,197,24,0.1)', overflow: 'hidden' }}>
            {/* Top accent */}
            <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(245,197,24,0.4), rgba(0,245,255,0.4), transparent)' }} />

            <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 24px 32px' }}>
                {/* Main row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: 48, marginBottom: 48 }}>

                    {/* Brand */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                            <svg width="32" height="20" viewBox="0 0 200 124" fill="none">
                                <ellipse cx="100" cy="82" rx="68" ry="28" fill={C} />
                                <ellipse cx="46" cy="56" rx="35" ry="44" fill={C} />
                                <ellipse cx="154" cy="56" rx="35" ry="44" fill={C} />
                                <ellipse cx="100" cy="93" rx="38" ry="22" fill="#080810" />
                                <circle cx="100" cy="64" r="21" fill="#080810" />
                                <path d="M24 42 L9 16 L46 52" fill={C} />
                                <path d="M176 42 L191 16 L154 52" fill={C} />
                            </svg>
                            <span className="f-orbitron" style={{ fontSize: 14, fontWeight: 700 }}>
                                <span style={{ color: C }}>DARK</span>
                                <span style={{ color: CC }}>PORT</span>
                            </span>
                        </div>
                        <p className="f-rajdhani" style={{ color: '#374151', fontSize: 14, lineHeight: 1.7, maxWidth: 240, marginBottom: 20 }}>
                            Built from the shadows of Gotham. Every pixel, every millisecond — crafted with purpose.
                        </p>
                        {/* Social */}
                        <div style={{ display: 'flex', gap: 10 }}>
                            {[{ icon: FiGithub, href: '#', h: '#fff' }, { icon: FiLinkedin, href: '#', h: CC }, { icon: FiMail, href: '#', h: C }].map(({ icon: I, href, h }, i) => (
                                <motion.a key={i} href={href} target="_blank" rel="noopener noreferrer"
                                    whileHover={{ y: -3, color: h }}
                                    style={{ width: 36, height: 36, borderRadius: 6, background: 'rgba(13,13,26,0.8)', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#374151', transition: 'color 0.2s' }}
                                >
                                    <I size={15} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <p className="f-orbitron" style={{ color: C, fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', marginBottom: 20 }}>NAVIGATION</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                            {NAV.map(l => (
                                <motion.a key={l.href} href={l.href}
                                    whileHover={{ x: 5, color: C }}
                                    className="f-rajdhani"
                                    style={{ color: '#374151', fontSize: 15, fontWeight: 500, transition: 'color 0.2s' }}
                                >
                                    ▸ {l.label}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Tech stack */}
                    <div>
                        <p className="f-orbitron" style={{ color: CC, fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', marginBottom: 20 }}>BUILT WITH</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                            {['Next.js', 'Framer Motion', 'Tailwind CSS', 'React Icons', 'Vercel'].map(t => (
                                <span key={t} className="f-mono" style={{ fontSize: 10, padding: '4px 10px', borderRadius: 3, background: 'rgba(13,13,26,0.8)', border: '1px solid rgba(255,255,255,0.06)', color: '#374151' }}>{t}</span>
                            ))}
                        </div>
                    </div>

                    {/* System status */}
                    <div>
                        <p className="f-orbitron" style={{ color: '#374151', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', marginBottom: 20 }}>SYS STATUS</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                            {STATUS.map(({ label, dot }) => (
                                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                    <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} style={{ width: 6, height: 6, borderRadius: '50%', background: dot, boxShadow: `0 0 6px ${dot}` }} />
                                    <span className="f-mono" style={{ color: '#374151', fontSize: 11 }}>{label}</span>
                                </div>
                            ))}
                            <div style={{ marginTop: 8, padding: '8px 12px', background: 'rgba(74,222,128,0.07)', border: '1px solid rgba(74,222,128,0.2)', borderRadius: 4 }}>
                                <p className="f-mono" style={{ color: 'rgba(74,222,128,0.7)', fontSize: 10 }}>OPEN TO OPPORTUNITIES</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 24, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                    <p className="f-mono" style={{ color: '#1f2937', fontSize: 11 }}>
                        © {year} Your Name — <span style={{ color: 'rgba(245,197,24,0.35)' }}>All rights reserved.</span>
                    </p>
                    <p className="f-mono" style={{ color: '#1f2937', fontSize: 11 }}>
                        <span style={{ color: 'rgba(0,245,255,0.35)' }}>// </span>crafted in the darkness, launched into the light
                    </p>
                </div>
            </div>
        </footer>
    );
}
