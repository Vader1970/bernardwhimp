import { createElement, ReactNode } from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

interface ImageProps {
  url?: string;
  src: string;
  alt?: string;
}

interface Links {
  title: string;
  url: string;
}

interface ColumnLinks {
  links: Links[];
}

interface SocialMediaLinks {
  url: string;
  icon: ReactNode; // Correctly using ReactNode for JSX elements
}

interface FooterLink {
  title: string;
  url: string;
}

interface Props {
  logo: ImageProps;
  columnLinks: ColumnLinks[];
  socialMediaLinks: SocialMediaLinks[];
  footerText: string;
  footerLinks: FooterLink[];
}

export type FooterProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const FooterDefaults: Props = {
  logo: {
    url: "#",
    src: "https://d22po4pjz3o32e.cloudfront.net/logo-image.svg",
    alt: "Logo image",
  },
  columnLinks: [
    {
      links: [
        { title: "Home", url: "/" },
        { title: "About", url: "/about" },
        { title: "Chance Voight", url: "/chance-voight" },
        { title: "Media", url: "/media" },
        { title: "Contact", url: "/contact" },
      ],
    },
  ],
  socialMediaLinks: [
    {
      url: "https://www.facebook.com/people/Bernard-Whimp/pfbid02yaQKJVAzd1SGKCx5tFB9fD7P79tcUkgrShGdTJJGPuE5YpAMTwrahtqzg7F4WRWal/",
      icon: createElement(BiLogoFacebookCircle, { className: "size-6" }),
    },
    {
      url: "https://www.instagram.com/bernardwhimp/",
      icon: createElement(BiLogoInstagram, { className: "size-6" }),
    },
    {
      url: "https://x.com/i/flow/login?redirect_after_login=%2FBernard_Whimp",
      icon: createElement(FaXTwitter, { className: "size-6 p-0.5" }),
    },
    {
      url: "https://www.linkedin.com/in/bernard-whimp-a77872255/?originalSubdomain=nz",
      icon: createElement(BiLogoLinkedinSquare, { className: "size-6" }),
    },
    {
      url: "https://www.youtube.com/@bernardwhimp",
      icon: createElement(BiLogoYoutube, { className: "size-6" }),
    },
  ],
  footerText: "© 2025 Chance Voight Investment Partners Ltd.",
  footerLinks: [
    { title: "Privacy Policy", url: "#" },
    { title: "Cookies Settings", url: "#" },
  ],
};
