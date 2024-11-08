import EmblaCarousel from "../skills/EmblaCarousel"; // Adjust path as needed
import Link from "next/link";
import Image from "next/image";
import { projects } from '@/utils/data/experience'; // Import the projects data
import { BsGithub } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';

const isProduction = process.env.NODE_ENV === "production";
const basePath = isProduction ? process.env.NEXT_PUBLIC_BASE_PATH || '/PersonalSite' : '';

// Reusable ProjectCard component
function ProjectCard({ title, image, description, techUsed, ghLink, demoLink, isCarousel = false }) {
  return (
    <div className="bg-[#0d1224] p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative flex flex-col justify-between h-full min-h-[500px]">
      {/* Title at the top */}
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>

      {/* Image, tech used, and description */}
      <div className="flex-grow mb-1 md:mb-10">
        <Image 
          src={`${basePath}${image}`} // Adjust image path with basePath
          alt="example"
          width={600}
          height={400}
          className="rounded-lg object-cover transition-all duration-1000 hover:grayscale grayscale-0 cursor-pointer mb-3 w-full max-w-[400px]" 
        />
        <p className="text-[#16f2b3] text-sm mb-2">{techUsed}</p>
        <div className={`text-gray-300 text-sm md: mb-10 ${isCarousel ? 'overflow-y-auto max-h-[150px] pb-10' : ''}`}>
          {description}
        </div>
      </div>

      {/* Buttons fixed to the bottom */}
      <div className="absolute bottom-4 left-4 flex items-center gap-1">
        <Link href={ghLink} target="_blank" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
          <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out md:font-semibold flex items-center hover:text-pink-500">
            <span>GitHub</span>
            <BsGithub size={16} className="ml-2" />
          </button>
        </Link>

        {demoLink && (
          <Link 
            href={demoLink} 
            target="_blank" 
            className="flex items-center gap-1 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider no-underline transition-all duration-200 ease-out hover:from-violet-600 hover:to-pink-500 ml-1"
          >
            <span>Demo</span>
            <CgWebsite size={16} />
          </Link>
        )}
      </div>
    </div>
  );
}

// ProjectCards component for rendering multiple projects
export default function ProjectCards() {
  return (
    <div className="container mx-auto px-1">
      {/* Embla Carousel for md screens */}
      <div className="block lg:hidden ">
        <EmblaCarousel speed={0.75} startDelay={8000}> {/* Adjust the scroll speed */}
          {[...projects].reverse().map((project, index) => ( // Reverse here
            <div key={index} className="flex-shrink-0 flex justify-center items-center border border-current rounded-md p-2 w-[95%] h-[600px] mx-2 max-w-[450px]">
              <ProjectCard
                key={index}
                title={project.title}
                image={`${basePath}${project.image}`} // Use basePath with image path here
                description={project.description}
                techUsed={project.techUsed}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
                isCarousel={true}
              />
            </div>
          ))}
        </EmblaCarousel>
      </div>

      {/* Normal grid layout for larger screens */}
      <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {[...projects].reverse().map((project, index) => ( // Reverse here too
          <ProjectCard 
            key={index}
            title={project.title}
            image={`${basePath}${project.image}`} // Use basePath with image path here as well
            description={project.description}
            techUsed={project.techUsed}
            ghLink={project.ghLink}
            demoLink={project.demoLink}
          />
        ))}
      </div>
    </div>
  );
}