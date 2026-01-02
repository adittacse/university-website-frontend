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
        </ClientProviders>

      </body>
    </html>
  );
}
