import React, { useState } from "react";
import {
  CampaignContentBox,
  CampaignSettingDrawerTop,
  CampaignSettingsAccordionHeader,
  CampaignSettingsDrawer,
  CampaignSettingsDrawerBottom,
  CampaignSettingsDrawerContent,
  CampaignSettingsFlex,
  CampaignSettingsNetworks,
  CampaignSettingsOption,
  CampaignSettingsOptionsLeft,
  CampaignSubHeading,
  CampaignText,
  CampaignTitle,
  CampaignTitleWrapper,
  CampaignWrapper,
  CustomFlex,
  CustomFlexColumn,
  RadioWhite,
  TextFieldWhite,
} from "../Campaign.styles";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import InputAdornment from "@mui/material/InputAdornment";
import RadioGroup from "@mui/material/RadioGroup";
import Typography from "@mui/material/Typography";

import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import TranslateRoundedIcon from "@mui/icons-material/TranslateRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import TravelExploreRoundedIcon from "@mui/icons-material/TravelExploreRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import CloseRounded from "@mui/icons-material/CloseRounded";
import SearchIcon from "@mui/icons-material/Search";

import networkSearch from "../../../assets/Search Network.svg";
import networkDisplay from "../../../assets/Display Network.svg";

import theme from "@/lib/utils/theme";
import MultipleSelectChip from "./MultipleSelectChip";

import Select from "react-select";

import Image from "next/image";
import { CreateCampgainContext } from "../CreateCampaign";
import { hexToRgbNumbers } from "@/lib/utils/styling";

const iconSize = 24;

const campaignSettingsOptions = [
  {
    title: "Locations",
    description: "India (country)",
    icon: <FmdGoodRoundedIcon sx={{ fontSize: iconSize }} />,
  },
  {
    title: "Languages",
    description: "English",
    icon: <TranslateRoundedIcon sx={{ fontSize: iconSize }} />,
  },
  {
    title: "Audiences",
    description: "Select audience segments",
    icon: <PeopleAltRoundedIcon sx={{ fontSize: iconSize }} />,
  },
  {
    title: "Networks",
    description: "Search partners, Display Network",
    icon: <TravelExploreRoundedIcon sx={{ fontSize: iconSize }} />,
  },
];

const CampaignSettings = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpenMoreSettingsDrawer = () => {
    setOpen(true);
  };

  return (
    <>
      <MoreSettingsDrawer open={open} toggleDrawer={setOpen} />
      <CampaignWrapper>
        <CampaignTitleWrapper>
          <CampaignTitle>Define who should see your ads</CampaignTitle>
        </CampaignTitleWrapper>
        <CampaignContentBox elevation={0}>
          <CampaignSubHeading>Keywords</CampaignSubHeading>
          <Box my={2}>
            <CampaignSubHeading fontSize={14}>
              Get keyword suggestions (optional)
            </CampaignSubHeading>
            <CampaignText secondary="true">
              Google Ads can find keywords for you by scanning a web page or seeing what&apos;s
              working for similar products or services
            </CampaignText>
          </Box>
          <CampaignSettingsFlex>
            <TextFieldWhite
              sx={{
                width: {
                  md: "80%",
                  xs: "100%",
                },
              }}
              fullWidth={true}
              id="URL"
              label="Enter a URL to scan for keywords"
              variant="outlined"
            />
            <TextFieldWhite
              sx={{
                width: {
                  md: "80%",
                  xs: "100%",
                },
              }}
              fullWidth={true}
              id="products"
              label="Enter products or services to advertise"
              variant="outlined"
            />

            <Button variant="contained" sx={{ alignSelf: "flex-start" }}>
              Get keyword suggestions
            </Button>
          </CampaignSettingsFlex>
          <CampaignSettingsFlex gap={0.2}>
            <Box my={2}>
              <CampaignSubHeading fontSize={14}>Enter keywords</CampaignSubHeading>
              <CampaignText secondary="true">
                Keywords are words or phrases that are used to match your ads with the terms people
                are searching for
              </CampaignText>
            </Box>
            <TextFieldWhite
              fullWidth
              required
              multiline
              minRows={10}
              placeholder="Enter or paste keywords, one word or phrase per line*"
            />
          </CampaignSettingsFlex>
        </CampaignContentBox>

        <Box mt={5}>
          <CampaignContentBox elevation={0}>
            <CampaignSubHeading>More setttings</CampaignSubHeading>
            <CampaignSettingsFlex gap={4}>
              {campaignSettingsOptions.map((option, index) => {
                return (
                  <CampaignSettingsOption
                    onClick={handleOpenMoreSettingsDrawer}
                    key={option.title + index}
                  >
                    <CampaignSettingsOptionsLeft>
                      <Box sx={{ color: "white", "& .MuiSvgIcon-root": { fontSize: 30 } }}>
                        {option.icon}
                      </Box>
                      <Box>
                        <CampaignSubHeading fontSize={14}>{option.title}</CampaignSubHeading>
                        <CampaignText secondary="true">{option.description}</CampaignText>
                      </Box>
                    </CampaignSettingsOptionsLeft>
                    <IconButton onClick={handleOpenMoreSettingsDrawer}>
                      <EditRoundedIcon sx={{ fontSize: 30, color: "white" }} />
                    </IconButton>
                  </CampaignSettingsOption>
                );
              })}
            </CampaignSettingsFlex>
          </CampaignContentBox>
        </Box>
      </CampaignWrapper>
    </>
  );
};

