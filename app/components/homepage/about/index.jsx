import Link from "next/link";
import Image from "next/image";
import { personalData } from "@/utils/data/personal-data";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import { SiCodepen, SiLeetcode, SiLeetCode } from "react-icons/si";

// Define basePath for environment handling
const isProduction = process.env.NODE_ENV === "production";
const isGitHubPages = typeof window !== "undefined" && window.location.hostname === "chas3pap3rs.github.io";
const basePath = isGitHubPages ? "/PersonalSite" : "";

// Helper function to handle image paths
const getImagePath = (path) => {
  // Only add basePath if we're on GitHub Pages
  if (isGitHubPages) {
    return `/PersonalSite${path}`;  // For GitHub Pages, use /PersonalSite prefix
  }
  return path;  // For Hostinger and production, return the path directly without the basePath
};


function About() {
  return (
    <div id="about" className="relative border-t my-12 border-[#25213b]">
      <Image 
        src={getImagePath("/section.svg")}
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="text-pink-500 text-[16px] my-24 flex justify-center uppercase tracking-widest">
        [ About Me ]
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-2 justify-center">
          <div className="flex justify-center lg:justify-start font-medium mb-5 text-[#16f2b3] text-3xl mt-5 uppercase">
              Who am I ?
          </div>

          <p className="text-gray-200 text-sm lg:text-lg !leading-10">
              {personalData.about}
          </p>

          <div className="my-5 flex w-full justify-center lg:justify-end">
            <div className="flex justify-between gap-5">
              <Link 
                href={personalData.github}
                target='_blank'
                className="transition-all text-white hover:scale-125 w-[40px] h-[40px] bg-pink-500 rounded-full flex justify-center pt-2 duration-300"
              >
                <BsGithub size={24} />
              </Link>

              <Link 
                href={personalData.linkedIn}
                target='_blank'
                className="transition-all text-white hover:scale-125 w-[40px] h-[40px] bg-pink-500 rounded-full flex justify-center pt-2 duration-300"
              >
                <BsLinkedin size={24} />
              </Link>

              <Link 
                href={personalData.facebook}
                target='_blank'
                className="transition-all text-white hover:scale-125 w-[40px] h-[40px] bg-pink-500 rounded-full flex justify-center pt-2 duration-300"
              >
                <FaFacebook size={24} />
              </Link>

              <Link 
                href={personalData.codepen}
                target='_blank'
                className="transition-all text-white hover:scale-125 w-[40px] h-[40px] bg-pink-500 rounded-full flex justify-center pt-2 duration-300"
              >
                <SiCodepen size={24} />
              </Link>

              <Link 
                href={personalData.twitter}
                target='_blank'
                className="transition-all text-white hover:scale-125 w-[40px] h-[40px] bg-pink-500 rounded-full flex justify-center pt-2 duration-300"
              >
                <FaXTwitter size={24} />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center order-1 lg:order-1">
          <Image 
            src={getImagePath(personalData.profile)}
            alt="Profile"
            width={470}
            height={630}
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 cursor-pointer" 
          />
        </div>
      </div>
    </div>
  );
}

export default About;
