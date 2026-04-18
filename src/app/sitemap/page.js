"use client";
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import { products, serviceLocations } from '@/Data/data';

export default function page() {
    const sitemapItems = [
        { name: "Home", link: "/" },
        { name: "Product", link: "/products" },
        { name: "About Us", link: "/about-us" },
        { name: "Articles", link: "/articles" },
        { name: "Contact", link: "/contact-us" },
    ]

    return (<>
        <section className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('/bannner.webp')" }}>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
            <div className="relative z-10 text-center px-6 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-sm md:text-base text-gray-300"
                >
                    <Link href="/" className="hover:text-amber-400 transition">
                        Home
                    </Link>
                    <span className="mx-2">/</span>
                    <span className="text-amber-400">Sitemap</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-5xl font-extrabold text-white leading-tight"
                >
                    Sitemap
                </motion.h1>
            </div>
        </section>

        <section className='py-10 px-4'>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6 text-[#3C2012] text-xl font-semibold">
                {sitemapItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.link}
                        className="p-6 bg-white rounded-xl border border-amber-300 
                         hover:border-amber-500 hover:shadow-lg transition-all text-center"
                    >
                        {item.name}
                    </Link>
                ))}
                {/* {categories.map((item) => (
                    <Link
                        key={item.name}
                        href={`products`}
                        className="p-6 bg-white rounded-xl border border-gray-300 content-center
                         hover:border-blue-500 hover:shadow-lg transition-all text-center"
                    >
                        {item.name}
                    </Link>
                ))} */}
                {products.map((item) => (
                    <Link
                        key={item.name}
                        href={`/products/${item.slug}`}
                        className="p-6 bg-white rounded-xl border border-amber-300 content-center
                         hover:border-amber-500 hover:shadow-lg transition-all text-center"
                    >
                        {item.name}
                    </Link>
                ))}
                {serviceLocations.map((item) => (
                    <Link
                        key={item.id}
                        href={`${item.href}`}
                        className="p-6 bg-white rounded-xl border border-amber-300 content-center
                         hover:border-amber-500 hover:shadow-lg transition-all text-center"
                    >
                        Bar Bending Machine Importer in {item.label}
                    </Link>
                ))}
            </div>
        </section>
    </>)
}
