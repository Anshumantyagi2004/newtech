"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  User,
  Phone,
  FileText,
  ShoppingCart,
  LayoutGrid,
  Menu,
} from "lucide-react";
import Link from "next/link";

const menuItems = [
  { name: "Home", icon: Home, link: "/" },
  { name: "Categories", icon: LayoutGrid, link: "/categories" },
  { name: "Products", icon: ShoppingCart, link: "/products" },
  { name: "About Us", icon: User, link: "/about-us" },
  { name: "Contact", icon: Phone, link: "/contact-us" },
  { name: "Articles", icon: FileText, link: "/our-articles" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      onMouseLeave={() => setOpen(false)}
      animate={{ width: open ? 200 : 70 }}
      transition={{ duration: 0.35 }}
      className={`hidden md:flex flex-col ${open ? "fixed" : "sticky"} top-0 left-0 h-screen bg-black text-white z-50`}
    >
      {/* Toggle Button */}
      <div className={`h-18 border-b border-gray-400 flex ${open ? "justify-end pr-4" : "justify-center"} items-center`}>
        <Menu
          className="cursor-pointer hover:scale-110 transition"
          onClick={() => setOpen(!open)}
        />
      </div>

      {/* Menu */}
      <div className="flex flex-col gap-2 p-2 mt-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <Link href={`${item.link}`} key={index} onClick={() => setOpen(false)} onMouseEnter={() => setOpen(true)}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 hover:text-black transition cursor-pointer"
            >
              <Icon className="w-5 h-5" />

              {open && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-sm"
                >
                  {item.name}
                </motion.span>
              )}
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}