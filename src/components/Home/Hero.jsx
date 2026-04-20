"use client";

export default function Hero() {
  return (
    <div className="w-full bg-white">
      {/* Video Wrapper */}
      <div className="relative w-full h-[220px] sm:h-[300px] md:h-[500px] lg:h-[80vh] overflow-hidden">

        {/* Video */}
        <video
          className="w-full h-full object-cover brightness-75"
          src="https://res.cloudinary.com/dqllcskwa/video/upload/v1775822118/WhatsApp_Video_2026-04-10_at_5.18.15_PM_jdj17w.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/video-poster.jpg"
        />

        {/* Overlay (gradient for better readability) */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text */}
        <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
          <h1 className="text-white font-bold text-lg sm:text-2xl md:text-4xl lg:text-6xl leading-tight drop-shadow-lg">
            Lights Up Your Brand with High-Impact LED Video Walls!
          </h1>
        </div>

      </div>
    </div>
  );
}