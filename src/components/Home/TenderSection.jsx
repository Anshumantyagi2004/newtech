"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    FileCheck,
    ClipboardList,
    ShieldCheck,
    Presentation,
    PenTool,
    MonitorPlay,
    Users,
} from "lucide-react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const services = [
    {
        icon: <FileCheck size={34} />,
        title: "OEM Authorization",
        description:
            "Official OEM authorization support for government and institutional tenders with complete compliance and authenticity assurance.",
    },
    {
        icon: <ClipboardList size={34} />,
        title: "BOQ Support",
        description:
            "Accurate BOQ preparation based on project requirements, technical specifications, and cost-effective LED display planning.",
    },
    {
        icon: <ShieldCheck size={34} />,
        title: "Technical Compliance",
        description:
            "Comprehensive technical compliance documentation aligned with tender specifications and consultant requirements.",
    },
    {
        icon: <Presentation size={34} />,
        title: "Pre-bid Support",
        description:
            "Professional assistance for pre-bid meetings, technical presentations, and project clarification discussions.",
    },
    {
        icon: <PenTool size={34} />,
        title: "Drawing Assistance",
        description:
            "Detailed layout drawings, installation plans, and engineering support tailored to project and site conditions.",
    },
    {
        icon: <MonitorPlay size={34} />,
        title: "Simulation Support",
        description:
            "Realistic LED display simulations and visual project presentations for approvals and better planning.",
    },
    {
        icon: <Users size={34} />,
        title: "Consultant Coordination",
        description:
            "Smooth coordination with consultants, architects, PMC teams, and government authorities throughout execution.",
    },
];

export default function TenderSupportSection() {
    return (
        <section className="w-full bg-gradient-to-b from-white to-gray-50 pt-10 px-4 md:px-10 figtree overflow-hidden">

            {/* Heading */}
            <div className="max-w-7xl mx-auto text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="text-red-500 font-semibold tracking-[0.2em] uppercase"
                >
                    Tender & Project Support
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: false }}
                    className="text-3xl md:text-5xl font-bold text-gray-900 mt-2"
                >
                    Complete Technical & Tender Assistance
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: false }}
                    className="text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed"
                >
                    End-to-end support for government projects, tenders, consultants,
                    and system integrators with professional documentation, compliance,
                    technical guidance, and execution planning.
                </motion.p>
            </div>

            {/* Slider */}
            <div className="max-w-7xl mx-auto">

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={24}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="py-10!"
                >
                    {services.map((item, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.2,
                                    delay: index * 0.08,
                                }}
                                viewport={{ once: false }}
                                whileHover={{
                                    y: -10,
                                }}
                                className="group relative bg-white rounded-3xl p-6
                           border border-gray-200
                           shadow-sm hover:shadow-2xl
                           transition-all duration-500 overflow-hidden
                           min-h-[300px]"
                            >

                                {/* Glow Effect */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-full blur-3xl opacity-0 group-hover:opacity-70 transition duration-500"></div>

                                {/* Icon */}
                                <div className="relative z-10 w-16 h-16 rounded-2xl 
                             bg-red-50 text-red-500
                             flex items-center justify-center
                             group-hover:scale-110 transition duration-300"
                                >
                                    {item.icon}
                                </div>

                                {/* Content */}
                                <div className="relative z-10 mt-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Bottom Accent */}
                                <div className="relative z-10 mt-8 w-14 h-[3px] bg-red-500 rounded-full group-hover:w-24 transition-all duration-300"></div>

                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
}