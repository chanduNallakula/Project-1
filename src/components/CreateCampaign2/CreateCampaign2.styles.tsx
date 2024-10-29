import emotionStyled from "@emotion/styled";
import { TextFieldWhite } from "../Campaign/Campaign.styles";

import Paper from "@mui/material/Paper";
import Switch, { SwitchProps } from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import { styled as MUIStyled } from "@mui/material";

import Box from "@mui/material/Box";

import theme from "../../lib/utils/theme";

export const WhiteText = emotionStyled(Typography)`
  color: white;
  font-size: 16px;
`;

export const BlackText = emotionStyled(Typography)`
  color: black;
  font-size: 16px;
`;

// export const CustomTextField = emotionStyled(TextField)`
//   "&.MuiInputBase-input":{
//     paddingTop: 10px;
//     paddingBottom: 10px;
//   }
// `;

export const CreateCampaignViewWrapper = emotionStyled(Box)`
  padding: 20px 20px 40px 20px;
`;

export const CustomTextFieldWhite = emotionStyled(TextFieldWhite)`
  margin-top: 5px;
`;

export const CampaignTitle2 = styled(Typography)`
  font-size: 22px;
  color: #000;
`;

export const CampaignContentBox2 = styled(Paper)`
  padding: ${theme.spacing(2)} ${theme.spacing(3)};
  padding-bottom: ${theme.spacing(3)};
  background-color: "white";
  border-radius: ${theme.spacing(1)};
  /* border: 1px solid #e0e0e0; */
`;

export const CampaignTitleWrapper2 = styled(Box)`
  padding: 0 ${theme.spacing(0.5)};
  margin: ${theme.spacing(2)} 0;
  color: black;
`;

export const CampaignSubHeading2 = styled(Typography)<{
  fontSize?: number;
}>`
  font-size: ${(props) => props.fontSize || 16}px;
  font-weight: 500;
  color: ${theme.custom.text.main};
  color: black;
  margin-bottom: 4px;
  line-height: 1 !important;
`;

export const CampaignText2 = styled(Typography)<{ secondary?: string; fontSize?: number }>`
  font-size: ${(props) => props.fontSize || 14}px;
  color: ${(props) =>
    props.secondary === "true" ? theme.custom.text.secondary : theme.custom.text.main};
  color: black;
`;

export const IOSSwitch = MUIStyled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#ed5342" : "#ed5342",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#ed5342",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));
