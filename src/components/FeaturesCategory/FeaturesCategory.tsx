import React from "react";
import Styles from "./FeaturesCategory.module.css";

const FeaturesCategories = (props: { text: string; path: string }) => {
  return (
    <div
      className={`${Styles.featuresCard} flex flex-col items-center gap-[20px] justify-center w-[455px] h-[212px] relative px-[40px] py-[20px] rounded-[12px] border border-[var(--stoke-gray)]`}
      style={{ backgroundColor: "var(--gray-box)" }}
    >
      <img
        src={"/Features_Category/arrow.svg"}
        alt={"Arrow Icon"}
        width={21}
        height={21}
        className={` ${Styles.arrow} w-[21px] absolute right-[20px] top-[20px]`}
      />
      <img
        src={props.path}
        width={80}
        height={80}
        className={"w-[80px]"}
        alt={props.text}
      />
      <h3 className="text-[20px] font-semibold text-center">{props.text}</h3>
    </div>
  );
};

export default FeaturesCategories;
