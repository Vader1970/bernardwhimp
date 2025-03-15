"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";
import {
  InvestmentPhilosophyProps,
  InvestmentPhilosophyDefaults,
} from "../constants/types/investmentPhilosophy";

export const InvestmentPhilosophy = (props: InvestmentPhilosophyProps) => {
  const { heading, children, image, ...rest } = {
    ...InvestmentPhilosophyDefaults,
    ...props,
  };

  const { isVisible, elementRef } = useFadeInOnScroll();

  return (
    <>
      <motion.section
        ref={elementRef}
        id="investmentPhilosophy"
        className="cvi-container"
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, translateY: isVisible ? 0 : 20 }}
        transition={{ duration: 1.5 }}
        {...rest}
      >
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div className="relative aspect-square w-full order-last lg:order-first">
            <Image
              src={image.src}
              alt={image.alt || ""}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-lg shadow-large"
            />
          </div>
          <div className="order-first lg:order-last">
            <h2 className="heading-2">{heading}</h2>
            <div className="line"></div>
            {children}
          </div>
        </div>
      </motion.section>
      <hr className="section-line" />
    </>
  );
};
