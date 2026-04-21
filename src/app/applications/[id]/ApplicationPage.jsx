"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { applications, applicationsDescription, products } from '@/data/data'
import { motion } from "framer-motion";

export default function ApplicationPage() {
  const { id } = useParams()
  const appProducts = products.filter((item) =>
    item.applicationIds?.includes(id)
  );
  const app = applications.find((i) => (i.id == id))
  const appDes = applicationsDescription.find((i) => (i.id == id))

  return (<>
    <section className="relative w-full h-62 md:h-88 flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${app.bgImage})`, // change path
        }}
      />

      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <div className="flex items-center gap-2 text-sm md:text-base">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>/</span>
          <Link href="/applications" className="hover:underline">
            Applications
          </Link>
          <span>/</span>
          <span className="text-gray-300">{app.title}</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-5xl font-bold mb-2">
          {app.title}
        </h1>
      </div>
    </section>

    {appProducts.length == 0 ? <p className='text-gray-700 text-center font-semibold text-xl py-20'>No Product Found</p>
      : <>
        <div className="text-center my-10">
          <h1 className="text-3xl md:text-5xl font-bold text-black">
            Our Products
          </h1>
          <div className="w-20 h-1 bg-[#825746] mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto pb-12 px-4">
          {appProducts.map((item, index) => (
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
                className="w-full h-[220px] md:h-[280px] object-cover transition duration-500 group-hover:scale-110"
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
                    View Displays →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </>}

    <div className="py-10 bg-gray-100">
      {/* Main Heading */}
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-4xl font-bold text-black">
          {appDes?.title}
        </h1>
        <div className="w-20 h-1 bg-[#825746] mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {appDes?.description.map((item, index) => {
          const Icon = item.icon;

          return (
            <div key={index}
              className={`p-5 rounded-xl text-white transition duration-300 
          ${item.bg} ${item.hover} hover:scale-105 hover:shadow-xl`}
            >
              {/* Top Section */}
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-white/20 rounded-md">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-base leading-tight">
                  {item.title}
                </h3>
              </div>

              {/* Content */}
              <p className="text-sm opacity-90 leading-relaxed">
                {item.content}
              </p>

              {/* Optional Number */}
              {/* <div className="mt-4 text-right text-xs opacity-70">
                {String(index + 1).padStart(2, "0")}
              </div> */}
            </div>
          );
        })}
      </div>
    </div>
  </>)
}
