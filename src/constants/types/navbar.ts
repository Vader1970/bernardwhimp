// Define the ImageProps interface
export interface ImageProps {
  url?: string;
  alt?: string;
}

// Define the NavLink interface
export interface NavLink {
  url: string;
  title: string;
  subMenuLinks?: NavLink[];
}

// Define the ButtonConfig interface
export interface ButtonConfig {
  title: string;
  variant: "navbar" | "white-bg" | "transparent-bg";
  href: string;
}

// Define the Props interface
export interface Props {
  logo: ImageProps;
  navLinks: NavLink[];
  buttons: ButtonConfig[];
}

// Define the NavbarDefaults constant
export const NavbarDefaults: Props = {
  logo: {
    url: "/",
    alt: "Logo image",
  },
  navLinks: [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Chance Voight", url: "/chance-voight" },
    { title: "Media", url: "/media" },
  ],
  buttons: [
    {
      title: "Get in Touch",
      variant: "navbar",
      href: "/contact",
    },
  ],
};
