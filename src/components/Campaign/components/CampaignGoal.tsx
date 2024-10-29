"use client";

import Box from "@mui/material/Box";
import React, { useContext } from "react";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import {
  CampaignContentBox,
  CampaignSubHeading,
  CampaignText,
  CampaignTitle,
  CampaignTitleWrapper,
  CampaignWrapper,
  ChooseGoalIcon,
  ChooseGoalRadioContent,
  ChooseGoalRadioContentLeft,
  ChooseGoalRadioGroup,
  ChooseGoalSeeMoreButton,
  RadioWhiteBlue,
  TextFieldWhite,
} from "../Campaign.styles";

import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";
import PermContactCalendarRoundedIcon from "@mui/icons-material/PermContactCalendarRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import PreviewRoundedIcon from "@mui/icons-material/PreviewRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";

import { CreateCampgainContext } from "../CreateCampaign";

const CampaignGoal = () => {
  const [seemore, setSeemore] = React.useState(false);

  const { campaign, setCampaign } = useContext(CreateCampgainContext);

  const handleGoalChange = (goal: string) => {
    setCampaign((prev) => ({
      ...prev,
      goalOptions: {
        campaignName: prev.goalOptions.campaignName,
        goal: goal,
      },
    }));
  };

  const handleCampaignNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCampaign((prev) => ({
      ...prev,
      goalOptions: {
        campaignName: e.target.value,
        goal: prev.goalOptions.goal,
      },
    }));
  };

  return (
    <CampaignWrapper>
      <CampaignTitleWrapper>
        <CampaignTitle>Choose your goal for this campaign</CampaignTitle>
      </CampaignTitleWrapper>

      <CampaignContentBox elevation={0}>
        <CampaignSubHeading>Enter a campaign name</CampaignSubHeading>
        <CampaignText secondary="true">Required</CampaignText>
        <br />
        <TextFieldWhite
          sx={{
            width: "400px",
          }}
          label="Campaign name"
          placeholder="Enter a campaign name"
          variant="outlined"
          value={campaign.goalOptions.campaignName}
          onChange={handleCampaignNameChange}
        />
      </CampaignContentBox>

      <br />

      <CampaignContentBox elevation={0}>
        <CampaignSubHeading>Choose a goal</CampaignSubHeading>
        <CampaignText secondary="true">Required</CampaignText>
        <FormControl fullWidth>
          <ChooseGoalRadioGroup
            aria-labelledby="goal-radio-buttons-group-label"
            defaultValue={campaign.goalOptions.goal}
            value={campaign.goalOptions.goal}
            name="goal-radio-buttons-group"
          >
            {chooseGoalOptions.map((goal, index) => {
              return (
                <ChooseGoalRadioContent
                  onClick={() => handleGoalChange(goal.title)}
                  key={goal.title + index}
                >
                  <ChooseGoalRadioContentLeft>
                    <ChooseGoalIcon> {goal.icon}</ChooseGoalIcon>
                    <Box>
                      <CampaignSubHeading fontSize={14}>{goal.title}</CampaignSubHeading>
                      <CampaignText secondary="true" fontSize={14}>
                        {goal.info}
                      </CampaignText>
                    </Box>
                  </ChooseGoalRadioContentLeft>
                  <FormControlLabel control={<RadioWhiteBlue value={goal.title} />} label={""} />
                </ChooseGoalRadioContent>
              );
            })}

            {seemore &&
              chooseGoalMoreOptions.map((goal, index) => {
                return (
                  <React.Fragment key={goal.subHeading + index}>
                    <CampaignSubHeading mt={2} fontSize={14}>
                      {goal.subHeading}
                    </CampaignSubHeading>
                    {goal.data.map((goal, index) => {
                      return (
                        <ChooseGoalRadioContent
                          fullWidth
                          onClick={() => handleGoalChange(goal.title)}
                          key={goal.title + index}
                        >
                          <ChooseGoalRadioContentLeft>
                            <ChooseGoalIcon> {goal.icon}</ChooseGoalIcon>
                            <Box>
                              <CampaignSubHeading fontSize={14}>{goal.title}</CampaignSubHeading>
                              <CampaignText secondary="true" fontSize={14}>
                                {goal.info}
                              </CampaignText>
                            </Box>
                          </ChooseGoalRadioContentLeft>
                          <FormControlLabel
                            control={<RadioWhiteBlue value={goal.title} />}
                            label={""}
                          />
                        </ChooseGoalRadioContent>
                      );
                    })}
                  </React.Fragment>
                );
              })}
            <ChooseGoalSeeMoreButton
              variant="contained"
              onClick={() => {
                setSeemore(!seemore);
              }}
            >
              {!seemore ? "See more" : "See less"}
            </ChooseGoalSeeMoreButton>
          </ChooseGoalRadioGroup>
        </FormControl>
      </CampaignContentBox>
    </CampaignWrapper>
  );
};

export default CampaignGoal;

const chooseGoalOptions = [
  {
    title: "Purchases",
    info: "Someone buys a product or service",
    icon: <CreditCardRoundedIcon />,
  },
  {
    title: "Submit lead form",
    info: "A potential customer fills out a form",
    icon: <PermContactCalendarRoundedIcon />,
  },
  {
    title: "Phone call leads",
    info: "A potential customer calls your business",
    icon: <LocalPhoneRoundedIcon />,
  },
  {
    title: "Page views",
    info: "Someone views a key page (such as an article or product page)",
    icon: <PreviewRoundedIcon />,
  },
  {
    title: "Brand awareness",
    info: "Reach a broad audience, get video views, and build consideration for your brand",
    icon: <CampaignRoundedIcon />,
  },
];

const chooseGoalMoreOptions = [
  {
    subHeading: "App promotion",
    data: [
      {
        title: "App downloads",
        info: "Someone downloads an app",
        icon: <CreditCardRoundedIcon />,
      },
    ],
  },

  {
    subHeading: "Leads",
    data: [
      {
        title: "Contacts",
        info: "A customer makes contact by phone, text, email, or chat",
        icon: <CampaignRoundedIcon />,
      },

      {
        title: "Book appointments",
        info: "Someone schedules an appointment with your business",
        icon: <CampaignRoundedIcon />,
      },

      {
        title: "Request quotes",
        info: "Someone requests an estimate for your product or service",
        icon: <CampaignRoundedIcon />,
      },

      {
        title: "Get directions",
        info: "Someone searches for a business location",
        icon: <CampaignRoundedIcon />,
      },

      {
        title: "Outbound clicks",
        info: "Someone clicks a link to a partner site",
        icon: <CampaignRoundedIcon />,
      },

      {
        title: "Sign ups",
        icon: <CampaignRoundedIcon />,
        info: "Someone signs up for a free newsletter, trial, account, or event",
      },
    ],
  },
  {
    subHeading: "Sales",
    data: [
      {
        title: "Add to cart",
        info: "Someone chooses an item to buy by adding it to a shopping cart",
        icon: <CampaignRoundedIcon />,
      },
      {
        title: "Begin checkout",
        info: "Someone starts to buy something",
        icon: <CampaignRoundedIcon />,
      },
      {
        title: "Purchase subscription",
        info: "Someone buys a subscription-based product or service",
        icon: <CampaignRoundedIcon />,
      },
    ],
  },
];
