import React from "react";
import Styles from "./HomeSection.module.css";
import Button from "../Button/page";
import HomeFeatureText from "../HomeFeatureText/page";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className={`${Styles.heroSection} container `}>
      <div className={`${Styles.leftPart}`}>
        <div className="content">
          <h1 className="font-semibold text-[55px] leading-[60px] mb-5">
            Elevate Your Spirit with{" "}
            <span
              style={{ color: "var(--golden-dark)", marginRight: "10px" }}
              className="font-extrabold capitalize"
            >
              Aurabyns
            </span>
            Fragrances!
          </h1>
          <p style={{ color: "var(--light-gray)" }}>
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </p>
        </div>
        <div className="buttons-wrapper flex gap-[20px]">
          <Button text="Learn More" color="var(--gray-8)" />
          <Button text="Browse Properties" color="var(--purple-dark)" />
        </div>
        <div className={` ${Styles.featuresWrapper} flex gap-[20px] `}>
          <HomeFeatureText text="Happy Customers" numbers="200+" />
          <HomeFeatureText text="Properties for Clients" numbers="100+" />
          <HomeFeatureText text="Years of Experience" numbers="10+" />
        </div>
      </div>
      <div className={`${Styles.rightPart} relative`}>
        <Image
          className="design absolute top-[10%] left-[-10%] w-[8vw] aspect-square object-cover"
          src={"/home-page-design.png"}
          alt="hero-image/Discover Design. "
          width={180}
          height={180}
        />
        <Image
          className={`${Styles.heroImage} hero-img object-cover h-full w-full `}
          src="/hero-image.jpeg"
          alt="hero-image/building"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default HeroSection;
