import type { Metadata } from "next";
import { Cinzel, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
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
    images: [
      {
        url: "/church-image.png",
        width: 1200,
        height: 630,
        alt: "St. Ann's RCM Church",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "St. Ann's RCM Church - Sattenapalle",
    description: "Welcome to our spiritual home. Join us in worship, prayer, and community.",
    images: ["/church-image.png"],
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
      className={`${cinzel.variable} ${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-950 text-gray-100">
        {/* Skip to main content link for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-amber-500 focus:text-gray-950 focus:rounded-lg focus:font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-gray-950"
        >
          Skip to main content
        </a>
        <main id="main-content" className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
