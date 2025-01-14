"use client";
import React, { useEffect, useState } from "react";
import styles from "./cart.module.css";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/app/store";
import { ProductData } from "../../../typing";
import {
  addToCart,
  delFromCart,
  desQuantity,
} from "@/redux/features/cartSlice";
import { toast } from "react-toastify";

const Page = () => {
  const { cart } = useSelector((state: RootState) => state.allCart);

  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = () => {
    const total = cart.reduce((total, item) => {
      return (total =
        total +
        parseInt(
          item.discounted_price.slice(1, item.discounted_price.length - 1)
        ) *
          item.qty);
    }, 0);
    setTotalPrice(total);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [cart]);

  return (
    <div className="cart max-w-[1440px] mx-auto my-4 sm:my-8 px-4">
      <div className="navigation flex items-center justify-center w-max gap-2 mb-4 sm:mb-6">
        <Link href={"/"}>
          <h3 className="text-base sm:text-lg text-slate-300">Home</h3>
        </Link>
        <img
          src="/cart/navigation_arrow.svg"
          alt="Cart"
          className="invert w-4 h-4"
        />
        <h3 className="text-base sm:text-lg">Cart</h3>
      </div>
      <h2
        className={`${styles.main_heading} text-2xl sm:text-3xl md:text-[40px]`}
      >
        Your cart
      </h2>
      <div className="content flex flex-col lg:flex-row w-full gap-5 my-4 sm:my-8">
        <div className="cart_item_container w-full lg:max-w-[715px] border rounded-[20px] px-4 sm:px-[24px] py-[20px] h-max">
          {cart.length > 0 ? (
            cart.map((item, idx) => {
              return <CartItems key={idx} item={item} />;
            })
          ) : (
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              No items in cart Found
            </h2>
          )}
        </div>
        <div className="order_summary px-4 sm:px-6 py-5 border rounded-[20px] w-full lg:w-[505px] flex flex-col gap-4 sm:gap-6 h-max">
          <div className="subtotal font-bold text-xl sm:text-[24px]">
            Order Summary
          </div>
          <div className="sub_total w-full flex items-center justify-between">
            <div className="text-[#000000]/60 text-lg sm:text-2xl invert">
              Sub Total
            </div>
            <div className="font-bold text-lg sm:text-2xl">{totalPrice}</div>
          </div>
          <div className="Delivery_Fee w-full flex items-center justify-between">
            <div className="text-[#000000]/60 text-lg sm:text-2xl invert">
              Delivery Fee
            </div>
            <div className="font-medium text-slate-300 text-base sm:text-lg">
              {"Free For Now"}
            </div>
          </div>
          <hr className="text-[#000000/60]" />
          <div className="total w-full flex items-center justify-between">
            <div className="text-[#000000]/60 text-lg sm:text-2xl invert">
              Total
            </div>
            <div className="font-bold text-lg sm:text-2xl">{totalPrice}</div>
          </div>
          <div className="checkout_btn">
            <Link href={"/CheckOut"}>
              <button className="button flex items-center justify-center gap-3 w-full px-4 sm:px-[24px] py-2 sm:py-[12px] text-lg sm:text-xl rounded-[62px] text-white bg-gradient-to-r from-[#533568] to-[#211833]">
                Go to Checkout
                <img
                  src="/Cart/arrow.svg"
                  alt="arrow"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const CartItems = ({ item }: { item: ProductData }) => {
  const dispatch = useDispatch();
  const HandlerInc = (e: ProductData) => {
    dispatch(addToCart(e));
  };

  const delHandler = (e: string) => {
    dispatch(delFromCart(e));
  };

  const descHandler = (e: ProductData) => {
    dispatch(desQuantity(e));
  };

  return (
    <>
      <div className="w-full my-4 sm:my-8">
        <div className="wrapper w-full flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
          <div className="image w-full sm:w-[124px] h-[124px]">
            <img
              src={item.image}
              className="w-full h-full object-cover object-center"
              alt="cartImage"
            />
          </div>
          <div className="content flex flex-col sm:flex-row items-center justify-between w-full">
            <div className="detailSed mb-2 sm:mb-0">
              <div className="p_name font-bold text-lg sm:text-[20px]">
                {item.title}
              </div>
              <div className="p_price font-bold text-xl sm:text-[24px]">
                Rs : {Number(item.discounted_price.slice(1, -1)) * item.qty}
              </div>
            </div>
            <div className="actionSec w-full sm:w-max flex flex-row sm:flex-col justify-between items-center sm:items-end mt-2 sm:mt-0">
              <div className="image mb-2 sm:mb-4">
                <img
                  src="/Cart/bin.svg"
                  alt=""
                  className="hover:cursor-pointer w-6 h-6"
                  onClick={() => {
                    toast.error("Item deleted from the cart!");
                    delHandler(item.id);
                  }}
                />
              </div>
              <div className="q_btns h-[44px] w-[126px] bg-[#F0F0F0] hover:bg-slate-400 rounded-[62px] py-[12px] px-[20px] flex items-center justify-between">
                <img
                  src="/Cart/desc.svg"
                  alt="descrement"
                  className="w-5 h-5"
                  onClick={() => {
                    {
                      item.qty <= 1 ? delHandler(item.id) : descHandler(item);
                    }
                  }}
                />
                <span className="text-black text-2xl font-bold">
                  {item.qty}
                </span>
                <img
                  src="/Cart/asc.svg"
                  alt="increment"
                  className="w-5 h-5"
                  onClick={() => {
                    HandlerInc(item);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="text-slate-300" />
    </>
  );
};

export default Page;
