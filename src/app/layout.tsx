
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paisabuddy - Empowering Young India with Smart Money Skills",
  description: "India's premier financial literacy platform for youth. Learn budgeting, investing, and fraud prevention through interactive games and simulations.",
  keywords: "financial literacy, budgeting, investing, India, youth, money management, financial education",
  authors: [{ name: "Paisabuddy Team" }],
  openGraph: {
    title: "Paisabuddy - Smart Money Skills for Young India",
    description: "Learn financial literacy through interactive games and simulations designed for Indian youth.",
    type: "website",
    locale: "en_IN"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white min-h-screen`}>
        <Navbar />
        <div className="pt-20 pb-10 min-h-[80vh]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
