"use client"

import Hero2 from "../../../components/Hero2"
import Nav from "../../../components/Nav"
import Nav2 from "../../../components/Nav2"
import Footer from "../../../components/Footer"
import Last from "../../../components/Last"
import Side from "../../../components/Side"
import { useState } from "react"
export default function international() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Nav open={open} setOpen={setOpen} />
            <Side open={open} setOpen={setOpen} />

            
             <br />
             <br />
             <br />
            <Hero2 />
            <Last />
            <Footer />
        </>
    )
}
