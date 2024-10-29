import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import MapIcon from "@mui/icons-material/MapRounded";
import EditLocationAltIcon from "@mui/icons-material/EditLocationRounded";

type MyGeofencesActionsProps = {
  id: string;
  onViewGeofence: (id: string) => void;
  onEditGeofence: (id: string) => void;
};

const MyGeofencesActions = ({ id, onViewGeofence, onEditGeofence }: MyGeofencesActionsProps) => {
  return (
    <div>
      <Tooltip title="view geofence">
        <IconButton
          onClick={() => {
            onViewGeofence(id);
          }}
        >
          <MapIcon sx={{ color: "#0984e3" }} />
        </IconButton>
      </Tooltip>
      <Tooltip title="edit geofence">
        <IconButton
          onClick={() => {
            onEditGeofence(id);
          }}
        >
          <EditLocationAltIcon sx={{ color: "#0984e3" }} />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default MyGeofencesActions;
