'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiTerminal, FiChevronRight, FiCpu, FiCode, FiUser, FiSend, FiTrash2, FiX, FiActivity } from 'react-icons/fi';

const C = '#f5c518';
const CC = '#00f5ff';

const COMMANDS = {
    help: {
        desc: 'List all available commands',
        execute: () => [
            { type: 'info', content: 'Available commands:' },
            { type: 'list', content: ['about', 'skills', 'projects', 'contact', 'whoami', 'exit', 'clear', 'ls'] }
        ]
    },
    about: {
        desc: 'Display professional summary',
        execute: () => [
            { type: 'output', content: 'I am a Full Stack Engineer transitioning into Data Engineering. I specialize in building robust backend systems, scalable data pipelines, and interactive user interfaces.' },
            { type: 'output', content: 'Current focus: Architecting reliable data infrastructures and mastering the Python/SQL ecosystem for high-throughput systems.' }
        ]
    },
    skills: {
        desc: 'Show core technical stack',
        execute: () => [
            { type: 'info', content: 'Core Technical Stack:' },
            { type: 'list', content: ['Languages: Python, JavaScript (ES6+), SQL, Java', 'Backend: Node.js, Express, Next.js API Routes', 'Databases: MySQL, MongoDB, Redis, PostgreSQL', 'DevOps: Docker, Docker-compose, GitHub Actions, Vercel', 'Data Engineering: ETL Pipelines, Scraping (Cheerio, SerpApi)'] }
        ]
    },
    projects: {
        desc: 'List featured engineering projects',
        execute: () => [
            { type: 'info', content: 'Featured Projects:' },
            { type: 'project', name: 'VivaMate', desc: 'AI-Powered Mock Interview Platform with Speech-to-Text & Analytics.' },
            { type: 'project', name: 'PriceBuddy', desc: 'Real-time E-commerce Tracker with Cron-scheduled Scraping & MySQL-backed trends.' },
            { type: 'project', name: 'EduTrack', desc: 'EdTech platform with AI-generated assessments and progress tracking.' }
        ]
    },
    whoami: {
        desc: 'Display user identify',
        execute: () => [
            { type: 'output', content: 'User: chahel_tanna' },
            { type: 'output', content: 'Role: Full Stack & Data Engineering Transition' },
            { type: 'output', content: 'Status: Open to internships & Engineering roles' }
        ]
    },
    contact: {
        desc: 'Display contact information',
        execute: () => [
            { type: 'output', content: 'Email: chahel1817@gmail.com' },
            { type: 'output', content: 'LinkedIn: linkedin.com/in/chahel-tanna' },
            { type: 'output', content: 'GitHub: github.com/chahel1817' }
        ]
    },
    ls: {
        desc: 'List files (simulated)',
        execute: () => [
            { type: 'output', content: 'total 5' },
            { type: 'output', content: '-rw-r--r--  1 chahel  staff  1024 Apr 10 14:15 about.md' },
            { type: 'output', content: '-rw-r--r--  1 chahel  staff   512 Apr 10 14:15 skills.py' },
            { type: 'output', content: 'drwxr-xr-x  2 chahel  staff   256 Apr 10 14:15 projects/' },
            { type: 'output', content: '-rw-r--r--  1 chahel  staff   128 Apr 10 14:15 contact.txt' }
        ]
    }
};

