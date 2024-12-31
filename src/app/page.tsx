import FeaturesCategory from "@/components/FeaturesCategory/page";
import FeatureSection from "@/components/FeaturesSection/page";
import HeroSection from "@/components/HeroSection/page";
import React from "react";
import Slider from "../components/Slider/page";
import ComingSoon from "@/components/ComingSoon/ComingSoon";

const page = () => {
  return (
    <>
      <Slider />
      <ComingSoon />
      <HeroSection />
      <FeaturesCategory />
      <FeatureSection />
    </>
  );
};

export default page;
