"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mppdqeeo", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset(); // Clears the form fields
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#DC143C]/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 relative z-10">
        
        {/* Left Side: Contact Info */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-space text-white">
            Let's keep Nepal <br />
            <span className="text-[#DC143C]">Charging.</span>
          </h1>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            Ready to stop worrying about broken chargers? Request a free trial for your first 3 stations. No hardware, no platform switch, no risk.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-[#0A0E1A] p-4 rounded-2xl border border-white/5">
              <div className="w-12 h-12 rounded-full bg-[#DC143C]/10 flex items-center justify-center text-[#DC143C]">✉</div>
              <div>
                <p className="text-gray-500 text-sm">Email Us</p>
                <p className="text-white font-bold">himalevops@outlook.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-[#0A0E1A] p-4 rounded-2xl border border-white/5">
              <div className="w-12 h-12 rounded-full bg-[#003893]/20 flex items-center justify-center text-[#00F0FF]">✆</div>
              <div>
                <p className="text-gray-500 text-sm">Call Us (Nepal)</p>
                <p className="text-white font-bold">+9779825362019</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="bg-[#0A0E1A] p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative">
          
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-[#DC143C]/20 flex items-center justify-center text-[#DC143C] text-3xl mb-4">✓</div>
              <h2 className="text-3xl font-bold text-white">Message Sent!</h2>
              <p className="text-gray-400">Thank you for reaching out. Our team will contact you within 24 hours.</p>
              <button onClick={() => setStatus("idle")} className="mt-6 px-6 py-2 border border-white/20 rounded-full text-sm hover:bg-white/5 transition-colors">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                <input type="text" name="name" placeholder="John Doe" className="w-full bg-[#050814] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#DC143C] transition-colors" required />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Company Name</label>
                <input type="text" name="company" placeholder="Your Company" className="w-full bg-[#050814] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#DC143C] transition-colors" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Work Email</label>
                <input type="email" name="email" placeholder="you@company.com" className="w-full bg-[#050814] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#DC143C] transition-colors" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Number of Chargers</label>
                <select name="chargers" className="w-full bg-[#050814] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#DC143C] transition-colors appearance-none">
                  <option>1 - 5 chargers</option>
                  <option>6 - 20 chargers</option>
                  <option>20+ chargers</option>
                </select>
              </div>

                <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea name="message" rows={3} placeholder="Tell us about your charging network..." className="w-full bg-[#050814] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#DC143C] transition-colors resize-none"></textarea>
              </div>

              <button type="submit" disabled={status === "submitting"} className="w-full bg-[#DC143C] text-white font-bold py-4 rounded-xl hover:bg-[#003893] transition-all duration-300 shadow-[0_0_20px_rgba(220,20,60,0.3)] mt-4 disabled:opacity-50">
                {status === "submitting" ? "Sending..." : "Request Free Trial"}
              </button>
              
              {status === "error" && (
                <p className="text-red-500 text-sm text-center mt-2">Something went wrong. Please try again.</p>
              )}
            </form>
          )}
        </div>

      </div>
    </div>
  );
}