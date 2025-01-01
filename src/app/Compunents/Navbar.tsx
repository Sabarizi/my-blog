"use client";

import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center relative">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image
            src="/madina.png"
            alt="Madina"
            height={50}
            width={50}
            className="rounded-lg"
          />
          <span className="ml-3 text-xl font-semibold">I Love Madina</span>
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
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
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
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
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row absolute md:static bg-black w-full md:w-auto top-14 left-0 md:space-x-8 text-center md:text-left py-4 md:py-0 z-10`}
        >
          <li>
            <a
              href="/"
              className="block md:inline-block px-4 py-2 hover:text-gray-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/About"
              className="block md:inline-block px-4 py-2 hover:text-gray-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/Reels"
              className="block md:inline-block px-4 py-2 hover:text-gray-300"
            >
              Reels
            </a>
          </li>
          <li>
            <a
              href="/Contact"
              className="block md:inline-block px-4 py-2 hover:text-gray-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
