import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Travel Explores",
  description: "Discover beautiful places",
  icons: {
    icon: "./logo.png", // your custom logo
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#F2F2F6]">
        {children}

        {/* ✅ JS version of Font Awesome (always works) */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/js/all.min.js"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </body>
    </html>
  );
}
