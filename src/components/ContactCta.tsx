"use client";

//Component Library Cta27
import Image from "next/image";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";
import {
  ContactCtaProps,
  ContactCtaDefaults,
} from "../constants/types/contactCta";

export const ContactCta = (props: ContactCtaProps) => {
  const { heading, description, buttons, image } = {
    ...ContactCtaDefaults,
    ...props,
  };

  const { isVisible, elementRef } = useFadeInOnScroll();

  const handleButtonClick = (href?: string) => {
    if (href) {
      window.location.href = href;
    }
  };

  return (
    <motion.section
      ref={elementRef}
      id="cta27"
      className="relative px-[5%] py-16 md:py-24 lg:py-28"
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, translateY: isVisible ? 0 : 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="cvi-container max-w-lg text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-16">
        <h2 className="mb-5 text-white text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
          {heading}
        </h2>
        <p className="text-text-alternative md:text-md">{description}</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
          {buttons.map((button, index) => (
            <Button
              key={index}
              {...button}
              onClick={() => handleButtonClick(button.href)}
            >
              {button.title}
            </Button>
          ))}
        </div>
      </div>
      <div
        className="absolute w-full h-full inset-0 -z-10"
        style={{ aspectRatio: "2241 / 1338" }}
      >
        <Image
          src={image.src}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          className="object-cover"
          alt={image.alt || "Image"}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </motion.section>
  );
};
