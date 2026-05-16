import { CheckCircle, ClipboardList, LifeBuoy, MapPin, PencilRuler, Settings } from 'lucide-react';
import React from 'react'

export default function HowWeProcess() {
    const steps = [
        {
            title: "Requirement Understanding",
            description:
                "We analyze your business goals, advertising needs, and space to recommend the most suitable LED display solution.",
            icon: ClipboardList,
            color: "bg-blue-100 text-blue-600",
        },
        {
            title: "Site Inspection",
            description:
                "Our experts inspect your location to evaluate lighting, visibility, and installation feasibility for best performance.",
            icon: MapPin,
            color: "bg-purple-100 text-purple-600",
        },
        {
            title: "Solution Design",
            description:
                "We create a customized display plan including screen size, resolution, and placement for maximum impact.",
            icon: PencilRuler,
            color: "bg-green-100 text-green-600",
        },
        {
            title: "Installation",
            description:
                "Professional installation by skilled technicians ensuring safety, precision, and long-term durability.",
            icon: Settings,
            color: "bg-yellow-100 text-yellow-600",
        },
        {
            title: "Testing & Handover",
            description:
                "We test brightness, clarity, and performance, then guide you on operating your LED display system.",
            icon: CheckCircle,
            color: "bg-emerald-100 text-emerald-600",
        },
        {
            title: "Ongoing Support",
            description:
                "Continuous maintenance and support to ensure smooth operation with minimal downtime.",
            icon: LifeBuoy,
            color: "bg-red-100 text-red-600",
        },
    ];
    return (
        <section className="w-full py-10 px-4 md:px-16 bg-gray-100">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
                    Our Process – How We Work
                </h2>
                <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                    We follow a structured and customer-focused approach to deliver
                    high-quality LED display solutions with efficiency and precision.
                </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {steps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                        <div
                            key={index}
                            className="relative p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 bg-white border"
                        >
                            {/* Step Number */}
                            <div className="absolute -top-4 -left-4 w-10 h-10 bg-gray-800 text-white flex items-center justify-center rounded-full font-bold">
                                {index + 1}
                            </div>

                            {/* Icon */}
                            <div
                                className={`w-14 h-14 flex items-center justify-center rounded-full mb-4 ${step.color}`}
                            >
                                <Icon size={28} />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {step.title}
                            </h3>

                            <p className="text-gray-600 text-sm">{step.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}
