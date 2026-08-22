"use client";
import { motion } from "framer-motion";
import { products } from '@/data/data'
import Link from 'next/link'
import React from 'react'
import { Download } from "lucide-react";

export default function Product() {
  return (<>
    <section className="relative w-full h-62 md:h-88 flex flex-col items-center justify-center text-white">
      <divs
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
          <span className="text-gray-300">Products</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-5xl font-bold mb-2">
          All Products
        </h1>
      </div>

      <div className="relative md:text-sm text-xs flex flex-wrap items-center justify-center gap-2 mt-2">
        <a href="/Cob specs.pdf" download className="bg-white text-black font-bold px-4 py-2 flex gap-2 items-center md:px-6 md:py-3 rounded-lg hover:bg-black hover:text-white transition duration-300">
          Videowalls for Command Control Room <Download size={18} />
        </a>
        <a href="/Datasheet NVS_ULTRA_2.pdf" download className="bg-white text-black flex gap-2 items-center font-bold px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-black hover:text-white transition duration-300">
          Videowall for Controllers/Processors <Download size={18} />
        </a>
      </div>
    </section>

    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto py-12 px-4">
      {products.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
          className="group relative rounded-3xl overflow-hidden"
        >
          {/* Image */}
          <img
            src={item?.img}
            alt={item.name}
            className="w-full h-[220px] md:h-[280px] object-contain transition duration-500 group-hover:scale-110"
          />

          {/* Soft Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition duration-500"></div>

          {/* Content */}
          <div className="absolute bottom-0 p-5 text-white">
            <h3 className="text-base md:text-lg font-medium">
              {item?.name}
            </h3>

            <div className="mt-4">
              <Link href={`/products/${item?.id}`} className="text-sm font-medium border border-white px-4 py-2 rounded-full backdrop-blur-md bg-white/10 hover:bg-white hover:text-black transition">
                View Details →
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    <div>
      <p>

      </p>
    </div>
  </>)
}