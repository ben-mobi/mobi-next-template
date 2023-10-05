import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "@src/styles/theme";
import { dmSans, radial } from "@src/styles/font";
import clsx from "clsx";

export const metadata = {
  title: "Mobi Next.js Template",
  description: "I am using Mantine with Next.js!",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" className={clsx(dmSans.variable, radial.variable)}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/Mobi-favicon.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
