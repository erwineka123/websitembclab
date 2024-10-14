"use client";
import Image from "next/image";

const ProfileHeader: React.FC = () => (
  <h1 className=" text-white text-3xl font-extrabold shadow-lg my-10 p-5">
    Profile
  </h1>
);

const ProfileContent: React.FC = () => (
  <div className="w-4/5  bg-gradient-to-t from-gray-300/20 to-transparent rounded-3xl backdrop-blur-md shadow-lg p-10">
    <div className="grid grid-cols-2 justify-center items-center gap-20 pb-10">
      <Image width={500} height={500} src="/NCM.png" alt="NCM" />
      <Image width={500} height={500} src="/MBC.png" alt="MBC" />
    </div>
    <div className="text-justify text-white">
      MBC Laboratory, singkatan dari Multimedia, Big Data, dan Cyber Security
      Laboratory, merupakan salah satu entitas penelitian yang beroperasi di
      bawah Kementerian Komunikasi dan Multimedia (KK NCM). Fokus utama
      laboratorium ini adalah mempelajari dan mengembangkan pengetahuan di
      bidang Cyber Security, Big Data, dan Multimedia.
      <br />
      <br />
      Didirikan pada tanggal 4 Oktober 2019, MBC Laboratory telah menjadi pusat
      penelitian yang berdedikasi untuk memahami, mengatasi, dan mengembangkan
      solusi terkini dalam tiga bidang utamanya.
    </div>
  </div>
);

const Profile: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-blend-darken">
      <ProfileHeader />
      <ProfileContent />
    </div>
  );
};

export default Profile;
