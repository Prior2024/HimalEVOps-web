import Image from "next/image";

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      
      {/* Header */}
      <div className="text-center mb-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-[#DC143C]/10 blur-[100px] pointer-events-none"></div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white font-space relative z-10">
          Built for <span className="text-[#DC143C]">Uptime.</span>
        </h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto relative z-10">
          We don't just monitor your chargers. We act as your local operations layer, ensuring maximum uptime for your network.
        </p>
      </div>

      {/* Service 1 */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
        <div className="w-full md:w-1/2">
          <div className="relative h-[350px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,56,147,0.2)]">
            <Image src="/Img1.jpg" alt="Proactive Monitoring" fill className="object-cover" />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="w-12 h-12 rounded-full bg-[#DC143C]/10 flex items-center justify-center text-[#DC143C] font-bold text-xl mb-6">A</div>
          <h2 className="text-3xl font-bold text-white mb-4">Proactive Monitoring & Alerts</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            We keep an eye on the online status of your charging stations using the OCPP 1.6J protocol. If a charger stops working, we notify your team within 30-60 minutes. 
          </p>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-3"><span className="text-[#DC143C]">✓</span> Detect breakdowns before drivers report them</li>
            <li className="flex items-center gap-3"><span className="text-[#DC143C]">✓</span> 24/7 automated status checks</li>
            <li className="flex items-center gap-3"><span className="text-[#DC143C]">✓</span> No hardware required on your end</li>
          </ul>
        </div>
      </div>

      {/* Service 2 (Reversed Layout) */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-24">
        <div className="w-full md:w-1/2">
          <div className="relative h-[350px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(220,20,60,0.2)]">
            <Image src="/Img2.jpg" alt="Remote Troubleshooting" fill className="object-cover" />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="w-12 h-12 rounded-full bg-[#003893]/20 flex items-center justify-center text-[#00F0FF] font-bold text-xl mb-6">B</div>
          <h2 className="text-3xl font-bold text-white mb-4">First-Line Remote Troubleshooting</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Once a fault is found, we look at the OCPP error codes to figure out the problem. If a remote restart will fix it, we perform the action (with your authorization) and log it.
          </p>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-3"><span className="text-[#003893]">✓</span> Intelligent log and error code analysis</li>
            <li className="flex items-center gap-3"><span className="text-[#003893]">✓</span> Remote reset operations</li>
            <li className="flex items-center gap-3"><span className="text-[#003893]">✓</span> Cut down on unneeded technician trips</li>
          </ul>
        </div>
      </div>

      {/* Service 3 */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <div className="relative h-[350px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,56,147,0.2)]">
            <Image src="/Img3.jpg" alt="Commissioning Support" fill className="object-cover" />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="w-12 h-12 rounded-full bg-[#DC143C]/10 flex items-center justify-center text-[#DC143C] font-bold text-xl mb-6">C</div>
          <h2 className="text-3xl font-bold text-white mb-4">Remote Commissioning Support</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            After installing a new charging station, we help verify it remotely. We check if the charger is connected to your CMS, OCPP parameters are correct, and test charging works.
          </p>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-3"><span className="text-[#DC143C]">✓</span> Eliminate on-site personnel during setup</li>
            <li className="flex items-center gap-3"><span className="text-[#DC143C]">✓</span> Verify OCPP connections remotely</li>
            <li className="flex items-center gap-3"><span className="text-[#DC143C]">✓</span> Cut down extra work and time on-site</li>
          </ul>
        </div>
      </div>

    </div>
  );
}