import React from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";

import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import { min } from "d3";

interface ConfirmDialogProps {
  open: boolean;
  close: () => void;
  handleDelete: () => void;
  heading?: string;
  description?: string;
}

const ConfirmDialog = ({ open, close, handleDelete, heading, description }: ConfirmDialogProps) => {
  return (
    <Dialog
      open={open}
      onClose={close}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        "& .MuiDialog-paper": {
          minWidth: "400px",
        },
      }}
    >
      <DialogTitle id="alert-dialog-title">
        <Typography variant="h6">{heading ? heading : "Delete record"}</Typography>
      </DialogTitle>
      <DialogContent>
        <Typography id="alert-dialog-description">
          {description ? description : "Please confirm to delete?"}
        </Typography>
      </DialogContent>
      <DialogActions
        sx={{
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingBottom: "16px",
        }}
      >
        <Button variant="outlined" onClick={close}>
          Cancel
        </Button>
        <Button variant="contained" color="error" onClick={handleDelete}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
