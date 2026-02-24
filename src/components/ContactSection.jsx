'use client';
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiSend, FiMail, FiMapPin, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const C = '#f5c518';
const CC = '#00f5ff';

const INFO = [
    { icon: FiMail, label: 'Email', value: 'your@email.com', href: 'mailto:your@email.com', color: C },
    { icon: FiMapPin, label: 'Location', value: 'Your City, Country', href: null, color: CC },
    { icon: FiGithub, label: 'GitHub', value: 'github.com/yourusername', href: 'https://github.com/', color: '#a855f7' },
    { icon: FiLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/you', href: 'https://linkedin.com/', color: '#3b82f6' },
];

function Field({ label, name, value, onChange, type = 'text' }) {
    return (
        <div>
            <label className="f-mono" style={{ display: 'block', color: 'rgba(245,197,24,0.55)', fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 8 }}>{label}</label>
            <input type={type} name={name} value={value} onChange={onChange} required
                style={{ width: '100%', background: 'rgba(8,8,16,0.6)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 4, padding: '12px 16px', color: '#e2e8f0', fontFamily: "'Rajdhani', sans-serif", fontSize: 15, outline: 'none', transition: 'border-color 0.2s' }}
                onFocus={e => e.target.style.borderColor = 'rgba(245,197,24,0.4)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
            />
        </div>
    );
}
function TextArea({ label, name, value, onChange }) {
    return (
        <div>
            <label className="f-mono" style={{ display: 'block', color: 'rgba(245,197,24,0.55)', fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 8 }}>{label}</label>
            <textarea name={name} value={value} onChange={onChange} rows={5} required
                style={{ width: '100%', background: 'rgba(8,8,16,0.6)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 4, padding: '12px 16px', color: '#e2e8f0', fontFamily: "'Rajdhani', sans-serif", fontSize: 15, outline: 'none', resize: 'none', transition: 'border-color 0.2s' }}
                onFocus={e => e.target.style.borderColor = 'rgba(245,197,24,0.4)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
            />
        </div>
    );
}

export default function ContactSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState('idle');

    const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));
    const handleSubmit = async e => {
        e.preventDefault();
        setStatus('sending');
        await new Promise(r => setTimeout(r, 2000));
        setStatus('sent');
        setForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
    };

    return (
        <section id="contact" style={{ position: 'relative', padding: '120px 0', background: '#0d0d1a', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 1, height: '100%', background: 'linear-gradient(180deg, rgba(245,197,24,0.06), transparent)', pointerEvents: 'none' }} />

            <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: 64 }}>
                    <div className="sec-label">
                        <span className="f-mono" style={{ color: 'rgba(245,197,24,0.5)', fontSize: 11, letterSpacing: '0.24em' }}>05 // SIGNAL</span>
                    </div>
                    <h2 className="f-orbitron" style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 900, color: '#fff' }}>
                        SEND THE <span style={{ color: C, textShadow: '0 0 20px rgba(245,197,24,0.6)' }}>BAT SIGNAL</span>
                    </h2>
                    <p className="f-rajdhani" style={{ color: '#374151', fontSize: 16, marginTop: 12 }}>Got a mission? Let's team up. I respond faster than Alfred.</p>
                </div>

                <div ref={ref} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: 64, alignItems: 'start' }}>

                    {/* Left: info + bat signal badge */}
                    <div>
                        {/* Bat signal badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.85 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.7 }}
                            style={{ display: 'flex', justifyContent: 'center', marginBottom: 48 }}
                        >
                            <div style={{ position: 'relative', width: 160, height: 160 }}>
                                {[0, 28, 56].map((s, i) => (
                                    <motion.div key={i}
                                        animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                                        transition={{ duration: 20 + i * 8, repeat: Infinity, ease: 'linear' }}
                                        style={{ position: 'absolute', inset: s, borderRadius: '50%', border: `1px solid rgba(245,197,24,${0.15 - i * 0.04})` }}
                                    />
                                ))}
                                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <motion.div animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 3, repeat: Infinity }}>
                                        <svg width="72" height="45" viewBox="0 0 200 124" fill="none">
                                            <ellipse cx="100" cy="82" rx="68" ry="28" fill={C} />
                                            <ellipse cx="46" cy="56" rx="35" ry="44" fill={C} />
                                            <ellipse cx="154" cy="56" rx="35" ry="44" fill={C} />
                                            <ellipse cx="100" cy="93" rx="38" ry="22" fill="#0d0d1a" />
                                            <circle cx="100" cy="64" r="21" fill="#0d0d1a" />
                                            <path d="M24 42 L9 16 L46 52" fill={C} />
                                            <path d="M176 42 L191 16 L154 52" fill={C} />
                                            <path d="M7 18 L2 6 L22 22" fill={C} />
                                            <path d="M193 18 L198 6 L178 22" fill={C} />
                                        </svg>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact info cards */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 40 }}>
                            {INFO.map(({ icon: Icon, label, value, href, color }, i) => {
                                const inner = (
                                    <motion.div key={label} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: i * 0.1 + 0.3 }} whileHover={{ x: 5 }}
                                        style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 20px', background: 'rgba(13,13,26,0.6)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 8, transition: 'all 0.25s' }}
                                    >
                                        <div style={{ width: 40, height: 40, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `${color}12`, border: `1px solid ${color}28` }}>
                                            <Icon size={17} style={{ color }} />
                                        </div>
                                        <div>
                                            <p className="f-mono" style={{ color: '#374151', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{label}</p>
                                            <p className="f-rajdhani" style={{ color: '#9ca3af', fontWeight: 600, fontSize: 14 }}>{value}</p>
                                        </div>
                                    </motion.div>
                                );
                                return href ? <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>{inner}</a> : inner;
                            })}
                        </div>

                        {/* Social icons */}
                        <div>
                            <p className="f-mono" style={{ color: '#1f2937', fontSize: 10, letterSpacing: '0.2em', marginBottom: 14 }}>// SOCIAL NETWORK</p>
                            <div style={{ display: 'flex', gap: 12 }}>
                                {[{ icon: FiGithub, href: 'https://github.com/', h: '#fff' }, { icon: FiLinkedin, href: 'https://linkedin.com/', h: CC }, { icon: FiTwitter, href: 'https://twitter.com/', h: CC }].map(({ icon: I, href, h }, i) => (
                                    <motion.a key={i} href={href} target="_blank" rel="noopener noreferrer"
                                        whileHover={{ y: -4, scale: 1.2, color: h }}
                                        style={{ width: 40, height: 40, borderRadius: 8, background: 'rgba(8,8,16,0.5)', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#374151', transition: 'color 0.2s' }}
                                    >
                                        <I size={17} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: form */}
                    <motion.div initial={{ opacity: 0, x: 28 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.55, delay: 0.2 }}>
                        <div style={{ position: 'relative', background: 'rgba(13,13,26,0.75)', backdropFilter: 'blur(18px)', border: '1px solid rgba(245,197,24,0.12)', borderRadius: 8, padding: 36 }}>
                            <div className="corner-tl" /><div className="corner-tr" /><div className="corner-bl" /><div className="corner-br" />
                            <div style={{ marginBottom: 28 }}>
                                <h3 className="f-orbitron" style={{ color: C, fontWeight: 700, fontSize: 13, letterSpacing: '0.14em', marginBottom: 4 }}>ESTABLISH CONTACT</h3>
                                <p className="f-rajdhani" style={{ color: '#374151', fontSize: 14 }}>All fields required for mission briefing</p>
                            </div>
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                                    <Field label="Code Name" name="name" value={form.name} onChange={handleChange} type="text" />
                                    <Field label="Comm Channel" name="email" value={form.email} onChange={handleChange} type="email" />
                                </div>
                                <Field label="Mission Type" name="subject" value={form.subject} onChange={handleChange} type="text" />
                                <TextArea label="Mission Brief" name="message" value={form.message} onChange={handleChange} />
                                <motion.button type="submit" disabled={status !== 'idle'}
                                    whileHover={status === 'idle' ? { scale: 1.02, boxShadow: '0 0 28px rgba(245,197,24,0.5)' } : {}}
                                    whileTap={status === 'idle' ? { scale: 0.98 } : {}}
                                    style={{
                                        fontFamily: "'Orbitron', monospace", fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
                                        padding: '16px', borderRadius: 3, border: 'none',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                                        background: status === 'sent' ? 'rgba(74,222,128,0.15)' : status === 'sending' ? 'rgba(245,197,24,0.15)' : C,
                                        color: status === 'sent' ? '#4ade80' : status === 'sending' ? 'rgba(245,197,24,0.5)' : '#080810',
                                        border: status === 'idle' ? 'none' : `1px solid currentColor`,
                                    }}
                                >
                                    {status === 'idle' && <><FiSend size={15} /> SEND BAT SIGNAL</>}
                                    {status === 'sending' && <><motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} style={{ width: 16, height: 16, border: '2px solid rgba(245,197,24,0.3)', borderTopColor: C, borderRadius: '50%' }} /> TRANSMITTING...</>}
                                    {status === 'sent' && '✓ MESSAGE RECEIVED — BATMAN WILL RESPOND'}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
