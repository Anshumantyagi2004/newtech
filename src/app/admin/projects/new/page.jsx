"use client";

import Sidebar from "@/components/admin/Sidebar";
import React, { useState } from "react";

export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    city: "",
    state: "",
    dimension: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const data = new FormData();

    data.append("name", formData.name);
    data.append("image", formData.image);
    data.append("city", formData.city);
    data.append("state", formData.state);
    data.append("dimension", formData.dimension);

    console.log(data);
    

    const res = await fetch("/api/projects", {
      method: "POST",
      body: data,
    });

    const result = await res.json();

    console.log(result);

    if (res.ok) {
      alert(result.message || "Project Created ✅");

      setFormData({
        name: "",
        image: "",
        city: "",
        state: "",
        dimension: "",
      });

      setImagePreview("");
    } else {
      alert(result.message || "Failed ❌");
    }
  } catch (err) {
    console.error(err);
    alert("Something went wrong ⚠️");
  }
};
  return (
    <div className="min-h-screen bg-gray-300 flex text-black">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex-1 p-4 md:p-8">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Add Project
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Project Name */}
            <div>
              <label className="block mb-2 font-semibold">Project Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter project name"
                className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            {/* Image URL */}
            {/* Image Upload */}
            <div>
              <label className="block mb-2 font-semibold">Upload Image</label>

              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];

                  if (file) {
                    setFormData({
                      ...formData,
                      image: file,
                    });

                    setImagePreview(URL.createObjectURL(file));
                  }
                }}
                className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-black bg-white"
                required
              />

              {/* Preview */}
              {imagePreview && (
                <div className="mt-4">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-84 object-cover rounded-xl border border-gray-300"
                  />
                </div>
              )}
            </div>

            {/* City */}
            <div>
              <label className="block mb-2 font-semibold">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter city"
                className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            {/* State */}
            <div>
              <label className="block mb-2 font-semibold">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Enter state"
                className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            {/* Dimension */}
            <div>
              <label className="block mb-2 font-semibold">Dimension</label>
              <input
                type="text"
                name="dimension"
                value={formData.dimension}
                onChange={handleChange}
                placeholder="Example: 1200 sqft"
                className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 rounded-xl transition"
            >
              Add Project
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
