"use client";
import React from "react";
import { Box, MenuItem, Typography } from "@mui/material";

const Sidebar: React.FC<{
  selectedItem: string;
  onSelect: (index: string) => void;
}> = ({ selectedItem, onSelect }) => {
  const buttonNames = ["Account", "Change Password"];

  return (
    <div>
      <Typography variant="h5">Settings</Typography>
      <br />
      {buttonNames.map((item) => (
        <MenuItem
          sx={{
            borderLeft: selectedItem === item ? "5px solid #0c85e3" : "5px solid transparent",
            color: selectedItem === item ? "#0c85e3" : "black",
            cursor: "pointer",
            padding: "10px",
          }}
          key={item}
          onClick={() => onSelect(item)}
        >
          <Typography variant="body1">{item}</Typography>
        </MenuItem>
      ))}
    </div>
  );
};

export default Sidebar;
