'use client';

import { useEffect, useState } from 'react';

const sections = ['Home', 'Skills', 'Experience', 'Education', 'Projects', 'Contact'];

export function NavDots() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sectionEls = sections.map((s) => document.getElementById(s.toLowerCase()));
      const scrollY = window.scrollY + window.innerHeight * 0.35;

      const nearBottom =
        window.scrollY + window.innerHeight >= document.body.scrollHeight - 100;
      if (nearBottom) {
        setActive(sections.length - 1);
        return;
      }

      let current = 0;
      for (let i = 0; i < sectionEls.length; i++) {
        const el = sectionEls[i];
        if (el && el.offsetTop <= scrollY) {
          current = i;
        }
      }
      setActive(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
