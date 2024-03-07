"use client";

import { baseTheme } from "@src/styles/tokens/mantine";
import { components } from "@src/styles/components";

/** Combined base theme with default component overrides */
export const theme = {
  ...baseTheme,
  components,
};
