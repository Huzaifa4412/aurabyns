"use client";
import React, { useRef, useState } from "react";
import Styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

import { RiCloseLargeFill } from "react-icons/ri";
import Button from "../Button/page";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Navbar = () => {
  const navRef = useRef(null);
  // Creating Toggle Functionality for navigation
  const [toggle, setToggle] = useState(false);
  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -80,
      duration: 0.5,
      delay: 0.5,
      opacity: 0,
      scale: 0.8,
      ease: "circ.inOut",
    });
  });
  return (
    <nav
      className="bg-[#1A1A1A] flex flex-col max-w-[1920px] m-auto"
      ref={navRef}
    >
      <div
        className={`${Styles.newsletter} border-b-2 border-[#555] container `}
      >
        <h2 className="text-center">
          ✨<span style={{ color: "var(--golden-dark)" }}>AuraByNs</span> –
          Where Fragrance Meets Your Soul.
        </h2>
      </div>
      <div className={`${Styles.navbar} ${toggle && Styles.active}  container`}>
        <div className={`${Styles.logo} flex items-center justify-center`}>
          <Link href={"/"}>
            <Image
              src="/mainLogo.svg"
              className="w-[50%]"
              alt="main-logo"
              width={30}
              height={30}
            />
          </Link>
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
              className={`${Styles.menuIcon}`}
            />
          </div>
        )}
        <div className={`${Styles.nav_items} `}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/ProductsPage">Our Products</Link>
            </li>
            <li>
              <a href="#">About Us</a>
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
