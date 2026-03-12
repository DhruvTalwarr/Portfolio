import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SpaceBackground } from "@/components/ui/SpaceBackground";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap" 
});

const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-outfit",
  display: "swap" 
});

export const metadata: Metadata = {
  title: "Dhruv Talwar - AI Engineer",
  description: "Portfolio of Dhruv Talwar. AI Engineer specializing in Generative AI, Multi-Agent Systems, Computer Vision, and Machine Learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          inter.variable, 
          outfit.variable,
          "font-sans min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 selection:text-primary relative"
        )}
      >
        <SpaceBackground />
        <div className="fixed inset-0 z-[-1] bg-grid-pattern opacity-10" />
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_100%)] pointer-events-none" />
        
        {children}
      </body>
    </html>
  );
}
