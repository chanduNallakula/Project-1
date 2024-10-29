"use client";

import Box from "@mui/material/Box";
import React from "react";

import { CampaignTitle, CampaignWrapper, TextFieldWhite } from "../Campaign/Campaign.styles";
import {
  Button,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  OutlinedTextFieldProps,
} from "@mui/material";

import {
  CampaignContentBox2,
  CampaignSubHeading2,
  CampaignText2,
  CampaignTitle2,
  CampaignTitleWrapper2,
  CreateCampaignViewWrapper,
} from "./CreateCampaign2.styles";
import { MultiSelectSearch, adCampaignOptions } from "./TargetingOptionsCreateCampaign";

const BasicSettingsCreateCampaign = () => {
  return (
    <CreateCampaignViewWrapper>
      <CampaignWrapper>
        <CampaignTitleWrapper2>
          <CampaignTitle2>New Campaign</CampaignTitle2>
        </CampaignTitleWrapper2>
        <CampaignContentBox2 elevation={0}>
          <CampaignSubHeading2>Enter a campaign name *</CampaignSubHeading2>

          <TextField size="small" fullWidth id="test" required placeholder="Campaign name" />
        </CampaignContentBox2>

        <br />

        <CampaignTitleWrapper2>
          <CampaignTitle2>Basic Settings</CampaignTitle2>
        </CampaignTitleWrapper2>

        <CampaignContentBox2 elevation={0}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              "& > div": {
                flex: 1,
              },
            }}
          >
            <Box>
              <CampaignSubHeading2>Default bid price (CPM) *</CampaignSubHeading2>
              <TextField size="small" fullWidth label="Bid price" placeholder="Bid price" />
            </Box>
            <Box>
              <CampaignSubHeading2>Max bid price (CPM) *</CampaignSubHeading2>
              <TextField size="small" fullWidth label="Bid price" placeholder="Bid price" />
            </Box>
          </Box>
          <br />
          <Box>
            <CampaignSubHeading2>Auction Type</CampaignSubHeading2>
            <Select
              defaultValue={"0"}
              size="small"
              fullWidth
              sx={{
                marginTop: "5px",
              }}
            >
              <MenuItem value={"0"}>Select an auction type</MenuItem>
              <MenuItem value={"First Price"}>First Price</MenuItem>
              <MenuItem value={"Second Price"}>Second Price</MenuItem>
            </Select>
          </Box>
        </CampaignContentBox2>

        <br />

        <CampaignTitleWrapper2>
          <CampaignTitle2>Flight Dates</CampaignTitle2>
        </CampaignTitleWrapper2>
        <CampaignContentBox2 elevation={0}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              "& > div": {
                flex: 1,
              },
            }}
          >
            <Box>
              <CampaignSubHeading2>Fron now</CampaignSubHeading2>
              <TextField size="small" fullWidth type="date" />
            </Box>
            <Box>
              <CampaignSubHeading2>Infinite</CampaignSubHeading2>
              <TextField size="small" fullWidth type="date" />
            </Box>
          </Box>
        </CampaignContentBox2>

        <br />
        <CampaignTitleWrapper2>
          <CampaignTitle2>Lifetime Limits</CampaignTitle2>
        </CampaignTitleWrapper2>
        <CampaignContentBox2 elevation={0}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              "& > div": {
                flex: 1,
              },
            }}
          >
            <Box>
              <CampaignSubHeading2>Max Impressions</CampaignSubHeading2>
              <TextField placeholder="Max Impressions" size="small" fullWidth />
            </Box>
            <Box>
              <CampaignSubHeading2>Max Spend</CampaignSubHeading2>
              <TextField placeholder="Max Spend" size="small" fullWidth />
            </Box>
          </Box>
          <br />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              "& > div": {
                flex: 1,
              },
            }}
          >
            <Box>
              <CampaignSubHeading2>Remaining</CampaignSubHeading2>
              <TextFieldButton variant="outlined" placeholder="Remaining" />
            </Box>
            <Box>
              <CampaignSubHeading2>Remaining</CampaignSubHeading2>
              <TextFieldButton variant="outlined" placeholder="Remaining" />
            </Box>
          </Box>
        </CampaignContentBox2>

        <br />
        <CampaignTitleWrapper2>
          <CampaignTitle2>Daily Limits</CampaignTitle2>
        </CampaignTitleWrapper2>
        <CampaignContentBox2 elevation={0}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              "& > div": {
                flex: 1,
              },
            }}
          >
            <Box>
              <CampaignSubHeading2>Max Impressions</CampaignSubHeading2>
              <TextField placeholder="Max Impressions" size="small" fullWidth />
            </Box>
            <Box>
              <CampaignSubHeading2>Max Spend</CampaignSubHeading2>
              <TextField placeholder="Max Impressions" size="small" fullWidth />
            </Box>
          </Box>
          <br />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              "& > div": {
                flex: 1,
              },
            }}
          >
            <Box>
              <CampaignSubHeading2>Remaining</CampaignSubHeading2>
              <TextFieldButton variant="outlined" placeholder="Remaining" />
            </Box>
            <Box>
              <CampaignSubHeading2>Remaining</CampaignSubHeading2>
              <TextFieldButton variant="outlined" placeholder="Remaining" />
            </Box>
          </Box>
        </CampaignContentBox2>

        <br />
        <CampaignTitleWrapper2>
          <CampaignTitle2>Frequency Cap</CampaignTitle2>
        </CampaignTitleWrapper2>
        <CampaignContentBox2 elevation={0}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              "& > div": {
                flex: 1,
              },
            }}
          >
            <Box>
              <CampaignSubHeading2>24 Hours cap</CampaignSubHeading2>
              <TextField placeholder="Max Impressions" size="small" fullWidth />
            </Box>
            <Box>
              <CampaignSubHeading2>30 Days cap</CampaignSubHeading2>
              <TextField placeholder="Max Impressions" size="small" fullWidth />
            </Box>
          </Box>
          <br />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              "& > div": {
                flex: 1,
              },
            }}
          >
            <Box>
              <CampaignSubHeading2>Filters</CampaignSubHeading2>

              <MultiSelectSearch options={adCampaignOptions} placeholder="Filters (0)" />
            </Box>
            <Box>
              <CampaignSubHeading2>Private Marketplace</CampaignSubHeading2>
              <MultiSelectSearch
                options={adCampaignOptions}
                placeholder="Private Marketplace (0)"
              />
            </Box>
          </Box>
        </CampaignContentBox2>
      </CampaignWrapper>
    </CreateCampaignViewWrapper>
  );
};

export default BasicSettingsCreateCampaign;

export interface TextFieldButtonProps extends OutlinedTextFieldProps {
  buttonText?: string;
}

export const TextFieldButton: React.FC<TextFieldButtonProps> = ({
  buttonText = "Erase Limits",
  variant = "outlined",
  ...props
}) => {
  return (
    <TextField
      variant={variant}
      size="small"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Button size="small" variant="contained">
              {buttonText}
            </Button>
          </InputAdornment>
        ),
      }}
      fullWidth
      sx={{
        marginTop: "5px",
      }}
      {...props}
    />
  );
};
