'use client'

import React, { useState } from 'react';

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

  const goToPrevious = () => {
    const index = (currentIndex - 1 + destinations.length) % destinations.length;
    setCurrentIndex(index);
  };

  const goToNext = () => {
    const index = (currentIndex + 1) % destinations.length;
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-white text-4xl md:text-6xl font-black text-center mt-20 mb-8 shadow-lg">
        Kegiatan
      </h1>
      <div className="flex justify-center items-center overflow-visible w-full px-4 md:px-24 gap-12">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center bg-gradient-to-br from-white/20 to-gray-100/5 border-t border-b border-white/30 rounded-2xl shadow-lg transition-transform duration-300 ease-in-out p-8 w-[90vw] md:w-[1250px] h-[400px] md:h-[500px] ${
              index === currentIndex ? 'scale-110' : ''
            }`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <div className="flex items-center">
              <button
                className="text-white bg-gray-700 hover:bg-gray-500 rounded-full p-2 mx-4 hidden md:block"
                onClick={goToPrevious}
              >
                Previous
              </button>
              <img
                src={destination.image}
                alt={destination.destination}
                className="w-[300px] md:w-[600px] h-[200px] md:h-[400px] object-cover rounded-md"
              />
              <div className="text-center text-white px-4">
                <h3 className="text-xl md:text-2xl font-bold">{destination.destination}</h3>
                <p className="text-base md:text-lg">{destination.description}</p>
              </div>
              <button
                className="text-white bg-gray-700 hover:bg-gray-500 rounded-full p-2 mx-4 hidden md:block"
                onClick={goToNext}
              >
                Next
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kegiatan;
