import Image from "next/image";

interface ImageProps {
  src: string;
  alt?: string;
}

interface Props {
  quote: string;
  avatar: ImageProps;
  name: string;
  position: string;
  companyName: string;
}

export type Testimonial1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Testimonial1 = (props: Testimonial1Props) => {
  const { quote, avatar, name, position, companyName } = {
    ...Testimonial1Defaults,
    ...props,
  };

  return (
    <div className='bg-gray-200'>
      <section id='relume' className='cvi-container'>
        <div className='container mx-auto w-full max-w-lg'>
          <div className='flex flex-col items-center text-center'>
            <blockquote className='mb-8 text-xl font-bold md:text-2xl'>{quote}</blockquote>
            <div className='mt-6 flex flex-col items-center justify-center md:mt-8'>
              <div className='mb-3 md:mb-4'>
                <Image
                  src={avatar.src}
                  alt={avatar.alt || ""}
                  width={64}
                  height={64}
                  className='size-16 min-h-16 min-w-16 rounded-full object-cover'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <p className='font-semibold'>{name}</p>
                <p>
                  <span>{position}</span>, <span>{companyName}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const Testimonial1Defaults: Props = {
  quote: `“For us stock picking can give us such massive returns we find it hard to imagine why you'd do anything else.”`,
  avatar: {
    src: "/images/bernard-testimonial.jpg",
    alt: "Bernard Whimp sitting at his desk",
  },
  name: "Bernard Whimp",
  position: "Founder and CEO/CIO",
  companyName: "Chance Voight Investment Corporation",
};
