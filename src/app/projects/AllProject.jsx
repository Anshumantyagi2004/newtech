"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const AllProject = () => {
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

  useEffect(() => {
    getProjects();
  }, []);
  console.log(projects);
  return (
    <>
      <section className="relative w-full h-62 md:h-88 flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/rental-cabinet-1.jpg')", // change path
          }}
        />

        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <div className="flex items-center gap-2 text-sm md:text-base">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-300">Projects</span>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-5xl font-bold mb-2">Projects</h1>
        </div>
      </section>

      <section className="bg-[#f0f0f0] py-14 md:py-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-red-600  font-semibold tracking-[0.18em] uppercase mb-3">
              Latest Work
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Featured Projects
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects?.map((project) => (
              <div className="relative w-full  max-w-80 rounded-2xl overflow-hidden shadow-lg group">
                {/* Image */}
                <div className="relative w-full h-64">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width:768px) 100vw, 320px"
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-3">
                  <div className="flex bg-gray-200/80 items-center justify-between backdrop-blur-md  border border-white/20 rounded-xl px-4 py-3 text-white">
                    <div className="">
                      <p className="font-semibold text-base">{project.name}</p>

                      <p className="text-xs text-white/70">
                        {project.dimension}
                      </p>
                    </div>

                    <button
                      type="button"
                      className="bg-white/20 rounded-full px-4 py-1.5 text-xs"
                    >
                      {project.city}, {project.state}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {projects.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-xl font-semibold text-gray-400">
                No Projects Found
              </h3>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default AllProject;
