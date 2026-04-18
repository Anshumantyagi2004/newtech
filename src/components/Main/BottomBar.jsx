"use client";

import { motion } from "framer-motion";
import {
  Home,
  LayoutGrid,
  ShoppingCart,
  User,
  Phone,
} from "lucide-react";
import Link from "next/link";

const tabs = [
  { name: "Home", icon: Home, id: '/' },
  { name: "Category", icon: LayoutGrid, id: '/categories' },
  { name: "Products", icon: ShoppingCart, center: true, id: '/products' },
  { name: "About", icon: User, id: '/about-us' },
  { name: "Contact", icon: Phone, id: '/contact-us' },
];

export default function MobileTabbar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-gray-100 border-t border-gray-300 shadow-lg z-50">

      <div className="flex justify-between items-center px-4 py-2">
        {tabs.map((tab, index) => {
          const Icon = tab.icon;

          if (tab.center) {
            return (
              <motion.div
                whileTap={{ scale: 0.9 }}
                key={index}
                className="flex flex-col items-center -mt-6"
              >
                <div className="bg-black text-white p-4 rounded-full shadow-xl">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs mt-1 font-semibold text-black">
                  {tab.name}
                </span>
              </motion.div>
            );
          }

          return (
            <motion.div
              whileTap={{ scale: 0.9 }}
              key={index}
              className="flex flex-col items-center text-gray-800"
            >
              <Link href={`${tab.id}`}>
                <Icon className="w-5 h-5" />
                <span className="text-xs mt-1">{tab.name}</span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}