"use client";
import React from "react";
import data from "@/All_Data.json";
import FeaturesCard from "../../components/FeaturesSection/FeaturesCard";

const ProductsPage = () => {
  return (
    <>
      <h2 className="text-[40px] text-center font-semibold px-8  mt-12">
        Our All Products
      </h2>
      <div className="products flex flex-wrap gap-5 p-5 items-center justify-center">
        {data.map((item, index) => {
          return <FeaturesCard item={item} index={index} key={index} />;
        })}
      </div>
    </>
  );
};

export default ProductsPage;
