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
  Proportions,
  MonitorCloud,
  Headset,
  Cross,
  Landmark,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { applications, categories } from "@/data/data";
import { usePathname } from "next/navigation";
import { RxCross2 } from "react-icons/rx";
const menuItems = [
  { name: "Home", icon: Home, link: "/" },
  { name: "Applications", icon: Briefcase, link: "/applications" },
  { name: "Categories", icon: LayoutGrid, link: "/categories" },
  { name: "Government Policy", icon: Landmark, link: "/government-solutions" },
  { name: "Products", icon: ShoppingCart, link: "/products" },
  { name: "Projects", icon: Proportions, link: "/projects" },
  { name: "About Us", icon: User, link: "/about-us" },
  { name: "Contact", icon: Phone, link: "/contact-us" },
  { name: "Support", icon: Headset, link: "/support" },
  { name: "Articles", icon: FileText, link: "/our-articles" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showApplications, setShowApplications] = useState(false);

  const pathname = usePathname();
  const adminLayout = pathname.startsWith("/admin");
  if (adminLayout) return null;

  return (
    <motion.div
      onMouseLeave={() => {
        setShowCategories(false);
      }}
      animate={{ width: open ? 220 : 70 }}
      transition={{ duration: 0.35 }}
      className={`hidden md:flex flex-col ${open ? "fixed" : "sticky"} top-0 left-0 h-screen bg-black text-white z-50`}
    >
      {/* Toggle */}
      <div className="h-18 border-b border-gray-400 flex items-center px-4">
        {!open && (
          <div className="w-full flex justify-end">
            <Menu
              className="cursor-pointer hover:scale-110 transition"
              onClick={() => setOpen(true)}
            />
          </div>
        )}

        {open && (
          <div className="w-full flex justify-end">
            <RxCross2
              size={23}
              className="cursor-pointer hover:scale-110 transition"
              onClick={() => setOpen(false)}
            />
          </div>
        )}
      </div>

      {/* Menu */}
      <div className="flex flex-col figtree gap-2 p-2 mt-2 relative">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isCategory = item.name === "Categories";
          const isApplication = item.name === "Applications";
          return (
            <div
              onClick={() => setOpen(false)}
              key={index}
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
              <Link
                href={item.link}
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
                    className="
      
        absolute
        left-full
        top-0
        ml-5
        w-[610px]
        max-h-[70vh]
        overflow-y-auto
        scrollbar-hide
        bg-white
        text-black
        rounded-xl
        shadow-xl
        p-4
        flex
        flex-wrap
        gap-4
        content-start
      "
                  >
                    {categories.map((cat, i) => (
                      <Link
                        key={i}
                        href={`/categories/${cat.id}`}
                        className="group"
                      >
                        <div
                          className="
              w-[180px]
              rounded-lg
              overflow-hidden
              shadow
              hover:shadow-lg
              transition
            "
                        >
                          <Image
                            src={cat.img}
                            alt={cat.title}
                            width={180}
                            height={120}
                            className="
                w-full
                h-28
                object-cover
                group-hover:scale-105
                transition
              "
                          />

                          <p className="text-sm p-3 font-medium">{cat.title}</p>
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
      className="
        absolute
        left-full
        top-0
        ml-2
        w-[1200px]
        bg-white
        text-black
        rounded-xl
        shadow-xl
        p-4
        flex
        flex-wrap
        gap-4
        max-h-[80vh]
        overflow-y-auto
        scrollbar-hide
      "
    >
      {applications.map((app, i) => {
        const Icon = app.icon;

        return (
          <Link
            key={i}
            href={`/applications/${app.id}`}
            className="group"
          >
            <div
              className="
                w-[180px]
                rounded-lg
                overflow-hidden
                shadow
                hover:shadow-lg
                transition
              "
            >
              <Image
                src={app.bgImage}
                alt={app.title}
                width={180}
                height={120}
                className="
                  w-full
                  h-28
                  object-cover
                  group-hover:scale-105
                  transition
                "
              />

              <p className="text-sm p-3 font-medium">
                {app.title}
              </p>
            </div>
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
