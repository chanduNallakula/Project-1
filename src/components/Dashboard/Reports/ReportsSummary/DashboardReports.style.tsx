import styled from "@emotion/styled";
import { Card, Typography } from "@mui/material";

export const Container = styled.div`
  padding: 30px 40px;
`;

export const OuterCard = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const SummaryTitle = styled(Typography)`
  font-size: 16px;
  font-weight: bold;
`;

export const InnerCardContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 5px;
`;

export const InnerCard = styled(Card)`
  flex: 1;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  box-shadow: none;
  justify-content: center;
`;

export const ImpressionsTitle = styled(Typography)`
  font-size: 12px;
  font-weight: bold;
  color: gray;
`;

export const ImpressionsValue = styled(Typography)`
  font-size: 18px;
  font-weight: bold;
`;
