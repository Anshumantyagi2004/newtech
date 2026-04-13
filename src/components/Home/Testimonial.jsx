"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "The advertising LED display screen we installed has completely transformed our storefront. The brightness and clarity are outstanding, even during the day.",
    author: "Retail Business Owner",
  },
  {
    text: "We’ve been using their outdoor LED display screens for our billboard campaigns, and the performance has been excellent in all weather conditions.",
    author: "Advertising Agency",
  },
  {
    text: "The LED video wall display delivered seamless visuals for our event. The setup was smooth and the quality exceeded expectations.",
    author: "Event Management Company",
  },
  {
    text: "Their LED display boards are reliable and energy-efficient. Perfect for our daily advertising and announcements.",
    author: "Commercial Business",
  },
  {
    text: "We installed industrial video screens in our control room, and the performance has been stable and consistent for continuous operations.",
    author: "Manufacturing Company",
  },
];

export default function ClientSays() {
  const [index, setIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  // ✅ Responsive
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(3);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // 🔁 Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  // visible items
  const getVisible = () => {
    let arr = [];
    const half = Math.floor(itemsToShow / 2);

    for (let i = -half; i <= half; i++) {
      const newIndex =
        (index + i + testimonials.length) % testimonials.length;
      arr.push({
        ...testimonials[newIndex],
        position: i,
      });
    }
    return arr;
  };

  const visible = getVisible();

  return (
    <div className="w-full bg-white py-10 px-4 md:px-10">

      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-black">
          What Our Clients Say
        </h2>
      </div>

      <div className="relative max-w-7xl mx-auto flex items-center justify-center">

        {/* LEFT */}
        <button
          onClick={prev}
          className="absolute left-0 z-20 bg-black text-white p-3 rounded-full"
        >
          <ChevronLeft />
        </button>

        {/* SLIDER */}
        <div className="flex gap-6 items-center justify-center">

          {visible.map((item, i) => {
            const isCenter = item.position === 0;

            return (
              <div
                key={i}
                className="w-[280px] md:w-[320px] min-h-[220px]"
              >
                <motion.div
                  animate={{
                    scale: isCenter ? 1.05 : 0.9,
                    y: isCenter ? -10 : 0,
                    opacity: isCenter ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.4 }}
                  className="h-full"
                >
                  <div
                    className={`h-full p-6 rounded-2xl border bg-white shadow-md transition ${
                      isCenter ? "shadow-xl" : ""
                    }`}
                  >
                    {/* Quote Icon */}
                    <Quote className="text-black/30 mb-4" />

                    {/* Text */}
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      “{item.text}”
                    </p>

                    {/* Author */}
                    <p className="mt-4 text-xs md:text-sm font-semibold text-black">
                      — {item.author}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}

        </div>

        {/* RIGHT */}
        <button
          onClick={next}
          className="absolute right-0 z-20 bg-black text-white p-3 rounded-full"
        >
          <ChevronRight />
        </button>

      </div>
    </div>
  );
}