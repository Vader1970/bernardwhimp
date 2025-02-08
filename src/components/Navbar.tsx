"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "./Button";
import { useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import { RxChevronDown } from "react-icons/rx";

type ImageProps = {
  url?: string;
  alt?: string;
};

type NavLink = {
  url: string;
  title: string;
  subMenuLinks?: NavLink[];
};

type ButtonConfig = {
  title: string;
  variant: "navbar" | "white-bg" | "transparent-bg";
  href: string;
};

type Props = {
  logo: ImageProps;
  navLinks: NavLink[];
  buttons: ButtonConfig[];
};

export type NavbarProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Navbar = (props: NavbarProps) => {
  const { logo, navLinks, buttons } = {
    ...NavbarDefaults,
    ...props,
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const pathname = usePathname();

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <nav className='flex w-full items-center border-b border-border-primary bg-background-primary lg:min-h-18 lg:px-[5%]'>
      <div className='mx-auto size-full lg:grid lg:grid-cols-[0.375fr_1fr_0.375fr] lg:items-center lg:justify-between lg:gap-4'>
        <div className='flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0'>
          <Link href={logo.url || "/"} className='text-sm sm:text-lg font-extrabold'>
            BERNARD WHIMP
          </Link>
          <div className='flex items-center gap-4 lg:hidden'>
            <div>
              {buttons.map((button, index) => (
                <Link key={index} href={button.href || "/"}>
                  <Button variant={button.variant}>{button.title}</Button>
                </Link>
              ))}
            </div>
            <button
              className='-mr-2 flex size-12 flex-col items-center justify-center'
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label='Toggle mobile menu'
            >
              <motion.span
                className='my-[3px] h-0.5 w-6 bg-black'
                animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
                variants={topLineVariants}
              />
              <motion.span
                className='my-[3px] h-0.5 w-6 bg-black'
                animate={isMobileMenuOpen ? "open" : "closed"}
                variants={middleLineVariants}
              />
              <motion.span
                className='my-[3px] h-0.5 w-6 bg-black'
                animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
                variants={bottomLineVariants}
              />
            </button>
          </div>
        </div>
        {isMounted && (
          <motion.div
            variants={{
              open: {
                height: "var(--height-open, 100dvh)",
              },
              close: {
                height: "var(--height-closed, 0)",
              },
            }}
            animate={isMobileMenuOpen || !isMobile ? "open" : "close"}
            initial='close'
            exit='close'
            transition={{ duration: 0.4 }}
            className='overflow-hidden px-[5%] text-center lg:flex lg:items-center lg:justify-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]'
          >
            {navLinks.map((navLink, index) => {
              const isActive = pathname === navLink.url;
              return (
                <div key={index} className='first:pt-4 lg:first:pt-0 group relative'>
                  <Link
                    href={navLink.url || "/"}
                    className={`py-3 lg:py-0 text-md lg:px-4 lg:text-base relative overflow-hidden flex items-center justify-center ${
                      isActive ? "underline underline-offset-4" : ""
                    }`}
                    onClick={() => isMobile && setIsMobileMenuOpen(false)}
                  >
                    <span className='relative inline-flex overflow-hidden'>
                      <span className='translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12'>
                        {navLink.title}
                      </span>
                      <span className='absolute inset-0 translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0'>
                        {navLink.title}
                      </span>
                    </span>
                  </Link>
                  {navLink.subMenuLinks && (
                    <SubMenu navLink={navLink} isMobile={isMobile} setIsMobileMenuOpen={setIsMobileMenuOpen} />
                  )}
                </div>
              );
            })}
          </motion.div>
        )}
        <div className='hidden justify-self-end lg:block'>
          {buttons.map((button, index) => (
            <Link key={index} href={button.href || "/"}>
              <Button variant={button.variant}>{button.title}</Button>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

const SubMenu = ({
  navLink,
  isMobile,
  setIsMobileMenuOpen,
}: {
  navLink: NavLink;
  isMobile: boolean;
  setIsMobileMenuOpen: (value: boolean) => void;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLinkClick = () => {
    if (isMobile) {
      setIsDropdownOpen(false);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      onMouseEnter={() => !isMobile && setIsDropdownOpen(true)}
      onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}
    >
      <button
        className='flex w-full items-center justify-center gap-4 py-3 text-center text-md lg:w-auto lg:flex-none lg:justify-start lg:gap-2 lg:px-4 lg:py-2 lg:text-base'
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <span>{navLink.title}</span>
        <motion.span
          animate={isDropdownOpen ? "rotated" : "initial"}
          variants={{
            rotated: { rotate: 180 },
            initial: { rotate: 0 },
          }}
          transition={{ duration: 0.3 }}
        >
          <RxChevronDown />
        </motion.span>
      </button>
      {isDropdownOpen && (
        <AnimatePresence>
          <motion.nav
            animate={isDropdownOpen ? "open" : "close"}
            initial='close'
            exit='close'
            variants={{
              open: {
                visibility: "visible",
                opacity: "var(--opacity-open, 100%)",
                y: 0,
              },
              close: {
                visibility: "hidden",
                opacity: "var(--opacity-close, 0)",
                y: "var(--y-close, 0%)",
              },
            }}
            transition={{ duration: 0.2 }}
            className='bg-background-primary lg:absolute lg:z-50 lg:border lg:border-border-primary lg:p-2 lg:[--y-close:25%]'
          >
            {navLink.subMenuLinks?.map((subMenuLink, index) => (
              <Link
                key={index}
                href={subMenuLink.url}
                className='block py-3 text-center lg:px-4 lg:py-2 lg:text-left'
                onClick={handleLinkClick}
              >
                {subMenuLink.title}
              </Link>
            ))}
          </motion.nav>
        </AnimatePresence>
      )}
    </nav>
  );
};

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
      title: "Get in touch",
      variant: "navbar",
      href: "/contact",
    },
  ],
};

const topLineVariants = {
  open: {
    translateY: 8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: -45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};

const middleLineVariants = {
  open: {
    width: 0,
    transition: { duration: 0.1 },
  },
  closed: {
    width: "1.5rem",
    transition: { delay: 0.3, duration: 0.2 },
  },
};

const bottomLineVariants = {
  open: {
    translateY: -8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: 45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};