export default CampaignSettings;

interface MoreSettingsDrawerProps {
  open: boolean;
  toggleDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

function MoreSettingsDrawer({ open, toggleDrawer }: MoreSettingsDrawerProps) {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => {
        toggleDrawer(false);
      }}
      sx={{
        "& .MuiDrawer-paper": {
          background: `rgba(${hexToRgbNumbers(theme.palette.primary.main)}, 0.5)`,
          color: theme.palette.primary.contrastText,
        },
      }}
    >
      <CampaignSettingsDrawer>
        <CampaignSettingDrawerTop elevation={2}>
          <IconButton onClick={() => toggleDrawer(false)}>
            <CloseRounded sx={{ color: theme.custom.text.main }} />
          </IconButton>
          <CampaignTitle>More settings</CampaignTitle>
        </CampaignSettingDrawerTop>
        <CampaignSettingsDrawerContent>
          {accordionData.map((data, index) => {
            return (
              <Accordion
                sx={{
                  "&.MuiAccordion-root": {
                    backgroundColor: theme.custom.bg.transparentLight,
                    color: theme.custom.text.main,
                  },
                }}
                defaultExpanded
                key={data.title + index}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <CampaignSettingsAccordionHeader px={2}>
                    <CampaignSubHeading>{data.title}</CampaignSubHeading>
                    <CampaignText secondary="true" fontSize={16}>
                      {data.content}
                    </CampaignText>
                  </CampaignSettingsAccordionHeader>
                </AccordionSummary>
                <Divider />

                <AccordionDetails>
                  <Box px={2}>{data.component}</Box>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </CampaignSettingsDrawerContent>
        <CampaignSettingsDrawerBottom>
          <Button onClick={() => toggleDrawer(false)} variant="contained">
            Done
          </Button>
        </CampaignSettingsDrawerBottom>
      </CampaignSettingsDrawer>
    </Drawer>
  );
}

const accordionData = [
  {
    title: "Locations",
    content: "India",
    component: <LocationSettings />,
  },

  {
    title: "Languages",
    content: "English",
    component: <LanguageSettings />,
  },

  {
    title: "Audience segments",
    content: "Select audience segments to add to your campaign.",
    component: <AudienceSegments />,
  },

  {
    title: "Networks",
    content: "Search partners, Display Network",
    component: <Networks />,
  },
];

function LocationSettings() {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCampaign((prev) => ({
      ...prev,
      settings: {
        ...prev.settings,
        locations: event.target.value,
      },
    }));
  };

  const { campaign, setCampaign } = React.useContext(CreateCampgainContext);

  return (
    <Box>
      <FormControl>
        <FormLabel id="locations_label">
          <CampaignText mb={1}>Select locations to target</CampaignText>
        </FormLabel>
        <RadioGroup
          value={campaign.settings.locations}
          onChange={handleChange}
          aria-labelledby="locations_label"
          defaultValue="All"
          name="locations"
        >
          <FormControlLabel
            value="All countries and territories"
            control={<RadioWhite />}
            label={<CampaignText>All countries and territories</CampaignText>}
          />
          <FormControlLabel
            value="India"
            control={<RadioWhite />}
            label={<CampaignText>India</CampaignText>}
          />
          <FormControlLabel
            value="My Geofences"
            control={<RadioWhite />}
            label={<CampaignText>My Geofences</CampaignText>}
          />
          {campaign.settings.locations === "My Geofences" && <MultipleSelectChip />}
          <FormControlLabel
            value="Custom locations"
            control={<RadioWhite />}
            label={<CampaignText>Custom locations</CampaignText>}
          />
        </RadioGroup>

        {campaign.settings.locations === "Custom locations" && (
          <CustomFlex m={2}>
            <TextFieldWhite
              sx={{
                minWidth: 360,
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "white" }} />
                  </InputAdornment>
                ),
              }}
              placeholder="Enter a location to target or exclude"
            />
            <Button>Advanced search</Button>
          </CustomFlex>
        )}
      </FormControl>
    </Box>
  );
}

