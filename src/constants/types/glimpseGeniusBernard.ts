import { HTMLMotionProps } from "framer-motion";
import React from "react";

export interface ImageProps {
  src: string;
  alt?: string;
}

export interface Props {
  heading: string;
  children: React.ReactNode;
  image: ImageProps;
}

export type GlimpseGeniusBernardProps = HTMLMotionProps<"section"> &
  Partial<Props>;

export const GlimpseGeniusBernardDefaults: Props = {
  heading: "A Glimpse into the Genius of Bernard Whimp",
  children: React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "p",
      { className: "text-[#374151]" },
      "Bernard is the founder and director of Chance Voight Investment Partners Limited, shouldering the responsibilities of Chief Investment Officer (CIO). Furthermore, he undertakes the roles of director and Chief Executive Officer (CEO) at Chance Voight Investment Corporation Limited (CVI Corporation). Beyond these central positions, Bernard extends his directorial influence on all subsidiary companies under the CVI Corporation umbrella."
    ),
    React.createElement(
      "p",
      { className: "text-[#374151]" },
      "Bernard is currently several years into building a billion-dollar investment company, Chance Voight Investment Partners. He is both the Chief Executive Officer (CEO) and Chief Investment Officer (CIO) and established the company on the back of his experience as a full-time professional share investor."
    )
  ),
  image: {
    src: "/images/bernard-melbourne.webp",
    alt: "Bernard Whimp in Melbourne",
  },
};
