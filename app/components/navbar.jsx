"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Define basePath directly
const basePath = process.env.NODE_ENV === "production" ? "/PersonalSite" : "";

// Utility function to debounce resize handler
const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

function Navbar() {
  const [imageSrc, setImageSrc] = useState(`${basePath}/cp.png`);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = debounce(() => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setImageSrc(`${basePath}/chasepoulton-com.png`);
      } else if (width >= 850) {
        setImageSrc(`${basePath}/chasepoulton.png`);
      } else {
        setImageSrc(`${basePath}/cp.png`);
      }
    }, 100);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { href: `${basePath}/#home`, label: "home" },
    { href: `${basePath}/#about`, label: "about" },
    { href: `${basePath}/#skills`, label: "skills" },
    { href: `${basePath}/#experience`, label: "projects" },
    { href: `${basePath}/#contact`, label: "contact" }
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
                onClick={handleNavClick}
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

// // Utility function to debounce resize handler
// const debounce = (fn, delay) => {
//   let timer;
//   return (...args) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => fn(...args), delay);
//   };
// };

// function Navbar() {
//   const [imageSrc, setImageSrc] = useState("/cp.png");
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control menu visibility

//   useEffect(() => {
//     if (typeof window === 'undefined') return; // Ensure code only runs client-side
    
//     const handleResize = debounce(() => {
//       const width = window.innerWidth;
//       if (width >= 1280) {
//         setImageSrc("/chasepoulton-com.png");
//       } else if (width >= 850) {
//         setImageSrc("/chasepoulton.png");
//       } else {
//         setImageSrc("/cp.png");
//       }
//     }, []);
    
//     handleResize();
//     window.addEventListener("resize", handleResize);
  
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const navItems = [
//     { href: "/#home", label: "home" },
//     { href: "/#about", label: "about" },
//     { href: "/#skills", label: "skills" },
//     { href: "/#experience", label: "projects" },
//     { href: "/#contact", label: "contact" }
//   ];

//   // Toggle the menu when the logo is clicked
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   // Close the menu after making a selection
//   const handleNavClick = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-[#0d1224]/30 backdrop-blur-md z-50 shadow-lg">
//     <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between px-6 lg:px-12 py-5">
//       <div className="flex-shrink-0 cursor-pointer" onClick={toggleMenu}>
//       <Image
//         src={imageSrc}
//         alt="logo"
//         width={imageSrc === "/chasepoulton-com.png" ? 400 : imageSrc === "/chasepoulton.png" ? 325 : 100}
//         height={imageSrc === "/chasepoulton-com.png" ? 100 : imageSrc === "/chasepoulton.png" ? 100 : 100}
//         className="responsive-logo"
//       />
//       </div>

//           <ul
//             className={`mt-4 lg:flex ${
//               isMenuOpen ? "flex" : "hidden"
//             } flex-col items-center justify-center w-full lg:w-auto lg:flex-row lg:items-start text-sm transition-all duration-300 ease-in-out`}
//             id="navbar-default"
//           >
//             {navItems.map((item) => (
//               <li key={item.href} className="my-2 lg:my-0">
//                 <Link
//                   href={item.href}
//                   className="block px-4 py-2 no-underline outline-none hover:no-underline uppercase text-center"
//                   onClick={handleNavClick}
//                 >
//                   <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
//                     {item.label}
//                   </div>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//       </div>
//         {/* Bottom border style */}
//         <div className="flex justify-center -translate-y-[1px]">
//           <div className="w-full">
//             <div className="h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
//           </div>
//         </div>
//       </nav>
//   );
// }

// export default Navbar;


