import React from "react";
import Styles from "./featuresCard.module.css";
import Image from "next/image";

import Button from "../Button/page";
const FeaturesCard = ({
  item,
  index,
}: {
  item: {
    image: string;
    title: string;
    description: string;
    tags: string[];
    price: string;
  };
  index: number;
}) => {
  return (
    <div
      className={`${Styles.featuresCard}`}
      id={item.title.replace(" ", "_").trim() + index}
      key={index}
    >
      <Image
        src={item.image}
        alt={item.title}
        className="rounded-[10px]"
        width={432}
        height={318}
      />
      <h2 className="heading text-[24px] font-semibold">{item.title}</h2>
      <div className="description text-[var(--light-gray)] -mt-5">
        {item.description}
      </div>
      <div className="tags-container flex gap-[10px] items-center">
        {item.tags.map((tag, index) => (
          <div key={index} className="tag text-[var(--light-gray)] text-[14px]">
            <div className={`${Styles.tags}`}>{tag}</div>
          </div>
        ))}
      </div>
      <div className="priceContainer flex gap-[50px] items-center justify-center">
        <div className="leftPart w-[30%]">
          <div className="price text-[var(--light-gray)] text-[18px]">
            Price
          </div>
          <div className="priceAmount font-semibold text-[24px]">
            {item.price}
          </div>
        </div>
        <div className={` ${Styles.button} rightPart w-full`}>
          <Button text="View Properties Details" color="var(--golden-dark)" />
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
