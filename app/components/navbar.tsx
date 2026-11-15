"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Suspense, useState } from "react";

function NavbarContent() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Live Map", path: "/map" },
    { name: "Services", path: "/services" },
    { name: "News", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#050814]/85 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-24 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 md:gap-4 group z-50 relative">
          <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-[#DC143C] shadow-[0_0_25px_rgba(220,20,60,0.5)] group-hover:scale-105 transition-transform duration-300">
            <Image src="/logo.png" alt="HimalEVOps Logo" fill className="object-cover" />
          </div>
          <span className="text-xl md:text-3xl font-bold tracking-wider text-white drop-shadow-lg">
            Himal<span className="text-[#DC143C]">EV</span>Ops
          </span>
        </Link>
        
        {/* DESKTOP NAVIGATION */}
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

        {/* DESKTOP LOGIN BUTTON */}
        <div className="hidden md:block">
          <Link href="/dashboard">
            <button className="bg-[#DC143C] text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-[#003893] hover:scale-105 active:scale-95 transition-all duration-200 shadow-[0_0_20px_rgba(220,20,60,0.4)]">
              Employee Login
            </button>
          </Link>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button 
          className="md:hidden z-50 text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            // Close Icon (X)
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            // Hamburger Icon (3 lines)
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-[#0A0E1A] border-b border-white/10 shadow-2xl flex flex-col px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path}
              onClick={() => setIsMobileMenuOpen(false)} // Close menu when clicked
              className={`${
                pathname === link.path ? "text-[#DC143C] font-bold" : "text-gray-300"
              } text-lg border-b border-white/5 pb-2`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
            <button className="w-full bg-[#DC143C] text-white px-8 py-3 rounded-full text-sm font-bold mt-2">
              Employee Login
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default function Navbar() {
  return (
    <Suspense fallback={<div className="h-24 bg-[#050814] border-b border-white/10"></div>}>
      <NavbarContent />
    </Suspense>
  );
}