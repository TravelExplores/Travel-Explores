"use client";

import { useEffect, useState } from "react";

const initialForm = { name: "", phone: "", email: "", date: "", guests: "1", destination: "" };

export default function EnquiryForm2({ city = "" }) {
  const [form, setForm] = useState({ ...initialForm, destination: city });
  const [today, setToday] = useState("");
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    setToday(new Date().toISOString().split("T")[0]);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setSent(false);
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name";
    if (!/^[0-9]{10}$/.test(form.phone)) nextErrors.phone = "Enter a 10-digit number";
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) nextErrors.email = "Enter a valid email";
    if (!form.destination) nextErrors.destination = "Choose a destination";
    if (!form.date) nextErrors.date = "Choose a travel date";
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const message = encodeURIComponent(
      `Hello! I'd like to plan a trip.\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*Email:* ${form.email}\n*Destination:* ${form.destination}\n*Tour Date:* ${form.date}\n*Guests:* ${form.guests}`
    );
    setSent(true);
    window.open(`https://wa.me/919557778843?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="hero-form w-full max-w-md rounded-[2rem] border border-white/25 bg-[#071827]/72 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-7 lg:max-w-[24rem]">
      <div className="mb-5">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#ff9b7d]">Start planning</p>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-white">Tell us your dream trip</h2>
        <p className="mt-1 text-sm text-white/60">Our travel expert will get back to you shortly.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-3" noValidate>
        <Field label="Your name" name="name" value={form.name} onChange={handleChange} placeholder="e.g. Ananya Sharma" error={errors.name} />
        <div className="grid grid-cols-2 gap-3">
          <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="10-digit number" error={errors.phone} />
          <Field label="Guests" name="guests" type="select" value={form.guests} onChange={handleChange} options={["1", "2", "3", "4", "5", "6", "7+"].map((value) => ({ value, label: `${value} guest${value === "1" ? "" : "s"}` }))} />
        </div>
        <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" error={errors.email} />
        <div className="grid grid-cols-2 gap-3">
          <Field label="Destination" name="destination" type="select" value={form.destination} onChange={handleChange} error={errors.destination} options={["Goa", "Kerala", "Dubai", "Varanasi", "Rajasthan", "Other"].map((value) => ({ value, label: value }))} />
          <Field label="Travel date" name="date" type="date" value={form.date} onChange={handleChange} min={today} error={errors.date} />
        </div>
        <button type="submit" className="mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#ff6d43] px-5 py-3.5 font-bold text-white shadow-lg shadow-[#ff6d43]/20 transition hover:-translate-y-0.5 hover:bg-[#ff805e]">
          {sent ? "Request opened in WhatsApp ✓" : "Plan my journey →"}
        </button>
      </form>
    </div>
  );
}

function Field({ label, name, type = "text", value, onChange, placeholder, error, options, min }) {
  const shared = { name, value, onChange, className: `w-full rounded-xl border bg-white/10 px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#ff8c68] focus:bg-white/15 ${error ? "border-red-400" : "border-white/15"}` };
  return (
    <label className="block text-xs font-semibold text-white/70">
      <span className="mb-1.5 block">{label}</span>
      {type === "select" ? <select {...shared}>{!value && <option value="">Select</option>}{options.map((option) => <option key={option.value} value={option.value} className="text-slate-900">{option.label}</option>)}</select> : <input {...shared} type={type} placeholder={placeholder} min={min} />}
      {error && <span className="mt-1 block text-[10px] font-medium text-red-300">{error}</span>}
    </label>
  );
}
