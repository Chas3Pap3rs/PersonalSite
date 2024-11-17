"use client";

import { personalData } from '@/utils/data/personal-data';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Icons
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

// Dynamically import AnimationLottie with SSR disabled
// const AnimationLottie = dynamic(() => import('../../helper/animation-lottie'), { ssr: false });
// import newAnimation from '/public/lottie/robot.json';  // New Lottie file

const isProduction = process.env.NODE_ENV === "production";
const isGitHubPages = typeof window !== "undefined" && window.location.hostname === "chas3pap3rs.github.io";
const basePath = isGitHubPages ? "/PersonalSite" : "";

const getImagePath = (path) => `${basePath}${path}`;

// Typewriter component
import Type from '../Type';


function Landing() {
  return (
    <section id="home" className="relative flex flex-col items-center justify-between py-24">
      <Image 
         src={getImagePath("/hero.svg")}
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[132px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8 mt-6">
        <div className="order-2 lg:order-2 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            <span className="text-pink-500 text-[16px] uppercase tracking-widest">[ {personalData.name} ]</span><br />
            { `Visual & Web Designer` }<br />
            <span className="text-[#16f2b3]">{personalData.designation}</span>
          </h1>

          <p className="text-[18px] my-5 leading-10">
            {personalData.description}
          </p>

          <div className="flex items-center gap-3">
            <Link href="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out md:font-semibold flex items-center cap-1 gap-1 hover:text-pink-500">
                <span>Contact Me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link role="button" className="flex items-center gap-1 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold hover:from-violet-600 hover:to-pink-500" href={personalData.resume}>
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative rounded-lg mt-20"> {/* Margin top set to 20 for now until AnuimationLottie is fixed for deployment */}
          {/*<div className="max-w-full lg:max-w-none md:max-w-[442px] mx-auto">
            <AnimationLottie animationPath={newAnimation} /> 
          </div> */}

          {/* Stacked vertically in all screen sizes */}
          <div className="flex flex-col items-center justify-center w-full mt-6 space-y-1">
            {/* Top section */}
            <div className="w-full text-left">
              <h2 className="text-xl ml-[25%]">Hi There!{" "}
                <span id="wave" className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h2>
            </div>

            {/* Middle section */}
            <div className="w-full text-center">
              <h1 className="text-3xl">My name is 
                <strong className="text-[#16f2b3]"> Chase Poulton </strong>
              </h1>
            </div>

            {/* Bottom section */}
            <div className="w-full text-right">
              <h2 className="text-xl mr-[42%]">and I&apos;m a...</h2>
            </div>
          </div>

          {/* Center the Typewriter effect below */}
          <div className="flex items-center justify-center mt-1">
            <Type /> {/* This will display the typewriter effect */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
