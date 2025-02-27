//Layout 91
//Bernard Whimp Documentary
"use client";

import Image from "next/image";
import { VideoIframe } from "@relume_io/relume-ui";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@relume_io/relume-ui";
import { FaCirclePlay } from "react-icons/fa6";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { motion } from "framer-motion";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

import {
  BernardDocumentaryProps,
  BernardDocumentaryDefaults,
} from "../constants/types/bernardDocumentary";

export const BernardDocumentary = (props: BernardDocumentaryProps) => {
  const { image, video } = {
    ...BernardDocumentaryDefaults,
    ...props,
  };

  const { isVisible, elementRef } = useFadeInOnScroll();

  return (
    <>
      <motion.div
        ref={elementRef}
        className="bg-[#ffffff]"
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, translateY: isVisible ? 0 : 20 }}
        transition={{ duration: 0.5 }}
      >
        <section id="layout91" className="cvi-container">
          <div>
            <Dialog>
              <DialogTrigger asChild>
                <button className="relative flex w-full items-center justify-center">
                  <div className="relative w-full h-0 pb-[56.25%]">
                    <Image
                      src={image.src}
                      alt={image.alt || "Image"}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover rounded-lg shadow-large"
                    />
                  </div>
                  <span className="absolute inset-0 z-10" />
                  <FaCirclePlay className="absolute z-20 size-6 sm:size-16 text-black bg-white rounded-full" />
                </button>
              </DialogTrigger>
              <DialogContent>
                <VisuallyHidden>
                  <DialogTitle>Video Player</DialogTitle>
                </VisuallyHidden>
                <VideoIframe video={video} />
              </DialogContent>
            </Dialog>
          </div>
        </section>
      </motion.div>
      <hr className="border-t border-gray-200" />
    </>
  );
};
