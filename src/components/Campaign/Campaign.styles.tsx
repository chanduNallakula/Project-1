import styled from "@emotion/styled";

import theme from "../../lib/utils/theme";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";

export const RadioWhiteBlue = styled(Radio)`
  color: ${theme.palette.primary.contrastText};
`;

export const RadioWhite = styled(Radio)`
  color: ${theme.palette.primary.contrastText};
  &.Mui-checked {
    color: ${theme.palette.primary.contrastText};
  }
`;

export const ButtonWhite = styled(Button)`
  color: ${theme.palette.primary.contrastText};
  border-color: ${theme.custom.border.divider};
  &:hover {
    border-color: ${theme.custom.border.divider};
  }
`;

export const TextFieldWhite = styled(TextField)`
  & label {
    color: ${theme.custom.border.divider};
  }
  & label.Mui-focused {
    color: white;
  }

  & .MuiOutlinedInput-root:hover fieldset {
    border-color: ${theme.palette.primary.contrastText};
  }
  & .MuiOutlinedInput-root {
    color: ${theme.palette.primary.contrastText};
    & fieldset {
      border-color: ${theme.custom.border.divider};
    }
    &.Mui-focused fieldset {
      border-color: ${theme.palette.primary.contrastText};
    }
  }
`;

export const Flex = styled(Box)`
  display: flex;
`;

export const CustomFlex = styled(Box)<{ gap?: number }>`
  display: flex;
  align-items: center;
  gap: ${(props) => theme.spacing(props.gap || 2)};
`;

export const CustomFlexColumn = styled(Box)<{ gap?: number }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => theme.spacing(props.gap || 1)};
`;

export const CampaignTitleWrapper = styled(Box)`
  padding: 0 ${theme.spacing(0.5)};
  margin: ${theme.spacing(2)} 0;
  color: ${theme.palette.text.primary};
`;

export const CampaignStepperWrapper = styled(Box)`
  padding: ${theme.spacing(2)} ${theme.spacing(4)};
  min-width: 200px;
`;

export const CampaignStepperLabel = styled(Typography)`
  font-size: 16px;
  color: ${theme.palette.primary.contrastText};
`;

export const CampaignViewWrapper = styled(Box)`
  flex: 1;
  padding: ${theme.spacing(2)};
`;

export const CampaignWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CampaignTitle = styled(Typography)`
  color: ${theme.custom.text.main};
  font-size: 22px;
  color: white;
`;

export const CampaignContentBox = styled(Paper)`
  padding: ${theme.spacing(4)};
  background-color: ${theme.custom.bg.transparentLight};
  border-radius: ${theme.spacing(1)};
`;

export const CampaignSubHeading = styled(Typography)<{
  fontSize?: number;
}>`
  font-size: ${(props) => props.fontSize || 16}px;
  font-weight: 500;
  color: ${theme.custom.text.main};
  color: white;
`;

export const CampaignText = styled(Typography)<{ secondary?: string; fontSize?: number }>`
  font-size: ${(props) => props.fontSize || 14}px;
  color: ${(props) =>
    props.secondary === "true" ? theme.custom.text.secondary : theme.custom.text.main};
  color: white;
`;

export const ChooseGoalRadioGroup = styled(RadioGroup)`
  margin-top: ${theme.spacing(2)};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(1)};
`;

export const ChooseGoalRadioContent = styled(Button)`
  padding: ${theme.spacing(1)} ${theme.spacing(2)};
  border-radius: ${theme.spacing(1)};
  border: 1px solid ${theme.custom.border.divider};
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 0;
  text-transform: none;
  text-align: left;
`;

export const ChooseGoalRadioContentLeft = styled(Box)`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(1)};
`;

export const ChooseGoalIcon = styled(Box)`
  color: ${theme.palette.primary.contrastText};
  display: flex;
  align-items: center;
`;

export const ChooseGoalSeeMoreButton = styled(Button)`
  align-self: flex-start;
`;

export const ChooseTypeRadioContentLeft = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const ChooseTypeRadioContentRight = styled(Box)`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(3)};
`;

export const CampaignSettingsFlex = styled(Box)<{
  gap?: number;
}>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => theme.spacing(props.gap || 2)};
  margin-top: ${theme.spacing(2)};
`;

export const CampaignSettingsOption = styled(Box)`
  display: flex;
  padding: ${theme.spacing(2)};
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${theme.custom.border.divider};
  border-radius: ${theme.spacing(1)};
`;

