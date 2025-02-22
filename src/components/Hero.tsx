//Component Library Header5

"use client";
import { Button } from "@/components/Button";

import Image from "next/image";

type ImageProps = {
  src: string;
  alt?: string;
};

type ButtonConfig = {
  title: string;
  variant: "white-bg" | "transparent-bg";
  href?: string;
};

type Props = {
  tagline: string;
  heading: string;
  buttons: ButtonConfig[];
  image: ImageProps;
};

export type HeroProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Hero = (props: HeroProps) => {
  const { tagline, heading, buttons, image } = {
    ...HeroDefaults,
    ...props,
  };

  const handleLearnMore = () => {
    const layout102Element = document.getElementById("content7");
    layout102Element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id='relume' className='relative h-screen'>
      <div className='cvi-container h-full'>
        <div className='flex h-full flex-col justify-end lg:justify-start lg:flex-row lg:items-center'>
          <div className='max-w-md pb-16 md:pb-12 lg:pb-0'>
            <p className='mb-3 font-normal text-text-alternative md:mb-4'>{tagline}</p>
            <h1 className='mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl'>
              {heading}
            </h1>
            <p className='text-text-alternative md:text-md'>
              Bernard Whimp has over 30 years experience in share investment and stock markets, commercial property
              investment and development, commercial property financing and mortgage lending, property <br />
              and securities law.
            </p>
            <div className='mt-6 flex flex-wrap gap-4 md:mt-8'>
              {buttons.map((button, index) =>
                button.title === "Learn more" ? (
                  <Button key={index} {...button} onClick={handleLearnMore}>
                    {button.title}
                  </Button>
                ) : (
                  <Button key={index} {...button} href='/contact'>
                    {button.title}
                  </Button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='absolute inset-0 -z-10 w-full h-auto'>
        <Image
          src={image.src}
          alt={image.alt || "Background image"}
          quality={100}
          fill
          sizes='100vw'
          className='object-cover object-[65%_center] md:object-center'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent' />
      </div>
    </section>
  );
};

export const HeroDefaults: Props = {
  tagline: "Professional Stock Picker.  Chance Voight CEO.",
  heading: "BERNARD WHIMP",
  buttons: [
    { title: "Learn more", variant: "white-bg" },
    { title: "Get in touch", variant: "transparent-bg", href: "#contact" },
  ],
  image: {
    src: "/images/hero.webp",
    alt: "Bernard Whimp",
  },
};
