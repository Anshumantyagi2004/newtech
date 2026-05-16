"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const clients = [
    "/Client/1.png",
    "/Client/2.png",
    "/Client/3.png",
    "/Client/4.png",
    "/Client/5.png",
    "/Client/6.png",
    "/Client/7.png",
    "/Client/8.png",
    "/Client/9.png",
    "/Client/10.png",
    "/Client/11.png",
    "/Client/12.png",
    "/Client/13.png",
    "/Client/14.png",
    "/Client/15.png",
    "/Client/16.png",
    "/Client/17.png",
    "/Client/18.png",
];

export default function ClientSlider() {
    return (
        <section className="w-full bg-gray-100 pt-10 overflow-hidden">
            <div className="text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-black">
                    Trusted by Leading Brands
                </h2>
            </div>

            <div className="px-4 md:px-10">
                <Swiper
                    modules={[Autoplay]}
                    //   spaceBetween={24}
                    loop={true}
                    speed={6000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    breakpoints={{
                        0: {
                            spaceBetween: 10,
                            slidesPerView: 2,
                        },
                        768: {
                            spaceBetween: 15,
                            slidesPerView: 3,
                        },
                        1024: {
                            spaceBetween: 24,
                            slidesPerView: 5,
                        },
                    }}
                    className="client-swiper py-10!"
                >
                    {clients.map((img, index) => (
                        <SwiperSlide key={index}>
                            <div className="group bg-white h-30 md:h-40 rounded-2xl border border-gray-200 flex items-center justify-center p-4 md:p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
                                <img
                                    src={img}
                                    alt={`client-${index}`}
                                    className="w-full h-full object-contain transition duration-500"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}