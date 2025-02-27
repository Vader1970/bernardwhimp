//Tesimonial 7
//Bernards Quotes
"use client";
import Image from "next/image";
import React from "react";
import type { CarouselApi } from "@relume_io/relume-ui";
import { useState, useEffect } from "react";
import clsx from "clsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import { motion } from "framer-motion";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";
// ... existing code ...
import {
  Testimonial,
  Props,
  BernardQuotesTestimonialDefaults,
} from "../constants/types/bernardQuotesTestimonial";
// ... existing code ...

export type BernardQuotesTestimonialProps =
  React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const BernardQuotesTestimonial = (
  props: BernardQuotesTestimonialProps
) => {
  const { testimonials } = {
    ...BernardQuotesTestimonialDefaults,
    ...props,
  };

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const { isVisible, elementRef } = useFadeInOnScroll();

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    const interval = setInterval(() => {
      api.scrollTo(current % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [api, current, testimonials.length]);

  return (
    <>
      <motion.section
        ref={elementRef}
        id="testimonial7"
        className="cvi-container overflow-hidden"
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, translateY: isVisible ? 0 : 20 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          {/* for all available options: https://www.embla-carousel.com/api/options/ */}
          <Carousel
            setApi={setApi}
            opts={{
              loop: true,
              align: "start",
            }}
            className="overflow-hidden"
          >
            <div className="relative">
              <CarouselContent className="ml-0 md:mx-3">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-0 md:basis-full md:px-16"
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-black text-white mt-8 hidden md:flex md:size-14 hover:bg-transparent hover:text-black transition-all duration-300" />
              <CarouselNext className="bg-black text-white mt-8 hidden md:flex md:size-14 hover:bg-transparent hover:text-black transition-all duration-300" />
            </div>
            <div className="mt-[30px] flex items-center justify-center md:mt-[46px]">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={clsx(
                    "relative mx-2 inline-block size-4 rounded-full",
                    {
                      "bg-black": current === index + 1,
                      "bg-[#ADB5BD]": current !== index + 1,
                    }
                  )}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </motion.section>
      <hr className="border-t border-gray-200" />
    </>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="mx-auto flex w-full max-w-lg flex-col items-center text-center">
      <blockquote className="text-xl font-bold md:text-2xl">
        {testimonial.quote}
      </blockquote>
      <div className="mt-6 flex flex-col items-center justify-center md:mt-8">
        <div className="mb-3 md:mb-4">
          <Image
            src={testimonial.avatar.src}
            alt={testimonial.avatar.alt || "Avatar"}
            className="size-16 min-h-16 min-w-16 rounded-full object-cover"
            width={64}
            height={64}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-semibold">{testimonial.name}</p>
          <p>
            <span>{testimonial.position}</span>,{" "}
            <span>{testimonial.companyName}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
