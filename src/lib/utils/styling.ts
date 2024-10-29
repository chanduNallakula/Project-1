import { hexToRgb as HexToRgb } from "@mui/material";

export const colors = {
  background: {
    main: "#ffffff",
    secondary: "#f8f9fa",
  },
  text: {
    main: "#323b4b",
    secondary: "#8d9091",
  },
  border: {
    main: "#e9ecee",
  },
};

export const hexToRgb = (hex: string) => {
  return HexToRgb(hex);
};

export const hexToRgbNumbers = (hex: string) => {
  const rgb = hexToRgb(hex);
  return rgb
    .replace(/rgb\(|\)/g, "")
    .split(",")
    .map((color) => parseInt(color));
};
