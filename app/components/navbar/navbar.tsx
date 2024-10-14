"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
// import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [showMenu, setShowMenu] = useState(false);
  const [showAboutMenu, setShowAboutMenu] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    setShowMenu(false); // Close main menu when hamburger menu is clicked
    setShowAboutMenu(false); // Close "About" menu when hamburger menu is clicked
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowAboutMenu(false); // Close "About" menu when main menu is toggled
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const handleAboutClick = () => {
    setShowAboutMenu(!showAboutMenu);
  };

  return (
    <div
      className={`fixed w-full z-10 backdrop-blur-lg ${
        nav ? "bg-black" : "bg-transparent"
      } ease-in duration-300`}
    >
      <div className="flex items-center justify-between h-16 px-4 pl-12">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/MBC.png"
            width={200}
            height={100}
            alt="Logo"
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex space-x-12 pr-10">
        <Link
            href="/"
            className="font-extralight text-gray-300 hover:text-white"
          >
            Beranda
          </Link>
          
          <Link
            href="/Kegiatan"
            className="font-extralight text-gray-300 hover:text-white"
          >
            Kegiatan
          </Link>
          <Link
            href="/Projek"
            className="font-extralight text-gray-300 hover:text-white"
          >
            Projek
          </Link>
          <Link
            href="/Prestasi"
            className="font-extralight text-gray-300 hover:text-white"
          >
            Prestasi
          </Link>
          <div className="relative">
            <button
              onClick={toggleMenu}
              className="font-extralight text-gray-300 hover:text-white"
            >
              Tentang
            </button>
            {showMenu && (
              <div className="absolute left-0 mt-2 py-2 w-48 bg-black rounded-lg shadow-xl">
                <Link
                  href="/Anggota/Pembina"
                  className="block px-4 py-2 text-gray-300 hover:bg-gray-700"
                >
                  Pembina
                </Link>
                <Link
                  href="/Anggota/Asisten"
                  className="block px-4 py-2 text-gray-300 hover:bg-gray-700"
                >
                  Asisten
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/Lainnya"
            className="font-extralight text-gray-300 hover:text-white"
          >
            Lainnya
          </Link>
        </div>

        {/* Hamburger Icon for Mobile Menu */}
        {/* <div onClick={handleNav} className="sm:hidden z-10 cursor-pointer">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div> */}

        {/* Mobile Menu */}
        <div
          className={`${
            nav ? "left-0" : "left-full"
          } sm:hidden absolute top-0 right-0 bottom-0 w-2/3 h-screen bg-black flex flex-col justify-center items-center text-gray-300 text-xl space-y-8 transition-all ease-in-out duration-300`}
        >
          <Link href="/" onClick={handleNav} className="hover:text-white">
            Beranda
          </Link>
          <Link
            href="/Kegiatan"
            onClick={handleNav}
            className="hover:text-white"
          >
            Kegiatan
          </Link>
          <Link href="/Projek" onClick={handleNav} className="hover:text-white">
            Projek
          </Link>
          <Link
            href="/Prestasi"
            onClick={handleNav}
            className="hover:text-white"
          >
            Prestasi
          </Link>
          <button onClick={handleAboutClick} className="hover:text-white">
            Tentang
          </button>
          {showAboutMenu && (
            <div className="flex flex-col space-y-4">
              <Link
                href="/Anggota/Pembina"
                onClick={handleNav}
                className="hover:text-white"
              >
                Pembina
              </Link>
              <Link
                href="/Anggota/Asisten"
                onClick={handleNav}
                className="hover:text-white"
              >
                Asisten
              </Link>
            </div>
          )}
          <Link
            href="/Lainnya"
            onClick={handleNav}
            className="hover:text-white"
          >
            Lainnya
          </Link>
        </div>
      </div>
    </div>
  );
}
