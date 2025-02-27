//Layout192
//Chance Voight
"use client";

import { Button } from "./Button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";
import {
  ChanceVoightFounderProps,
  ChanceVoightFounderDefaults,
} from "../constants/types/chanceVoightFounder";

export const ChanceVoightFounder = (
  props: Partial<ChanceVoightFounderProps>
) => {
  const { heading, paragraphs, buttons, image } = {
    ...ChanceVoightFounderDefaults,
    ...props,
  };

  const { isVisible, elementRef } = useFadeInOnScroll();

  return (
    <>
      <motion.section
        ref={elementRef}
        id="layout192"
        className="cvi-container"
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, translateY: isVisible ? 0 : 20 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <div className="grid grid-cols-1 gap-y-12 xl:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
            <div className="order-1">
              <h2 className="mb-2 text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
                {heading}
              </h2>
              <div className="w-[100px] h-[2px] bg-black mb-8"></div>
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="mb-4 text-base">
                  {paragraph}
                </p>
              ))}
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-12">
                {buttons.map((button, index) =>
                  button.href ? (
                    <Button key={index} {...button}>
                      {button.title}
                    </Button>
                  ) : (
                    <Link key={index} href="#">
                      <Button {...button}>{button.title}</Button>
                    </Link>
                  )
                )}
              </div>
            </div>
            <div className="order-2 relative w-full h-full pb-[100%]">
              <Image
                src={image.src}
                alt={image.alt || "Image"}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover rounded-lg shadow-large"
              />
            </div>
          </div>
        </div>
      </motion.section>
      <hr className="border-t border-gray-200" />
    </>
  );
};
