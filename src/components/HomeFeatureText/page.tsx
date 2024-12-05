import React from "react";
import Styles from "./HomeFeatureText.module.css";

const HomeFeatureText = (props: { numbers: string; text: string }) => {
  return (
    <div
      className={`rounded-[12px] ${Styles.homeFeature}`}
      style={{
        border: `1px solid var(--stoke-gray)`,
        padding: "16px 24px",
        width: "240px",
        backgroundColor: "var(--gray-box)",
      }}
    >
      <p className={`text-[40px] font-bold ${Styles.numbers}`}>
        {props.numbers}
      </p>
      <p style={{ color: "var(--light-gray)" }}>{props.text}</p>
    </div>
  );
};

export default HomeFeatureText;
