import Image from 'next/image';
import type { HeaderProps } from './Header.types';

export const Header = ({ title, description, commentStyle }: HeaderProps) => {
  return (
    <div className="z-10 mt-16 flex h-[60vh] flex-col items-center justify-center">
      <div>
        <div className="flex flex-row items-center justify-center">
          <div className="slide-right flex w-6 shrink-0 items-center text-gray-200 opacity-0 xs:mr-1 xs:w-[30px] md:mr-2 md:w-10 lg:w-16">
            <Image
              src="https://assets.website-files.com/6319f69c5ef0f35ae3db6df0/632daaeebefab079d1a60937_Left%20Arrow.svg"
              priority
              width={58}
              height={81}
              alt=""
            />
          </div>
          <div className="bar-slide flex w-[30px] shrink-0 justify-center font-bold md:w-[40px] lg:w-[50px]">
            <div className="h-[60px] w-[6px] rounded-sm bg-gradient-to-t from-blue-500 to-red-500 xs:h-[70px] md:h-[100px] md:w-[12px] lg:h-[125px]"></div>
          </div>
          <div className="expand-section w-0 overflow-hidden whitespace-nowrap text-center text-white opacity-0">
            <h1 className="py-5 px-3 text-[42px] leading-none xs:text-[58px] md:text-[70px] lg:text-[123px]">
              {title}
            </h1>
          </div>
          <div className="slide-left ml-1 flex w-6 shrink-0 items-center text-gray-200 opacity-0 xs:ml-2 xs:w-[30px] md:ml-3 md:w-10 lg:w-16">
            <Image
              src="https://assets.website-files.com/6319f69c5ef0f35ae3db6df0/632daaee60c8d7bfd8830029_Left%20Arrow-1.svg"
              priority
              alt=""
              width={58}
              height={81}
            />
          </div>
        </div>
      </div>
      <div className="comment-slide my-5 flex w-60 justify-center text-center opacity-0 xs:w-full xs:max-w-sm xs:text-[22px] md:max-w-lg md:text-2xl lg:max-w-2xl">
        {commentStyle ? (
          <h5 className="w-full text-green-500">{`/* ${description} */`}</h5>
        ) : (
          <h5 className="w-full text-white">{description}</h5>
        )}
      </div>
      <div className="comment-slide flex flex-row items-center justify-center gap-5 pt-4 opacity-0">
        <div className="h-10 w-10 cursor-pointer overflow-hidden rounded-full bg-blue-500 p-2 transition-all duration-200 hover:opacity-70">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/sebi-unipan/"
            className="h-full w-full"
          >
            <Image
              className="invert"
              src="/assets/linkedin.svg"
              width={80}
              height={80}
              alt="linkedin"
            />
          </a>
        </div>
        <div className="h-10 w-10 cursor-pointer overflow-hidden rounded-full transition-all duration-200 hover:opacity-70">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/sunipan"
            className="h-full w-full"
          >
            <Image
              className="invert"
              src="/assets/github.svg"
              width={80}
              height={80}
              alt="linkedin"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
