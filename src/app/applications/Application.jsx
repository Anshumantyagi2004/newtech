import { applications } from '@/data/data';
import Link from 'next/link'
import React from 'react'

export default function Application() {
  return (<>
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
          <span className="text-gray-300">Applications</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-5xl font-bold mb-2">
          Applications
        </h1>
      </div>
    </section>

    <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 md:px-15 px-4 py-10 gap-5">
      {applications.map((app) => {
        const Icon = app.icon;

        return (
          <Link
            key={app.id}
            href={`/applications/${app.id}`}
            className={`flex flex-col items-center justify-center gap-2 p-4 rounded-lg 
        ${app.bg} text-white border border-transparent cursor-pointer
        ${app.hover} transition duration-200`}
          >
            <Icon className="w-8 h-8" />
            <span className="text-base font-medium text-center leading-tight">
              {app.title}
            </span>
          </Link>
        );
      })}
    </div>

  </>)
}
