import { id } from "./[id]";
import Link from "next/link";
import Image from "next/image";

function CS() {
  return (
    <>
      <h1 className="text-white text-shadow-lg text-center text-5xl font-extrabold mt-20 mb-8 px-8">
        GAME TECH
      </h1>
      <div className="w-4/5 h-1/2 bg-gradient-to-r from-gray-300/20 to-transparent shadow-lg border-t border-b border-gray-300 rounded-3xl backdrop-blur-md p-12 mb-60 flex flex-row justify-evenly items-center mx-10">
        <div className="px-5">
          <Image width={3000} height={1000} src="/image/kosong.png" alt="Placeholder" />
          {/* Uncomment the following lines if needed
          <h1 className="text-2xl font-bold">BIGDATA</h1>
          <br />
          <br />
          <h2>bla bla bla bla bla bla bla</h2>
          */}
        </div>
        <div className="flex flex-col items-center text-justify justify-between">
          <h1 className="text-2xl font-bold whitespace-nowrap">GAME TECH</h1>
          <div className="word-wrap break-words pl-10 pr-5 pb-5 text-gray-400 font-sans text-lg font-medium leading-normal">
            MBC Laboratory, singkatan dari Multimedia, Big Data, dan Cyber Security Laboratory, merupakan salah satu entitas penelitian yang beroperasi di bawah Kementerian Komunikasi dan Multimedia (KK NCM). Fokus utama laboratorium ini adalah mempelajari dan mengembangkan pengetahuan di bidang Cyber Security, Big Data, dan Multimedia.
          </div>
        </div>

        {/* Uncomment the following block to map through id
        {id.map(item => (
          <div className="flex flex-col mb-4" key={item.id}>
            <div className="flex flex-col">
              <div className="flex justify-center mb-2">
                <Image width={100} height={100} src={item.image} alt={item.title} />
              </div>
              <h1 className="text-lg font-semibold">{item.title}</h1>
              <p className="text-gray-500">{item.desc}</p>
              <Link href={item.url} className="text-blue-500 underline">
                See More
              </Link>
            </div>
          </div>
        ))} */}
      </div>
    </>
  );
}

export default CS;
