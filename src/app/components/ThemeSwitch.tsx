// components/ThemeToggle.tsx
"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggle = () =>
    setTheme(resolvedTheme === "dark" ? "light" : "dark");

  // entire 44×44 px circle is the button now
  return (
    <button
      onClick={toggle}
      aria-label="Toggle light/dark theme"
      className="sticky top-[7rem] left-[87%] md:left-[94%]
                 z-50 w-11 h-11 rounded-full border p-2
                 shadow-sm shadow-black dark:shadow-white
                 bg-light text-dark dark:bg-dark dark:text-light
                 transition-transform scale-110 hover:scale-125
                 focus:outline-none flex items-center justify-center"
    >
      {mounted &&
        (resolvedTheme === "dark" ? (
          <FiSun className="h-5 w-5 m-auto" />
        ) : (
          <FiMoon className="h-5 w-5 m-auto" />
        ))}
    </button>
  );
}
