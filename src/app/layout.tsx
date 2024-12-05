import type { Metadata } from "next";
import "./globals.css";

import { Urbanist } from "next/font/google";
const urbanist = Urbanist({
  subsets: ["latin", "latin-ext"], // Specify character subsets
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"], // Include normal and italic styles
  display: "swap",
});
export const metadata: Metadata = {
  title: "Al Wahhab properties",
  description: "Al Wahhab properties where the deal that you can trust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
      </head>
      <body
        suppressHydrationWarning
        className={`antialiased ${urbanist.className} bg-[#141414]`}
      >
        {children}
      </body>
    </html>
  );
}
