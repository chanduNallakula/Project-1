import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import Navbar from "./NavBar/Navbar";
import { inherits } from "util";

interface DashboardContainerProps {
  children: React.ReactNode;
  fullWidth?: boolean;
}

interface DashboardPageTitleProps {
  title?: string;
  buttonText?: string;
  onClick?: () => void;
}

const DashboardContainer = ({
  children,

  fullWidth,
}: DashboardContainerProps) => {
  return (
    <div className="bg-[#f9fafb]">
      <Navbar />
      {fullWidth ? (
        <Box>{children}</Box>
      ) : (
        <DashboardNoScrollContainer>
          <Container maxWidth="xl" className="!p-5 lg:!p-10">
            <div>{children}</div>
          </Container>
        </DashboardNoScrollContainer>
      )}
    </div>
  );
};

export default DashboardContainer;

export const DashboardNoScrollContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      className="hide-scrollbar"
      sx={{
        minHeight: "calc(100vh - 61px)",
        scrollbarWidth: "none !important",
      }}
    >
      {children}
    </Box>
  );
};
export const DashboardTitle = ({ title, buttonText, onClick }: DashboardPageTitleProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px",
      }}
    >
      <Typography
        style={{
          fontSize: "28px",
          fontWeight: "bold",
        }}
      >
        {title}
      </Typography>
      {buttonText && (
        <Button onClick={onClick} variant="contained">
          {buttonText}
        </Button>
      )}
    </div>
  );
};
