'use client';

export function HeroAnimation() {
  return (
    <div className="mb-6 flex items-center justify-center">
      {/* Left chevron < */}
      <div className="mr-[clamp(2px,0.3vw,4px)] shrink-0 animate-chevron-left text-white/15 opacity-0 blur-[6px]">
        <svg
          viewBox="0 0 58 81"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-auto w-[clamp(24px,5vw,58px)]"
        >
          <path
            d="M52 6L10 40.5L52 75"
            stroke="currentColor"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Gradient bar — starts |, rotates to / */}
      <div className="flex w-[clamp(30px,4vw,50px)] shrink-0 animate-bar-slide justify-center">
        <div className="gradient-bar h-[clamp(60px,10vw,125px)] w-[clamp(6px,0.8vw,12px)] animate-bar-glow rounded-[3px]" />
      </div>

      {/* Title — width:0 expands to push > outward */}
      <div className="w-0 animate-title-expand overflow-hidden whitespace-nowrap opacity-0">
        <h1 className="m-0 px-[0.1em] py-[0.15em] text-[clamp(42px,8vw,123px)] font-medium leading-none text-white">
          Sebi Unipan
        </h1>
      </div>

      {/* Right chevron > */}
      <div className="ml-[clamp(2px,0.3vw,4px)] shrink-0 animate-chevron-right text-white/15 opacity-0 blur-[6px]">
        <svg
          viewBox="0 0 58 81"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-auto w-[clamp(24px,5vw,58px)]"
        >
          <path
            d="M6 6L48 40.5L6 75"
            stroke="currentColor"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
