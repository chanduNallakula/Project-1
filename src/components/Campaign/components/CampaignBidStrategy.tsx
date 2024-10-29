import React from "react";
import {
  CampaignContentBox,
  CampaignText,
  CampaignTitle,
  CampaignTitleWrapper,
  CampaignWrapper,
  TextFieldWhite,
} from "../Campaign.styles";

import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";

const CampaignBidStrategy = () => {
  const [bidStrategy, setBidStrategy] = React.useState("Clicks");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setBidStrategy(event.target.value as string);
  };

  return (
    <CampaignWrapper>
      <CampaignTitleWrapper>
        <CampaignTitle>Set a bid strategy</CampaignTitle>
        <CampaignText>
          Your bid strategy defines how we should bid for your ad in auctions to better use your
          budget.
        </CampaignText>
      </CampaignTitleWrapper>
      <CampaignContentBox elevation={0}>
        <TextFieldWhite
          InputLabelProps={{ shrink: true }}
          value={bidStrategy}
          label={"What do you want to focus on?"}
          onChange={handleChange}
          fullWidth
          select
        >
          <MenuItem value={"Clicks"}>Clicks</MenuItem>
          <MenuItem value={"Impressions"}>Impressions</MenuItem>
          <MenuItem value={"Conversions"}>Conversions</MenuItem>
          <MenuItem value={"Views"}>Views</MenuItem>
          <MenuItem value={"Engagement"}>Engagement</MenuItem>
          <MenuItem value={"SignUps"}>SignUps</MenuItem>
        </TextFieldWhite>

        <Box mt={5}>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label={
              <CampaignText fontSize={16}>Set a maximum cost per click bid limit</CampaignText>
            }
          />
        </Box>
      </CampaignContentBox>
    </CampaignWrapper>
  );
};

export default CampaignBidStrategy;
