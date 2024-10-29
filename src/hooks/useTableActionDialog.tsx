import React from "react";

const useTableActionDialog = () => {
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return {
    openDialog,
    handleOpenDialog,
    handleCloseDialog,
  };
};

export default useTableActionDialog;
