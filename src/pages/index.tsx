/* eslint-disable react/jsx-no-comment-textnodes */
import Image from 'next/image';
import type { NextPage } from 'next';
import { Layout } from '../components/layout';
import { Header } from '../components/header/Header';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef } from 'react';
import { useIsomorphicLayoutEffect } from '../lib/helpers/useIsomorphicLayoutEffect';
import { Terminal } from '../components/terminal/Terminal';
import { ExperienceItem } from '../components/experience/ExperienceItem';
import { ProjectItem } from '../components/project/ProjectItem';

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
      gsap.utils.toArray('.experience').forEach((experience, i) => {
        ScrollTrigger.create({
          trigger: experience as gsap.DOMTarget,
          start: 'top top',
          end: i == 3 ? 'top top' : 'bottom 64px',
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
        <div ref={main} className="flex w-full flex-col items-center">
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
            <div className="text-center text-2xl font-medium text-white md:text-3xl">I can do</div>
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
          <div className="pt-[100vh] text-center font-medium">
            <h3 className="text-4xl font-bold text-white">Experience</h3>
          </div>
          <ExperienceItem
            src="/assets/rh-logo.png"
            title="RentalHunt"
            width={195}
            height={43.2}
            href="https://rentalhunt.ca/"
            headerText="Responsibilities:"
            underlined
            gradientColour="#5258ec"
            role="Lead Web Developer"
            childWrapperClass="flex justify-center px-10"
          >
            <ul className="flex max-w-md list-disc flex-col gap-5 pt-2 text-base sm:text-lg">
              <li>
                Develop the entire web version of RentalHunt using Next.js and hook it up to the
                existing backend
              </li>
              <li>Review pull requests of other members to make sure they follow best practices</li>
              <li>
                Help other team members get up to speed on the codebase and technologies used as
                well as onboard them
              </li>
            </ul>
          </ExperienceItem>
          {/* <div className="experience relative flex h-[120vh] w-full items-center justify-center overflow-hidden bg-dark text-3xl text-white xs:h-screen">
            <div className="z-50 flex flex-col items-center justify-center">
              <div className="flex h-52 w-52 items-center justify-center rounded-full bg-white">
                <Image src="/assets/rh-logo.png" width={195} height={43.2} alt="" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <a
                  href="https://rentalhunt.ca/"
                  rel="noreferrer"
                  target="_blank"
                  className="flex flex-row items-center justify-center gap-3 pt-3 hover:opacity-70"
                >
                  <h3 className="text-center text-2xl font-medium text-white sm:text-3xl">
                    RentalHunt
                  </h3>
                  <Image
                    className="invert"
                    src="/assets/icons/newtab.png"
                    height={20}
                    width={20}
                    alt=""
                  />
                </a>
                <div className="w-full py-3 text-center text-base italic opacity-70 sm:text-lg">
                  Lead Web Developer
                </div>
                <p className="max-w-2xl px-5 text-center text-base sm:text-lg md:text-xl">
                  A revolutionary new rental app that has your back
                </p>
                <h4 className="mt-5 max-w-2xl text-center text-lg font-medium underline underline-offset-8 sm:text-xl md:text-2xl">
                  Areas I impacted:
                </h4>
                <div className="flex justify-center px-10">
                  <ul className="flex max-w-md list-disc flex-col gap-5 pt-2 text-base sm:text-lg">
                    <li>
                      Develop the entire web version of RentalHunt using Next.js and hook it up to
                      the existing backend
                    </li>
                    <li>
                      Review pull requests of other members to make sure they follow best practices
                    </li>
                    <li>
                      Help other team members get up to speed on the codebase and technologies used
                      as well as onboard them
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-2/3 w-full bg-gradient-to-t from-[#5258ec] to-transparent"></div>
          </div> */}
          <ExperienceItem
            src="/assets/minga.png"
            title="Minga"
            width={130.8}
            height={34.8}
            href="https://minga.io/"
            underlined
            imageBg="bg-[#1c2f59]"
            headerText="Areas I impacted:"
            childWrapperClass="flex justify-center px-10"
            gradientColour="#1c2f59"
            role="Junior Software Engineer - Co-op"
          >
            <ul className="flex max-w-md list-disc flex-col gap-5 pt-2 text-base sm:text-lg">
              <li>
                Independently implemented the app&apos;s critical new point allocation system used
                by over 10,000 users daily.
              </li>
              <li>Converted several UIs to updated designs with improved practices</li>
              <li>
                Learned Angular 9 and the gRPC protocol quickly in order to be a valuable team
                member for the app
              </li>
            </ul>
          </ExperienceItem>
          {/* <div className="experience relative flex h-[120vh] w-full items-center justify-center overflow-hidden bg-dark text-3xl text-white xs:h-screen">
            <div className="z-50 flex flex-col items-center justify-center">
              <div className="flex h-52 w-52 items-center justify-center rounded-full bg-[#1c2f59]">
                <Image src="/assets/minga.png" width={130.8} height={34.8} alt="" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <a
                  href="https://rentalhunt.ca/"
                  rel="noreferrer"
                  target="_blank"
                  className="flex flex-row items-center justify-center gap-3 pt-3 hover:opacity-70"
                >
                  <h3 className="text-center text-2xl font-medium text-white sm:text-3xl">Minga</h3>
                  <Image
                    className="invert"
                    src="/assets/icons/newtab.png"
                    height={20}
                    width={20}
                    alt=""
                  />
                </a>
                <div className="w-full py-3 text-center text-base italic opacity-70 sm:text-lg">
                  Junior Software Engineer - Co-op
                </div>
                <p className="max-w-2xl px-5 text-center text-base sm:text-lg md:text-xl">
                  A revolutionary new rental app that has your back
                </p>
                <h4 className="mt-5 max-w-2xl text-center text-lg font-medium underline underline-offset-8 sm:text-xl md:text-2xl">
                  Areas I impacted:
                </h4>
                <div className="flex justify-center px-10">
                  <ul className="flex max-w-md list-disc flex-col gap-5 pt-2 text-base sm:text-lg">
                    <li>
                      Independently implemented the app&apos;s critical new point allocation system
                      used by over 10,000 users daily.
                    </li>
                    <li>Converted several UIs to updated designs with improved practices</li>
                    <li>
                      Learned Angular 9 and the gRPC protocol quickly in order to be a valuable team
                      member for the app
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-2/3 w-full bg-gradient-to-t from-[#1c2f59] to-transparent"></div>
          </div> */}
          <ExperienceItem
            role="Junior Software Engineer - Co-op"
            src="/assets/village.png"
            title="The Village App"
            width={100}
            height={100}
            href="https://thevillageapp.co"
            underlined
            headerText="Areas I impacted:"
            childWrapperClass="flex justify-center px-10"
            gradientColour="#1cb0ac"
          >
            <ul className="flex max-w-md list-disc flex-col gap-5 pt-2 text-base md:text-lg">
              <li>
                Refactored the entire front end within 4 months to increase maintainability and user
                experience by up to 80%.
              </li>
              <li>
                Corrected major bugs in the underlying structure of the application and reviewed
                multiple PRs by other team members.
              </li>
              <li>
                Introduced better state management libraries to increase development time by 50%.
              </li>
            </ul>
          </ExperienceItem>
          {/* <div className="experience relative flex h-[120vh] w-full items-center justify-center overflow-hidden bg-dark text-3xl text-white xs:h-screen">
            <div className="z-50 flex flex-col items-center justify-center">
              <div className="flex h-52 w-52 items-center justify-center rounded-full bg-white">
                <Image src="/assets/village.png" width={100} height={100} alt="" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <a
                  href="https://thevillageapp.co"
                  rel="noreferrer"
                  target="_blank"
                  className="flex flex-row items-center justify-center gap-3 pt-3 hover:opacity-70"
                >
                  <h3 className="text-center text-2xl font-medium text-white sm:text-3xl">
                    The Village App
                  </h3>
                  <Image
                    className="invert"
                    src="/assets/icons/newtab.png"
                    height={20}
                    width={20}
                    alt=""
                  />
                </a>
                <div className="w-full py-3 text-center text-base italic opacity-70 sm:text-lg">
                  Junior Software Developer - Co-op
                </div>
                <p className="max-w-2xl px-5 text-center text-base sm:text-lg md:text-xl">
                  A mobile app designed to bring communities together and help users find resources
                  for support
                </p>
                <h4 className="mt-5 max-w-2xl text-center text-lg font-medium underline underline-offset-8 sm:text-xl md:text-2xl">
                  Areas I impacted:
                </h4>
                <div className="flex justify-center px-10">
                  <ul className="flex max-w-md list-disc flex-col gap-5 pt-2 text-base md:text-lg">
                    <li>
                      Refactored the entire front end within 4 months to increase maintainability
                      and user experience by up to 80%.
                    </li>
                    <li>
                      Corrected major bugs in the underlying structure of the application and
                      reviewed multiple PRs by other team members.
                    </li>
                    <li>
                      Introduced better state management libraries to increase development time by
                      50%.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-2/3 w-full bg-gradient-to-t from-[#1cb0ac] to-transparent"></div>
          </div> */}
          <ExperienceItem
            src="/assets/cpd.png"
            title="Jusaves"
            width={100}
            height={100}
            href="https://jusaves.com/"
            underlined
            headerText="Areas I impacted:"
            childWrapperClass="flex justify-center px-10"
            gradientColour="#f8935b"
            role="Software Engineer - Co-op"
          >
            <ul className="flex max-w-md list-disc flex-col gap-5 pt-2 text-base md:text-lg">
              <li>
                Constructed several features of the app front-to-back such as the login, sign up,
                email verification
              </li>
              <li>
                Engineered the app&apos;s entire AI recommendation system to increase user
                engagement by 50%.
              </li>
              <li>Incorporated several of the ideas I had for the app into the production build</li>
            </ul>
          </ExperienceItem>
          {/* <div className="experience relative flex h-[120] w-full items-center justify-center overflow-hidden bg-dark text-3xl text-white xs:h-screen">
            <div className="z-50 flex flex-col items-center justify-center">
              <div className="flex h-52 w-52 items-center justify-center rounded-full bg-white">
                <Image src="/assets/cpd.png" width={100} height={100} alt="" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <a
                  href="https://jusaves.com"
                  rel="noreferrer"
                  target="_blank"
                  className="flex flex-row items-center justify-center gap-3 pt-3 hover:opacity-70"
                >
                  <h3 className="text-center text-2xl font-medium text-white sm:text-3xl">
                    Jusaves
                  </h3>
                  <Image
                    className="invert"
                    src="/assets/icons/newtab.png"
                    height={20}
                    width={20}
                    alt=""
                  />
                </a>
                <div className="w-full py-3 text-center text-base italic opacity-70 sm:text-lg">
                  Software Engineer - Co-op
                </div>
                <p className="max-w-2xl px-5 text-center text-base sm:text-lg md:text-xl">
                  A unique approach to the coupon sale market that allows customers to get their
                  discounts and cashback instantly
                </p>
                <h4 className="mt-5 max-w-2xl text-center text-lg font-medium underline underline-offset-8 sm:text-xl md:text-2xl">
                  Areas I impacted:
                </h4>
                <div className="flex justify-center px-10">
                  <ul className="flex max-w-md list-disc flex-col gap-5 pt-2 text-base md:text-lg">
                    <li>
                      Constructed several features of the app front-to-back such as the login, sign
                      up, email verification
                    </li>
                    <li>
                      Engineered the app&apos;s entire AI recommendation system to increase user
                      engagement by 50%.
                    </li>
                    <li>
                      Incorporated several of the ideas I had for the app into the production build
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-2/3 w-full bg-gradient-to-t from-[#f8935b] to-transparent"></div>
          </div> */}
          <h3 className="my-20 text-center text-4xl font-bold text-white">Projects</h3>

          <div className="flex w-full flex-col items-center justify-center gap-5">
            <ProjectItem
              glowClass="pharma-glow"
              description="An intuitive web app for assisting users with picking the right over-the-counter medicine for their exact symptoms"
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
