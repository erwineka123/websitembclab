import React from "react";
import Image from "next/image";

const Sejarah: React.FC = () => {
  return (
    <>
      <h1 className="text-white text-4xl font-extrabold text-center mt-20 mb-10">
        Sejarah
      </h1>
      <div className="w-4/5 bg-gradient-to-t from-gray-300/20 to-transparent rounded-3xl backdrop-blur-md shadow-lg p-16 mx-auto mb-24">
        <div className="flex gap-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-300 mb-32">2019</h1>
            <h1 className="text-3xl font-bold text-gray-300 my-32">2020</h1>
            <h1 className="text-3xl font-bold text-gray-300 my-44">2021</h1>
            <h1 className="text-3xl font-bold text-gray-300 mt-32">
              2022 - Seterusnya
            </h1>
          </div>
          <div className="relative">
            <Image
              width={40}
              height={20}
              src="/garis.svg"
              alt="Illustration"
              className="mb-4"
            />
            {/* <Image
              width={60}
              height={60}
              src="/bulet.svg"
              alt="Illustration"
              className="absolute top-0 left-0"
            /> */}
          </div>
          <div className="text-gray-300 text-lg font-semibold space-y-12">
            <div>
              <h1 className="text-2xl font-extrabold mb-2">
                MBC Laboratory Berdiri
              </h1>
              <p className="font-extralight">
                MBC Laboratory didirikan di bawah naungan Kementerian Komunikasi
                dan Multimedia (KK NCM) dengan fokus pada tiga bidang utama:
                Cyber Security, Big Data, dan Multimedia.
              </p>
            </div>
            <div>
              <h1 className="text-2xl font-extrabold mb-2">
                Kolaborasi dan Integrasi Pengetahuan
              </h1>
              <p className="font-extralight">
                MBC Laboratory menjadi wadah kolaboratif bagi peneliti,
                akademisi, dan profesional, memungkinkan integrasi pengetahuan
                dalam pengembangan solusi lintas disiplin.
              </p>
            </div>
            <div>
              <h1 className="text-2xl font-extrabold mb-2">
                Pengembangan Seluruh Divisi
              </h1>
              <p className="font-extralight">
                MBC Laboratory memantapkan seluruh divisi, melakukan studi
                mendalam tentang masing-masing bidang yang ditekuni.
              </p>
            </div>
            <div>
              <h1 className="text-2xl font-extrabold mb-2">
                Pusat Penelitian Unggulan
              </h1>
              <p className="font-extralight">
                MBC Laboratory berkembang menjadi pusat penelitian unggulan yang
                memimpin dalam pemahaman dan penanganan tantangan kompleks dalam
                Cyber Security, Big Data, dan Multimedia.
              </p>
            </div>
            <div>
              <h1 className="text-2xl font-extrabold mb-2">
                Inovasi dan Kontribusi pada Era Digital
              </h1>
              <p className="font-extralight">
                MBC Laboratory terus berkomitmen untuk menyediakan solusi
                inovatif melalui riset dan pengembangan, menjadi garda terdepan
                dalam teknologi dan keamanan di era digital.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sejarah;
