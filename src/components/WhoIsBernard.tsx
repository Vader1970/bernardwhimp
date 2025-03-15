//Component Library Layout10
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";
import { motion } from "framer-motion";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";
import {
  WhoIsBernardProps,
  WhoIsBernardDefaults,
} from "@/constants/types/whoIsBernard";

export const WhoIsBernard = ({
  heading = WhoIsBernardDefaults.heading,
  subHeadings = WhoIsBernardDefaults.subHeadings,
  buttons = WhoIsBernardDefaults.buttons,
  image = WhoIsBernardDefaults.image,
}: WhoIsBernardProps) => {
  const { isVisible, elementRef } = useFadeInOnScroll();

  return (
    <>
      <section id="layout10" className="w-screen bg-[#131a24]">
        <div className="cvi-container pt-0">
          <motion.div
            ref={elementRef}
            initial={{ opacity: 0, translateY: 20 }}
            animate={{
              opacity: isVisible ? 1 : 0,
              translateY: isVisible ? 0 : 20,
            }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 gap-y-12 md:grid-flow-row xl:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20"
          >
            <div className="relative w-full h-0 pb-[100%]">
              <Image
                src={image.src}
                alt={image.alt || "Image"}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover rounded-lg shadow-large"
              />
              <div className="absolute -bottom-5 -left-5 bg-[#d5962b] text-[#141a23] rounded-lg p-4 md:p-6">
                <p className="text-xl font-semibold">30+ Years</p>
                <p className="text-sm">of Excellence</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <h2 className="heading-2 text-white">{heading}</h2>
                <div className="line bg-white"></div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {subHeadings.map((subHeading, index) => {
                  const Icon = subHeading.icon;
                  return (
                    <div
                      key={index}
                      className="flex flex-col min-h-[222px] bg-[#f1f2f7] items-start border border-black/10 rounded-lg p-4 shadow-large transition-transform transform hover:scale-105 hover:shadow-xl"
                    >
                      <Icon className="w-9 h-9 text-[#d5962b] rounded-md mb-2" />
                      <div className="flex-grow text-left">
                        <h3 className="heading-3 text-[#374151]">
                          {subHeading.title}
                        </h3>
                        <p className="text-base">{subHeading.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
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
          </motion.div>
        </div>
      </section>
      <hr className="section-line" />
    </>
  );
};
