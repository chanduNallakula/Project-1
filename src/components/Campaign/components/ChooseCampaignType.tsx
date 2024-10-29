import React, { useContext } from "react";
import WebIcon from "@mui/icons-material/Web";
import {
  CampaignContentBox,
  CampaignSubHeading,
  CampaignText,
  CampaignTitle,
  CampaignTitleWrapper,
  CampaignWrapper,
  ChooseGoalIcon,
  ChooseGoalRadioContent,
  ChooseGoalRadioGroup,
  ChooseGoalSeeMoreButton,
  ChooseTypeRadioContentLeft,
  ChooseTypeRadioContentRight,
  RadioWhiteBlue,
} from "../Campaign.styles";

import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import { CreateCampgainContext } from "../CreateCampaign";

const ChooseCampaignType = () => {
  const [seemore, setSeemore] = React.useState(false);

  const { campaign, setCampaign } = useContext(CreateCampgainContext);

  const handleGoalChange = (type: string) => {
    setCampaign((prev) => ({
      ...prev,
      type: type,
    }));
  };

  return (
    <CampaignWrapper>
      <CampaignTitleWrapper>
        <CampaignTitle>Choose a campaign type</CampaignTitle>
      </CampaignTitleWrapper>
      <CampaignContentBox elevation={0}>
        <CampaignSubHeading>Suggested for you</CampaignSubHeading>
        <CampaignText secondary="true">
          You&apos;ll get more leads from a campaign that reaches people across Search, YouTube, and
          other websites
        </CampaignText>
        <FormControl fullWidth>
          <ChooseGoalRadioGroup
            aria-labelledby="goal-radio-buttons-group-label"
            defaultValue={campaign.type}
            value={campaign.type}
            name="goal-radio-buttons-group"
          >
            {campaignTypes
              .filter((type) => type.title === "Performance Max")
              .map((goal, index) => {
                return (
                  <ChooseGoalRadioContent
                    onClick={() => handleGoalChange(goal.title)}
                    key={goal.title + index}
                  >
                    <ChooseTypeRadioContentLeft>
                      <CampaignSubHeading fontSize={14}>{goal.title}</CampaignSubHeading>
                      <CampaignText secondary="true" fontSize={14}>
                        {goal.description}
                      </CampaignText>
                    </ChooseTypeRadioContentLeft>
                    <ChooseTypeRadioContentRight>
                      <ChooseGoalIcon> {goal.icon}</ChooseGoalIcon>
                      <FormControlLabel
                        control={<RadioWhiteBlue value={goal.title} />}
                        label={""}
                      />
                    </ChooseTypeRadioContentRight>
                  </ChooseGoalRadioContent>
                );
              })}

            {seemore && (
              <>
                <CampaignSubHeading mt={2}>Other campaign types</CampaignSubHeading>
                {campaignTypes
                  .filter((type) => type.title !== "Performance Max")
                  .map((goal, index) => {
                    return (
                      <React.Fragment key={goal.title + index}>
                        <ChooseGoalRadioContent
                          fullWidth
                          onClick={() => handleGoalChange(goal.title)}
                          key={goal.title + index}
                        >
                          <ChooseTypeRadioContentLeft>
                            <CampaignSubHeading fontSize={14}>{goal.title}</CampaignSubHeading>
                            <CampaignText secondary="true" fontSize={14}>
                              {goal.description}
                            </CampaignText>
                          </ChooseTypeRadioContentLeft>
                          <ChooseTypeRadioContentRight>
                            <ChooseGoalIcon> {goal.icon}</ChooseGoalIcon>
                            <FormControlLabel
                              control={<RadioWhiteBlue value={goal.title} />}
                              label={""}
                            />
                          </ChooseTypeRadioContentRight>
                        </ChooseGoalRadioContent>
                      </React.Fragment>
                    );
                  })}
              </>
            )}
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

export default ChooseCampaignType;

const iconSize = "70px";

const campaignTypes = [
  {
    title: "Performance Max",
    description: "Reach audiences across all of Google with a single campaign",
    icon: <WebIcon sx={{ fontSize: iconSize }} />,
  },
  {
    title: "Search",
    description: "Get in front of high-intent customers at the right time on Google Search",
    icon: <WebIcon sx={{ fontSize: iconSize }} />,
  },
  {
    title: "Display",
    description: "Reach customers across 3 million sites and apps with engaging creative",
    icon: <WebIcon sx={{ fontSize: iconSize }} />,
  },
  {
    title: "Video",
    description: "Reach viewers on YouTube and get conversions",
    icon: <WebIcon sx={{ fontSize: iconSize }} />,
  },
  {
    title: "App",
    description: "Get more installs, engagement and pre-registration for your app",
    icon: <WebIcon sx={{ fontSize: iconSize }} />,
  },
  {
    title: "Discovery",
    description: "Run ads on YouTube, Gmail, Discover, and more",
    icon: <WebIcon sx={{ fontSize: iconSize }} />,
  },
  {
    title: "Smart",
    description: "Manage your Search ads in an easy to use platform tailored to small businesses",
    icon: <WebIcon sx={{ fontSize: iconSize }} />,
  },
];
