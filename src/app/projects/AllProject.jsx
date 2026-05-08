"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import React, { useEffect, useState } from "react";

const SkeletonCard = () => (
  <div className="relative w-full rounded-2xl overflow-hidden shadow-lg">
    <div className="relative w-full h-64 bg-gray-200 animate-pulse" />

    <div className="absolute bottom-0 left-0 w-full p-3">
      <div className="flex bg-gray-200/80 items-center justify-between backdrop-blur-md border border-white/20 rounded-xl px-4 py-3">
        <div className="space-y-2">
          <div className="h-4 w-28 bg-gray-300 rounded animate-pulse" />
          <div className="h-3 w-16 bg-gray-300 rounded animate-pulse" />
        </div>

        <div className="h-7 w-20 bg-gray-300 rounded-full animate-pulse" />
      </div>
    </div>
  </div>
);

const AllProject = () => {
  const [mounted, setMounted] = useState(false);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProjects = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/projects", {
        cache: "no-store",
      });

      const data = await res.json();

      if (data?.success) {
        setProjects(data.projects || []);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setMounted(true);
    getProjects();
  }, []);

  // Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-64 md:h-96 flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/rental-cabinet-1.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <div className="flex items-center gap-2 text-sm md:text-base mb-3">
            <Link href="/" className="hover:underline">
              Home
            </Link>

            <span>/</span>

            <span className="text-gray-300">Projects</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold">
            Projects
          </h1>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-[#f3f4f6] py-10 md:py-25 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-red-600 font-semibold tracking-[0.18em] uppercase mb-3">
              Latest Work
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Featured Projects
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))
              : projects?.map((project) => (
                  <div
                    key={project?._id}
                    className="relative w-full rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
                  >
                    {/* Image */}
                    <div className="relative w-full h-64 overflow-hidden">
                      <Image
                        src={project?.image }
                        alt={project?.name }
                        fill
                        sizes="(max-width:768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Overlay */}
                    <div className="absolute bottom-0 left-0 w-full p-3 translate-y-1 group-hover:-translate-y-2 transition-all duration-500">
                      <div className="flex items-center justify-between bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 text-white shadow-lg">
                        <div>
                          <p className="font-semibold text-lg md:text-xl leading-tight">
                            {project?.name}
                          </p>

                          <p className="text-xs text-white/70 mt-1 tracking-wide">
                            {project?.dimension}
                          </p>
                        </div>

                        <button
                          type="button"
                          className="flex items-center gap-1.5 bg-white/15 hover:bg-white/25 border border-white/20 rounded-full px-3 py-2 text-xs font-medium capitalize transition-all duration-300"
                        >
                          <MapPin size={18} className="opacity-80" />

                          <span>
                            {project?.city}, {project?.state}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
          </div>

          {/* Empty State */}
          {!loading && projects.length === 0 && (
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