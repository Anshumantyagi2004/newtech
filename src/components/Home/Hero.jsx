"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Hero() {
    const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getHero();
  }, []);

  const getHero = async () => {
    try {
      const { data } = await axios.get("/api/Hero");
      console.log(data)

      // Since only one hero exists
      setHero(data[0]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  console.log(hero)

   if (loading) {
    return (
      <div className="w-full h-[80vh] bg-gray-200 animate-pulse" />
    );
  }

  return (
    <div className="w-full bg-white figtree">
      {/* Video Wrapper */}
      <div className="relative w-full h-[220px] sm:h-[300px] md:h-[500px] lg:h-[80vh] overflow-hidden">

        {/* Video */}
        {/* <video
          className="w-full h-full object-cover brightness-75"
          src="https://pub-23a540a27a794d989108700989f15097.r2.dev/WhatsApp%20Video%202026-05-05%20at%202.35.12%20PM.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/video-poster.jpg"
        /> */}

         {hero?.video && (
          <video
            className="w-full h-full object-cover brightness-75"
            src={hero.video}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        )}

        {/* Overlay (gradient for better readability) */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-white font-bold text-2xl md:text-5xl leading-tight drop-shadow-lg">
             {hero?.title}
          </h1>

          <a href="tel:+919810103197" target="blank" className="relativ mt-5 z-20 cursor-pointer bg-white border border-white text-black font-bold md:py-3 md:px-6 px-2 py-2 rounded-lg hover:bg-black hover:text-white transition duration-300">
            Inquiry Now
          </a>
        </div>

      </div>
    </div>
  );
}