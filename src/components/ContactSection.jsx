'use client';
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiSend, FiMail, FiMapPin, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const C = '#f5c518';
const CC = '#00f5ff';

const INFO = [
    { icon: FiMail, label: 'Email', value: 'chahel1817@gmail.com', href: 'mailto:chahel1817@gmail.com', color: C },
    { icon: FiMapPin, label: 'Location', value: 'Ahmedabad, Gujarat, India', href: null, color: CC },
    { icon: FiGithub, label: 'GitHub', value: 'github.com/chahel1817', href: 'https://github.com/chahel1817', color: '#a855f7' },
    { icon: FiLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/chahel-tanna-87300a269/', href: 'https://www.linkedin.com/in/chahel-tanna-87300a269/', color: '#3b82f6' },
];

function Field({ label, name, value, onChange, type = 'text' }) {
    return (
        <div>
            <label className="f-mono" style={{ display: 'block', color: 'rgba(245,197,24,0.65)', fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 8 }}>{label}</label>
            <input type={type} name={name} value={value} onChange={onChange} required
                style={{ width: '100%', background: 'rgba(8,8,16,0.6)', border: '1px solid rgba(255,255,255,0.14)', borderRadius: 4, padding: '12px 16px', color: '#e2e8f0', fontFamily: "'Rajdhani', sans-serif", fontSize: 15, outline: 'none', transition: 'border-color 0.2s' }}
                onFocus={(e) => { e.target.style.borderColor = 'rgba(245,197,24,0.5)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.14)'; }}
            />
        </div>
    );
}
function TextArea({ label, name, value, onChange }) {
    return (
        <div>
            <label className="f-mono" style={{ display: 'block', color: 'rgba(245,197,24,0.65)', fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 8 }}>{label}</label>
            <textarea name={name} value={value} onChange={onChange} rows={5} required
                style={{ width: '100%', background: 'rgba(8,8,16,0.6)', border: '1px solid rgba(255,255,255,0.14)', borderRadius: 4, padding: '12px 16px', color: '#e2e8f0', fontFamily: "'Rajdhani', sans-serif", fontSize: 15, outline: 'none', resize: 'none', transition: 'border-color 0.2s' }}
                onFocus={(e) => { e.target.style.borderColor = 'rgba(245,197,24,0.5)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.14)'; }}
            />
        </div>
    );
}

export default function ContactSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                setStatus('sent');
                setForm({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('idle');
                alert('Failed to send message. Please check your environment variables.');
            }
        } catch (err) {
            console.error(err);
            setStatus('idle');
        }
        setTimeout(() => setStatus('idle'), 4000);
    };

    return (
        <section id="contact" style={{ position: 'relative', padding: '120px 0', background: '#0d0d1a', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 1, height: '100%', background: 'linear-gradient(180deg, rgba(245,197,24,0.06), transparent)', pointerEvents: 'none' }} />

            <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
                <div style={{ textAlign: 'center', marginBottom: 64 }}>
                    <div className="sec-label">
                        <span className="f-mono" style={{ color: 'rgba(245,197,24,0.65)', fontSize: 11, letterSpacing: '0.24em' }}>05 // CONTACT</span>
                    </div>
                    <h2 className="f-orbitron" style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 900, color: '#fff' }}>
                        LET&apos;S <span style={{ color: C, textShadow: '0 0 20px rgba(245,197,24,0.6)' }}>WORK TOGETHER</span>
                    </h2>
                    <p className="f-rajdhani" style={{ color: '#a8b4c7', fontSize: 18, marginTop: 12 }}>Share your project details and I&apos;ll get back to you.</p>
                </div>

                <div ref={ref} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: 64, alignItems: 'start' }}>
                    <div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.85 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.7 }}
                            style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}
                        >
                            <div style={{ width: 160, height: 160, borderRadius: '50%', border: '1px solid rgba(245,197,24,0.3)', display: 'grid', placeItems: 'center', background: 'radial-gradient(circle, rgba(245,197,24,0.08), transparent 70%)' }}>
                                <span className="f-orbitron" style={{ color: C, fontSize: 12, letterSpacing: '0.14em' }}>AVAILABLE</span>
                            </div>
                        </motion.div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 40 }}>
                            {INFO.map(({ icon: Icon, label, value, href, color }, i) => {
                                const inner = (
                                    <motion.div key={label} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: i * 0.1 + 0.3 }} whileHover={{ x: 5 }}
                                        style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 20px', background: 'rgba(13,13,26,0.6)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, transition: 'all 0.25s' }}
                                    >
                                        <div style={{ width: 40, height: 40, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `${color}12`, border: `1px solid ${color}28` }}>
                                            <Icon size={17} style={{ color }} />
                                        </div>
                                        <div>
                                            <p className="f-mono" style={{ color: '#8b95a8', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{label}</p>
                                            <p className="f-rajdhani" style={{ color: '#d6deea', fontWeight: 600, fontSize: 15 }}>{value}</p>
                                        </div>
                                    </motion.div>
                                );
                                return href ? <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>{inner}</a> : inner;
                            })}
                        </div>

                        <div>
                            <p className="f-mono" style={{ color: '#8b95a8', fontSize: 10, letterSpacing: '0.2em', marginBottom: 14 }}>// SOCIAL</p>
                            <div style={{ display: 'flex', gap: 12 }}>
                                {[{ icon: FiGithub, href: 'https://github.com/chahel1817', h: '#fff' }, { icon: FiLinkedin, href: 'https://www.linkedin.com/in/chahel-tanna-87300a269/', h: CC }, { icon: FiTwitter, href: '#', h: CC }].map(({ icon: I, href, h }, i) => (
                                    <motion.a key={i} href={href} target="_blank" rel="noopener noreferrer"
                                        whileHover={{ y: -4, scale: 1.2, color: h }}
                                        style={{ width: 40, height: 40, borderRadius: 8, background: 'rgba(8,8,16,0.5)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9aa8bf', transition: 'color 0.2s' }}
                                    >
                                        <I size={17} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <motion.div initial={{ opacity: 0, x: 28 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.55, delay: 0.2 }}>
                        <div style={{ position: 'relative', background: 'rgba(13,13,26,0.75)', backdropFilter: 'blur(18px)', border: '1px solid rgba(245,197,24,0.16)', borderRadius: 8, padding: 36 }}>
                            <div className="corner-tl" /><div className="corner-tr" /><div className="corner-bl" /><div className="corner-br" />
                            <div style={{ marginBottom: 28 }}>
                                <h3 className="f-orbitron" style={{ color: C, fontWeight: 700, fontSize: 13, letterSpacing: '0.14em', marginBottom: 4 }}>SEND A MESSAGE</h3>
                                <p className="f-rajdhani" style={{ color: '#b6c1d3', fontSize: 15 }}>Fill out the form and I&apos;ll reply soon.</p>
                            </div>
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                                    <Field label="Name" name="name" value={form.name} onChange={handleChange} type="text" />
                                    <Field label="Email" name="email" value={form.email} onChange={handleChange} type="email" />
                                </div>
                                <Field label="Subject" name="subject" value={form.subject} onChange={handleChange} type="text" />
                                <TextArea label="Message" name="message" value={form.message} onChange={handleChange} />
                                <motion.button type="submit" disabled={status !== 'idle'}
                                    whileHover={status === 'idle' ? { scale: 1.02, boxShadow: '0 0 28px rgba(245,197,24,0.5)' } : {}}
                                    whileTap={status === 'idle' ? { scale: 0.98 } : {}}
                                    style={{
                                        fontFamily: "'Orbitron', monospace", fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
                                        padding: '16px', borderRadius: 3, border: 'none',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                                        background: status === 'sent' ? 'rgba(74,222,128,0.15)' : status === 'sending' ? 'rgba(245,197,24,0.15)' : C,
                                        color: status === 'sent' ? '#4ade80' : status === 'sending' ? 'rgba(245,197,24,0.6)' : '#080810',
                                        border: status === 'idle' ? 'none' : '1px solid currentColor',
                                    }}
                                >
                                    {status === 'idle' && <><FiSend size={15} /> SEND MESSAGE</>}
                                    {status === 'sending' && <><motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} style={{ width: 16, height: 16, border: '2px solid rgba(245,197,24,0.3)', borderTopColor: C, borderRadius: '50%' }} /> SENDING...</>}
                                    {status === 'sent' && '? MESSAGE SENT SUCCESSFULLY'}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
