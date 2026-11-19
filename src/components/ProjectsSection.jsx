'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useReducedMotion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
    FiGithub,
    FiExternalLink,
    FiChevronLeft,
    FiChevronRight,
    FiGrid,
    FiLayers,
    FiPlay,
    FiPause,
    FiMaximize2,
} from 'react-icons/fi';
import Magnetic from '@/components/Magnetic';
import ScrambleText from '@/components/ScrambleText';
import IrisReveal from '@/components/IrisReveal';
import { useTheme } from '@/context/ThemeContext';

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
        glowColor: 'rgba(249,115,22,0.45)',
        glowColorSoft: 'rgba(249,115,22,0.12)',
        status: 'LIVE',
        statusColor: '#f97316',
        category: 'data',
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
        glowColor: 'rgba(168,85,247,0.45)',
        glowColorSoft: 'rgba(168,85,247,0.12)',
        status: 'LIVE',
        statusColor: '#a855f7',
        category: 'fullstack',
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
            'Monaco Editor',
        ],
        image: '/SQLens.png',
        github: 'https://github.com/chahel1817/SQLens',
        live: 'https://sqlens-liard.vercel.app/',
        accentColor: '#3b82f6',
        glowColor: 'rgba(59,130,246,0.45)',
        glowColorSoft: 'rgba(59,130,246,0.12)',
        status: 'LIVE',
        statusColor: '#3b82f6',
        category: 'data',
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
        glowColor: 'rgba(6,182,212,0.45)',
        glowColorSoft: 'rgba(6,182,212,0.12)',
        status: 'LIVE',
        statusColor: '#06b6d4',
        category: 'fullstack',
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
        glowColor: 'rgba(236,72,153,0.45)',
        glowColorSoft: 'rgba(236,72,153,0.12)',
        status: 'LIVE',
        statusColor: '#ec4899',
        category: 'fullstack',
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
        glowColor: 'rgba(245,197,24,0.45)',
        glowColorSoft: 'rgba(245,197,24,0.12)',
        status: 'LIVE',
        statusColor: '#f5c518',
        category: 'fullstack',
        highlights: ['API Guard', 'Live Charts', 'SAAS Ready', 'Traffic Stream'],
    },
    {
        id: 'P008',
        title: 'Forge Athletics',
        sub: 'Earn Your Strong • Elite Athletic Club & Fitness Platform',
        desc: 'A modern, high-energy athletic club and fitness center web platform. Features dynamic workout class schedules, interactive trainer profile showcases, membership tier calculators, and a fluid booking workflow. Engineered with glassmorphism UI ergonomics, responsive layouts, and sub-second page performance.',
        tech: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons', 'Vercel'],
        image: '/forge_athletics.png',
        github: 'https://github.com/chahel1817/GymDemo',
        live: 'https://gym-demo-three-lilac.vercel.app/',
        accentColor: '#f43f5e',
        glowColor: 'rgba(244,63,94,0.45)',
        glowColorSoft: 'rgba(244,63,94,0.12)',
        status: 'LIVE',
        statusColor: '#f43f5e',
        category: 'creative',
        highlights: ['Earn Your Strong', 'Class Schedules', 'Trainer Rosters', 'Tier Calculator'],
    },
    {
        id: 'P009',
        title: 'Grove Cafe',
        sub: 'Artisanal Coffee Roastery & Experience Showcase',
        desc: 'An atmospheric brand showcase and interactive digital tasting experience for a boutique specialty coffee roastery. Features single-origin bean origin tracing, an interactive roast profile flavor wheel, curated pour-over brew guides, and a sensory tasting menu with warm culinary aesthetics and fluid micro-interactions.',
        tech: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'UI/UX Design', 'Vercel'],
        image: '/grove_cafe.png',
        github: 'https://github.com/chahel1817/cafe_design1',
        live: 'https://cafe-design1.vercel.app/',
        accentColor: '#d97706',
        glowColor: 'rgba(217,119,6,0.45)',
        glowColorSoft: 'rgba(217,119,6,0.12)',
        status: 'LIVE',
        statusColor: '#d97706',
        category: 'creative',
        highlights: ['Sensory Tasting', 'Flavor Wheel', 'Origin Tracing', 'Pour-Over Guides'],
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
        glowColor: 'rgba(34,197,94,0.45)',
        glowColorSoft: 'rgba(34,197,94,0.12)',
        status: 'LIVE',
        statusColor: '#22c55e',
        category: 'creative',
        highlights: ['Squad Builder', 'Tactical UI', 'Player Stats', 'Dream Team'],
    },
];

/* ─── Category Filter Metadata ────────────────────────────────────────────── */
const CATEGORIES = [
    { id: 'all', label: 'All Projects', count: PROJECTS.length },
    { id: 'fullstack', label: 'Full-Stack & SaaS', count: PROJECTS.filter(p => p.category === 'fullstack').length },
    { id: 'data', label: 'Data & Systems', count: PROJECTS.filter(p => p.category === 'data').length },
    { id: 'creative', label: 'UI & Interactive', count: PROJECTS.filter(p => p.category === 'creative').length },
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
                borderRadius: 4,
                background: `${accent}15`,
                border: `1px solid ${accent}35`,
                color: accent,
                whiteSpace: 'nowrap',
            }}
        >
            {label}
        </span>
    );
}

