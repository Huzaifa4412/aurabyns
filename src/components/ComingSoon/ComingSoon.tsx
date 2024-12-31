"use client";
import React from "react";
import CountDown from "./Timer";

const ComingSoon = () => {
  return (
    <div className="container h-max !px-2 md:!px-8 lg:!pl-15 xl:!pl-40 my-8">
      <img src="/Abstract_Design.png" alt="abstract design" />
      <h2 className="text-5xl md:text-5xl font-semibold">
        Special Discount for{" "}
        <span className="text-yellow-500 font-bold text-4xl md:text-6xl">
          New Year!
        </span>
        <div className="content flex flex-col items-center justify-center mt-5">
          <img
            src="/saleBanner/img1.jpeg"
            alt=""
            className="w-full h-full object-cover object-center rounded-3xl min-w-72 min-h-96"
          />

          <CountDown launchDate="2025-02-01T12:00:00" />
        </div>
      </h2>
    </div>
  );
};

export default ComingSoon;
