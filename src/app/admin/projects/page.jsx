"use client";

import Sidebar from "@/components/admin/Sidebar";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    try {
      const res = await fetch("/api/projects");

      const data = await res.json();

      if (data.success) {
        setProjects(data.projects);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch("/api/projects", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (!res.ok) {
        alert("Some issue in deleting this blog");
        return;
      }

      setProjects((prev) => prev.filter((project) => project._id !== id));
    } catch (err) {
      console.log(err);
      alert("Error deleting blog");
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex text-black">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex-1 p-4 md:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="md:text-3xl text-xl font-bold">All Projects</h2>

          <Link
            href="/admin/projects/new"
            className="px-4 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold transition"
          >
            Add Project
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects?.map((project) => (
            <div
              key={project._id}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200"
            >
              {/* Image */}
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Location */}
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">
                    {project.city}, {project.state}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 line-clamp-1">
                      {project.name}
                    </h3>

                    <p className="text-gray-500 mt-1 text-sm">
                      {project.dimension}
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3 mt-6">
                  <Link
                    href={`/admin/projects/edit-project/${project._id}`}
                    className="flex-1 text-center bg-blue-500 hover:bg-blue-600 text-white py-2.5 rounded-xl font-semibold transition"
                  >
                    Edit
                  </Link>

                  <button  onClick={() => handleDelete(project._id)} className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2.5 rounded-xl font-semibold transition">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {projects.length === 0 && (
          <div className="text-center mt-20 text-gray-500 text-lg">
            No Projects Found
          </div>
        )}
      </div>
    </div>
  );
}
