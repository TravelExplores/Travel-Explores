"use client";

import { useState } from "react";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Img from "../../components/Img";
import Last from "../../components/Last";
import Nav from "../../components/Nav";
import Service from "../../components/Service";
import Side from "../../components/Side";
import Testimonial from "../../components/Testimonial";
import Why from "../../components/Why";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="w-full overflow-hidden">
      <Nav open={open} setOpen={setOpen} />
      <Side open={open} setOpen={setOpen} />
      
      <Img />
      <Hero />
      <Service />
      <Why />
      <Testimonial />
      <Last />
      <Footer />
    </main>
  );
}
