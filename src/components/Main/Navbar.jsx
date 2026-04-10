"use client";

import { Search, Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
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
        <div className="hidden md:flex items-center border border-gray-600 rounded-lg px-3 py-2.5 focus-within:border-white transition">
          <Search className="w-4 h-4 text-gray-300" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none px-2 text-sm placeholder-gray-400"
          />
        </div>

        {/* Button */}
        <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition">
          Get Inquiry
        </button>
      </div>
    </div>
  );
}