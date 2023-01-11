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
}: ExperienceProps) => {
  return (
    <div className="experience relative flex h-[120vh] w-full items-center justify-center overflow-hidden bg-dark text-3xl text-white xs:h-screen">
      <div className="z-50 flex flex-col items-center justify-center">
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
            className="flex flex-row items-center justify-center gap-3 pt-3 hover:opacity-70"
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
          <div className="w-full py-3 text-center text-base italic opacity-70 sm:text-lg">
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
        className={`bg-gradient-to-t absolute inset-x-0 bottom-0 h-2/3 w-full from-[${gradientColour}] to-transparent`}
      ></div>
    </div>
  );
};
