import FeaturesCategory from "@/components/FeaturesCategory/page";
import FeatureSection from "@/components/FeaturesSection/page";
import HeroSection from "@/components/HeroSection/page";
import React from "react";
import Slider from "../components/Slider/page";

const page = () => {
  return (
    <>
      <Slider />
      <HeroSection />
      <FeaturesCategory />
      <FeatureSection />
    </>
  );
};

export default page;
