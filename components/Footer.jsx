"use client"
function Footer() {
    return (
        <section className=" w-full  h-full bg-black flex items-center justify-start flex-col">
            <div className=" mt-10 flex items-center justify-center flex-col md:flex-row w-full">
                <h1 className=" text-2xl md:text-3xl font-semibold text-[#fca311]">Need help? Call Us On :</h1>
                <div className=" ml-10 mt-1 flex flex-col gap-2"><a className=" font-medium text-[1.3rem] md:text-xl hover:underline hover:text-blue-500 transition-all" href="tel:+919557778843">+919557778843</a><a className="font-medium text-[1.3rem] md:text-xl hover:underline hover:text-blue-500 transition-all" href="tel:+919557778843">+916306938079</a></div>
            </div>

            <div className=" border-b-2 border-gray-500 w-[80%] mt-10">
            </div>

            <div className=" mt-5 flex flex-col  items-center justify-start md:justify-center">
                <div className=" w-full h-40 flex items-center justify-center">
                    <img src="/logo.png" className=" h-full  object-cover" alt="" />
                </div>
                <div className=" mt-5 gap-6 flex w-[95%] flex-col items-start justify-start">
                    <div className=" flex flex-row gap-4"><i className=" font-semibold text-gray-400 text-xl fa-solid fa-location-dot"></i>
                        <span className=" font-medium text-gray-600">Gali No.3, Chander Nagar, Near Asha Modern School ( Main Branch )Saharanpur 247001</span>
                    </div>
                    <div className=" flex flex-row gap-4"><i className="fa-solid font-semibold fa-envelope text-gray-400 text-xl"></i>
                        <span className=" font-medium text-gray-600">infotravelexplores@gmail.com</span>
                    </div>

                    <h2 className=" font-semibold text-white text-xl">Follow Us:</h2>
                    <div className=" flex flex-row gap-4"><a onClick={() => {
                        const url = `https://wa.me/${"919557778843"}?text=${"Hi"}`;

                        // Open WhatsApp
                        window.open(url, "_blank");
                    }}></a>
                        <a href="https://www.instagram.com/travelexplores5"
                        ><i className="fa-brands font-semibold text-3xl cursor-pointer hover:text-white transition-all text-gray-500 fa-instagram"></i></a>
                    </div>
                </div>

              <div className=" border-b-2 border-gray-500 w-[80%] mt-10">
            </div>
             <span className="  mt-10 font-medium text-white mb-20">© 2025 Travel Explores. All rights reserved.</span>

            </div>
        </section>
    )
}
export default Footer;