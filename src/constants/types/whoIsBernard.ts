import type { ButtonProps } from "@/components/Button";
import {
  GlobeAsiaAustraliaIcon,
  UserGroupIcon,
  ChartBarIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";

export interface ImageProps {
  src: string;
  alt?: string;
}

export interface SubHeadingProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface ButtonWithHref extends ButtonProps {
  href?: string;
}

export interface Props {
  heading: string;
  description?: string;
  subHeadings: SubHeadingProps[];
  buttons: ButtonWithHref[];
  image: ImageProps;
}

export type WhoIsBernardProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const WhoIsBernardDefaults: Props = {
  heading: "Who is Bernard Whimp?",
  subHeadings: [
    {
      title: "A Visionary Leader",
      description:
        "Building a billion-dollar business in the Australian stock market while establishing New Zealand's first equities hedge fund.",
      icon: GlobeAsiaAustraliaIcon,
    },
    {
      title: "An Inspiring Speaker",
      description:
        "Shares investment insights with shareholders, aiming to convey his deep understanding of the stock market.",
      icon: UserGroupIcon,
    },
    {
      title: "A Professional Stock Picker",
      description:
        "Seeks opportunities to acquire significant value without significant investment.",
      icon: ChartBarIcon,
    },
    {
      title: "Founder and CEO/CIO",
      description:
        "Bernard Whimp is the Founder and CEO/CIO of Chance Voight Investment Corporation.",
      icon: BuildingOfficeIcon,
    },
  ],
  buttons: [
    {
      title: "Learn More About Bernard Whimp",
      variant: "navbar",
      href: "/about",
    },
  ],
  image: {
    src: "/images/bernard-black-coat.webp",
    alt: "Bernard at desk",
  },
};
