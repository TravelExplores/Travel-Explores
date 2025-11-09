"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
const bn1 =
  "https://res.cloudinary.com/daolgjqnn/image/upload/v1762694476/view-starry-night-sky-with-nature-mountains-landscape_mhlcwo.jpg";

const bn2 =
  "https://res.cloudinary.com/daolgjqnn/image/upload/v1762696234/pexels-eberhardgross-572897_ri7q2c.jpg";

const bn3 =
  "https://res.cloudinary.com/daolgjqnn/image/upload/v1762695577/beautiful-nature-landscape-with-river-mountains_bdcitp.jpg";

const bn4 = "https://res.cloudinary.com/daolgjqnn/image/upload/v1762431939/praneet-kumar-H8dcf-v98mA-unsplash_zaklhx.jpg";

export default function Img() {
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const [index, setIndex] = useState(0);
  const images = [bn1, bn2, bn3, bn4];
  const refdot=useRef(null);

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

  useEffect(() => {
    gsap.to(refdot.current, {
      y: 25,              // move upward by 10px
      duration: 0.8,       // how fast it moves
      repeat: -1,          // infinite loop
      yoyo: true,          // goes up, then down
      ease: "power1.inOut" // smooth motion
    });
  }, []);



  const handleNext = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="w-full mt-0 h-[100vh] lg:h-[100vh] overflow-hidden flex items-center justify-center">
      <div className="relative flex items-center justify-center h-full w-full">
        {/* Overlay Text */}
        <div
          ref={textRef}
          className="absolute inset-0 flex flex-col justify-center items-center  md:justify-start md:mt-10  top-5 md:top-40 z-20"
        >
          <h1 className="font-bold text-4xl md:text-6xl text-white drop-shadow-lg">
            Welcome To
          </h1>
          <h1 className="font-bold text-4xl md:text-6xl text-white drop-shadow-lg mt-3">
            Travel Explores
          </h1>
        </div>

        <div className=" absolute z-20 gap-5 bottom-5 flex items-center flex-col justify-center">
          <span className=" text-xl font-semibold text-white">Scroll To Book Now.</span>
          <div className=" border-3 md:h-14 h-15 w-8 md:w-8 rounded-3xl border-white flex items-start justify-center">
            <div ref={refdot} className=" text-5xl h-2 w-2  bg-white rounded-full mt-2"> </div>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          aria-label="Next Image"
          className="hover:bg-gray-400 transition-all cursor-pointer absolute bottom-10 right-10 z-30 size-8 md:size-10 flex items-center justify-center rounded-full bg-gray-500/90"
        >
          <i className="fa-solid fa-arrow-right text-white/80 text-[0.8rem] md:text-xl font-semibold" />
        </button>

        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          aria-label="Previous Image"
          className="hover:bg-gray-400 transition-all cursor-pointer absolute bottom-10 left-10 z-30 size-8 md:size-10 flex items-center justify-center rounded-full bg-gray-500/90"
        >
          <i className="fa-solid fa-arrow-left text-white/80 text-[0.8rem] md:text-xl font-semibold" />
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
