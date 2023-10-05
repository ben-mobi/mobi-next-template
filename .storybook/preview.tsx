// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import React, { PropsWithChildren } from "react";
import { theme } from "../src/styles/theme";
import { MantineProvider } from "@mantine/core";
import localFont from "next/font/local";

// Have to load localFont for storybook using different paths than the rest of the app
const dmSans = localFont({
  src: [
    {
      path: "../fonts/DM_Sans/DMSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/DM_Sans/DMSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/DM_Sans/DMSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/DM_Sans/DMSans-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../fonts/DM_Sans/DMSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/DM_Sans/DMSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--DM-Sans",
});

const radial = localFont({
  src: [
    {
      path: "../fonts/Radial-Family/Radial-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Radial-Family/Radial-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/Radial-Family/Radial-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Radial-Family/Radial-SemiBoldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../fonts/Radial-Family/Radial-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Radial-Family/Radial-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/Radial-Family/Radial-Black.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/Radial-Family/Radial-BlackItalic.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../fonts/Radial-Family/Radial-Heavy.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/Radial-Family/Radial-HeavyItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--Radial",
});

const FontVariableSetter = (props: PropsWithChildren) => {
  React.useEffect(() => {
    document.documentElement.classList.add(dmSans.variable);
    document.documentElement.classList.add(radial.variable);
  }, []);

  return <>{props.children}</>;
};

export const decorators = [
  (renderStory) => (
    <FontVariableSetter>
      <MantineProvider theme={theme}>{renderStory()}</MantineProvider>
    </FontVariableSetter>
  ),
];
