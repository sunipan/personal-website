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
    gsap.set('.skills', { transformStyle: 'preserve-3d', perspective: 1000 });
    const ctx = gsap.context(() => {
      gsap.from('.hello', {
        opacity: 0,
        y: 40,
        duration: 1,
        smoothOrigin: true,
      });
      gsap.to('.skills', {
        duration: 1,
        rotationX: 180,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '.skills',
          pin: true,
          scrub: true,
          start: 'top top',
          end: 'bottom bottom',
          markers: true,
        },
      });
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
        <div ref={main}>
          <div className="flex justify-center">
            <div className="hello max-w-4xl p-7">
              <h1 className="mb-5 text-[26px] font-bold text-white xs:text-[28px] md:text-[40px] lg:text-[52px]">
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
        </div>
        <div className="skills relative h-96 w-96 bg-gray-200">
          <div className="backface-hidden absolute h-full w-full bg-blue-500">hello</div>
          <div className="backface-hidden absolute h-full w-full bg-red-500">goodbye</div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
