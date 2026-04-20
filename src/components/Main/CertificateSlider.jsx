"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const certificates = [
    "/Certificates/Picture4.jpg",
    "/Certificates/Picture5.jpg",
    "/Certificates/Picture6.jpg",
    "/Certificates/Picture7.jpg",
    "/Certificates/Picture9.jpg",
    "/Certificates/Picture11.jpg",
    "/Certificates/Picture12.jpg",
    "/Certificates/Picture13.jpg",
];

export default function CertificateSlider() {
    const [index, setIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(5);

    // ✅ Responsive control
    useEffect(() => {
        const update = () => {
            if (window.innerWidth < 640) setItemsToShow(1);
            else if (window.innerWidth < 1024) setItemsToShow(3);
            else setItemsToShow(5);
        };

        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    // 🔁 Auto Slide
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % certificates.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % certificates.length);
    };

    const prevSlide = () => {
        setIndex((prev) =>
            prev === 0 ? certificates.length - 1 : prev - 1
        );
    };

    // 🧠 Get visible items
    const getVisibleItems = () => {
        let visible = [];
        const half = Math.floor(itemsToShow / 2);

        for (let i = -half; i <= half; i++) {
            const newIndex =
                (index + i + certificates.length) % certificates.length;
            visible.push({
                img: certificates[newIndex],
                position: i,
            });
        }

        return visible;
    };

    const visibleItems = getVisibleItems();

    return (
        <div className="w-full bg-white py-16 px-4 md:px-10 overflow-hidden">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-black">
                    Our Certifications
                </h2>
            </div>

            <div className="relative max-w-7xl mx-auto flex items-center justify-center">
                <button
                    onClick={prevSlide}
                    className="absolute left-0 z-20 bg-black text-white p-3 rounded-full"
                >
                    <ChevronLeft />
                </button>

                {/* SLIDER */}
                <div className="flex items-center justify-center gap-6">
                    {visibleItems.map((item, i) => {
                        const isCenter = item.position === 0;

                        return (
                            <div
                                key={i}
                                className="w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] 
                   aspect-[4/5] flex items-center justify-center"
                            >
                                <motion.div
                                    animate={{
                                        scale: isCenter ? 1.15 : 0.85,
                                        y: isCenter ? -20 : 0,
                                        opacity: isCenter ? 1 : 0.5,
                                        filter: isCenter ? "none" : "blur(1px)",
                                        zIndex: isCenter ? 10 : 1,
                                    }}
                                    transition={{ duration: 0.4 }}
                                    className="w-full h-full"
                                    style={{ transformOrigin: "center" }}
                                >
                                    <div className="w-full h-full bg-white border rounded-xl shadow-md overflow-hidden flex items-center justify-center">

                                        <img
                                            src={item.img}
                                            alt="certificate"
                                            className="w-full h-full object-contain p-3"
                                        />

                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>

                <button
                    onClick={nextSlide}
                    className="absolute right-0 z-20 bg-black text-white p-3 rounded-full"
                >
                    <ChevronRight />
                </button>
            </div>
        </div>
    );
}