"use client";
import { solutions } from '@/data/data'
import Link from 'next/link'
import React, { useState } from 'react'
import { motion } from "framer-motion";
import Image from "next/image";
import ContactPopup from '@/components/Main/PopupForm';

export default function SolutionPage() {
    const [open, setOpen] = useState(false);
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
                    <span className="text-gray-300">Government Solutions</span>
                </div>

                {/* Title */}
                <h1 className="text-2xl md:text-5xl font-bold mb-2">
                    Government Solutions
                </h1>
            </div>
        </section>

        <section className="w-full bg-gray-50 py-10 px-4 md:px-10 figtree">
            <div className="max-w-7xl mx-auto text-center mb-14">

                {/* <p className="text-red-500 font-semibold tracking-widest uppercase">
                    Applications
                </p> */}

                <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                    Government Solutions
                </h2>

                <p className="text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed">
                    Specialized LED display and visualization solutions designed for
                    government infrastructure, monitoring, communication, and public
                    engagement projects.
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
                {solutions.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        className="group relative overflow-hidden rounded-3xl 
                           border border-gray-200
                           bg-white
                           shadow-md hover:shadow-2xl
                           transition-all duration-300"
                    >

                        {/* Image */}
                        <div className="relative h-56 overflow-hidden">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover group-hover:scale-110 transition duration-700"
                            />

                            {/* Light Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {item.title}
                            </h3>

                            <p className="text-sm text-gray-600 leading-relaxed">
                                {item.description}
                            </p>

                            <div className='flex justify-between mt-2 items-center'>
                                {/* Bottom Line */}
                                <div className=" w-12 h-[2px] bg-red-500 group-hover:w-24 transition-all duration-300"></div>

                                <button onClick={() => setOpen(true)} className='bg-red-500 hover:bg-red-600 font-medium text-sm px-3 py-2 rounded-md'>
                                    Enquiry Now
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
                <ContactPopup isOpen={open} setIsOpen={setOpen} />
            </div>
        </section>
    </>)
}