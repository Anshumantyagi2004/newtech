"use client";

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Sidebar from "@/components/admin/Sidebar";
import { Menu, X } from "lucide-react";

export default function HeroAdminPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [video, setVideo] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVideoChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setVideo(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      return toast.error("Please enter title");
    }

    if (!video) {
      return toast.error("Please select a video");
    }

    const toastId = toast.loading("Uploading hero video...");

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("title", title);
      formData.append("video", video);

      const { data } = await axios.post("/api/Hero", formData);

      toast.dismiss(toastId);
      toast.success(data.message);

      setTitle("");
      setVideo(null);
      setPreview("");

      document.getElementById("heroVideo").value = "";
    } catch (error) {
      console.log(error);

      toast.dismiss(toastId);
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm p-4 flex items-center justify-between md:justify-end">
          <button
            className="md:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? (
              <X size={26} />
            ) : (
              <Menu size={26} className="text-black" />
            )}
          </button>

          
        </header>

        {/* Main */}
        <main className="p-4 md:p-8">
          <h1 className="hidden md:block text-center mb-2 text-2xl font-bold text-black">
            Hero Section
          </h1>
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Upload Hero Video
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div>
                <label className="block text-black font-semibold mb-2">
                  Hero Title
                </label>

                <input
                  type="text"
                  placeholder="Enter Hero Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full border rounded-lg p-3 text-black placeholder:text-black focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Video */}
              <div>
                <label className="block text-black font-semibold mb-2">
                  Hero Video
                </label>

                <input
                  id="heroVideo"
                  type="file"
                  accept="video/*"
                  onChange={handleVideoChange}
                  className="w-full border rounded-lg p-3 text-black placeholder:text-black file:bg-blue-600 file:text-white file:border-0 file:px-4 file:py-2 file:rounded-md file:mr-4 file:cursor-pointer hover:file:bg-blue-700"
                />
              </div>

              {/* Preview */}
              {preview && (
                <div>
                  <h3 className="text-black font-semibold mb-3">
                    Video Preview
                  </h3>

                  <div className="rounded-xl overflow-hidden border bg-black">
                    <video
                      src={preview}
                      controls
                      className="w-full h-56 md:h-96 object-contain"
                    />
                  </div>
                </div>
              )}

              {/* Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className={`px-8 py-3 rounded-lg text-white font-semibold transition ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {loading ? "Uploading..." : "Upload Video"}
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
