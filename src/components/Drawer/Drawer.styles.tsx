import styled from "@emotion/styled";
import theme from "@/lib/utils/theme";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export const DrawerCloseButton = styled(CloseRoundedIcon)`
  color: ${theme.palette.error.main};
  cursor: pointer;
  position: absolute;
  font-size: 30px;
  right: 0;
  top: 0;
  margin: 5px;
`;
