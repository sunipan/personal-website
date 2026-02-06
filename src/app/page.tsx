'use client';

import { useEffect, useState } from 'react';
import { ParticleBackground } from '@/components/particle-background/ParticleBackground';
import { NavDots, sections } from '@/components/nav-dots/NavDots';
import { HeroSection } from '@/components/sections/HeroSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sectionEls = sections.map((s) =>
        document.getElementById(s.toLowerCase()),
      );
      const scrollY = window.scrollY + window.innerHeight * 0.35;

      /* If near bottom of page, highlight last section */
      const nearBottom =
        window.scrollY + window.innerHeight >= document.body.scrollHeight - 100;
      if (nearBottom) {
        setActiveSection(sections.length - 1);
        return;
      }

      let current = 0;
      for (let i = 0; i < sectionEls.length; i++) {
        const el = sectionEls[i];
        if (el && el.offsetTop <= scrollY) {
          current = i;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-surface font-sans text-neutral-100">
      {/* Noise overlay */}
      <div className="noise-overlay" />

      <ParticleBackground />
      <NavDots active={activeSection} />

      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
