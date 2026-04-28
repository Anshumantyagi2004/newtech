"use client";
import React, { useState } from "react";
import {
    Phone,
    Mail,
    MapPin, Building2, Landmark, Warehouse, Globe,
    X
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/data/data";
import { AnimatePresence, motion } from "framer-motion";

export default function Footer() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const adminLayout = pathname.startsWith("/admin")
    if (adminLayout) return null;

    const address = [
        {
            icon: MapPin,
            title: "Head Office",
            phone: "+91-9810103197, +91-9810103697",
            text: "M5-A, DSIDC, Badli Industrial Area, Phase-1, Near Samaypur Badli Metro Rd, Rohini, Delhi - 110042"
        },
        {
            icon: Building2,
            title: "Noida Office",
            text: "1002, Tower B, ATS Bouquet, Sector 132, Noida - 201304",
            phone: "+91 1204641607, +91 88000 53240"
        },
        {
            icon: Landmark,
            title: "Telangana Branch",
            text: "Plot No.1-367/A/2/A/1, Near Ambedkar Statue, Jalpally, Hyderabad, Telangana - 500005",
            phone: "+91 9213092038, +91 7419236651"
        },
        {
            icon: Warehouse,
            title: "Mumbai Branch",
            text: "Unit no. 85, Akshay Mitta Industrial Estate, Marol, Andheri East, Mumbai - 400059",
            phone: "+91 9212622643, +91 8789178077"
        },
        {
            icon: Globe,
            title: "U.A.E Branch",
            text: "Warehouse No. 10, Plot No. 597779, Dubai Investment Park 2, Dubai, UAE",
            phone: "+971 0529217755"
        }
    ];

    return (
        <footer className="bg-black text-white py-12 px-4 md:px-10">
            {/* subtle background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.05),transparent_40%)]"></div>

            <div className="relative max-w-7xl mx-auto flex flex-wrap justify-between gap-4 text-white mb-8">
                {address.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={index}
                            className="flex-1 min-w-[200px] flex flex-col items-center text-center 
        p-5 rounded-xl 
        bg-white/5 backdrop-blur-lg 
        border border-white/10 
        hover:bg-white/10 transition duration-300"
                        >
                            {/* Icon */}
                            <Icon className="w-6 h-6 text-white/70 mb-2" />

                            {/* Title */}
                            <h3 className="text-lg font-semibold">
                                {item.title}
                            </h3>

                            {/* Phone */}
                            <p className="text-xs text-gray-200 mt-1">
                                {item.phone}
                            </p>

                            {/* Address */}
                            <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                                {item.text}
                            </p>
                        </div>
                    );
                })}

            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    {/* Logo */}
                    <img src="/download.png" alt="logo" className="h- w-40 mb-2" />

                    {/* About */}
                    <p className="text-sm text-gray-200 leading-relaxed">
                        Established in year 2010, Newtech Video Systems Private Limited is one of the leading manufacturer, trader, distributor and importer of LED Video Processor, Indoor LED Video Display, Outdoor LED Video Display, LED Video Display Controller etc.
                    </p>

                    {/* Contact */}
                    <div className="mt-4 space-y-2 text-sm text-gray-200">
                        <p className="flex items-center gap-2">
                            <Phone size={14} /> +91 9810103697
                        </p>
                        <p className="flex items-center gap-2">
                            <Mail size={14} /> director@nvsledwall.com
                        </p>
                        <p className="flex items-center gap-2">
                            <MapPin size={14} /> Delhi, India
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-3 mt-4">
                        {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map((Icon, i) => (
                            <div
                                key={i}
                                className="bg-white text-black p-2 rounded-full hover:scale-110 transition cursor-pointer"
                            >
                                <Icon size={14} />
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
                    <ul className="space-y-2 text-gray-200 text-sm">
                        <li className="hover:text-white cursor-pointer"><Link href={"/"}>Home</Link></li>
                        <li className="hover:text-white cursor-pointer"><Link href={"/applications"}>Applications</Link></li>
                        <li className="hover:text-white cursor-pointer"><Link href={"/products"}>Products</Link></li>
                        <li className="hover:text-white cursor-pointer"><Link href={"/categories"}>Category</Link></li>
                        <li className="hover:text-white cursor-pointer"><Link href={"/about-us"}>About</Link></li>
                        <li className="hover:text-white cursor-pointer"><Link href={"/contact-us"}>Contact</Link></li>
                        <li className="hover:text-white cursor-pointer"><Link href={"/our-articles"}>Articles</Link></li>
                        <li className="hover:text-white cursor-pointer"><Link href={"/sitemap"}>Sitemap</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Categories</h3>
                    <ul className="space-y-2 text-gray-200 text-sm">
                        {categories.map((i, idx) => (
                            <li className="hover:text-white cursor-pointer" key={idx}><Link href={`/categories/${i?.id}`}>{i?.title}</Link></li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Trust & Excellence</h3>

                    <p className="text-gray-200 text-sm leading-relaxed">
                        Trusted by businesses across industries, Newtech delivers high-performance LED display solutions with unmatched quality, reliability, and customer support.
                    </p>

                    <img src="/trustseal.webp" alt="trust" className="w-25 mt-4 cursor-pointer" onClick={() => setOpen(true)} />
                </div>
            </div>

            <AnimatePresence>
                {open && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black/70 z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpen(false)}
                        />

                        <motion.div
                            className="fixed inset-0 z-50 flex items-center justify-center px-4"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                        >
                            <div className="relative bg-white rounded-xl shadow-lg max-w-2xl w-full">

                                <button
                                    onClick={() => setOpen(false)}
                                    className="absolute top-3 right-3 text-gray-600 hover:text-black"
                                >
                                    <X size={24} />
                                </button>

                                <img
                                    src="/trust Elite certificate (23).png"
                                    alt="Trust Seal Large"
                                    className="w-full h-auto object-contain rounded"
                                />
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Bottom Bar */}
            <div className="border-t flex flex-col md:flex-row justify-around border-white/10 mt-10 pt-6 text-center text-gray-200 text-sm">
                <p>
                    © {new Date().getFullYear()} Newtech Video Systems Pvt. Ltd. All rights reserved.
                </p>

                <p>
                    Website Designed By <Link href="https://promozionebranding.com/" className="hover:underline text-bold">Promozione Branding Pvt Ltd.</Link>
                </p>
            </div>
        </footer>
    );
}