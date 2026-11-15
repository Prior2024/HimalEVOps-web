import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import WhatsAppButton from "./components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  metadataBase: new URL('https://himalevops.vercel.app'),
  title: {
    default: "HimalEVOps | EV Charging Monitoring & Fault Response Nepal",
    template: "%s | HimalEVOps"
  },
  description: "Nepal's premier 24/7 remote monitoring, fault detection, and troubleshooting service for EV charging stations. Keep your network online with OCPP 1.6J experts.",
  keywords: ["EV charging Nepal", "EV charger monitoring", "OCPP Nepal", "EV operations Kathmandu", "remote EV troubleshooting", "HimalEVOps"],
  authors: [{ name: "HimalEVOps" }],
  openGraph: {
    title: "HimalEVOps | Keep Your EV Chargers Online. Always.",
    description: "Nepal's premier remote operations center for EV charging infrastructure. 24/7 monitoring, fault alerts, and remote troubleshooting.",
    url: "https://himalevops.vercel.app",
    siteName: "HimalEVOps",
    images: [
      {
        url: "/hero-bg.jpg", // We use your hero image as the preview!
        width: 1200,
        height: 630,
        alt: "HimalEVOps - Nepal EV Monitoring",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HimalEVOps | EV Charging Monitoring Nepal",
    description: "24/7 remote monitoring and fault response for Nepal's EV charging networks.",
    images: ["/hero-bg.jpg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-[#050814] text-white flex flex-col min-h-screen`}>
        
                {/* Structured Data for Google Search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "HimalEVOps",
              "description": "24/7 remote monitoring and fault response for EV charging stations in Nepal.",
              "url": "https://himalevops.vercel.app",
              "logo": "https://himalevops.vercel.app/logo.png",
              "image": "https://himalevops.vercel.app/hero-bg.jpg",
              "telephone": "+9779825362019",
              "email": "hello@himelevops.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kathmandu",
                "postalCode": "44600", // <--- Fixed this
                "addressCountry": "NP"
              },
              "sameAs": [
                "https://www.linkedin.com/company/himelevops"
              ]
            })
          }}
        />


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