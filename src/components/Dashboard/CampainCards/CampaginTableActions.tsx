import React, { useState } from "react";
import {
  IconButton,
  Stack,
  Tooltip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
} from "@mui/material";
import { TrashIcon, Pencil2Icon } from "@radix-ui/react-icons";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditNewCampaigns from "./EditNewCampaigns";
import ViewCampaigns from "./ViewCampaigns";
interface CampaginTableActionsProps {
  cId: number;
}

export default function CampaginTableActions({
  cId,
}: CampaginTableActionsProps) {
  const [openDialog, setOpenDialog] = useState(false);
  const [newopenDialog, setNewOpenDialog] = useState(false);

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };
  const handleDialogClose = () => {
    setOpenDialog(false);
  };
  const handleNewDialogOpen = () => {
    setNewOpenDialog(true);
  };
  const handleNewDialogClose = () => {
    setNewOpenDialog(false);
  };

  const handleDelete = () => {
    console.log(`Deleting audience set with ID: ${cId}`);
  };

  return (
    <Stack direction={"row"} spacing={1}>
      <Tooltip title="View campaigns" arrow>
        <IconButton onClick={handleNewDialogOpen}>
          <RemoveRedEyeIcon className="text-blue-700 w-6 h-6" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Edit campaigns" arrow>
        <IconButton onClick={handleDialogOpen}>
          <Pencil2Icon className="text-emerald-700 w-6 h-6" />
        </IconButton>
      </Tooltip>

      <Tooltip title="Delete campaigns" arrow>
        <IconButton onClick={handleDelete}>
          <TrashIcon className="text-red-500 w-6 h-6" />
        </IconButton>
      </Tooltip>

      <EditNewCampaigns
        openDialog={openDialog}
        handleDialogClose={handleDialogClose}
        cId={cId}
      />
      <ViewCampaigns
        openDialog={newopenDialog}
        handleDialogClose={handleNewDialogClose}
        cId={cId}
      />
    </Stack>
  );
}
