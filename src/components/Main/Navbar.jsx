"use client";
import { Search, Menu, X, PhoneCall } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ContactPopup from "./PopupForm";
import SearchBar from "./SearchBar";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { categories, products } from "@/data/data.js";

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
    <div className="w-full z-[9999] bg-black figtrees text-white border-b border-gray-400 shadow-md sticky top-0 z-40">
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

        <div className="relative group hidden md:flex justify-center items-center">
          {/* Button */}
          <Link
            href={"/categories"}
            className="flex justify-center items-center bg-[#c2907b] px-4 py-2 rounded-xl hover:scale-105 duration-150 transition-all font-light"
          >
            Our Products
          </Link>

          {/* Dropdown */}
          <div className="absolute z-[9999] 0 top-full mt-6 left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ">
            <div className="w-[800px] bg-pink-100/90 text-black rounded-3xl shadow-2xl border border-gray-200 p-6 flex gap-8">
              {/* Left Categories */}
              <div className="w-1/3 border-r border-gray-200 pr-4">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>

                <div className="flex flex-col gap-2">
                  {categories.map((cat,index) => (
                    <Link
                    href={`/categories/${cat.id}`}
                      key={index}
                      onMouseEnter={() => setActiveCategory(cat.id)}
                      className={`text-left px-3 py-2 rounded-lg transition ${
                        activeCategory === cat.id
                          ? "bg-[#c2907b] text-white"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {cat.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right Products */}
              <div className="w-2/3">
                <h3 className="text-lg font-semibold mb-4">Products</h3>

                <div className="grid grid-cols-2 gap-4">
                  {filteredProducts.map((product,index) => (
                    <Link
                      key={index}
                      href={`/products/${product.id}`}
                      className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-100 transition"
                    >
                      <img
                        src={product.img}
                        alt={product.name}
                        className="w-16 h-16 rounded-lg object-cover border"
                      />

                      <div>
                        <p className="text-sm font-medium line-clamp-2">
                          {product.name}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <SearchBar />

          <a
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
