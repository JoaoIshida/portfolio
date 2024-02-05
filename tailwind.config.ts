import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#222",
        light: "#f6f6f6",
        darkLight: "#444",
        lightDark: "#d9d9d9",
        darkDark: "#111",
        lightLight: "#e0e0e0",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

export default config;
