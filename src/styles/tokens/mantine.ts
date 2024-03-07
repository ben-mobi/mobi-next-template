"use client";

import {
  DefaultMantineColor,
  MantineColorsTuple,
  createTheme,
  rem,
} from "@mantine/core";

type ExtendedCustomColors =
  | "primaryTonal"
  | "secondaryTonal"
  | "neutrals"
  | "variations"
  | "overlayTransparent"
  | "categorical"
  | "functionals"
  | DefaultMantineColor;

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, MantineColorsTuple>;
  }
}
/** Defines base values for the mantine theme, using our brand tokens */
export const baseTheme = createTheme({
  fontFamily: "var(--Radial)",
  headings: { fontFamily: "var(--Radial)", fontWeight: "400" },
  spacing: {
    none: rem(0),
    xs: rem(4),
    sm: rem(8),
    md: rem(16),
    lg: rem(24),
    xl: rem(32),
    "2xl": rem(40),
  },
  radius: {
    none: rem(0),
    sm: rem(4),
    md: rem(8),
    lg: rem(16),
    xl: rem(32),
    full: rem(360),
  },
  shadows: {
    xs: "0px 0px 2px 2px rgba(150, 150, 150, 0.20)",
    sm: "0px 2px 4px 0px rgba(150, 150, 150, 0.20)",
    smBottom: "0px -2px 4px 0px rgba(150, 150, 150, 0.20)",
    md: "0px 4px 6px 2px rgba(150, 150, 150, 0.20)",
    lg: "0px 4px 8px 4px rgba(150, 150, 150, 0.20)",
    xl: "0px 4px 8px 4px rgba(150, 150, 150, 0.20)",
  },
  primaryColor: "primaryTonal",
  primaryShade: 7,
  white: "#FFFFFF",
  black: "#1A1A1A",
  colors: {
    primaryTonal: [
      "#EAE6EB",
      "#BEB3C2",
      "#9E8EA4",
      "#725A7B",
      "#573A61",
      "#2D093A",
      "#22072C",
      "#200629",
      "#190520",
      "#130418",
    ],
    secondaryTonal: [
      "#FFF0EB",
      "#FFD0C1",
      "#FFBAA3",
      "#FF9A7A",
      "#FF8660",
      "#FF6838",
      "#E85F33",
      "#B54A28",
      "#8C391F",
      "#6B2C18",
    ],
    neutrals: [
      "#FBFBFB", // 0
      "#F1F1F1", // 1
      "#C8C8C8", // 2
      "#969696", // 3
      "#F1F0EF", // brand (4)
      "#FFFFFF", // white (5)
      "#404040", // black (6)
      "#404040",
      "#404040",
      "#404040",
    ],
    variations: [
      "#2D093A", // colors/primary/00
      "#A779FF", // colors/primary/01
      "#E6DDFE", // colors/primary/02
      "#FF6838", // colors/secondary/00
      "#000000", // colors/secondary/01
      "#000000", // colors/secondary/02
      "#000000",
      "#000000",
      "#000000",
      "#000000",
    ],
    overlayTransparent: [
      "#4040400d", // alpha 5%
      "#4040401a", // alpha 10%
      "#40404033", // alpha 20%
      "#4040404d", // alpha 30%
      "#40404066", // alpha 40%
      "#40404080", // alpha 50%
      "#40404099", // alpha 60%
      "#404040b3", // alpha 70%
      "#404040cc", // alpha 80%
      "#404040e6", // alpha 90%
    ],
    // For colors such as `color-dining` or `color-activity`
    categorical: [
      "#924DD2", // color-stay
      "#C8C8C8", // color-travel
      "#E0732F", // color-food
      "#91BEEA", // color-activity
      "#8E8D8D", // color-blocked
      "#832DA4", // event-main
      "#E6DDFE", // event-other
      "#000000",
      "#000000",
      "#000000",
    ],
    functionals: [
      "#D70000", // colors/functionals/error
      "#06A35C", // colors/functionals/success
      "#000000",
      "#000000",
      "#000000",
      "#E0732F", // colors/dataviz/categorical/00
      "#D85287", // colors/dataviz/categorical/01
      "#9D2B9C", // colors/dataviz/categorical/02
      "#924DD2", // colors/dataviz/categorical/03
      "#91BEEA", // colors/dataviz/categorical/04
    ],
  },
});
