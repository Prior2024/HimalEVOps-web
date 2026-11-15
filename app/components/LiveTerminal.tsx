"use client";

import { useEffect, useState } from "react";

export default function LiveTerminal() {
  const [time, setTime] = useState<string>("");

  // This only runs in the browser after the page loads
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full md:w-1/2 bg-[#0A0E1A] rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
      <div className="bg-[#111625] px-4 py-2 flex items-center gap-2 border-b border-white/5">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="text-xs text-gray-500 font-mono ml-2">himelevops@operations:~</span>
      </div>
      <div className="p-6 font-mono text-sm space-y-3">
        <p className="text-gray-500">[{time || "00:00:00"}] Checking network status...</p>
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
  );
}