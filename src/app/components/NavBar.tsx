"use client";
import { useState } from "react";
import { useScrollDirection, useScrollProgress } from "../hooks/useScrollAnimation";
import {
  RiDownloadLine,
  RiMenuLine,
  RiCloseLine,
  RiGithubFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrollDirection = useScrollDirection();
  const scrollProgress = useScrollProgress();

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200 dark:bg-gray-700">
        <div 
          className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav 
        className={`fixed inset-x-0 top-1 z-50 transition-all duration-300 ${
          scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass backdrop-blur-md rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300">
            <div className="flex h-16 items-center justify-between px-6">
              <a href="/" className="flex-shrink-0 group">
                <img
                  src="/remove.png"
                  alt="Joao's logo"
                  className="h-10 w-auto md:h-12 group-hover:scale-105 transition-transform duration-300"
                />
              </a>
              
              <div className="hidden lg:flex lg:gap-8 text-lg">
                {["about", "experience", "projects", "contact"].map((id) => (
                  <a 
                    key={id} 
                    href={`#${id}`} 
                    className="nav-link relative py-2 px-4 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200 group"
                  >
                    <span className="relative z-10">
                      {id.charAt(0).toUpperCase() + id.slice(1)}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-200" />
                  </a>
                ))}
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
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
                </div>
                
                <div className="hidden md:flex">
                  <ResumeButtons />
                </div>
                
                <button
                  onClick={() => setOpen(!open)}
                  className="lg:hidden btn-ghost p-2 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200"
                >
                  {open ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden mt-2 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 fade-in-down">
            <div className="glass backdrop-blur-md rounded-2xl shadow-soft p-4">
              <div className="space-y-2">
                {["about", "experience", "projects", "contact"].map((id) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    className="block py-3 px-4 rounded-lg text-base hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200"
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                ))}
                <div className="pt-2 border-t border-gray-200 dark:border-gray-700 md:hidden">
                  <ResumeButtons />
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
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
      className="group relative flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-500/10 to-secondary-500/10 px-3 py-2 text-primary-600 dark:text-primary-400 hover:from-primary-500/20 hover:to-secondary-500/20 hover:-translate-y-0.5 transition-all duration-200"
    >
      <span className="group-hover:scale-110 transition-transform duration-200">
        {icon}
      </span>
      <span className="hidden md:inline text-sm font-medium">{label}</span>
    </a>
  );
}

function ResumeButtons() {
  return (
    <div className="flex overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-darkLight shadow-soft hover:shadow-medium transition-all duration-200">
      <a
        href="/Joao_Correa_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200"
      >
        View Resume
      </a>
      <a
        href="/Joao_Correa_CV.pdf"
        download
        className="flex items-center px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 border-l border-gray-200 dark:border-gray-700"
      >
        <RiDownloadLine className="hover:scale-110 transition-transform duration-200" />
        <span className="sr-only">Download resume</span>
      </a>
    </div>
  );
}