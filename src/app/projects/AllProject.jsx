"use client";
import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import React, { useEffect, useState } from "react";

const SkeletonCard = () => (
  <div className="relative w-full max-w-80 rounded-2xl overflow-hidden shadow-lg">
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
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProjects = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/projects");
      const data = await res.json();
      if (data.success) {
        setProjects(data.projects);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      <section className="relative w-full h-62 md:h-88 flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/rental-cabinet-1.jpg')" }}
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
          <h1 className="text-2xl md:text-5xl font-bold mb-2">Projects</h1>
        </div>
      </section>

      <section className="bg-[#f0f0f0] py-14 md:py-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-red-600 font-semibold tracking-[0.18em] uppercase mb-3">
              Latest Work
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Featured Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))
              : projects?.map((project) => (
                  <div
                    key={project._id}
                    className="relative w-full max-w-80 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
                  >
                    {/* Image */}
                    <div className="relative w-full h-64">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        sizes="(max-width:768px) 100vw, 320px"
                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Bottom overlay bar */}
                    <div className="absolute bottom-0 hover:absolute hover:top-2 left-0 w-full p-3 translate-y-1 group-hover:translate-y-0 transition-transform duration-400">
                      <div className="flex bg-white/10 items-center justify-between backdrop-blur-md border border-white/25 rounded-xl px-4 py-3 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
                        <div>
                          <p className="font-semibold text-xl leading-tight drop-shadow-sm">
                            {project.name}
                          </p>
                          <p className="text-xs text-white/60 mt-0.5 tracking-wide">
                            {project.dimension}
                          </p>
                        </div>

                        <button
                          type="button"
                          className="flex justify-center  capitalize items-center gap-1.5 bg-white/15 hover:bg-white/30 border border-white/20 rounded-full  px-3 py-2.5 text-xs font-medium tracking-wide transition-colors duration-200"
                        >
                          <MapPin className="w-2 h-2 opacity-75 ml-1" />
                          {project.city} , {project.state}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
          </div>

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
