"use client";

import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  Briefcase,
  CheckCircle,
  Factory,
  MapPinned,
  BadgeCheck,
} from "lucide-react";

const stats = [
  {
    icon: <Briefcase size={32} />,
    value: 15,
    suffix: "+",
    title: "Years Experience",
    isCounter: true,
  },
  {
    icon: <CheckCircle size={32} />,
    value: 5000,
    suffix: "+",
    title: "Installations",
    isCounter: true,
  },
  {
    icon: <Factory size={32} />,
    title: "OEM Manufacturer",
    subtitle: "Premium LED Solutions",
    isCounter: false,
  },
  {
    icon: <MapPinned size={32} />,
    title: "Pan India Support",
    subtitle: "Make in India Solutions",
    isCounter: false,
  },
];

export default function ClientExperience() {
  return (
    <div className="w-full bg-black figtree py-14 px-4 md:px-10 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.05),transparent_40%)]"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">

        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="flex flex-col items-center justify-center 
                       min-h-[200px]
                       p-6 rounded-2xl 
                       bg-white/5 backdrop-blur-xl 
                       border border-white/10 
                       shadow-lg hover:shadow-white/10 
                       transition duration-300"
          >
            <div className="text-white/70 mb-4">
              {item.icon}
            </div>

            {item.isCounter ? (
              <>
                <h3 className="text-2xl md:text-4xl font-bold">
                  <CountUp
                    end={item.value}
                    duration={2.5}
                    suffix={item.suffix}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </h3>

                <p className="text-sm md:text-base text-gray-300 mt-2">
                  {item.title}
                </p>
              </>
            ) : (
              <>
                <h3 className="text-lg md:text-2xl font-bold leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs md:text-sm text-gray-400 mt-2">
                  {item.subtitle}
                </p>
              </>
            )}
          </motion.div>
        ))}

      </div>
    </div>
  );
}