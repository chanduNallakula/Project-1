import useMyCampaignsStore from "@/store/myCampaignsStore";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";

interface CampaignNavigationButtonsProps {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

const CampaignNavigationButtons = ({
  activeStep,
  setActiveStep,
}: CampaignNavigationButtonsProps) => {
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const campaign = useMyCampaignsStore();

  // const handleNextClick = () => {
  //   useMyCampaignsStore.getState().addCampaign();
  // };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        gap: 2,
        marginTop: 2,
      }}
    >
      <Button disabled={activeStep === 0} onClick={handleBack} variant="outlined">
        Back
      </Button>
      {activeStep === 5 ? (
        <Button variant="contained">Finish</Button>
      ) : (
        <Button disabled={activeStep === 6} onClick={handleNext} variant="contained">
          Next
        </Button>
      )}
    </Box>
  );
};

export default CampaignNavigationButtons;
