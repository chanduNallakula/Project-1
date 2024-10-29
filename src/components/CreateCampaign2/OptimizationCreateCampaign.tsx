import React from "react";
import { Box, Button, FormControl, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import {
  BlackText,
  CampaignContentBox2,
  CampaignSubHeading2,
  CampaignTitle2,
  CampaignTitleWrapper2,
  CreateCampaignViewWrapper,
  IOSSwitch,
} from "./CreateCampaign2.styles";
import { CampaignText, CampaignTitle, CampaignWrapper } from "../Campaign/Campaign.styles";
import { MultiSelectSearch, adCampaignOptions } from "./TargetingOptionsCreateCampaign";

const OptimizationCreateCampaign = () => {
  return (
    <CreateCampaignViewWrapper>
      <CampaignWrapper>
        <CampaignTitleWrapper2>
          <CampaignTitle2>Optimization</CampaignTitle2>
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
              <CampaignSubHeading2>Recency Cap</CampaignSubHeading2>
              <FormGroup>
                <FormControlLabel
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                  label={<BlackText>On</BlackText>}
                />
              </FormGroup>
            </Box>
            <Box>
              <CampaignSubHeading2>Seconds (Min 60 / Max 3600)</CampaignSubHeading2>
              <TextField size="small" type="number" fullWidth placeholder="600" />
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
              <CampaignSubHeading2>Exposure time multiplier</CampaignSubHeading2>
              <FormGroup>
                <FormControlLabel
                  control={<IOSSwitch sx={{ m: 1 }} />}
                  label={<BlackText>Off</BlackText>}
                />
              </FormGroup>
            </Box>
            <Box>
              <CampaignSubHeading2>Decay rate (Min 1 / Max 100)</CampaignSubHeading2>
              <TextField size="small" type="number" fullWidth placeholder="50" />
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
              <CampaignSubHeading2>Bidding Rules</CampaignSubHeading2>

              <MultiSelectSearch options={adCampaignOptions} placeholder="Bidding Rules (0)" />
            </Box>
            <Box>
              <CampaignSubHeading2>Bidding Multipliers</CampaignSubHeading2>
              <MultiSelectSearch
                options={adCampaignOptions}
                placeholder="Bidding Multipliers (0)"
              />
            </Box>
          </Box>
        </CampaignContentBox2>

        <br />

        <CampaignTitleWrapper2>
          <CampaignTitle2>Bidding Strategy</CampaignTitle2>
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
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                <BlackText mb={1}>Select Bidding Strategy</BlackText>
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                sx={{ display: "flex", flexDirection: "row" }}
              >
                <FormControlLabel
                  value="female"
                  control={
                    <Radio
                      sx={{
                        color: "gray",
                        "&.Mui-checked": {
                          color: "#ef6033",
                        },
                      }}
                    />
                  }
                  label={<BlackText>Normal</BlackText>}
                />
                <FormControlLabel
                  value="male"
                  control={
                    <Radio
                      sx={{
                        color: "gray",
                        "&.Mui-checked": {
                          color: "#ef6033",
                        },
                      }}
                    />
                  }
                  label={<BlackText>Balanced</BlackText>}
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </CampaignContentBox2>
      </CampaignWrapper>
    </CreateCampaignViewWrapper>
  );
};

export default OptimizationCreateCampaign;
