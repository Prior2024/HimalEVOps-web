export interface BlogPost {
  id: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "platform-launch",
    title: "HimalEVOps is Officially Live Soon",
    date: "November 2026",
    image: "/blog/Img6.jpg", // Change this later when you have Img6
    excerpt: "We are thrilled to announce the launch of our new website and remote operations center. We are now accepting applications for our free 3-station trial program...",
    content: [
      "We are thrilled to announce the launch of our new website and remote operations center. We are now accepting applications for our free 3-station trial program.",
      "This platform represents a new era for EV charging in Nepal. By monitoring your chargers 24/7 and alerting you to faults within 30 minutes, we ensure that your network stays online.",
      "Thank you to our early partners. We are building the future of Nepal's EV infrastructure, together."
    ]
  },
  {
    id: "ev-industry-nepal",
    title: "The Current State of the EV Industry in Nepal",
    date: "October 2026",
    image: "/blog/Img5.jpg",
    excerpt: "Nepal's electric vehicle sector is experiencing a historic boom. In the fiscal year 2024/25 alone, Nepal imported over 13,500 four-wheeler EVs, marking a 15% increase...",
    content: [
      "Nepal's electric vehicle sector is experiencing a historic boom. In the fiscal year 2024/25 alone, Nepal imported over 13,500 four-wheeler EVs, marking a 15% increase from the previous year. The total value of these imports reached a staggering NPR 31.76 billion. China remains the dominant supplier, accounting for 75% of these imports (led by brands like BYD and MG), while India supplies roughly 3,200 units, primarily Tata Motors.",
      "But the EV revolution isn't just about cars. Three-wheeler EV imports hit 9,728 units, plus 6,777 unassembled kits. These are rapidly becoming the backbone of short-distance public transport in major cities, offering a cleaner, cheaper alternative to traditional diesel tempos.",
      "To support this, the charging infrastructure is growing rapidly. As of October 2026, Nepal boasts over 2,300 charging stations across all 76 districts (with the sole exception of Humla). What is truly fascinating is the private sector's role: the Nepal Electricity Authority (NEA) operates only 62 of these stations (about 2.7%), while the remaining 97.3% are privately owned by hotels, businesses, and dedicated charging networks.",
      "However, this rapid growth has exposed a critical gap. Many small operators lack the professional Operations & Maintenance (O&M) capability. When a charger breaks down, it often remains unrepaired for weeks. At HimalEVOps, we see this not just as a challenge, but as our primary mission. By providing professional remote monitoring and fault response, we ensure that Nepal's growing EV infrastructure remains reliable and online."
    ]
  },
  {
    id: "dawn-of-evs",
    title: "How It All Began: The Dawn of EVs in Nepal",
    date: "October 2026",
    image: "/blog/Img4.jpg",
    excerpt: "Before the sleek SUVs and fast chargers we see today, Nepal's journey with electric vehicles started small. The story begins in the early 2000s, not with cars, but with two- and three-wheelers...",
    content: [
      "Before the sleek SUVs and fast chargers we see today, Nepal's journey with electric vehicles started small. The story begins in the early 2000s, not with cars, but with two- and three-wheelers. The government's push for cleaner air in the Kathmandu Valley led to the introduction of electric tempos and early electric scooters. These early vehicles were basic, with lead-acid batteries and limited range, but they planted the seed of electric mobility in the public consciousness.",
      "For years, the EV market remained a niche. High import taxes, a lack of charging infrastructure, and range anxiety kept mass adoption at bay. Enthusiasts and early adopters were the only ones driving electric cars, often importing them privately or converting traditional petrol vehicles into EVs through local workshops.",
      "The real turning point came with a shift in government policy. The government began reducing import duties on EVs and introduced tax exemptions to encourage adoption. This, combined with a global drop in battery prices and the entry of major global brands like BYD, Tata, and MG, changed everything. Suddenly, EVs became economically viable for the average Nepali family.",
      "As we look back, the evolution from noisy, polluting diesel tempos to today's silent, zero-emission EVs is remarkable. The early challenges of infrastructure and maintenance are the exact challenges HimalEVOps is built to solve today. We are proud to be part of the next chapter of Nepal's electric story."
    ]
  }
];