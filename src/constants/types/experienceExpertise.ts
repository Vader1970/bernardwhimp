import { HTMLMotionProps } from "framer-motion";

export interface ImageProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

export interface Props {
  heading: string;
  description: string;
  image: ImageProps;
}

export type ExperienceExpertiseProps = HTMLMotionProps<"section"> &
  Partial<Props>;

export const ExperienceExpertiseDefaults: Props = {
  heading: "Experience & Expertise",
  description:
    "He has accumulated well over an impressive 30 years' experience in share investment, stock markets, commercial property investment and development, commercial property financing and mortgage lending, property, and securities law. Naturally entrepreneurial, he is well suited to building successful businesses, and has done so throughout his professional life.",
  image: {
    src: "/images/bernard-tracy-helicopter.webp",
    alt: "Bernard Whimp and Tracy Macdonald in front of the Chance Voight Helicopter",
  },
};
