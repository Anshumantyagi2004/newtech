"use client";

import {
  Factory,
  ShieldCheck,
  Cpu,
  PackageCheck,
  Wrench,
  Zap,
} from "lucide-react";

import { motion } from "framer-motion";

const manufacturingData = [
  {
    title: "Production Line",
    icon: Factory,
    image:
      "/productionLine.webp",
    description:
      "Advanced LED production lines designed for precision assembly, consistency, and high-volume manufacturing.",
  },
  {
    title: "QC Testing",
    icon: ShieldCheck,
    image:
      "/QcTesting.webp",
    description:
      "Strict multi-stage quality control checks ensure durability, performance, and long-term reliability.",
  },
  {
    title: "Module Testing",
    icon: Cpu,
    image:
      "/moduleTesting.webp",
    description:
      "Each LED module is tested for brightness, color consistency, signal stability, and pixel accuracy.",
  },
  {
    title: "Packing Area",
    icon: PackageCheck,
    image:
      "/packing.webp",
    description:
      "Secure export-grade packing ensures safe transportation and protection during logistics handling.",
  },
  {
    title: "Engineers & Technical Team",
    icon: Wrench,
    image:
      "/eng.webp",
    description:
      "Experienced engineers supervise production, calibration, and system optimization for every project.",
  },
  {
    title: "Aging & Burn-in Test",
    icon: Zap,
    image:
      "/agingTest.webp",
    description:
      "Comprehensive aging and burn-in testing validates stability and uninterrupted display performance.",
  },
];

const qualityPoints = [
  "Strict QC Process",
  "Burn-in Testing",
  "Calibration",
  "ESD Protection",
  "SMT Process",
];

export default function ManufacturingSection() {
  return (
    <section className="relative bg-black py-10 px-6 lg:px-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-red-600/20 text-red-500 text-sm font-medium mb-4">
            Manufacturing Excellence
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Advanced LED Manufacturing & Quality Control
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Our manufacturing facility follows strict international production
            standards with advanced testing systems, experienced engineers, and
            precision quality assurance processes.
          </p>
        </motion.div>

        {/* Grid Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {manufacturingData.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:border-red-500/40 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  {/* Icon */}
                  <div className="absolute bottom-4 left-4 w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-red-500 transition">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-500/20 blur-3xl" />
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border border-red-500/20 bg-linear-to-br from-red-600/10 to-white/5 p-4 md:p-10 backdrop-blur-xl"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Precision Quality Assurance Process
              </h3>

              <p className="text-gray-300 leading-relaxed mb-8">
                We implement rigorous manufacturing standards and advanced
                testing methods to ensure every LED display delivers exceptional
                performance, reliability, and long operational life.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {qualityPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-white" />
                    </div>

                    <span className="text-white font-bold">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative w-full overflow-hidden rounded-xl">
  <iframe
    className="w-full aspect-video"
    src="https://www.youtube.com/embed/amE_Btjt2io"
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}