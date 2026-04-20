"use client";
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Building } from "lucide-react";
import ContactMapForm from '@/components/Main/FormSection';

const containerVariant = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export default function ContactUs() {
    return (<>
        <section className="relative w-full h-62 md:h-88 flex items-center justify-center text-white">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/edu.jpg')", // change path
                }}
            />

            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 flex flex-col items-center text-center px-4">
                <div className="flex items-center gap-2 text-sm md:text-base">
                    <Link href="/" className="hover:underline">
                        Home
                    </Link>
                    <span>/</span>
                    <span className="text-gray-300">Contact Us</span>
                </div>

                {/* Title */}
                <h1 className="text-2xl md:text-5xl font-bold mb-2">
                    Contact Us
                </h1>
            </div>
        </section>

        <section className="bg-gray-50 py-10 px-4">
            <div className="max-w-7xl mx-auto space-y-6">
                <motion.div
                    variants={containerVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-6"
                >
                    {[{
                        icon: Mail,
                        title: "Email Us",
                        content: ["director@nvsledwall.com"]
                    },
                    {
                        icon: Phone,
                        title: "Call Us",
                        content: ["+91 9810103697", "+91 9810103197"]
                    },
                    {
                        icon: MapPin,
                        title: "Head Office",
                        content: ["M5-A, DSIDC, Badli Industrial Area, Phase-1, Near Samaypur Badli Metro Rd, Rohini, Delhi - 110042"]
                    }].map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={i}
                                variants={cardVariant}
                                whileHover={{
                                    y: -8,
                                    scale: 1.03,
                                }}
                                className="group bg-black/90 backdrop-blur-xl text-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
                            >
                                <Icon className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                {item.content.map((text, idx) => (
                                    <p key={idx} className="text-sm opacity-80 group-hover:opacity-100 transition">
                                        {text}
                                    </p>
                                ))}
                            </motion.div>
                        );
                    })}
                </motion.div>

                <motion.div
                    variants={containerVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {[
                        {
                            title: "Noida Office",
                            text: "1002, Tower B, ATS Bouquet, Sector 132, Noida - 201304",
                        },
                        {
                            title: "Telangana Branch",
                            text: "Plot No.1-367/A/2/A/1, Near Ambedkar Statue, Jalpally, Hyderabad, Telangana - 500005",
                            phone: "+91 9213092038, +91 7419236651",
                        },
                        {
                            title: "Mumbai Branch",
                            text: "Unit no. 85, Akshay Mitta Industrial Estate, Marol, Andheri East, Mumbai - 400059",
                            phone: "+91 9212622643, +91 8789178077",
                        },
                        {
                            title: "U.A.E Branch",
                            text: "Warehouse No. 10, Plot No. 597779, Dubai Investment Park 2, Dubai, UAE",
                            phone: "+971 0529217755",
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariant}
                            whileHover={{
                                y: -6,
                                scale: 1.02,
                            }}
                            className="group bg-black/90 backdrop-blur-xl text-white p-6 rounded-2xl transition-all duration-300 hover:shadow-[0_10px_35px_rgba(0,0,0,0.3)]"
                        >
                            <Building className="mb-4 transition-transform duration-300 group-hover:scale-110" />

                            <h3 className="font-semibold text-lg mb-2">
                                {item.title}
                            </h3>

                            <p className="text-sm mb-2 opacity-80 group-hover:opacity-100 transition">
                                {item.text}
                            </p>

                            {item.phone && (
                                <p className="text-sm text-gray-300 group-hover:text-white transition">
                                    {item.phone}
                                </p>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>

        <ContactMapForm />
    </>)
}
