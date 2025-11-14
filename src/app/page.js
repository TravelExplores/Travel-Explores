"use client"

import { useState } from "react";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import Hero from "../../components/Hero";
import Hero2 from "../../components/Hero2";
import Img from "../../components/Img";
import Last from "../../components/Last";
import Nav from "../../components/Nav";
import Nav2 from "../../components/Nav2";
import Review from "../../components/Review";
import Service from "../../components/Service";
import Side from "../../components/Side";
import Testimonial from "../../components/Testimonial";
import Why from "../../components/Why";
import EnquiryForm2 from "../../components/Form2";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <section className=" w-full">

      <Nav open={open} setOpen={setOpen} />
      <Side open={open} setOpen={setOpen} />

      <Nav2 open={open} setOpen={setOpen} />

      <Img />
      <EnquiryForm2/>
      <Hero />
      <Hero2 />
      <Service />
      <Why />
      <Testimonial />
      <Last />
      <footer>
        <Footer />
      </footer>



    </section>
  );
}
