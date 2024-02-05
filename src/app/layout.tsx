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
      <body>
        <Providers>
          <div className="bg-light text-dark dark:bg-dark dark:text-light">
            <NavBar />
            <main className="pt-[6rem]">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
