//Component Library Content1
// Chance Voight CEO
import Image from "next/image";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  image: ImageProps;
  children: React.ReactNode;
};

export type Content1Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Content1 = (props: Content1Props) => {
  const { heading, children, image } = {
    ...Content1Defaults,
    ...props,
  };
  return (
    <section id="relume" className="cvi-container">
      <div>
        <div className="grid grid-cols-1 items-start gap-y-12 xl:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
              {heading}
            </h2>
            <div className="w-[100px] h-[2px] bg-black mb-5"></div>
            <div className="prose">{children}</div>
          </div>
          <div>
            <Image
              src={image.src}
              width={600}
              height={600}
              className="w-full object-cover rounded-lg"
              alt={image.alt || "Image"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Content1Defaults: Props = {
  heading: "Chance Voight CEO",
  children: (
    <div>
      <p className="mb-6 md:mb-8 md:text-md">
        Chance Voight was established in 2018 with the ambition to develop a
        profitable New Zealand hedge fund. Prior to his re-orientation towards
        the share market over a decade ago, Bernard accumulated extensive
        experience as a financier and investor in real estate transactions as
        well as building financial and investment-related businesses. Chance
        Voight was founded as a result of Bernard&apos;s cumulative experience
        and an intensive decade of experience as a full-time professional share
        investor in the Australian stock market (ASX).
      </p>
      <p className="mb-6 md:mb-8 md:text-md">
        Currently several years into its development, Chance Voight has
        established itself as a trusted institution and has experienced a steep
        upward trajectory towards its billion-dollar investment business
        ambitions.
      </p>
      <p className="mb-6 md:mb-8 md:text-md">
        In addition to the Chance Voight success, Bernard is also possibly one
        of the most explanatory speakers on the stock market in New Zealand
        today. Those that have heard him speak at one of his seminars have been
        fascinated by the way he thinks about the stock market and his deep
        value style.
      </p>
    </div>
  ),
  image: {
    src: "/images/bernard-black-coat.webp",
    alt: "Bernard standing in a black suit",
  },
};
