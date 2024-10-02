import { id } from "./[id]";
import Link from "next/link";
import Image from "next/image";

const CS = () => {
  return (
    <>
      <h1 className="text-white text-6xl font-extrabold text-center mt-20 mb-8 shadow-lg">
        CYBER SECURITY
      </h1>
      <div className="w-4/5 h-[50vh] bg-gray-200/20 backdrop-blur-md shadow-lg border-t border-white/50 border-b border-black/50 rounded-xl p-12 flex flex-row justify-evenly items-center ml-[10vw] mb-[15.9vh]">
        <div className="px-12">
          <Image width={3000} height={1000} src="/image/kosong.png" alt="Cyber Security" />
          {/* <h1 className="text-xl font-bold">BIGDATA</h1><br /><br />
          <h2>bla bla bla bla bla bla bla</h2> */}
        </div>
        <div className="flex flex-col items-center justify-between text-justify">
          <h1 className="text-2xl font-bold whitespace-nowrap mb-4">CYBER SECURITY</h1>
          <div className="text-lg text-gray-300 leading-normal p-8">
            <h2>
              MBC Laboratory, singkatan dari Multimedia, Big Data, dan Cyber Security Laboratory, merupakan salah satu entitas penelitian yang beroperasi di bawah Kementerian Komunikasi dan Multimedia (KK NCM). Fokus utama laboratorium ini adalah mempelajari dan mengembangkan pengetahuan di bidang Cyber Security, Big Data, dan Multimedia.
            </h2>
          </div>
        </div>

        {/* {id.map((item) => (
          <div key={item.id} className="w-full">
            <div className="flex justify-between items-center">
              <Image width={100} height={100} src={item.image} alt={item.title} />
              <h1 className="text-lg font-bold">{item.title}</h1>
              <p>{item.desc}</p>
              <Link href={item.url} className="text-blue-500 underline">See More</Link>
            </div>
          </div>
        ))} */}
      </div>
    </>
  );
};

export default CS;
