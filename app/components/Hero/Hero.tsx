"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  // Function to move to the next slide
  const nextSlide = () => {
    const newIndex = currentIndex === 3 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Effect for setting the slider interval
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change the interval time here (in milliseconds)

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="relative pt-16">
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-[#d9d9d9] text-6xl font-extrabold text-shadow-lg text-center">
        We Attack
        <br />
        <span>We Protect</span>
      </h1>

      <div className="relative mx-auto overflow-hidden" ref={sliderRef}>
        <div
          className="flex transition-transform ease-in-out duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          <Image
            src="/Rectangle 30.png"
            width={10000}
            height={1000}
            alt="Slide 1"
            className="w-screen h-dvh"
          />
          <Image
            src="/Rectangle 31.png"
            width={1000}
            height={1000}
            alt="Slide 1"
            className="w-dvw h-dvh"
          />
          <Image
            src="/Rectangle 32.png"
            width={1000}
            height={1000}
            alt="Slide 1"
            className="w-dvw h-dvh"
          />
          <Image
            src="/Rectangle 33.png"
            width={1000}
            height={1000}
            alt="Slide 1"
            className="w-dvw h-dvh"
          />
          <Image
            src="/Rectangle 34.png"
            width={1000}
            height={1000}
            alt="Slide 1"
            className="w-dvw h-dvh"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
