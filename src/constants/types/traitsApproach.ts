import { HTMLMotionProps } from "framer-motion";
import React from "react";
import { ContentSectionBaseProps } from "./contentSection";

export type TraitsApproachProps = HTMLMotionProps<"section"> &
  Partial<ContentSectionBaseProps>;

export const TraitsApproachDefaults: ContentSectionBaseProps = {
  heading: "Personal Traits & Approach",
  children: React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "p",
      { className: "text-[#374151]" },
      "Bernard also possesses a collection of key stock market personality traits necessary for success, what is believed to be prerequisites for a hedge fund principal. His relentless work capacity, laser focus, years of experience, incredible foresight, and willingness to make his own calls have proven to be very lucrative for Chance Voight as its CIO."
    ),
    React.createElement(
      "p",
      { className: "text-[#374151]" },
      "Bernard has a deep value investment style which simply means he wants his assets cheap, at a price where he can contain the downside and hold a large high conviction position. It is easy to see why it has been speculated by some that Bernard may be one of the greatest company builders and wealth creators in New Zealand today."
    )
  ),
  image: {
    src: "/images/stock-charts.webp",
    alt: "ASX Stock Charts",
  },
};
