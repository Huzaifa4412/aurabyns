"use client";

import React, { useState } from "react";
import Styles from "./Navbar.module.css";
import Image from "next/image";

import { RiCloseLargeFill } from "react-icons/ri";
import Button from "../Button/page";

const Navbar = () => {
  // Creating Toggle Functionality for navigation
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="bg-[#1A1A1A] flex flex-col max-w-[1920px] m-auto">
      <div
        className={`${Styles.newsletter} border-b-2 border-[#555] container `}
      >
        <h2 className="text-center">
          ✨Discover Your Dream Property with Al Wahhab properties.
        </h2>
      </div>
      <div className={`${Styles.navbar} ${toggle && Styles.active}  container`}>
        <div className={`${Styles.logo}`}>
          <Image
            src="/sample-logo.svg"
            alt="main-logo"
            width={50}
            height={50}
          />
        </div>
        {toggle ? (
          <RiCloseLargeFill
            onClick={() => setToggle(!toggle)}
            className={` absolute top-[5%] right-[5%] text-5xl  ${Styles.close} `}
          />
        ) : (
          <div className={`${Styles.menuContainer} ${toggle && "hidden"}`}>
            <Image
              src={"menuIcon.svg"}
              alt="MenuIcon"
              width={60}
              height={60}
              onClick={() => setToggle(!toggle)}
              className={` ${Styles.menuIcon}`}
            />
          </div>
        )}
        <div className={`${Styles.nav_items} `}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Properties</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
          </ul>
        </div>
        <div className={` ${Styles.contact_us_btn}`}>
          <a href="#">
            <Button text="Contact Us" color="#111" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
