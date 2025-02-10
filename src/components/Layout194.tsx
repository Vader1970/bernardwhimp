import React from "react";
import Image from "next/image";

interface ImageProps {
  src: string;
  alt?: string;
}

interface Props {
  heading: string;
  description: string;
  image: ImageProps;
}

export type Layout194Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout194 = (props: Layout194Props) => {
  const { heading, description, image } = {
    ...Layout194Defaults,
    ...props,
  };

  return (
    <section id="relume" className="px-[5%] sm:px-0">
      <div className="flex flex-col md:flex-row relative">
        <div className="relative w-full md:w-1/2 h-[300px] md:h-[600px]">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <Image
            src={image.src}
            alt={image.alt || "Image"}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="w-full z-20 md:absolute md:top-1/2 md:transform md:-translate-y-1/2 md:right-[5%] md:w-[60%] h-auto flex flex-col justify-center bg-white border-black/10 py-8 px-0 sm:px-8 rounded-lg md:shadow-xxlarge">
          <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
            {heading}
          </h3>
          <div className="w-[100px] h-[2px] bg-black mb-5"></div>
          <p className="md:text-md">{description}</p>
        </div>
      </div>
    </section>
  );
};

export const Layout194Defaults: Props = {
  heading: "Pioneering Deep Value Investing",
  description:
    "Bernard has an aptitude for the area of the market known as deep value, the natural home of independent thinkers. Combing the market for companies which look like they have had a problem, assessing the dynamics at play across the whole economy. He understands the public consciousness and looks for situations where pessimism has driven the share price to ridiculously low levels and where it is likely to bounce back, these are referred to as high probability situations.",
  image: {
    src: "/images/board-table.webp",
    alt: "Board Room Table and Chairs",
  },
};
