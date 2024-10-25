import Image from 'next/image';
import { useRef, useState } from 'react';
import { StackList } from '../stackList/StackList';

export const ProjectItem = ({
  glowClass,
  description,
  stack,
  link,
  image,
  repo = false,
  width,
  height,
}: {
  glowClass: string;
  description: string;
  stack: string[];
  link: string;
  image: string;
  repo?: boolean;
  width: number;
  height: number;
}) => {
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
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`w-full max-w-2xl overflow-hidden border-b border-gray-200 transition-colors duration-200 hover:border-yellow-200`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="relative flex h-full w-full items-center justify-between px-2 py-10 text-white xs:px-5 sm:px-10">
        <div className="h-[72px]">
          <Image src={image} width={width} height={height} alt="" />
        </div>
        <a
          href={link}
          rel="noreferrer"
          target="_blank"
          className="rounded-3xl bg-neutral-600 p-3 hover:opacity-70"
        >
          {repo ? 'View Repo' : 'View Demo'}
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
          isOpen ? 'h-72' : 'h-0'
        }`}
      >
        <div
          className={`${glowClass} absolute -bottom-[150px] z-10 h-[300px] w-full max-w-4xl xs:-bottom-[300px] xs:h-[600px]`}
        ></div>
        <div className="z-50 max-w-2xl px-10 text-center text-xl text-white sm:mt-20 md:text-xl">
          {description}
        </div>
        <StackList list={stack} />
      </div>
    </div>
  );
};
