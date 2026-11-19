import Link from "next/link";

export default function Side({ open, setOpen }) {
    return (
        <>
            {/* Background overlay */}
            <div
                onClick={() => setOpen(false)}
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[998] transition-opacity duration-300 
                ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                `}
            ></div>

            {/* Sidebar */}
            <div
                className={`fixed left-0 top-0 h-screen w-64 bg-white z-[999] overflow-hidden
                transform transition-transform duration-500 ease-out
                ${open ? "translate-x-0" : "-translate-x-full"}
                `}
            >
                {/* Close Button */}
                <button
                    onClick={() => setOpen(false)}
                    className="absolute text-black font-bold top-4 right-4 text-2xl"
                >
                    ✕
                </button>

                {/* Sidebar content */}
                <div className="m-10 mt-16 text-black font-semibold flex flex-col gap-5">
                    <Link onClick={() => setOpen(false)} href="/" className="text-2xl hover:text-gray-500 transition-all">
                        Home
                    </Link>

                    <Link onClick={() => setOpen(false)} href="/about" className="text-2xl hover:text-gray-500 transition-all">
                        About
                    </Link>

                    <Link onClick={() => setOpen(false)} href="/domestic" className="text-2xl hover:text-gray-500 transition-all">
                        Domestic
                    </Link>

                    <Link onClick={() => setOpen(false)} href="/international" className="text-2xl hover:text-gray-500 transition-all">
                        International
                    </Link>
                    <Link onClick={() => setOpen(false)} href="/contact" className="text-2xl text-[#ef633f] hover:text-gray-500 transition-all">
                        Contact Us
                    </Link>
                </div>
            </div>
        </>
    );
}
