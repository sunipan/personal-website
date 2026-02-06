'use client';

const sections = ['Home', 'Skills', 'Experience', 'Projects', 'Contact'];

type NavDotsProps = {
  active: number;
};

export function NavDots({ active }: NavDotsProps) {
  return (
    <nav className="fixed right-20 top-1/2 z-[100] hidden -translate-y-1/2 flex-col items-end gap-4 lg:flex">
      {sections.map((s, i) => (
        <a
          key={s}
          href={`#${s.toLowerCase()}`}
          className="flex cursor-pointer items-center gap-2.5 no-underline"
        >
          <span
            className="font-mono text-[11px] uppercase tracking-[1px] transition-colors duration-300"
            style={{ color: active === i ? '#fff' : 'rgba(255,255,255,0.3)' }}
          >
            {s}
          </span>
          <span
            className="rounded-full transition-all duration-300"
            style={{
              width: active === i ? 12 : 8,
              height: active === i ? 12 : 8,
              background:
                active === i
                  ? 'linear-gradient(135deg, #3b82f6, #ef4444)'
                  : 'rgba(255,255,255,0.2)',
              boxShadow: active === i ? '0 0 12px rgba(59,130,246,0.5)' : 'none',
            }}
          />
        </a>
      ))}
    </nav>
  );
}

export { sections };
