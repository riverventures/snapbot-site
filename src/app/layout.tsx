import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Booth — Studio-Quality Product Photos via WhatsApp",
  description:
    "Skip the $2,000 photo shoot. Send a product photo on WhatsApp, get studio-quality results in 30 seconds. trybooth.ai",
  metadataBase: new URL("https://trybooth.ai"),
  openGraph: {
    title: "Booth — Studio-Quality Product Photos via WhatsApp",
    description:
      "Skip the $2,000 photo shoot. Send a product photo on WhatsApp, get studio-quality results in 30 seconds.",
    url: "https://trybooth.ai",
    siteName: "Booth",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Booth — Studio-quality product photos via WhatsApp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Booth — Studio-Quality Product Photos via WhatsApp",
    description:
      "Skip the $2,000 photo shoot. Send a product photo on WhatsApp, get studio-quality results in 30 seconds.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
