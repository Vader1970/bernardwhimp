// This component is used to display a section of content with a heading, image, and children.
// It is used to display the content for the About page. It is a client component. It uses the useFadeInOnScroll hook to fade in the content when it is in view. It is a motion component. It is a content section component. It is used for components GlimpseGeniusBearnard and TraitsApproach.

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";
import { ContentSectionProps } from "../constants/types/contentSection";

export function ContentSection({
  heading,
  children,
  image,
  id,
  className = "cvi-container",
  ...rest
}: ContentSectionProps & { id: string }) {
  const { isVisible, elementRef } = useFadeInOnScroll();

  return (
    <>
      <motion.section
        ref={elementRef}
        id={id}
        className={className}
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, translateY: isVisible ? 0 : 20 }}
        transition={{ duration: 0.5 }}
        {...rest}
      >
        <div>
          <div className="mb-8">
            <div className="flex flex-col">
              <h2 className="heading-2">{heading}</h2>
              <div className="line"></div>
              <div className="prose max-w-none">{children}</div>
            </div>
          </div>
          <div className="relative aspect-video w-full">
            <Image
              src={image.src}
              alt={image.alt ?? "Section Image"}
              fill
              quality={100}
              className="object-cover object-top rounded-lg shadow-large"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
          </div>
        </div>
      </motion.section>
      <hr className="section-line" />
    </>
  );
}
