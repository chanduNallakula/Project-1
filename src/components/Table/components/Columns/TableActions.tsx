import React from "react";
import PropTypes from "prop-types";

// Material-UI Components
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { TrashIcon, Pencil2Icon } from "@radix-ui/react-icons";

type TableActionsProps = {
  disabled: boolean;
  editTitle: string;
  deleteTitle: string;
  handleEditOpen: () => void;
  handleDeleteOpen: () => void;
};

const TableActions = ({
  disabled,
  editTitle,
  deleteTitle,
  handleEditOpen,
  handleDeleteOpen,
}: TableActionsProps) => {
  return (
    <Stack direction={"row"} spacing={1}>
      {disabled ? (
        <IconButton disabled={disabled} onClick={disabled ? () => {} : handleEditOpen}>
          <Pencil2Icon className={`text-emerald-700 w-6 h-6 ${disabled && "!text-gray-300"}`} />
        </IconButton>
      ) : (
        <Tooltip title={editTitle} arrow>
          <IconButton disabled={disabled} onClick={disabled ? () => {} : handleEditOpen}>
            <Pencil2Icon className={`text-emerald-700 w-6 h-6 ${disabled && "!text-gray-300"}`} />
          </IconButton>
        </Tooltip>
      )}
      {disabled ? (
        <IconButton disabled={disabled} onClick={disabled ? () => {} : handleDeleteOpen}>
          <TrashIcon className={`text-red-500 w-6 h-6 ${disabled && "!text-gray-300"}`} />
        </IconButton>
      ) : (
        <Tooltip title={deleteTitle} arrow>
          <IconButton disabled={disabled} onClick={disabled ? () => {} : handleDeleteOpen}>
            <TrashIcon className={`text-red-500 w-6 h-6 ${disabled && "!text-gray-300"}`} />
          </IconButton>
        </Tooltip>
      )}
    </Stack>
  );
};

export default TableActions;
