import React from "react";
import Styles from "./HomeSection.module.css";
import Button from "../Button/page";
import HomeFeatureText from "../HomeFeatureText/page";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className={`${Styles.heroSection} container `}>
      <div className={`${Styles.leftPart}`}>
        <div className="content">
          <h1
            className={`font-semibold ${Styles.heading} text-[55px] leading-[60px] mb-5`}
          >
            Elevate Your Spirit with{" "}
            <span
              style={{ color: "var(--golden-dark)", marginRight: "10px" }}
              className="font-extrabold capitalize"
            >
              AuraByNs
            </span>
            Fragrances!
          </h1>
          <p
            className={`${Styles.para}`}
            style={{ color: "var(--light-gray)" }}
          >
            Your journey to finding the perfect Perfume end here. Explore our
            listings to find the best perfume that matches your unique style.
          </p>
        </div>
        <div className="buttons-wrapper flex gap-[20px]">
          <Link href={"/"} className="w-[50%]">
            <Button text="Learn More" color="var(--gray-8)" />
          </Link>
          <Link href="/ProductsPage" className="w-[50%]">
            <Button text="Shop Now" color="var(--golden-dark)" />
          </Link>
        </div>
        <div className={` ${Styles.featuresWrapper} flex gap-[20px] `}>
          <HomeFeatureText text="Happy Customers" numbers="200+" />
          <HomeFeatureText text="fragrance for Clients" numbers="100+" />
          {typeof window !== "undefined" && window.innerWidth > 500 ? (
            <HomeFeatureText text="Experience" numbers="10+" />
          ) : null}
        </div>
      </div>
      <div className={`${Styles.rightPart}`}>
        <Image
          className={`${Styles.heroImage} hero-img object-cover h-full w-full `}
          src="/hero-image-3.jpeg"
          alt="hero-image/perfume"
          width={1000}
          height={1000}
          // layout="responsive"
        />
      </div>
    </div>
  );
};

export default HeroSection;
