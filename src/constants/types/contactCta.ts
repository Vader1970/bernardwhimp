export interface ImageProps {
  src: string;
  alt?: string;
}

export type ButtonConfig = {
  title: string;
  variant: "white-bg" | "transparent-bg";
  href?: string;
};

export interface Props {
  heading: string;
  description: string;
  buttons: ButtonConfig[];
  image: ImageProps;
}

export type ContactCtaProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const ContactCtaDefaults: Props = {
  heading: "Contact Bernard Today",
  description: "Join us in achieving your investment goals.",
  buttons: [
    // { title: "Learn more", variant: "white-bg", href: "/about" },
    { title: "Get in touch", variant: "transparent-bg", href: "/contact" },
  ],
  image: {
    src: "/images/city-skyline.webp",
    alt: "City Skyline CTA",
  },
};
