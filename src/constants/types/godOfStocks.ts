import React from "react";

export interface GodOfStocksProps {
  heading: string;
  children: React.ReactNode;
}

export type GodOfStocksComponentProps =
  React.ComponentPropsWithoutRef<"section"> & Partial<GodOfStocksProps>;

export const GodOfStocksDefaults = {
  heading: "Described by some as the god of stocks",
  children: React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "p",
      { className: "text-lg text-black" },
      'Bernard Whimp is a visionary and an entrepreneur, some would refer to him as "the god of stocks". As an experienced professional stock picker, he is passionate, relentless, and strategic when it comes to the Australian stock market.'
    ),
    React.createElement(
      "p",
      { className: "text-[#374151] pb-4" },
      "He has an aptitude for the area of the market known as deep value, the natural home of independent thinkers. Combing the market for companies which look like they have had a problem, assessing the dynamics at play across the whole economy. He understands the public consciousness and looks for situations where pessimism has driven the share price to ridiculously low levels and where it is likely to bounce back, these are referred to as high probability situations."
    )
  ),
};
