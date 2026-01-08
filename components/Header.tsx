"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative">
      {/* Top Bar */}
      <div className="bg-[#E9ECFF] h-20 px-5 flex justify-between items-center">
        <Image
          src="/Logo.png"
          alt="Company Logo"
          width={120}
          height={200}
          className="cursor-pointer"
        />

        {/* Desktop Menu */}
        <nav className="hidden sm:flex space-x-10 text-[17px] items-center">
          <Link href="/">HOME</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/reserve">
            <button className="bg-[#808CFD] text-white px-4 py-2 rounded-sm">
              RESERVE YOUR SPOT
            </button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(true)}
          className="sm:hidden"
        >
          <Image
            src="/Union.png"
            alt="Menu Icon"
            width={24}
            height={24}
          />
        </button>
      </div>

      {/* FULL SCREEN MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 bg-[#E9ECFF] z-50
                        flex flex-row justify-evenly items-center">

          <Link href="/" onClick={() => setOpen(false)}>
            HOME
          </Link>

          <Link href="/about" onClick={() => setOpen(false)}>
            ABOUT
          </Link>

          <Link href="/reserve" onClick={() => setOpen(false)}>
            <span className="bg-[#808CFD] text-white px-4 py-2 rounded-sm">
              RESERVE
            </span>
          </Link>

          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-2xl"
          >
            ✕
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
