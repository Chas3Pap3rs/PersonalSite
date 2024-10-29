"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Utility function to debounce resize handler
const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

function Navbar() {
  const [imageSrc, setImageSrc] = useState("/cp.png");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control menu visibility

  useEffect(() => {
    const handleResize = debounce(() => {
      const width = window.innerWidth;

      if (width >= 1280) {
        setImageSrc("/chasepoulton-com.png");
      } else if (width >= 900) {
        setImageSrc("/chasepoulton.png");
      } else {
        setImageSrc("/cp.png");
      }
    }, 100); // Debounced by 100ms

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { href: "/", label: "home" },
    { href: "/#about", label: "about" },
    { href: "/#skills", label: "skills" },
    { href: "/#experience", label: "projects" },
    { href: "/#contact", label: "contact" }
  ];

  // Toggle the menu when the logo is clicked
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu after making a selection
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
          layout="responsive"
          width={56}
          height={56}
          // maxHeight={56}
          className="responsive-logo"
        />
      </div>

          <ul
            className={`mt-4 lg:flex ${
              isMenuOpen ? "flex" : "hidden"
            } flex-col items-center justify-center w-full lg:w-auto lg:flex-row lg:items-start text-sm transition-all duration-300 ease-in-out`}
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
        {/* Bottom border style */}
        <div className="flex justify-center -translate-y-[1px]">
          <div className="w-full">
            <div className="h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
          </div>
        </div>
      </nav>
  );
}

export default Navbar;