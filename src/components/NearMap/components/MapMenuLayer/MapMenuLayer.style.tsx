import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { darken } from "@mui/material/styles";
import styled from "@emotion/styled";
import theme from "@/lib/utils/theme";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export const MapMenuLayerAbsoluteContainer = styled(Box)`
  position: absolute;
  top: 0;
`;

export const MapMenuLayerCloseIconButton = styled(IconButton)`
  background-color: ${theme.palette.error.main};
  color: #fff;
  &:hover {
    background-color: ${(props) => darken(theme.palette.error.main, 0.3)};
  }
`;

export const MapMenuLayerCloseButton = styled(CloseRoundedIcon)`
  color: ${theme.palette.error.main};
  cursor: pointer;
  position: absolute;
  font-size: 30px;
  right: 0;
  top: 0;
  margin: 5px;
`;

export const MapMenuLayerButton = styled(Button)`
  background-color: #0984e3;
  &:hover {
    background-color: ${darken("#0984e3", 0.3)};
  }
`;
