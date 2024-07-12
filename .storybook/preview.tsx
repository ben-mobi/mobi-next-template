// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import "../src/styles/css/global.css";
import "./storybook-fonts.css";
import React from "react";
import { theme } from "../src/styles/theme";
import { MantineProvider } from "@mantine/core";

export const decorators = [
  (renderStory) => (
    <MantineProvider theme={theme}>{renderStory()}</MantineProvider>
  ),
];
