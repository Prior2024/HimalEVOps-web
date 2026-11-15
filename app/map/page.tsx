"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { getStations, Station } from "@/lib/data";

// Dynamically import the map components
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

export default function MapPage() {
  const [stations, setStations] = useState<Station[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Fix Leaflet icons safely
    import("leaflet").then((L) => {
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });
    });

    // Fetch data
    getStations().then((data) => {
      setStations(data.filter((s) => s.isPublic));
    });
  }, []);

  // Wait until mounted to render the map to avoid SSR crashes
  if (!mounted) return null;

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen flex flex-col">
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white font-space">
          Live <span className="text-[#DC143C]">Nepal</span> Network
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          Explore public EV charging stations across Nepal.
        </p>
      </div>

      <div className="w-full relative z-0" style={{ height: "600px" }}>
        <MapContainer 
          center={[28.3949, 84.1240]} 
          zoom={7} 
          style={{ height: "100%", width: "100%", background: "#0A0E1A" }}
        >
        
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          
          {stations.map((station) => (
            <Marker key={station.id} position={[station.lat, station.lng]}>
              <Popup>
                <div className="text-black font-sans p-1">
                  <h3 className="font-bold text-lg mb-1">{station.name}</h3>
                  <p className="text-sm text-gray-600">Type: {station.type}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}