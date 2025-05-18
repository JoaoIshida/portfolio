"use client";
import { useState } from "react";
import {
  RiDownloadLine,
  RiMenuLine,
  RiCloseLine,
  RiGithubFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-10 bg-lightLight dark:bg-darkDark shadow">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-20 lg:px-16">
        <a href="/" className="flex-shrink-0">
          <img
            src="/remove.png"
            alt="Joao's logo"
            className="h-10 w-auto md:h-12 hover:scale-105 transition-transform"
          />
        </a>
        <div className="hidden lg:flex lg:gap-8 text-lg">
          {["about", "projects", "contact"].map((id) => (
            <a key={id} href={`#${id}`} className="nav-link hover:underline">
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4 text-xl">
          <SocialLink
            href="https://github.com/joaoishida"
            icon={<RiGithubFill />}
            label="GitHub"
          />
          <SocialLink
            href="https://www.linkedin.com/in/joaoishida"
            icon={<RiLinkedinBoxFill />}
            label="LinkedIn"
          />
          <div className="hidden md:flex" >
          <ResumeButtons />
          </div>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center rounded border border-black dark:border-white p-2 lg:hidden"
        >
          {open ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden space-y-1 border-t border-lightDark dark:border-darkLight bg-lightLight dark:bg-darkDark px-4 pb-4 pt-2">
          {["about", "projects", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className="block rounded py-2 text-base hover:bg-slate-200 dark:hover:bg-slate-700"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
          <div className="mt-2 flex flex-col gap-1 md:hidden">
            <ResumeButtons />
          </div>
        </div>
      )}
    </nav>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 rounded-full bg-lightDark dark:bg-darkLight px-4 py-2 hover:-translate-y-0.5 transition"
    >
      {icon}
      <span className="hidden md:inline">{label}</span>
    </a>
  );
}

function ResumeButtons() {
  return (
    <div className="flex overflow-hidden rounded border border-black dark:border-white">
      <a
        href="/Joao_Correa_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-link px-3 py-2 hover:bg-slate-300 dark:hover:bg-slate-600"
      >
        View Resume
      </a>
      <a
        href="/Joao_Correa_CV.pdf"
        download
        className="flex items-center px-3 py-2 hover:bg-slate-300 dark:hover:bg-slate-600"
      >
        <RiDownloadLine />
        <span className="sr-only">Download resume</span>
      </a>
    </div>
  );
}