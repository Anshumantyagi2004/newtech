"use client";

import React from "react";
import { motion } from "framer-motion";

const clients = [
    "/Client/1.png",
    "/Client/2.png",
    "/Client/3.png",
    "/Client/4.png",
    "/Client/5.png",
    "/Client/6.png",
    "/Client/7.png",
    "/Client/8.png",
    "/Client/9.png",
    "/Client/10.png",
    "/Client/11.png",
    "/Client/12.png",
    "/Client/13.png",
    "/Client/14.png",
    "/Client/15.png",
    "/Client/16.png",
    "/Client/17.png",
    "/Client/18.png",
];

// duplicate for seamless loop
const loopClients = [...clients, ...clients];

export default function ClientSlider() {
    return (
        <div className="w-full bg-gray-100 py-10 overflow-hidden">
            <div className="text-center mb-8">
                <h2 className="text-2xl md:text-4xl font-bold text-black">
                    Trusted by Leading Brands
                </h2>
            </div>

            <div className="relative">
                <motion.div
                    className="flex gap-10 items-center"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        ease: "linear",
                        duration: 20,
                        repeat: Infinity,
                    }}
                >
                    {loopClients.map((img, index) => (
                        <div
                            key={index}
                            className="bg-white min-w-[40%] sm:min-w-[25%] md:min-w-[18%] lg:min-w-[12%] flex justify-center items-center border py-2 rounded-md border-gray-200"
                        >
                            <img
                                src={img}
                                alt="client"
                                className="h-[60px] md:h-[80px] object-contain transition duration-300"
                            />
                        </div>
                    ))}
                </motion.div>

            </div>
        </div>
    );
}