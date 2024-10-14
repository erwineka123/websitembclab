'use client'

import React, { useState, useEffect } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

interface Destination {
  image: string;
  destination: string;
  description: string;
}

interface KegiatanProps {
  destinations: Destination[];
}

const Kegiatan: React.FC<KegiatanProps> = ({ destinations }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const goToPrevious = () => {
    setFade(false);
    setTimeout(() => {
      const index = (currentIndex - 1 + destinations.length) % destinations.length;
      setCurrentIndex(index);
      setFade(true);
    }, 500); // Duration of fade-out transition
  };

  const goToNext = () => {
    setFade(false);
    setTimeout(() => {
      const index = (currentIndex + 1) % destinations.length;
      setCurrentIndex(index);
      setFade(true);
    }, 500); // Duration of fade-out transition
  };

  return (
    <>
      <div className="flex flex-col items-center bg-gray-900 py-20">
        <h1 className="text-white text-5xl md:text-6xl font-extrabold text-center mt-12 mb-10 tracking-wide">
          Kegiatan
        </h1>
        <div className="relative w-full md:w-[1250px] h-auto px-6 md:px-12">
          <div className="overflow-hidden">
            <div
              className={`flex flex-col items-center justify-center bg-gradient-to-b from-white/10 to-gray-800/5 border-t border-b border-white/20 rounded-2xl shadow-2xl p-8 w-[90vw] md:w-[1200px] h-[400px] md:h-[500px] transition-opacity duration-500 ease-in-out ${
                fade ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={destinations[currentIndex].image}
                alt={destinations[currentIndex].destination}
                className="w-[300px] md:w-[600px] h-[200px] md:h-[400px] object-cover rounded-lg shadow-lg"
              />
              <div className="text-center text-white px-4 mt-6">
                <h3 className="text-2xl md:text-3xl font-semibold">{destinations[currentIndex].destination}</h3>
                <p className="text-lg md:text-xl mt-2 opacity-80">{destinations[currentIndex].description}</p>
              </div>
            </div>
          </div>
          <button
            className="absolute top-1/2 transform -translate-y-1/2 left-2 md:left-6 text-white bg-gray-700 hover:bg-gray-500 rounded-full p-3 md:p-4 transition-all duration-300"
            onClick={goToPrevious}
          >
            <FiArrowLeft className="text-2xl md:text-3xl" />
          </button>
          <button
            className="absolute top-1/2 transform -translate-y-1/2 right-2 md:right-6 text-white bg-gray-700 hover:bg-gray-500 rounded-full p-3 md:p-4 transition-all duration-300"
            onClick={goToNext}
          >
            <FiArrowRight className="text-2xl md:text-3xl" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Kegiatan;
