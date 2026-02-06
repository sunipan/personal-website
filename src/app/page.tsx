import { ParticleBackground } from '@/components/particle-background/ParticleBackground';
import { NavDots } from '@/components/nav-dots/NavDots';
import { HeroSection } from '@/components/sections/HeroSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-surface font-sans text-neutral-100">
      {/* Noise overlay */}
      <div className="noise-overlay" />

      <ParticleBackground />
      <NavDots />

      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
}
