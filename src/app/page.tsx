import FeaturesCategory from "@/components/FeaturesCategory/page";
import FeatureSection from "@/components/FeaturesSection/page";
import HeroSection from "@/components/HeroSection/page";
import React from "react";
import Slider from "../components/Slider/page";
import Timer from "@/components/ComingSoon/Timer";
// import ComingSoon from "@/components/ComingSoon/ComingSoon";

const Page = () => {
  return (
    <>
      <Slider />
      {/* <ComingSoon /> */}
      <div className="flex items-center justify-center">
        <Timer launchDate="2025-02-01T02:00:00" />
      </div>

      <HeroSection />
      <FeaturesCategory />
      <FeatureSection />
    </>
  );
};

export default Page;
