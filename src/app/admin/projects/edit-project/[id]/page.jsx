"use client";

import Sidebar from "@/components/admin/Sidebar";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page() {
  const { id } = useParams();
  const router = useRouter();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    image: null,
    city: "",
    state: "",
    dimension: "",
  });

  // GET SINGLE PROJECT
  const getSingleProject = async () => {
    try {
      const res = await fetch(`/api/projects/edit-project/${id}`);
      

      const data = await res.json();
      console.log(data)

      if (data.success) {
        setFormData({
          name: data.project.name,
          image: null,
          city: data.project.city,
          state: data.project.state,
          dimension: data.project.dimension,
        });

        setImagePreview(data.project.image);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      getSingleProject();
    }
  }, [id]);

  // HANDLE CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // UPDATE PROJECT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = new FormData();

      data.append("name", formData.name);
      data.append("city", formData.city);
      data.append("state", formData.state);
      data.append("dimension", formData.dimension);

      if (formData.image) {
        data.append("image", formData.image);
      }

      const res = await fetch(`/api/projects/edit-project/${id}`, {
        method: "PUT",
        body: data,
      });
      console.log(res);

      const result = await res.json();

      if (result.success) {
        alert("Project Updated ✅");

        router.push("/admin/projects");
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex text-black">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="flex-1 p-4 md:p-8">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-6 md:p-8">

          <h2 className="text-3xl font-bold mb-8 text-center">
            Edit Project
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div>
              <label className="block mb-2 font-semibold">
                Project Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Project name"
                className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Image */}
            <div>
              <label className="block mb-2 font-semibold">
                Upload New Image
              </label>

              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];

                  if (file) {
                    setFormData({
                      ...formData,
                      image: file,
                    });

                    setImagePreview(
                      URL.createObjectURL(file)
                    );
                  }
                }}
                className="w-full border border-gray-300 rounded-xl p-3 bg-white"
              />

              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-72 object-cover rounded-2xl mt-4 border"
                />
              )}
            </div>

            {/* City */}
            <div>
              <label className="block mb-2 font-semibold">
                City
              </label>

              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* State */}
            <div>
              <label className="block mb-2 font-semibold">
                State
              </label>

              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State"
                className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Dimension */}
            <div>
              <label className="block mb-2 font-semibold">
                Dimension
              </label>

              <input
                type="text"
                name="dimension"
                value={formData.dimension}
                onChange={handleChange}
                placeholder="1200 sqft"
                className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-xl font-semibold transition"
            >
              {loading ? "Updating..." : "Update Project"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}