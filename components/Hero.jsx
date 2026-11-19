"use client";

import { useEffect, useMemo, useState } from "react";
import Card from "./Card";

const fallbackPackages = [
  { _id: "goa", city: "Goa", type: "domestic", img: "/goa.jpg", days: "5 Days 4 Nights", des: "Golden beaches, Portuguese lanes and easy-going coastal days." },
  { _id: "kerala", city: "Kerala", type: "domestic", img: "/kerala.webp", days: "6 Days 5 Nights", des: "Backwaters, tea gardens and slow mornings in God's Own Country." },
  { _id: "uttarakhand", city: "Uttarakhand", type: "domestic", img: "/kashmir-2.jpg", days: "6 Days 5 Nights", des: "Mountain valleys, river towns and guided Himalayan trek experiences." },
  { _id: "himachal-pradesh", city: "Himachal Pradesh", type: "domestic", img: "/kashmir-1.jpg", days: "7 Days 6 Nights", des: "Pine forests, high valleys and adventure-led mountain escapes." },
  { _id: "andaman", city: "Andaman", type: "domestic", img: "/goa.jpg", days: "6 Days 5 Nights", des: "Clear lagoons, island sunsets and slow coastal adventures." },
  { _id: "4-dham-yatra", city: "4 Dham Yatra", type: "domestic", img: "/kashmir-2.jpg", days: "10 Days 9 Nights", des: "A soulful Himalayan pilgrimage covering Yamunotri, Gangotri, Kedarnath and Badrinath." },
  { _id: "dubai", city: "Dubai", type: "international", img: "/dubai.jpg", days: "5 Days 4 Nights", des: "Desert sunsets, skyline views and a high-energy city escape." },
  { _id: "singapore", city: "Singapore", type: "international", img: "/singapore.jpg", days: "5 Days 4 Nights", des: "Garden cities, skyline evenings and effortless urban discovery." },
  { _id: "vietnam", city: "Vietnam", type: "international", img: "/vietnam.jpg", days: "6 Days 5 Nights", des: "Emerald bays, old-town streets and flavours worth travelling for." },
  { _id: "bali", city: "Bali", type: "international", img: "/bali.jpg", days: "6 Days 5 Nights", des: "Temple calm, tropical coastlines and restorative island days." },
];

export default function Hero() {
  const [packages, setPackages] = useState(fallbackPackages);
  const [region, setRegion] = useState("All destinations");
  const [selectedCity, setSelectedCity] = useState("All cities");
  useEffect(() => { const controller = new AbortController(); const timeout = setTimeout(() => controller.abort(), 900); fetch("/api/packages", { signal: controller.signal }).then((r) => r.ok ? r.json() : []).then((data) => { if (Array.isArray(data) && data.length) setPackages(data); }).catch(() => {}).finally(() => clearTimeout(timeout)); return () => { clearTimeout(timeout); controller.abort(); }; }, []);
  const cities = useMemo(() => Array.from(new Set(packages.map((item) => item.city))).sort(), [packages]);
  const visiblePackages = packages.filter((item) => (selectedCity === "All cities" || item.city === selectedCity) && (region === "All destinations" || (region === "International" ? item.type === "international" : item.type !== "international")));
  return <section id="city-packages" className="city-section bg-[#f7f8fa] px-5 py-20 sm:px-8 lg:px-14"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-7 md:flex-row md:items-end"><div><p className="section-kicker">Choose your next chapter</p><h2 className="mt-3 max-w-xl text-4xl font-black tracking-[-0.04em] text-[#102333] sm:text-6xl">Explore by <span className="text-[#ef633f]">destination</span></h2><p className="mt-4 max-w-lg text-base leading-7 text-slate-500">From island quiet to mountain air, browse packages built around the way you want to travel.</p></div><div className="flex flex-wrap gap-2">{["All destinations", "Domestic", "International"].map((item) => <button key={item} onClick={() => { setRegion(item); setSelectedCity("All cities"); }} className={`rounded-full px-4 py-2 text-sm font-bold transition ${region === item ? "bg-[#102333] text-white" : "bg-white text-slate-500 hover:bg-[#ffebe5]"}`}>{item}</button>)}</div></div><div className="mt-8 flex gap-2 overflow-x-auto border-b border-slate-200 pb-3">{["All cities", ...cities].map((city) => <button key={city} onClick={() => setSelectedCity(city)} className={`shrink-0 rounded-xl px-4 py-2.5 text-sm font-bold transition ${selectedCity === city ? "bg-[#ff6d43] text-white" : "bg-white text-slate-500"}`}>{city}</button>)}</div><div className="mt-5 flex justify-between text-sm font-semibold text-slate-400"><span>{selectedCity === "All cities" ? "Showing all curated destination packages" : `Showing packages for ${selectedCity}`}</span><span className="text-[#ef633f]">{visiblePackages.length} packages</span></div><div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">{visiblePackages.map((pkg) => <Card key={pkg._id || pkg.city} {...pkg} />)}</div></div></section>;
}
