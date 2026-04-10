import React from 'react'

export default function CtaForm() {
    return (<>
        <div className="w-full bg-gray-100 py-12 px-4 md:px-10">
            <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-md p-6 md:p-10">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-black">
                        Search 30+ LED Display Solutions
                    </h2>
                    <p className="text-gray-600 mt-2 text-sm md:text-base">
                        Find the perfect advertising LED display screen for your needs.
                    </p>
                </div>

                {/* Form */}
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
                    {/* Name */}
                    <input
                        type="name"
                        placeholder="Your Name"
                        className="border border-gray-400 rounded-lg px-4 py-3 outline-none focus:border-black"
                    />

                    {/* Email */}
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="border border-gray-400 rounded-lg px-4 py-3 outline-none focus:border-black"
                    />

                    {/* Display Type */}
                    <select className="border border-gray-400 rounded-lg px-4 py-3 outline-none focus:border-black">
                        <option>Select Display Type</option>
                        <option>Indoor LED</option>
                        <option>Outdoor LED</option>
                    </select>

                    {/* Series */}
                    <select className="border border-gray-400 rounded-lg px-4 py-3 outline-none focus:border-black">
                        <option>Select Series</option>
                        <option>Series A</option>
                        <option>Series B</option>
                    </select>

                    {/* Location */}
                    <input
                        type="text"
                        placeholder="Location"
                        className="border border-gray-400 rounded-lg px-4 py-3 outline-none focus:border-black"
                    />

                    {/* Purpose (full width) */}
                    <input
                        type="text"
                        placeholder="Purpose"
                        className="border border-gray-400 rounded-lg px-4 py-3 outline-none focus:border-black"
                    />

                    {/* Button */}
                    <button type="submit"
                        className="md:col-span-2 bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition"
                    >
                        Submit
                    </button>

                </form>
            </div>
        </div>
    </>)
}
