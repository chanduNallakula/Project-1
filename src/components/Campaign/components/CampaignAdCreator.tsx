import React from "react";
import {
  CampaignAdCreatorWrapper,
  CampaignContentBox,
  CampaignAdInputsWrapper,
  CampaignText,
  CampaignTitle,
  CampaignTitleWrapper,
  CampaignAdPreviewBoxWrapper,
  CampaignAdAccordion,
  CampaignAdAccordionHeading,
  CampaignAdAccordionSummary,
  TextFieldWhite,
  CampaignAdAccordionDetails,
  Flex,
  CustomFlex,
  CustomFlexColumn,
  CampaignAdMobilePreviewOuter,
  CampaignAdMobilePreviewCamera,
  CampaignAdMobilePreviewInner,
  CampaignAdMobilePreview,
  CampaignSubHeading,
  CampaignAdMobilePreviewCameraIcon,
  CampaignAdDesktopPreview,
} from "../Campaign.styles";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import AccordionDetails from "@mui/material/AccordionDetails";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PublicIcon from "@mui/icons-material/Public";
import MoreVertIcon from "@mui/icons-material/MoreVert";
interface AdPreviewProps {
  url: string;
  headlines: string[];
  descriptions: string[];
}

const CampaignAdCreator = () => {
  return (
    <>
      <CampaignAdCreatorWrapper>
        <CampaignAdInputsWrapper pb={5} className="horizontal-scrollbar-style">
          <>
            <CampaignTitleWrapper>
              <CampaignTitle>Create an ad</CampaignTitle>
              <CampaignText secondary="true">
                Add text, images, and other assets. Google builds and tests different combinations
                of your assets to find your highest performing ads. Learn more about creating search
                ads
              </CampaignText>
            </CampaignTitleWrapper>
            <CustomFlexColumn gap={2}>
              <FinalURL />
              <DisplayPath />
              <Headlines />
              <Description />
              <CampaignURLOptions />
            </CustomFlexColumn>
          </>
        </CampaignAdInputsWrapper>
        <CampaignAdPreviewBoxWrapper py={2} px={1}>
          <AdPreview
            url={"example.com"}
            headlines={["Headline 1", "Headline 2", "Headline 3"]}
            descriptions={["Description 1", "Description 2"]}
          />
        </CampaignAdPreviewBoxWrapper>
      </CampaignAdCreatorWrapper>
    </>
  );
};

export default CampaignAdCreator;

function AdPreview({ url, headlines, descriptions }: AdPreviewProps) {
  return (
    <Box p={1}>
      <CampaignTitle>Your Ad Preview</CampaignTitle>
      <Divider />
      <Box p={3}>
        <CampaignSubHeading mb={1}>Mobile</CampaignSubHeading>
        <CampaignAdMobilePreviewOuter>
          <CampaignAdMobilePreviewCamera>
            <CampaignAdMobilePreviewCameraIcon />
          </CampaignAdMobilePreviewCamera>
          <CampaignAdMobilePreviewInner>
            <CampaignAdMobilePreview>
              <CampaignText>Sponsored</CampaignText>
              <CustomFlex alignItems={"center"} gap={1}>
                <CampaignText>
                  <PublicIcon />
                </CampaignText>
                <CustomFlexColumn gap={0.0001}>
                  <CampaignText>{url}</CampaignText>
                  <CampaignText fontSize={12}>www.{url}/</CampaignText>
                </CustomFlexColumn>
              </CustomFlex>
              <CustomFlex flexWrap={"wrap"} gap={0.0001}>
                {headlines.map((headline, index) => (
                  <CampaignText key={index} fontSize={16}>
                    {index !== 0 ? <>&nbsp;</> : null} {headline}{" "}
                    {index === headlines.length - 1 ? null : "|"}
                  </CampaignText>
                ))}
              </CustomFlex>
              <CustomFlex flexWrap={"wrap"} gap={0.0001}>
                {descriptions.map((description, index) => (
                  <CampaignText key={index} fontSize={14}>
                    {description + "."}&nbsp;
                  </CampaignText>
                ))}
              </CustomFlex>
            </CampaignAdMobilePreview>
          </CampaignAdMobilePreviewInner>
        </CampaignAdMobilePreviewOuter>
      </Box>

      <Box p={3}>
        <CampaignSubHeading mb={1}>Desktop</CampaignSubHeading>
        <CampaignAdDesktopPreview>
          <CustomFlexColumn gap={0.1}>
            <CustomFlex gap={1}>
              <CampaignText>Ad</CampaignText>
              <CampaignText>{url}/</CampaignText>
              <CampaignText>
                <MoreVertIcon />
              </CampaignText>
            </CustomFlex>
            <CustomFlex flexWrap={"wrap"} gap={0.0001}>
              {headlines.map((headline, index) => (
                <CampaignText key={index} fontSize={16}>
                  {index !== 0 ? <>&nbsp;</> : null} {headline}{" "}
                  {index === headlines.length - 1 ? null : "|"}
                </CampaignText>
              ))}
            </CustomFlex>
            <CustomFlex flexWrap={"wrap"} gap={0.0001}>
              {descriptions.map((description, index) => (
                <CampaignText key={index} fontSize={14}>
                  {description + "."}&nbsp;
                </CampaignText>
              ))}
            </CustomFlex>
          </CustomFlexColumn>
        </CampaignAdDesktopPreview>
      </Box>
    </Box>
  );
}

