"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { id } from "./[id]";
import AOS from "aos";
import "aos/dist/aos.css";

interface Item {
  id: string;
  image: string;
  title: string;
  desc: string;
  divisi: string;
}

const struktur = id.struktur as any[];
const bd = id.bd as any[];
const cs = id.cs as any[];
const gt = id.gt as any[];
const gis = id.gis as any[];

const Asisten: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-white text-4xl font-black my-20 text-center">
        Asisten Riset
      </h1>
      <h1 className="text-white text-4xl font-black mb-8 text-center">
        Inti Kepengurusan Tahun 2023/2024
      </h1>

      <div className="flex flex-wrap justify-center gap-5 w-4/5 mb-20">
        {struktur.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center w-1/4"
            data-aos="fade-up"
          >
            <div className="flex flex-col items-center justify-center bg-white/10 p-8 rounded-2xl backdrop-blur-lg shadow-lg">
              <div className="w-full mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={300}
                  className="w-full rounded-xl"
                />
              </div>
              <div className="text-center">
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
                <h3 className="text-white text-lg font-semibold">{item.desc}</h3>
                <h3 className="text-white text-lg font-semibold">{item.divisi}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tambahkan bagian lain sesuai dengan struktur yang ada */}
    </div>
  );
};

export default Asisten;
