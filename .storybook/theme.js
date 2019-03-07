import { create } from "@storybook/theming";
import logo from "../src/logo-white.svg";

export default create({
  // Is this a 'light' or 'dark' theme?
  base: "dark",

  // Color palette
  colorPrimary: "red", // primary color
  colorSecondary: "#5670ED", // secondary color

  // UI
  appBg: "#2C4CE8",
  appContentBg: "white",
  appBorderColor: "#D7DCF8",
  appBorderRadius: 6,

  // Fonts
  fontBase: '"Inter", sans-serif',
  fontCode: "Monaco, monospace",

  // Text colors
  textColor: "#FFFFFF",
  textInverseColor: "#333333",

  // Toolbar default and active colors
  barTextColor: "#999999",
  barSelectedColor: "#2C4CE8",
  barBg: "white",

  // Form colors
  inputBg: "white",
  inputBorder: "rgba(0,0,0,.1)",
  inputTextColor: "#333333",
  inputBorderRadius: 4,

  // Brand logo/text
  brandImage: logo
});
