"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Nav2({ open, setOpen }) {
  const [windowWidth, setWindowWidth] = useState(0);
  const navRef = useRef(null);

  // ✅ Safe window width detection
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // Initialize once mounted
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ GSAP animation
  useEffect(() => {
    if (!navRef.current) return;

    const tl = gsap.to(navRef.current, {
      opacity: 1,
      ease: "power1.inOut",
      duration: 1.5,
      scrollTrigger: {
        trigger: navRef.current,
        start: "top -15%",
        end: "top -25%",
        scrub: true,
      },
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  const isDesktop = windowWidth > 700;

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      ref={navRef}
      className="opacity-0 fixed top-0 z-40 w-full flex items-center justify-between h-18 bg-white/96 transition-all"
    >
      {isDesktop ? (
        <div className="navbar w-full flex justify-between items-center px-10">
          {/* Logo */}
          <div className="flex items-center justify-center cursor-pointer h-[40%] w-24">
            <a href="/"><img
              src="/logo.png"
              className="h-full w-full object-contain"
              alt="Logo"
            />
            </a>
          </div>

          {/* Menu */}
          <ul className="flex gap-10 w-full justify-center items-center">
            <li>
              <Link href="/" className="text-xl font-semibold shrink-0 hover:text-gray-100 hover:text-[1.4rem] transition-all text-black">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-xl font-semibold shrink-0 hover:text-gray-100 hover:text-[1.4rem] transition-all text-black ">
                About
              </Link>
            </li>
            <li>
              <Link href="/domestic" className="text-black shrink-0  font-semibold text-xl hover:text-black/60 hover:text-[1.4rem] transition-all">
                Domestic
              </Link>
            </li>
            <li>
               <Link href="/international" className="text-black shrink-0  font-semibold text-xl hover:text-black/60 hover:text-[1.4rem] transition-all">
                International
              </Link>
            </li>
          </ul>
          <Link href="/enquiry"><div className=" h-14 w-44 rounded-2xl bg-[#FB5B32] cursor-pointer hover:bg-black transition-all ease-in-out flex items-center justify-center">
            <h1 className=" font-semibold text-white">Book Now</h1> 
          </div></Link>
        </div>
      ) : (
        // ✅ Mobile Navbar
        <div className="flex justify-between items-center w-full h-16 px-5">
          <div className="flex items-center h-full w-[5rem]">
            <a href="/"><img
              src="/logo.png"
              className="h-full w-auto object-contain"
              alt="Logo"
            /></a>
          </div>

          <div className="flex items-center gap-5">
       

            {/* Dropdown */}
          
              <summary onClick={() => setOpen(true)} className="btn bg-transparent border-none shadow-none">
                <i className="fa-solid fa-bars text-black text-2xl"></i>
              </summary>
            
         
          </div>
        </div>
      )}
    </nav>
  );
}
