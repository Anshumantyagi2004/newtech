"use client";
import { Search, Menu, X, PhoneCall, CircleChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ContactPopup from "./PopupForm";
import SearchBar from "./SearchBar";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { categories, products, solutions } from "@/data/data.js";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const adminLayout = pathname.startsWith("/admin");
  if (adminLayout) return null;

  const [activeCategory, setActiveCategory] = useState(categories[0]?.id);

  const filteredProducts = products
    .filter((product) => product.catId === activeCategory)
    .slice(0, 8);

  return (
    <div className="w-full bg-black figtrees text-white border-b border-gray-400 shadow-md sticky top-0 z-48">
      <div className="h-18 flex items-center justify-between px-2 md:px-6">
        {/* Left */}
        <div className="flex items-center md:gap-3 gap-1">
          <Link href="/">
            <img src="/download.png" alt="Logo" className="h-12 w-auto" />
          </Link>
          <span className="text-black ml-2 md:ml-0 bg-white px-2 py-1 text-xs md:text-sm rounded-md font-medium">
            GSTIN: 07AAECN8156D3ZE
          </span>
        </div>


        <div className="hidden lg:flex items-center gap-4">
          <div className="relative group hidden md:flex items-center">

            {/* Button */}
            <Link href="/government-solutions"
              className="bg-white text-black px-4 py-2 rounded-lg flex items-center gap-1 hover:bg-gray-200 transition shadow-md animate-[pulse_1.5s_ease-in-out_infinite]"
            >
              Government Solutions <CircleChevronDown size={18} />
            </Link>

            {/* Mega Menu */}
            <div
              className="absolute top-full left-1/2 -translate-x-1/2 pt-4
               opacity-0 invisible
               group-hover:opacity-100 group-hover:visible
               transition-all duration-300 z-[9999]"
            >

              <div className="w-[900px] rounded-3xl border border-gray-200 bg-white shadow-2xl p-2">
                <div className="grid  grid-cols-4 gap-3">
                  {solutions.map((item, index) => (
                    <Link key={index} href="/government-solutions">
                      <motion.div initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ y: -5 }}
                        className="group/card overflow-hidden rounded-2xl
                       border border-gray-200 bg-white
                       hover:shadow-xl transition-all duration-300"
                      >

                        {/* Image */}
                        <div className="relative h-36 overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover group-hover/card:scale-110 transition duration-500"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="px-3 py-2">
                          <h3 className="text-base font-bold text-gray-900 line-clamp-1">
                            {item.title}
                          </h3>

                          {/* <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                          {item.description}
                        </p> */}

                          <div className="mt-2 w-10 h-[2px] bg-red-500 group-hover/card:w-20 transition-all duration-300"></div>

                        </div>

                      </motion.div>
                    </Link>
                  ))}

                </div>
              </div>
            </div>
          </div>

          <SearchBar />

          {/* <a
            href="https://wa.me/+919810103697"
            className="bg-white text-green-600 px-2 py-1.5 rounded-lg hover:bg-green-100"
          >
            <FaWhatsapp size={28} />
          </a>

          <a
            href="tel:+919810103697"
            className="bg-white text-red-600 px-2.5 py-2.5 rounded-lg hover:bg-red-100"
          >
            <PhoneCall size={22} />
          </a> */}

          <button onClick={() => setOpen(true)}
            className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200"
          >
            Enquiry Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden bg-white text-black p-2 rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black text-white px-4 py-4 flex flex-col gap-4 border-t border-gray-700 z-50">
          <SearchBar />

          <div className="flex gap-3">
            <a
              href="https://wa.me/+919810103697"
              className="flex-1 bg-white text-green-600 p-3 rounded-lg flex justify-center"
            >
              <FaWhatsapp size={22} />
            </a>

            <a
              href="tel:+919810103697"
              className="flex-1 bg-white text-red-600 p-3 rounded-lg flex justify-center"
            >
              <PhoneCall size={20} />
            </a>
          </div>

          <button
            onClick={() => {
              setOpen(true);
              setMenuOpen(false);
            }}
            className="bg-white text-black py-3 rounded-lg"
          >
            Get Inquiry
          </button>
        </div>
      )}

      <ContactPopup isOpen={open} setIsOpen={setOpen} />
    </div>
  );
}
