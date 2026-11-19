import fallbackPackages from "./fallbackPackages";

const packages = {
  ...fallbackPackages,
  goa: { city: "Goa", img: "/goa.jpg", days: "5 Days 4 Nights", des: "Goa is India's favorite beach destination with vibrant nightlife, scenic beaches, and rich Portuguese heritage.", timeline: [] },
  kerala: { city: "Kerala", img: "/kerala.webp", days: "6 Days 5 Nights", des: "Kerala offers backwaters, beaches, hill stations, and rich cultural heritage.", timeline: [] },
  dubai: { city: "Dubai", type: "international", img: "/dubai.jpg", days: "5 Days 4 Nights", des: "Desert sunsets, skyline views and a high-energy city escape.", timeline: [] },
  "4-dham-yatra": fallbackPackages["4-dham-yatra"],
};
export default packages;
