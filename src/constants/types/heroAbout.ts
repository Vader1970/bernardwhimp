import { type ComponentPropsWithoutRef } from "react";

interface ImageProps {
  src: string;
  alt?: string;
}

interface HeroProps {
  description: string;
  image: ImageProps;
}

export interface HeroAboutProps
  extends ComponentPropsWithoutRef<"section">,
    Partial<HeroProps> {}

export const heroAboutDefaults: HeroProps = {
  description: `"We keep our investment capital where we can achieve outstanding returns on it - in investment situations with the right characteristics - in a concentrated portfolio of winning situations. By thinking this way we tilt the likelihood of extraordinary success steeply in our direction."`,
  image: {
    src: "/images/about-hero.webp",
    alt: "Bernard sitting at desk",
  },
};
