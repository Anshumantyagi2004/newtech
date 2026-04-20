"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutUs() {
    return (
        <div className="relative w-full py-12 px-4 lg:px-15 overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/bg-2.jpg')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <img
                        src="/7.jpg"
                        alt="About Newtech LED"
                        className="rounded-3xl shadow-2xl w-full h-[300px] md:h-[450px] object-cover"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-white flex flex-col md:justify-start justify-center md:items-start items-center"
                >
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        About Newtech <br /> Advertising Led Display
                    </h1>

                    <p className="text-sm md:text-base text-gray-50 mb-4 leading-relaxed">
                        Newtech builds high-performance advertising LED display solutions that help brands get noticed.
                        From bold outdoor LED display screens to seamless LED video wall displays, we create digital
                        experiences that are clear, reliable, and built to last.
                    </p>

                    <p className="text-sm md:text-base text-gray-50 mb-4 leading-relaxed">
                        We focus on what matters—brightness, durability, and precision. Every LED wall display,
                        LED display board, and industrial video screen we deliver is designed to perform in real-world
                        conditions, whether it's a busy street, a retail space, or a control room running 24/7.
                    </p>

                    <p className="text-sm md:text-base text-gray-50 leading-relaxed">
                        At Newtech, it’s not just about screens—it’s about impact. We combine technology, design,
                        and practical expertise to deliver display solutions that actually work for your business.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="mt-6"
                    >
                        <Link href={'/about-us'} className="px-6 py-3 rounded-full bg-[#926857] text-white font-medium hover:bg-[#825746] transition">
                            Learn More →
                        </Link>
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
}