import React from 'react';
import Image from 'next/image';

const Kontak: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Konten utama */}
      <div className="flex-grow flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mt-20 mb-12 shadow-lg drop-shadow-md">
          Hubungi Kami
        </h1>
        <div className="w-[80vw] max-w-6xl h-auto bg-gradient-to-br from-white/10 to-white/5 shadow-xl border border-gray-600 rounded-2xl backdrop-blur-lg p-10 mb-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Alamat Section */}
          <div className="flex flex-col justify-between p-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Kunjungi Laboratorium Kami</h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Telkom University, TULT 10.04, Jl. Telekomunikasi. 1, Terusan Buahbatu - Bojongsoang, Telkom University, Sukapura, Kec. Dayeuhkolot, Kabupaten Bandung, Jawa Barat 40257
            </p>
          </div>

          {/* Ikuti Kami Section */}
          <div className="flex flex-col justify-between p-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Ikuti Kami</h2>
            <div className="flex flex-row justify-start gap-6 mt-4">
              {/* LinkedIn */}
              <div className="group relative">
                <Image
                  width={50}
                  height={50}
                  src="/linkid.png"
                  alt="LinkedIn Logo"
                  className="transition transform hover:scale-110 hover:shadow-lg duration-300 ease-in-out"
                />
                <span className="block text-center text-sm mt-2 opacity-80 group-hover:text-red-500 transition-colors duration-300">
                  LinkedIn
                </span>
              </div>
              {/* Instagram */}
              <div className="group relative">
                <Image
                  width={50}
                  height={50}
                  src="/ig.png"
                  alt="Instagram Logo"
                  className="transition transform hover:scale-110 hover:shadow-lg duration-300 ease-in-out"
                />
                <span className="block text-center text-sm mt-2 opacity-80 group-hover:text-red-500 transition-colors duration-300">
                  Instagram
                </span>
              </div>
              {/* Line */}
              <div className="group relative">
                <Image
                  width={50}
                  height={50}
                  src="/Line.png"
                  alt="Line Logo"
                  className="transition transform hover:scale-110 hover:shadow-lg duration-300 ease-in-out"
                />
                <span className="block text-center text-sm mt-2 opacity-80 group-hover:text-red-500 transition-colors duration-300">
                  Line
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Kontak;
