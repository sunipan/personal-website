import { ParticleBackground } from '@/components/particle-background/ParticleBackground';
import { NavDots } from '@/components/nav-dots/NavDots';
import { HeroSection } from '@/components/sections/HeroSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { ContactSection } from '@/components/sections/ContactSection';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sebi Unipan',
  url: 'https://sebiunipan.com',
  jobTitle: 'Software Engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'Rave',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'University of British Columbia',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Vancouver',
    addressRegion: 'BC',
    addressCountry: 'CA',
  },
  sameAs: [
    'https://www.linkedin.com/in/sebi-unipan/',
    'https://github.com/sunipan',
  ],
  knowsAbout: [
    'Software Engineering',
    'TypeScript',
    'JavaScript',
    'React',
    'Kotlin',
    'Android Development',
    'Node.js',
    'Full Stack Development',
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
    </>
  );
}
