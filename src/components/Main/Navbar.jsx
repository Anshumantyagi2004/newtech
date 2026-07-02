"use client";
import { Search, Menu, X, PhoneCall, CircleChevronDown, Briefcase, LayoutGrid, Proportions, MonitorCloud, Headset, FileText } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ContactPopup from "./PopupForm";
import SearchBar from "./SearchBar";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { categories, products, solutions } from "@/data/data.js";
import { motion } from "framer-motion";
import Image from "next/image";
import { MdOutlineSupportAgent, MdPrivacyTip } from "react-icons/md";
import { GoLaw } from "react-icons/go";

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

  const menuItems = [
    { name: "Applications", icon: Briefcase, link: "/applications" },
    { name: "Projects", icon: Proportions, link: "/projects" },
    { name: "Disclaimer & Terms", icon: GoLaw, link: "/terms-conditions" },
    { name: "Support", icon: Headset, link: "/support" },
    { name: "Privacy Policy", icon: MdPrivacyTip, link: "/privacy-policy" },
    { name: "Articles", icon: FileText, link: "/our-articles" },
  ];

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
           

            {/* Mega Menu */}
            
          </div>

          {/* <SearchBar /> */}

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

            <div className="relative group inline-block">
      
      {/* Main Button */}
      <button
        
        className="bg-white text-black px-4 py-2 rounded-lg flex items-center gap-1 hover:bg-gray-200 transition shadow-md"
      >
        Support <MdOutlineSupportAgent size={20} />
      </button>

      {/* Dropdown */}
      <div
        className="
          absolute top-full left-0 mt-2
          w-60 bg-white rounded-lg shadow-xl
          opacity-0 invisible
          group-hover:opacity-100
          group-hover:visible
          transition-all duration-300
          overflow-hidden z-50
        "
      >
        <Link
          href="/terms-conditions"
          className="block px-5 py-3 text-black hover:bg-gray-100"
        >
          Disclaimer & Terms
        </Link>

        

        <Link
          href="/privacy-policy"
          className="block px-5 py-3 text-black hover:bg-gray-100"
        >
          Privacy Policy
        </Link>
        {/* <a
        target="_blank"
          href="https://nvsledwall.com/support"
          className="block px-5 py-3 text-black hover:bg-gray-100"
        >
          Raise Ticket
        </a> */}
      </div>
    </div>

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
          {/* <SearchBar /> */}

          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index}  className="relative"
              >
                <Link href={item.link}
                  onClick={() => setMenuOpen(false)}
                  className="border border-gray-600 flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 hover:text-black transition cursor-pointer"
                >
                  <Icon className="w-5 h-5" />

                  {/* {open && ( */}
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-sm text-white"
                  >
                    {item.name}
                  </motion.span>
                  {/* )} */}
                </Link>
              </div>
            );
          })}

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
