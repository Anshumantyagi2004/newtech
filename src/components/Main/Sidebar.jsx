"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Phone,
  FileText,
  ShoppingCart,
  LayoutGrid,
  Menu,
  Briefcase,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { applications, categories } from "@/data/data";
import { usePathname } from "next/navigation";
const menuItems = [
  { name: "Home", icon: Home, link: "/" },
  { name: "Applications", icon: Briefcase, link: "/applications" },
  { name: "Categories", icon: LayoutGrid, link: "/categories" },
  { name: "Products", icon: ShoppingCart, link: "/products" },
  { name: "About Us", icon: User, link: "/about-us" },
  { name: "Contact", icon: Phone, link: "/contact-us" },
  { name: "Articles", icon: FileText, link: "/our-articles" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showApplications, setShowApplications] = useState(false);

  const pathname = usePathname();
  const adminLayout = pathname.startsWith("/admin")
  if (adminLayout) return null;

  return (
    <motion.div
      onMouseLeave={() => {
        setOpen(false);
        setShowCategories(false);
      }}
      animate={{ width: open ? 220 : 70 }}
      transition={{ duration: 0.35 }}
      className={`hidden md:flex flex-col ${open ? "fixed" : "sticky"} top-0 left-0 h-screen bg-black text-white z-50`}
    >
      {/* Toggle */}
      <div className={`h-18 border-b border-gray-400 flex ${open ? "justify-start pl-4" : "justify-center"} items-center`}>
        <Menu
          className="cursor-pointer hover:scale-110 transition"
          onClick={() => setOpen(!open)}
        />
      </div>

      {/* Menu */}
      <div className="flex flex-col gap-2 p-2 mt-2 relative">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isCategory = item.name === "Categories";
          const isApplication = item.name === "Applications";
          return (
            <div key={index}
              onMouseEnter={() => {
                setOpen(true);
                if (isCategory) setShowCategories(true);
                if (isApplication) setShowApplications(true);
              }}
              onMouseLeave={() => {
                if (isCategory) setShowCategories(false);
                if (isApplication) setShowApplications(false);
              }}
              className="relative"
            >
              <Link href={item.link}
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

              {/* CATEGORY PANEL */}
              <AnimatePresence>
                {isCategory && showCategories && open && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.25 }}
                    className="absolute left-full top-0 ml-2 w-[320px] bg-white text-black rounded-xl shadow-xl p-4 grid grid-cols-2 gap-3"
                  >
                    {categories.map((cat, i) => (
                      <Link
                        key={i}
                        href={`/categories/${cat.id}`}
                        className="group"
                      >
                        <div className="rounded-lg overflow-hidden shadow hover:shadow-lg transition">
                          <Image
                            src={cat.img}
                            alt={cat.title}
                            width={150}
                            height={100}
                            className="w-full h-20 object-cover group-hover:scale-105 transition"
                          />
                          <p className="text-xs p-2 font-medium">
                            {cat.title}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {isApplication && showApplications && open && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.25 }}
                    className="absolute left-full top-0 ml-2 w-[320px] 
             bg-white text-black rounded-xl shadow-xl p-4 
             grid grid-cols-2 gap-3
             max-h-[80vh] overflow-y-auto scrollbar-hide">
                    {applications.map((app, i) => {
                      const Icon = app.icon;
                      return (
                        <Link
                          key={i}
                          href={`/applications/${app.id}`}
                          className={`flex flex-col items-center justify-center gap-2 p-4 rounded-lg 
      ${app.bg} text-white border border-transparent 
      ${app.hover} hover:text-white transition duration-200`}
                        >
                          <Icon className="w-6 h-6" />
                          <span className="text-[11px] font-medium text-center leading-tight">
                            {app.title}
                          </span>
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}