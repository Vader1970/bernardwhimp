//Component Library Header5

"use client";
import { Button } from "@/components/Button";
import Image from "next/image";
import { HeroDefaults, Props } from "@/constants/types/hero";

export type HeroProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Hero = (props: HeroProps) => {
  const { tagline, heading, buttons, image } = {
    ...HeroDefaults.home, // Default to home if no props are provided
    ...props,
  };

  const handleLearnMore = () => {
    const layout102Element = document.getElementById("content7");
    layout102Element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="relume" className="relative h-screen">
      <div className="cvi-container h-full">
        <div className="hero-wrapper">
          <div className="hero-content-wrapper">
            <p className="hero-tagline">{tagline}</p>
            <h1 className="hero-heading">{heading}</h1>
            <p className="hero-description">
              Bernard Whimp has over 30 years experience in share investment and
              stock markets, commercial property investment and development,
              commercial property financing and mortgage lending, property{" "}
              <br />
              and securities law.
            </p>
            <div className="hero-buttons-wrapper">
              {buttons.map((button, index) =>
                button.title === "Learn more" ? (
                  <Button key={index} {...button} onClick={handleLearnMore}>
                    {button.title}
                  </Button>
                ) : (
                  <Button key={index} {...button} href="/contact">
                    {button.title}
                  </Button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 w-full h-auto">
        <Image
          src={image.src}
          alt={image.alt || "Background image"}
          quality={100}
          fill
          sizes="100vw"
          className="object-cover object-[65%_center] md:object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>
    </section>
  );
};
