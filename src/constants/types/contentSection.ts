import { HTMLMotionProps } from "framer-motion";
import React from "react";

export interface ImageProps {
  src: string;
  alt?: string;
}

export interface ContentSectionBaseProps {
  heading: string;
  children: React.ReactNode;
  image: ImageProps;
}

export type ContentSectionProps = HTMLMotionProps<"section"> &
  ContentSectionBaseProps;
