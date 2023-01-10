/* eslint-disable react/jsx-no-comment-textnodes */
import type { NextPage } from 'next';
import { Layout } from '../components/layout';
import { Header } from '../components/header/Header';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef } from 'react';
import { useIsomorphicLayoutEffect } from '../lib/helpers/useIsomorphicLayoutEffect';
import { Terminal } from '../components/terminal/Terminal';
import { ProjectListItem } from '../components/projectsList/ProjectListItem';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const Home: NextPage = () => {
  /* State */
  const main = useRef<HTMLDivElement>(null);
  useIsomorphicLayoutEffect(() => {
    // For animating the first terminal
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

      // For flipping card
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

      // For pinning projects
      gsap.utils.toArray('.project').forEach((project, i) => {
        ScrollTrigger.create({
          trigger: project as gsap.DOMTarget,
          start: 'top top',
          end: i == 2 ? 'top top' : 'bottom 64px',
          // snap: 1,
          pin: true,
          pinSpacing: false,
        });
      });
    }, main);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Layout className="flex min-h-screen flex-col items-center justify-center bg-dark">
        <Header
          title="Full Stack Dev"
          commentStyle
          description="I'm a creative, passionate, and curious Full Stack developer who loves to learn new things"
        />
        <div ref={main} className="flex flex-col">
          <div className="flex justify-center">
            <div className="hello max-w-4xl p-7">
              <h1 className="x:text-[28px] mb-5 text-[26px] font-bold text-white md:text-[40px] lg:text-[52px]">
                Hi, I&apos;m Sebi Unipan 👋
              </h1>
              <Terminal
                className="rounded-xl bg-light p-5 text-green-600"
                bodyClassName="code-font text-base pt-5 text-left xs:text-lg md:text-[24px]"
                variant="dark"
              >
                <div>/*</div>I code for work, school, and for fun. I like to try the same things in
                different ways and try different things in the same way. Knowing how things tick is
                what I love the most and I&apos;m always looking for new challenges.
                <div>*/</div>
              </Terminal>
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
                  <div className="flex h-full flex-col items-center justify-center gap-10 pb-7">
                    <h1 className="w-full pt-2 text-center text-4xl font-bold">Front End</h1>
                    <div className="pb-text-base max-w-lg pt-5 text-center font-medium xs:text-lg md:text-[24px]">
                      With a Bachelor&apos;s Degree in Computer Science and 2 years of experience
                      building various applications, I can quickly build and design UIs that are
                      meaningful, engaging, and optimized.
                    </div>
                  </div>
                </div>
              </div>
              <div className="backface-hidden back absolute inset-0 m-7">
                <div className="h-full rounded-xl bg-light p-5 text-white">
                  <div className="mb-3 flex flex-row gap-3">
                    <div className="h-[14px] w-[14px] cursor-pointer rounded-full bg-[#FF5F56] transition duration-200 ease-linear hover:opacity-70 hover:opacity-70"></div>
                    <div className="hver:opacity-70 h-[14px] w-[14px] cursor-pointer rounded-full bg-[#FFBD2E] transition duration-200 ease-linear hover:opacity-70"></div>
                    <div className="h-[14px] w-[14px] cursor-pointer rounded-full bg-[#27C93F] transition duration-200 ease-linear hover:opacity-70"></div>
                  </div>
                  <div className="border-b-2 border-dark pt-2"></div>
                  <div className="flex h-full flex-col items-center justify-center gap-10 pb-7">
                    <h1 className="w-full text-center text-4xl font-bold">Back End</h1>
                    <div className="pb-text-base max-w-lg pt-5 text-center xs:text-lg md:text-[24px]">
                      Being skilled in Node.js backends, I can utilize both serverless or hosted
                      backends paired with either relational or non-relation databases to build
                      robust RESTful APIs.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-20 pt-[100vh] text-center font-medium">
            <h3 className="text-3xl text-white">Featured Work</h3>
          </div>
          <div className="project flex h-screen w-full items-center justify-center bg-red-500 text-3xl text-white">
            <div className="z-50 flex flex-col items-center justify-center">
              <Image src="/assets/minga.png" width={195.2} height={51.2} alt="" />
              <div className="flex h-52 w-52 items-center justify-center rounded-full bg-[#1c2f59]"></div>
            </div>
          </div>
          <div className="project relative flex h-screen w-full items-center justify-center overflow-hidden bg-dark text-3xl text-white">
            <div className="z-50 flex flex-col items-center justify-center">
              <div className="flex h-52 w-52 items-center justify-center rounded-full bg-white">
                <Image src="/assets/village.png" width={100} height={100} alt="" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <a
                  href="https://thevillageapp.co"
                  target="_blank"
                  className="flex flex-row items-center justify-center gap-3 pt-3 hover:opacity-70"
                >
                  <h3 className="text-center text-2xl font-medium text-white">The Village App</h3>
                  <Image
                    className="invert"
                    src="/assets/icons/newtab.png"
                    height={20}
                    width={20}
                    alt=""
                  />
                </a>
                <p className="text-center text-base">
                  An app designed to help people in the community connect with each other and find
                  resources.
                </p>
                <h4 className="mt-5 text-lg font-medium underline underline-offset-8">
                  Areas I impacted:
                </h4>
                <div className="flex justify-center px-10">
                  <ul className="flex list-disc flex-col gap-5 pt-2 text-base">
                    <li>
                      Refactored the entire front end within 4 months to increase maintainability
                      and user experience by up to 80%
                    </li>
                    <li>
                      Corrected major bugs in the underlying structure of the application that
                      hindered user interactivity
                    </li>
                    <li>
                      Introduced better state management libraries to increase development time by
                      50%
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-[#1cb0ac] to-transparent"></div>
          </div>
          <div className="project flex h-screen w-full items-center justify-center bg-red-500 text-3xl text-white">
            genoa
          </div>
          <div className="project flex h-screen w-full items-center justify-center overflow-hidden bg-yellow-500 text-3xl text-white">
            prosciutto
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
