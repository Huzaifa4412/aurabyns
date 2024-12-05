import React from "react";
import FeaturesCategories from "./FeaturesCategory";
import Styles from "./FeaturesCategory.module.css";

const FeaturesCategory = () => {
  return (
    <div
      className={`h-[252px] ${Styles.features_categories} p-[20px] flex gap-[20px]  items-center justify-center`}
      style={{
        border: " 10px solid var(--gray-box)",
        borderLeft: "none",
        borderRight: "none",
      }}
    >
      <FeaturesCategories
        text="Find your dream property"
        path={"/Features_Category/dream_home.svg"}
      />
      <FeaturesCategories
        text="Unlock Property Value"
        path="/Features_Category/property_value.svg"
      />
      <FeaturesCategories
        text="Effortless Property Management"
        path="/Features_Category/property_management.svg"
      />
      <FeaturesCategories
        text="Smart Investments, Informed Decisions"
        path="/Features_Category/Investment.svg"
      />
    </div>
  );
};

export default FeaturesCategory;
