"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import fallbackPackages from "../../../../data/fallbackPackages";
import Footer from "../../../../components/Footer";
import Nav from "../../../../components/Nav";
import Side from "../../../../components/Side";

export default function InfoPage() {
  const { city } = useParams();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    if (!city) return;
    const key = city.toLowerCase();
    fetch(`/api/packages/${key}`).then((r) => r.ok ? r.json() : null).then((remote) => setData(remote || fallbackPackages[key] || null)).catch(() => setData(fallbackPackages[key] || null));
  }, [city]);
  if (!data) return <div className="p-20 text-center">Package not found.</div>;
  return <><Nav open={open} setOpen={setOpen} /><Side open={open} setOpen={setOpen} /><main className="min-h-screen bg-[#f7f8fa] px-5 pb-20 pt-24 sm:px-8"><div className="mx-auto max-w-5xl rounded-[2rem] bg-white p-6 shadow-sm sm:p-10"><img src={data.img} alt={`${data.city} travel package`} className="h-80 w-full rounded-2xl object-cover" /><div className="mt-7 flex flex-wrap items-start justify-between gap-4"><div><p className="section-kicker">{data.type} escape</p><h1 className="mt-2 text-4xl font-black text-[#102333]">{data.city}</h1><p className="mt-2 font-bold text-[#ef633f]">{data.days}{data.price ? ` · ${data.price}` : ""}</p></div><a href={`/enquiry?city=${encodeURIComponent(data.city)}`} className="rounded-xl bg-[#ff6d43] px-5 py-3 font-bold text-white">Enquire now →</a></div><p className="mt-6 text-lg leading-8 text-slate-600">{data.des}</p><InfoList title="Highlights" items={data.highlights} /><InfoList title="Attractions" items={data.attractions} />{data.timeline?.length ? <section className="mt-10"><p className="section-kicker">Journey outline</p><h2 className="mt-2 text-3xl font-black text-[#102333]">Itinerary</h2><div className="mt-5 space-y-4">{data.timeline.map((item) => <article key={item.day} className="rounded-2xl bg-[#f7f8fa] p-5"><h3 className="text-lg font-black text-[#102333]">Day {item.day}: {item.title}</h3><ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">{item.points?.map((point) => <li key={point}>{point}</li>)}</ul></article>)}</div></section> : null}{data.treks?.length ? <section className="mt-10"><p className="section-kicker">Adventure planner</p><h2 className="mt-2 text-3xl font-black text-[#102333]">Trekking in {data.city}</h2><div className="mt-5 grid gap-4 md:grid-cols-2">{data.treks.map((trek, i) => <article key={i} className="rounded-2xl bg-[#f7f8fa] p-5"><h3 className="text-xl font-black text-[#102333]">{trek.name}</h3><p className="mt-3 text-sm leading-6 text-slate-600"><b>Location:</b> {trek.location}<br /><b>Difficulty:</b> {trek.difficulty}<br /><b>Duration:</b> {trek.duration}<br /><b>Best season:</b> {trek.season}</p><p className="mt-3 text-sm text-slate-500">{trek.description}</p></article>)}</div></section> : null}</div></main><Footer /></>;
}
function InfoList({ title, items }) { return items?.length ? <section className="mt-10"><h2 className="text-2xl font-black text-[#102333]">{title}</h2><div className="mt-4 flex flex-wrap gap-3">{items.map((item) => <span key={item} className="rounded-full bg-[#ffebe5] px-4 py-2 text-sm font-bold text-[#ef633f]">{item}</span>)}</div></section> : null; }
