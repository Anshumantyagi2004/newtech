"use client";
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function CtaForm() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            platform: "Newtech Home Page CTA Form",
            platformEmail: "director@nvsledwall.com",
            name: formData.get("contactPerson"),
            email: formData.get("email"),
            company: 'NA',
            phone: formData.get("phone"),
            product: formData.get("product"),
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

    return (<>
        <div className="w-full bg-gray-100 py-12 px-4 md:px-10">
            <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-md p-6 md:p-8">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-black">
                        Search 30+ LED Display Solutions
                    </h2>
                    <p className="text-gray-600 mt-2 text-sm md:text-base">
                        Find the perfect advertising LED display screen for your needs.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-6 gap-4 text-black">
                    {/* Name */}
                    <input
                        type="name"
                        name="contactPerson"
                        placeholder="Your Name"
                        className="border border-gray-400 rounded-lg px-4 py-3 outline-none focus:border-black"
                    />

                    {/* Email */}
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="border border-gray-400 rounded-lg px-4 py-3 outline-none focus:border-black"
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Your Phone No."
                        className="border border-gray-400 rounded-lg px-4 py-3 outline-none focus:border-black"
                    />

                    {/* Display Type */}
                    <select name="product" className="border border-gray-400 rounded-lg px-4 py-3 outline-none focus:border-black">
                        <option>Select Display Type</option>
                        <option>Indoor LED</option>
                        <option>Outdoor LED</option>
                    </select>

                    {/* Purpose (full width) */}
                    <input
                        type="text"
                        name="message"
                        placeholder="Purpose"
                        className="border border-gray-400 rounded-lg px-4 py-3 outline-none focus:border-black"
                    />

                    {/* Button */}
                    <button type="submit" disabled={loading}
                        className="w-full bg-[#926857] text-white py-3 rounded-lg hover:bg-[#825746] transition"
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </form>
            </div>
        </div>
    </>)
}
