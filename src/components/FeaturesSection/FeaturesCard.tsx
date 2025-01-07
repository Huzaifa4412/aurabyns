"use client";
import React from "react";
import Styles from "./featuresCard.module.css";

import Button from "../Button/page";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cartSlice";
import { toast } from "react-toastify";
// import Link from "next/link";

const FeaturesCard = ({
  item,
  index,
}: {
  item: {
    image: string;
    title: string;
    description: string;
    tags: string[];
    discounted_price: string;
    original_price: string;
    qty: number;
  };
  index: number;
}) => {
  const dispatch = useDispatch();
  const id = item.title.replace(/ /g, "_").trim() + index;
  const CartHandler = (
    value: {
      image: string;
      title: string;
      description: string;
      tags: string[];
      discounted_price: string;
      original_price: string;
      qty: number;
    },
    id: string
  ) => {
    const temp = { ...value, id };
    dispatch(addToCart(temp));
  };

  return (
    <div
      className={`${Styles.featuresCard}`}
      id={id}
      // id={id}
      key={index}
    >
      <img
        src={item.image}
        alt={item.title}
        className="rounded-[10px] w-[432px] h-[318px] object-cover"
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
      <div
        className={`${Styles.priceContainer} flex gap-[50px] items-center justify-center`}
      >
        <div className="leftPart w-[30%]">
          <div
            className={`price ${Styles.originalPrice} text-[var(--light-gray)] text-[18px]`}
          >
            Original Price
          </div>
          <div className="priceAmount font-semibold line-through text-slate-400 text-[18px]">
            {item.original_price}
          </div>
        </div>
        <div className="leftPart w-[30%]">
          <div className="price text-[var(--light-gray)] text-[18px]">
            Price
          </div>
          <div className="priceAmount font-semibold text-[24px]">
            {item.discounted_price}
          </div>
        </div>
        <div className={` ${Styles.button} rightPart w-full`}>
          {/* <Link
            href={{
              pathname: "/OrderNow",
              query: { title: item.title.trim(), id: index },
            }}
          >
          <Button text="Order Now" color="var(--golden-dark)" />
          </Link> */}

          <div
            onClick={() => {
              toast.success("Item Added to Cart ");
              CartHandler(item, id);
            }}
          >
            <Button text="Add to Cart" color="var(--golden-dark)" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
