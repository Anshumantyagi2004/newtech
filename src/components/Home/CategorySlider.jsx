"use client";

import React from "react";
import { motion } from "framer-motion";
import { categories } from "@/data/data";
import Link from "next/link";

// const categories = [
//   { title: "Advertising LED Display", img: "/aura-1.jpg" },
//   { title: "Outdoor LED Display Screens", img: "/optima-2.jpg" },
//   { title: "LED Video Wall Display", img: "/rental-cabinet-1.jpg" },
//   { title: "LED Display Boards", img: "/optima-2 (1).jpg" },
//   { title: "Industrial Video Screens", img: "/luxe-2-banner.jpg" },
//   { title: "Indoor Advertising LED Displays", img: "/vivid-2.jpg" },
//   { title: "Rental Indoor Led", img: "/aura-1.jpg" },
//   { title: "Rental Outdoor Led", img: "/aura-1.jpg" },
// ];

// duplicate for infinite loop
const loopItems = [...categories, ...categories];

export default function CategorySlider() {
  return (
    <div className="w-full bg-black py-12 px-4 md:px-15 overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Browse LED Display Categories
        </h2>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm md:text-base">
          Explore our complete range of advertising LED display solutions designed
          for different applications and environments.
        </p>
      </div>

      {/* Slider */}
      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >
          {loopItems.map((item, index) => (
            <div
              key={index}
              className="min-w-[45%] sm:min-w-[30%] md:min-w-[25%] lg:min-w-[20%] border border-white group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[180px] object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                <h3 className="text-sm font-medium">
                  {item.title}
                </h3>

                {/* Button */}
                <div className="mt-3">
                  <Link href={`/categories/${item?.id}`} className="text-xs border border-white px-3 py-1 rounded-full hover:bg-white hover:text-black transition">
                    Explore →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}