"use client";

import { useEffect, useState, useRef } from "react";


export default function EnquiryForm2({ city }) {
  const [btn, setBtn] = useState(false);
  const [today, setToday] = useState("");
  const [open, setOpen] = useState(false);
  const dateRef = useRef(null); // Ref for date input
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    guests: "1",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setToday(new Date().toISOString().split("T")[0]);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Updated validation: email is now required
  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Full name is required";

    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[0-9]{10}$/.test(form.phone))
      newErrors.phone = "Enter a valid 10-digit number";

    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    )
      newErrors.email = "Enter a valid email address";

    if (!form.date) newErrors.date = "Please select a tour date";
    if (!form.guests) newErrors.guests = "Please select number of guests";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    const message = encodeURIComponent(
      `Hello! I'd like to ask a query:\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*Email:* ${form.email}\n*Destination:* ${city}\n*Tour Date:* ${form.date}\n*Guests:* ${form.guests}`
    );

    const phoneNumber = "919557778843";
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <section className="w-full md:h-screen h-[50rem] relative md:mt-0 flex items-center justify-center ">
      <div className="md:h-[26rem] h-[46rem] rounded-4xl flex  w-[90%] flex-col gap-5 bg-[#151515] items-center ">
        <h1 className="text-md md:text-3xl m-2 text-white font-bold mt-10">Find adventure that suits your needs</h1>

        <form
          onSubmit={handleSubmit}
          className="w-full md:w-[90%] grid md:grid-cols-4 gap-3 place-items-center"
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

          {/* Email (Required) */}
          <FormField
            label="Email ID"
            icon="fa-envelope"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="Enter Email"
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
            inputRef={dateRef}       // pass ref
            openOnClick={true}       // custom prop to enable open on click
          />

          {/* Guests */}
          <div className="w-[80%] md:w-full flex flex-col gap-1">
            <span className="font-semibold text-[#B0B0B0] ml-4">
              <i className="fa-solid fa-users text-[#B0B0B0]"></i> Guests
            </span>
            <select
              name="guests"
              value={form.guests}
              onChange={handleChange}
              className={`p-4 font-semibold text-[#B0B0B0] border-2 rounded-3xl outline-none transition-all ${
                errors.guests
                  ? "border-red-500"
                  : "border-[#B0B0B0] hover:border-[#B0B0B0]/80"
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
          <div className="h-20 mt-5  w-full flex items-center justify-center col-span-full">
            <button
              onClick={() => {
                setBtn(true);
                setTimeout(() => setBtn(false), 1000);
              }}
              type="submit"
              className={`cursor-pointer   hover:bg-black/80 transition-all ease-in-out h-14 md:w-[30%] w-[70%] ${
                btn ? "bg-black/80" : "bg-[#FB5B32]"
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

// Reusable field component
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
  inputRef,      // new prop
  openOnClick,   // new prop
}) {
  return (
    <div className="w-[80%] md:w-full flex flex-col gap-1">
      <span className="font-semibold text-[#B0B0B0] ml-4">
        <i className={`fa-solid ${icon} text-[#B0B0B0]`}></i> {label}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min={min}
        ref={inputRef}   // attach ref
        onClick={() => {
          if (openOnClick && inputRef?.current?.showPicker) {
            inputRef.current.showPicker(); // opens calendar on click
          }
        }}
        className={`p-3 font-semibold text-[#B0B0B0] border-2 rounded-xl outline-none transition-all ${
          error ? "border-red-500" : "border-[#B0B0B0] hover:border-[#B0B0B0]/80"
        }`}
      />
     <p className={`text-sm ml-4 h-4 ${error ? "text-red-500" : "invisible"}`}>
  {error || "placeholder"}
</p>

    </div>
  );
}
