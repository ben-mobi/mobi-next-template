import localFont from "next/font/local";

// Font loader is placed at the project root to make paths match with storybook
export const radial = localFont({
  src: [
    {
      path: "../../public/fonts/Radial-Family/Radial-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Radial-Family/Radial-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Radial-Family/Radial-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Radial-Family/Radial-SemiBoldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/Radial-Family/Radial-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Radial-Family/Radial-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/Radial-Family/Radial-Black.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Radial-Family/Radial-BlackItalic.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../../public/fonts/Radial-Family/Radial-Heavy.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/Radial-Family/Radial-HeavyItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--Radial",
});
