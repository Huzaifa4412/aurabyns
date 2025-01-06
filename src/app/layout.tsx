import type { Metadata } from "next";
import "./globals.css";
import { Urbanist } from "next/font/google";
import WhatsappIcon from "../components/Whatsapp/WhatsappIcon";
import Footer from "@/components/Footer/page";
import Navbar from "@/components/Navbar/page";
import CartProvider from "./CartProvider";
const urbanist = Urbanist({
  subsets: ["latin", "latin-ext"], // Specify character subsets
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"], // Include normal and italic styles
  display: "swap",
});
export const metadata: Metadata = {
  title: "Aura by NS ",
  description: "AuraByNs – Unveil Your Essence, Embrace the Scent of Luxury.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="mainLogo.svg" type="image/x-icon" />
      </head>
      <body
        suppressHydrationWarning
        className={`antialiased ${urbanist.className} bg-[#141414]`}
      >
        <CartProvider>
          <Navbar />
          <WhatsappIcon />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
