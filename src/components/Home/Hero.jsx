"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function Hero() {
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

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
    return <div className="w-full h-[80vh] bg-gray-200 animate-pulse" />;
  }

  return (
    <div className="w-full bg-white figtree">
      <div className="relative w-full h-[220px] sm:h-[300px] md:h-[500px] lg:h-[80vh] overflow-hidden">

        {/* ✅ Thumbnail FIRST */}
        {!videoLoaded && (
          <Image
            src="/hero.webp"
            fill
            priority
            alt="thumbnail"
            className="object-cover"
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
            onLoadedData={() => setVideoLoaded(true)} // 🔥 KEY
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-white font-bold text-2xl md:text-5xl">
            {hero?.title}
          </h1>

          <a
            href="tel:+919810103197"
            className="mt-5 z-20 bg-white text-black font-bold px-4 py-2 rounded-lg hover:bg-black hover:text-white"
          >
            Inquiry Now
          </a>
        </div>
      </div>
    </div>
  );
}