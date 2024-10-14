import Image from "next/image";
import "./globals.css";

import Divisi from "@/app/components/Divisi/Divisi";
import Visi from "@/app/components/VisiMisi/VisiMisi";
import Sejarah from "@/app/components/Sejarah/Sejarah";
import Profile from "@/app/components/Profile/Profile";
import Hero from "@/app/components/Hero/Hero";



export default function Home() {
  return (
    <>
    <Hero/>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  }}>
      <Profile/>
      <Divisi />
      <Visi />
      <Sejarah />
    </div>
    </>
  );
}