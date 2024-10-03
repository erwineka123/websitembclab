'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
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
        setColor('#ffffff');
        setTextColor('#000000');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
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
    <div className={`fixed w-full z-10 backdrop-blur-lg ${nav ? 'bg-black' : 'bg-transparent'} ease-in duration-300`}>
      <div className="flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/image/MBC.png"
            width={50}
            height={50}
            alt="Logo"
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex space-x-8">
          <Link href="/" className="text-lg text-white hover:text-gray-400">Beranda</Link>
          <Link href="/kegiatan" className="text-lg text-white hover:text-gray-400">Kegiatan</Link>
          <Link href="/projek" className="text-lg text-white hover:text-gray-400">Projek</Link>
          <Link href="/prestasi" className="text-lg text-white hover:text-gray-400">Prestasi</Link>
          <div className="relative">
            <button onClick={toggleMenu} className="text-lg text-white hover:text-gray-400">Tentang</button>
            {showMenu && (
              <div className="absolute left-0 mt-2 py-2 w-48 bg-black rounded-lg shadow-xl">
                <Link href="/" className="block px-4 py-2 text-white hover:bg-gray-700">Divisi</Link>
                <Link href="/anggota/pembina" className="block px-4 py-2 text-white hover:bg-gray-700">Pembina</Link>
                <Link href="/anggota/asisten" className="block px-4 py-2 text-white hover:bg-gray-700">Asisten</Link>
              </div>
            )}
          </div>
          <Link href="/lainnya" className="text-lg text-white hover:text-gray-400">Lainnya</Link>
        </div>

        {/* Hamburger Icon for Mobile Menu */}
        <div onClick={handleNav} className="sm:hidden z-10 cursor-pointer">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>

        {/* Mobile Menu */}
        <div className={`${nav ? 'left-0' : 'left-full'} sm:hidden absolute top-0 right-0 bottom-0 w-2/3 h-screen bg-black flex flex-col justify-center items-center text-white text-xl space-y-8 transition-all ease-in-out duration-300`}>
          <Link href="/" onClick={handleNav} className="hover:text-gray-400">Beranda</Link>
          <Link href="/kegiatan" onClick={handleNav} className="hover:text-gray-400">Kegiatan</Link>
          <Link href="/projek" onClick={handleNav} className="hover:text-gray-400">Projek</Link>
          <Link href="/prestasi" onClick={handleNav} className="hover:text-gray-400">Prestasi</Link>
          <button onClick={handleAboutClick} className="hover:text-gray-400">Tentang</button>
          {showAboutMenu && (
            <div className="flex flex-col space-y-4">
              <Link href="/anggota/pembina" onClick={handleNav} className="hover:text-gray-400">Pembina</Link>
              <Link href="/anggota/asisten" onClick={handleNav} className="hover:text-gray-400">Asisten</Link>
            </div>
          )}
          <Link href="/lainnya" onClick={handleNav} className="hover:text-gray-400">Lainnya</Link>
        </div>
      </div>
    </div>
  );
}
