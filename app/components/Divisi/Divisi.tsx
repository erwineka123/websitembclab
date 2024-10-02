"use client";
import React from "react";
import Image from "next/image";
import { id } from "./[id]";
import Link from "next/link";

function Divisi() {
  return (
    <>
      <h1 className="text-white text-shadow-lg text-3xl font-extrabold mt-20 mb-8 px-8">
        Divisi Kami
      </h1>
      <div className="flex gap-3 overflow-x-auto scrollbar-hide">
        <div className="flex space-x-4">
          {id.map(item => (
            <div className="flex-shrink-0 m-5" key={item.id}>
              <div className="w-72 h-[500px] bg-gradient-to-r from-gray-300/20 to-transparent shadow-lg rounded-3xl backdrop-blur-md p-4 flex flex-col">
                <div className="flex justify-center items-center p-5">
                  <Image width={100} height={100} src={item.image} alt="" />
                </div>
                <h1 className="text-gray-400 text-center text-2xl font-extrabold text-shadow-lg pb-2 pt-2">
                  {item.title}
                </h1>
                <p className="text-gray-400 text-center text-base font-semibold">
                  {item.desc}
                </p>
                <Link href={item.url} className="text-right text-blue-500 underline">
                  See More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Divisi;
