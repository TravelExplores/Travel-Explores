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
import Nav2 from '../../../components/Nav2';
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
                    start: "top 90%",
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
        <section className='w-full  bg-[#F2F4F6] pt-2 flex items-center flex-col gap-20 justify-start'>
            <Nav />
            <Nav2/>
            <div ref={txtt} className=' flex flex-col w-full items-center justify-start  '>

                <div className=' grid grid-cols-1 lg:grid-cols-2 justify-items-center place-items-center gap-6 w-full mt-20'>
                    <div className=' flex flex-col gap-4 items-center justify-center w-[95%] lg:w-[30rem] text-center'>

                        <h2 className=' text-2xl md:text-3xl text-black font-semibold mt-10'>Welcome to Travel Explores!</h2>
                        <h3 className=' text-xl md:text-2xl text-gray-600 font-medium'>
                            At Travel Explores, we are passionate about crafting exceptional travel experiences that inspire, excite, and create lifelong memories. Based in Delhi, we are your trusted travel partner, dedicated to making every journey seamless, enjoyable, and unforgettable.
                        </h3>
                    </div>
                    <div className=' h-80 w-[95%] mt-10 md:mt-0  md:w-[30rem] relative rounded-full flex items-center justify-center '>
                        <Image
                            src="https://res.cloudinary.com/daolgjqnn/image/upload/v1762450896/imgr_k2tvvf.jpg"
                            alt="Travel Image"
                            fill
                            className="object-cover h-full w-full rounded-2xl"
                        />
                    </div>
                </div>


                <div className=' mt-28 grid grid-cols-1 lg:grid-cols-2 justify-items-center place-items-center gap-6 w-full'>

                    <div className='  grid h-80 w-[95%]  md:w-[30rem] relative rounded-full flex items-center justify-center '>
                        <Image
                            src="https://res.cloudinary.com/daolgjqnn/image/upload/v1762452149/travel-concept-with-worldwide-landmarks_mtlbpu.jpg"
                            alt="Travel Image"
                            fill
                            className="object-cover h-full w-full rounded-2xl"
                        />
                    </div>

                    <div className='  flex flex-col items-center justify-center text-center gap-6 w-full mt-24 w-[95%] lg:w-[30rem] '>
                        <h2 className=' text-2xl  md:text-3xl text-black font-semibold'>Our Mission</h2>
                        <h3 className=' text-xl md:text-2xl text-gray-600 font-medium'>
                            Our mission is simple - to transform your travel dreams into reality. Whether you're planning a relaxing weekend getaway, exploring domestic destinations, venturing abroad for an international adventure, or indulging in a luxurious cruise, Travel Explores is here to provide you with personalized, hassle-free travel solutions.
                        </h3>
                    </div>



                </div>

                <div className='flex flex-col gap-6 w-full md:w-[90%] mx-auto mt-20'>
                    <h2 className='text-2xl md:text-3xl text-black font-semibold text-center'>Our Services</h2>
                    <ul className='grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-gray-600 font-medium text-[1.3rem] md:text-2xl list-disc list-inside'>
                        <li>Resorts & Hotels</li>
                        <li>Flights</li>
                        <li>Cab Services & Transport</li>
                        <li>Visa Assistance</li>
                        <li>Holiday Packages</li>
                        <li>Cruises</li>
                        <li>Domestic & International Packages</li>
                    </ul>
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