"use client";

import { useEffect, useState } from "react";
import Form2 from "./Form2";

const citySlides = [
  { city: "Goa", image: "/goa.jpg", label: "Sun-kissed beaches" },
  { city: "Kerala", image: "/kerala.webp", label: "Backwater calm" },
  { city: "Dubai", image: "/dubai.jpg", label: "Skyline adventures" },
  { city: "Varanasi", image: "/vns.webp", label: "Timeless culture" },
  { city: "Singapore", image: "/singapore.jpg", label: "City lights" },
  { city: "Vietnam", image: "/vietnam.jpg", label: "Emerald bays" },
  { city: "Bali", image: "/bali.jpg", label: "Island calm" },
  { city: "Kashmir · Dal Lake", image: "/kashmir-1.jpg", label: "Mountain mornings" },
  { city: "Kashmir · Gulmarg", image: "/kashmir-2.jpg", label: "Valley escapes" },
];

export default function Img() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % citySlides.length), 5200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="travel-hero relative min-h-screen overflow-hidden bg-[#081b2b] text-white">
      {citySlides.map((slide, index) => (
        <div key={slide.city} className={`hero-slide absolute inset-0 bg-cover bg-center ${index === active ? "is-active" : ""}`} style={{ backgroundImage: `url(${slide.image})` }} aria-hidden={index !== active} />
      ))}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,18,31,.95)_0%,rgba(4,18,31,.7)_38%,rgba(4,18,31,.2)_70%,rgba(4,18,31,.7)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,12,22,.3),transparent_40%,rgba(3,12,22,.86))]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1600px] flex-col justify-between gap-10 px-5 pb-8 pt-28 sm:px-8 lg:flex-row lg:items-center lg:gap-16 lg:px-14 lg:pb-14 lg:pt-28">
        <div className="flex max-w-2xl flex-col justify-center lg:min-h-[68vh]">
          <div className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-[#a9d3ff]"><span className="h-px w-10 bg-[#1877d2]" /> Curated escapes · unforgettable memories</div>
          <h1 className="max-w-xl text-5xl font-black leading-[0.94] tracking-[-0.05em] sm:text-6xl lg:text-8xl">Welcome to <span className="text-[#73b7ff]">Travel</span> Explores</h1>
          <p className="mt-7 max-w-lg text-base leading-7 text-white/80 sm:text-lg">Find your next beautiful escape, from sunlit beaches to misty hills. Pick a city, tell us what you need, and we&apos;ll shape the perfect journey around you.</p>
          <div className="mt-9 flex flex-wrap items-center gap-3 text-sm font-semibold text-white/85"><span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">✦ Handpicked destinations</span><span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">24/7 trip support</span></div>
          <a href="#city-packages" className="mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-[#1877d2] px-6 py-3 font-bold text-white shadow-lg shadow-[#1877d2]/25 transition hover:-translate-y-1 hover:bg-[#1264b5]">Explore city packages <span aria-hidden="true">↓</span></a>
          <div className="mt-10 flex items-center gap-3" aria-label="Featured cities">
            {citySlides.map((slide, index) => <button key={slide.city} onClick={() => setActive(index)} aria-label={`Show ${slide.city}`} className={`group flex items-center gap-2 rounded-full border px-2 py-1.5 text-xs font-bold transition ${active === index ? "border-white/60 bg-white/20 text-white" : "border-white/15 text-white/55 hover:border-white/40"}`}><span className={`h-2 w-2 rounded-full ${active === index ? "bg-[#1264b5]" : "bg-white/40"}`} />{slide.city}</button>)}
          </div>
        </div>
        <Form2 />
      </div>
    </section>
  );
}
