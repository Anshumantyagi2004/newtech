"use client";

export default function Hero() {
  return (
    <div className="w-full bg-white">
      {/* Video Wrapper */}
      <div className="relative w-full h-[220px] sm:h-[300px] md:h-[500px] lg:h-[80vh] overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src="https://res.cloudinary.com/dqllcskwa/video/upload/v1775822118/WhatsApp_Video_2026-04-10_at_5.18.15_PM_jdj17w.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/video-poster.jpg"
        />
      </div>
    </div>
  );
}