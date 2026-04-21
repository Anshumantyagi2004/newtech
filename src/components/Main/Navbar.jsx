"use client";
import { Search, Menu, X, PhoneCall } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ContactPopup from "./PopupForm";
import SearchBar from "./SearchBar";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const adminLayout = pathname.startsWith("/admin");
  if (adminLayout) return null;

  return (
    <div className="w-full bg-black text-white border-b border-gray-400 shadow-md sticky top-0 z-40">
      <div className="h-18 flex items-center justify-between px-2 md:px-6">

        {/* Left */}
        <div className="flex items-center md:gap-3 gap-1">
          <Link href="/">
            <img src="/download.png" alt="Logo" className="h-12 w-auto" />
          </Link>
          <span className="text-black bg-white px-2 py-1 text-xs md:text-sm rounded-md font-medium">
            GSTIN: 07AAECN8156D3ZE
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <SearchBar />

          <a href="https://wa.me/+919810103697"
            className="bg-white text-green-600 px-2 py-1.5 rounded-lg hover:bg-green-100"
          >
            <FaWhatsapp size={28} />
          </a>

          <a href="tel:+919810103697"
            className="bg-white text-red-600 px-2.5 py-2.5 rounded-lg hover:bg-red-100"
          >
            <PhoneCall size={22} />
          </a>

          <button
            onClick={() => setOpen(true)}
            className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200"
          >
            Get a Free Quota Now
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
            <a href="https://wa.me/+919810103697"
              className="flex-1 bg-white text-green-600 p-3 rounded-lg flex justify-center"
            >
              <FaWhatsapp size={22} />
            </a>

            <a href="tel:+919810103697"
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