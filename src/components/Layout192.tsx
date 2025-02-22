//Layout192
//Chance Voight

import { Button, ButtonProps } from "./Button";
import Image from "next/image";
import Link from "next/link";

type ImageProps = {
  src: string;
  alt?: string;
};

interface Layout192Props {
  heading: string;
  paragraphs: string[];
  buttons: ButtonProps[];
  image: ImageProps;
}

export const Layout192 = (props: Partial<Layout192Props>) => {
  const { heading, paragraphs, buttons, image } = {
    ...Layout192Defaults,
    ...props,
  };

  return (
    <section id='relume' className='cvi-container'>
      <div>
        <div className='grid grid-cols-1 gap-y-12 xl:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20'>
          <div className='order-1'>
            <h2 className='mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl'>{heading}</h2>
            <div className='w-[100px] h-[2px] bg-black mb-8'></div>
            {paragraphs.map((paragraph, index) => (
              <p key={index} className='mb-6 text-base'>
                {paragraph}
              </p>
            ))}
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
          <div className='order-2'>
            <Image
              src={image.src}
              alt={image.alt || "Image"}
              width={600}
              height={600}
              className='w-full object-cover rounded-lg'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout192Defaults: Layout192Props = {
  heading: "Chance Voight",
  paragraphs: [
    "Chance Voight was established in 2018 with the ambition to develop a profitable New Zealand hedge fund. Prior to his re-orientation towards the share market over a decade ago, Bernard accumulated extensive experience as a financier and investor in real estate transactions as well as building financial and investment-related businesses. Chance Voight was founded as a result of Bernard's cumulative experience and an intensive decade of experience as a full-time professional share investor in the Australian stock market (ASX).",
    "Currently several years into its development, Chance Voight has established itself as a trusted institution and has experienced a steep upward trajectory towards its billion-dollar investment business ambitions.",
    "In addition to the Chance Voight success, Bernard is also possibly one of the most explanatory speakers on the stock market in New Zealand today. Those that have heard him speak at one of his seminars have been fascinated by the way he thinks about the stock market and his deep value style.",
  ],
  buttons: [
    {
      title: "Learn More About Chance Voight",
      variant: "navbar",
      href: "/chance-voight",
    },
  ],
  image: {
    src: "/images/high-street-building.webp",
    alt: "The Chance Voight building",
  },
};