interface OptionType {
  value: string;
  label: string;
}

function LanguageSettings() {
  const languageOptions = [
    { value: "Hindi", label: "Hindi" },
    { value: "Bengali", label: "Bengali" },
    { value: "Telugu", label: "Telugu" },
    { value: "Marathi", label: "Marathi" },
    { value: "Tamil", label: "Tamil" },
    { value: "Urdu", label: "Urdu" },
    { value: "Gujarati", label: "Gujarati" },
    { value: "Kannada", label: "Kannada" },
    { value: "Odia", label: "Odia" },
    { value: "Punjabi", label: "Punjabi" },
    { value: "English", label: "English" },
    { value: "Mandarin Chinese", label: "Mandarin Chinese" },
    { value: "Spanish", label: "Spanish" },
    { value: "French", label: "French" },
    { value: "Standard Arabic", label: "Standard Arabic" },
    { value: "Russian", label: "Russian" },
    { value: "Portuguese", label: "Portuguese" },
  ];

  const [selectedOptions, setSelectedOptions] = useState<any>([]);

  const { setCampaign } = React.useContext(CreateCampgainContext);

  return (
    <Box my={1} maxWidth={"80%"}>
      <CampaignText mb={1}>Select the languages your customers speak.</CampaignText>
      <Select
        options={languageOptions}
        value={selectedOptions}
        onChange={(selectedOption) => {
          const tempArr = selectedOption.map((option) => {
            return option.value;
          });
          setSelectedOptions(selectedOption);
          setCampaign((prev) => ({
            ...prev,
            settings: {
              ...prev.settings,
              languages: tempArr,
            },
          }));
        }}
        isMulti={true}
        defaultValue={[languageOptions[10], languageOptions[2]]}
        name="languages"
        className="basic-multi-select"
        classNamePrefix="MuiSelect-select MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input"
      />
    </Box>
  );
}

function AudienceSegments() {
  return (
    <Box py={3}>
      <Typography variant="h5" sx={{ color: theme.palette.primary.contrastText }}>
        {" "}
        AudienceSegments{" "}
      </Typography>
    </Box>
  );
}

function Networks() {
  const { campaign, setCampaign } = React.useContext(CreateCampgainContext);

  const [network, setNetwork] = React.useState(campaign.settings.networkType);
  const handleChange = () => {
    setCampaign((prev) => ({
      ...prev,
      settings: {
        ...prev.settings,
        networkType: network,
      },
    }));
  };

  return (
    <FormControl>
      <RadioGroup
        value={campaign.settings.networkType}
        onChange={handleChange}
        aria-labelledby="locations_label"
        name="locations"
      >
        <CampaignSettingsNetworks>
          <RadioWhite
            name="network"
            checked={network === "search"}
            onChange={() => {
              setNetwork("search");
              handleChange();
            }}
          />
          <Image height={120} src={networkSearch} alt="search" />
          <CustomFlexColumn>
            <CampaignSubHeading>Search Network</CampaignSubHeading>
            <CampaignText secondary="true">
              Ads can appear near Google Search results and other Google sites when people search
              for terms that are relevant to your keywords
            </CampaignText>
          </CustomFlexColumn>
        </CampaignSettingsNetworks>
        <CampaignSettingsNetworks>
          <RadioWhite
            name="network"
            checked={network === "display"}
            value={network}
            onChange={() => {
              setNetwork("display");
              handleChange();
            }}
          />
          <Image height={120} src={networkDisplay} alt="display" />
          <CustomFlexColumn>
            <CampaignSubHeading>Display Network</CampaignSubHeading>
            <CampaignText secondary="true">
              Easy way to get additional conversions at similar or lower costs than Search with
              unused Search budget.
            </CampaignText>
          </CustomFlexColumn>
        </CampaignSettingsNetworks>
      </RadioGroup>
    </FormControl>
  );
}
