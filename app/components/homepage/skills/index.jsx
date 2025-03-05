import Image from "next/image";
import React from "react";

import { DiJsBadge, DiNodejs, DiReact, DiHtml5, DiCss3, DiPython, DiDjango, DiGit, DiJava, DiPhp, DiNetbeans } from 'react-icons/di';
import { SiMacos, SiVisualstudiocode, SiGithub, SiPostman, SiSlack, SiAffinitydesigner, SiCanva, SiDotnet, SiInsomnia, SiPycharm, SiHostinger, SiOpenai, SiDocker, SiKubernetes, SiVite, SiCsharp, SiBootstrap, SiFlask  } from 'react-icons/si';

import EmblaCarousel from "./EmblaCarousel";

const isProduction = process.env.NODE_ENV === "production";
const isGitHubPages = typeof window !== "undefined" && window.location.hostname === "chas3pap3rs.github.io";
const basePath = isGitHubPages ? "/PersonalSite" : "";

function Skills() {
    const techIcons = [DiJsBadge, DiHtml5, DiCss3, DiReact, SiVite, DiNodejs, DiPython, DiDjango, SiFlask, DiGit, DiJava, SiCsharp, SiBootstrap, DiPhp ];
    const toolIcons = [SiMacos, SiVisualstudiocode, SiGithub, SiInsomnia, SiPostman, SiHostinger, SiAffinitydesigner, SiCanva, SiPycharm, SiSlack, SiDotnet, DiNetbeans, SiOpenai, SiDocker, SiKubernetes ];

    return (
        <div id="skills" className="relative border-t my-12 border-[#25213b]">
            <Image
                src={`${basePath}/section.svg`}
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
                [ Skills & Tools ]
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

                {/* Professional Skillsets */}
                <div className="order-1 lg:order-2">
                    <div className="flex justify-center font-medium mb-5 text-[#16f2b3] text-3xl mt-5 uppercase">
                        Professional Skillsets
                    </div>

                    {/* Embla Carousel for small screens */}
                    <div className="block sm:hidden">
                        <EmblaCarousel speed={.75}> {/* Slower scrolling */}
                            {techIcons.map((Icon, index) => (
                                <div key={index} className="tech-icons flex-shrink-0 flex justify-center items-center border dark-mode-border rounded-md p-2 w-[62.5vw] h-[62.5vw] mx-3">
                                    <Icon className="text-[#16f2b3] w-[70%] h-[70%]" />
                                </div>
                            ))}
                        </EmblaCarousel>
                    </div>

                    {/* Normal grid layout for larger screens */}
                    <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-3 justify-items-center">
                        {techIcons.map((Icon, index) => (
                            <div key={index} className="tech-icons flex justify-center items-center border border-current rounded-md p-2">
                                <Icon className="w-[80vw] h-[80vw] sm:w-[100vw] sm:h-[40vw] md:h-[15vw] lg:h-[10vw] max-w-[100%] max-h-[45%] text-[#16f2b3]" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Some Tools I Use */}
                <div className="order-2 lg:order-1">
                    <div className="flex justify-center font-medium mb-5 text-[#16f2b3] text-3xl mt-5 uppercase">
                        Some tools I use
                    </div>

                    {/* Embla Carousel for small screens */}
                    <div className="block sm:hidden">
                        <EmblaCarousel reverse={true} speed={1.5}> {/* Faster and reverse scrolling */}
                            {toolIcons.map((Icon, index) => (
                                <div key={index} className="tech-icons flex-shrink-0 flex justify-center items-center border border-current rounded-md p-2 w-[75vw] h-[75vw] mx-3">
                                    <Icon className="text-[#16f2b3] w-[70%] h-[70%]" />
                                </div>
                            ))}
                        </EmblaCarousel>
                    </div>

                    {/* Normal grid layout for larger screens */}
                    <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-3 justify-items-center">
                        {toolIcons.map((Icon, index) => (
                            <div key={index} className="tech-icons flex justify-center items-center border border-current rounded-md p-2">
                                <Icon className="w-[80vw] h-[80vw] sm:w-[100vw] sm:h-[40vw] md:h-[15vw] lg:h-[10vw] max-w-[100%] max-h-[45%] text-[#16f2b3]" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
