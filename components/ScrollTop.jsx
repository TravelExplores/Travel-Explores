"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function ScrollToTop() {
  const pathname = usePathname(); // Next.js equivalent of useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // or "auto" for instant scroll
    });
  }, [pathname]); // runs on route change

  return null;
}

export default ScrollToTop;
