"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutSolutions() {
  return (
    <div className="w-full bg-gray-100 py-12 px-4 figtree lg:px-15">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-black"
        >
          <img
            src="https://nvsledindia.com/_next/image?url=https%3A%2F%2Fpub-7d937c7331834e4a9e6d3a588b9bfa59.r2.dev%2FnewTech%2F1784809786938-P1.8%20Indoor%20120sqft%20News%2018.jpeg&w=1920&q=75" // 👉 replace with your image
            alt="LED Display Solutions"
            className="rounded-3xl w-full h-[300px] md:h-[450px] object-cover shadow-2xl"
          />

          <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/40 to-transparent"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="relative"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-black">
            Advertising LED Display Solutions <br />
            for Modern Businesses
          </h2>

          <p className="text-sm md:text-base text-black mb-4 leading-relaxed">
            Newtech delivers advanced advertising LED display solutions designed to maximize visibility
            and engagement. Our high-performance advertising LED display screens are ideal for both <a
            className="font-bold" href="/categories/indoor-advertising-led-displays">indoor </a>  
            and <a className="font-bold" href="/categories/outdoor-advertising-led-displays">outdoor</a> applications, helping businesses communicate their message with clarity and impact.
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
            className="mt-6"
          >
            <Link href={'/products'} className="px-6 py-3 rounded-full bg-black text-white font-medium transition">
              Explore Solutions →
            </Link>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}