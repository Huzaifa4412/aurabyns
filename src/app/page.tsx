import FeaturesCategory from "@/components/FeaturesCategory/page";
import FeatureSection from "@/components/FeaturesSection/page";
import HeroSection from "@/components/HeroSection/page";
import Navbar from "@/components/Navbar/page";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesCategory />
      <FeatureSection />
    </>
  );
};

export default page;
