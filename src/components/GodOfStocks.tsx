//Component Library Content7
//Described by some as the god of stocks
"use client";

import { motion } from "framer-motion";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";
import {
  GodOfStocksComponentProps,
  GodOfStocksDefaults,
} from "../constants/types/godOfStocks";

export const GodOfStocks = (props: GodOfStocksComponentProps) => {
  const { heading, children } = {
    ...GodOfStocksDefaults,
    ...props,
  };

  const { isVisible, elementRef } = useFadeInOnScroll();

  return (
    <motion.section
      ref={elementRef}
      id="content7"
      className="cvi-container pb-4"
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, translateY: isVisible ? 0 : 20 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <div className="mx-auto w-full">
          <h2 className="heading-2">{heading}</h2>
          <div className="line"></div>
          <div className="prose max-w-none">{children}</div>
        </div>
      </div>
    </motion.section>
  );
};
