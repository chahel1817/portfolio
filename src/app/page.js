'use client';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SectionDivider from '@/components/SectionDivider';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import InterestsSection from '@/components/InterestsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import GothamBackground from '@/components/GothamBackground';

const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false });
const ThreeDElement = dynamic(() => import('@/components/ThreeDElement'), { ssr: false });
const AchievementModal = dynamic(() => import('@/components/AchievementModal'), { ssr: false });

export default function Home() {
  return (
    <>
      <CustomCursor />
      <GothamBackground />
      <ThreeDElement />
      <AchievementModal />
      <div style={{ position: 'relative', zIndex: 3 }}>
        <Navbar />
        <HeroSection />
        <SectionDivider variant="gold" />
        <AboutSection />
        <SectionDivider variant="cyan" flip />
        <SkillsSection />
        <SectionDivider variant="mixed" />
        <ProjectsSection />
        <SectionDivider variant="gold" flip />
        <ExperienceSection />
        <SectionDivider variant="cyan" />
        <InterestsSection />
        <SectionDivider variant="mixed" flip />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
