"use client";
import React from "react";
import {
  OuterCard,
  SummaryTitle,
  InnerCardContainer,
  InnerCard,
  ImpressionsTitle,
  ImpressionsValue,
} from "./DashboardReports.style";

const campaignSummaryReportsData = [
  { title: "Total impression", value: "1,234,567" },
  { title: "Clicks", value: "67,890" },
  { title: "Conversions", value: "57,090" },
  { title: "Click-Through Rate", value: "40%" },
];

const DashboardReports = () => {
  return (
    <div>
      <OuterCard>
        <SummaryTitle gutterBottom>Campaign Summary</SummaryTitle>
        <InnerCardContainer>
          {campaignSummaryReportsData.map((item, index) => (
            <InnerCard key={index}>
              <ImpressionsTitle gutterBottom>{item.title}</ImpressionsTitle>
              <ImpressionsValue gutterBottom>{item.value}</ImpressionsValue>
            </InnerCard>
          ))}
        </InnerCardContainer>
      </OuterCard>
    </div>
  );
};

export default DashboardReports;
