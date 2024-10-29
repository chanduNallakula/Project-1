import "styled-components";
import { Theme } from "@mui/material/styles";
interface CustomTheme {
  custom: {
    bg: {
      main: string;
      secondary: string;
      transparent: string;
      transparentLight: string;
      dark: string;
    };
    text: {
      main: string;
      secondary: string;
    };
    border: {
      main: string;
      divider: string;
    };
  };
}
declare module "@mui/material/styles" {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
