"use client";

import { motion } from "framer-motion";
import { GlobeAsiaAustraliaIcon, UserGroupIcon, ChartBarIcon, BuildingOfficeIcon } from "@heroicons/react/24/outline";

type SectionProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  heading: string;
  description: string;
};

type Props = {
  heading: string;
  description: string;
  sections: SectionProps[];
};

export type Layout298Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout298 = (props: Layout298Props) => {
  const { heading, description, sections } = {
    ...Layout298Defaults,
    ...props,
  };
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      id='Layout298'
      className='cvi-container bg-white'
    >
      <div>
        <div className='flex flex-col items-start'>
          <div className='mx-auto mb-12 max-w-[800px] md:mb-18 lg:mb-20'>
            <div>
              <h2 className='mfont-serif text-4xl text-center md:text-6xl font-bold text-navy-900 mb-6'>{heading}</h2>
            </div>
            <p className='text-navy-600 text-center text-md sm:text-lg leading-relaxed'>{description}</p>
          </div>
          <div className='grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4'>
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                    transition: { duration: 0.3 },
                  }}
                  className='flex h-full flex-col items-center bg-navy-100 rounded-lg p-6'
                >
                  <div className='mb-5 flex justify-center md:mb-6'>
                    <Icon className='h-12 w-12 text-navy-800' />
                  </div>
                  <h3 className='text-navy-900 mb-3 text-center text-xl font-bold md:mb-4'>{section.heading}</h3>
                  <p className='text-navy-600 text-center text-base leading-relaxed'>{section.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export const Layout298Defaults: Props = {
  heading: "Who is Bernard Whimp?",
  description: `Bernard Whimp is a visionary and an entrepreneur, some would refer to him as "the god of stocks". As an experienced professional stock picker, he is passionate, relentless, and strategic when it comes to the Australian stock market.`,
  sections: [
    {
      icon: GlobeAsiaAustraliaIcon,
      heading: "A Visionary Leader",
      description:
        "Building a billion-dollar business in the Australian stock market while establishing New Zealand's first equities hedge fund.",
    },
    {
      icon: UserGroupIcon,
      heading: "An Inspiring Speaker",
      description:
        "Shares investment insights with shareholders, aiming to convey his deep understanding of the stock market.",
    },
    {
      icon: ChartBarIcon,
      heading: "A Professional Stock Picker",
      description: "Seeks opportunities to acquire significant value without significant investment.",
    },
    {
      icon: BuildingOfficeIcon,
      heading: "Founder and CEO/CIO",
      description: "Bernard Whimp is the Founder and CEO/CIO of Chance Voight Investment Corporation.",
    },
  ],
};
