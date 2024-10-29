import React from "react";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  IconButton,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch, { SwitchProps } from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import {
  BlackText,
  CampaignContentBox2,
  CampaignSubHeading2,
  CampaignTitle2,
  CampaignTitleWrapper2,
  CreateCampaignViewWrapper,
  IOSSwitch,
  WhiteText,
} from "./CreateCampaign2.styles";
import {
  CampaignText,
  CampaignTitle,
  CampaignTitleWrapper,
  CampaignWrapper,
  TextFieldWhite,
} from "../Campaign/Campaign.styles";
import emotionStyled from "@emotion/styled";

import ReactSelect, { GroupBase, StylesConfig } from "react-select";

const TargetingOptionsCreateCampaign = () => {
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
              <CampaignSubHeading2>User Segments</CampaignSubHeading2>
              <MultiSelectSearch options={adCampaignOptions} placeholder="Select a Segments" />
            </Box>
            <Box>
              <CampaignSubHeading2>Geo-Fence</CampaignSubHeading2>
              <MultiSelectSearch options={adCampaignOptions} placeholder="Select a Geo-Fences" />
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
              <CampaignSubHeading2>Category</CampaignSubHeading2>
              <MultiSelectSearch options={adCampaignOptions} placeholder="Select a Categories" />
            </Box>
            <Box>
              <CampaignSubHeading2>Language</CampaignSubHeading2>
              <MultiSelectSearch options={adCampaignOptions} placeholder="Select a Languages" />
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
              <CampaignSubHeading2>
                Device Hardware{" "}
                <Typography fontSize={11} component={"span"}>
                  Include
                </Typography>
              </CampaignSubHeading2>
              <TextField
                size="small"
                type="number"
                fullWidth
                placeholder="Device Hardware versions"
              />
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
              <CampaignSubHeading2>OS</CampaignSubHeading2>
              <MultiSelectSearch
                options={adCampaignOptions}
                placeholder="Select Operation Systems (0)"
              />
            </Box>
            <Box>
              <CampaignSubHeading2>Browser</CampaignSubHeading2>
              <MultiSelectSearch options={adCampaignOptions} placeholder="Select Browsers (0)" />
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
              <CampaignSubHeading2>
                User Agent Pattern{" "}
                <Typography fontSize={11} component={"span"}>
                  Include
                </Typography>
              </CampaignSubHeading2>
              <TextField
                size="small"
                type="number"
                fullWidth
                placeholder="Browser User Agent Grep"
              />
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
              <CampaignSubHeading2>
                Ad Placements{" "}
                <Typography fontSize={11} component={"span"}>
                  Include
                </Typography>
              </CampaignSubHeading2>
              <TextField size="small" type="number" fullWidth placeholder="Ad Placements" />
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
              <CampaignSubHeading2>
                Traffic with missing device ID{" "}
                <Typography fontSize={11} component={"span"}>
                  Include
                </Typography>
              </CampaignSubHeading2>
              <FormGroup>
                <FormControlLabel
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                  label={<BlackText>On</BlackText>}
                />
              </FormGroup>
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
              <CampaignSubHeading2>Block SSP/Source</CampaignSubHeading2>
              <MultiSelectSearch
                options={adCampaignOptions}
                placeholder="Select Traffic Source (All)"
              />
            </Box>
            <Box>
              <CampaignSubHeading2>Geo Position</CampaignSubHeading2>
              <MultiSelectSearch
                options={adCampaignOptions}
                placeholder="Select Geo Position (All)"
              />
            </Box>
          </Box>
          <br />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginTop: "10px",
              "& > div": {
                flex: 1,
              },
            }}
          >
            <Box>
              <CampaignSubHeading2>Extensions Filter</CampaignSubHeading2>
              <MultiSelectSearch options={adCampaignOptions} placeholder="Extensions Filter (0)" />
            </Box>
            <Box>
              <CampaignSubHeading2>Keywords Filter</CampaignSubHeading2>
              <MultiSelectSearch options={adCampaignOptions} placeholder="Keywords Filter (0)" />
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
              <CampaignSubHeading2>IFA Lists</CampaignSubHeading2>
              <MultiSelectSearch options={adCampaignOptions} placeholder="IFA Lists (All)" />
            </Box>
            <Box></Box>
          </Box>
          <br />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginTop: "10px",
              "& > div": {
                flex: 1,
              },
            }}
          >
            <Box>
              <Box>
                <CampaignSubHeading2>Tracking Pixel</CampaignSubHeading2>
                <MultiSelectSearch options={adCampaignOptions} placeholder="Tracking Pixel (0)" />
              </Box>
            </Box>
            <Box></Box>
          </Box>
        </CampaignContentBox2>
        <br />

        <CampaignTitleWrapper>
          <CampaignTitle2>
            Date and Time{" "}
            <Typography fontSize={12} component={"span"}>
              Include
            </Typography>
          </CampaignTitle2>
        </CampaignTitleWrapper>

        <CampaignContentBox2 elevation={0}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginTop: "10px",
              "& > div": {
                flex: 1,
              },
            }}
          >
            <Box>
              <CampaignSubHeading2>Hours</CampaignSubHeading2>
              <MultiSelectSearch options={hourOptions} placeholder="Select Hours (All)" />
            </Box>
            <Box>
              <CampaignSubHeading2>Days</CampaignSubHeading2>
              <MultiSelectSearch options={daysOptions} placeholder="Select Days (All)" />
            </Box>
          </Box>
          <br />
        </CampaignContentBox2>
      </CampaignWrapper>
    </CreateCampaignViewWrapper>
  );
};

