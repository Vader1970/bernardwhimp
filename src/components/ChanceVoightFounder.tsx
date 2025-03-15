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
      <section id="layout192" className="w-screen bg-[#131a24]">
        <div className="cvi-container">
          <motion.div
            ref={elementRef}
            initial={{ opacity: 0, translateY: 20 }}
            animate={{
              opacity: isVisible ? 1 : 0,
              translateY: isVisible ? 0 : 20,
            }}
            transition={{ duration: 1.5 }}
            className="grid grid-cols-1 gap-y-12 xl:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20"
          >
            <div className="order-1">
              <h2 className="heading-2 text-white">{heading}</h2>
              <div className="line bg-white"></div>
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="mb-4 text-base text-white">
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
              <div className="absolute -bottom-6 -right-6 bg-[#d5962b] text-[#141a23] p-4 rounded-lg">
                <p className="text-xl font-semibold">
                  The Chance Voight Building
                </p>
                <p className="text-sm">29 High Street, Rangiora</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <hr className="section-line" />
    </>
  );
};
