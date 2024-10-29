import React from "react";
import { IconButton, Stack, Tooltip } from "@mui/material";
import { TrashIcon, Pencil2Icon } from "@radix-ui/react-icons";
import TableActions from "@/components/Table/components/Columns/TableActions";
import ConfirmDialog from "@/components/Dialogs/ConfirmDialog";
import useTableActionDialog from "@/hooks/useTableActionDialog";
import { useLeftSideDrawerStore } from "@/store/leftSideDrawerStore";
import axiosClient from "@/apis/axiosClient";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

interface CampaignActionsProps {
  gfgId: number;
}

export default function GeofenceGroupActions({ gfgId }: CampaignActionsProps) {
  const {
    openDialog: openDelete,
    handleOpenDialog: handleOpenDelete,
    handleCloseDialog: handleCloseDelete,
  } = useTableActionDialog();

  const queryClient = useQueryClient();

  const handleDeletegeofencegroups = async () => {
    const formData = new FormData();
    formData.append("gfgId", gfgId.toString());

    try {
      const response = await axiosClient.post("/geofencegroups/delete", formData);

      if (response?.data.status === "success") {
        toast.success(response?.data.message);
        handleCloseDelete();
        console.log(response?.data.message);
        queryClient.invalidateQueries({ queryKey: ["myGeofenceGroups"] });
      } else {
        console.log(response?.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const disabled = false;

  const setEditGroupDrawerStore = useLeftSideDrawerStore.use.setEditGroupDrawer();
  const setGroupDrawerStore = useLeftSideDrawerStore.use.setGroupDrawer();
  const setSelectedGroupStore = useLeftSideDrawerStore.use.setSelectedGroup();

  const handleEditOpen = () => {
    setGroupDrawerStore(false);
    setSelectedGroupStore(gfgId);
    setEditGroupDrawerStore(true);
  };

  return (
    <>
      <TableActions
        disabled={disabled}
        editTitle="Edit Group"
        deleteTitle="Delete Group"
        handleEditOpen={handleEditOpen}
        handleDeleteOpen={handleOpenDelete}
      />
      <ConfirmDialog
        heading="Delete Group"
        open={openDelete}
        close={handleCloseDelete}
        handleDelete={handleDeletegeofencegroups}
      />
    </>
  );
}
