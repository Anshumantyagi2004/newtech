"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ContactPopup({ isOpen, setIsOpen }) {
  const modalRef = useRef();

  // ESC close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [setIsOpen]);

  // Outside click detection (REAL FIX)
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          onMouseDown={handleOutsideClick}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* MODAL */}
          <motion.div
            ref={modalRef}
            onMouseDown={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.8, y: 60 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 60 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-lg bg-black/90 backdrop-blur-xl text-white rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.1)] p-8 relative border border-white/10"
          >
            {/* CLOSE */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white"
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold mb-6 text-center">
              Get In Touch
            </h2>

            <form className="space-y-5">
              {[
                { label: "Name", type: "text" },
                { label: "Email", type: "email" },
                { label: "Product", type: "text" },
                { label: "Phone", type: "tel" },
              ].map((field, i) => (
                <div key={i} className="relative">
                  <input
                    type={field.type}
                    required
                    className="peer w-full bg-white/10 border border-white/20 rounded-lg px-3 pt-6 pb-2 focus:outline-none focus:border-white"
                  />
                  <label className="absolute left-3 top-2 text-sm text-white/60 transition-all peer-focus:text-white">
                    {field.label}
                  </label>
                </div>
              ))}

              <div className="relative">
                <textarea
                  rows="3"
                  required
                  className="peer w-full bg-white/10 border border-white/20 rounded-lg px-3 pt-6 pb-2 focus:outline-none focus:border-white"
                />
                <label className="absolute left-3 top-2 text-sm text-white/60">
                  Message
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:scale-[1.03] transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}