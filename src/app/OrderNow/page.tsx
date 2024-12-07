"use client";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useState } from "react";

export default function OrderNowForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    productName: "",
    phone: "",
    whatsappNumber: "",
    cashOnDelivery: "",
    quantity: "",
    shippingAddress: "",
    paymentMethod: "",
    specialInstructions: "",
    terms: false,
  });

  function ProductName() {
    const searchParam = useSearchParams();
    return (
      <div>
        <label htmlFor="fullName" className="block text-white mb-2">
          Product Name
        </label>
        <input
          type="text"
          id="productName"
          name="productName"
          value={searchParam.get("title") || ""}
          readOnly
          onChange={handleChange}
          className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-md px-4 py-3"
          required
        />
      </div>
    );
  }

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

  return (
    <div
      className="min-h-screen p-6 sm:p-8 flex items-center justify-center"
      style={{ backgroundColor: "var(--dark-gray)" }}
    >
      <div className="w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Order Now
        </h2>
        <form
          action="https://formspree.io/f/mgveqjrk"
          method="POST"
          className="space-y-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <label htmlFor="fullName" className="block text-white mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-md px-4 py-3"
                placeholder="Enter your full name"
                required
              />
            </div>
            <Suspense>
              <ProductName />
            </Suspense>
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
                className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-md px-4 py-3"
                placeholder="Enter your email"
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
                className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-md px-4 py-3"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div>
              <label htmlFor="whatsappNumber" className="block text-white mb-2">
                WhatsApp Number (Optional)
              </label>
              <input
                type="tel"
                id="whatsappNumber"
                name="whatsappNumber"
                value={formData.whatsappNumber}
                onChange={handleChange}
                className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-md px-4 py-3"
                placeholder="Enter your WhatsApp number (optional)"
              />
            </div>
            <div>
              <label htmlFor="quantity" className="block text-white mb-2">
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-md px-4 py-3"
                min="1"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="shippingAddress" className="block text-white mb-2">
              Shipping Address
            </label>
            <textarea
              id="shippingAddress"
              name="shippingAddress"
              value={formData.shippingAddress}
              onChange={handleChange}
              className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-md px-4 py-3 min-h-[100px]"
              placeholder="Enter your shipping address"
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-white mb-2">Payment Method</label>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="creditCard"
                  checked={formData.paymentMethod === "creditCard"}
                  onChange={handleChange}
                  id="creditCard"
                  className="form-radio text-purple-600"
                  required
                />
                <span className="ml-2 text-white">Credit Card</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Jazz Cash"
                  checked={formData.paymentMethod === "Jazz Cash"}
                  onChange={handleChange}
                  className="form-radio text-purple-600"
                  id="jazzCash"
                  required
                />
                <span className="ml-2 text-white">Jazz Cash</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Cash on Delivery"
                  checked={formData.paymentMethod === "Cash on Delivery"}
                  onChange={handleChange}
                  className="form-radio text-purple-600"
                  id="cashOnDelivery"
                  required
                />
                <span className="ml-2 text-white">Cash on Delivery</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="easy passa"
                  id="easyPassa"
                  checked={formData.paymentMethod === "easy passa"}
                  onChange={handleChange}
                  className="form-radio text-purple-600"
                  required
                />
                <span className="ml-2 text-white">Easy Passa</span>
              </label>
            </div>
          </div>

          <div>
            <label
              htmlFor="specialInstructions"
              className="block text-white mb-2"
            >
              Special Instructions (Optional)
            </label>
            <textarea
              id="specialInstructions"
              name="specialInstructions"
              value={formData.specialInstructions}
              onChange={handleChange}
              className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-md px-4 py-3 min-h-[100px]"
              placeholder="Enter any special instructions or notes"
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
              I agree to the Terms of Service and Privacy Policy
            </label>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}
