//Layout134
//More About Bernard Whimp
"use client";
import { Button } from "./Button";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";
import { motion } from "framer-motion";
import {
  MoreAboutBernardProps,
  MoreAboutBernardDefaults,
} from "../constants/types/moreAboutBernard";

export const MoreAboutBernard = (props: MoreAboutBernardProps) => {
  const { heading, description, blockquote } = {
    ...MoreAboutBernardDefaults,
    ...props,
  };

  const { isVisible, elementRef } = useFadeInOnScroll();

  return (
    <section id="layout134" className="w-screen bg-[#131a24]">
      <div className="cvi-container text-center">
        <motion.div
          ref={elementRef}
          initial={{ opacity: 0, translateY: 20 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            translateY: isVisible ? 0 : 20,
          }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading-2 text-white">{heading}</h2>
          <p className="mb-4 text-base text-white">{description}</p>
          <p className="text-base text-white font-semibold">{blockquote}</p>
          <div className="mt-6 flex flex-wrap justify-center items-center gap-4 md:mt-12">
            <Button
              variant="gold"
              href="https://www.yumpu.com/en/document/read/67205141/the-star-september-08-2022"
              target="_blank"
              rel="noopener noreferrer"
            >
              Find the Full Article Here
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
