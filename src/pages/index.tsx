/* eslint-disable react/jsx-no-comment-textnodes */
import type { NextPage } from 'next';
import { Layout } from '../components/layout';
import { Header } from '../components/header/Header';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef } from 'react';
import { useIsomorphicLayoutEffect } from '../lib/helpers/useIsomorphicLayoutEffect';

gsap.registerPlugin(ScrollTrigger);

const Home: NextPage = () => {
  /* State */
  const main = useRef<HTMLDivElement>(null);
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hello', {
        opacity: 0,
        y: 40,
        duration: 1,
        smoothOrigin: true,
      });
      gsap.set('.card', { transformStyle: 'preserve-3d', perspective: 1000 });
      const q = gsap.utils.selector('.skills');
      const front = q('.front');
      const back = q('.back');
      gsap.set(back, { rotationX: -180 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.skills',
            start: 'top top',
            scrub: true,
            pin: true,
          },
          smoothChildTiming: true,
        })
        .to(front, { duration: 1, rotationX: 180 })
        .to(back, { duration: 1, rotationX: 0 }, 0)
        .to('.skills', { z: 50 }, 0)
        .to('.skills', { z: 0 }, 0.5);
    }, main);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Layout className="flex min-h-screen flex-col items-center justify-center bg-dark">
        <Header
          title="Developer"
          commentStyle
          description="I'm a creative, passionate, and curious Full Stack developer who loves to learn new things"
        />
        <div ref={main} className="flex flex-col">
          <div className="flex justify-center">
            <div className="hello max-w-4xl p-7">
              <h1 className="x:text-[28px] mb-5 text-[26px] font-bold text-white md:text-[40px] lg:text-[52px]">
                Hi, I&apos;m Sebi Unipan 👋
              </h1>
              <div className={`rounded-xl bg-light p-5 text-green-600`}>
                <div className="mb-3 flex flex-row gap-3">
                  <div className="h-[14px] w-[14px] cursor-pointer rounded-full bg-[#FF5F56] transition duration-200 ease-linear hover:opacity-70 hover:opacity-70"></div>
                  <div className="h-[14px] w-[14px] cursor-pointer rounded-full bg-[#FFBD2E] transition duration-200 ease-linear hover:opacity-70 hover:opacity-70"></div>
                  <div className="h-[14px] w-[14px] cursor-pointer rounded-full bg-[#27C93F] transition duration-200 ease-linear hover:opacity-70"></div>
                </div>
                <div className="border-b-2 border-dark pt-2"></div>
                <div>
                  <div className="code-font pb-text-base pt-5 text-left xs:text-lg md:text-[24px]">
                    <div>/*</div>I code for fun, trying the same things in different ways and
                    different things the same way. Knowing how things tick is what I love the most.
                    I&apos;m always looking for new challenges.
                    <div>*/</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="skills h-screen w-full max-w-4xl pt-[140px] pb-20">
            <div className="text-center text-2xl text-white">I can do</div>
            <div className="card relative h-full w-full">
              <div className="backface-hidden front absolute inset-0 m-7">
                <div className="h-full rounded-xl bg-white p-5">
                  <div className="mb-3 flex flex-row gap-3">
                    <div className="h-[14px] w-[14px] cursor-pointer rounded-full bg-[#FF5F56] transition duration-200 ease-linear hover:opacity-70 hover:opacity-70"></div>
                    <div className="h-[14px] w-[14px] cursor-pointer rounded-full bg-[#FFBD2E] transition duration-200 ease-linear hover:opacity-70 hover:opacity-70"></div>
                    <div className="h-[14px] w-[14px] cursor-pointer rounded-full bg-[#27C93F] transition duration-200 ease-linear hover:opacity-70"></div>
                  </div>
                  <div className="border-b-2 border-gray-200 pt-2"></div>
                  <div className="flex h-full flex-col items-center justify-center pb-7">
                    <h1 className="w-full pt-2 text-center text-4xl font-bold">Front End</h1>
                    <div className="pb-text-base max-w-lg pt-5 text-center xs:text-lg md:text-[24px]">
                      I have years of experience building applications with React, HTML, and CSS. I
                      can quickly build and design UIs that are meaningful, engaging, and optimized.
                    </div>
                  </div>
                </div>
              </div>
              <div className="backface-hidden back absolute inset-0 m-7">
                <div className="h-full rounded-xl bg-light p-5 text-white">
                  <div className="mb-3 flex flex-row gap-3">
                    <div className="h-[14px] w-[14px] cursor-pointer rounded-full bg-[#FF5F56] transition duration-200 ease-linear hover:opacity-70 hover:opacity-70"></div>
                    <div className="h-[14px] w-[14px] cursor-pointer rounded-full bg-[#FFBD2E] transition duration-200 ease-linear hover:opacity-70 hover:opacity-70"></div>
                    <div className="h-[14px] w-[14px] cursor-pointer rounded-full bg-[#27C93F] transition duration-200 ease-linear hover:opacity-70"></div>
                  </div>
                  <div className="border-b-2 border-dark pt-2"></div>
                  <div className="flex h-full flex-col items-center justify-center pb-7">
                    <h1 className="w-full pt-2 text-center text-4xl font-bold">Back End</h1>
                    <div className="pb-text-base max-w-lg pt-5 text-center xs:text-lg md:text-[24px]">
                      Skilled in Node.js backends utilizing frameworks like NestJS and Next.js. Can
                      fully utilize either relational or non-relational databases into a smooth
                      RESTful API.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
