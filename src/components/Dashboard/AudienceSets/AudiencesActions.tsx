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
  FormHelperText,
} from "@mui/material";
import { TrashIcon, Pencil2Icon } from "@radix-ui/react-icons";
import UpdateAudiencesets from "./UpdateAudiencesets";
import AddNewAudiences from "./AddNewAudience";

interface AudiencesActionsProps {
  asId: number;
}

export default function AudiencesActions({ asId }: AudiencesActionsProps) {
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <Stack direction={"row"} spacing={1}>
      <Tooltip title="Edit Audience Set" arrow>
        <IconButton onClick={handleDialogOpen}>
          <Pencil2Icon className="text-emerald-700 w-6 h-6" />
        </IconButton>
      </Tooltip>

      <UpdateAudiencesets
        openDialog={openDialog}
        handleDialogClose={handleDialogClose}
        asId={asId}
      />
    </Stack>
  );
}
