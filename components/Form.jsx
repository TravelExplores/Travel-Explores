"use client";

import { useEffect, useState } from "react";
import Nav from "./Nav";
import Side from "./Side";

const destinations = [
  "Goa",
  "Kerala",
  "Uttarakhand",
  "Himachal Pradesh",
  "Andaman",
  "4 Dham Yatra",
  "Dubai",
  "Singapore",
  "Vietnam",
  "Bali",
  "Varanasi",
  "Rajasthan",
  "Other",
];

export default function EnquiryForm({ city = "" }) {
  const [today, setToday] = useState("");
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    guests: "1",
    destination: city,
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setToday(new Date().toISOString().split("T")[0]);
  }, []);

  useEffect(() => {
    if (city) setForm((current) => ({ ...current, destination: city }));
  }, [city]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Full name is required";
    if (!form.phone.trim()) nextErrors.phone = "Phone number is required";
    else if (!/^[0-9]{10}$/.test(form.phone)) nextErrors.phone = "Enter a valid 10-digit number";
    if (!form.email.trim()) nextErrors.email = "Email is required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) nextErrors.email = "Enter a valid email address";
    if (!form.destination) nextErrors.destination = "Please choose a destination";
    if (!form.date) nextErrors.date = "Please select a tour date";
    if (!form.guests) nextErrors.guests = "Please select number of guests";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const message = encodeURIComponent(
      `Hello! I'd like to ask a query:\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*Email:* ${form.email}\n*Destination:* ${form.destination}\n*Tour Date:* ${form.date}\n*Guests:* ${form.guests}`
    );
    window.open(`https://wa.me/919557778843?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#eaf4ff] via-white to-[#dceeff] px-4 py-28 sm:px-8">
      <Nav open={open} setOpen={setOpen} />
      <Side open={open} setOpen={setOpen} />

      <div className="absolute -left-28 top-28 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-sky-200/50 blur-3xl" />

      <div className="relative z-10 w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br from-[#0d2942] via-[#123b60] to-[#102333] p-6 text-white shadow-2xl shadow-blue-950/20 sm:p-10 lg:p-12">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#a9d3ff]">Your next trip starts here</p>
          <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight sm:text-5xl">Find adventure that suits your needs</h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-white/65 sm:text-base">Choose a destination, tell us when you want to travel, and our team will help plan the details.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-x-5 gap-y-4 sm:grid-cols-2 lg:grid-cols-3" noValidate>
          <FormField label="Full name" icon="fa-user" name="name" value={form.name} onChange={handleChange} error={errors.name} placeholder="Enter your name" />
          <FormField label="Phone number" icon="fa-mobile" name="phone" type="tel" value={form.phone} onChange={handleChange} error={errors.phone} placeholder="10-digit mobile number" />
          <FormField label="Email address" icon="fa-envelope" name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} placeholder="you@example.com" />
          <FormField label="Destination" icon="fa-location-dot" name="destination" type="select" value={form.destination} onChange={handleChange} error={errors.destination} options={destinations} />
          <FormField label="Tour date" icon="fa-calendar-days" name="date" type="date" value={form.date} onChange={handleChange} error={errors.date} min={today} />
          <FormField label="Guests" icon="fa-users" name="guests" type="select" value={form.guests} onChange={handleChange} error={errors.guests} options={[...Array.from({ length: 10 }, (_, i) => String(i + 1)), "10+"]} />

          <div className="pt-2 sm:col-span-2 lg:col-span-3">
            <button type="submit" className="w-full rounded-2xl bg-[#1877d2] px-6 py-4 text-base font-extrabold text-white shadow-lg shadow-blue-950/25 transition duration-200 hover:-translate-y-0.5 hover:bg-[#1264b5] focus:outline-none focus:ring-4 focus:ring-blue-200 sm:w-auto sm:min-w-64">
              Book Now <span aria-hidden="true">→</span>
            </button>
            <p className="mt-3 text-xs text-white/50">Your selected destination and trip details will be sent to our travel team on WhatsApp.</p>
          </div>
        </form>
      </div>
    </section>
  );
}

function FormField({ label, icon, name, type = "text", value, onChange, placeholder, error, options, min }) {
  const inputClass = `w-full rounded-xl border bg-white/10 px-4 py-3 text-sm font-semibold text-white outline-none transition placeholder:text-white/35 focus:border-blue-300 focus:bg-white/15 ${error ? "border-red-400" : "border-white/15"}`;
  return (
    <label className="block min-w-0 text-sm font-bold text-white/75">
      <span className="mb-2 block"><i className={`fa-solid ${icon} mr-2 text-blue-200`} aria-hidden="true" />{label}</span>
      {type === "select" ? (
        <select name={name} value={value} onChange={onChange} className={inputClass}>
          {name === "destination" && <option value="" className="text-slate-900">Choose a destination</option>}
          {options.map((option) => <option key={option} value={option} className="text-slate-900">{name === "guests" ? `${option}${option === "1" ? " guest" : " guests"}` : option}</option>)}
        </select>
      ) : (
        <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} min={min} className={inputClass} />
      )}
      {error && <span className="mt-1.5 block text-xs font-semibold text-red-300">{error}</span>}
    </label>
  );
}