/* ─── Cinematic Showcase Stage Component ───────────────────────────────────── */
function CinematicStage({ project, index, total, onNext, onPrev, onSelect, autoPlay, setAutoPlay }) {
    const { isLofi } = useTheme();
    const [tilt, setTilt] = useState({ x: 0, y: 0, px: 50, py: 50, hov: false });
    const previewRef = useRef(null);
    const reducedMotion = useReducedMotion();

    const handleMouseMove = (e) => {
        if (reducedMotion || !previewRef.current || window.innerWidth < 768) return;
        const rect = previewRef.current.getBoundingClientRect();
        const px = ((e.clientX - rect.left) / rect.width) * 100;
        const py = ((e.clientY - rect.top) / rect.height) * 100;
        setTilt({
            x: -((py - 50) / 50) * 8,
            y: ((px - 50) / 50) * 8,
            px,
            py,
            hov: true,
        });
    };

    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0, px: 50, py: 50, hov: false });
    };

    return (
        <div style={{ position: 'relative', width: '100%', marginBottom: 56 }}>
            {/* Ambient project chromatic aura */}
            <div
                style={{
                    position: 'absolute',
                    top: '20%',
                    left: '15%',
                    right: '15%',
                    bottom: '10%',
                    background: `radial-gradient(ellipse at center, ${project.glowColor} 0%, transparent 70%)`,
                    filter: 'blur(70px)',
                    opacity: isLofi ? 0.35 : 0.65,
                    pointerEvents: 'none',
                    transition: 'background 0.8s ease',
                    zIndex: 0,
                }}
            />

            {/* Main Stage Glass Console */}
            <div
                style={{
                    position: 'relative',
                    zIndex: 1,
                    borderRadius: 24,
                    background: isLofi ? 'rgba(255, 255, 255, 0.94)' : 'rgba(12, 14, 26, 0.88)',
                    backdropFilter: 'blur(28px)',
                    border: isLofi ? '1px solid rgba(15, 23, 42, 0.12)' : `1px solid ${project.accentColor}44`,
                    boxShadow: isLofi
                        ? `0 16px 45px rgba(15, 23, 42, 0.08), 0 0 35px ${project.glowColorSoft}`
                        : `0 24px 64px rgba(0,0,0,0.7), 0 0 60px ${project.glowColorSoft}, inset 0 1px 0 rgba(255,255,255,0.08)`,
                    padding: 'clamp(20px, 3.5vw, 40px)',
                    overflow: 'hidden',
                    transition: 'border-color 0.6s, box-shadow 0.6s',
                }}
            >
                {/* Top Glowing Laser Horizon Line */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 2,
                        background: `linear-gradient(90deg, transparent 5%, ${project.accentColor} 50%, transparent 95%)`,
                        boxShadow: `0 0 16px ${project.accentColor}`,
                        transition: 'all 0.6s',
                    }}
                />

                <div
                    className="stage-layout"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'minmax(0, 0.88fr) minmax(0, 1.35fr)',
                        gap: 'clamp(24px, 3.5vw, 40px)',
                        alignItems: 'center',
                    }}
                >
                    {/* Left: Interactive Preview Frame */}
                    <div
                        ref={previewRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            position: 'relative',
                            borderRadius: 16,
                            overflow: 'hidden',
                            height: 'clamp(195px, 22vw, 280px)',
                            border: `1px solid ${tilt.hov ? project.accentColor : (isLofi ? 'rgba(15, 23, 42, 0.12)' : 'rgba(255,255,255,0.1)')}`,
                            boxShadow: tilt.hov
                                ? (isLofi ? `0 16px 36px rgba(15, 23, 42, 0.14), 0 0 25px ${project.glowColorSoft}` : `0 20px 45px rgba(0,0,0,0.7), 0 0 35px ${project.glowColor}`)
                                : (isLofi ? '0 8px 24px rgba(15, 23, 42, 0.06)' : '0 10px 30px rgba(0,0,0,0.5)'),
                            transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${tilt.hov ? 1.02 : 1})`,
                            transition: 'transform 0.15s ease-out, border-color 0.4s, box-shadow 0.4s',
                            background: isLofi ? '#f1f5f9' : '#090a14',
                        }}
                    >
                        <Image
                            src={project.image}
                            alt={`${project.title} preview`}
                            fill
                            sizes="(max-width: 768px) 100vw, 650px"
                            priority
                            style={{
                                objectFit: 'cover',
                                objectPosition: 'top center',
                                transform: tilt.hov ? 'scale(1.05)' : 'scale(1)',
                                transition: 'transform 0.6s cubic-bezier(0.23,1,0.32,1)',
                            }}
                        />

                        {/* Scanning Laser Beam */}
                        <div
                            style={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                height: 2,
                                background: `linear-gradient(90deg, transparent 5%, ${project.accentColor} 50%, transparent 95%)`,
                                boxShadow: `0 0 16px ${project.accentColor}, 0 0 30px ${project.accentColor}`,
                                zIndex: 4,
                                pointerEvents: 'none',
                                animation: 'scanLaser 2s ease-in-out infinite alternate',
                            }}
                        />

                        {/* Interactive Holographic Glare Sheen */}
                        {tilt.hov && !reducedMotion && (
                            <div
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    zIndex: 5,
                                    background: `radial-gradient(circle at ${tilt.px}% ${tilt.py}%, rgba(255,255,255,0.2) 0%, rgba(0,245,255,0.1) 40%, transparent 65%)`,
                                    mixBlendMode: 'overlay',
                                    pointerEvents: 'none',
                                }}
                            />
                        )}

                        {/* Cyber Corner HUD Brackets */}
                        <div
                            style={{
                                position: 'absolute',
                                top: 12,
                                left: 12,
                                width: 16,
                                height: 16,
                                borderTop: `2px solid ${project.accentColor}`,
                                borderLeft: `2px solid ${project.accentColor}`,
                                pointerEvents: 'none',
                                zIndex: 6,
                            }}
                        />
                        <div
                            style={{
                                position: 'absolute',
                                bottom: 12,
                                right: 12,
                                width: 16,
                                height: 16,
                                borderBottom: `2px solid ${project.accentColor}`,
                                borderRight: `2px solid ${project.accentColor}`,
                                pointerEvents: 'none',
                                zIndex: 6,
                            }}
                        />

                        {/* Live Status Badge */}
                        <div
                            style={{
                                position: 'absolute',
                                top: 14,
                                left: 14,
                                zIndex: 6,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 6,
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "'Orbitron', monospace",
                                    fontSize: 9.5,
                                    fontWeight: 700,
                                    letterSpacing: '0.16em',
                                    padding: '4px 10px',
                                    borderRadius: 20,
                                    background: isLofi ? 'rgba(255, 255, 255, 0.92)' : 'rgba(9, 11, 20, 0.85)',
                                    border: isLofi ? '1px solid rgba(15, 23, 42, 0.15)' : `1px solid ${project.accentColor}66`,
                                    color: project.accentColor,
                                    backdropFilter: 'blur(10px)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 6,
                                }}
                            >
                                <span
                                    style={{
                                        width: 6,
                                        height: 6,
                                        borderRadius: '50%',
                                        background: project.accentColor,
                                        boxShadow: `0 0 8px ${project.accentColor}`,
                                        animation: 'pulseDot 1.5s infinite',
                                    }}
                                />
                                {project.status}
                            </span>
                        </div>

                        {/* ID Tag top right */}
                        <div
                            style={{
                                position: 'absolute',
                                top: 14,
                                right: 14,
                                zIndex: 6,
                                fontFamily: "'Orbitron', monospace",
                                fontSize: 10,
                                color: isLofi ? '#334155' : 'rgba(255,255,255,0.7)',
                                letterSpacing: '0.14em',
                                background: isLofi ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0,0,0,0.65)',
                                padding: '3px 8px',
                                borderRadius: 4,
                                border: isLofi ? '1px solid rgba(15, 23, 42, 0.15)' : '1px solid rgba(255,255,255,0.1)',
                            }}
                        >
                            {project.id}
                        </div>

                        {/* Gradient Shadow bottom */}
                        <div
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                height: '35%',
                                background: isLofi ? 'linear-gradient(to top, rgba(255,255,255,0.85), transparent)' : 'linear-gradient(to top, rgba(12,14,26,0.95), transparent)',
                                pointerEvents: 'none',
                                zIndex: 2,
                            }}
                        />
                    </div>

                    {/* Right: Technical Spec & Project Dossier */}
                    <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 2 }}>
                        {/* Dossier Header Index */}
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginBottom: 12,
                            }}
                        >
                            <span
                                className="f-mono"
                                style={{
                                    fontSize: 11,
                                    fontWeight: 700,
                                    letterSpacing: '0.2em',
                                    color: project.accentColor,
                                    textTransform: 'uppercase',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 8,
                                }}
                            >
                                <span style={{ width: 6, height: 6, borderRadius: '50%', background: project.accentColor }} />
                                PROJECT {index + 1} OF {total} // {project.category.toUpperCase()}
                            </span>

                            {/* Auto Play indicator */}
                            <button
                                onClick={() => setAutoPlay(!autoPlay)}
                                title={autoPlay ? 'Pause auto-rotation' : 'Enable auto-rotation'}
                                style={{
                                    background: isLofi ? 'rgba(15, 23, 42, 0.05)' : 'rgba(255,255,255,0.06)',
                                    border: isLofi ? '1px solid rgba(15, 23, 42, 0.12)' : '1px solid rgba(255,255,255,0.14)',
                                    borderRadius: 16,
                                    padding: '4px 10px',
                                    color: autoPlay ? (isLofi ? '#15803d' : '#4ade80') : (isLofi ? '#64748b' : 'rgba(255,255,255,0.5)'),
                                    fontSize: 10,
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 6,
                                    fontFamily: "'Orbitron', monospace",
                                }}
                            >
                                {autoPlay ? <FiPause size={10} /> : <FiPlay size={10} />}
                                {autoPlay ? 'AUTO ROTATING' : 'PAUSED'}
                            </button>
                        </div>

                        {/* Project Title with Kinetic Prismatic Glow */}
                        <h3
                            className="f-orbitron"
                            style={{
                                fontSize: 'clamp(22px, 2.7vw, 32px)',
                                fontWeight: 900,
                                color: isLofi ? '#0f172a' : '#ffffff',
                                letterSpacing: '0.04em',
                                marginBottom: 6,
                                textShadow: isLofi ? 'none' : `0 0 25px ${project.glowColor}`,
                                lineHeight: 1.18,
                            }}
                        >
                            {project.title}
                        </h3>

                        {/* Subtitle */}
                        <p
                            className="f-rajdhani"
                            style={{
                                color: isLofi ? '#b45309' : project.accentColor,
                                fontSize: 'clamp(13px, 1.6vw, 15px)',
                                fontWeight: 700,
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                marginBottom: 14,
                            }}
                        >
                            {project.sub}
                        </p>

                        {/* Description */}
                        <p
                            className="f-rajdhani"
                            style={{
                                color: isLofi ? '#334155' : 'rgba(232, 238, 252, 0.94)',
                                fontSize: 'clamp(14.5px, 1.35vw, 16px)',
                                lineHeight: 1.7,
                                marginBottom: 18,
                                fontWeight: 450,
                                maxWidth: '680px',
                            }}
                        >
                            {project.desc}
                        </p>

                        {/* Highlights chips */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 18 }}>
                            {project.highlights.map((h) => (
                                <span
                                    key={h}
                                    style={{
                                        fontFamily: "'Rajdhani', sans-serif",
                                        fontSize: 11.5,
                                        fontWeight: 700,
                                        letterSpacing: '0.06em',
                                        padding: '4px 11px',
                                        borderRadius: 4,
                                        background: isLofi ? 'rgba(15, 23, 42, 0.05)' : 'rgba(255,255,255,0.06)',
                                        border: isLofi ? '1px solid rgba(15, 23, 42, 0.12)' : `1px solid ${project.accentColor}50`,
                                        color: isLofi ? '#0f172a' : '#ffffff',
                                    }}
                                >
                                    ✦ {h}
                                </span>
                            ))}
                        </div>

                        {/* Tech Stack Badges */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 26 }}>
                            {project.tech.map((t) => (
                                <TechBadge key={t} label={t} accent={project.accentColor} />
                            ))}
                        </div>

                        {/* Action Buttons & Navigation */}
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                flexWrap: 'wrap',
                                gap: 14,
                                paddingTop: 18,
                                borderTop: `1px solid ${project.accentColor}25`,
                            }}
                        >
                            {/* Live Site & Code */}
                            <div style={{ display: 'flex', gap: 12 }}>
                                <Magnetic range={50} strength={0.3}>
                                    <motion.a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05, boxShadow: `0 0 28px ${project.glowColor}` }}
                                        whileTap={{ scale: 0.97 }}
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: 8,
                                            fontFamily: "'Orbitron', monospace",
                                            fontSize: 11,
                                            fontWeight: 700,
                                            letterSpacing: '0.12em',
                                            textTransform: 'uppercase',
                                            padding: '12px 22px',
                                            borderRadius: 8,
                                            background: `linear-gradient(135deg, ${project.accentColor}, ${project.accentColor}BB)`,
                                            color: '#ffffff',
                                            textDecoration: 'none',
                                            boxShadow: `0 4px 18px ${project.glowColorSoft}`,
                                            border: `1px solid ${project.accentColor}`,
                                            cursor: 'pointer',
                                        }}
                                    >
                                        <FiExternalLink size={13} />
                                        Live Site
                                    </motion.a>
                                </Magnetic>

                                <Magnetic range={50} strength={0.3}>
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05, background: isLofi ? 'rgba(15, 23, 42, 0.08)' : 'rgba(255,255,255,0.1)' }}
                                        whileTap={{ scale: 0.97 }}
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: 8,
                                            fontFamily: "'Orbitron', monospace",
                                            fontSize: 11,
                                            fontWeight: 700,
                                            letterSpacing: '0.12em',
                                            textTransform: 'uppercase',
                                            padding: '12px 20px',
                                            borderRadius: 8,
                                            background: isLofi ? 'rgba(15, 23, 42, 0.05)' : 'rgba(255,255,255,0.04)',
                                            color: isLofi ? '#0f172a' : 'rgba(255,255,255,0.8)',
                                            textDecoration: 'none',
                                            border: isLofi ? '1px solid rgba(15, 23, 42, 0.15)' : '1px solid rgba(255,255,255,0.14)',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        <FiGithub size={14} />
                                        Code
                                    </motion.a>
                                </Magnetic>
                            </div>

                            {/* Prev / Next Stage Controls */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                <motion.button
                                    onClick={onPrev}
                                    whileHover={{ scale: 1.08, background: isLofi ? 'rgba(15, 23, 42, 0.1)' : 'rgba(255,255,255,0.12)' }}
                                    whileTap={{ scale: 0.94 }}
                                    title="Previous project [←]"
                                    style={{
                                        width: 42,
                                        height: 42,
                                        borderRadius: '50%',
                                        background: isLofi ? 'rgba(15, 23, 42, 0.05)' : 'rgba(255,255,255,0.06)',
                                        border: isLofi ? '1px solid rgba(15, 23, 42, 0.15)' : `1px solid ${project.accentColor}55`,
                                        color: isLofi ? '#0f172a' : '#ffffff',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                    }}
                                >
                                    <FiChevronLeft size={18} />
                                </motion.button>

                                <span
                                    className="f-mono"
                                    style={{
                                        fontSize: 11,
                                        color: isLofi ? '#64748b' : 'rgba(255,255,255,0.6)',
                                        letterSpacing: '0.1em',
                                        padding: '0 4px',
                                    }}
                                >
                                    {String(index + 1).padStart(2, '0')}/{String(total).padStart(2, '0')}
                                </span>

                                <motion.button
                                    onClick={onNext}
                                    whileHover={{ scale: 1.08, background: isLofi ? 'rgba(15, 23, 42, 0.1)' : 'rgba(255,255,255,0.12)' }}
                                    whileTap={{ scale: 0.94 }}
                                    title="Next project [→]"
                                    style={{
                                        width: 42,
                                        height: 42,
                                        borderRadius: '50%',
                                        background: isLofi ? 'rgba(15, 23, 42, 0.05)' : 'rgba(255,255,255,0.06)',
                                        border: isLofi ? '1px solid rgba(15, 23, 42, 0.15)' : `1px solid ${project.accentColor}55`,
                                        color: isLofi ? '#0f172a' : '#ffffff',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                    }}
                                >
                                    <FiChevronRight size={18} />
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Interactive Thumbnail Ribbon Track */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    marginTop: 24,
                    overflowX: 'auto',
                    padding: '8px 4px 16px',
                    scrollbarWidth: 'none',
                }}
            >
                {PROJECTS.map((p, i) => {
                    const isActive = i === index;
                    return (
                        <motion.button
                            key={p.id}
                            onClick={() => onSelect(i)}
                            whileHover={{ y: -4, scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            style={{
                                flex: '0 0 auto',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 10,
                                padding: '8px 14px',
                                borderRadius: 12,
                                background: isActive
                                    ? (isLofi ? 'rgba(255, 255, 255, 0.95)' : `linear-gradient(135deg, rgba(20,22,40,0.95), ${p.glowColorSoft})`)
                                    : (isLofi ? 'rgba(255, 255, 255, 0.75)' : 'rgba(12, 14, 26, 0.7)'),
                                border: `1px solid ${isActive ? p.accentColor : (isLofi ? 'rgba(15, 23, 42, 0.1)' : 'rgba(255,255,255,0.08)')}`,
                                boxShadow: isActive
                                    ? (isLofi ? `0 4px 15px rgba(217, 119, 6, 0.18)` : `0 0 18px ${p.glowColor}, inset 0 0 10px ${p.glowColorSoft}`)
                                    : (isLofi ? '0 2px 6px rgba(15, 23, 42, 0.04)' : 'none'),
                                cursor: 'pointer',
                                textAlign: 'left',
                                transition: 'all 0.3s cubic-bezier(0.23,1,0.32,1)',
                            }}
                        >
                            {/* Mini screenshot */}
                            <div
                                style={{
                                    position: 'relative',
                                    width: 44,
                                    height: 32,
                                    borderRadius: 6,
                                    overflow: 'hidden',
                                    flexShrink: 0,
                                    background: isLofi ? '#e2e8f0' : '#090a14',
                                }}
                            >
                                <Image
                                    src={p.image}
                                    alt={p.title}
                                    fill
                                    sizes="50px"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>

                            <div>
                                <div
                                    className="f-orbitron"
                                    style={{
                                        fontSize: 10.5,
                                        fontWeight: 800,
                                        color: isActive ? (isLofi ? '#0f172a' : '#ffffff') : (isLofi ? '#64748b' : 'rgba(220,230,245,0.7)'),
                                        letterSpacing: '0.06em',
                                    }}
                                >
                                    {p.title}
                                </div>
                                <div
                                    className="f-mono"
                                    style={{
                                        fontSize: 8.5,
                                        color: isActive ? (isLofi ? '#b45309' : p.accentColor) : (isLofi ? '#94a3b8' : 'rgba(255,255,255,0.35)'),
                                        letterSpacing: '0.08em',
                                    }}
                                >
                                    {p.id} • {p.category.toUpperCase()}
                                </div>
                            </div>
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
}

/* ─── Project Card (For Grid View) ─────────────────────────────────────────── */
function ProjectCard({ p, i, onFocusStage }) {
    const { isLofi } = useTheme();
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
            layout
            initial={{ opacity: 0, y: 32, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
            onHoverStart={() => setHov(true)}
            onHoverEnd={handleLeave}
            onMouseMove={handleMove}
            style={{
                position: 'relative',
                borderRadius: 16,
                overflow: 'hidden',
                background: isLofi
                    ? (hov ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.92)')
                    : (hov ? `linear-gradient(135deg, rgba(13,13,26,0.95) 0%, ${p.glowColorSoft} 100%)` : 'rgba(13,13,26,0.85)'),
                backdropFilter: 'blur(24px)',
                border: isLofi
                    ? `1px solid ${hov ? p.accentColor : 'rgba(15, 23, 42, 0.12)'}`
                    : `1px solid ${hov ? p.accentColor + '66' : 'rgba(255,255,255,0.06)'}`,
                boxShadow: isLofi
                    ? (hov ? `0 16px 36px rgba(15, 23, 42, 0.12), 0 0 25px ${p.glowColorSoft}` : '0 6px 20px rgba(15, 23, 42, 0.06)')
                    : (hov
                        ? `0 0 0 1px ${p.accentColor}30, 0 32px 64px rgba(0,0,0,0.6), 0 0 70px ${p.glowColor}, inset 0 1px 0 rgba(255,255,255,0.08)`
                        : `0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.03)`),
                transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${hov ? 'translateY(-10px) scale(1.015)' : 'translateY(0) scale(1)'}`,
                transformStyle: 'preserve-3d',
                transition: 'background 0.4s, border-color 0.4s, box-shadow 0.4s, transform 0.15s cubic-bezier(0.23,1,0.32,1)',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {/* Glow pulse when hovered */}
            {hov && (
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: 16,
                        background: `radial-gradient(ellipse at 50% 0%, ${p.glowColor} 0%, transparent 65%)`,
                        pointerEvents: 'none',
                        zIndex: 0,
                    }}
                />
            )}

            {/* Glare sweep */}
            {hov && !reducedMotion && (
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: 16,
                        zIndex: 3,
                        background: `radial-gradient(circle at ${tilt.px}% ${tilt.py}%, rgba(255,255,255,0.14), transparent 45%)`,
                        mixBlendMode: 'overlay',
                        pointerEvents: 'none',
                    }}
                />
            )}

            {/* Top accent line */}
            <div
                style={{
                    height: 3,
                    background: hov
                        ? `linear-gradient(90deg, transparent 0%, ${p.accentColor} 40%, ${p.accentColor} 60%, transparent 100%)`
                        : `linear-gradient(90deg, transparent, ${p.accentColor}40, transparent)`,
                    transition: 'all 0.4s',
                    position: 'relative',
                    zIndex: 1,
                }}
            />

            {/* ── Screenshot Preview ── */}
            <div
                style={{
                    position: 'relative',
                    overflow: 'hidden',
                    height: 220,
                    background: isLofi ? '#e2e8f0' : `linear-gradient(135deg, #0d0d1a, #140d28)`,
                    zIndex: 1,
                }}
            >
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
                    onError={(e) => {
                        e.target.style.display = 'none';
                    }}
                />

                {/* Laser scan line on hover */}
                {hov && !reducedMotion && (
                    <div
                        style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            height: 2,
                            background: `linear-gradient(90deg, transparent 5%, ${p.accentColor} 50%, transparent 95%)`,
                            boxShadow: `0 0 14px ${p.accentColor}, 0 0 28px ${p.accentColor}`,
                            zIndex: 4,
                            pointerEvents: 'none',
                            animation: 'scanLaser 1.8s ease-in-out infinite alternate',
                        }}
                    />
                )}

                {/* High-tech HUD corner brackets */}
                <div
                    style={{
                        position: 'absolute',
                        top: 8,
                        left: 8,
                        width: 12,
                        height: 12,
                        borderTop: `2px solid ${hov ? p.accentColor : (isLofi ? 'rgba(15, 23, 42, 0.2)' : 'rgba(255,255,255,0.2)')}`,
                        borderLeft: `2px solid ${hov ? p.accentColor : (isLofi ? 'rgba(15, 23, 42, 0.2)' : 'rgba(255,255,255,0.2)')}`,
                        transition: 'all 0.3s',
                        pointerEvents: 'none',
                        zIndex: 4,
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: 8,
                        right: 8,
                        width: 12,
                        height: 12,
                        borderBottom: `2px solid ${hov ? p.accentColor : (isLofi ? 'rgba(15, 23, 42, 0.2)' : 'rgba(255,255,255,0.2)')}`,
                        borderRight: `2px solid ${hov ? p.accentColor : (isLofi ? 'rgba(15, 23, 42, 0.2)' : 'rgba(255,255,255,0.2)')}`,
                        transition: 'all 0.3s',
                        pointerEvents: 'none',
                        zIndex: 4,
                    }}
                />

                {/* Gradient overlay */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '55%',
                        background: isLofi
                            ? 'linear-gradient(to top, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.2) 60%, transparent 100%)'
                            : 'linear-gradient(to top, rgba(13,13,26,0.85) 0%, rgba(13,13,26,0.2) 60%, transparent 100%)',
                        pointerEvents: 'none',
                    }}
                />

                {/* Status badge */}
                <div
                    style={{
                        position: 'absolute',
                        top: 14,
                        left: 14,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6,
                    }}
                >
                    <span
                        style={{
                            fontFamily: "'Orbitron', monospace",
                            fontSize: 9,
                            fontWeight: 700,
                            letterSpacing: '0.18em',
                            padding: '4px 10px',
                            borderRadius: 20,
                            background: isLofi ? 'rgba(255, 255, 255, 0.92)' : `${p.accentColor}22`,
                            border: `1px solid ${isLofi ? 'rgba(15, 23, 42, 0.15)' : p.accentColor + '55'}`,
                            color: p.accentColor,
                            backdropFilter: 'blur(8px)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 5,
                        }}
                    >
                        <span
                            style={{
                                width: 5,
                                height: 5,
                                borderRadius: '50%',
                                background: p.accentColor,
                                boxShadow: `0 0 6px ${p.accentColor}`,
                                animation: 'pulseDot 1.5s ease-in-out infinite',
                            }}
                        />
                        {p.status}
                    </span>
                </div>

                {/* Project ID top-right */}
                <div
                    style={{
                        position: 'absolute',
                        top: 14,
                        right: 14,
                        fontFamily: "'Orbitron', monospace",
                        fontSize: 9,
                        color: isLofi ? '#64748b' : 'rgba(255,255,255,0.3)',
                        letterSpacing: '0.12em',
                    }}
                >
                    {p.id}
                </div>

                {/* Highlights row */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: 12,
                        left: 14,
                        right: 14,
                        display: 'flex',
                        gap: 6,
                        flexWrap: 'wrap',
                    }}
                >
                    {p.highlights.map((h) => (
                        <span
                            key={h}
                            style={{
                                fontFamily: "'Rajdhani', sans-serif",
                                fontSize: 10,
                                fontWeight: 600,
                                letterSpacing: '0.06em',
                                padding: '2px 8px',
                                borderRadius: 4,
                                background: isLofi ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0,0,0,0.65)',
                                backdropFilter: 'blur(8px)',
                                border: `1px solid ${isLofi ? 'rgba(15, 23, 42, 0.12)' : p.accentColor + '40'}`,
                                color: isLofi ? '#0f172a' : 'rgba(255,255,255,0.85)',
                            }}
                        >
                            {h}
                        </span>
                    ))}
                </div>
            </div>

            {/* ── Card Body ── */}
            <div
                style={{
                    padding: '22px 24px 24px',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                {/* Title & subtitle */}
                <h3
                    className="f-orbitron"
                    style={{
                        color: isLofi ? '#0f172a' : '#ffffff',
                        fontWeight: 900,
                        fontSize: 17,
                        marginBottom: 5,
                        letterSpacing: '0.04em',
                        textShadow: hov && !isLofi ? `0 0 24px ${p.accentColor}55` : 'none',
                        transition: 'text-shadow 0.4s',
                    }}
                >
                    {p.title}
                </h3>
                <p
                    className="f-rajdhani"
                    style={{
                        color: isLofi ? '#b45309' : p.accentColor,
                        fontSize: 12,
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        marginBottom: 14,
                        opacity: 0.9,
                    }}
                >
                    {p.sub}
                </p>

                {/* Description */}
                <p
                    className="f-rajdhani"
                    style={{
                        color: isLofi ? '#334155' : 'rgba(220,220,235,0.9)',
                        fontSize: 14.5,
                        lineHeight: 1.6,
                        marginBottom: 20,
                        flex: 1,
                        fontWeight: 450,
                    }}
                >
                    {p.desc}
                </p>

                {/* Tech stack */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                    {p.tech.map((t) => (
                        <TechBadge key={t} label={t} accent={p.accentColor} />
                    ))}
                </div>

                {/* Divider */}
                <div
                    style={{
                        height: 1,
                        background: `linear-gradient(90deg, ${p.accentColor}30, transparent)`,
                        marginBottom: 18,
                    }}
                />

                {/* Action buttons */}
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                    <Magnetic range={50} strength={0.25} style={{ flex: 1 }}>
                        <motion.a
                            href={p.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 7,
                                fontFamily: "'Orbitron', monospace",
                                fontSize: 10,
                                fontWeight: 700,
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                padding: '11px 14px',
                                borderRadius: 8,
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
                            href={p.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 7,
                                fontFamily: "'Orbitron', monospace",
                                fontSize: 10,
                                fontWeight: 700,
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                padding: '11px 16px',
                                borderRadius: 8,
                                background: isLofi ? 'rgba(15, 23, 42, 0.05)' : 'rgba(255,255,255,0.04)',
                                color: isLofi ? '#0f172a' : 'rgba(255,255,255,0.7)',
                                textDecoration: 'none',
                                border: isLofi ? '1px solid rgba(15, 23, 42, 0.15)' : '1px solid rgba(255,255,255,0.1)',
                                transition: 'all 0.35s',
                            }}
                        >
                            <FiGithub size={13} />
                            Code
                        </motion.a>
                    </Magnetic>

                    {/* Spotlight in Stage Button */}
                    <Magnetic range={50} strength={0.25}>
                        <motion.button
                            onClick={() => onFocusStage(i)}
                            whileHover={{ scale: 1.05, background: `${p.accentColor}25` }}
                            whileTap={{ scale: 0.95 }}
                            title="Open in Cinematic Stage"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '11px',
                                borderRadius: 8,
                                background: isLofi ? 'rgba(15, 23, 42, 0.05)' : 'rgba(255,255,255,0.04)',
                                color: isLofi ? '#0f172a' : p.accentColor,
                                border: isLofi ? '1px solid rgba(15, 23, 42, 0.15)' : `1px solid ${p.accentColor}44`,
                                cursor: 'pointer',
                                transition: 'all 0.3s',
                            }}
                        >
                            <FiMaximize2 size={13} />
                        </motion.button>
                    </Magnetic>
                </div>
            </div>
        </motion.div>
    );
}

