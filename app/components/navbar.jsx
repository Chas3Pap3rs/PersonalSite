"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Detect if we're on GitHub Pages or a custom domain
const isProduction = process.env.NODE_ENV === "production";
const isGitHubPages = typeof window !== "undefined" && window.location.hostname === "chas3pap3rs.github.io";
const basePath = isGitHubPages ? "/PersonalSite" : "";

const getImagePath = (path) => `${basePath}${path}`;

function Navbar() {
  const [imageSrc, setImageSrc] = useState(getImagePath("/CP.png"));
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setImageSrc(getImagePath("/chasepoulton-com.png"));
      } else if (width >= 850) {
        setImageSrc(getImagePath("/chasepoulton.png"));
      } else {
        setImageSrc(getImagePath("/CP.png"));
      }
    };

    handleResize(); // Call initially
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { href: `${basePath}#home`, label: "home" },
    { href: `${basePath}#about`, label: "about" },
    { href: `${basePath}#skills`, label: "skills" },
    { href: `${basePath}#experience`, label: "projects" },
    { href: `${basePath}#contact`, label: "contact" }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0d1224]/30 backdrop-blur-md z-50 shadow-lg">
      <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between px-6 lg:px-12 py-5">
        <div className="flex-shrink-0 cursor-pointer" onClick={toggleMenu}>
          <Image
            src={imageSrc}
            alt="logo"
            width={imageSrc.includes("chasepoulton-com") ? 400 : imageSrc.includes("chasepoulton") ? 325 : 100}
            height={100}
            className="responsive-logo"
          />
        </div>

        <ul
          className={`mt-4 lg:flex ${isMenuOpen ? "flex" : "hidden"} flex-col items-center justify-center w-full lg:w-auto lg:flex-row lg:items-start text-sm transition-all duration-300 ease-in-out`}
          id="navbar-default"
        >
          {navItems.map((item) => (
            <li key={item.href} className="my-2 lg:my-0">
              <Link
                href={item.href}
                className="block px-4 py-2 no-underline outline-none hover:no-underline uppercase text-center"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default page reload
                  const targetId = item.href.replace(basePath, "").substring(1); // Get section ID (e.g., "home")
                  const targetElement = document.getElementById(targetId); // Find element by ID
                  if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to element
                  }
                  setIsMenuOpen(false); // Close menu on mobile
                }}
              >
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                  {item.label}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-full">
          <div className="h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect } from "react";

// // Define basePath directly
// const isProduction = process.env.NODE_ENV === "production";
// const basePath = isProduction ? process.env.NEXT_PUBLIC_BASE_PATH || '/PersonalSite' : '';

// // Utility function to debounce resize handler
// const debounce = (fn, delay) => {
//   let timer;
//   return (...args) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => fn(...args), delay);
//   };
// };

// function Navbar() {
//   const [imageSrc, setImageSrc] = useState(`${basePath}/CP.png`);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     if (typeof window === 'undefined') return;

//     const handleResize = debounce(() => {
//       const width = window.innerWidth;
//       if (width >= 1280) {
//         setImageSrc(`${basePath}/chasepoulton-com.png`);
//       } else if (width >= 850) {
//         setImageSrc(`${basePath}/chasepoulton.png`);
//       } else {
//         setImageSrc(`${basePath}/CP.png`);
//       }
//     }, 100);

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const navItems = [
//     { href: "#home", label: "home" },
//     { href: "#about", label: "about" },
//     { href: "#skills", label: "skills" },
//     { href: "#experience", label: "projects" },
//     { href: "#contact", label: "contact" }
//   ];

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-[#0d1224]/30 backdrop-blur-md z-50 shadow-lg">
//       <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between px-6 lg:px-12 py-5">
//         <div className="flex-shrink-0 cursor-pointer" onClick={toggleMenu}>
//           <Image
//             src={imageSrc}
//             alt="logo"
//             width={imageSrc.includes("chasepoulton-com") ? 400 : imageSrc.includes("chasepoulton") ? 325 : 100}
//             height={100}
//             className="responsive-logo"
//           />
//         </div>

//         <ul
//           className={`mt-4 lg:flex ${isMenuOpen ? "flex" : "hidden"} flex-col items-center justify-center w-full lg:w-auto lg:flex-row lg:items-start text-sm transition-all duration-300 ease-in-out`}
//           id="navbar-default"
//         >
//           {navItems.map((item) => (
//             <li key={item.href} className="my-2 lg:my-0">
//               <Link
//                 href={`${basePath}${item.href}`}
//                 className="block px-4 py-2 no-underline outline-none hover:no-underline uppercase text-center"
//                 onClick={(e) => {
//                   e.preventDefault(); // Prevent default page reload
//                   const targetId = item.href.substring(1); // Get section ID (e.g., "home")
//                   const targetElement = document.getElementById(targetId); // Find element by ID
//                   if (targetElement) {
//                     targetElement.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to element
//                   }
//                   setIsMenuOpen(false); // Close menu on mobile
//                 }}
//               >
//                 <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
//                   {item.label}
//                 </div>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="flex justify-center -translate-y-[1px]">
//         <div className="w-full">
//           <div className="h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
//         </div>
//       </div>
//     </nav>
//   );
// }
