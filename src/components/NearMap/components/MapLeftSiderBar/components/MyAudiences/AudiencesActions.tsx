import React from "react";
import { IconButton, Stack, Tooltip } from "@mui/material";
import { TrashIcon, Pencil2Icon } from "@radix-ui/react-icons";

interface AudiencesActionsProps {
  id: string;
}

export default function AudiencesActions({ id }: AudiencesActionsProps) {
  return (
    <Stack direction={"row"} spacing={1}>
      <Tooltip title="Edit Role" arrow>
        <IconButton onClick={() => {}}>
          <Pencil2Icon className="text-emerald-700 w-6 h-6" />
        </IconButton>
      </Tooltip>

      <Tooltip title="Delete Role" arrow>
        <IconButton onClick={() => {}}>
          <TrashIcon className="text-red-500 w-6 h-6" />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}
