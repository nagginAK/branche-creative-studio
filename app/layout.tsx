import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  axes: ["opsz"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.branchecreative.co"),
  title: "BC Studio — Branche Creative Studio",
  description:
    "Principal-led design studio. Brand identity, print, packaging, in-store media and motion for businesses that need to look as serious as they are. South Florida.",
  openGraph: {
    title: "BC Studio — Branche Creative Studio",
    description:
      "Brand identity, print, packaging, in-store media and motion. Built to be seen. Made to last.",
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
      className={`${inter.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F2F0EA] text-[#111111]">
        {children}
      </body>
    </html>
  );
}
