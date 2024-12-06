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
        text="A touch of luxury in every breath"
        path={"/Features_Category/dream_home.svg"}
      />
      <FeaturesCategories
        text="Unlock Premium Level"
        path="/Features_Category/property_value.svg"
      />
      <FeaturesCategories
        text="Be bold. Be timeless. Be you."
        path="/Features_Category/property_management.svg"
      />
      <FeaturesCategories
        text="Awaken the senses, inspire the soul"
        path="/Features_Category/Investment.svg"
      />
    </div>
  );
};

export default FeaturesCategory;
