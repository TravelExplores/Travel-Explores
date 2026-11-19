"use client";

import { useState } from "react";

function PolicyAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "Cancellation Policy",
      content: (
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>
            Cancellation made 30 days prior to travel: full refund (excluding service charges).
          </li>
          <li>Cancellation within 15–30 days: 50% refund.</li>
          <li>Cancellation within 15 days of departure: no refund.</li>
        </ul>
      ),
    },
    {
      title: "Terms & Conditions",
      content: (
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Prices are based on standard room category; upgrades available at extra cost.</li>
          <li>
            Any additional expenses due to delays, flight cancellation, natural calamities,
            or political issues must be borne by the traveler.
          </li>
          <li>
            The company holds no responsibility for loss of baggage, valuables, or travel documents.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-8 space-y-4">
      {sections.map((section, index) => (
        <div
          key={index}
          className="border rounded-lg bg-white shadow-sm"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center p-4 text-left font-semibold text-gray-800 hover:bg-gray-50"
          >
            {section.title}
            <i
              className={`fa-solid fa-chevron-${openIndex === index ? "up" : "down"} text-gray-600 transition-all`}
            ></i>
          </button>

          {openIndex === index && (
            <div className="p-4 border-t text-gray-700 absolute z-50 bg-white max-w-4xl md:max-w-xl    animate-fadeIn">
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default PolicyAccordion;
