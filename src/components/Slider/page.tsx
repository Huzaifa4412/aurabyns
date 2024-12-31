"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative w-full h-[450px] sm:h-[500px] lg:h-[600px] xl:h-[800px]">
            <img
              src="/banner1.jpeg"
              alt="Banner 1"
              className="absolute inset-0 cursor-grab w-full h-full object-cover object-center"
              width={1920}
              height={1080}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[450px] sm:h-[500px] lg:h-[600px] xl:h-[800px]">
            <img
              src="/banner2.jpeg"
              alt="Banner 2"
              width={1920}
              height={1080}
              className="absolute inset-0 cursor-grab w-full h-full object-cover object-center"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[450px] sm:h-[500px] lg:h-[600px] xl:h-[800px]">
            <img
              src="/banner3.jpeg"
              alt="Banner3"
              width={1920}
              height={1080}
              className="absolute inset-0 cursor-grab w-full h-full object-cover object-center"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
