import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  colorScheme: "dark",
  themeColor: "#080c14",
};

export const metadata = {
  title: "Sharwin Sriram | Full-Stack & Systems Software Engineer",
  description: "Developer portfolio of Sharwin Sriram K G - Full-Stack Software Engineer skilled in React, Next.js, TypeScript, Node.js, Java, and Low-Level System Design.",
  keywords: [
    "Sharwin Sriram",
    "Sharwin Sriram K G",
    "Sharwin-sriram",
    "Developer Portfolio",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Java LLD",
    "Pinesphere POS"
  ],
  authors: [{ name: "Sharwin Sriram K G" }],
  openGraph: {
    title: "Sharwin Sriram | Full-Stack & Systems Software Engineer",
    description: "Personal Portfolio showcase featuring full-stack applications, Pinesphere POS, media server streaming, and live GitHub repositories.",
    url: "https://github.com/Sharwin-sriram",
    siteName: "Sharwin Sriram Portfolio",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      style={{ colorScheme: "dark" }}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-[#080c14] text-slate-100"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
