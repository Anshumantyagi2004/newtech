"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is an advertising LED display?",
    a: "An advertising LED display is a digital screen that uses LED technology to showcase ads, promotions, and dynamic content with high brightness and visibility.",
  },
  {
    q: "What is the difference between indoor and outdoor LED display screens?",
    a: "Outdoor LED display screens are designed to be weatherproof and high-brightness for sunlight visibility, while indoor displays offer higher resolution for close viewing.",
  },
  {
    q: "Where are outdoor LED displays commonly used?",
    a: "Outdoor LED displays are used for billboards, highways, building facades, stadiums, and public advertising spaces.",
  },
  {
    q: "What are LED video wall displays used for?",
    a: "LED video wall displays are used in events, malls, control rooms, corporate offices, and exhibitions for large-scale, seamless visuals.",
  },
  {
    q: "Are LED display boards energy efficient?",
    a: "Yes, modern LED display boards are designed to be energy-efficient while delivering high brightness and long-lasting performance.",
  },
  {
    q: "Can LED wall displays be customized?",
    a: "Yes, LED wall display systems are modular and can be customized in size, shape, and resolution based on your requirements.",
  },
  {
    q: "Do you provide installation and maintenance services?",
    a: "Yes, we offer complete support including consultation, installation, and maintenance for all advertising LED display screens and related solutions.",
  },
  {
    q: "What industries use industrial video screens?",
    a: "Industrial video screens are used in manufacturing units, control rooms, monitoring centers, and other environments that require continuous and reliable display systems.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-gray-100 py-12 px-4 md:px-15">
      
      {/* Heading */}
      <div className="text-center mb-8 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-black">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-800 mt-4 text-sm md:text-base">
          Everything you need to know about advertising LED display solutions.
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-5xl mx-auto space-y-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl overflow-hidden bg-white"
          >
            {/* Question */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-5 text-left"
            >
              <span className="text-sm md:text-base font-medium text-black">
                {item.q}
              </span>

              <motion.span
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-gray-500"
              >
                <ChevronDown />
              </motion.span>
            </button>

            {/* Answer */}
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="px-5 pb-5 text-gray-800 text-sm md:text-base"
                >
                  {item.a}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}