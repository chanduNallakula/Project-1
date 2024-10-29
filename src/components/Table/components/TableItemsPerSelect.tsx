import { MenuItem, Select, Typography } from "@mui/material";
import React from "react";

interface TableItemsPerSelectProps {
  text: string;
  itemsPerPage: number;
  setItemsPerPage: (value: number) => void;
  itemsPerPageOptions: number[];
}

const TableItemsPerSelect = ({
  text,
  itemsPerPage,
  setItemsPerPage,
  itemsPerPageOptions,
}: TableItemsPerSelectProps) => {
  return (
    <div>
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <Typography className="text-sm"> {text ? text : "Items per page"}: </Typography>
          <Select
            size="small"
            value={`${itemsPerPage}`}
            onChange={(event) => {
              setItemsPerPage(Number(event.target.value));
            }}
          >
            {itemsPerPageOptions.map((pageSize) => (
              <MenuItem key={pageSize} value={`${pageSize}`}>
                {pageSize}
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>
    </div>
  );
};

export default TableItemsPerSelect;
