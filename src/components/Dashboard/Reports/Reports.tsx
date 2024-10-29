"use client";
import React, { useState } from "react";
import DashboardReports from "./ReportsSummary/DashboardReports";
import {
  FormControl,
  MenuItem,
  Select,
  Stack,
  Typography,
  TextField,
  Menu,
  Button,
  InputLabel,
  Box,
  SelectChangeEvent,
  ToggleButtonGroup,
  ToggleButton,
  styled,
  Breadcrumbs,
} from "@mui/material";
import CardsComponent from "./ReportGraphs/Cardscomponent";
import TableCard from "./ReportMetrics/TableCard";
import { select } from "d3";
import Link from "next/link";
import { useRouter } from "next/router";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { DashboardTitle } from "../DashboardContainer";

const Reports = () => {
  const [campaign, setCampaign] = React.useState("campaign1");
  const [dateSelectOpen, setDateSelectOpen] = React.useState(false);

  const [alignment, setAlignment] = useState("web");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const handleChange = (event: any) => {
    setCampaign(event.target.value);
  };

  function handleShowDatePicker(event: any) {
    if (event.target && event.target.showPicker) event.target?.showPicker();
  }

  const handleFilterChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setAlignment(newAlignment);
  };

  const handleStartDateChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEndDate(event.target.value);
  };

  return (
    <>
      <div>
        <DashboardTitle title="Reports" />
        <Stack direction={"row"} justifyContent={"space-between"} mb={3} mt={2}>
          <div>
            <TextField
              size="small"
              sx={{ minWidth: 250 }}
              select
              value={campaign}
              label="Select Campaign"
              onChange={handleChange}
            >
              <MenuItem value={"campaign1"}> Campaign 1</MenuItem>
              <MenuItem value={"campaign2"}>Campaign 2</MenuItem>
              <MenuItem value={"campaign3"}>Campaign 3</MenuItem>
              <MenuItem value={"campaign4"}>Campaign 4</MenuItem>
            </TextField>
          </div>
          <div>
            <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              onChange={handleFilterChange}
              aria-label="Platform"
            >
              <ToggleButton value="web">7 days</ToggleButton>
              <ToggleButton value="android">30 days</ToggleButton>
              <ToggleButton sx={{ p: 0 }} disableRipple value="date">
                <Box className="self-stretch">
                  <div style={{ display: "flex", alignItems: "stretch", height: "100%" }}>
                    <TextField
                      onClick={handleShowDatePicker}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      sx={{
                        cursor: "pointer",
                        "& .MuiInputBase-root": { height: "100%" },
                        "& .MuiInputBase-input": { height: "100%" },
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#e9ecee",
                          border: "none",
                        },
                      }}
                      type="date"
                      value={startDate}
                      onChange={handleStartDateChange}
                      InputProps={{
                        startAdornment: (
                          <Typography
                            sx={{
                              fontSize: "14px",
                              lineHeight: "0",
                              paddingRight: "5px",
                              fontWeight: "bold",
                            }}
                          >
                            From:
                          </Typography>
                        ),
                      }}
                    />
                    <span className="self-center">-</span>
                    <TextField
                      onClick={handleShowDatePicker}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      sx={{
                        cursor: "pointer",
                        "& .MuiInputBase-root": { height: "100%" },
                        "& .MuiInputBase-input": { height: "100%" },
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#e9ecee",
                          border: "none",
                        },
                      }}
                      type="date"
                      value={endDate}
                      onChange={handleEndDateChange}
                      InputProps={{
                        startAdornment: (
                          <Typography
                            sx={{
                              fontSize: "14px",
                              lineHeight: "0",
                              paddingRight: "5px",
                              fontWeight: "bold",
                            }}
                          >
                            To:
                          </Typography>
                        ),
                      }}
                    />
                  </div>
                </Box>
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </Stack>
      </div>
      <div>
        <DashboardReports />
      </div>
      <div>
        <CardsComponent />
      </div>
      <div>
        <TableCard />
      </div>
    </>
  );
};

export default Reports;

const DateMenu = ({
  anchorEl,
  open,
  setAnchorEl,
}: {
  anchorEl: null | HTMLElement;
  open: boolean;
  setAnchorEl: React.Dispatch<React.SetStateAction<null | HTMLElement>>;
}) => {
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
      <MenuItem onClick={handleClose}>Logout</MenuItem>
    </Menu>
  );
};
