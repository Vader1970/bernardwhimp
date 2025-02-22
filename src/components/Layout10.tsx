//Component Library Layout10
// Who is Bernard Whimp
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/Button";
import type { ButtonProps } from "../components/Button";

interface ImageProps {
  src: string;
  alt?: string;
}

interface SubHeadingProps {
  title: string;
  description: string;
}

interface ButtonWithHref extends ButtonProps {
  href?: string;
}

interface Props {
  heading: string;
  description?: string;
  subHeadings: SubHeadingProps[];
  buttons: ButtonWithHref[];
  image: ImageProps;
}

export type Layout10Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout10 = ({
  heading = Layout10Defaults.heading,
  subHeadings = Layout10Defaults.subHeadings,
  buttons = Layout10Defaults.buttons,
  image = Layout10Defaults.image,
  ...rest
}: Layout10Props) => {
  return (
    <section id='layout10' className='cvi-container pt-0' {...rest}>
      <div>
        <div className='grid grid-cols-1 gap-y-12 md:grid-flow-row xl:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20'>
          <div className='relative aspect-square w-full'>
            <Image
              src={image.src}
              alt={image.alt || "Image"}
              width={1200}
              height={1200}
              className='w-full object-cover rounded-lg'
            />
          </div>
          <div>
            <h2 className='mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl'>{heading}</h2>
            <div className='w-[100px] h-[2px] bg-black mb-8'></div>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
              {subHeadings.map((subHeading, index) => (
                <div key={index}>
                  <h3 className='mb-4 text-xl font-bold leading-[1.4]'>{subHeading.title}</h3>
                  <p className='text-base'>{subHeading.description}</p>
                </div>
              ))}
            </div>
            <div className='mt-6 flex flex-wrap items-center gap-4 md:mt-8'>
              {buttons.map((button, index) =>
                button.href ? (
                  <Button key={index} {...button}>
                    {button.title}
                  </Button>
                ) : (
                  <Link key={index} href='#'>
                    <Button {...button}>{button.title}</Button>
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout10Defaults: Props = {
  heading: "Who is Bernard Whimp?",
  subHeadings: [
    {
      title: "A Visionary Leader",
      description:
        "Bernard Whimp is building a billion-dollar business in the Australian stock market while establishing New Zealand's first equities hedge fund.",
    },
    {
      title: "An Inspiring Speaker",
      description:
        "Bernard Whimp shares investment insights with shareholders, aiming to convey his deep understanding of the stock market.",
    },
    {
      title: "A Professional Stock Picker",
      description: "Bernard Whimp seeks opportunities to acquire significant value without significant investment.",
    },
    {
      title: "Founder and CEO/CIO",
      description: "Bernard Whimp is the Founder and CEO/CIO of Chance Voight Investment Corporation.",
    },
  ],
  buttons: [
    {
      title: "Learn More About Bernard Whimp",
      variant: "navbar",
      href: "/about",
    },
  ],
  image: {
    src: "/images/bernard-black-coat.webp",
    alt: "Bernard at desk",
  },
};
