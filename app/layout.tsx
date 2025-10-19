import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LandSlide Studios | Game Development & Technical Solutions",
  description: "Professional game development studio specializing in creative direction, technical infrastructure, and business operations. Led by experienced founders Thomas Maglietto (CEO) and Jackson Alvarez (CTO).",
  keywords: "game development, game design, technical infrastructure, MVP development, Unity, Unreal Engine, indie games, game studio",
  authors: [{ name: "LandSlide Studios" }],
  openGraph: {
    title: "LandSlide Studios | Game Development & Technical Solutions",
    description: "Professional game development studio specializing in creative direction, technical infrastructure, and business operations.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "LandSlide Studios | Game Development & Technical Solutions",
    description: "Professional game development studio specializing in creative direction, technical infrastructure, and business operations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
