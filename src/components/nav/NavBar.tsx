import Link from 'next/link';
import { useNameTyping } from '../../lib/useNameTyping';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export const NavBar = () => {
  /* State */
  const [showDropdown, setShowDropdown] = useState(false);
  const [navHasBeenClicked, setNavHasBeenClicked] = useState(false);

  /* Hooks */
  const name = useNameTyping();
  const navRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  /* Lifecycle */
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  /* Handlers */
  const handleClickOutside = (e: { target: any }) => {
    if (!navRef.current?.contains(e.target) && !buttonRef.current?.contains(e.target)) {
      if (showDropdown) setShowDropdown(false);
    }
  };

  const handleClickDropdown = () => {
    setShowDropdown(!showDropdown);
    setNavHasBeenClicked(true);
  };

  return (
    <nav className="fixed top-0 z-50 w-full">
      <div className="relative z-50 flex h-16 w-full flex-row items-center justify-between bg-[#1a1a1a] px-10 text-white">
        <div className="text-2xl hover:text-yellow-200">
          <Link href="/">
            <a>
              <span>
                <span className="text-white">$&nbsp;</span>
                {name}
              </span>
              <span className="blinker font-bold text-white">_</span>
            </a>
          </Link>
        </div>
        <div className="flex items-center justify-center lg:hidden">
          <button ref={buttonRef} onClick={handleClickDropdown}>
            <Image src="/assets/menu.svg" width={30} height={30} alt="" />
          </button>
        </div>
        <div className="code-font hidden flex-row justify-around gap-10 text-lg lg:flex">
          <Link href="/work">
            <a>
              <div className="hover-underline-animation hover:text-yellow-200">Work</div>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <div className="hover-underline-animation hover:text-yellow-200">About</div>
            </a>
          </Link>
          <Link href="/contact">
            <a>
              <div className="hover-underline-animation hover:text-yellow-200">Contact</div>
            </a>
          </Link>
        </div>
      </div>
      <div
        ref={navRef}
        className={`${
          showDropdown ? 'slide-down' : navHasBeenClicked ? 'slide-up' : 'hidden'
        } code-font relative z-10 flex w-full flex-col items-center justify-center gap-6 overflow-hidden bg-[#202020] py-5 text-white`}
      >
        <Link href="/work">
          <a className="hover:text-yellow-200">Work</a>
        </Link>
        <Link href="/about">
          <a className="hover:text-yellow-200">About</a>
        </Link>
        <Link href="/contact">
          <a className="hover:text-yellow-200">Contact</a>
        </Link>
      </div>
    </nav>
  );
};
