import React from "react";

// material ui components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// icons
import CreateNewFolderRounded from "@mui/icons-material/CreateNewFolderRounded";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIosRounded";

// styles
import { DrawerCloseButton } from "./Drawer.styles";

interface DrawerHeaderProps {
  goBackText: string;
  addNewText?: string;
  hideAddNewButton?: boolean;
  setOpenCurrentDrawer?: (value: boolean) => void;
  setOpenMainDrawer?: React.Dispatch<React.SetStateAction<boolean>> | ((value: boolean) => void);
  setOpenAddNewDrawer?: (value: boolean) => void;
}

const DrawerHeader = ({
  addNewText,
  goBackText,
  hideAddNewButton,
  setOpenCurrentDrawer,
  setOpenMainDrawer,
  setOpenAddNewDrawer,
}: DrawerHeaderProps) => {
  return (
    <Box>
      <DrawerCloseButton
        onClick={() => {
          setOpenCurrentDrawer?.(false);
          setOpenMainDrawer?.(true);
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          onClick={() => {
            setOpenCurrentDrawer?.(false);
            setOpenMainDrawer?.(true);
          }}
          sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <ArrowBackIosIcon sx={{ fontSize: "30px" }} />
          <Typography sx={{ fontSize: "24px" }}>{goBackText}</Typography>
        </Box>

        {!hideAddNewButton && (
          <Button
            onClick={() => {
              setOpenAddNewDrawer?.(true);
              setOpenCurrentDrawer?.(false);
              setOpenMainDrawer?.(false);
            }}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            type="button"
            variant="contained"
            style={{ marginRight: "50px" }}
          >
            <CreateNewFolderRounded sx={{ fontSize: "18px" }} />
            &nbsp; {addNewText}
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default DrawerHeader;
