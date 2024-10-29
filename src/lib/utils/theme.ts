"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { hexToRgbNumbers } from "./styling";

import { Theme } from "@mui/material/styles";

import "styled-components";

declare module "@mui/material/styles" {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

interface CustomTheme {
  custom: {
    bg: {
      main: string;
      secondary: string;
      transparent: string;
      transparentLight: string;
      transparentDark: string;
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

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3",
      light: "#64b5f6",
      dark: "#1976d2",
      contrastText: "#fff",
    },
    secondary: {
      main: "#a90066",
      light: "#e33371",
      dark: "#ab003c",
      contrastText: "#fff",
    },
    error: {
      main: "#f44336",
      light: "#e57373",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    warning: {
      main: "#ff9800",
      light: "#ffb74d",
      dark: "#f57c00",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    info: {
      main: "#00bcd4",
      light: "#4dd0e1",
      dark: "#0097a7",
      contrastText: "#fff",
    },
    success: {
      main: "#4caf50",
      light: "#81c784",
      dark: "#388e3c",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    text: {
      primary: "#323b4b",
      secondary: "#8d9091",
      disabled: "#8d9091",
    },

    background: {
      default: "#f8f9fa",
      paper: "#ffffff",
    },

    divider: "#e9ecee",

    action: {
      active: "#323b4b",
      hover: "rgba(50, 59, 75, 0.08)",
      selected: "rgba(50, 59, 75, 0.16)",
      disabled: "rgba(32, 82, 168, 0.26)",
      disabledBackground: "rgba(50, 59, 75, 0.12)",
    },

    grey: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },

    common: {
      black: "#000",
      white: "#fff",
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
    },
    MuiInputLabel: {
      defaultProps: {
        size: "small",
      },
    },
    MuiSelect: {
      defaultProps: {
        size: "small",
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        size: "small",
      },
    },

    MuiTextField: {
      defaultProps: {
        size: "small",
      },
    },
  },

  spacing: 8,
  typography: {
    fontFamily: roboto.style.fontFamily,
    button: {
      textTransform: "none",
    },
  },

  custom: {
    bg: {
      main: "#ffffff",
      secondary: "#f8f9fa",
      transparent: "rgba(33, 150, 243,0.3)",
      transparentLight: "rgba(100, 181, 246,0.3)",
      dark: `rgba(${hexToRgbNumbers("#ffffff")},0.1)`,
    },
    text: {
      main: "#323b4b",
      secondary: "#8d9091",
    },
    border: {
      main: "#e9ecee",
      divider: `rgba(${hexToRgbNumbers("#ffffff")},0.3)`,
    },
  },
});

export default theme;
