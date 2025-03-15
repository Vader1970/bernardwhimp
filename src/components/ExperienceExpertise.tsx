"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";
import {
  ExperienceExpertiseProps,
  ExperienceExpertiseDefaults,
} from "../constants/types/experienceExpertise";

export const ExperienceExpertise = (props: ExperienceExpertiseProps) => {
  const { heading, description, image, ...rest } = {
    ...ExperienceExpertiseDefaults,
    ...props,
  };

  const { isVisible, elementRef } = useFadeInOnScroll();

  return (
    <>
      <motion.section
        ref={elementRef}
        id="experienceExpertise"
        className="cvi-container"
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, translateY: isVisible ? 0 : 20 }}
        transition={{ duration: 1.5 }}
        {...rest}
      >
        <section id="layout3">
          <div>
            <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
              <div>
                <h2 className="heading-2">{heading}</h2>
                <div className="line"></div>
                <p className="text-base">{description}</p>
              </div>
              <div className="relative aspect-square w-full">
                <Image
                  src={image.src}
                  alt={image.alt || ""}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover rounded-lg shadow-large"
                />
              </div>
            </div>
          </div>
        </section>
      </motion.section>
      <hr className="section-line" />
    </>
  );
};