/* ─── Main Section ─────────────────────────────────────────────────────────── */
export default function ProjectsSection() {
    const { isLofi } = useTheme();
    const headerRef = useRef(null);
    const headerInView = useInView(headerRef, { once: true, margin: '-100px' });

    // Mode: 'stage' (Cinematic showcase with transitions) | 'grid' (All projects grid)
    const [viewMode, setViewMode] = useState('stage');

    // Stage State
    const [activeStageIdx, setActiveStageIdx] = useState(0); // Starts on Project #1 (CricWarehouse)
    const [direction, setDirection] = useState(1);
    const [autoPlay, setAutoPlay] = useState(false);

    // Grid Category Filter
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredProjects = activeCategory === 'all'
        ? PROJECTS
        : PROJECTS.filter(p => p.category === activeCategory);

    const handleNext = useCallback(() => {
        setDirection(1);
        setActiveStageIdx(prev => (prev + 1) % PROJECTS.length);
    }, []);

    const handlePrev = useCallback(() => {
        setDirection(-1);
        setActiveStageIdx(prev => (prev - 1 + PROJECTS.length) % PROJECTS.length);
    }, []);

    const handleSelect = useCallback((idx) => {
        if (idx === activeStageIdx) return;
        setDirection(idx > activeStageIdx ? 1 : -1);
        setActiveStageIdx(idx);
    }, [activeStageIdx]);

    const handleFocusStage = (idx) => {
        setDirection(idx >= activeStageIdx ? 1 : -1);
        setActiveStageIdx(idx);
        setViewMode('stage');
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    // Auto play interval
    useEffect(() => {
        if (!autoPlay || viewMode !== 'stage') return;
        const timer = setInterval(() => {
            handleNext();
        }, 5500);
        return () => clearInterval(timer);
    }, [autoPlay, viewMode, handleNext]);

    // Keyboard Arrow navigation for Stage
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
            if (e.key === 'ArrowLeft') {
                handlePrev();
            } else if (e.key === 'ArrowRight') {
                handleNext();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleNext, handlePrev]);

    // 3D Slide & Pop Transition Variants for the Stage
    const stageTransitionVariants = {
        enter: (dir) => ({
            x: dir > 0 ? 260 : -260,
            opacity: 0,
            scale: 0.92,
            rotateY: dir > 0 ? 14 : -14,
            filter: 'blur(8px)',
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            rotateY: 0,
            filter: 'blur(0px)',
            transition: {
                x: { type: 'spring', stiffness: 280, damping: 26 },
                opacity: { duration: 0.32 },
                scale: { duration: 0.36 },
                rotateY: { duration: 0.4 },
                filter: { duration: 0.25 },
            },
        },
        exit: (dir) => ({
            x: dir > 0 ? -260 : 260,
            opacity: 0,
            scale: 0.92,
            rotateY: dir > 0 ? -14 : 14,
            filter: 'blur(8px)',
            transition: {
                x: { type: 'spring', stiffness: 280, damping: 26 },
                opacity: { duration: 0.28 },
            },
        }),
    };

    return (
        <section
            id="projects"
            style={{
                position: 'relative',
                padding: '130px 0 140px',
                background: 'rgba(13,13,26,0.46)',
                overflow: 'hidden',
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
        @keyframes scanLaser {
          0% { top: 0%; opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>

            {/* Background ambient orbs */}
            <div
                style={{
                    position: 'absolute',
                    top: '10%',
                    left: '-5%',
                    width: 500,
                    height: 500,
                    background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(40px)',
                    animation: 'floatOrb 12s ease-in-out infinite',
                    pointerEvents: 'none',
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '-5%',
                    width: 500,
                    height: 500,
                    background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(40px)',
                    animation: 'floatOrb 15s ease-in-out infinite reverse',
                    pointerEvents: 'none',
                }}
            />

            {/* Subtle grid overlay */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none',
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                }}
            />

            <div
                className="projects-container"
                style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}
            >
                {/* ── Section Header ── */}
                <div ref={headerRef}>
                    <IrisReveal>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            style={{ textAlign: 'center', marginBottom: 54 }}
                        >
                            {/* Label */}
                            <div
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 10,
                                    marginBottom: 20,
                                    padding: '6px 16px',
                                    borderRadius: 20,
                                    background: 'rgba(245,197,24,0.07)',
                                    border: '1px solid rgba(245,197,24,0.2)',
                                }}
                            >
                                <div
                                    style={{
                                        width: 4,
                                        height: 4,
                                        borderRadius: '50%',
                                        background: '#f5c518',
                                        boxShadow: '0 0 6px rgba(245,197,24,0.8)',
                                    }}
                                />
                                <span
                                    className="f-mono"
                                    style={{ color: 'rgba(245,197,24,0.7)', fontSize: 10, letterSpacing: '0.24em' }}
                                >
                                    05 // PORTFOLIO
                                </span>
                                <div
                                    style={{
                                        width: 4,
                                        height: 4,
                                        borderRadius: '50%',
                                        background: '#f5c518',
                                        boxShadow: '0 0 6px rgba(245,197,24,0.8)',
                                    }}
                                />
                            </div>

                            {/* Title */}
                            <h2
                                className="f-orbitron"
                                style={{
                                    fontSize: 'clamp(34px, 5.5vw, 58px)',
                                    fontWeight: 900,
                                    color: isLofi ? '#0f172a' : '#fff',
                                    lineHeight: 1.1,
                                    marginBottom: 14,
                                }}
                            >
                                THINGS I&apos;VE{' '}
                                <ScrambleText
                                    as="span"
                                    text="BUILT"
                                    active={headerInView}
                                    style={{
                                        color: isLofi ? '#b45309' : '#f5c518',
                                        textShadow: isLofi ? 'none' : '0 0 30px rgba(245,197,24,0.7), 0 0 60px rgba(245,197,24,0.3)',
                                    }}
                                />
                            </h2>

                            {/* Subtitle */}
                            <p
                                className="f-rajdhani"
                                style={{
                                    color: isLofi ? '#475569' : 'rgba(220,228,240,0.82)',
                                    fontSize: 16,
                                    maxWidth: 620,
                                    margin: '0 auto',
                                    lineHeight: 1.6,
                                }}
                            >
                                Real-world full-stack applications, high-performance engines, and interactive web experiences.
                            </p>

                            {/* View Mode Toggle Pill Bar */}
                            <div
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 8,
                                    marginTop: 32,
                                    padding: '5px',
                                    borderRadius: 30,
                                    background: isLofi ? 'rgba(255, 255, 255, 0.9)' : 'rgba(12, 14, 28, 0.85)',
                                    border: isLofi ? '1px solid rgba(15, 23, 42, 0.12)' : '1px solid rgba(255, 255, 255, 0.12)',
                                    backdropFilter: 'blur(12px)',
                                    boxShadow: isLofi ? '0 8px 24px rgba(15, 23, 42, 0.06)' : 'none',
                                }}
                            >
                                <button
                                    onClick={() => setViewMode('stage')}
                                    style={{
                                        position: 'relative',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: 8,
                                        padding: '9px 20px',
                                        borderRadius: 24,
                                        border: 'none',
                                        background: 'transparent',
                                        color: viewMode === 'stage' ? (isLofi ? '#0f172a' : '#ffffff') : (isLofi ? '#64748b' : 'rgba(255, 255, 255, 0.55)'),
                                        fontFamily: "'Orbitron', monospace",
                                        fontSize: 11,
                                        fontWeight: 700,
                                        letterSpacing: '0.1em',
                                        cursor: 'pointer',
                                        outline: 'none',
                                        transition: 'color 0.25s',
                                    }}
                                >
                                    {viewMode === 'stage' && (
                                        <motion.div
                                            layoutId="activeViewPill"
                                            style={{
                                                position: 'absolute',
                                                inset: 0,
                                                borderRadius: 24,
                                                background: isLofi ? 'rgba(217, 119, 6, 0.14)' : 'linear-gradient(135deg, rgba(245, 197, 24, 0.25), rgba(0, 245, 255, 0.25))',
                                                border: isLofi ? '1px solid rgba(217, 119, 6, 0.45)' : '1px solid rgba(245, 197, 24, 0.65)',
                                                boxShadow: isLofi ? '0 0 14px rgba(217, 119, 6, 0.2)' : '0 0 20px rgba(245, 197, 24, 0.35)',
                                                zIndex: 0,
                                            }}
                                            transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                                        />
                                    )}
                                    <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: 7 }}>
                                        <FiLayers size={13} />
                                        CINEMATIC STAGE (TRANSITIONS)
                                    </span>
                                </button>

                                <button
                                    onClick={() => setViewMode('grid')}
                                    style={{
                                        position: 'relative',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: 8,
                                        padding: '9px 20px',
                                        borderRadius: 24,
                                        border: 'none',
                                        background: 'transparent',
                                        color: viewMode === 'grid' ? (isLofi ? '#0f172a' : '#ffffff') : (isLofi ? '#64748b' : 'rgba(255, 255, 255, 0.55)'),
                                        fontFamily: "'Orbitron', monospace",
                                        fontSize: 11,
                                        fontWeight: 700,
                                        letterSpacing: '0.1em',
                                        cursor: 'pointer',
                                        outline: 'none',
                                        transition: 'color 0.25s',
                                    }}
                                >
                                    {viewMode === 'grid' && (
                                        <motion.div
                                            layoutId="activeViewPill"
                                            style={{
                                                position: 'absolute',
                                                inset: 0,
                                                borderRadius: 24,
                                                background: isLofi ? 'rgba(217, 119, 6, 0.14)' : 'linear-gradient(135deg, rgba(245, 197, 24, 0.25), rgba(0, 245, 255, 0.25))',
                                                border: isLofi ? '1px solid rgba(217, 119, 6, 0.45)' : '1px solid rgba(245, 197, 24, 0.65)',
                                                boxShadow: isLofi ? '0 0 14px rgba(217, 119, 6, 0.2)' : '0 0 20px rgba(245, 197, 24, 0.35)',
                                                zIndex: 0,
                                            }}
                                            transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                                        />
                                    )}
                                    <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: 7 }}>
                                        <FiGrid size={13} />
                                        EXPLORE GRID (ALL 9)
                                    </span>
                                </button>
                            </div>
                        </motion.div>
                    </IrisReveal>
                </div>

                {/* ── VIEW 1: CINEMATIC SHOWCASE STAGE (With Delicious 3D Transitions) ── */}
                {viewMode === 'stage' && (
                    <div style={{ position: 'relative', minHeight: 600 }}>
                        <AnimatePresence custom={direction} mode="wait">
                            <motion.div
                                key={activeStageIdx}
                                custom={direction}
                                variants={stageTransitionVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                style={{ width: '100%' }}
                            >
                                <CinematicStage
                                    project={PROJECTS[activeStageIdx]}
                                    index={activeStageIdx}
                                    total={PROJECTS.length}
                                    onNext={handleNext}
                                    onPrev={handlePrev}
                                    onSelect={handleSelect}
                                    autoPlay={autoPlay}
                                    setAutoPlay={setAutoPlay}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                )}

                {/* ── VIEW 2: FULL RESPONSIVE GRID ── */}
                {viewMode === 'grid' && (
                    <div>
                        {/* Category Filter Tabs */}
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                gap: 10,
                                marginBottom: 44,
                                position: 'relative',
                                zIndex: 2,
                            }}
                        >
                            {CATEGORIES.map((cat) => {
                                const isActive = activeCategory === cat.id;
                                return (
                                    <button
                                        key={cat.id}
                                        onClick={() => setActiveCategory(cat.id)}
                                        style={{
                                            position: 'relative',
                                            padding: '9px 18px',
                                            borderRadius: 30,
                                            border: 'none',
                                            background: 'transparent',
                                            cursor: 'pointer',
                                            outline: 'none',
                                            fontFamily: "'Orbitron', monospace",
                                            fontSize: 10.5,
                                            fontWeight: 700,
                                            letterSpacing: '0.12em',
                                            textTransform: 'uppercase',
                                            color: isActive ? (isLofi ? '#0f172a' : '#ffffff') : (isLofi ? '#64748b' : 'rgba(200, 215, 235, 0.65)'),
                                            transition: 'color 0.25s',
                                        }}
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeProjectFilterPill"
                                                style={{
                                                    position: 'absolute',
                                                    inset: 0,
                                                    borderRadius: 30,
                                                    background: isLofi
                                                        ? 'rgba(217, 119, 6, 0.14)'
                                                        : 'linear-gradient(135deg, rgba(245, 197, 24, 0.16), rgba(0, 245, 255, 0.16))',
                                                    border: isLofi ? '1px solid rgba(217, 119, 6, 0.45)' : '1px solid rgba(245, 197, 24, 0.55)',
                                                    boxShadow: isLofi
                                                        ? '0 0 14px rgba(217, 119, 6, 0.2)'
                                                        : '0 0 20px rgba(245, 197, 24, 0.25), inset 0 0 12px rgba(0, 245, 255, 0.15)',
                                                    zIndex: 0,
                                                }}
                                                transition={{ type: 'spring', stiffness: 420, damping: 30 }}
                                            />
                                        )}
                                        <span
                                            style={{
                                                position: 'relative',
                                                zIndex: 1,
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: 7,
                                            }}
                                        >
                                            {cat.label}
                                            <span
                                                style={{
                                                    fontSize: 9,
                                                    padding: '2px 7px',
                                                    borderRadius: 12,
                                                    background: isActive
                                                        ? (isLofi ? 'rgba(217, 119, 6, 0.25)' : 'rgba(245, 197, 24, 0.35)')
                                                        : (isLofi ? 'rgba(15, 23, 42, 0.08)' : 'rgba(255, 255, 255, 0.08)'),
                                                    color: isActive ? (isLofi ? '#b45309' : '#fff') : (isLofi ? '#64748b' : 'rgba(255,255,255,0.45)'),
                                                    border: isActive
                                                        ? (isLofi ? '1px solid rgba(217, 119, 6, 0.4)' : '1px solid rgba(245, 197, 24, 0.6)')
                                                        : (isLofi ? '1px solid rgba(15, 23, 42, 0.1)' : '1px solid rgba(255,255,255,0.1)'),
                                                    transition: 'all 0.25s',
                                                }}
                                            >
                                                {cat.count}
                                            </span>
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Cards Grid */}
                        <motion.div
                            layout
                            className="projects-grid"
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 370px), 1fr))',
                                gap: 28,
                            }}
                        >
                            <AnimatePresence mode="popLayout">
                                {filteredProjects.map((p, i) => (
                                    <ProjectCard
                                        key={p.id}
                                        p={p}
                                        i={i}
                                        onFocusStage={handleFocusStage}
                                    />
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                )}

                {/* ── Bottom GitHub CTA ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    style={{ textAlign: 'center', marginTop: 72 }}
                >
                    <p className="f-rajdhani" style={{ color: 'rgba(200,200,220,0.35)', marginBottom: 24, fontSize: 15 }}>
                        More repositories and experiments available on GitHub
                    </p>
                    <motion.a
                        href="https://github.com/chahel1817"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: '0 0 30px rgba(245,197,24,0.35), 0 0 60px rgba(245,197,24,0.1)',
                        }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 10,
                            fontFamily: "'Orbitron', monospace",
                            fontSize: 11,
                            fontWeight: 700,
                            letterSpacing: '0.14em',
                            textTransform: 'uppercase',
                            padding: '14px 32px',
                            borderRadius: 8,
                            border: '1px solid rgba(245,197,24,0.4)',
                            color: '#f5c518',
                            textDecoration: 'none',
                            background: 'rgba(245,197,24,0.05)',
                            backdropFilter: 'blur(8px)',
                            transition: 'all 0.3s',
                        }}
                    >
                        <FiGithub size={16} />
                        View All Projects on GitHub
                    </motion.a>
                </motion.div>
            </div>

            <style>{`
                @media (max-width: 880px) {
                    .stage-layout {
                        grid-template-columns: 1fr !important;
                    }
                }
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
