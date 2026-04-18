"use client";
import { Search, Menu, PhoneCall } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ContactPopup from "./PopupForm";
import SearchBar from "./SearchBar";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const adminLayout = pathname.startsWith("/admin")
  if (adminLayout) return null;
  return (
    <div className="w-full h-18 bg-black text-white flex items-center border-b border-gray-400 justify-between px-6 shadow-md sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <Link href="/">
          <img
            alt="Logo"
            className="h-14 w-auto"
            src="/download.png"
          />
        </Link>
      </div>


      <div className="flex items-center gap-4">
        <div className="md:block hidden">
          <SearchBar />
        </div>

        <a href="https://wa.me/+919810103697" className="bg-white text-black px-2.5 py-1.5 rounded-lg hover:bg-gray-200 transition">
          <FaWhatsapp size={28} />
        </a>
        <a href="tel:+919810103697" className="bg-white text-black px-3 py-2 rounded-lg hover:bg-gray-200 transition">
          <PhoneCall size={24} />
        </a>

        {/* Button */}
        <button onClick={() => setOpen(true)} className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition">
          Get Inquiry
        </button>
      </div>

      <ContactPopup isOpen={open} setIsOpen={setOpen} />
    </div>
  );
}