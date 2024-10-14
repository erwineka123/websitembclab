"use client";
import React from "react";

const Visi: React.FC = () => (
  <div className="section mb-12">
    <h1 className="section-title text-white text-3xl font-bold mb-4 text-center">
      Visi
    </h1>
    <div className="section-content text-gray-300 text-lg">
      Menjadi Laboratorium unggulan dalam pengembangan teknologi Multimedia
      Application, Big Data, dan Cybersecurity dengan mendorong eksplorasi dan
      merancang riset yang memberikan dampak positif dan mengikuti perkembangan
      teknologi masa kini serta menjadi lingkungan yang membentuk, mematangkan,
      dan mempersiapkan skill asisten MBC Laboratory agar dapat bersaing di
      Industri.
      <br />- Kawah Candradimuka
    </div>
  </div>
);

const Misi: React.FC = () => (
  <div className="section">
    <h1 className="section-title text-white text-3xl font-bold mb-4 text-center">
      Misi
    </h1>
    <div className="section-content text-gray-300 text-lg">
      1. Menjadi lingkungan yang mendukung pembelajaran dan penelitian jangka
      panjang.
      <br />
      2. Menciptakan lingkungan yang fokus pada pertumbuhan pribadi dan
      profesional serta mendukung career
      <br />
      3. Menjadi pusat informasi Teknologi, Multimedia, dan Softskill yang
      berguna bagi mahasiswa
      <br />
      <br />
      <br />
      <br />
      <div className="text-center">
        “Work Life Balance bukan berarti melakukan sesuatu secara singkat namun
        efektif”
      </div>
    </div>
  </div>
);

const VisiMisi: React.FC = () => (
  <div className="container flex flex-col items-center text-justify py-20  text-white">
    <h1 className="text-white text-3xl font-extrabold  my-10 p-5">
      Visi & Misi
    </h1>
    <div className="w-4/5 bg-gradient-to-t from-gray-300/20 to-transparent rounded-3xl backdrop-blur-md shadow-lg p-10">
      <Visi />
      <Misi />
    </div>
  </div>
);

export default VisiMisi;
