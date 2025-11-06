"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
const bn1 =
  "https://res.cloudinary.com/demon35hl/image/upload/v1761841834/bn2_ra1jpd.jpg";

const bn2 =
  "https://res.cloudinary.com/daolgjqnn/image/upload/v1762431877/sarang-pande-IijeyJbmrec-unsplash_qseoep.jpg";

const bn3 =
  "https://res.cloudinary.com/daolgjqnn/image/upload/v1762441379/i_itreya.jpg";

const bn4 = "https://res.cloudinary.com/daolgjqnn/image/upload/v1762431939/praneet-kumar-H8dcf-v98mA-unsplash_zaklhx.jpg";

export default function Img() {
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const [index, setIndex] = useState(0);
  const images = [bn1, bn2, bn3, bn4];

  useEffect(() => {
    gsap.set(imgRef.current, { opacity: 0, scale: 1.05 });
    gsap.set(textRef.current, { opacity: 0, x: 300 });

    const fadeIn = gsap.to(imgRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "power2.out",
    });

    const slideText = gsap.to(textRef.current, {
      opacity: 1,
      x: 0,
      duration: 1.2,
      delay: 0.2,
      ease: "power2.inOut",
    });

    return () => {
      fadeIn.kill();
      slideText.kill();
    };
  }, [index]);


  const handleNext = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="w-full mt-16 h-[50vh] lg:h-[82vh] overflow-hidden flex items-center justify-center">
      <div className="relative flex items-center justify-center h-full w-full">
        {/* Overlay Text */}
        <div
          ref={textRef}
          className="absolute inset-0 flex flex-col justify-center md:justify-start md:pl-20 pl-10 top-5 md:top-40 z-20"
        >
          <h1 className="font-bold text-4xl md:text-6xl text-white drop-shadow-lg">
            Welcome To
          </h1>
          <h1 className="font-bold text-4xl md:text-6xl text-white drop-shadow-lg mt-3">
            Travel Explores
          </h1>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          aria-label="Next Image"
          className="hover:bg-gray-400 transition-all cursor-pointer absolute bottom-10 right-10 z-30 size-8 md:size-10 flex items-center justify-center rounded-full bg-gray-300/90"
        >
          <i className="fa-solid fa-arrow-right text-gray-600/90 text-[0.8rem] md:text-xl font-semibold" />
        </button>

        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          aria-label="Previous Image"
          className="hover:bg-gray-400 transition-all cursor-pointer absolute bottom-10 left-10 z-30 size-8 md:size-10 flex items-center justify-center rounded-full bg-gray-300/90"
        >
          <i className="fa-solid fa-arrow-left text-gray-600/90 text-[0.8rem] md:text-xl font-semibold" />
        </button>

        {/* Image */}
        {/* Image */}
        <div ref={imgRef} className="absolute inset-0 w-full h-full">
          <Image
            src={images[index]}
            alt={`Banner ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>

      </div>
    </section>
  );
}