export const CampaignSettingsOptionsLeft = styled(Box)`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(1)};
`;

export const CampaignSettingsDrawer = styled(Box)`
  width: 1000px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${theme.custom.bg.transparentLight};
  color: ${theme.palette.primary.contrastText};
`;

export const CampaignSettingDrawerTop = styled(Paper)`
  padding: ${theme.spacing(2)};
  display: flex;
  gap: ${theme.spacing(1)};
  align-items: center;
  background-color: ${theme.custom.bg.main};
  background-color: ${theme.custom.bg.transparentLight};
  color: ${theme.palette.primary.contrastText};
`;

export const CampaignSettingsDrawerContent = styled(Box)`
  padding: ${theme.spacing(3)};
  background-color: ${theme.custom.bg.secondary};
  flex: 1;
  background-color: ${theme.custom.bg.transparentLight};
  color: ${theme.palette.primary.contrastText};
`;

export const CampaignSettingsDrawerBottom = styled(Box)`
  padding: ${theme.spacing(2)} ${theme.spacing(4)};
  background-color: ${theme.custom.bg.transparentLight};
  color: ${theme.palette.primary.contrastText};
`;

export const CampaignSettingsAccordionHeader = styled(Box)`
  display: flex;
  align-items: center;
  width: 100%;

  & > p:first-child {
    min-width: 25%;
  }
`;

export const CampaignSettingsNetworks = styled(Box)`
  display: flex;
  gap: ${theme.spacing(2)};
  padding: ${theme.spacing(2)} 0;
`;

export const CampaignAdCreatorWrapper = styled(Box)`
  display: flex;
  gap: ${theme.spacing(4)};

  max-height: 100vh;
`;

export const CampaignAdInputsWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(2)};
  overflow-y: auto;
  flex: 0.5;
`;

export const CampaignAdPreviewBoxWrapper = styled(Box)`
  background-color: ${theme.custom.bg.transparentLight};
  flex: 0.5;
  min-height: 50vh;
  border-radius: ${theme.spacing(1)};
`;

export const CampaignAdAccordion = styled(Accordion)`
  background-color: ${theme.custom.bg.transparentLight};
  color: ${theme.palette.primary.contrastText};
  & .MuiAccordionSummary-expandIconWrapper {
    color: ${theme.palette.primary.contrastText};
  }
  & .MuiAccordionSummary-content {
    margin: 12px 0;
  }
  & .MuiAccordionSummary-root.Mui-expanded {
    min-height: 0;
  }
`;

export const CampaignAdAccordionSummary = styled(AccordionSummary)`
  border-bottom: 1px solid ${theme.custom.border.divider};
`;

export const CampaignAdAccordionDetails = styled(Box)`
  padding: ${theme.spacing(2)} ${theme.spacing(1)};
`;
export const CampaignAdAccordionHeading = styled(Typography)`
  font-weight: 500;
  font-size: 15px;
`;

export const CampaignAdMobilePreviewOuter = styled("div")`
  width: 100%;
  border: 3px solid ${theme.custom.border.divider};
  border-bottom: 0;
  border-top-right-radius: "26px";
  border-top-left-radius: "26px";
  min-height: "100px";
  overflow: "hidden";
`;

export const CampaignAdMobilePreviewCamera = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing(1)};
`;

export const CampaignAdMobilePreviewInner = styled("div")`
  background-color: ${theme.custom.bg.dark};
  min-height: 100px;
  margin: 0 ${theme.spacing(1)};
  padding: ${theme.spacing(2)} ${theme.spacing(1)};
  padding-bottom: theme.spacing(1);
  border-radius: "3px";
`;

export const CampaignAdMobilePreview = styled(Paper)`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(1)};
  padding: ${theme.spacing(2)};
  background-color: ${theme.custom.bg.transparent};
  border-radius: ${theme.spacing(1)};
`;

export const CampaignAdMobilePreviewCameraIcon = styled("span")`
  display: block;
  border: 2px solid ${theme.palette.divider};
  border-radius: 50%;
  padding: ${theme.spacing(0.6)};
`;

export const CampaignAdDesktopPreview = styled(Paper)`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(1)};
  padding: ${theme.spacing(2)};
  background-color: ${theme.custom.bg.transparent};
  border-radius: ${theme.spacing(1)};
`;

