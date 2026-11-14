import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0A0E1A] pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-12">
        
        {/* Brand */}
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="text-2xl font-bold tracking-wider text-white mb-4 block">
            Himal<span className="text-[#DC143C]">EV</span>Ops
          </Link>
          <p className="text-gray-400 max-w-sm mb-6">
            Nepal's premier remote monitoring and fault response service for EV charging networks.
          </p>
          <div className="flex gap-4">
            {/* LinkedIn */}
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#003893] transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            {/* Facebook */}
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#003893] transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
            </a>
          </div>
        </div>

        {/* Links */}
                {/* Links */}
        <div>
          <h4 className="text-white font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/services" className="hover:text-[#DC143C]">Services</Link></li>
            <li><Link href="/map" className="hover:text-[#DC143C]">Live Map</Link></li>
            <li><Link href="/blog" className="hover:text-[#DC143C]">News & Updates</Link></li>
            <li><Link href="/contact" className="hover:text-[#DC143C]">Contact Us</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-white font-bold mb-4">Legal</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/privacy" className="hover:text-[#DC143C]">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-[#DC143C]">Terms of Service</Link></li>
            <li><Link href="/dashboard" className="hover:text-[#DC143C]">Employee Login</Link></li>
          </ul>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>© 2026 HimalEVOps. All rights reserved. Registered in Nepal.</p>
      </div>
    </footer>
  );
}