import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KABUYA NSUNGULA Junior — Développeur Full Stack & IT Systèmes",
  description:
    "Portfolio de KABUYA NSUNGULA Junior, développeur Full Stack orienté backend (Laravel, React, API REST) avec expérience en systèmes et réseaux.",
  icons: {
    icon: "/assets/photo.png",
    apple: "/assets/photo.png",
  },
    keywords: [
    "développeur full stack",
    "backend",
    "Laravel",
    "React",
    "React Native",
    "TypeScript",
    "Docker",
    "systèmes réseaux",
    "KABUYA NSUNGULA Junior",
    "zibu",
    "zibu9",
    "zibu28",
  ],
  authors: [{ name: "KABUYA NSUNGULA Junior" }],
  openGraph: {
    title: "KABUYA NSUNGULA Junior — Développeur Full Stack & IT Systèmes",
    description:
      "Développeur Full Stack orienté backend avec expérience en systèmes et réseaux.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`} suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
