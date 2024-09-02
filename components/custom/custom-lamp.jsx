"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative flex min-h-[50vh] flex-col items-center justify-center w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.2, width: "10rem" }}
          whileInView={{ opacity: 1, width: "35rem" }}
          transition={{
            delay: 0.2,
            duration: 1,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 w-[35rem] bg-gradient-conic from-yellow-600 via-transparent to-transparent text-white blur-[80px] [--conic-position:from_60deg_at_center_top]"
        />
        <motion.div
          initial={{ opacity: 0.2, width: "10rem" }}
          whileInView={{ opacity: 1, width: "35rem" }}
          transition={{
            delay: 0.2,
            duration: 1,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[35rem] bg-gradient-conic from-transparent via-transparent to-yellow-600 text-white blur-[80px] [--conic-position:from_300deg_at_center_top]"
        />
        <motion.div
          initial={{ width: "10rem" }}
          whileInView={{ width: "20rem" }}
          transition={{
            delay: 0.3,
            duration: 1,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-20 w-96 -translate-y-[6rem] rounded-full bg-yellow-500 opacity-90 blur-[120px] mix-blend-screen"
        />
        <motion.div
          initial={{ width: "10rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 1,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[35rem] -translate-y-[7rem] bg-yellow-500"
        />
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-transparent"></div>
      </div>
      <div className="relative z-50 flex -translate-y-60 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};

