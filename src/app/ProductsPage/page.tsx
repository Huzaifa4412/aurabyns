import React from "react";
import FeaturesCard from "../../components/FeaturesSection/FeaturesCard";
import { client } from "@/sanity/lib/client";
import { ProductData } from "../../../typing";

const ProductsPage = async () => {
    const data = await client.fetch(`*[_type == "product"]{
  _id,
  "title": name,
  description,
  "original_price": "Rs" + string(price),
  "discounted_price": "Rs" + string(discountedPrice),
  "image": mainImage.asset->url,
  qty,
  tags,
}`);

    return (
        <>
            <h2 className="text-[40px] text-center font-semibold px-8  mt-12">
                Our All Products
            </h2>
            <div className="products flex flex-wrap gap-5 p-5 items-center justify-center">
                {data.map((item: ProductData, index: number) => {
                    return (
                        <FeaturesCard item={item} index={index} key={index} />
                    );
                })}
            </div>
        </>
    );
};

export default ProductsPage;
