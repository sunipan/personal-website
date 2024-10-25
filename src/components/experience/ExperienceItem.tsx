import Image from 'next/image';
import { cn } from '../../lib/utils';
import { ExperienceProps } from './ExperienceItem.types';

export const ExperienceItem = ({
  width,
  height,
  src,
  gradientColour,
  imageBg,
  children,
  title,
  href,
  childWrapperClass,
  underlined,
  project,
  role,
  description,
  date,
  id,
}: ExperienceProps) => {
  return (
    <div
      id={id}
      className="experience relative flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden bg-dark text-3xl text-white xs:h-screen"
    >
      <div className="mb-5 w-full py-3 text-center text-xl opacity-70 sm:text-lg">{date}</div>
      <div className="z-50 flex flex-col items-center justify-center xs:pb-0">
        <div
          className={`flex h-52 w-52 items-center justify-center rounded-full ${
            imageBg || 'bg-white'
          }`}
        >
          <Image src={src} width={width} height={height} alt="" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <a
            href={href}
            rel="noreferrer"
            target="_blank"
            className="flex flex-row items-center justify-center gap-3 pt-3 transition-all duration-200 hover:opacity-70"
          >
            <h3 className="text-center text-2xl font-medium text-white sm:text-3xl">{title}</h3>
            <Image
              className="invert"
              src="/assets/icons/newtab.png"
              height={20}
              width={20}
              alt=""
            />
          </a>
          <div className="w-full py-3 text-center text-base font-medium italic opacity-70 sm:text-lg">
            {role}
          </div>
          <p className="max-w-2xl px-5 text-center text-base sm:text-lg md:text-xl">
            {description}
          </p>
          <div className={childWrapperClass}>{children}</div>
        </div>
      </div>
      <div
        className={cn(
          'absolute inset-x-0 bottom-0 h-2/3 w-full bg-gradient-to-t to-transparent',
          `from-[${gradientColour}]`,
        )}
      ></div>
    </div>
  );
};
