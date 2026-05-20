"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Building2,
    User,
    MapPin,
    Hash,
    FileText,
    Upload,
    Send,
} from "lucide-react";
import toast from "react-hot-toast";

export default function Support() {
    const [ticketRaised, setTicketRaised] = useState(false);

    const [formData, setFormData] = useState({
        companyName: "",
        contactPerson: "",
        projectLocation: "",
        productSerialNo: "",
        problemDescription: "",
        file: null,
    });

    const handleChange = (e) => {
        const { name, value, files, type } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]:
                type === "file"
                    ? files && files.length > 0
                        ? files[0]
                        : null
                    : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = new FormData();
            data.append("companyName", formData.companyName);
            data.append("contactPerson", formData.contactPerson);
            data.append("projectLocation", formData.projectLocation);
            data.append("productSerialNo", formData.productSerialNo);
            data.append("problemDescription", formData.problemDescription);

            if (formData.file) {
                data.append("file", formData.file);
            }

            const response = await fetch("/api/support", {
                method: "POST",
                body: data,
            });

            const result = await response.json();
            console.log(result);
            if (result.success) {
                setTicketRaised(true);
                toast.success("Support ticket raised successfully!")
                setTimeout(() => {
                    setTicketRaised(false);
                }, 4000);

                setFormData({
                    companyName: "",
                    contactPerson: "",
                    projectLocation: "",
                    productSerialNo: "",
                    problemDescription: "",
                    file: null,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    const inputStyle = "w-full bg-[#111827] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition";

    const labelStyle = "text-sm font-medium text-gray-300 mb-2 flex items-center gap-2";

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="w-full max-w-4xl bg-[#0f172a] border border-slate-800 rounded-3xl shadow-2xl p-6 md:p-10"
            >
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-white">
                        Support Center
                    </h1>

                    <p className="text-gray-400 mt-3 text-lg">
                        Submit your issue and our support team will contact you.
                    </p>
                </div>

                {ticketRaised && (
                    <motion.div
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 rounded-xl border border-green-500 bg-green-500/10 px-4 py-3 text-green-400"
                    >
                        ✅ Support ticket raised successfully!
                    </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6 relative z-40">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className={labelStyle}>
                                <Building2 size={18} />
                                Company Name
                            </label>

                            <input
                                type="text"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                placeholder="Enter company name"
                                className={inputStyle}
                                required
                            />
                        </div>

                        {/* CONTACT */}
                        <div>
                            <label className={labelStyle}>
                                <User size={18} />
                                Contact Person
                            </label>

                            <input
                                type="text"
                                name="contactPerson"
                                value={formData.contactPerson}
                                onChange={handleChange}
                                placeholder="Enter contact person"
                                className={inputStyle}
                                required
                            />
                        </div>

                        {/* LOCATION */}
                        <div>
                            <label className={labelStyle}>
                                <MapPin size={18} />
                                Project Location
                            </label>

                            <input
                                type="text"
                                name="projectLocation"
                                value={formData.projectLocation}
                                onChange={handleChange}
                                placeholder="Enter project location"
                                className={inputStyle}
                                required
                            />
                        </div>

                        {/* SERIAL */}
                        <div>
                            <label className={labelStyle}>
                                <Hash size={18} />
                                Product Serial Number
                            </label>

                            <input
                                type="text"
                                name="productSerialNo"
                                value={formData.productSerialNo}
                                onChange={handleChange}
                                placeholder="Enter serial number"
                                className={inputStyle}
                                required
                            />
                        </div>
                    </div>

                    {/* DESCRIPTION */}
                    <div>
                        <label className={labelStyle}>
                            <FileText size={18} />
                            Problem Description
                        </label>

                        <textarea
                            rows={6}
                            name="problemDescription"
                            value={formData.problemDescription}
                            onChange={handleChange}
                            placeholder="Describe your issue..."
                            className={`${inputStyle} resize-none`}
                            required
                        />
                    </div>

                    {/* FILE UPLOAD */}
                    <div>
                        <label className={labelStyle}>
                            <Upload size={18} />
                            Upload Image / Video
                        </label>

                        <div className="border-2 border-dashed border-slate-700 rounded-2xl bg-[#111827] p-6 text-center hover:border-cyan-500 transition">
                            <input
                                type="file"
                                name="file"
                                accept="image/*,video/*"
                                onChange={handleChange}
                                className="block w-full text-sm text-gray-400 file:mr-4  file:py-2  file:px-4 file:rounded-lg
                                file:border-0 file:bg-cyan-500 file:text-white hover:file:bg-cyan-600 cursor-pointer"
                            />

                            {formData.file && (
                                <p className="mt-4 text-sm text-cyan-400">
                                    Selected: {formData.file.name}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* BUTTON */}
                    <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} type="submit"
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 hover:opacity-90 transition shadow-lg"
                    >
                        <Send size={20} />
                        Raise Support Ticket
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
}