"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Sun,
    ShieldCheck,
    Monitor,
    Zap,
    Settings,
    Headphones,
} from "lucide-react";

const features = [
    {
        icon: <Sun size={28} />,
        title: "High Brightness & Visibility",
        desc: "Our outdoor LED display solutions are engineered for maximum brightness, ensuring clear visibility even in direct sunlight and challenging environments.",
    },
    {
        icon: <ShieldCheck size={28} />,
        title: "Durable & Weatherproof Design",
        desc: "Built to last, our outdoor LED display screens are resistant to dust, rain, and extreme conditions, making them ideal for continuous outdoor use.",
    },
    {
        icon: <Monitor size={28} />,
        title: "Seamless Visual Experience",
        desc: "Our LED video wall display and LED wall display systems offer smooth, bezel-free visuals for immersive viewing across large formats.",
    },
    {
        icon: <Zap size={28} />,
        title: "Energy Efficient & Cost Effective",
        desc: "Our LED display boards are designed to consume less power while delivering high performance, helping you reduce operational costs.",
    },
    {
        icon: <Settings size={28} />,
        title: "Custom Solutions for Every Business",
        desc: "We provide tailored LED display solutions for retail, advertising, and industrial applications to match your exact needs.",
    },
    {
        icon: <Headphones size={28} />,
        title: "End-to-End Support",
        desc: "From consultation to installation, we ensure a smooth experience with complete support for all our LED display solutions.",
    },
];

export default function WhyChooseUs() {
    return (
        <div className="w-full bg-white py-10 px-4 md:px-15">
            <div className="text-center mb-8 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-black">
                    Why Businesses Choose Newtech
                </h2>
                <p className="text-gray-800 mt-4 text-sm md:text-base">
                    We deliver reliable, high-performance advertising LED display solutions designed for real-world impact.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {features.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10, scale: 1.03 }}
                        className="relative p-6 rounded-2xl 
                       bg-black/90 backdrop-blur-xl 
                       text-white 
                       border border-black/10 
                       shadow-lg hover:shadow-2xl 
                       transition duration-300"
                    >
                        {/* Icon */}
                        <div className="mb-4 text-white/80">
                            {item.icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-sm md:text-lg font-semibold mb-2">
                            {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                            {item.desc}
                        </p>

                        {/* subtle glow */}
                        <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition duration-300 bg-gradient-to-br from-white/10 to-transparent"></div>
                    </motion.div>
                ))}

            </div>
        </div>
    );
}