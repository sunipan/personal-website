import type { NextPage } from 'next';
import { Layout } from '../components/layout';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [startSlide, setStartSlide] = useState(false);
  const [startExpand, setStartExpand] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStartSlide(true);
      setTimeout(() => {
        setStartExpand(true);
      }, 1000);
    }, 500);
  }, []);

  return (
    <>
      <Layout className="min-h-screen bg-[#1a1a1a]">
        <div className="flex justify-center pt-32">
          <div className="flex flex-row items-center justify-center">
            <div
              className={`${
                startSlide ? 'slide-right' : 'hidden'
              } mr-1 flex w-6 shrink-0 items-center text-gray-200 xs:w-[30px] md:w-10 lg:w-16`}
            >
              <Image
                src="https://assets.website-files.com/6319f69c5ef0f35ae3db6df0/632daaeebefab079d1a60937_Left%20Arrow.svg"
                priority
                width={58}
                height={81}
                alt=""
              />
            </div>
            <div className="bar-slide flex w-[40px] shrink-0 justify-center text-[60px] font-bold">
              <div className="h-[70px] w-[6px] rounded-sm bg-gradient-to-t from-blue-500 to-red-500 md:h-[122px] md:w-[12px]"></div>
            </div>
            <div
              className={`expand-section ${
                !startExpand && 'hidden'
              } w-full overflow-hidden whitespace-nowrap text-center text-white`}
            >
              <h1 className="text-[42px] leading-none xs:text-[58px] md:text-[70px] lg:text-[123px]">
                Sebi Unipan
              </h1>
            </div>
            <div
              className={`${
                startSlide ? 'slide-left' : 'hidden'
              } ml-2 flex w-6 shrink-0 items-center text-gray-200 xs:w-[30px] md:w-10 lg:w-16`}
            >
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
      </Layout>
    </>
  );
};

export default Home;
