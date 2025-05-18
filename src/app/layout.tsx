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
              <ThemeSwitch />
            <main className="pt-[6rem]">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
