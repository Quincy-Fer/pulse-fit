'use client'

import { useState } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import Image from "next/image";
import Link from "next/link";
import { NAVLINKS } from "@/constants/index";
import ButtonJoin from "./ButtonJoin";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current pathname

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed flex items-center justify-between px-6 lg:px-14 z-30 py-2 w-full mx-auto bg-black" id="home">
      {/* Logo */}
      <Link href="/">
        <Image
          src={"/images/logo-no-background.png"}
          height={100}
          width={100}
          alt="logo"
          priority={true}
          className="py-1"
        />
      </Link>

      {/* Hamburger Icon for Mobile */}
      <button
        className="lg:hidden text-white focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          ></path>
        </svg>
      </button>

      {/* Links Desktop */}
      <nav className="hidden lg:flex gap-4">
        {NAVLINKS.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            className={`text-white uppercase hover:text-accent transition-all font-bold text-base ${
              pathname === item.href ? 'text-red-600' : ''
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-20 flex flex-col items-center justify-center lg:hidden">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white text-3xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Close Menu"
          >
            &times;
          </button>

          <nav className="flex flex-col items-center">
            {NAVLINKS.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`text-white uppercase hover:text-accent transition-all font-bold text-base py-4 ${
                  pathname === item.href ? 'text-red-600' : ''
                }`}
                onClick={toggleMenu} // Close menu after click
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ButtonJoin
            href="/membership"
            text="Join Now"
            containerStyles="w-full text-center py-4 px-4 text-white bg-accent uppercase font-bold hover:bg-black hover:text-accent transition-all duration-300 mt-4"
          />
        </div>
      )}

      <div className="hidden lg:block">
        <ButtonJoin
          href="/membership"
          text="Join Now"
          containerStyles="px-8 py-3 text-white bg-accent uppercase font-bold hover:bg-black hover:text-accent transition-all duration-300"
        />
      </div>
    </header>
  );
};

export default Header;

