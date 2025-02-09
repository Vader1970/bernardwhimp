import { Button } from "@/components/Button";

import Image from "next/image";

type ImageProps = {
  src: string;
  alt?: string;
};

type ButtonConfig = {
  title: string;
  variant: "white-bg" | "transparent-bg";
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

  return (
    <section id='relume' className='relative px-[5%]'>
      <div className='container'>
        <div className='flex min-h-svh flex-col justify-end md:justify-end lg:justify-start lg:flex-row lg:items-center py-16 md:py-24 lg:py-28'>
          <div className='max-w-md pb-8 md:pb-12 lg:pb-0'>
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
              {buttons.map((button, index) => (
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='absolute inset-0 -z-10'>
        <Image
          src={image.src}
          alt={image.alt || "Background image"}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
          className='object-cover object-[65%_center] md:object-center'
          priority
        />
        <div className='absolute inset-0 bg-black/50' />
      </div>
    </section>
  );
};

export const HeroDefaults: Props = {
  tagline: "Professional Stock Picker.  Chance Voight CEO.",
  heading: "BERNARD WHIMP",
  buttons: [
    { title: "Learn More", variant: "white-bg" },
    { title: "Get in touch", variant: "transparent-bg" },
  ],
  image: {
    src: "/images/hero-crop.jpg",
    alt: "Bernard Whimp",
  },
};
