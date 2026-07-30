"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    const getHero = async () => {
      try {
        const res = await fetch("/api/Hero", {
          cache: "force-cache", 
        });
        const data = await res.json();
        setHero(data[0]);
      } catch (error) {
        console.log(error);
      }
    };

    getHero();
  }, []);

  if (!hero) {
    return (
      <div className="w-full h-[80vh] bg-gray-200 animate-pulse" />
    );
  }

  return (
    <div className="w-full bg-white figtree">
      <div className="relative w-full h-[220px] sm:h-[300px] md:h-[500px] lg:h-[80vh] overflow-hidden">

        {/* ✅ Optimized Video */}
        {hero?.video && (
          <video
            className="w-full h-full object-cover brightness-75"
            src={hero.video}
            autoPlay
            muted
            loop
            playsInline
            preload="none"   
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-white font-bold text-2xl md:text-5xl leading-tight drop-shadow-lg">
            {hero?.title}
          </h1>

          <a
            href="tel:+919810103197"
            className="mt-5 z-20 bg-white border border-white text-black font-bold md:py-3 md:px-6 px-2 py-2 rounded-lg hover:bg-black hover:text-white transition duration-300"
          >
            Inquiry Now
          </a>
        </div>

      </div>
    </div>
  );
}