function FinalURL() {
  return (
    <Box>
      <CampaignAdAccordion defaultExpanded>
        <CampaignAdAccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <CampaignAdAccordionHeading>Final URL </CampaignAdAccordionHeading>
        </CampaignAdAccordionSummary>
        <AccordionDetails>
          <CampaignAdAccordionDetails>
            <TextFieldWhite label="Final URL" fullWidth />
          </CampaignAdAccordionDetails>
        </AccordionDetails>
      </CampaignAdAccordion>
    </Box>
  );
}

function DisplayPath() {
  return (
    <Box>
      <CampaignAdAccordion defaultExpanded>
        <CampaignAdAccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <CampaignAdAccordionHeading>Display path </CampaignAdAccordionHeading>
        </CampaignAdAccordionSummary>
        <AccordionDetails>
          <CampaignAdAccordionDetails>
            <CustomFlex gap={1}>
              <CampaignText>
                <span style={{ whiteSpace: "nowrap" }}>www.example.com /</span>
              </CampaignText>
              <TextFieldWhite />
              <CampaignText>/</CampaignText>
              <TextFieldWhite />
            </CustomFlex>
          </CampaignAdAccordionDetails>
        </AccordionDetails>
      </CampaignAdAccordion>
    </Box>
  );
}

function Headlines() {
  return (
    <Box>
      <CampaignAdAccordion defaultExpanded>
        <CampaignAdAccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <CampaignAdAccordionHeading>Headlines </CampaignAdAccordionHeading>
        </CampaignAdAccordionSummary>
        <AccordionDetails>
          <CampaignAdAccordionDetails>
            <CustomFlexColumn gap={1}>
              {[...Array(3)].map((_, index) => (
                <TextFieldWhite
                  key={index}
                  fullWidth
                  required
                  label={"Headline"}
                  helperText={
                    <Flex component={"span"} sx={{ justifyContent: "space-between" }}>
                      <Box component={"span"} sx={{ color: "whitesmoke" }}>
                        Required
                      </Box>
                      <Box component={"span"} sx={{ color: "whitesmoke" }}>
                        0 / 30
                      </Box>
                    </Flex>
                  }
                />
              ))}
            </CustomFlexColumn>
          </CampaignAdAccordionDetails>
        </AccordionDetails>
      </CampaignAdAccordion>
    </Box>
  );
}

function Description() {
  return (
    <Box>
      <CampaignAdAccordion defaultExpanded>
        <CampaignAdAccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <CampaignAdAccordionHeading>Descriptions </CampaignAdAccordionHeading>
        </CampaignAdAccordionSummary>
        <AccordionDetails>
          <CampaignAdAccordionDetails>
            <CustomFlexColumn gap={1}>
              {[...Array(2)].map((headline, index) => (
                <TextFieldWhite
                  key={index}
                  fullWidth
                  required
                  label={"Description"}
                  helperText={
                    <Flex component={"span"} sx={{ justifyContent: "space-between" }}>
                      <Box component={"span"} sx={{ color: "whitesmoke" }}>
                        Required
                      </Box>
                      <Box component={"span"} sx={{ color: "whitesmoke" }}>
                        0 / 90
                      </Box>
                    </Flex>
                  }
                />
              ))}
            </CustomFlexColumn>
          </CampaignAdAccordionDetails>
        </AccordionDetails>
      </CampaignAdAccordion>
    </Box>
  );
}

function CampaignURLOptions() {
  return (
    <Box>
      <CampaignAdAccordion defaultExpanded>
        <CampaignAdAccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <CampaignAdAccordionHeading>Campaign URL options </CampaignAdAccordionHeading>
        </CampaignAdAccordionSummary>
        <AccordionDetails>
          <CampaignAdAccordionDetails>
            <CustomFlexColumn gap={1}>
              <TextFieldWhite
                fullWidth
                required
                label={"Tracking template"}
                helperText={
                  <Box component={"span"} sx={{ color: "whitesmoke" }}>
                    Example: https://www.trackingtemplate.foo/?url={"{lpurl}"}&id=5
                  </Box>
                }
              />
              <TextFieldWhite
                fullWidth
                required
                label={"Final URL suffix"}
                helperText={
                  <Box component={"span"} sx={{ color: "whitesmoke" }}>
                    Example: paraml -valuel &param2=value2
                  </Box>
                }
              />
            </CustomFlexColumn>
          </CampaignAdAccordionDetails>
        </AccordionDetails>
      </CampaignAdAccordion>
    </Box>
  );
}