export default function TerminalSection() {
    const [isOpen, setIsOpen] = useState(false);
    const [history, setHistory] = useState([
        { type: 'output', content: 'Welcome to Chahel v2.4.0 (LTS)' },
        { type: 'info', content: 'Type "help" to see available commands.' }
    ]);
    const [input, setInput] = useState('');
    const scrollRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (isOpen && scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history, isOpen]);

    useEffect(() => {
        if (isOpen) {
            inputRef.current?.focus();
        }
    }, [isOpen]);

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const cmd = input.trim().toLowerCase();
            const newHistory = [...history, { type: 'input', content: cmd }];

            if (cmd === 'clear') {
                setHistory([]);
            } else if (cmd === 'exit' || cmd === 'close' || cmd === 'quit') {
                setIsOpen(false);
            } else if (COMMANDS[cmd]) {
                const result = COMMANDS[cmd].execute();
                setHistory([...newHistory, ...result]);
            } else if (cmd !== '') {
                setHistory([...newHistory, { type: 'error', content: `Command not found: ${cmd}. Type "help" for assistance.` }]);
            }

            setInput('');
        }
    };

    const focusInput = () => inputRef.current?.focus();

    return (
        <section id="terminal" style={{ padding: '60px 0', background: 'rgba(5,5,10,0.3)', position: 'relative' }}>
            <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px' }}>

                <AnimatePresence mode="wait">
                    {!isOpen ? (
                        <motion.div
                            key="trigger"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            style={{ textAlign: 'center', padding: '40px 0' }}
                        >
                            <p className="f-rajdhani" style={{ color: '#6b7280', fontSize: 16, marginBottom: 24, letterSpacing: '0.05em' }}>
                                Prefer a more technical interface?
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${C}33` }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsOpen(true)}
                                style={{
                                    background: 'rgba(245,197,24,0.05)',
                                    border: `1px solid ${C}44`,
                                    padding: '16px 32px',
                                    borderRadius: 8,
                                    color: C,
                                    fontFamily: "'Orbitron', monospace",
                                    fontSize: 12,
                                    fontWeight: 700,
                                    letterSpacing: '0.15em',
                                    cursor: 'pointer',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 12,
                                    transition: 'all 0.3s'
                                }}
                            >
                                <FiTerminal size={18} />
                                LAUNCH_CORE_TERMINAL
                            </motion.button>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="terminal-window"
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        >
                            {/* Header Info */}
                            <div style={{ marginBottom: 30, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid rgba(255,255,255,0.03)', paddingBottom: 15 }}>
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                                        <FiActivity size={14} color={C} />
                                        <span className="f-mono" style={{ color: C, fontSize: 10, letterSpacing: '0.2em' }}>SYSTEM_STATUS: ACTIVE</span>
                                    </div>
                                    <h2 className="f-orbitron" style={{ color: '#fff', fontSize: 20, fontWeight: 800, letterSpacing: '0.1em' }}>
                                        CORE_<span style={{ color: C }}>TERMINAL</span>
                                    </h2>
                                </div>
                                <div className="f-mono" style={{ textAlign: 'right', fontSize: 10, color: '#374151' }}>
                                    <div>LOC: PORT_3000</div>
                                    <div>USR: CHAHEL_ADMIN</div>
                                </div>
                            </div>

                            {/* Terminal Window */}
                            <div
                                onClick={focusInput}
                                style={{
                                    background: '#0d0d1a',
                                    borderRadius: 12,
                                    border: `1px solid ${C}22`,
                                    boxShadow: `0 20px 50px rgba(0,0,0,0.8), 0 0 40px ${C}05`,
                                    overflow: 'hidden',
                                    height: 550,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    position: 'relative'
                                }}
                            >
                                {/* Top Bar */}
                                <div style={{
                                    background: '#1a1a2e',
                                    padding: '12px 20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    borderBottom: '1px solid rgba(255,255,255,0.05)'
                                }}>
                                    <div style={{ display: 'flex', gap: 8 }}>
                                        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56' }} />
                                        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
                                        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f' }} />
                                    </div>
                                    <span className="f-mono" style={{ color: 'rgba(255,255,255,0.3)', fontSize: 11 }}>chahel@engineer: ~ (zsh)</span>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                                        style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.3)', cursor: 'pointer', display: 'flex', alignItems: 'center', transition: 'color 0.2s' }}
                                        onMouseEnter={(e) => e.target.style.color = '#ff5f56'}
                                        onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.3)'}
                                    >
                                        <FiX size={16} />
                                    </button>
                                </div>

                                {/* Console Area */}
                                <div
                                    ref={scrollRef}
                                    className="f-mono"
                                    style={{
                                        flex: 1,
                                        padding: 24,
                                        overflowY: 'auto',
                                        fontSize: 14,
                                        lineHeight: 1.6,
                                        color: '#d1d5db'
                                    }}
                                >
                                    {history.map((line, idx) => (
                                        <div key={idx} style={{ marginBottom: line.type === 'input' ? 8 : 4 }}>
                                            {line.type === 'input' && (
                                                <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: CC }}>
                                                    <FiChevronRight size={14} />
                                                    <span style={{ color: C }}>chahel@portfolio</span>
                                                    <span style={{ color: '#fff' }}>:~$ {line.content}</span>
                                                </div>
                                            )}
                                            {line.type === 'output' && <div>{line.content}</div>}
                                            {line.type === 'info' && <div style={{ color: CC, fontWeight: 600 }}>{line.content}</div>}
                                            {line.type === 'error' && <div style={{ color: '#ff5f56' }}>{line.content}</div>}
                                            {line.type === 'list' && (
                                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: 8, marginTop: 4, paddingLeft: 12 }}>
                                                    {line.content.map(item => (
                                                        <div key={item} style={{ color: '#4ade80' }}>- {item}</div>
                                                    ))}
                                                </div>
                                            )}
                                            {line.type === 'project' && (
                                                <div style={{ paddingLeft: 12, marginBottom: 8 }}>
                                                    <div style={{ color: C, fontWeight: 700 }}>{line.name}</div>
                                                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>{line.desc}</div>
                                                </div>
                                            )}
                                        </div>
                                    ))}

                                    {/* Current Input Line */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: CC, marginTop: 8 }}>
                                        <FiChevronRight size={14} />
                                        <span style={{ color: C }}>chahel@portfolio</span>
                                        <span style={{ color: '#fff' }}>:~$</span>
                                        <input
                                            ref={inputRef}
                                            type="text"
                                            value={input}
                                            onChange={(e) => setInput(e.target.value)}
                                            onKeyDown={handleCommand}
                                            style={{
                                                background: 'transparent',
                                                border: 'none',
                                                outline: 'none',
                                                color: '#fff',
                                                flex: 1,
                                                fontFamily: 'inherit',
                                                fontSize: 'inherit'
                                            }}
                                            spellCheck="false"
                                            autoComplete="off"
                                        />
                                    </div>
                                </div>

                                {/* Footer Tips */}
                                <div style={{
                                    padding: '12px 20px',
                                    background: 'rgba(0,0,0,0.3)',
                                    borderTop: '1px solid rgba(255,255,255,0.05)',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <span className="f-rajdhani" style={{ color: 'rgba(255,255,255,0.2)', fontSize: 11, letterSpacing: '0.05em' }}>
                                        HINT: USE &apos;EXIT&apos; OR CLICK RED BUTTON TO CLOSE
                                    </span>
                                    <div style={{ display: 'flex', gap: 12 }}>
                                        <button onClick={() => setHistory([])} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.2)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
                                            <FiTrash2 size={12} /> <span style={{ fontSize: 10 }} className="f-mono">CLEAR</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <style jsx>{`
                .f-mono { font-family: 'JetBrains Mono', 'Fira Code', monospace; }
                .f-orbitron { font-family: 'Orbitron', sans-serif; }
                .f-rajdhani { font-family: 'Rajdhani', sans-serif; }
            `}</style>
        </section>
    );
}
