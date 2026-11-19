"use client";

export default function Footer() {
  return (
    <footer className="travel-footer bg-[#081b2b] px-5 pb-6 pt-14 text-white sm:px-8 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="footer-cta relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#173c4a] to-[#0d2536] p-7 sm:p-10 lg:flex lg:items-center lg:justify-between">
          <div className="relative z-10"><p className="section-kicker text-[#ff9b7d]">Your next story starts here</p><h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight sm:text-5xl">Go somewhere you&apos;ve never been.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-white/65 sm:text-base">Tell us the feeling you want from your next holiday. We&apos;ll take care of the route, stays and little details.</p></div>
          <a href="/enquiry" className="relative z-10 mt-7 inline-flex shrink-0 items-center justify-center rounded-full bg-[#ff6d43] px-6 py-3 font-bold transition hover:-translate-y-1 hover:bg-[#ff805e] lg:mt-0">Plan a trip <span className="ml-2">→</span></a>
        </div>
        <div className="grid gap-10 border-b border-white/10 py-12 md:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div><img src="/logo.png" alt="Travel Explores" className="h-20 w-auto object-contain" /><p className="mt-4 max-w-xs text-sm leading-6 text-white/55">Thoughtful journeys for curious travellers. Explore more, worry less.</p><div className="mt-5 flex gap-3"><a className="social-pill" href="https://wa.me/919557778843" aria-label="WhatsApp">WA</a><a className="social-pill" href="https://www.instagram.com/travelexplores5" aria-label="Instagram">IG</a></div></div>
          <div><h3 className="footer-heading">Explore</h3><div className="flex flex-col gap-3 text-sm text-white/60"><a href="#city-packages" className="footer-link">City packages</a><a href="/domestic" className="footer-link">Domestic trips</a><a href="/international" className="footer-link">International trips</a><a href="/about" className="footer-link">About us</a></div></div>
          <div><h3 className="footer-heading">Contact</h3><div className="flex flex-col gap-3 text-sm text-white/60"><a href="tel:+919557778843" className="footer-link">+91 95577 78843</a><a href="tel:+916306938079" className="footer-link">+91 63069 38079</a><a href="mailto:info@travelexplores.com" className="footer-link">info@travelexplores.com</a></div></div>
          <div><h3 className="footer-heading">Visit us</h3><p className="text-sm leading-6 text-white/60">Gali No.3, Chander Nagar, Near Asha Modern School, Saharanpur 247001</p><p className="mt-4 text-xs font-bold uppercase tracking-[.18em] text-[#ff9b7d]">Open daily · 9AM–9PM</p></div>
        </div>
        <div className="flex flex-col justify-between gap-3 pt-5 text-xs text-white/40 sm:flex-row"><span>© 2025 Travel Explores. All rights reserved.</span><span>Made for meaningful escapes.</span></div>
      </div>
    </footer>
  );
}
