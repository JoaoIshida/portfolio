// Navbar.tsx
"use client";
import { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import { RiDownloadLine, RiMenuLine, RiCloseLine } from "react-icons/ri";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="mx-auto z-10 fixed top-0 flex items-center justify-between gap-[2rem] w-full p-4 bg-lightLight dark:bg-darkDark px-[8vw]">
      {/* Left section */}
      <a href="/" className="text-3xl">
        Joao Correa
      </a>

      {/* Centered section */}
      <div className="hidden lg:flex lg:flex-row lg:gap-[2rem]">
        <a href="#about" className="nav-link hover:underline">
          About
        </a>
        <a href="#projects" className="nav-link hover:underline">
          Projects
        </a>
        <a href="#contact" className="nav-link hover:underline">
          Contact
        </a>
      </div>

      {/* Right section */}
      <div className="flex w-fit flex-row p-0 gap-[0.25rem] rounded border border-black dark:border-white">
        <a
          href="/CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-slate-400 dark:hover:bg-slate-600 p-2 flex items-center nav-link"
        >
          View Resume
        </a>
        <a
          href="/CV.pdf"
          download="JoaoCorreaResume.pdf"
          className="p-2 hover:bg-slate-400 dark:hover:bg-slate-600 flex items-center nav-link"
        >
          <RiDownloadLine className="scale-125" />
        </a>
      </div>

      {/* Responsive menu for phones and iPads */}
      <div className="cursor-pointer hover:scale-125">
        <ThemeSwitch />
      </div>
      <div className="lg:hidden inline-flex flex-row gap-[0.25rem] m-2">
        <button
          onClick={toggleMenu}
          className="p-2 hover:bg-slate-600 flex items-center focus:outline-none border border-white rounded"
        >
          {menuOpen ? (
            <RiCloseLine className="block w-6 h-6" />
          ) : (
            <RiMenuLine className="block w-6 h-6" />
          )}
        </button>

        {/* Dropdown menu content */}
        {menuOpen && (
          <div className="absolute top-full right-0 mt-1 bg-white dark:bg-zinc-800 border border-white rounded overflow-hidden shadow-lg">
            <a
              href="about"
              className="block px-4 py-2 text-sm text-zinc-700 dark:text-white"
            >
              About
            </a>
            <a
              href="projects"
              className="block px-4 py-2 text-sm text-zinc-700 dark:text-white"
            >
              Projects
            </a>
            <a
              href="contact"
              className="block px-4 py-2 text-sm text-zinc-700 dark:text-white"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
