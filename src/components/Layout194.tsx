//Component Library Layout194
// Pioneering Deep Value Investing

import Image from "next/image";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  image: ImageProps;
};

export type Layout194Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout194 = (props: Layout194Props) => {
  const { heading, description, image } = {
    ...Layout194Defaults,
    ...props,
  };
  return (
    <section id="relume" className="cvi-container">
      <div>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-x-20">
          <div className="order-1 md:order-2">
            <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
              {heading}
            </h3>
            <div className="w-[100px] h-[2px] bg-black mb-5"></div>
            <p className="mb-6 md:mb-8 md:text-md">{description}</p>
          </div>
          <div className="order-2 md:order-1">
            <Image
              src={image.src}
              alt={image.alt || "Image"}
              width={1200}
              height={1200}
              className="w-full object-cover rounded-lg"
            />
          </div>
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
    src: "/images/bernard-at-desk-crop.jpg",
    alt: "Bernard Whimp at his desk",
  },
};
