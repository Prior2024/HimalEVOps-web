import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import WhatsAppButton from "./components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "HimalEVOps | EV Charging Monitoring Nepal",
  description: "24/7 remote monitoring and troubleshooting for EV chargers in Nepal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-[#050814] text-white flex flex-col min-h-screen`}>
        
        <Navbar />
        
        <main className="flex-grow pt-10">
          {/* Global Live Ticker (Moved here so it shows on every page) */}
          <div className="fixed top-24 w-full bg-[#0A0E1A] border-b border-white/10 py-2 overflow-hidden z-40 flex items-center">
            <div className="flex whitespace-nowrap animate-marquee">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-8 px-4 text-sm font-mono text-gray-400">
                  <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#DC143C] animate-pulse"></span> Live Network: 2,350+ Chargers Online</span>
                  <span className="text-white/20">|</span>
                  <span>Kathmandu Hub: 100% Uptime</span>
                  <span className="text-white/20">|</span>
                  <span>New Client Onboarded: Pokhara Resort</span>
                  <span className="text-white/20">|</span>
                  <span>NEA Grid Status: Stable</span>
                  <span className="text-white/20">|</span>
                  <span className="text-[#DC143C]">System Alert: 0 Critical Faults</span>
                </div>
              ))}
            </div>
          </div>
          
          {children}
        </main>
        
        <Footer />
        <WhatsAppButton />
        
      </body>
    </html>
  );
}