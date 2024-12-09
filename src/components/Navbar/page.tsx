"use client";
import React, { useRef, useState } from "react";
import Styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

import { RiCloseLargeFill } from "react-icons/ri";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Navbar = () => {
  const navRef = useRef(null);

  // Creating Toggle Functionality for navigation
  const [isOpen, setIsOpen] = useState(false);
  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -80,
      duration: 0.5,
      delay: 0.5,
      opacity: 0,
      scale: 0.8,
      ease: "circ.inOut",
    });
    gsap.from(".nav-items", {
      opacity: 0,
      scale: 0.5,
      x: 3000,
      duration: 1,
      ease: "bounce",
    });
  });

  return (
    <nav
      ref={navRef}
      className="bg-[#1A1A1A] relative top-0 left-0 right-0 z-[99999] flex flex-col max-w-[1920px] m-auto"
    >
      <div
        className={`${Styles.newsletter} border-b-2 border-[#555] container `}
      >
        <h2 className="text-center">
          ✨<span style={{ color: "var(--golden-dark)" }}>AuraByNs</span> –
          Where Fragrance Meets Your Soul.
        </h2>
      </div>
      <nav
        className="text-white "
        style={{ backgroundColor: "var(--gray-dark)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center h-16">
          <div className="flex items-center w-[120px] lg:w-[150px]">
            <Link href="/" className="text-xl font-bold">
              <Image
                src={"/mainLogo.svg"}
                alt="Main Logo"
                width={150}
                height={150}
              />
            </Link>
          </div>
          <div className="hidden nav-items duration-1000 items-center md:flex space-x-4 text-xl">
            <Link
              href="/"
              className="hover:text-gray-400 hover:font-extrabold hover:underline"
            >
              Home
            </Link>
            <Link
              href="/ProductsPage"
              className="hover:text-gray-400 hover:font-extrabold hover:underline"
            >
              All Products
            </Link>
            <Link
              href="/Men"
              className="hover:text-gray-400 hover:font-extrabold hover:underline"
            >
              Men
            </Link>
            <Link
              href="/Female"
              className="hover:text-gray-400 hover:font-extrabold hover:underline"
            >
              Female
            </Link>
            <Link
              href="/Kids"
              className="hover:text-gray-400 hover:font-extrabold hover:underline"
            >
              Kids
            </Link>
            <Link
              href="/ContactUs"
              className="hover:text-gray-400 hover:font-extrabold hover:underline"
            >
              Contact Us
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? (
                <RiCloseLargeFill size={30} />
              ) : (
                <Image
                  src={"menuIcon.svg"}
                  width={50}
                  height={50}
                  alt="Menu_Icon"
                />
              )}
            </button>
          </div>
        </div>
        {isOpen && (
          <div
            className="md:hidden space-y-2 transition-all duration-1000 p-4 text-xl text-center"
            style={{ backgroundColor: "var(--gray-dark)" }}
          >
            <Link
              href="/"
              className="block hover:text-gray-400 hover:font-extrabold hover:underline"
            >
              Home
            </Link>
            <Link
              href="/ProductsPage"
              className="block hover:text-gray-400 hover:font-extrabold hover:underline"
            >
              Our Products
            </Link>
            <Link
              href="/Men"
              className="hover:text-gray-400 hover:font-extrabold hover:underline"
            >
              Men
            </Link>
            <Link
              href="/Female"
              className="hover:text-gray-400 hover:font-extrabold hover:underline"
            >
              Female
            </Link>
            <Link
              href="/Kids"
              className="hover:text-gray-400 hover:font-extrabold hover:underline"
            >
              Kids
            </Link>
            <Link
              href="/ContactUs
              "
              className="block hover:text-gray-400 hover:font-extrabold hover:underline"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </nav>
  );
};

export default Navbar;
