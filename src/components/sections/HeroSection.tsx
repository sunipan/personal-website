import { personal } from '@/data/portfolio';
import { HeroAnimation } from '@/components/hero-animation/HeroAnimation';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative z-2 flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <HeroAnimation />

      {/* Tagline */}
      <p className="mb-2 animate-fade-up-late font-mono text-[clamp(14px,2vw,20px)] text-accent-green opacity-0">
        {`/* ${personal.tagline} */`}
      </p>

      {/* Social links */}
      <div className="mt-2 grid animate-fade-up-later grid-cols-4 justify-center gap-3 opacity-0 max-md:grid-cols-2 max-md:gap-2.5">
        <a
          href={personal.linkedin}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 whitespace-nowrap rounded-lg border border-white/15 px-5 py-2.5 font-mono text-[13px] tracking-[0.5px] text-white/60 transition-all duration-300 hover:border-accent-blue hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] max-md:px-4 max-md:py-2 max-md:text-xs"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="shrink-0 opacity-60 transition-opacity duration-300 group-hover:opacity-100"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          LinkedIn
        </a>
        <a
          href={personal.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 whitespace-nowrap rounded-lg border border-white/15 px-5 py-2.5 font-mono text-[13px] tracking-[0.5px] text-white/60 transition-all duration-300 hover:border-accent-blue hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] max-md:px-4 max-md:py-2 max-md:text-xs"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="shrink-0 opacity-60 transition-opacity duration-300"
          >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
          GitHub
        </a>
        <a
          href={`mailto:${personal.email}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 whitespace-nowrap rounded-lg border border-white/15 px-5 py-2.5 font-mono text-[13px] tracking-[0.5px] text-white/60 transition-all duration-300 hover:border-accent-blue hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] max-md:px-4 max-md:py-2 max-md:text-xs"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0 opacity-60 transition-opacity duration-300"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M22 4L12 13 2 4" />
          </svg>
          Email
        </a>
        <a
          href={personal.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 whitespace-nowrap rounded-lg border border-accent-blue/30 px-5 py-2.5 font-mono text-[13px] tracking-[0.5px] text-accent-blue transition-all duration-300 hover:bg-accent-blue/[0.08] max-md:px-4 max-md:py-2 max-md:text-xs"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0 opacity-60 transition-opacity duration-300"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
          Resume
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 flex animate-fade-up-latest flex-col items-center gap-2 opacity-0 max-xs:bottom-6">
        <span className="font-mono text-[11px] uppercase tracking-[2px] text-white/30">
          Scroll
        </span>
        <div className="h-10 w-px animate-scroll-pulse bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
