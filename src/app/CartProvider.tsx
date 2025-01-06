"use client";
import { Provider } from "react-redux";
import React from "react";
import { store } from "@/redux/app/store";

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Provider store={store}>{children}</Provider>
    </div>
  );
};

export default CartProvider;
