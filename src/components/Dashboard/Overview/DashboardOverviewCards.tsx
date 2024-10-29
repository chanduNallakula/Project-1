"use client";
import React from "react";
import styled from "@emotion/styled";
import PieChart from "@mui/icons-material/PieChart";
import LocationOn from "@mui/icons-material/LocationOn";
import Group from "@mui/icons-material/Group";
import { Typography } from "@mui/material";

const primaryColor = "#007bff";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;
`;

const Heading = styled.h3`
  text-align: left;
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  gap: 20px;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .bottom-text {
    width: 100%;
    font-size: 14px;
    color: white;
    background-color: ${primaryColor};
    padding: 10px 20px;
    box-sizing: border-box;
    text-align: left;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    cursor: pointer;
  }
`;

const CardTop = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  padding-bottom: 0;
`;

const IconWrapper = styled.div`
  text-align: left;
  background-color: ${primaryColor};
  padding: 10px;
  border-radius: 8px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 20px;
    color: white;
  }
`;

const IconContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const IconText = styled(Typography)``;

const IconNumber = styled(Typography)`
  font-size: 20px;
  color: black;
`;

const DashboardOverviewCards = () => {
  return (
    <DashboardContainer>
      <Heading>Dashboard Overview</Heading>
      <CardsContainer>
        <Card>
          <CardTop>
            <IconWrapper>
              <Group />
            </IconWrapper>
            <IconContent>
              <IconText>Total Audience Sets</IconText>
              <IconNumber style={{ fontWeight: "bold" }}>24</IconNumber>
            </IconContent>
          </CardTop>
          <div className="bottom-text">View all</div>
        </Card>
        <Card>
          <CardTop>
            <IconWrapper>
              <LocationOn />
            </IconWrapper>
            <IconContent>
              <IconText>Active Geofences</IconText>
              <IconNumber style={{ fontWeight: "bold" }}>142</IconNumber>
            </IconContent>
          </CardTop>
          <div className="bottom-text">Manage geofences</div>
        </Card>
        <Card>
          <CardTop>
            <IconWrapper>
              <PieChart />
            </IconWrapper>
            <IconContent>
              <IconText>Active Campaigns</IconText>
              <IconNumber style={{ fontWeight: "bold" }}>12</IconNumber>
            </IconContent>
          </CardTop>
          <div className="bottom-text">View campaigns</div>
        </Card>
      </CardsContainer>
    </DashboardContainer>
  );
};

export default DashboardOverviewCards;
