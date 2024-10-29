import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
import ViewCarouselOutlinedIcon from "@mui/icons-material/ViewCarouselOutlined";

interface TableViewToggleProps {
  alignment: string;
  setAlignment: React.Dispatch<React.SetStateAction<"table" | "cards">>;
}

const TableViewToggle = ({ alignment, setAlignment }: TableViewToggleProps) => {
  const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setAlignment(newAlignment as "table" | "cards");
  };

  return (
    <ToggleButtonGroup value={alignment} color="primary" exclusive onChange={handleChange}>
      <ToggleButton value="cards">
        <ViewCarouselOutlinedIcon />
      </ToggleButton>
      <ToggleButton value="table">
        <WindowOutlinedIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default TableViewToggle;
