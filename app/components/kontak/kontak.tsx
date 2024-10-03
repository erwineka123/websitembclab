import React from 'react';
import Image from 'next/image';

const Kontak: React.FC = () => {
  return (
    <>
      <h1 className="text-white text-3xl md:text-4xl font-black text-center mt-20 mb-8 shadow-lg">
        Hubungi Kami
      </h1>
      <div className="w-[80vw] h-[50vh] bg-gradient-to-br from-white/20 to-white/5 shadow-lg border-t border-b border-white/30 rounded-2xl backdrop-blur-lg p-8 mb-16 flex justify-between">
        <div className="w-[calc(50%-10px)] flex flex-col justify-between p-4">
          <h1 className="text-xl md:text-2xl font-bold">Kunjungi Laboratorium kami</h1>
          <br />
          <h2 className="text-base md:text-lg">
            Telkom University, TULT 10.04, Jl. Telekomunikasi. 1, Terusan
            Buahbatu - Bojongsoang, Telkom University, Sukapura, Kec.
            Dayeuhkolot, Kabupaten Bandung, Jawa Barat 40257
          </h2>
        </div>
        <div className="w-[calc(50%-10px)] flex flex-col justify-between p-4">
          <h1 className="text-xl md:text-2xl font-bold">Ikuti Kami</h1>
          <div className="flex flex-col gap-4">
            <Image width={40} height={40} src="/image/logo/linkid.png" alt="LinkedIn Logo" />
            <Image width={40} height={40} src="/image/logo/ig.png" alt="Instagram Logo" />
            <Image width={40} height={40} src="/image/logo/Line.png" alt="Line Logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Kontak;
