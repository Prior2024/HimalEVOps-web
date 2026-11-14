// ==========================================
// DATA MODELS (Maps to Python Backend Later)
// ==========================================

export interface Station {
  id: string;
  name: string;
  lat: number;
  lng: number;
  type: string; // e.g., "DC Fast", "AC Type 2", "GB/T"
  isPublic: boolean; // Public map vs. Private client dashboard
}

export interface DashboardStats {
  totalChargers: number;
  evModels: { model: string; count: number }[];
  neaCapacity: string;
  customerUsage: string;
}

// ==========================================
// API SERVICE FUNCTIONS (MOCK DATA)
// ==========================================

export const getStations = async (): Promise<Station[]> => {
  // FUTURE: Replace with fetch("https://api.himelevops.com/v1/stations")
  return [
    // Public Stations (Shown on the Map)
    { id: "p1", name: "NEA Charging Hub - Kathmandu", lat: 27.7172, lng: 85.3240, type: "DC Fast", isPublic: true },
    { id: "p2", name: "Lakeside EV Point - Pokhara", lat: 28.2096, lng: 83.9856, type: "AC Type 2", isPublic: true },
    { id: "p3", name: "Cimex Showroom - Lalitpur", lat: 27.6588, lng: 85.3247, type: "GB/T", isPublic: true },
    { id: "p4", name: "Chitwan Highway Stop", lat: 27.5291, lng: 84.3542, type: "DC Fast", isPublic: true },
    { id: "p5", name: "Everest Base Camp Charger", lat: 28.0026, lng: 86.8528, type: "DC Fast", isPublic: true },
    
    // Private Stations (Hidden from Map, shown in Client Dashboard)
    { id: "c1", name: "Hotel Yak & Yeti - Main Lot", lat: 27.7112, lng: 85.3215, type: "AC Type 2", isPublic: true },
    { id: "c2", name: "Thamel Parking Hub", lat: 27.7150, lng: 85.3120, type: "AC Type 2", isPublic: false },
    { id: "c3", name: "Pokhara Resort - Guest Only", lat: 28.2200, lng: 83.9800, type: "DC Fast", isPublic: false },
  ];
};

export const getDashboardStats = async (): Promise<DashboardStats> => {
  // FUTURE: Replace with fetch("https://api.himelevops.com/v1/stats")
  return {
    totalChargers: 2350,
    evModels: [
      { model: "BYD Atto 3", count: 450 },
      { model: "Tata Nexon EV", count: 380 },
      { model: "MG ZS EV", count: 210 },
      { model: "Hyundai Kona", count: 150 },
    ],
    neaCapacity: "4,120 MW",
    customerUsage: "12.37 TWh (Annual)"
  };
};