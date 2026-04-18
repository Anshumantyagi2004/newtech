"use client";

import React from "react";
import {
    Phone,
    Mail,
    MapPin,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/data/data";

export default function Footer() {
    const pathname = usePathname();
    const adminLayout = pathname.startsWith("/admin")
    if (adminLayout) return null;
    return (
        <footer className="bg-black text-white py-12 px-4 md:px-10">
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
                        <li className="hover:text-white cursor-pointer"><Link href={"/products"}>Products</Link></li>
                        <li className="hover:text-white cursor-pointer"><Link href={"/categories"}>Category</Link></li>
                        <li className="hover:text-white cursor-pointer"><Link href={"/about-us"}>About</Link></li>
                        <li className="hover:text-white cursor-pointer"><Link href={"/contact-us"}>Contact</Link></li>
                        <li className="hover:text-white cursor-pointer"><Link href={"/our-articles"}>Articles</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Categories</h3>
                    <ul className="space-y-2 text-gray-200 text-sm">
                        {categories.map((i,idx)=>(
                            <li className="hover:text-white cursor-pointer" key={idx}><Link href={`/categories/${i?.id}`}>{i?.title}</Link></li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Trust & Excellence</h3>

                    <p className="text-gray-200 text-sm leading-relaxed">
                        Trusted by businesses across industries, Newtech delivers high-performance LED display solutions with unmatched quality, reliability, and customer support.
                    </p>

                    <img src="/trustseal.webp" alt="trust" className="w-30 mt-4" />
                </div>
            </div>

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