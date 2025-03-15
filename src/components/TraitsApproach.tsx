"use client";

import { ContentSection } from "./ContentSection";
import {
  TraitsApproachProps,
  TraitsApproachDefaults,
} from "../constants/types/traitsApproach";
import { ContentSectionBaseProps } from "../constants/types/contentSection";

export function TraitsApproach(props: Partial<TraitsApproachProps>) {
  // Ensure all required props are present by combining defaults with provided props
  const combinedProps: ContentSectionBaseProps & { id: string } = {
    ...TraitsApproachDefaults,
    ...props,
    id: "traitsApproach",
  };

  return <ContentSection {...combinedProps} />;
}
