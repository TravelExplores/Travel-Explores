"use client";

import Image from "next/image";
import Link from "next/link";

const slugify = (value) => String(value || "").trim().toLowerCase().replace(/\s+/g, "-");

export default function Card({ city, img, days = "Custom itinerary", des = "A memorable escape designed around you.", type, href = `/packages/${slugify(city)}` }) {
  return (
    <article className="group relative min-h-[25rem] overflow-hidden rounded-[1.75rem] bg-slate-900 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <Link href={href} className="absolute inset-0 z-10" aria-label={`View ${city} package`} />
      <Image src={img || "/goa.jpg"} alt={`${city} travel package`} fill sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover transition duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071622] via-[#071622]/35 to-transparent" />
      <div className="absolute left-5 top-5 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">{type === "international" ? "International" : "Domestic"}</div>
      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
        <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#a9d3ff]"><span>✦</span>{days}</div>
        <h3 className="text-3xl font-black tracking-tight">{city}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/75">{des}</p>
        <div className="mt-5 flex items-center justify-between border-t border-white/20 pt-4 text-sm font-bold"><span>View itinerary</span><span className="text-xl transition group-hover:translate-x-1">→</span></div>
      </div>
    </article>
  );
}
