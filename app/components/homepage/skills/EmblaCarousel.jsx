"use client";

import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll'; 

const EmblaCarousel = ({ children, reverse = false, speed = 1, startDelay = 2200 }) => {
  // Apply the passed speed and startDelay
  const scrollSpeed = reverse ? -speed : speed;

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [
      AutoScroll({
        speed: scrollSpeed, // Use passed speed value
        autoStart: true,
        stopOnInteraction: false,
        startDelay: startDelay, // Use passed startDelay
      }),
    ]
  );

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi]);

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex">{children}</div>
    </div>
  );
};

export default EmblaCarousel;