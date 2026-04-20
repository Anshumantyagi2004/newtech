"use client";
import { motion } from "framer-motion";
import { Target, Eye, Handshake } from "lucide-react";
import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import ClientExperience from "@/components/Main/ClientExperience";
import Category from "@/components/Home/Category";

export default function page() {
  return (<>
    <section className="relative w-full h-62 md:h-88 flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/rental-cabinet-1.jpg')", // change path
        }}
      />

      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <div className="flex items-center gap-2 text-sm md:text-base">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-300">About Us</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-5xl font-bold mb-2">
          About Us
        </h1>
      </div>
    </section>

    <section className="w-full py-10 px-4 lg:px-15">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-5xl font-bold mb-4 text-black">
            About Newtech Video Systems Pvt. Ltd.
          </h2>

          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
            Leading Innovators in Advertising LED Display Solutions
          </h3>

          <p className="text-gray-800 leading-relaxed mb-4">
            Newtech Video Systems Pvt. Ltd. is a leading innovator in advertising LED display technology, delivering high-quality, reliable, and customizable display solutions for a wide range of industries.
          </p>

          <p className="text-gray-800 leading-relaxed mb-4">
            From advanced outdoor LED display screens to high-resolution LED video wall displays, we help businesses communicate with greater impact, visibility, and clarity across both indoor and outdoor environments.
          </p>

          <p className="text-gray-800 leading-relaxed">
            Our expertise spans across advertising LED display screens, LED wall display systems, LED display boards, and industrial video screens, designed to meet the evolving needs of retail, corporate, government, and event sectors.
          </p>
        </div>

        <div className="w-full h-[250px] md:h-[400px] relative">
          <Image
            src="/edu.jpg"
            alt="About Newtech"
            fill
            className="object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>

    <ClientExperience />

    <Category />

    <section className="relative w-full py-16 px-4 md:px-10 overflow-hidden text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg-2.jpg')", // change this
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Who We Are
          </h2>

          <p className="text-gray-200 leading-relaxed mb-4">
            At Newtech, we specialize in designing and delivering advanced advertising LED display screens tailored to modern business needs. Our solutions are widely used across retail, corporate environments, government projects, events, and industrial applications.
          </p>

          <p className="text-gray-300 leading-relaxed">
            With a strong focus on performance and durability, our LED wall display systems and industrial video screens are engineered to deliver consistent results in both indoor and outdoor environments.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -10 }}
            className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-6 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition"
          >
            <Target className="w-10 h-10 mb-4 text-white" />
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-sm text-gray-200 leading-relaxed">
              We deliver innovative and reliable LED display solutions that enhance visibility, engagement, and communication across modern industries.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-6 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition"
          >
            <Eye className="w-10 h-10 mb-4 text-white" />
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-sm text-gray-200 leading-relaxed">
              To become a trusted leader in LED display technology by delivering innovative, high-quality, and future-ready digital display systems.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-6 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition"
          >
            <Handshake className="w-10 h-10 mb-4 text-white" />
            <h3 className="text-xl font-semibold mb-3">Our Commitment</h3>
            <p className="text-sm text-gray-200 leading-relaxed">
              We ensure durability, performance, and long-term value through reliable LED display solutions backed by dedicated support.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

  </>)
}
