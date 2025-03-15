import { HTMLMotionProps } from "framer-motion";
import React from "react";

export interface ImageProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

export interface Props {
  heading: string;
  children: React.ReactNode;
  image: ImageProps;
}

export type InvestmentPhilosophyProps = HTMLMotionProps<"section"> &
  Partial<Props>;

export const InvestmentPhilosophyDefaults: Props = {
  heading: "Investment Philosophy & Achievements",
  children: React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "p",
      { className: "text-[#374151] mb-4" },
      "Bernard has channelled his personal successes on the Australian stock market (ASX) to success for both Chance Voight and its investors. Investors and Journalists alike are instantly struck by Bernard's capacity to deeply understand the stock market, the businesses listed on it and his deep value investment style."
    ),
    React.createElement(
      "p",
      { className: "text-[#374151]" },
      "Chance Voight has global ambitions and Bernard has paved the way by trademarking the Chance Voight name across all major financial centres in the world. This is one of the many strategic accomplishments the firm has rolled out as it builds momentum. Chance Voight has moved out of its initial development phase and has a deeply held conviction that they are on track towards an incredible business. Having all of its key systems built, Chance Voight's established business model is scaling up to the billion-dollar mark within what they believe will be a four-year timeframe."
    )
  ),
  image: {
    src: "/images/asx-building.webp",
    alt: "ASX Building",
  },
};
