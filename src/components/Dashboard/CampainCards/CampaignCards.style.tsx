// StyledComponents.js
import styled from "@emotion/styled";
import { Button, Card, Typography } from "@mui/material";

export const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  padding: 0px 40px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledTypography = styled(Typography)`
  font-size: 30px;
  font-weight: bold;
`;

export const CreateButton = styled(Button)`
  height: 35px;
  width: 190px;
`;

export const CarouselContainer = styled.div`
  margin-top: 30px;
`;

export const StyledCard = styled(Card)`
  height: 260px;
  border-radius: 9px;
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #e0e0e0;
`;

export const CardButton = styled(Button)`
  height: 35px;
`;

export const CardDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CardTypography = styled(Typography)`
  font-size: 14px;
`;

export const TitleTypography = styled(Typography)`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
`;
