// src/constants/types/hero.ts

export interface ImageProps {
  src: string;
  alt?: string;
}

export interface ButtonConfig {
  title: string;
  variant: "white-bg" | "transparent-bg";
  href?: string;
}

export interface Props {
  tagline: string;
  heading: string;
  buttons: ButtonConfig[];
  image: ImageProps;
}

export const HeroDefaults: Record<string, Props> = {
  home: {
    tagline: "Professional Stock Picker. Chance Voight CEO.",
    heading: "BERNARD WHIMP",
    buttons: [
      { title: "Learn more", variant: "white-bg" },
      { title: "Get in touch", variant: "transparent-bg", href: "#contact" },
    ],
    image: {
      src: "/images/hero2.webp",
      alt: "Bernard Whimp",
    },
  },
  chanceVoight: {
    tagline: "Meet Chance Voight",
    heading: "CHANCE VOIGHT",
    buttons: [{ title: "Learn more", variant: "white-bg" }],
    image: {
      src: "/images/hero.webp",
      alt: "Chance Voight",
    },
  },
  media: {
    tagline: "In the Media",
    heading: "MEDIA",
    buttons: [{ title: "Learn more", variant: "white-bg" }],
    image: {
      src: "/images/hero.webp",
      alt: "Media",
    },
  },
  contact: {
    tagline: "Get in Touch",
    heading: "CONTACT US",
    buttons: [
      { title: "Send a Message", variant: "white-bg", href: "#contact-form" },
    ],
    image: {
      src: "/images/hero.webp",
      alt: "Contact Us",
    },
  },
};
