import { projects } from '@/data/portfolio';
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

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-2 flex flex-col items-center px-6 py-28 max-md:py-[84px] max-xs:px-4 max-xs:py-16"
    >
      <Reveal>
        <h2 className="mb-10 text-center text-[clamp(28px,5vw,48px)] font-bold max-xs:mb-8 max-xs:text-2xl">
          Projects
        </h2>
      </Reveal>

      {projects.map((p, i) => (
        <Reveal key={p.name} delay={i * 0.15} className="mb-5 flex w-full justify-center">
          <a
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="block w-full max-w-[700px] rounded-2xl border border-white/[0.06] bg-surface-raised p-8 text-inherit no-underline transition-all duration-300 hover:-translate-y-1 hover:border-accent-green/25 hover:shadow-[0_8px_30px_rgba(34,197,94,0.08)] max-md:p-6 max-xs:p-5"
          >
            {/* Header */}
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <h3 className="text-[22px] font-semibold max-md:text-[19px] max-xs:text-[17px]">
                  {p.name}
                </h3>
                {p.date && (
                  <span className="font-mono text-xs text-white/40">{p.date}</span>
                )}
              </div>
              <div className="flex items-center gap-2">
                {p.award && (
                  <span className="rounded-md border border-accent-green/30 bg-accent-green/10 px-2.5 py-1 font-mono text-[11px] text-accent-green max-xs:text-[10px]">
                    🏆 {p.award}
                  </span>
                )}
                <span className="font-mono text-xs text-white/40 transition-colors duration-300 group-hover:text-accent-green">
                  {p.isRepo ? 'View Repo →' : 'View Demo →'}
                </span>
              </div>
            </div>

            {/* Description or Bullets */}
            {p.bullets ? (
              <ul className="mb-4 space-y-2">
                {p.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="flex gap-2 text-sm leading-[1.7] text-white/60 max-xs:text-[13px]"
                  >
                    <span className="text-accent-green/60">›</span>
                    <span>{formatBoldText(bullet)}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mb-4 text-sm leading-[1.7] text-white/60 max-xs:text-[13px]">
                {p.description}
              </p>
            )}

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded bg-white/5 px-2.5 py-[3px] font-mono text-xs text-white/50"
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        </Reveal>
      ))}
    </section>
  );
}
