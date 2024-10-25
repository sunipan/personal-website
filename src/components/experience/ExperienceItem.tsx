import Image from 'next/image';
import { getUniqueId } from '../../lib/utils';
import { ExperienceProps } from './ExperienceItem.types';

const gradientColors = {
  rave: 'from-[#f9f9f9]',
  rentalhunt: 'from-[#5258ec]',
  minga: 'from-[#1c2f59]',
  atomic47: 'from-[#1cb0ac]',
  jusaves: 'from-[#f8935b]',
};

const bgColors = {
  rave: 'bg-white',
  rentalhunt: 'bg-white',
  minga: 'bg-[#1c2f59]',
  atomic47: 'bg-white',
  jusaves: 'bg-white',
};

export const ExperienceItem = ({
  width,
  height,
  src,
  bulletPoints,
  companyName,
  companyKey,
  href,
  jobTitle,
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
          className={`flex h-52 w-52 items-center justify-center overflow-hidden rounded-full ${bgColors[companyKey]}`}
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
            <h3 className="text-center text-2xl font-medium text-white sm:text-3xl">
              {companyName}
            </h3>
            <Image
              className="invert"
              src="/assets/icons/newtab.png"
              height={20}
              width={20}
              alt=""
            />
          </a>
          <div className="w-full py-3 text-center text-base font-medium italic opacity-70 sm:text-lg">
            {jobTitle}
          </div>
          <div className="flex justify-center px-10">
            <ul className="flex max-w-md list-disc flex-col gap-5 pt-2 text-sm sm:text-lg">
              {bulletPoints.map((bulletPoint) => (
                <li key={getUniqueId()}>{bulletPoint}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`absolute inset-x-0 bottom-0 h-2/3 w-full bg-gradient-to-t ${gradientColors[companyKey]} to-transparent`}
      ></div>
    </div>
  );
};
