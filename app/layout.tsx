import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Load Inter font
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

// SEO Metadata - Update with your information
export const metadata: Metadata = {
  title: "Nayana | Portfolio",
  description: "Modern portfolio website showcasing projects, skills, and experience",
  keywords: ["portfolio", "web developer", "next.js", "react", "typescript"],
  authors: [{ name: "Nayana" }],
  openGraph: {
    title: "Nayana | Portfolio",
    description: "Modern portfolio website showcasing projects, skills, and experience",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Navigation Bar */}
        <Navbar />
        
        {/* Main Content */}
        <main className="min-h-screen">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}

