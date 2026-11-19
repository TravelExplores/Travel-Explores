import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Travel Explores | Discover Beautiful Places",
  description:
    "Explore breathtaking travel destinations, guides, and experiences with Travel Explores. Start your next adventure today!",
  keywords: [
    "travel explores",
    "travel explore",
    "travel",
    "exploration",
    "adventure",
    "tourism",
    "travel blog",
    "Travel Explores",
  ],
  metadataBase: new URL("https://travelexplores.com"),
  openGraph: {
    title: "Travel Explores",
    description:
      "Discover beautiful destinations and travel experiences around the world.",
    url: "https://travelexplores.com",
    siteName: "Travel Explores",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Travel Explores logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>


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
