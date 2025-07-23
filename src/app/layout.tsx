import type { Metadata } from "next";
import { Square_Peg, Montserrat, League_Spartan } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const squarePeg = Square_Peg({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-decorative",
});

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
});

const leagueSpartan = League_Spartan({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FlyFair",
  description: "Fly Better, Fly Fair",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" sizes="any" />
      </head>
      <body
        className={`${squarePeg.variable} ${montserrat.variable} ${leagueSpartan.variable} antialiased`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
