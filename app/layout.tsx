import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
const geistSans = Nunito({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
  });

export const metadata: Metadata = {
  title: "Next App | Главная",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <main className="min-h-screen">
          <header/>
        {children}
        </main>
        
      </body>
    </html>
  );
}
