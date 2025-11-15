"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Footer from "../../../../components/Footer";
import Last from "../../../../components/Last";
import Nav from "../../../../components/Nav";
import PolicyAccordion from "../../../../components/PolicyAccordion";
import Nav2 from "../../../../components/Nav2";
import Side from "../../../../components/Side";

export default function InfoPage() {
  const { city } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
   const [open, setOpen] = useState(false);

  // ✅ Fetch package details dynamically
  useEffect(() => {
    if (!city) return;

    async function fetchPackage() {
      try {
        const res = await fetch(`/api/packages/${city.toLowerCase()}`);
        const pkg = await res.json();
        setData(pkg);
      } catch (error) {
        console.error("Error fetching package:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPackage();
  }, [city]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#F8F9FA]">
        <span className="loading loading-dots loading-lg text-blue-500"></span>
      </div>
    );
  }

  if (!data || !data.city) {
    return (
      <p className="text-center text-red-500 mt-10">Package not found.</p>
    );
  }

  return (
    <>
      <Nav open={open} setOpen={setOpen} />
            <Side open={open} setOpen={setOpen} />

            <Nav2 open={open} setOpen={setOpen} />
      <div className="min-h-screen bg-[#F8F9FA] pt-6 md:pt-12 w-full">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8 mt-5">
          <img
            src={data.img}
            alt={data.city}
            className="rounded-2xl w-full h-80 object-cover mb-6"
          />
          <h1 className="text-3xl text-black font-bold mb-2">
            {data.city} Tour Package
          </h1>
          <h2 className="text-lg text-gray-600 mb-6">{data.days}</h2>
          <p className="text-gray-700 mb-8">{data.des}</p>

          <h3 className="text-2xl font-semibold mb-6 text-black">
            Detailed Itinerary
          </h3>

          <div className="relative border-l-4 border-gray-300 ml-4">
            {data.timeline?.map((item, index) => (
              <div key={index} className="mb-10 ml-6 relative">
                {/* Circle for day number */}
                <div className="absolute -left-10 flex items-center justify-center w-8 h-8 bg-green-600 text-white font-bold rounded-full">
                  {item.day}
                </div>

                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Day {item.day}: {item.title}
                </h4>

                <ul className="list-disc ml-6 space-y-1 text-gray-700">
                  {item.points?.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className=" flex justify-end items-end">
          <a
              href="tel:+919557778843"
            ><div className=" h-13 md:h-14 cursor-pointer hover:bg-[#FB5B32]/80 transition-all ease-in-out rounded-2xl flex items-center justify-center w-48 bg-[#FB5B32]">
             <h1 className=" font-semibold text-xl">Call Now</h1>
          </div></a>
          </div>
        </div>

        <PolicyAccordion />
        <Last />
        <Footer />
      </div>
    </>
  );
}
