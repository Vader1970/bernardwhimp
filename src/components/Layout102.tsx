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

export type Layout102Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export function Layout102(props: Layout102Props) {
  const { heading, description, image, subHeadings } = {
    ...Layout102Defaults,
    ...props,
  };

  return (
    <section id='layout102' className='px-[5%] py-16 md:py-24 lg:py-28'>
      <div className='container'>
        <div className='mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20'>
          <header>
            <h2 className='text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl'>{heading}</h2>
          </header>
          <div>
            <p className='mb-6 md:mb-8 md:text-md'>{description}</p>
            <div className='grid grid-cols-1 gap-6 py-2 sm:grid-cols-2'>
              {subHeadings.map((subHeading, index) => (
                <article key={index}>
                  <h3 className='mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl'>{subHeading.title}</h3>
                  <p>{subHeading.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
        <div className='relative'>
          <div className='absolute inset-0 bg-black/10 z-10'></div>
          <Image
            src={image.src}
            alt={image.alt ?? ""}
            width={1280}
            height={720}
            className='w-full object-cover relative rounded-lg'
          />
          {/* Glass morphism quote on medium devices and up */}
          <div className='absolute left-[5%] top-1/2 -translate-y-1/2 lg:max-w-[300px] md:max-w-[270px] h-auto rounded-lg bg-white/10 backdrop-blur-md p-8 hidden md:flex flex-col justify-center'>
            <p className='text-white text-2xl italic font-normal mb-4'>
              &quot;I am looking to build on the knowledge and experience I have accumulated to create life changing
              wealth for investors&quot;
            </p>
            <p className='text-white italic font-normal mb-4 text-lg'>- Bernard Whimp</p>
          </div>
        </div>
        {/* Quote for small devices */}
        <div className='bg-white mt-6 md:hidden'>
          <p className='text-black italic font-normal mb-4 sm:text-2xl'>
            &quot;I am looking to build on the knowledge and experience I have accumulated to create life changing
            wealth for investors&quot;
          </p>
          <p className='text-black italic font-normal mb-4 sm:text-2xl'>- Bernard Whimp</p>
        </div>
      </div>
    </section>
  );
}

export const Layout102Defaults: Props = {
  heading: `Described by some as "the god of stocks."`,
  description: `Bernard Whimp is a visionary and an entrepreneur, some would refer to him as "the god of stocks". As an experienced professional stock picker, he is passionate, relentless, and strategic when it comes to the Australian stock market.`,
  image: {
    src: "/images/bernard-desk-center.webp",
    alt: "Bernard sitting at desk",
  },
  subHeadings: [
    {
      title: "Visionary Leader",
      description:
        "Bernard Whimp is building a billion-dollar business in the Australian stock market, establishing New Zealand's first equities hedge fund.",
    },
    {
      title: "Inspiring Speaker",
      description:
        "Bernard Whimp shares investment insights with shareholders, aiming to convey his deep understanding of the stock market.",
    },
  ],
};
