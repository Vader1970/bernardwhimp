//Component Library Layout102
// Described by some as "the god of stocks"

import Image from "next/image";

type ImageProps = {
  src: string;
  alt?: string;
};

type SubHeadingProps = {
  title: string;
  description: string;
};

type Props = {
  heading: string;
  subHeadings: SubHeadingProps[];
  description: string;
  image: ImageProps;
};

export type Layout102Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export function Layout102(props: Layout102Props) {
  const { heading, description, image, subHeadings } = {
    ...Layout102Defaults,
    ...props,
  };

  return (
    <section id="layout102" className="cvi-container">
      <div className="text-left">
        <div className="mb-12 grid grid-cols-1 gap-y-5 md:mb-18 lg:mb-20">
          <header className="flex flex-col items-start">
            <h2 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
              {heading}
            </h2>
            <div className="w-[100px] h-[2px] bg-black mt-5"></div>
          </header>
          <div>
            <p className="text-left mb-6 md:mb-8 md:text-md">{description}</p>
            <div className="grid grid-cols-1 gap-10 py-2 sm:grid-cols-2">
              {subHeadings.map((subHeading, index) => (
                <article key={index}>
                  <h3 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                    {subHeading.title}
                  </h3>
                  <p className="mb-6 md:mb-8 md:text-md">
                    {subHeading.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-black/10 z-10"></div>
          <Image
            src={image.src}
            alt={image.alt ?? ""}
            width={1280}
            height={853}
            className="w-full object-cover relative rounded-lg"
          />
          {/* Glass morphism quote on medium devices and up */}
          <div className="z-10 absolute left-[10%] top-1/2 -translate-y-1/2 xl:max-w-[550px] lg:max-w-[400px] md:max-w-[270px] h-auto rounded-lg bg-white/10 backdrop-blur-sm p-8 hidden md:flex flex-col justify-center">
            <p className="text-white xl:text-6xl lg:text-2xl sm:text-4xl md:text-2xl text-2xl italic font-normal mb-4">
              &quot;I am looking to build on the knowledge and experience I have
              accumulated to create life changing wealth for investors&quot;
            </p>
            <p className="text-white italic font-normal mb-4 text-lg">
              - Bernard Whimp
            </p>
          </div>
        </div>
        {/* Quote for small devices */}
        <div className="bg-white mt-6 md:hidden">
          <p className="text-black italic font-normal mb-4 sm:text-2xl">
            &quot;I am looking to build on the knowledge and experience I have
            accumulated to create life changing wealth for investors&quot;
          </p>
          <p className="text-black italic font-normal mb-4 sm:text-2xl">
            - Bernard Whimp
          </p>
        </div>
      </div>
    </section>
  );
}

export const Layout102Defaults: Props = {
  heading: `Described by some as the god of stocks`,
  description: `Bernard Whimp is a visionary and an entrepreneur; some would refer to him as "the god of stocks". As an experienced professional stock picker, he is passionate, relentless, and strategic when it comes to the Australian stock market.`,
  image: {
    src: "/images/bernard-smiling-desk.webp",
    alt: "Bernard sitting at desk",
  },
  subHeadings: [
    {
      title: "Visionary Leader",
      description:
        "Building a billion-dollar business in the Australian stock market, he is establishing New Zealand's first equities hedge fund.",
    },
    {
      title: "Inspiring Speaker",
      description:
        "Sharing investment insights with shareholders, he aims to convey his deep understanding of the stock market.",
    },
  ],
};
