import { SmoothScrollProvider, CustomCursor } from '@/components/SmoothScrollProvider';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Mathiyazhagan L | AI & Machine Learning Engineer Portfolio',
  description: 'Portfolio of Mathiyazhagan L - B.Tech AI & Data Science (2027) specializing in Machine Learning, Deep Learning, Generative AI, RAG, and Computer Vision.',
};

export default function Home() {
  return (
    <SmoothScrollProvider>
      <CustomCursor />
      <main className="min-h-screen bg-transparent text-[#FDF6E2] selection:bg-[#E7E2CE] selection:text-[#0F172A]">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
