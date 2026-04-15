"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutSolutions() {
  return (
    <div className="w-full bg-white py-12 px-4 md:px-15">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-black"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-black">
            Advertising LED Display Solutions <br />
            for Modern Businesses
          </h2>

          <p className="text-sm md:text-base text-black mb-4 leading-relaxed">
            Newtech delivers advanced advertising LED display solutions designed to maximize visibility 
            and engagement. Our high-performance advertising LED display screens are ideal for both indoor 
            and outdoor applications, helping businesses communicate their message with clarity and impact.
          </p>

          <p className="text-sm md:text-base text-black mb-4 leading-relaxed">
            From high-brightness outdoor LED display screens for billboards to seamless LED video wall 
            displays for events and commercial spaces, we offer solutions tailored to every requirement. 
            Our LED wall display systems, LED display boards, and industrial video screens are engineered 
            for durability, energy efficiency, and long-term performance.
          </p>

          <p className="text-sm md:text-base text-black leading-relaxed">
            Whether you need a dynamic advertising LED display screen for retail or a large-scale LED video 
            wall, Newtech provides reliable solutions that deliver results.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-6 px-6 py-3 rounded-full bg-black text-white font-medium transition"
          >
            Explore Solutions →
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="relative"
        >
          <img
            src="/vivid-2.jpg" // 👉 replace with your image
            alt="LED Display Solutions"
            className="rounded-3xl w-full h-[300px] md:h-[450px] object-cover shadow-2xl"
          />

          <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/40 to-transparent"></div>
        </motion.div>
      </div>
    </div>
  );
}