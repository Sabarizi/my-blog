"use client";

import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image
            src="/madina.png" // Ensure this image is in the `public` folder
            alt="Madina"
            height={50}
            width={50}
            className="rounded-lg"
          />
          <span className="ml-3 text-xl sm:text-2xl font-semibold text-purple-500">
            I Love Madina
          </span>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden">
          <button
            className="text-blue-500 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`fixed inset-x-0 top-16 bg-black p-6 space-y-4 md:space-y-0 md:static md:flex md:space-x-8 md:p-0 items-center transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          } md:translate-y-0`}
        >
          <li>
            <a
              href="/"
              className="block text-blue-500 hover:text-blue-300 transition duration-300 text-lg"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/About"
              className="block text-blue-500 hover:text-blue-300 transition duration-300 text-lg"
            >
              About Madina
            </a>
          </li>
          <li>
            <a
              href="/Reels"
              className="block text-blue-500 hover:text-blue-300 transition duration-300 text-lg"
            >
              Reels
            </a>
          </li>
          <li>
            <a
              href="/Contact"
              className="block text-blue-500 hover:text-blue-300 transition duration-300 text-lg"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
