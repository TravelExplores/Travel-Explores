"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

function Nav() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isDesktop = windowWidth > 700;

  // ✅ Smooth scroll handler
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className=" absolute top-0 z-50 w-full flex items-center backdrop-blur-2xl">
      {isDesktop ? (
        <div className="flex justify-between items-center h-16 w-full px-10">
          {/* Logo */}
          <div className="flex items-center ">
            <a href="/"><img src="/logo.png" alt="Logo" className="h-20 w-auto object-contain" /></a>
          </div>

          {/* Menu */}
          <ul className="flex gap-10  w-full h-full justify-center items-center">
            <li>
              <Link href="/" className="text-white font-medium text-xl shrink-0 hover:text-gray-100 hover:text-[1.4rem] transition-all">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white shrink-0  font-medium text-xl hover:text-gray-100 hover:text-[1.4rem] transition-all">
                About
              </Link>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("domestic")}
                className="text-white  font-medium text-xl shrink-0 cursor-pointer hover:text-gray-100 hover:text-[1.4rem] transition-all"
              >
                Domestic
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("international")}
                className="text-white  font-medium text-xl shrink-0 hover:text-gray-100 hover:text-[1.4rem] cursor-pointer transition-all"
              >
                International
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <div className="flex justify-between items-center h-16 w-full px-5 backdrop-blur-2xl ">
          {/* Logo */}
          <div className="flex items-center justify-center h-full w-[5rem]">
            <img src="/logo.png" alt="Logo" className="h-full w-auto object-contain" />
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-5">
            <Link href="/" className="text-white font-semibold text-lg">
              Home
            </Link>
            <Link href="/about" className="text-white font-semibold text-lg">
              About
            </Link>

            {/* Dropdown */}
            <details className="dropdown relative">
              <summary className="btn bg-transparent border-none shadow-none">
                <i className="fa-solid fa-bars text-white text-2xl"></i>
              </summary>
              <ul className="menu absolute top-12 right-0 dropdown-content bg-base-100 rounded-box z-50 w-52 p-2 shadow-md">
                <li>
                  <button onClick={() => scrollToSection("domestic")}>
                    Domestic
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("international")}>
                    International
                  </button>
                </li>
              </ul>
            </details>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
