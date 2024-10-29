import ChoroplethMap from "@/components/Graphs/Choropleth";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import React from "react";

interface MapBottonDrawerProps {
  open: boolean;
  toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const MapBottonDrawer = ({ open, toggleDrawer }: MapBottonDrawerProps) => {
  return (
    <>
      <Button variant="contained" onClick={toggleDrawer(true)}>
        Open drawer
      </Button>
      <Drawer
        sx={{
          "& .MuiDrawer-paper": {},
        }}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
      >
        <Typography variant="h6">Choropleth Map</Typography>
        <ChoroplethMap />
      </Drawer>
    </>
  );
};

export default MapBottonDrawer;
