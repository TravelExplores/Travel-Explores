// /enquiry/page.jsx

"use client";

import { Suspense } from "react";
import EnquiryForm from "../../../components/Form"

export default function EnquiryPage() {
  return (
    <Suspense fallback={<div className=" h-screen w-full max-w-screen flex items-center justify-center text-black">Loading...</div>}>
      <EnquiryForm />
    </Suspense>
  );
}
