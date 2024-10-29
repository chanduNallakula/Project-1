import CreateCampaign from "@/components/Campaign/CreateCampaign";

interface MoreSettingsDrawerProps {
  toggleDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenCampaignsDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

function CreateNewCampaignDrawer({
  toggleDrawer,
  setOpenCampaignsDrawer,
}: MoreSettingsDrawerProps) {
  return <CreateCampaign setOpenCampaignsDrawer={setOpenCampaignsDrawer} setOpen={toggleDrawer} />;
}

export default CreateNewCampaignDrawer;
