//Layout423
//Videos
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Layout423Props, Layout423Defaults } from "@/constants/types/layout423";

const slideVariants = {
  hidden: {
    opacity: 0,
    height: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    height: "auto",
    y: 0,
  },
};

export const Layout423 = (props: Partial<Layout423Props>) => {
  const { heading, description, blockquote, features } = {
    ...Layout423Defaults,
    ...props,
  };

  const [hoveredFeatureIdx, setHoveredFeatureIdx] = useState<number | null>(null);

  return (
    <div className='pb-24'>
      <section id='relume' className='cvi-container'>
        <div>
          <div className='mx-auto mb-12 w-full max-w-lg text-center md:mb-16 lg:mb-20'>
            <h2 className='mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl'>{heading}</h2>
            <p className='mb-4 text-base text-black'>{description}</p>
            <p className='text-base text-black font-regular'>{blockquote}</p>
          </div>
          <div className='flex flex-col justify-between gap-6 md:gap-8 lg:flex-row'>
            {features.map((feature, index) => (
              <a
                key={index}
                href={feature.url}
                className='relative flex w-full flex-col overflow-hidden rounded-lg lg:h-full lg:w-1/2 lg:transition-all lg:duration-200 lg:hover:w-[70%]'
                onMouseEnter={() => setHoveredFeatureIdx(index)}
                onMouseLeave={() => setHoveredFeatureIdx(null)}
              >
                <div className='absolute inset-0 flex size-full flex-col items-center justify-center self-start'>
                  <div className='absolute inset-0 bg-black/50' />
                  <Image
                    src={feature.image.src}
                    alt={feature.image.alt || "Feature image"}
                    fill
                    sizes='(max-width: 768px) 100vw, 50vw'
                    style={{ objectFit: "cover" }}
                    className='size-full'
                    unoptimized={feature.image.unoptimized}
                  />
                </div>
                <div className='group relative flex h-full min-h-[70vh] flex-col justify-end p-6 md:p-8'>
                  <div className='bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent absolute inset-0 z-0 transition-all duration-300 group-hover:bg-black/50' />
                  <div className='z-10'>
                    <h3 className='text-2xl font-bold text-text-alternative md:text-3xl md:leading-[1.3] lg:text-4xl'>
                      {feature.heading}
                    </h3>
                    <div className='lg:hidden'>
                      <p className='mt-5 text-text-alternative md:mt-6'>{feature.description}</p>
                    </div>
                  </div>
                  <AnimatePresence>
                    {hoveredFeatureIdx === index && (
                      <motion.div
                        className='z-10 hidden lg:block lg:w-[340px]'
                        variants={slideVariants}
                        initial='hidden'
                        animate='visible'
                        exit='hidden'
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <p className='mt-5 text-text-alternative md:mt-6'>{feature.description}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
