import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stockdale Higher Education Institute",
  description: "A global community of scholars — innovate, create, succeed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/* Preload critical font weights — eliminates FOUT on first paint */}
        <link rel="preload" href="/fonts/helveticaneueroman-webfont.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/helveticaneuemedium-webfont.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/helveticaneuebold-webfont.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/agatho_regular-webfont.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/agatho__bold-webfont.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
