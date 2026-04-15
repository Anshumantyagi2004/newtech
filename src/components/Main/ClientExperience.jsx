"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Briefcase, CheckCircle, Headphones } from "lucide-react";

const stats = [
  {
    icon: <Briefcase size={32} />,
    value: "15+",
    label: "Years Experience",
  },
  {
    icon: <Users size={32} />,
    value: "100+",
    label: "Team Members",
  },
  {
    icon: <CheckCircle size={32} />,
    value: "2000+",
    label: "Completed Projects",
  },
  {
    icon: <Headphones size={32} />,
    value: "24/7",
    label: "Customer Support",
  },
];

export default function ClientExperience() {
  return (
    <div className="w-full bg-black py-14 px-4 md:px-10 relative overflow-hidden">

      {/* subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.05),transparent_40%)]"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">

        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
             viewport={{ once: false, amount: 0.3 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="flex flex-col items-center justify-center space-y-3 
                       p-6 rounded-2xl 
                       bg-white/5 backdrop-blur-xl 
                       border border-white/10 
                       shadow-lg hover:shadow-white/10 
                       transition duration-300"
          >
            {/* Icon */}
            <div className="text-white/70">
              {item.icon}
            </div>

            {/* Value */}
            <h3 className="text-2xl md:text-4xl font-bold">
              {item.value}
            </h3>

            {/* Label */}
            <p className="text-xs md:text-sm text-gray-400">
              {item.label}
            </p>
          </motion.div>
        ))}

      </div>
    </div>
  );
}