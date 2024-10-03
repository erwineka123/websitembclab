"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Item {
  id: number;
  image: string;
  title: string;
  desc: string;
  url: string;
}

const id: Item[] = [
  // Example data, replace with actual data
  { id: 1, image: "/path/to/image.jpg", title: "Prestasi 1", desc: "Deskripsi prestasi 1", url: "/prestasi/1" },
  { id: 2, image: "/path/to/image2.jpg", title: "Prestasi 2", desc: "Deskripsi prestasi 2", url: "/prestasi/2" },
];

function Prestasi() {
  return (
    <>
      <h1 className="text-white text-4xl font-extrabold text-center mt-20 mb-8 shadow-md">
        Prestasi Kami
      </h1>
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory">
        {id.map((item) => (
          <div key={item.id} className="snap-start flex-shrink-0 p-4 w-[65vw] sm:w-[20vw] bg-gray-200/20 shadow-md border border-gray-500 rounded-xl backdrop-blur-lg">
            <div className="flex justify-center p-8">
              <Image src={item.image} width={256} height={256} alt={item.title} />
            </div>
            <h1 className="text-2xl font-bold text-center mb-2 shadow-sm">{item.title}</h1>
            <p className="text-sm text-center mb-4">{item.desc}</p>
            <Link href={item.url}>
              <a className="block text-right text-blue-600 font-semibold underline">See More</a>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Prestasi;
