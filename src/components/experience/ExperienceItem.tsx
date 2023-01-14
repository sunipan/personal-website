import Image from 'next/image';
import { ExperienceProps } from './ExperienceProps.types';

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
  headerText,
  project,
  role,
  description,
  date,
}: ExperienceProps) => {
  return (
    <div className="experience relative flex h-[120vh] w-full flex-col items-center justify-center overflow-hidden bg-dark text-3xl text-white xs:h-screen">
      <div className="mb-5 w-full py-3 text-center text-xl opacity-70 sm:text-lg">{date}</div>
      <div className="z-50 flex flex-col items-center justify-center pb-36 xs:pb-0">
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
          <h4
            className={`max-w-2xl text-center text-lg font-medium sm:text-xl md:text-2xl ${
              underlined && 'underline underline-offset-8'
            } ${project && 'mt-20'}`}
          >
            {headerText}
          </h4>
          <div className={childWrapperClass}>{children}</div>
        </div>
      </div>
      <div
        className={`absolute inset-x-0 bottom-0 h-2/3 w-full bg-gradient-to-t from-[${gradientColour}] to-transparent`}
      ></div>
    </div>
  );
};
