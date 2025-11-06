"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Form() {

  const searchParams = useSearchParams();
  const cityFromQuery = searchParams.get("city") || "";

  const [btn, setBtn] = useState(false);
  const [today, setToday] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    guests: "1",
  });
  const [errors, setErrors] = useState({});

  // ✅ Set today's date (for date input min value)
  useEffect(() => {
    setToday(new Date().toISOString().split("T")[0]);
  }, []);

  // ✅ Handle input changes
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  // ✅ Basic validation
  function validate() {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[0-9]{10}$/.test(form.phone))
      newErrors.phone = "Enter a valid 10-digit number";
    if (!form.date) newErrors.date = "Please select a tour date";
    if (!form.guests) newErrors.guests = "Please select number of guests";
    return newErrors;
  }

  // ✅ Handle submit
  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    // Build WhatsApp message
    const message = encodeURIComponent(
      `Hello! I'd like to ask a query:\n
*Name:* ${form.name}
*Phone:* ${form.phone}
${form.email ? `*Email:* ${form.email}\n` : ""}
*Destination:*${cityFromQuery}
*Tour Date:* ${form.date}
*Guests:* ${form.guests}`
    );

    const phoneNumber = "918881509360"; // Include country code
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  }

  return (
    <section className="w-full flex items-center justify-center">
      <div className="h-fit w-full flex flex-col gap-5 bg-[#F2F2F6] items-center">
        <h1 className="text-3xl m-7 text-black font-bold mt-10">Ask Query</h1>

        <form
          onSubmit={handleSubmit}
          className="w-full md:w-[90%] grid md:grid-cols-4 gap-5 place-items-center"
        >
          {/* Full Name */}
          <FormField
            label="Full Name"
            icon="fa-user"
            name="name"
            value={form.name}
            onChange={handleChange}
            error={errors.name}
            placeholder="Enter Name"
          />

          {/* Phone Number */}
          <FormField
            label="Phone Number"
            icon="fa-mobile"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            error={errors.phone}
            placeholder="Mobile No."
          />

          {/* Email */}
          <FormField
            label="Email ID (optional)"
            icon="fa-envelope"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
          />

          {/* Tour Date */}
          <FormField
            label="Tour Date"
            icon="fa-calendar-days"
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            error={errors.date}
            min={today}
          />

          {/* Guests */}
          <div className="w-[80%] md:w-full flex flex-col gap-1">
            <span className="font-semibold text-gray-400 ml-4">
              <i className="fa-solid fa-users text-gray-400"></i> Guests
            </span>
            <select
              name="guests"
              value={form.guests}
              onChange={handleChange}
              className={`p-4 font-semibold text-black border-2 rounded-3xl outline-none transition-all ${errors.guests
                  ? "border-red-500"
                  : "border-gray-500 hover:border-black"
                }`}
            >
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {String(i + 1).padStart(2, "0")}
                </option>
              ))}
              <option value="10+">10+</option>
            </select>
            {errors.guests && (
              <p className="text-red-500 text-sm ml-4">{errors.guests}</p>
            )}
          </div>

          {/* Submit */}
          <div className="h-20 mt-5 w-full flex items-center justify-center col-span-full">
            <button
              onClick={() => {
                setBtn(true);
                setTimeout(() => setBtn(false), 1000);
              }}
              type="submit"
              className={`cursor-pointer hover:bg-black/80 transition-all h-15 md:w-[30%] w-[70%] ${btn ? "bg-black/80" : "bg-black"
                } text-white text-lg font-semibold rounded-3xl py-2`}
            >
              Submit
            </button>
          </div>
        </form>

        <div className="h-12" />
      </div>
    </section>
  );
}

// ✅ Small reusable field component
function FormField({
  label,
  icon,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  min,
}) {
  return (
    <div className="w-[80%] md:w-full flex flex-col gap-1">
      <span className="font-semibold text-gray-400 ml-4">
        <i className={`fa-solid ${icon} text-gray-400`}></i> {label}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min={min}
        className={`p-4 font-semibold text-black border-2 rounded-3xl outline-none transition-all ${error ? "border-red-500" : "border-gray-500 hover:border-black"
          }`}
      />
      {error && <p className="text-red-500 text-sm ml-4">{error}</p>}
    </div>
  );
}
