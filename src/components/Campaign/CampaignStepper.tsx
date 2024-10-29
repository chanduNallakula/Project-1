"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import { campaignViewsMap } from "./CampaignView";
import { CampaignStepperLabel } from "./Campaign.styles";

const steps = [
  "Choose goal",
  "Choose campaign",
  "Select keywords",
  "Create ads",
  "Set bid strategy",
  "Set budget",
];

const stepsKeys = Object.keys(campaignViewsMap).map((key) =>
  key
    .split(/(?=[A-Z])/)
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ")
);

interface HorizontalLinearStepperProps {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

export default function CampaignStepper({
  activeStep,
  setActiveStep,
}: HorizontalLinearStepperProps) {
  return (
    <>
      <>
        <Stepper activeStep={activeStep} orientation="vertical">
          {stepsKeys.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: {
              optional?: React.ReactNode;
            } = {};

            return (
              <Step key={label + index} {...stepProps}>
                <StepLabel {...labelProps}>
                  <CampaignStepperLabel>{label}</CampaignStepperLabel>
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </>
    </>
  );
}
