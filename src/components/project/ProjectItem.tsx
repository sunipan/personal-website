import Image from 'next/image';
import { useState } from 'react';

export const ProjectItem = () => {
  const [isHover, setIsHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
      className={`w-full border-b border-gray-200 transition-colors duration-200 hover:border-yellow-200`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="relative flex h-full w-full items-center justify-between px-2 py-10 text-white xs:px-5 sm:px-10">
        <div className="h-[43.2px]">
          <Image src="/assets/rh-logo2.png" width={195} height={43.2} alt="" />
        </div>
        <button className="rounded-3xl bg-neutral-600 p-3 hover:opacity-70">View Demo</button>
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
        className={`w-full transition-all duration-500 ${
          isOpen ? 'h-96' : 'h-0'
        } bg-gradient-to-t from-[#5258ec] to-transparent`}
      ></div>
    </div>
  );
};
