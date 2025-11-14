"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Card({ city, img }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/packages/${city.toLowerCase()}`);
  };

  return (
    <div
      onClick={handleClick}
      className="hover:shadow-xl hover:scale-102 border-none outline-none cursor-pointer transition-all relative bg-black flex-shrink-0 h-[32rem] w-[22rem] md:w-[23rem] xl:w-[25rem] border-[#F2F2F6] overflow-hidden rounded-2xl flex"
    >
      <Image
        src={img}
        alt={`${city} Tour`}
        width={400}
        height={400}
        className="h-full w-full object-cover hover:scale-105 cursor-pointer transition-all ease-in-out object-top object-center"
      />

      <div className="bg-white rounded-2xl border-none outline-none absolute flex items-start justify-start flex-col bottom-0 z-10 h-fit pb-5 w-full">
        <h1 className="font-bold text-xl text-black m-5">{`${city} Tour Package`}</h1>
        <h2 className="font-semibold text-xl text-gray-500 ml-5">{city}</h2>

        <div className="flex flex-row w-full items-center">
          <h2 className="font-bold text-xl text-gray-900 ml-5">Included</h2>
          <div className="flex flex-row gap-4 items-center justify-center">
            <i className="font-bold text-2xl text-gray-500 fa-solid fa-utensils ml-10"></i>
            <i className="fa-solid fa-taxi font-bold text-2xl text-gray-500"></i>
            <i className="fa-solid fa-hotel font-bold text-2xl text-gray-500"></i>
          </div>
        </div>

        <div className="flex flex-row items-center gap-4 justify-center mt-3 w-full">
          {/* Stop propagation so clicking inside doesn’t trigger main div click */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-[40%] h-12 bg-black cursor-pointer hover:bg-[#FB5B32] transition-all rounded-xl flex items-center justify-center"
          >
            <Link href={`/enquiry?city=${encodeURIComponent(city)}`} className="w-full h-full flex items-center justify-center">
              <h1 className="font-semibold text-[1rem] md:text-xl text-white">Enquiry Now</h1>
            </Link>
          </div>

          <div
            onClick={(e) => e.stopPropagation()}
            className="w-[40%] h-12 bg-[#FB5B32] cursor-pointer hover:bg-black transition-all rounded-xl flex items-center justify-center"
          >
            <Link
              href={`/packages/${city.toLowerCase()}`}
              className="w-full h-full flex items-center justify-center"
            >
              <h1 className="font-semibold text-[1rem] md:text-xl text-white">View Details</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
