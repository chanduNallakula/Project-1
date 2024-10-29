import React from "react";
import { IconButton, Stack, Tooltip } from "@mui/material";
import { TrashIcon, Pencil2Icon } from "@radix-ui/react-icons";
import { Table } from "lucide-react";
import TableActions from "@/components/Table/components/Columns/TableActions";
import ConfirmDialog from "@/components/Dialogs/ConfirmDialog";
import useTableActionDialog from "@/hooks/useTableActionDialog";
import { useLeftSideDrawerStore } from "@/store/leftSideDrawerStore";
import MenuComponentLayer from "../MenuComponentLayer";
import EditCampaign from "@/components/CreateCampaign2/EditCampaign";
import usePostCall from "@/hooks/usePostCall";
import { useQuery } from "@tanstack/react-query";
import { getAllMyCampaigns } from "@/apis/myCampaigns";
import toast from "react-hot-toast";

interface CampaignActionsProps {
  cId: number;
}

export default function CampaignActions({ cId }: CampaignActionsProps) {
  const {
    openDialog: openDelete,
    handleOpenDialog: handleOpenDelete,
    handleCloseDialog: handleCloseDelete,
  } = useTableActionDialog();

  const {
    refetch: refetchCampaigns,
    data: campaigns,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["myCampaigns"],
    queryFn: () => getAllMyCampaigns(),
  });

  const { postCall: deleteCall, loading: deleteLoading, error: deleteError } = usePostCall();

  const handleEditCampaign = () => {
    setCampaignDrawerStore(false);
    setAddNewCampaignDrawerStore(false);
    setEditCampaignDrawerStore(true);
    setSelectedCampaignStore(cId);
  };
  const handleDeleteCampaign = async () => {
    const formData = new FormData();
    formData.append("cId", cId.toString());

    try {
      const response = await deleteCall("/campaigns/delete", formData);

      if (response?.data.status === "success") {
        toast.success(response?.data.message);
        handleCloseDelete();
        console.log(response?.data.message);
        refetchCampaigns();
      } else {
        console.log(response?.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const disabled = false;

  const setCampaignDrawerStore = useLeftSideDrawerStore.use.setMyCampaignsDrawer();

  const setEditCampaignDrawerStore = useLeftSideDrawerStore.use.setEditCampaignDrawer();

  const setAddNewCampaignDrawerStore = useLeftSideDrawerStore.use.setAddNewCampaignDrawer();

  const setSelectedCampaignStore = useLeftSideDrawerStore.use.setSelectedCampaign();

  return (
    <>
      <TableActions
        disabled={disabled}
        editTitle="Edit User"
        deleteTitle="Delete User"
        handleEditOpen={handleEditCampaign}
        handleDeleteOpen={handleOpenDelete}
      />
      <ConfirmDialog
        heading="Delete Campaign"
        open={openDelete}
        close={handleCloseDelete}
        handleDelete={handleDeleteCampaign}
      />
    </>
  );
}
