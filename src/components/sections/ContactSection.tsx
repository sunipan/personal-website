import { personal } from '@/data/portfolio';
import { Reveal } from '@/components/reveal/Reveal';

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative z-2 flex flex-col items-center justify-center px-6 py-28 pb-[200px] text-center max-xs:px-4 max-xs:py-16"
    >
      <Reveal>
        <h2 className="mb-10 text-center text-[clamp(28px,5vw,48px)] font-bold max-xs:mb-8 max-xs:text-2xl">
          Let&apos;s Connect
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mb-8 max-w-[400px] text-base leading-[1.7] text-white/50 max-xs:text-sm">
          My inbox is always open — whether you have an opportunity, a question, or just want to say
          hi.
        </p>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${personal.email}`}
            className="gradient-cta rounded-[10px] px-8 py-3.5 text-[15px] font-semibold text-white no-underline shadow-[0_4px_20px_rgba(59,130,246,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(59,130,246,0.4)] max-xs:px-7 max-xs:py-3 max-xs:text-sm"
          >
            Say Hello
          </a>
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-[10px] border border-white/20 bg-transparent px-8 py-3.5 font-mono text-[15px] font-semibold text-white/60 no-underline transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-blue hover:text-white hover:shadow-[0_4px_20px_rgba(59,130,246,0.15)] max-xs:px-7 max-xs:py-3 max-xs:text-sm"
          >
            View Resume
          </a>
        </div>
      </Reveal>

      <p className="mt-12 font-mono text-xs text-white/20">© 2026 {personal.name}</p>
    </section>
  );
}
