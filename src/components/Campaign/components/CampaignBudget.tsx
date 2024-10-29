import React from "react";
import {
  CampaignContentBox,
  CampaignText,
  CampaignTitle,
  CampaignTitleWrapper,
  CampaignWrapper,
  TextFieldWhite,
} from "../Campaign.styles";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";

const CampaignBudget = () => {
  return (
    <CampaignWrapper>
      <CampaignTitleWrapper>
        <CampaignTitle>Budget and dates</CampaignTitle>
        <CampaignText secondary="true">
          Campaign total budget represents your total spend for the duration of the campaign. You
          must schedule an end date for the campaign.
        </CampaignText>
      </CampaignTitleWrapper>
      <CampaignContentBox elevation={0}>
        <CampaignText mb={2} fontSize={16}>
          Enter budget type and amount
        </CampaignText>
        <TextFieldWhite
          label="Budget"
          id="outlined-start-adornment"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <Box my={2}>
          <CampaignText fontSize={16}>Start date</CampaignText>
          <TextFieldWhite type="date" />
        </Box>
        <Box my={2}>
          <CampaignText fontSize={16}>End date</CampaignText>
          <TextFieldWhite type="date" />
        </Box>
      </CampaignContentBox>
    </CampaignWrapper>
  );
};

export default CampaignBudget;
