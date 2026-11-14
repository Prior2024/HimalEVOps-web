# ⚡ HimalEVOps - EV Charging Remote Operations

HimalEVOps is a managed service provider (MSP) offering 24/7 remote monitoring, fault response, and commissioning support for EV charging stations in Nepal. 

This repository contains the public-facing frontend application built for clients to view network coverage, services, and company updates.

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Maps:** Leaflet / OpenStreetMap
- **Forms:** Formspree
- **Deployment:** Vercel

## 🎨 Design System

- **Primary Color:** Nepal Crimson (`#DC143C`)
- **Secondary Color:** Nepal Blue (`#003893`)
- **Background:** Deep Space (`#050814`)
- **Fonts:** Space Grotesk & Inter

## 📂 Project Structure

```text
├── app/                  # Next.js App Router (Pages & Layouts)
│   ├── api/              # Serverless API routes
│   ├── blog/             # Dynamic blog routing
│   ├── components/       # Reusable UI components (Navbar, Footer, etc.)
│   ├── contact/          # Lead generation form
│   └── map/              # Live Leaflet map
├── lib/                  # Data Service Layer (Mock API for Python Backend)
│   ├── data.ts           # Station and dashboard mock data
│   └── posts.ts          # Blog post content
└── public/               # Static assets (images, logos)