import { experiences } from '@/data/portfolio';
import { Reveal } from '@/components/reveal/Reveal';

// Parse text with **bold** markers into React elements
function formatBoldText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-white/90">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative z-2 flex flex-col items-center px-6 py-28 max-md:py-[84px] max-xs:px-4 max-xs:py-16"
    >
      <Reveal>
        <h2 className="mb-10 text-center text-[clamp(28px,5vw,48px)] font-bold max-xs:mb-8 max-xs:text-2xl">
          Experience
        </h2>
      </Reveal>

      <div className="relative w-full max-w-[700px] pl-10 max-md:pl-8 max-xs:pl-6">
        {/* Timeline line */}
        <div className="timeline-gradient absolute bottom-0 left-3.5 top-0 w-0.5 max-md:left-2.5 max-xs:left-1.5" />

        {experiences.map((exp, i) => (
          <Reveal key={exp.company} delay={i * 0.12}>
            <div className="relative mb-9 max-xs:mb-9">
              {/* Timeline dot */}
              <div
                className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-surface max-md:-left-[26px] max-md:h-2.5 max-md:w-2.5 max-xs:-left-[21px] max-xs:h-2 max-xs:w-2"
                style={{
                  background: exp.color,
                  boxShadow: `0 0 10px ${exp.color}66`,
                }}
              />

              {/* Date & location */}
              <div className="mb-1 font-mono text-xs text-white/40 max-xs:text-[11px]">
                {exp.date} · {exp.location}
              </div>

              {/* Company name */}
              <h3 className="mb-0.5 text-[22px] font-semibold max-md:text-[19px] max-xs:text-[17px]">
                {exp.company}
              </h3>

              {/* Role */}
              <div className="mb-3 text-sm italic text-white/50 max-xs:text-[13px]">
                {exp.role}
              </div>

              {/* Tech tags */}
              <div className="mb-3 flex flex-wrap gap-1.5">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-accent-blue/20 bg-accent-blue/10 px-2 py-0.5 font-mono text-[11px] text-accent-blue max-xs:text-[10px]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Bullets */}
              <ul className="m-0 list-none p-0">
                {exp.bullets.map((b, bi) => (
                  <li
                    key={bi}
                    className="relative mb-1.5 pl-4 text-sm leading-[1.7] text-white/65 max-md:text-[13px] max-xs:text-xs max-xs:leading-[1.6]"
                  >
                    <span className="absolute left-0 text-white/25">›</span>
                    {formatBoldText(b)}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
