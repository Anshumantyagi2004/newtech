"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { applications, applicationsDescription, products } from "@/data/data";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Image from "next/image";

export default function ApplicationPage() {
  const { id } = useParams();
  const appProducts = products.filter((item) =>
    item.applicationIds?.includes(id),
  );

  const [projects, setProjects] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const app = applications.find((i) => i.id == id);
  const appDes = applicationsDescription.find((i) => i.id == id);

  useEffect(() => {
    if (!id) return;

    const fetchProjects = async () => {
      console.log(id);
      try {
        const res = await fetch(`/api/category/${id}`);
        const data = await res.json();

        if (data.success) {
          setProjects(data.projects);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoadingProjects(false);
      }
    };

    fetchProjects();
  }, [id]);

  return (
    <>
      <section className="relative w-full h-62 md:h-88 flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${app.bgImage})`, // change path
          }}
        />

        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <div className="flex items-center gap-2 text-sm md:text-base">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <Link href="/applications" className="hover:underline">
              Applications
            </Link>
            <span>/</span>
            <span className="text-gray-300">{app.title}</span>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-5xl font-bold mb-2">{app.title}</h1>
        </div>
      </section>

      {appProducts.length == 0 ? (
        <p className="text-gray-700 text-center font-semibold text-xl py-20">
          No Product Found
        </p>
      ) : (
        <>
          <div className="text-center my-10">
            <h1 className="text-3xl md:text-5xl font-bold text-black">
              Our Products
            </h1>
            <div className="w-20 h-1 bg-[#825746] mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto pb-12 px-4">
            {appProducts.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl overflow-hidden"
              >
                {/* Image */}
                <img
                  src={item?.img}
                  alt={item.name}
                  className="w-full h-[220px] md:h-[280px] object-fill transition duration-500 group-hover:scale-110"
                />

                {/* Soft Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition duration-500"></div>

                {/* Content */}
                <div className="absolute bottom-0 p-5 text-white">
                  <h3 className="text-base md:text-lg font-medium">
                    {item?.name}
                  </h3>

                  <div className="mt-4">
                    <Link
                      href={`/products/${item?.id}`}
                      className="text-sm font-medium border border-white px-4 py-2 rounded-full backdrop-blur-md bg-white/10 hover:bg-white hover:text-black transition"
                    >
                      View Displays →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </>
      )}

      {projects.length>0 &&<section className="py-16 bg-white">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-black">
            Our Projects
          </h2>

          <div className="w-20 h-1 bg-[#825746] mx-auto mt-4 rounded-full"></div>
        </div>

        {loadingProjects ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : projects.length === 0 ? (
          <p className="text-center text-gray-500">No Projects Found</p>
        ) : (
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {projects.map((project) => (
           <div
  key={project?._id}
  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
>
  {/* Image */}
  <div
    onClick={() => setSelectedImage(project?.image)}
    className="relative h-64 overflow-hidden group cursor-pointer"
  >
    <Image
      src="/download.png"
      alt="logo"
      width={80}
      height={80}
      className="absolute top-3 left-3 z-20 bg-white p-1 rounded-md shadow"
    />

    <Image
      src={project?.image}
      alt={project?.name}
      fill
      sizes="(max-width:768px) 100vw, 33vw"
      className="object-cover group-hover:scale-110 transition-transform duration-700"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </div>

  {/* Content */}
  <div className="p-5">
    <div className="flex justify-between text-center items-center">
    <h3 className="text-xl font-bold text-gray-900">
      {project?.name}
    </h3>
    <div className="flex items-center gap-2 mt-3 text-gray-600">
      <MapPin size={18} className="text-[#825746]" />
      <span>
        {project?.city}, {project?.state}
      </span>
    </div>

    </div>

    

    <p className="mt-3 text-gray-500">
    Dimensions  {project?.dimension}
    </p>
  </div>
</div>
            ))}
          </div>
        )}
      </section>}

      <div className="py-10 bg-gray-100">
        {/* Main Heading */}
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-4xl font-bold text-black">
            {appDes?.title}
          </h1>
          <div className="w-20 h-1 bg-[#825746] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {appDes?.description.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`p-5 rounded-xl text-white transition duration-300 
          ${item.bg} ${item.hover} hover:scale-105 hover:shadow-xl`}
              >
                {/* Top Section */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-white/20 rounded-md">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-base leading-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Content */}
                <p className="text-sm opacity-90 leading-relaxed">
                  {item.content}
                </p>

                {/* Optional Number */}
                {/* <div className="mt-4 text-right text-xs opacity-70">
                {String(index + 1).padStart(2, "0")}
              </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
