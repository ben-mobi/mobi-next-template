"use client";

import { createTheme } from "@mantine/core";
import { themeToVars } from "@mantine/vanilla-extract";

export const theme = createTheme({
  fontFamily: "var(--DM-Sans)",
  headings: { fontFamily: "var(--DM-Sans)" },
});
export const vars = themeToVars(theme);
