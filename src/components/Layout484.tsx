"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionStyle,
  MotionValue,
} from "framer-motion";

type Props = {
  heading: string;
};

export type Layout484Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

// New component to handle individual word opacity with hooks
const WordOpacity = ({
  word,
  index,
  scrollYProgress,
}: {
  word: string;
  index: number;
  scrollYProgress: MotionValue<number>;
}) => {
  const start = index * 0.025;
  const end = start + 0.025;
  const opacity = useTransform(scrollYProgress, [start, end], [0.5, 1]);

  const color = useTransform(
    scrollYProgress,
    [start, end],
    ["#000000", "#000000"]
  );

  return (
    <motion.span
      className="inline-block"
      style={{ opacity, color } as MotionStyle} // Apply color transformation
    >
      {word}
    </motion.span>
  );
};

export const Layout484 = (props: Layout484Props) => {
  const { heading } = {
    ...Layout484Defaults,
    ...props,
  };

  const headingRef = useRef<HTMLHeadingElement>(null);

  const { scrollYProgress } = useScroll({
    target: headingRef,
    offset: ["start center", "end center"],
  });

  const words = heading.split(" ");

  return (
    <section id="layout484" className="overflow-hidden">
      <div className="cvi-container">
        <h1
          ref={headingRef}
          className="text-4xl font-bold md:text-5xl lg:text-6xl"
        >
          {words.map((word, index) => (
            <React.Fragment key={index}>
              <WordOpacity
                word={word}
                index={index}
                scrollYProgress={scrollYProgress}
              />
              {index < words.length - 1 && " "}
            </React.Fragment>
          ))}
        </h1>
        <p className="mt-4 text-base">
          He has an aptitude for the area of the market known as deep value, the
          natural home of independent thinkers. Combing the market for companies
          which look like they have had a problem, assessing the dynamics at
          play across the whole economy. He understands the public consciousness
          and looks for situations where pessimism has driven the share price to
          ridiculously low levels and where it is likely to bounce back, these
          are referred to as high probability situations.
        </p>
      </div>
    </section>
  );
};

export const Layout484Defaults: Props = {
  heading: `Bernard Whimp is a visionary and an entrepreneur, some would refer to him as "the god of stocks". As an experienced professional stock picker, he is passionate, relentless, and strategic when it comes to the Australian stock market.`,
};
