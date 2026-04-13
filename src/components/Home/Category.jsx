"use client";

import { motion } from "framer-motion";

const categories = [
    {
        title: "Outdoor Advertising LED Display",
        desc: "High-brightness outdoor LED display screens built for maximum visibility in sunlight and harsh weather. Ideal for billboards and outdoor advertising.",
        img: "/optima-2.jpg",
    },
    {
        title: "Advertising LED Display Screen",
        desc: "High-resolution advertising LED display screens designed for retail stores, showrooms, and corporate spaces.",
        img: "/aura-1.jpg",
    },
    {
        title: "LED Video Wall Display",
        desc: "Seamless LED video wall display solutions for events, malls, and large commercial installations.",
        img: "/rental-cabinet-1.jpg",
    },
    {
        title: "LED Display Boards",
        desc: "Durable and energy-efficient LED display boards for advertising, announcements, and branding.",
        img: "/optima-2 (1).jpg",
    },
    {
        title: "Industrial Video Screens",
        desc: "Heavy-duty industrial video screens built for control rooms, factories, and 24/7 operations.",
        img: "/luxe-2-banner.jpg",
    },
    {
        title: "LED Wall Display Systems",
        desc: "Flexible LED wall display setups for immersive visual experiences in indoor and outdoor environments.",
        img: "/vivid-2.jpg",
    },
];

export default function Category() {
    return (
        <div className="w-full bg-white py-10 px-4 md:px-10">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-5xl font-bold text-black">
                    Our LED Display Solutions
                </h2>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {categories.map((item, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.4 }}
                        className="group relative rounded-3xl overflow-hidden"
                    >
                        {/* Image */}
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-[220px] md:h-[280px] object-cover transition duration-500 group-hover:scale-110"
                        />

                        {/* Soft Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition duration-500"></div>

                        {/* Content */}
                        <div className="absolute bottom-0 p-5 text-white">
                            <h3 className="text-base md:text-lg font-medium">
                                {item.title}
                            </h3>

                            <p className="text-xs md:text-sm text-gray-200 mt-1 opacity-80">
                                {item.desc}
                            </p>

                            <div className="mt-4 
  opacity-100 translate-y-0 pointer-events-auto 
  md:opacity-0 md:translate-y-4 md:pointer-events-none 
  md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-hover:pointer-events-auto 
  transition-all duration-500 ease-out"
>
  <button className="text-sm font-medium border border-white px-4 py-2 rounded-full backdrop-blur-md bg-white/10 hover:bg-white hover:text-black transition">
    View Displays →
  </button>
</div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}