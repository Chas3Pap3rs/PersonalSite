"use client"; 

import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div className="text-white text-[40px] sm:text-[45px] md:text-[50px] lg:text-[55px] font-semibold">  {/* Responsive text sizes */}
      <Typewriter
        options={{
          strings: [
            "Developer.",
            "Freelancer.",
            "Father.",
            "Creative.",
            "Artist.",
            "Entrepreneur.",
            "AI Prompting Enthusiast.",
            "Gym Rat.",
          ],
          autoStart: true,
          loop: true,
          delay: 75,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;