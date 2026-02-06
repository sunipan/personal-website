import { personal } from '@/data/portfolio';
import { Reveal } from '@/components/reveal/Reveal';

export function EducationSection() {
  const { education } = personal;

  return (
    <section
      id="education"
      className="relative z-2 flex flex-col items-center px-6 py-28 max-md:py-[84px] max-xs:px-4 max-xs:py-16"
    >
      <Reveal>
        <h2 className="mb-10 text-center text-[clamp(28px,5vw,48px)] font-bold max-xs:mb-8 max-xs:text-2xl">
          Education
        </h2>
      </Reveal>

      <Reveal delay={0.15} className="w-full max-w-[700px]">
        <div className="rounded-2xl border border-white/[0.06] bg-surface-raised p-8 max-md:p-6 max-xs:p-5">
          {/* Header */}
          <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
            <div>
              <h3 className="text-[22px] font-semibold max-md:text-[19px] max-xs:text-[17px]">
                {education.school}
              </h3>
              <p className="mt-1 text-sm text-white/60">{education.degree}</p>
            </div>
            <div className="text-right">
              <span className="font-mono text-sm text-white/40">
                Graduated {education.graduated}
              </span>
              <p className="mt-1 font-mono text-sm font-medium text-accent-green">
                GPA: {education.gpa}
              </p>
            </div>
          </div>

          {/* Award */}
          <div className="flex items-start gap-2 text-sm text-white/60">
            <span className="text-accent-amber">🏅</span>
            <div>
              <span className="text-white/80">{education.award}</span>
              {education.awardDetail && (
                <span className="text-white/40"> — {education.awardDetail}</span>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
