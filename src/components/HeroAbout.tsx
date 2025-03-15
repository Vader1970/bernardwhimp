//About page header
import Image from "next/image";
import {
  type HeroAboutProps,
  heroAboutDefaults,
} from "@/constants/types/heroAbout";

export function HeroAbout({
  description,
  image,
  ...sectionProps
}: HeroAboutProps) {
  const heroAboutDescription = description ?? heroAboutDefaults.description;
  const heorAboutImage = { ...heroAboutDefaults.image, ...image };

  return (
    <section
      id="aboutHero"
      className="flex h-svh min-h-svh flex-col"
      {...sectionProps}
    >
      <div className="relative flex-1">
        <div className="absolute inset-0 -z-10">
          <Image
            src={heorAboutImage.src}
            alt={heorAboutImage.alt || "image"}
            priority
            quality={85}
            fill
            sizes="100vw"
            className="absolute inset-0 size-full object-cover object-top"
          />
        </div>
      </div>
      <div className="bg-black">
        <div className="cvi-container py-12 md:py-20">
          <div className="flex flex-col items-center justify-center">
            <p className="text-base text-center text-white md:text-2xl">
              {heroAboutDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
