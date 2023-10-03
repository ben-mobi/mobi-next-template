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

const FontVariableSetter = (props: PropsWithChildren) => {
  React.useEffect(() => {
    document.documentElement.classList.add(dmSans.variable);
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
