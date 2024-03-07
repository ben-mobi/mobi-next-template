import { style } from "@vanilla-extract/css";
import { rem } from "@mantine/core";
import { vars } from "@src/styles/vars";

export const title = style({
  color: vars.colors.black,
  fontSize: rem(100),
  fontWeight: 700,

  selectors: {
    [vars.darkSelector]: {
      color: vars.colors.white,
    },
  },

  "@media": {
    [vars.smallerThan("md")]: {
      fontSize: rem(50),
    },
  },
});
