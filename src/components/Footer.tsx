//Component Library Footer4
import Link from "next/link";
import { FooterProps, FooterDefaults } from "../constants/types/footer";

export const Footer = (props: FooterProps) => {
  const { footerText, columnLinks, footerLinks, socialMediaLinks } = {
    ...FooterDefaults,
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
                  target="_blank"
                  rel="noopener noreferrer"
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
