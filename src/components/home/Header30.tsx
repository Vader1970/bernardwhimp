"use client";

import { Button, ButtonProps } from "../Button";
import Image from "next/image";
import { PageTransition } from "../PageTransition";
import { motion as m } from "framer-motion";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Header30Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header30 = (props: Header30Props) => {
  const { description, buttons, image } = {
    ...Header30Defaults,
    ...props,
  };
  return (
    <PageTransition>
      <section id='Header30' className='relative h-screen'>
        <div className='absolute inset-0 z-0'>
          <div className='absolute inset-0 bg-navy-100 z-[0]' />
          <Image
            src={image.src}
            className='size-full object-cover opacity-20'
            alt={image.alt || "Background Image"}
            fill
            priority
          />
        </div>

        <div className='cvi-container h-full flex items-center justify-center relative z-10'>
          <div className='flex items-center justify-center text-center'>
            <div className='max-w-lg pb-16 md:pb-12 lg:pb-0 px-8 sm:px-0'>
              <m.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <h1 className='font-serif text-5xl md:text-10xl font-bold text-navy-900 leading-tight mb-6 text-balance'>
                  <span className='inline-block mb-2'>Investment Expertise</span>
                  <span className='inline-block text-navy-800'>Spanning Decades</span>
                </h1>
              </m.div>

              <m.p
                className='text-navy-700 text-md sm:text-lg mb-10 leading-relaxed'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {description}
              </m.p>

              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='flex flex-col sm:flex-row items-center justify-center gap-4'
              >
                {buttons.map((button, index) => (
                  <Button key={index} {...button}>
                    {button.title}
                  </Button>
                ))}
              </m.div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export const Header30Defaults: Props = {
  description:
    "Bernard Whimp has over 30 years' experience in share investment and stock markets, commercial property investment and development, commercial property financing and mortgage lending, property and securities law.",
  buttons: [
    { title: "Learn More", variant: "navbar" },
    { title: "Get in touch", variant: "transparent-bg", href: "#contact" },
  ],
  image: {
    src: "/images/hero-building.webp",
    alt: "Relume placeholder image",
  },
};
