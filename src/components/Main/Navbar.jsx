"use client";
import { Search, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ContactPopup from "./PopupForm";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const [open, setOpen] = useState(false);
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

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="md:block hidden">
        <SearchBar />
        </div>

        {/* Button */}
        <button onClick={() => setOpen(true)} className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition">
          Get Inquiry
        </button>
      </div>

      <ContactPopup isOpen={open} setIsOpen={setOpen} />
    </div>
  );
}