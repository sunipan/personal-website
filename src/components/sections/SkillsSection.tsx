'use client';

import { skills } from '@/data/portfolio';
import { Reveal } from '@/components/reveal/Reveal';

const skillCategories = [
  { title: 'Languages', items: skills.languages, color: '#3b82f6' },
  { title: 'Frameworks', items: skills.frameworks, color: '#ef4444' },
  { title: 'Tools', items: skills.tools, color: '#22c55e' },
  { title: 'Concepts', items: skills.concepts, color: '#f59e0b' },
] as const;

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative z-2 flex flex-col items-center px-6 py-28 max-md:py-[84px] max-xs:px-4 max-xs:py-16"
    >
      <Reveal>
        <h2 className="mb-10 text-center text-[clamp(28px,5vw,48px)] font-bold max-xs:mb-8 max-xs:text-2xl">
          Skills &amp; Expertise
        </h2>
      </Reveal>

      <div className="grid w-full max-w-[1000px] grid-cols-2 gap-6 max-md:grid-cols-1 max-md:gap-4 max-xs:gap-3">
        {skillCategories.map(({ title, items, color }, gi) => (
          <Reveal key={title} delay={gi * 0.1} className="h-full max-md:h-auto">
            <div
              className="h-full rounded-2xl border border-white/[0.06] bg-surface-raised p-7 transition-all duration-300 hover:-translate-y-1 max-md:p-5 max-xs:p-4"
              style={{
                ['--accent' as string]: color,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${color}44`;
                e.currentTarget.style.boxShadow = `0 8px 30px ${color}11`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <h3
                className="mb-4 font-mono text-[13px] uppercase tracking-[2px] max-xs:mb-3 max-xs:text-[11px]"
                style={{ color }}
              >
                {title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border px-3 py-[5px] text-[13px] text-white/70 max-xs:px-2 max-xs:py-[3px] max-xs:text-[11px]"
                    style={{
                      background: `${color}11`,
                      borderColor: `${color}22`,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
