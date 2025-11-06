"use client";

import React from 'react'
import Nav from '../../../components/Nav'
import Image from 'next/image'
import Footer from '../../../components/Footer'
import Last from '../../../components/Last'


import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



export default function page() {
    const reff = useRef(null);
    const txtt = useRef(null);

    useGSAP(() => {
      
          const fadeIn = gsap.fromTo(
            reff.current,
            { x: -50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.7,
                ease: "power2.out",
                scrollTrigger: {
                     trigger: reff.current,
                start: "top 65%",
                    toggleActions: "play none none reverse",
                },
            }
        );


        const slideInText = gsap.fromTo(
            txtt.current,
            { y: 500, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.7,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: txtt.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            }
        );

        return () => {
            fadeIn.scrollTrigger?.kill();
            fadeIn.kill();
            slideInText.scrollTrigger?.kill();
            slideInText.kill();
        };
    }, []);



    return (
        <section className='w-full  bg-[#F2F4F6] pt-10 flex items-center flex-col gap-20 justify-start'>
            <Nav />
            <div ref={txtt} className=' flex flex-col w-full items-center justify-start  '>

            <div className='flex flex-col gap-6 w-full md:w-[90%] mt-20'>
                <h1 className=' text-3xl md:text-5xl text-black font-bold'>About Travel Explores</h1>
                <h2 className=' text-2xl md:text-3xl text-black font-semibold mt-10'>Welcome to Travel Explores!</h2>
                <h3 className=' text-xl md:text-2xl text-gray-600 font-medium'>
                    At Travel Explores, we are passionate about crafting exceptional travel experiences that inspire, excite, and create lifelong memories. Based in Delhi, we are your trusted travel partner, dedicated to making every journey seamless, enjoyable, and unforgettable.
                </h3>
            </div>

            <div className='flex flex-col gap-6 w-full md:w-[90%]'>
                <h2 className=' text-2xl  md:text-3xl text-black font-semibold'>Our Mission</h2>
                <h3 className=' text-xl md:text-2xl text-gray-600 font-medium'>
                    Our mission is simple - to transform your travel dreams into reality. Whether you're planning a relaxing weekend getaway, exploring domestic destinations, venturing abroad for an international adventure, or indulging in a luxurious cruise, Travel Explores is here to provide you with personalized, hassle-free travel solutions.
                </h3>
            </div>

            <div className='flex flex-col gap-6 w-full md:w-[90%]'>
                <h2 className=' text-2xl  md:text-3xl text-black font-semibold'>Our Services</h2>
                <h3 className='  text-[1.3rem] md:text-2xl text-gray-600 font-medium'>
                    - Resorts & Hotels<br />
                    - Flights<br />
                    - Cab Services & Transport<br />
                    - Visa Assistance<br />
                    - Holiday Packages<br />
                    - Cruises<br />
                    - Domestic & International Packages
                </h3>
            </div>
            </div>

            <div ref={reff} className=' mt-3 relative w-[99%] md:w-[90%] h-72 md:h-96 rounded-2xl'> {/* h-96 = 24rem */}
                <Image
                    src="https://res.cloudinary.com/daolgjqnn/image/upload/v1762436917/travel_hpnjmf.jpg"
                    alt="Travel Image"
                    fill
                    className="object-cover rounded-2xl"
                />
            </div>
            <footer className=' w-full'>
                <Last />
                <Footer />
            </footer>
        </section>
    )
}
