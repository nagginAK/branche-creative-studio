import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import SideRail from "@/components/SideRail";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "BC Studio — Brand Identity & Creative Direction",
  description:
    "Principal-led brand identity firm. Brand identity and design for businesses that mean business. South Florida.",
  openGraph: {
    title: "BC Studio — Brand Identity & Creative Direction",
    description:
      "Principal-led brand identity firm. Brand identity and design for businesses that mean business.",
    url: "https://www.branchecreative.co",
    siteName: "BC Studio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0E0B07] text-[#F2EDE4]">
        <SideRail />
        {children}
      </body>
    </html>
  );
}
