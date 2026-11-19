'use client';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { useTheme } from '@/context/ThemeContext';

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

export default function Footer() {
    const { isLofi } = useTheme();
    const year = new Date().getFullYear();

    const goldColor = isLofi ? '#b45309' : C;
    const cyanColor = isLofi ? '#0284c7' : CC;

    const STATUS = [
        { label: 'Server: Online', dot: '#16a34a' },
        { label: 'Bat-Signal: Standby', dot: goldColor },
        { label: 'Open for Work', dot: goldColor },
        { label: 'Cheat Code: ↑↑↓↓←→←→ B A', dot: isLofi ? '#7c3aed' : '#a855f7' },
    ];

    const socialLinks = [
        { icon: FiGithub, href: 'https://github.com/chahel1817', h: isLofi ? '#0f172a' : '#fff', label: 'GitHub' },
        { icon: FiLinkedin, href: 'https://www.linkedin.com/in/chahel-tanna-87300a269/', h: cyanColor, label: 'LinkedIn' },
        { icon: FiTwitter, href: 'https://x.com/chahel1817', h: '#0284c7', label: 'X' },
        { icon: SiLeetcode, href: 'https://leetcode.com/u/Chahel/', h: '#d97706', label: 'LeetCode' },
        { icon: FiMail, href: 'mailto:chahel1817@gmail.com', h: goldColor, label: 'Email' },
    ];

    return (
        <footer style={{
            position: 'relative',
            background: isLofi ? 'rgba(255, 255, 255, 0.94)' : 'rgba(8,8,16,0.55)',
            borderTop: isLofi ? '1px solid rgba(15, 23, 42, 0.1)' : '1px solid rgba(245,197,24,0.1)',
            overflow: 'hidden'
        }}>
            <div style={{
                height: 1,
                background: isLofi
                    ? 'linear-gradient(90deg, transparent, rgba(217,119,6,0.4), rgba(2,132,199,0.4), transparent)'
                    : 'linear-gradient(90deg, transparent, rgba(245,197,24,0.4), rgba(0,245,255,0.4), transparent)'
            }} />

            <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 24px 32px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: 48, marginBottom: 48 }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                            <span className="f-orbitron" style={{ fontSize: 15, fontWeight: 800 }}>
                                <span style={{ color: isLofi ? '#0f172a' : C }}>CHAHEL</span>
                                <span style={{ color: cyanColor, marginLeft: 6 }}>TANNA</span>
                            </span>
                        </div>
                        <p className="f-rajdhani" style={{ color: isLofi ? '#475569' : '#a8b4c7', fontSize: 15, lineHeight: 1.7, maxWidth: 280, marginBottom: 20, fontWeight: 500 }}>
                            Full stack developer building reliable and high-performance web applications.
                        </p>
                        <a href="https://chaheltanna.vercel.app/" target="_blank" rel="noopener noreferrer" className="f-mono" style={{ color: isLofi ? '#0284c7' : '#d6deea', fontSize: 12, display: 'inline-block', marginBottom: 16, fontWeight: 600 }}>
                            Portfolio: chaheltanna.vercel.app
                        </a>
                        <div style={{ display: 'flex', gap: 10 }}>
                            {socialLinks.map(({ icon: I, href, h, label }, i) => (
                                <motion.a key={i} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                                    whileHover={{ y: -3, color: h, borderColor: isLofi ? 'rgba(15,23,42,0.3)' : 'rgba(255,255,255,0.3)' }}
                                    style={{
                                        width: 38, height: 38, borderRadius: 8,
                                        background: isLofi ? '#ffffff' : 'rgba(13,13,26,0.8)',
                                        border: isLofi ? '1px solid rgba(15,23,42,0.14)' : '1px solid rgba(255,255,255,0.1)',
                                        boxShadow: isLofi ? '0 2px 8px rgba(15,23,42,0.06)' : 'none',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: isLofi ? '#1e293b' : '#a8b4c7',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    <I size={16} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="f-orbitron" style={{ color: goldColor, fontSize: 11, fontWeight: 800, letterSpacing: '0.14em', marginBottom: 20 }}>NAVIGATION</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                            {NAV.map((l) => (
                                <motion.a key={l.href} href={l.href}
                                    whileHover={{ x: 5, color: goldColor }}
                                    className="f-rajdhani"
                                    style={{ color: isLofi ? '#334155' : '#b6c1d3', fontSize: 15, fontWeight: isLofi ? 600 : 500, transition: 'color 0.2s' }}
                                >
                                    {l.label}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="f-orbitron" style={{ color: cyanColor, fontSize: 11, fontWeight: 800, letterSpacing: '0.14em', marginBottom: 20 }}>BUILT WITH</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                            {['Next.js', 'Framer Motion', 'Tailwind CSS', 'React Icons', 'Vercel'].map((t) => (
                                <span key={t} className="f-mono" style={{
                                    fontSize: 11, padding: '5px 12px', borderRadius: 6,
                                    background: isLofi ? '#ffffff' : 'rgba(13,13,26,0.8)',
                                    border: isLofi ? '1px solid rgba(15,23,42,0.14)' : '1px solid rgba(255,255,255,0.1)',
                                    color: isLofi ? '#0f172a' : '#b6c1d3',
                                    fontWeight: isLofi ? 700 : 500,
                                    boxShadow: isLofi ? '0 2px 6px rgba(15,23,42,0.04)' : 'none'
                                }}>{t}</span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="f-orbitron" style={{ color: isLofi ? '#0f172a' : '#b6c1d3', fontSize: 11, fontWeight: 800, letterSpacing: '0.14em', marginBottom: 20 }}>STATUS</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                            {STATUS.map(({ label, dot }) => (
                                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                    <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} style={{ width: 6, height: 6, borderRadius: '50%', background: dot, boxShadow: `0 0 6px ${dot}` }} />
                                    <span className="f-mono" style={{ color: isLofi ? '#334155' : '#b6c1d3', fontSize: 11, fontWeight: isLofi ? 600 : 500 }}>{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div style={{ borderTop: isLofi ? '1px solid rgba(15,23,42,0.1)' : '1px solid rgba(255,255,255,0.08)', paddingTop: 24, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                    <p className="f-mono" style={{ color: isLofi ? '#64748b' : '#94a3b8', fontSize: 11 }}>
                        (c) {year} Chahel Tanna. <span style={{ color: isLofi ? goldColor : 'rgba(245,197,24,0.55)', fontWeight: 600 }}>All rights reserved.</span>
                    </p>
                    <p className="f-mono" style={{ color: isLofi ? '#64748b' : '#94a3b8', fontSize: 11 }}>
                        Built with clarity, speed, and purpose.
                    </p>
                </div>
            </div>
        </footer>
    );
}


