'use client';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TerminalSection from '@/components/TerminalSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import InterestsSection from '@/components/InterestsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import GothamBackground from '@/components/GothamBackground';

const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false });
const ThreeDElement = dynamic(() => import('@/components/ThreeDElement'), { ssr: false });

export default function Home() {
  return (
    <>
      <CustomCursor />
      <GothamBackground />
      <ThreeDElement />
      <div style={{ position: 'relative', zIndex: 3 }}>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <TerminalSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <InterestsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
