"use client";

import React, { useEffect } from "react";
import { id } from "../Anggota/[id]";
// import AOS from "";
import "aos/dist/aos.css";

interface Item {
  id: string;
  image: string;
  title: string;
  desc: string;
  divisi: string;
}

// const Asisten: React.FC = () => {
//   // useEffect(() => {
//   //   AOS.init({
//   //     duration: 2000,
//   //     once: true,
//  } // });

//   const handleScroll = () => {
//     const elements = document.querySelectorAll("[data-aos]");
//     elements.forEach((element) => {
//       const rect = element.getBoundingClientRect();
//       const topVisible = rect.top <= window.innerHeight;
//       const bottomVisible = rect.bottom <= window.innerHeight;

//       if (topVisible && bottomVisible) {
//         element.classList.add("aos-animate");
//       }
//     });
//   };

//   window.addEventListener("scroll", handleScroll);

//   return () => {
//     window.removeEventListener("scroll", handleScroll);
//   };
// // }, []);

const struktur = id.struktur as any[];
const bd = id.bd as any[];
const cs = id.cs as any[];
const gt = id.gt as any[];
const gis = id.gis as any[];

const Asisten: React.FC = () => {
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
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full rounded-xl"
                />
              </div>
              <div className="text-center">
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
                <h3 className="text-white text-lg font-semibold">
                  {item.desc}
                </h3>
                <h3 className="text-white text-lg font-semibold">
                  {item.divisi}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h1 className="text-white text-4xl font-black mb-8 text-center">
        Big Data
      </h1>
      <div className="flex flex-wrap justify-center gap-5 w-4/5 mb-20">
        {bd.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center w-1/4"
            data-aos="fade-up"
          >
            <div className="flex flex-col items-center justify-center bg-white/10 p-8 rounded-2xl backdrop-blur-lg shadow-lg">
              <div className="w-full mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full rounded-xl"
                />
              </div>
              <div className="text-center">
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
                <h3 className="text-white text-lg font-semibold">
                  {item.desc}
                </h3>
                <h3 className="text-white text-lg font-semibold">
                  {item.divisi}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Similar structures for other sections like Cyber Security, GIS, and Game Tech */}

      <h1 className="text-white text-4xl font-black mb-8 text-center">
        Game Tech
      </h1>
      <div className="flex flex-wrap justify-center gap-5 w-4/5 mb-20">
        {gt.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center w-1/4"
            data-aos="fade-up"
          >
            <div className="flex flex-col items-center justify-center bg-white/10 p-8 rounded-2xl backdrop-blur-lg shadow-lg">
              <div className="w-full mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full rounded-xl"
                />
              </div>
              <div className="text-center">
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
                <h3 className="text-white text-lg font-semibold">
                  {item.desc}
                </h3>
                <h3 className="text-white text-lg font-semibold">
                  {item.divisi}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
