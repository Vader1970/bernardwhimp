import { ButtonProps } from "@/components/Button";

export interface ImageProps {
  src: string;
  alt?: string;
}

export interface ChanceVoightFounderProps {
  heading: string;
  paragraphs: string[];
  buttons: ButtonProps[];
  image: ImageProps;
}

export const ChanceVoightFounderDefaults: ChanceVoightFounderProps = {
  heading: "Chance Voight Founder",
  paragraphs: [
    "Chance Voight was established in 2018 with the ambition to develop a profitable New Zealand hedge fund. Prior to his re-orientation towards the share market over a decade ago, Bernard accumulated extensive experience as a financier and investor in real estate transactions as well as building financial and investment-related businesses. Chance Voight was founded as a result of Bernard's cumulative experience and an intensive decade of experience as a full-time professional share investor in the Australian stock market (ASX).",
    "Currently several years into its development, Chance Voight has established itself as a trusted institution and has experienced a steep upward trajectory towards its billion-dollar investment business ambitions.",
    "In addition to the Chance Voight success, Bernard is also possibly one of the most explanatory speakers on the stock market in New Zealand today. Those that have heard him speak at one of his seminars have been fascinated by the way he thinks about the stock market and his deep value style.",
  ],
  buttons: [
    {
      title: "Learn More About Chance Voight",
      variant: "navbar",
      href: "/chance-voight",
    },
  ],
  image: {
    src: "/images/high-street-building.webp",
    alt: "The Chance Voight building",
  },
};
