//Component Library Footer4

import { FaXTwitter } from "react-icons/fa6";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import Link from "next/link";

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
  icon: React.ReactNode;
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

export type Footer4Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Footer4 = (props: Footer4Props) => {
  const { footerText, columnLinks, footerLinks, socialMediaLinks } = {
    ...Footer4Defaults,
    ...props,
  };
  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="cvi-container">
        <div className="grid grid-cols-1 items-center justify-center justify-items-center gap-x-[4vw] gap-y-12 pb-12 md:pb-18 lg:grid-cols-[0.25fr_1fr_0.25fr] lg:justify-between lg:gap-y-4 lg:pb-20">
          <Link
            href="/"
            className="text-2xl xl:text-[20px] lg:text-[14px] font-extrabold navbar-font lg:justify-self-start"
          >
            BERNARD WHIMP
          </Link>
          {columnLinks.map((column, index) => (
            <ul
              key={index}
              className="grid grid-flow-row grid-cols-1 items-start justify-center justify-items-center gap-6 md:grid-flow-col md:grid-cols-[max-content] md:justify-center md:justify-items-start"
            >
              {column.links.map((link, linkIndex) => (
                <li key={linkIndex} className="font-semibold group">
                  <a
                    href={link.url}
                    className="relative inline-flex overflow-hidden"
                  >
                    <span className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
                      {link.title}
                    </span>
                    <span className="absolute inset-0 translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                      {link.title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          ))}
          <div className="flex items-start justify-start justify-items-center gap-x-3 lg:justify-self-end">
            {socialMediaLinks.map((link, index) => {
              if (!link.icon) return null;

              const labels = [
                "Facebook",
                "Instagram",
                "Twitter",
                "LinkedIn",
                "YouTube",
              ];
              const ariaLabel = labels[index] || "social media";

              return (
                <a
                  key={index}
                  href={link.url}
                  className="hover:text-gray-300"
                  aria-label={`Visit our ${ariaLabel} page`}
                >
                  {link.icon}
                </a>
              );
            })}
          </div>
        </div>
        <div className="h-px w-full bg-black" />
        <div className="flex flex-col-reverse items-center justify-center justify-items-center pb-4 pt-6 text-sm md:flex-row md:gap-x-6 md:pb-0 md:pt-8">
          <p className="mt-8 md:mt-0">{footerText}</p>
          <ul className="grid grid-flow-row grid-cols-[max-content] items-center justify-center justify-items-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            {footerLinks.map((link, index) => (
              <li
                key={index}
                className="underline decoration-black underline-offset-1 "
              >
                <a href={link.url}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export const Footer4Defaults: Props = {
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
      icon: <BiLogoFacebookCircle className="size-6" />,
    },
    {
      url: "https://www.instagram.com/bernardwhimp/",
      icon: <BiLogoInstagram className="size-6" />,
    },
    {
      url: "https://x.com/i/flow/login?redirect_after_login=%2FBernard_Whimp",
      icon: <FaXTwitter className="size-6 p-0.5" />,
    },
    {
      url: "https://www.linkedin.com/in/bernard-whimp-a77872255/?originalSubdomain=nz",
      icon: <BiLogoLinkedinSquare className="size-6" />,
    },
    {
      url: "https://www.youtube.com/@bernardwhimp",
      icon: <BiLogoYoutube className="size-6" />,
    },
  ],
  footerText: "© 2025 Chance Voight Investment Partners Ltd.",
  footerLinks: [
    { title: "Privacy Policy", url: "#" },
    { title: "Cookies Settings", url: "#" },
  ],
};
