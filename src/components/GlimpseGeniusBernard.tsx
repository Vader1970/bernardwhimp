"use client";

//A Glimpse into the Genius of Bernard Whimp
//Layout142
import React from "react";
import {
  GlimpseGeniusBernardProps,
  GlimpseGeniusBernardDefaults,
} from "../constants/types/glimpseGeniusBernard";
import { ContentSection } from "./ContentSection";
import { ContentSectionBaseProps } from "../constants/types/contentSection";

export function GlimpseGeniusBernard(
  props: Partial<GlimpseGeniusBernardProps>
) {
  const combinedProps: ContentSectionBaseProps & { id: string } = {
    ...GlimpseGeniusBernardDefaults,
    ...props,
    id: "bernardGenius",
  };

  return <ContentSection {...combinedProps} />;
}
