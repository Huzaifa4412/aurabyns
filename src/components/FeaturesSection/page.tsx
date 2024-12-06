"use client";
import React from "react";
import Styles from "./featureSection.module.css";
import Image from "next/image";
import Button from "../Button/page";
import FeaturesCard from "./FeaturesCard";
import data from "@/featuresCard.json";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import Link from "next/link";

const FeatureSection = () => {
  return (
    <div className={`${Styles.featureSection} flex flex-col gap-[80px]`}>
      <div className={`${Styles.heading_part} flex justify-between`}>
        <div className="content w-full gap-2 mb-5 md:w-[60%]">
          <Image
            src={"/Features_Section/Abstract Design.png"}
            alt={""}
            width={80}
            height={50}
          />
          <h2 className="text-[48px] font-semibold">Featured Fragrances.</h2>
          <p style={{ color: "var(--light-gray)", fontSize: "18px" }}>
            Discover the perfect scent for you—click here to explore the full
            details of our exclusive collection.
          </p>
        </div>
        <div className="button self-end w-full md:w-[300px]">
          <Link href={"/ProductsPage"}>
            <Button text="View All Scents" color="var(--gray-box)" />
          </Link>
        </div>
      </div>
      <div className={`${Styles.featuresCardContainer} grid`}>
        {/* Swiper Js Power ------------------------------------------------------------------------ */}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={
            typeof window !== "undefined" && window.innerWidth > 1050
              ? 3
              : typeof window !== "undefined" && window.innerWidth < 770
              ? 1
              : 2
          }
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier:
              typeof window !== "undefined" && window.innerWidth > 1050
                ? 1
                : 0.6,
            slideShadows: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {data.map((item, idx) => {
            return (
              <SwiperSlide
                key={idx}
                className="flex items-center justify-center"
              >
                <FeaturesCard item={item} index={idx} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default FeatureSection;
