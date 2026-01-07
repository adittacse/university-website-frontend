import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientProviders from "./client-providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
<<<<<<< HEAD
    title: "University Website",
    description: "Official University Portal",
};


export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        <ClientProviders>

          {/* Sticky Navbar */}
          <div className="sticky top-0 z-50">
            <header className="bg-white/80 backdrop-blur-lg border-b border-slate-200">
              <Navbar />
            </header>
          </div>

          {/* Main content (NO overflow here) */}
          <main className="bg-gradient-to-r from-cyan-50 via-white to-cyan-50">
            {children}
          </main>

          <Footer />

=======
  title: "University Website",
  description: "Official University Portal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        <ClientProviders>
          {/* Header */}
          <header className="md:w-11/12 mx-auto">
            <Navbar />
          </header>

          {/* Main */}
          <main className="md:w-11/12 mx-auto min-h-[calc(100vh-302px)]">
            {children}
          </main>

          {/* Footer */}
          <footer>
            <Footer />
          </footer>
>>>>>>> 4fba2396524211f47ea000b97c8da93261a1ffa1
        </ClientProviders>

      </body>
    </html>
  );
}
