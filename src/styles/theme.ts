"use client";

import { createTheme } from "@mantine/core";
import { themeToVars } from "@mantine/vanilla-extract";

export const theme = createTheme({
  fontFamily: "var(--Radial)",
  headings: { fontFamily: "var(--Radial)" },
});
export const vars = themeToVars(theme);
