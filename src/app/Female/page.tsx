import React from "react";
import data from "@/All_Data.json";
import FeaturesCard from "@/components/FeaturesSection/FeaturesCard";
function page() {
  return (
    <div className="products flex flex-wrap gap-5 p-5 items-center justify-center">
      {data.map((item, index) => {
        return (
          item.category === "female" && (
            <FeaturesCard item={item} key={index} index={index} />
          )
        );
      })}
    </div>
  );
}

export default page;