export default TargetingOptionsCreateCampaign;

export const MultiSelectSearch = ({
  multiple = true,
  options,
  placeholder,
}: {
  multiple?: boolean;
  options: any;
  placeholder: string;
}) => (
  <ReactSelect
    styles={reactSelectCustomStyles}
    isMulti={multiple ? true : undefined}
    name="colors"
    options={options}
    placeholder={placeholder}
    className="basic-multi-select"
    classNamePrefix="select"
  />
);

export const adCampaignOptions = [
  { value: "summer_sale", label: "Summer Sale", color: "#FF6347" },
  { value: "holiday_special", label: "Holiday Special", color: "#FFD700" },
  { value: "back_to_school", label: "Back to School", color: "#1E90FF" },
  { value: "black_friday", label: "Black Friday", color: "#000000" },
  { value: "new_year", label: "New Year", color: "#8A2BE2" },
  { value: "valentines_day", label: "Valentine's Day", color: "#FF1493" },
  { value: "spring_festival", label: "Spring Festival", color: "#32CD32" },
  { value: "product_launch", label: "Product Launch", color: "#FF4500" },
  { value: "flash_sale", label: "Flash Sale", color: "#FFDAB9" },
  { value: "clearance", label: "Clearance", color: "#B22222" },
];

export const hourOptions = [
  { value: "0", label: "00:00" },
  { value: "1", label: "01:00" },
  { value: "2", label: "02:00" },
  { value: "3", label: "03:00" },
  { value: "4", label: "04:00" },
  { value: "5", label: "05:00" },
  { value: "6", label: "06:00" },
  { value: "7", label: "07:00" },
  { value: "8", label: "08:00" },
  { value: "9", label: "09:00" },
  { value: "10", label: "10:00" },
  { value: "11", label: "11:00" },
  { value: "12", label: "12:00" },
  { value: "13", label: "13:00" },
  { value: "14", label: "14:00" },
  { value: "15", label: "15:00" },
  { value: "16", label: "16:00" },
  { value: "17", label: "17:00" },
  { value: "18", label: "18:00" },
  { value: "19", label: "19:00" },
  { value: "20", label: "20:00" },
  { value: "21", label: "21:00" },
  { value: "22", label: "22:00" },
  { value: "23", label: "23:00" },
];

export const daysOptions = [
  { value: "Sun", label: "Sun" },
  { value: "Mon", label: "Mon" },
  { value: "Tue", label: "Tue" },
  { value: "Wed", label: "Wed" },
  { value: "Thu", label: "Thu" },
  { value: "Fri", label: "Fri" },
  { value: "Sat", label: "Sat" },
];

type OptionType = { value: string; label: string };

const reactSelectCustomStyles: StylesConfig<OptionType, true, GroupBase<OptionType>> = {
  control: (provided) => ({
    ...provided,
    fontFamily: "Roboto, sans-serif",
  }),
  menu: (provided) => ({
    ...provided,
    fontFamily: "Roboto, sans-serif",
  }),
  option: (provided) => ({
    ...provided,
    fontFamily: "Roboto, sans-serif",
  }),
  multiValue: (provided) => ({
    ...provided,
    fontFamily: "Roboto, sans-serif",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#d0d2d6",
    fontFamily: "Roboto, sans-serif",
  }),
  input: (provided) => ({
    ...provided,
    fontFamily: "Roboto, sans-serif",
  }),
};
