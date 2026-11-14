"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Suspense } from "react";

// Move the Navbar content into a separate component
function NavbarContent() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Live Map", path: "/map" },
    { name: "Services", path: "/services" },
    { name: "News", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#050814]/85 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* BIGGER LOGO */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-[#DC143C] shadow-[0_0_25px_rgba(220,20,60,0.5)] group-hover:scale-105 transition-transform duration-300">
            <Image src="/logo.png" alt="HimalEVOps Logo" fill className="object-cover" />
          </div>
          <span className="text-2xl md:text-4xl font-bold tracking-wider text-white drop-shadow-lg">
            Himal<span className="text-[#DC143C]">EV</span>Ops
          </span>
        </Link>
        
        {/* NAVIGATION LINKS */}
        <div className="hidden md:flex gap-8 text-base font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link 
                key={link.name} 
                href={link.path}
                className={`${
                  isActive 
                    ? "text-[#DC143C] font-bold border-b-2 border-[#DC143C] pb-1" 
                    : "text-gray-300 hover:text-[#003893] hover:-translate-y-0.5"
                } transition-all duration-200`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        
        {/* LOGIN BUTTON */}
        <Link href="/dashboard">
          <button className="bg-[#DC143C] text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-[#003893] hover:scale-105 active:scale-95 transition-all duration-200 shadow-[0_0_20px_rgba(220,20,60,0.4)]">
            Employee Login
          </button>
        </Link>
      </div>
    </nav>
  );
}

// Wrap it in Suspense to fix the Next.js build error
export default function Navbar() {
  return (
    <Suspense fallback={<div className="h-24 bg-[#050814] border-b border-white/10"></div>}>
      <NavbarContent />
    </Suspense>
  );
}