"use client";
import React, { use } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import useTheme from "@mui/material/styles/useTheme";
import { hexToRgb } from "@/lib/utils/styling";
import { useGoogleMapDrawingOverlays } from "@/store/googleMapStore";

interface MenuComponentLayerProps {
  persistent?: boolean;
  setOpenMainDrawer: any;
  openDrawer: any;
  setOpenDrawer: any;
  children: JSX.Element | React.ReactNode;
  autoWidth?: boolean;
  bgColor?: string;
  blur?: boolean;
}

const MenuComponentLayer = ({
  setOpenMainDrawer,
  openDrawer,
  setOpenDrawer,
  children,
  persistent,
  autoWidth,
  bgColor,
  blur,
}: MenuComponentLayerProps) => {
  const theme = useTheme();
  const overlays = useGoogleMapDrawingOverlays.use.overlays();
  const blurStyles = {
    background: "rgba(9, 132, 227, 0.45)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
  };

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Drawer
        PaperProps={{
          className: "horizontal-scrollbar-style",
          sx: {
            "&.MuiDrawer-paper": {
              padding: theme.spacing(2),
              width: autoWidth ? "auto" : "70%",
              backgroundColor: bgColor ? bgColor : theme.custom.bg.transparentLight,
              ...(blur ? blurStyles : {}),
            },
          },
        }}
        variant={persistent ? "persistent" : "temporary"}
        anchor="left"
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
          setOpenMainDrawer(true);
          overlays.forEach((overlay) => {
            overlay.overlay.setMap(null);
          });
        }}
      >
        {children}
      </Drawer>
    </Box>
  );
};

export default MenuComponentLayer;
