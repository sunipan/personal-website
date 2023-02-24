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
              <h1 className="x:text-[28px] text-[26px] font-bold text-white md:text-[40px] lg:text-[52px]">
                Hi, I&apos;m Sebi Unipan <span className="wave">👋</span>
              </h1>
              <h4 className="mb-5 flex flex-row items-center justify-start text-lg italic text-white">
                <div className="flex h-full items-center">
                  <Image src="/assets/pin.png" height={20} width={20} alt="" />
                </div>
                <div className="opacity-70">Vancouver, British Columbia</div>
              </h4>
              <Terminal
                className="rounded-xl bg-light p-5 text-green-500"
                bodyClassName="code-font text-base pt-5 text-left xs:text-lg md:text-[24px]"
                variant="dark"
              >
                <div>/*</div>As a highly motivated and versatile programmer, I bring a unique
                combination of technical expertise and creative problem-solving skills to every
                project I take on. Whether I&apos;m coding for work, school, or just for fun, I
                approach every challenge with a passion for learning and a drive to constantly
                improve. I find fulfillment in exploring new and innovative ways to tackle problems
                and I take pride in getting to the heart of how things work.
                <div>*/</div>
              </Terminal>
            </div>
          </div>
          <div className="skills h-screen w-full max-w-4xl pt-[140px] pb-20">
            <div className="z-10 text-center text-2xl font-medium text-white md:text-3xl">
              I can do
            </div>
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
                      As an individual with a Bachelor&apos;s Degree in Computer Science and over 2
                      years of professional experience in developing a diverse range of
                      applications, I possess the ability to swiftly construct and design user
                      interfaces that are both purposeful and captivating, while also being
                      optimized for optimal performance.
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
                      As a seasoned professional proficient in Node.js backends, I possess the
                      ability to adeptly leverage serverless or hosted backends in tandem with
                      either relational or non-relational databases, to effectively construct and
                      deliver robust RESTful APIs. In addition, I am well-versed in optimizing
                      testing and deployment pipelines for applications through the utilization of
                      Docker and GitHub Actions. Moreover, I possess hands-on experience working
                      with both SQL and NoSQL databases.
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
            date="September 2022 - Present"
          >
            <ul className="flex max-w-md list-disc flex-col gap-5 pt-2 text-base sm:text-lg">
              <li>Developed the front end of our application with React and Next.js</li>
              <li>Wrote unit and integration tests using Jest with 90% app coverge</li>
              <li>
                Enforced code quality standards by developing Continuous Integration and Continuous
                Delivery automation pipelines with GitHub Actions and Docker
              </li>
              <li>Deployed production on Vercel</li>
            </ul>
          </ExperienceItem>
          {/* End of experience item */}
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
            date="May - August 2022"
          >
            <ul className="flex max-w-md list-disc flex-col gap-5 pt-2 text-base sm:text-lg">
              <li>Debugged several issues with the app that hindered user engagement</li>
              <li>
                Engineered a new critical feature that is being used by over 20,000 users daily
              </li>
              <li>
                Thoroughly advanced my OOP knowledge through Angular and TypeScript and learned how
                to use the gRPC protocol
              </li>
              <li>Contributed to sprint planning weekly and practiced agile methodologies</li>
            </ul>
          </ExperienceItem>
          {/* End of experience item */}
          <ExperienceItem
            role="Junior Software Engineer - Co-op"
            src="/assets/atomic47.png"
            title="Atomic47 Labs"
            width={201.5}
            height={66.66}
            href="https://atomic47.co/"
            underlined
            headerText="Areas I impacted:"
            childWrapperClass="flex justify-center px-10"
            gradientColour="#1cb0ac"
            date="September 2021 - April 2022"
          >
            <ul className="flex max-w-md list-disc flex-col gap-5 pt-2 text-base md:text-lg">
              <li>Enhanced the back end of the app to speed up queries by up to 80%</li>
              <li>
                Resolved login issues impacting a significant number of users from being able to
                switch accounts
              </li>
              <li>
                Refactored the entire front end with a new UI and migrated the app from Redux to
                React Query, reducing development time by 50% and simplifying the app drastically
              </li>
              <li>
                Guided Jr. developers with their tickets and on-boarded multiple new members of the
                team
              </li>
            </ul>
          </ExperienceItem>
          {/* End of experience item */}
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
            date="May - August 2021"
          >
            <ul className="flex max-w-md list-disc flex-col gap-5 pt-2 text-base md:text-lg">
              <li>
                Programmed full stack functionality of the app from the landing page, login, and
                testing strategy with the Laravel framework
              </li>
              <li>
                Constructed the machine learning recommendation system to offer users a more
                personalized experience on the items page with Python
              </li>
              <li>Assisted another development team in creating the apps&apos; Chrome extension</li>
            </ul>
          </ExperienceItem>
          {/* End of experience item */}
          <h3 className="my-20 text-center text-4xl font-bold text-white">Projects</h3>

          <div className="flex w-full flex-col items-center justify-center gap-5">
            <ProjectItem
              image="/assets/pharmapal.png"
              link="https://cosc-499-winner.vercel.app/"
              stack={['React', 'Next.js', 'Tailwind CSS', 'MongoDB', 'Node.js']}
              glowClass="pharma-glow"
              description="An intuitive web app for assisting users with picking the right over-the-counter medicine for their exact symptoms"
              width={192.5}
              height={50.4}
            />
            <ProjectItem
              image="/assets/chatbot.png"
              link="https://github.com/sunipan/Chat-Bot"
              stack={['Python', 'SciKitLearn', 'NLTK']}
              glowClass="chat-glow"
              description="A psychiatrist chat bot designed to give users support through natural responses"
              repo
              width={72}
              height={72}
            />
            <ProjectItem
              image="/assets/gpu.png"
              link="https://github.com/sunipan/GPU-Bot"
              stack={['Python', 'BeautifulSoup']}
              glowClass="gpu-glow"
              description="A bot that automatically checks for GPU availability on the Best Buy website"
              repo
              width={72}
              height={72}
            />
          </div>
          <div className="pt-20 text-center font-medium">
            <h3 className="text-4xl font-bold text-white">Want More?</h3>
          </div>
          <a
            rel="noreferrer"
            target="_blank"
            className="mt-5 rounded-3xl bg-neutral-600 px-5 py-2 text-center text-2xl text-white hover:opacity-70"
            href="https://drive.google.com/file/d/1nTZagbAW03hffhUk7OHT6-Jg5UeWkD_5/view?usp=sharing"
          >
            Here&apos;s my resume
          </a>
          <div className="mt-16 text-3xl font-bold text-white">Reach out to me!</div>
          <div className="mb-72 max-w-sm text-center text-lg text-white">
            My inbox is{' '}
            <span className="text-lg font-medium underline underline-offset-8">always</span> open
            whether you have a question or just want to say hi 😎
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
