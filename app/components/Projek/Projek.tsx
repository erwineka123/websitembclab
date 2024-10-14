"use client";
import React from "react";
import Image from "next/image";
import { id } from "./[id]";
import Link from "next/link";

function Projek() {
  return (
    <>
      <h1 className="text-white text-3xl font-extrabold my-10 p-5 text-center">
        Proyek Kami
      </h1>
      <div className="gap-3 overflow-x-auto scrollbar-hide">
        <div className="grid grid-cols-4 space-x-4">
          {id.map((item) => (
            <div className="" key={item.id}>
              <div className="mx-10 w-fit h-[500px] bg-gradient-to-t from-gray-300/20 to-transparent rounded-3xl backdrop-blur-md shadow-lg p-4 flex flex-col justify-between relative ">
                <div className="flex flex-col items-center">
                  <div className="flex justify-center items-center p-5">
                    <Image width={100} height={100} src={item.image} alt="" />
                  </div>
                  <h1 className="text-gray-400 text-center text-2xl font-bold pb-2 pt-2">
                    {item.title}
                  </h1>
                  <p className="text-gray-400 text-base font-light text-center">
                    {item.desc}
                  </p>
                </div>
                <div className="absolute bottom-4 right-4">
                  <Link
                    href={item.url}
                    className="text-gray-400 hover:text-white"
                  >
                    See More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projek;
