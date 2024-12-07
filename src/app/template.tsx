"use client";
import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0, x: -200 }}
      animate={{ y: 0, opacity: 1, x: 0 }}
      transition={{ type: "easeInOut", duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}
