"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger)

function Why() {

    const txt3 = useRef(null);
    const txt4 = useRef(null);

    useGSAP(() => {

        // Slide-in animation for heading
        const textSlide = gsap.fromTo(
            txt3.current,
            {
                x: -120,
                opacity: 0,
                ease: "power1.inOut",
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: txt3.current,
                    start: "top 90%",
                    end: "top 30%",
                },
            }
        );
        const textSlide2 = gsap.fromTo(
            txt4.current,
            {
                x: -120,
                opacity: 0,
                ease: "power1.inOut",
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: txt4.current,
                    start: "top 90%",
                    end: "top 30%",
                 
                },
            }
        );

        // ✅ Proper cleanup
        return () => {
            textSlide.scrollTrigger?.kill();
            textSlide.kill();
            textSlide2.scrollTrigger?.kill();
            textSlide2.kill();
        };
    }, [])

    return (
        <section className=" mt-14 w-full bg-[#EEEEEE] flex items-center flex-col gap-10 justify-center ">
            <h1 ref={txt3} className=" font-semibold text-5xl text-[#11224E] mt-10">Why Us?</h1>
            <div ref={txt4} className=" w-[90%] md:w-[70%] text-center">
                <h3 className=" font-medium text-xl text-gray-500">At Travel Explores, we make every journey unforgettable with perfectly crafted travel experiences that fit your style and budget. From personalized itineraries and handpicked stays to 24×7 support and transparent pricing, we ensure your trip is smooth, safe, and full of memories. Whether you’re seeking adventure, relaxation, or luxury, our expert team curates the best destinations and experiences so you can explore the world with confidence and ease.</h3>
            </div>
            <div className=' h-14'>

            </div>

        </section>
    )
}
export default Why;