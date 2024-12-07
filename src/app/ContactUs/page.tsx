// import React from "react";
// import Styles from "./contactUs.module.css";
// import Image from "next/image";

// const page = () => {
//   return (
//     <div className={`${Styles.contactUs} container`}>
//       <Image
//         src={"/Abstract_Design.png"}
//         alt={""}
//         width={80}
//         height={50}
//         className={"w-[80px]"}
//       />
//       <div className={`${Styles.content} flex flex-col`}>
//         <h2 className="text-[48px] font-semibold">
//           Let &apos;s Make it Happen
//         </h2>
//         <p className="w-[70%]" style={{ color: "var(--light-gray)" }}>
//           Ready to take the first step toward your dream property? Fill out the
//           form below, and our real estate wizards will work their magic to find
//           your perfect match. Don't wait; let's embark on this exciting journey
//           together.
//         </p>
//       </div>
//       <div className="form">
//         <input type="text" placeholder="Your Name" />
//         <input type="email" placeholder="Your Email" />
//         <input type="text" placeholder="Phone Number" />
//         <textarea placeholder="Your Message" />
//         <button className="submit-btn">Submit</button>
//       </div>
//     </div>
//   );
// };

// export default page;

"use client";

import Image from "next/image";
import React, { useState } from "react";
import Styles from "./contactUs.module.css";

export default function SimpleContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    quantity: "",
    budget: "",
    contactMethod: "",
    message: "",
    terms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Here you would typically send the data to your server
  };

  return (
    <div
      style={{ backgroundColor: "var(--gray-dark)" }}
      className="min-h-scree p-4  sm:p-6 flex flex-col gap-12 items-center justify-center"
    >
      <div className={`${Styles.content} flex flex-col my-12`}>
        <Image
          src={"/Abstract_Design.png"}
          alt={""}
          width={80}
          height={50}
          className={"w-[80px] self-start"}
        />
        <h2 className="text-[48px] font-semibold">
          Let &apos;s Make it Happen
        </h2>
        <p className="w-[70%]" style={{ color: "var(--light-gray)" }}>
          Ready to take the first step toward your dream property? Fill out the
          form below, and our real estate wizards will work their magic to find
          your perfect match. Don&apos;t wait; let&apos;s embark on this
          exciting journey together.
        </p>
      </div>
      <div className="w-full max-w-4xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label htmlFor="firstName" className="block text-white mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-md px-3 py-2"
                placeholder="Enter First Name"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-white mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-md px-3 py-2"
                placeholder="Enter Last Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-md px-3 py-2"
                placeholder="Enter your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-white mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-md px-3 py-2"
                placeholder="Enter Phone Number"
                required
              />
            </div>
            <div>
              <label htmlFor="location" className="block text-white mb-2">
                Preferred For
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-md px-3 py-2"
                required
              >
                <option value="">Select Type</option>
                <option value="downtown">Male</option>
                <option value="suburb">Female</option>
                <option value="rural">Children</option>
              </select>
            </div>

            <div>
              <label htmlFor="quantity" className="block text-white mb-2">
                No. of Quantity
              </label>
              <select
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-md px-3 py-2"
                required
              >
                <option value="">Select no. of quantity</option>
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num.toString()}>
                    {num} {num === 1 ? "Quantity" : "Quantities"}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="budget" className="block text-white mb-2">
              Budget
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-md px-3 py-2"
              required
            >
              <option value="">Select Budget</option>
              <option value="100k-200k">Rs 1500 - Rs 2000</option>
              <option value="200k-300k">Rs 1500 - Rs 2500</option>
              <option value="300k-400k">Rs 2000 - Rs 3000</option>
              <option value="400k-500k">Rs 3000 - Rs 5000</option>
              <option value="500k+">Rs 5000+</option>
            </select>
          </div>

          <div>
            <label className="block text-white mb-2">
              Preferred Contact Method
            </label>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="contactMethod"
                  value="phone"
                  checked={formData.contactMethod === "phone"}
                  onChange={handleChange}
                  className="form-radio text-purple-600"
                />
                <span className="ml-2 text-white">Phone</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="contactMethod"
                  value="email"
                  checked={formData.contactMethod === "email"}
                  onChange={handleChange}
                  className="form-radio text-purple-600"
                />
                <span className="ml-2 text-white">Email</span>
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-white mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-md px-3 py-2 min-h-[100px]"
              placeholder="Enter your Message here..."
              required
            ></textarea>
          </div>

          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="mt-1"
              required
            />
            <label htmlFor="terms" className="text-sm text-zinc-400">
              I agree with Terms of Use and Privacy Policy
            </label>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Send Your Message
          </button>
        </form>
      </div>
    </div>
  );
}
