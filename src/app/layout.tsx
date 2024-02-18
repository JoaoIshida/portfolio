import NavBar from "./components/NavBar";
import { Providers } from "./providers";
import "./globals.css";
import ThemeSwitch from "./components/ThemeSwitch";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Joao's Portfolio</title>
        <link rel="icon" type="image/png" href="/remove.png" />
        <style>{`
          html {
            scroll-behavior: smooth
          }
        `}</style>
      </head>
      <body>
        <Providers>
          <div className="bg-light text-dark dark:bg-dark dark:text-light">
            <NavBar />
            <div className="sticky w-fit rounded-full border p-2 shadow-sm shadow-black dark:shadow-white cursor-pointer scale-110 hover:scale-125 top-[10rem] left-[87%] md:left-[94%]">
              <ThemeSwitch />
            </div>
            <main className="pt-[8rem]">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
