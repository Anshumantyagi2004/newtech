"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactPopup from "./PopupForm";

export default function CTASection() {
    const [open, setOpen] = useState(false);
    return (
        <div className="relative w-full py-20 px-4 md:px-10 overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/optima-2.jpg')" }} ></div>
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="relative max-w-4xl mx-auto text-center text-white">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: false }}
                    className="text-3xl md:text-5xl font-bold leading-tight"
                >
                    Looking for the Right LED Display?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: false }}
                    className="mt-4 text-gray-300 text-sm md:text-lg"
                >
                    Get expert help to choose the best advertising LED display screen for your needs.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    viewport={{ once: false }}
                    className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
                >

                    <button onClick={() => setOpen(true)} className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition">
                        Request a Quote →
                    </button>

                    <a
                        href="tel:+919212622646" // 👉 replace number
                        className="px-6 py-3 rounded-full border border-white text-white font-medium hover:bg-white hover:text-black transition"
                    >
                        Talk to an Expert →
                    </a>
                </motion.div>
            </div>
            <ContactPopup isOpen={open} setIsOpen={setOpen} />
        </div>
    );
}