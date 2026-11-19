"use client";

import { useEffect, useState } from "react";

const starterReviews = [
  { id: "1", name: "Shubham", city: "Goa", rating: 5, text: "Excellent service! The package was amazing and every detail felt thoughtfully planned." },
  { id: "2", name: "Adarsh", city: "Kerala", rating: 4, text: "Very satisfied with the packages. The team was helpful from booking to return." },
  { id: "3", name: "Rudresh", city: "Dubai", rating: 5, text: "Pleasant experience, smooth coordination and a beautiful itinerary." },
  { id: "4", name: "Prashant", city: "Varanasi", rating: 4, text: "Good service, clean tours and friendly staff. Would happily book again." },
];

export default function Testimonial() {
  const [reviews, setReviews] = useState(starterReviews);
  const [form, setForm] = useState({ name: "", city: "", rating: 5, text: "" });
  const [notice, setNotice] = useState("");

  useEffect(() => {
    try { const saved = JSON.parse(localStorage.getItem("travel-explores-reviews")); if (Array.isArray(saved) && saved.length) setReviews([...saved, ...starterReviews]); } catch {}
  }, []);

  const submitReview = (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.text.trim()) { setNotice("Please add your name and review."); return; }
    const next = { ...form, id: Date.now().toString(), name: form.name.trim(), text: form.text.trim() };
    const updated = [next, ...reviews];
    setReviews(updated); localStorage.setItem("travel-explores-reviews", JSON.stringify(updated.slice(0, 8)));
    setForm({ name: "", city: "", rating: 5, text: "" }); setNotice("Thank you! Your review has been added.");
  };

  const average = (reviews.reduce((sum, review) => sum + Number(review.rating), 0) / reviews.length).toFixed(1);
  return (
    <section className="reviews-section bg-[#f7f8fa] px-5 py-20 sm:px-8 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end"><div><p className="section-kicker">Stories from the road</p><h2 className="mt-3 text-4xl font-black tracking-[-.04em] text-[#102333] sm:text-6xl">Loved by travellers</h2><p className="mt-4 max-w-lg text-base leading-7 text-slate-500">Real experiences from people who chose to explore a little further.</p></div><div className="rating-summary rounded-2xl bg-white px-5 py-4 shadow-sm"><div className="flex items-center gap-3"><span className="text-4xl font-black text-[#102333]">{average}</span><div><div className="text-[#1877d2]">★★★★★</div><p className="text-xs font-semibold text-slate-400">Based on {reviews.length} traveller reviews</p></div></div></div></div>
        <div className="mt-10 grid gap-5 lg:grid-cols-[1.4fr_.8fr]"><div className="grid gap-5 sm:grid-cols-2">{reviews.slice(0, 4).map((review) => <ReviewCard key={review.id} review={review} />)}</div><form onSubmit={submitReview} className="review-form rounded-[1.5rem] bg-[#102333] p-6 text-white"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#a9d3ff]">Share your experience</p><h3 className="mt-2 text-2xl font-black">How was your journey?</h3><div className="mt-5 space-y-3"><input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="review-input" /><input value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} placeholder="City you visited" className="review-input" /><div><span className="mb-2 block text-sm text-white/60">Your rating</span><div className="flex gap-1">{[1,2,3,4,5].map((star) => <button type="button" key={star} onClick={() => setForm({ ...form, rating: star })} className={`text-2xl transition hover:scale-110 ${star <= form.rating ? "text-[#70b7ff]" : "text-white/25"}`} aria-label={`${star} stars`}>★</button>)}</div></div><textarea value={form.text} onChange={(e) => setForm({ ...form, text: e.target.value })} placeholder="Tell future travellers about it..." rows="4" className="review-input resize-none" /><button className="w-full rounded-xl bg-[#1877d2] px-4 py-3 font-bold transition hover:bg-[#1264b5]">Publish review →</button>{notice && <p className="text-xs text-[#a9d3ff]">{notice}</p>}</div></form></div>
      </div>
    </section>
  );
}

function ReviewCard({ review }) { return <article className="review-card rounded-[1.5rem] bg-white p-5 shadow-sm"><div className="flex items-center justify-between"><div className="flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e8f3ff] font-black text-[#1877d2]">{review.name.charAt(0).toUpperCase()}</div><div><h3 className="font-bold text-[#102333]">{review.name}</h3><p className="text-xs text-slate-400">{review.city || "Travel Explorer"}</p></div></div><span className="text-sm tracking-wide text-[#3d98ef]">{"★".repeat(Number(review.rating))}</span></div><p className="mt-5 text-sm leading-6 text-slate-600">“{review.text}”</p></article>; }
