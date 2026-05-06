import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "St. Ann's RCM Church - Sattenapalle, Andhra Pradesh",
  description: "Welcome to St. Ann's RCM Church in Sattenapalle, Andhra Pradesh. Join us for Mass, prayer, and community. Led by Fr. Rajesh Kumar Nettam.",
  keywords: ["Catholic Church", "St. Ann's RCM Church", "Sattenapalle", "Andhra Pradesh", "Mass Times", "Catholic Parish"],
  authors: [{ name: "St. Ann's RCM Church" }],
  openGraph: {
    title: "St. Ann's RCM Church - Sattenapalle",
    description: "Welcome to our spiritual home. Join us in worship, prayer, and community.",
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
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
