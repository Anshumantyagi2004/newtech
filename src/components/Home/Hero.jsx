"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function Hero() {
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false); // ✅ track video load

  useEffect(() => {
    getHero();
  }, []);

  const getHero = async () => {
    try {
      const { data } = await axios.get("/api/Hero");
      setHero(data[0]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="w-full h-[80vh] bg-gray-200 animate-pulse" />
    );
  }

  return (
    <div className="w-full bg-white figtree">
      <div className="relative w-full h-[220px] sm:h-[300px] md:h-[500px] lg:h-[80vh] overflow-hidden">

        {/* ✅ Thumbnail / Image (shows first) */}
        {!videoLoaded && (
          <Image
            src={hero?.thumbnail || "/hero.webp"} // use thumbnail if available
            alt="hero"
            fill
            className="object-cover brightness-75"
            priority
          />
        )}

        {/* ✅ Video */}
        {hero?.video && (
          <video
            className={`w-full h-full object-cover brightness-75 transition-opacity duration-700 ${
              videoLoaded ? "opacity-100" : "opacity-0"
            }`}
            src={hero.video}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onLoadedData={() => setVideoLoaded(true)} // 🔥 trigger switch
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
            className="mt-5 z-20 cursor-pointer bg-white border border-white text-black font-bold md:py-3 md:px-6 px-2 py-2 rounded-lg hover:bg-black hover:text-white transition duration-300"
          >
            Inquiry Now
          </a>
        </div>

      </div>
    </div>
  );
}