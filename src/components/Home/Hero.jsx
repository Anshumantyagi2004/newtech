"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function Hero() {
  const [hero, setHero] = useState(null);
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
    }
  };

  return (
    <div className="w-full bg-white figtree">
      <div className="relative w-full h-[220px] sm:h-[300px] md:h-[500px] lg:h-[80vh] overflow-hidden">

        {/* Thumbnail */}
        {!videoLoaded && (
          <Image
            src="/hero.webp"
            fill
            priority
            alt="thumbnail"
            className="object-cover"
          />
        )}

        {/* Video */}
        {hero?.video && (
          <video
            className={`absolute inset-0 w-full h-full object-cover brightness-75 transition-opacity duration-700 ${
              videoLoaded ? "opacity-100" : "opacity-0"
            }`}
            src={hero.video}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onLoadedData={() => setVideoLoaded(true)}
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center z-10">
          
          {/* ✅ Dynamic Heading */}
          <h1 className="text-white font-bold text-2xl md:text-5xl leading-tight drop-shadow-lg">
            {hero?.title || (
              <>
               India’s Trusted OEM Manufacturer for Professional LED Display Solutions

              </>
            )}
          </h1>

          {/* Button */}
          <a
            href="tel:+919810103197"
            className="mt-5 bg-white text-black font-bold px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-black hover:text-white transition duration-300"
          >
            Inquiry Now
          </a>
        </div>
      </div>
    </div>
  );
}