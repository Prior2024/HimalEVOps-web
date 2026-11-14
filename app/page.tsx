import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* =========================================
  Hero Section
          ========================================= */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-28">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg" 
            alt="EV charging in the Himalayas"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050814]/95 via-[#050814]/80 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#DC143C]/50 bg-[#DC143C]/10 text-[#DC143C] text-sm font-bold tracking-wide mb-8 backdrop-blur-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC143C] animate-pulse shadow-[0_0_10px_#DC143C]"></span>
            Live Network Active
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white leading-[0.9] mb-6 font-space max-w-4xl">
            Keep your chargers <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DC143C] to-[#003893]">
              online. Always.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-10 font-light">
            HimalEVOps provides Nepal's most reliable remote monitoring, intelligent fault detection, and instant troubleshooting for EV charging networks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link href="/contact">
              <button className="w-full sm:w-auto bg-[#DC143C] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#003893] hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(220,20,60,0.4)]">
                Start Free Trial
              </button>
            </Link>
            <Link href="/map">
              <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300">
                View Live Network
              </button>
            </Link>
          </div>

          {/* Ticker */}
          <div className="flex flex-wrap gap-8 border-t border-white/10 pt-6 mt-auto">
            <div>
              <p className="text-gray-400 text-sm mb-1">System Uptime</p>
              <p className="text-white font-mono text-xl font-bold">99.9%</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Monitored Stations</p>
              <p className="text-white font-mono text-xl font-bold">2,350+</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Faults Resolved Remotely</p>
              <p className="text-[#DC143C] font-mono text-xl font-bold">1,420</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. SERVICE CARDS SECTION
          ========================================= */}
      <section className="py-24 px-6 bg-[#050814] relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-space">Our Service Modules</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Three levels of remote support designed to keep your EV network running flawlessly.
            </p>
          </div>

           <div className="grid md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="relative bg-[#0A0E1A] rounded-3xl p-8 border border-white/10 hover:border-[#DC143C]/50 transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#DC143C]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#DC143C]/10 flex items-center justify-center mb-6 text-[#DC143C] font-bold text-xl">A</div>
                <h3 className="text-2xl font-bold text-white mb-2">Proactive Monitoring</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">We detect offline chargers and errors within 30–60 minutes. You hear it from us, not from an angry driver.</p>
                <Link href="/contact" className="block text-center w-full py-3 rounded-xl border border-white/20 text-white font-bold group-hover:bg-white/5 transition-colors">Request Trial</Link>
              </div>
            </div>

            {/* Card 2 (Highlighted) */}
            <div className="relative bg-[#0A0E1A] rounded-3xl p-8 border border-[#003893]/50 hover:border-[#003893] transition-all duration-500 hover:-translate-y-2 group overflow-hidden shadow-[0_0_30px_rgba(0,56,147,0.2)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#003893]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#003893] text-white text-xs font-bold px-4 py-1 rounded-b-lg z-20">MOST POPULAR</div>
              <div className="relative z-10 mt-4">
                <div className="w-12 h-12 rounded-full bg-[#003893]/20 flex items-center justify-center mb-6 text-[#00F0FF] font-bold text-xl">B</div>
                <h3 className="text-2xl font-bold text-white mb-2">First-Line Troubleshooting</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">We analyze OCPP error codes remotely. If it can be fixed with a remote restart, we do it instantly.</p>
                <Link href="/contact" className="block text-center w-full py-3 rounded-xl bg-[#003893] text-white font-bold group-hover:bg-[#00F0FF] group-hover:text-black transition-colors shadow-[0_0_20px_rgba(0,56,147,0.4)]">Start Free Trial</Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative bg-[#0A0E1A] rounded-3xl p-8 border border-white/10 hover:border-[#DC143C]/50 transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#DC143C]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#DC143C]/10 flex items-center justify-center mb-6 text-[#DC143C] font-bold text-xl">C</div>
                <h3 className="text-2xl font-bold text-white mb-2">Commissioning Support</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">New station? We verify the OCPP connection, parameters, and test charging remotely so your team saves time.</p>
                <Link href="/contact" className="block text-center w-full py-3 rounded-xl border border-white/20 text-white font-bold group-hover:bg-white/5 transition-colors">Request Setup</Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================
          3. WHY US / SPLIT SECTION
          ========================================= */}
      <section className="py-24 px-6 bg-[#0A0E1A] border-t border-white/5 relative z-10 overflow-hidden">
        {/* Background Accent Motif (Subtle prayer flag/Himalayan lines) */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-none stroke-white stroke-[1]">
            <polyline points="0,100 20,40 40,70 60,20 80,60 100,10" />
            <polyline points="0,100 30,50 50,80 70,30 90,70 100,20" className="stroke-[#DC143C]" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          
          {/* Left Side: Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,56,147,0.2)]">
              <Image 
                src="/ops-center.jpg" 
                alt="HimalEVOps Remote Operations Center"
                width={800}
                height={600}
                className="object-cover w-full h-auto"
              />
              {/* Overlay to match theme */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050814]/80 to-transparent"></div>
              
              {/* Floating Stat Badge */}
              <div className="absolute bottom-6 left-6 bg-[#050814]/90 backdrop-blur-md border border-[#DC143C] p-4 rounded-2xl flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-[#DC143C] animate-pulse"></div>
                <div>
                  <p className="text-white font-bold text-lg">24/7 Monitoring</p>
                  <p className="text-gray-400 text-xs">Active in Nepal</p>
                </div>
              </div>
            </div>
          </div>


      {/* =========================================
          4. LIVE TERMINAL SIMULATION
          ========================================= */}
      <section className="py-24 px-6 bg-[#050814] relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-white font-space mb-6">
              We see the fault <br />
              <span className="text-[#003893]">before you do.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Our operations center monitors OCPP error codes 24/7. When a charger goes offline, our system immediately alerts our team, allowing us to diagnose and fix the issue remotely.
            </p>
          </div>


          {/* The Terminal Box */}
          <div className="w-full md:w-1/2 bg-[#0A0E1A] rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="bg-[#111625] px-4 py-2 flex items-center gap-2 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-xs text-gray-500 font-mono ml-2">himelevops@operations:~</span>
            </div>
            <div className="p-6 font-mono text-sm space-y-3">
              <p className="text-gray-500">[{new Date().toLocaleTimeString()}] Checking network status...</p>
              <p className="text-green-400">✓ 2,350 chargers online.</p>
              <p className="text-[#DC143C] font-bold">⚠ ALERT: Charger ID #NP-841 (Pokhara) went offline.</p>
              <p className="text-gray-400">Fetching OCPP logs...</p>
              <p className="text-gray-400">Error Code: ConnectorLockFailure</p>
              <p className="text-blue-400">Executing remote reset...</p>
              <p className="text-green-400">✓ Charger #NP-841 is back online. Session resumed.</p>
              <div className="flex items-center gap-2 mt-4 text-[#DC143C]">
                <span className="w-2 h-4 bg-[#DC143C] animate-pulse"></span>
                <span>Waiting for next event...</span>
              </div>
            </div>
          </div>

        </div>
      </section>


          {/* Right Side: Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-white font-space mb-6 leading-tight">
              Built for Nepal's <br />
              <span className="text-[#003893] drop-shadow-[0_0_15px_rgba(0,56,147,0.5)]">EV Future.</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We don't compete with you for drivers. We don't sell you expensive hardware. We simply act as your local operations layer, ensuring your chargers stay online and your users stay satisfied.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#DC143C]/10 flex items-center justify-center text-[#DC143C]">
                  ✓
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">100% Local Operations</h4>
                  <p className="text-gray-400 text-sm">We understand the unique challenges of Nepal's power grid and internet infrastructure.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#DC143C]/10 flex items-center justify-center text-[#DC143C]">
                  ✓
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Zero Platform Switching</h4>
                  <p className="text-gray-400 text-sm">We plug into your existing CSMS via read-only OCPP. No admin passwords required.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#DC143C]/10 flex items-center justify-center text-[#DC143C]">
                  ✓
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Rapid Fault Resolution</h4>
                  <p className="text-gray-400 text-sm">Our intelligent routing ensures issues are caught and resolved before drivers even notice.</p>
                </div>
              </div>
            </div>

            <Link href="/why-us">
              <button className="bg-[#003893] text-white px-8 py-3 rounded-full font-bold hover:bg-[#DC143C] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(0,56,147,0.4)]">
                Learn More About Our Mission
              </button>
            </Link>
          </div>

        </div>
      </section>
      
            {/* =========================================
          4. OUR PROGRESS / GALLERY SECTION
          ========================================= */}
      <section className="py-24 px-6 bg-[#050814] relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          
                {/* STYLE LIVE TICKER */}
      <div className="fixed top-24 w-full bg-[#0A0E1A] border-b border-white/10 py-2 overflow-hidden z-40 flex items-center">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-8 px-4 text-sm font-mono text-gray-400">
              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#DC143C] animate-pulse"></span> Live Network: 2,350+ Chargers Online</span>
              <span className="text-white/20">|</span>
              <span>Kathmandu Hub: 100% Uptime</span>
              <span className="text-white/20">|</span>
              <span>New Client Onboarded: Pokhara Resort (15 Chargers)</span>
              <span className="text-white/20">|</span>
              <span>NEA Grid Status: Stable</span>
              <span className="text-white/20">|</span>
              <span className="text-[#DC143C]">System Alert: 0 Critical Faults</span>
            </div>
          ))}
        </div>
      </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Image 1 */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 group h-[400px]">
              <Image 
                src="/ops-center1.jpg" 
                alt="HimalEVOps Operations Team"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050814] via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-6 left-6">
                <p className="text-[#DC143C] font-mono text-sm mb-1">24/7 MONITORING</p>
                <h3 className="text-white font-bold text-xl">Our Operations Center</h3>
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 group h-[400px]">
              <Image 
                src="/hero-bg1.jpg" 
                alt="EV Charging Infrastructure in Nepal"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050814] via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-6 left-6">
                <p className="text-[#003893] font-mono text-sm mb-1">NETWORK GROWTH</p>
                <h3 className="text-white font-bold text-xl">Nepal's EV Infrastructure</h3>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}