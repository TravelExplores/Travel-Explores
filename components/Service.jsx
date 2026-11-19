"use client";

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Domestic Packages",
    img: "https://res.cloudinary.com/demon35hl/image/upload/f_auto,q_auto,w_600/v1761841287/india_prl1mv.jpg",
  },
  {
    title: "International Packages",
    img: "https://res.cloudinary.com/demon35hl/image/upload/f_auto,q_auto,w_600/v1761841264/Inter_nbsowm.jpg",
  },
  {
    title: "Cabs",
    img: "https://res.cloudinary.com/demon35hl/image/upload/f_auto,q_auto,w_600/v1761841233/cab_srzzvm.jpg",
  },
  {
    title: "Hotels",
    img: "https://res.cloudinary.com/daolgjqnn/image/upload/f_auto,q_auto,w_600/v1762432227/vojtech-bruzek-Yrxr3bsPdS0-unsplash_gnnufs.jpg",
  },
  {
    title: "Resorts",
    img: "https://res.cloudinary.com/daolgjqnn/image/upload/f_auto,q_auto,w_600/v1762432297/arkady-lukashov-ysN7dkne160-unsplash_jtvq3x.jpg",
  },
  {
    title: "Holiday Packages",
    img: "https://res.cloudinary.com/daolgjqnn/image/upload/f_auto,q_auto,w_600/v1762432355/chad-madden-SUTfFCAHV_A-unsplash_xeyy12.jpg",
  },
  {
    title: "Cruise",
    img: "https://res.cloudinary.com/daolgjqnn/image/upload/f_auto,q_auto,w_600/v1762432452/alonso-reyes-haZNHEV2WXQ-unsplash_p5muib.jpg",
  },
];

function Service() {
  const txt7 = useRef(null);
  const txt8 = useRef(null);

  useGSAP(() => {
    // Heading animation
    const textSlide = gsap.fromTo(
      txt7.current,
      { x: -120, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: txt7.current,
          start: "top 90%",
          end: "top 30%",
        },
      }
    );

    // Grid animation
    const textSlide2 = gsap.fromTo(
      txt8.current,
      { x: -120, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        delay: 0.3,
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: txt8.current,
          start: "top 80%",
          end: "top 30%",
        },
      }
    );

    return () => {
      textSlide.scrollTrigger?.kill();
      textSlide.kill();
      textSlide2.scrollTrigger?.kill();
      textSlide2.kill();
    };
  }, []);

  return (
    <section className="w-full h-full mt-14 bg-[#F2F2F6] flex flex-col justify-center">
      <h1
        ref={txt7}
        className="text-4xl md:text-5xl font-bold text-black m-5 lg:m-10"
      >
        Our Services
      </h1>

      <h3 className="text-xl md:text-2xl font-medium text-gray-500 m-5 lg:ml-10">
        Making every journey memorable with comfort, care, and customization.
      </h3>

      <div
        ref={txt8}
        className="mt-10 grid place-items-center lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 md:grid-cols-2 justify-center gap-5"
      >
        {services.map((service, idx) => (
          <div
            key={idx}
            className="transition-all w-80 h-96 bg-gray-400 rounded-xl relative overflow-hidden"
          >
            <Image
              src={service.img}
              alt={service.title}
              fill
              className="rounded-xl object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-5 left-0 right-0 mx-auto h-12 w-[60%] bg-white/70 rounded-xl flex items-center justify-center">
              <h1 className="text-black font-bold">{service.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Service;
