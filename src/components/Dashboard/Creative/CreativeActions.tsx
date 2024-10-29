import React, { useState } from "react";
import { IconButton, Stack, Tooltip } from "@mui/material";
import { TrashIcon, Pencil2Icon } from "@radix-ui/react-icons";
import CreativeUpdatedMain from "./EditCreatives";

interface CreativeActionsProps {
  cbId: number;
}

const CreativeActions: React.FC<CreativeActionsProps> = ({ cbId }) => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleDelete = () => {
    console.log(`Deleting creative with id: ${cbId}`);
  };

  return (
    <>
      <Stack direction={"row"} spacing={1}>
        <Tooltip title="Edit Creative" arrow>
          <IconButton onClick={handleDialogOpen}>
            <Pencil2Icon className="text-emerald-700 w-6 h-6" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Delete Creative" arrow>
          <IconButton onClick={handleDelete}>
            <TrashIcon className="text-red-500 w-6 h-6" />
          </IconButton>
        </Tooltip>
      </Stack>

      <CreativeUpdatedMain
        openDialog={openDialog}
        handleDialogClose={handleDialogClose}
        cbId={cbId}
      />
    </>
  );
};

export default CreativeActions;
