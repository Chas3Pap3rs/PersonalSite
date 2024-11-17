import Image from "next/image";
import ProjectCards from "./ProjectCards";

const isProduction = process.env.NODE_ENV === "production";
const isGitHubPages = typeof window !== "undefined" && window.location.hostname === "chas3pap3rs.github.io";
const basePath = isGitHubPages ? "/PersonalSite" : "";

// Helper function to handle image paths
const getImagePath = (path) => `${basePath}${path}`;

function Experience() {
  return (
    <div id="experience" className="relative border-t my-12 border-[#25213b]">
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
        [ Projects ]
      </div>

      <div>
        <div className="container mx-auto px-4">
          <ProjectCards />
        </div>
      </div>
    </div>
  );
}

export default Experience;