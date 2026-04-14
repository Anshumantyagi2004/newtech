"use client";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

export default function ContactMapForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      platform: "Newtech Contact Form",
      platformEmail: "director@nvsledwall.com",
      name: formData.get("contactPerson"),
      email: formData.get("email"),
      company: 'NA',
      phone: formData.get("phone"),
      product: "NA",
      place: "Delhi",
      message: formData.get("message"),
    };
    if (!data.phone || data.phone.length < 10)
      return toast.error("Enter Valid Phone Number");

    try {
      setLoading(true);
      const res = await axios.post("https://brandbnalo.com/api/form/add", data,
        { validateStatus: (status) => status >= 200 && status < 500 }
      );
      if (res.status >= 200 && res.status < 300) {
        toast(
          "Your enquiry has been submitted ✔.\n\n Our team will contact you shortly..",
          {
            duration: 6000,
          }
        );
        setTimeout(() => {
          e.target.reset();      // reset after UI change
        }, 100);
      }
    } catch (err) {
      console.log("ERROR:", err?.response || err.message);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT - MAP */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.0941246616976!2d77.130845875505!3d28.746606575602712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d016440000001%3A0x5a146877b94b1aa8!2sNewtech%20Video%20Systems%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1776151686433!5m2!1sen!2sin"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        {/* RIGHT - FORM */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 border border-gray-200 text-black p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Get In Touch
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name */}
            <input
              name="contactPerson"
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-white border border-black/20 focus:outline-none focus:border-black transition"
            />

            {/* Email */}
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-white border border-black/20 focus:outline-none focus:border-black transition"
            />

            {/* Phone */}
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 rounded-lg bg-white border border-black/20 focus:outline-none focus:border-black transition"
            />

            {/* Message */}
            <textarea
              rows="4"
              name="message"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-white border border-black/20 focus:outline-none focus:border-black transition"
            ></textarea>

            {/* Button */}
            <button disabled={loading} type="submit"
              className="w-full bg-black text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-[1.02]"
            >
              {loading ? "Submitting..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}