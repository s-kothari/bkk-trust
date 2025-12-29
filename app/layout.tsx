import type { Metadata } from "next";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import Footer from "@/components/footer";
import HeaderShell from "./components/HeaderShell";
import Shell from "./components/Shell";
import React from "react";

export const metadata: Metadata = {
  title: "Bhimraj Kamlawati Kothari Charitable Trust (BKK Charitable Trust)",
  description:
    "Bhimraj Kamlawati Kothari Charitable Trust (BKK Charitable Trust) empowers women and children in Jaipur, Rajasthan.",
  metadataBase: new URL("https://www.bkkotharitrust.org"),
  // Icons are now handled by file conventions in /app: favicon.ico, icon.png, and apple-icon.png
  manifest: "/manifest.json",
  openGraph: {
    title: "Bhimraj Kamlawati Kothari Charitable Trust (BKK Charitable Trust)",
    description:
      "Bhimraj Kamlawati Kothari Charitable Trust (BKK Charitable Trust) empowers women and children in Jaipur, Rajasthan.",
    url: "https://www.bkkotharitrust.org",
    siteName:
      "Bhimraj Kamlawati Kothari Charitable Trust (BKK Charitable Trust)",
    images: [
      { url: "/impact/childrens_art_class.png", width: 1200, height: 630 },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhimraj Kamlawati Kothari Charitable Trust (BKK Charitable Trust)",
    description:
      "Bhimraj Kamlawati Kothari Charitable Trust (BKK Charitable Trust) empowers women and children in Jaipur, Rajasthan.",
    images: ["/impact/childrens_art_class.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Header is a client component; wrap in Suspense to avoid hydration flicker
  return (
    <html lang="en">
      <body className="bg-page-background">
        {/* Header controls page padding; it is positioned fixed */}
        <HeaderShell />
        <Shell>{children}</Shell>
        <Footer />
      </body>
    </html>
  );
}
