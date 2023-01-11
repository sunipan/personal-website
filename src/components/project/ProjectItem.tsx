import Image from 'next/image';
import { useRef, useState } from 'react';
import { StackList } from '../stackList/StackList';

export const ProjectItem = () => {
  /* State */
  const [isHover, setIsHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  /* Hooks */
  const dropdownRef = useRef<HTMLDivElement>(null);

  /* Handlers */
  const handleEnter = () => {
    setIsHover(true);
  };

  const handleLeave = () => {
    setIsHover(false);
  };

  const handleClick = () => {
    if (!isOpen) {
      setTimeout(() => {
        dropdownRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 200);
    }
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`w-full max-w-2xl overflow-hidden border-b border-gray-200 transition-colors duration-200 hover:border-yellow-200`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="relative flex h-full w-full items-center justify-between px-2 py-10 text-white xs:px-5 sm:px-10">
        <div className="h-[43.2px]">
          <Image src="/assets/pharmapal.svg" width={195} height={43.2} alt="" />
        </div>
        <a
          href="https://cosc-499-winner.vercel.app/"
          rel="noreferrer"
          target="_blank"
          className="rounded-3xl bg-neutral-600 p-3 hover:opacity-70"
        >
          View Demo
        </a>
        <div className="absolute inset-x-0 bottom-5 right-0 flex h-5 w-full justify-center">
          <svg
            onClick={handleClick}
            className={`h-5 w-5 transition duration-200 ${isOpen && 'rotate-180'} ${
              isHover && 'animate-pulse'
            } cursor-pointer invert hover:opacity-70`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </div>
      </div>
      <div
        ref={dropdownRef}
        className={`relative flex w-full flex-col items-center justify-around overflow-hidden transition-all duration-500 ${
          isOpen ? 'h-96' : 'h-0'
        } bg-gradient-to-t from-[#45C486] to-transparent`}
      >
        <div className="absolute -bottom-[400px] z-10 h-[800px] w-screen max-w-4xl bg-gradient-radial from-[#45C486] via-transparent to-transparent"></div>
        <div className="z-50 mt-20 max-w-2xl px-10 text-center text-xl text-white md:text-xl">
          An intuitive web app for assisting users with picking the right over-the-counter medicine
          for their exact symptoms
        </div>
        <StackList list={['React', 'Next.js', 'Tailwind CSS', 'MongoDB', 'Node.js']} />
      </div>
    </div>
  );
};
