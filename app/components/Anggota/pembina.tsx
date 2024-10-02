"use client";
import React, { useEffect } from "react";
// import AOS from "aos";
import "aos/dist/aos.css";
import { id } from "../Anggota/[id]";

// const Pembina: React.FC = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 2000,
//       once: true,
//     });

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

const pembinaData = id.pembina;

const Pembina: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-white text-4xl font-black text-center mt-[20vh] mb-8">
        Pembina
      </h1>
      <div className="flex flex-wrap justify-center gap-5 w-[80vw] mb-[10vh]">
        {pembinaData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center w-[calc(25%-10px)] mt-2 mb-2"
            data-aos="fade-up"
          >
            <div className="flex flex-col items-center justify-center w-[18vw] h-[30vw] bg-gradient-to-r from-gray-500 via-white/10 to-gray-800 rounded-3xl shadow-lg p-5 backdrop-blur-lg border-t border-gray-400 border-b border-black">
              <div className="mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <h3 className="text-sm font-semibold text-gray-400">
                  {item.posisi}
                </h3>
                <h3 className="text-sm font-semibold text-gray-400">
                  {item.nip}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pembina;
