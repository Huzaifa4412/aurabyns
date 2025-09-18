import React from "react";
import FeaturesCard from "@/components/FeaturesSection/FeaturesCard";
import { client } from "@/sanity/lib/client";
import { ProductData } from "../../../typing";

async function Page() {
    const data = await client.fetch(
        `*[_type == "product" && category->name == "Female"] {
      _id,
      "title": name,
      description,
      "original_price": "Rs" + string(price),
      "discounted_price": "Rs" + string(discountedPrice),
      "image": mainImage.asset->url,
      qty,
      tags,
    }`
    );

    return (
        <div className="products flex flex-wrap gap-5 p-5 items-center justify-center">
            {data.map((item: ProductData, index: number) => (
                <FeaturesCard item={item} index={index} key={index} />
            ))}
        </div>
    );
}

export default Page;
