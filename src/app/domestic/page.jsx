"use client"

import Hero from "../../../components/Hero"
import Nav from "../../../components/Nav"
import Nav2 from "../../../components/Nav2"
import Footer from "../../../components/Footer"
import Last from "../../../components/Last"
import Side from "../../../components/Side"
import { useState } from "react"
export default function domestic() {
      const [open, setOpen] = useState(false);
    
    return (
        <>
            <Nav open={open} setOpen={setOpen} />
            <Side open={open} setOpen={setOpen} />

            
             <br />
             <br />
             <br />
            <Hero />
            
            <Last />
            <Footer />
        </>
    )
}
