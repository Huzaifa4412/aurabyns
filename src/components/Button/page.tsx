import React from "react";
import Styles from "./Button.module.css";

const Button = (props: { text: string; color: string }) => {
  return (
    <button
      className={`px-[24px] text-sm xl:text-xl py-[16px] rounded-[8px] font-semibold w-full ${Styles.button}`}
      style={{
        backgroundColor: `${props.color}`,
        border: `1px solid var(--stoke-gray)`,
        width: "100%",
      }}
    >
      {props.text}
    </button>
  );
};

export default Button;
