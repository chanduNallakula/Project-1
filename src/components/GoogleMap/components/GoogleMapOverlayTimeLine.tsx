"use client";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Slider from "@mui/material/Slider";
import { styled, useTheme } from "@mui/system";

import React, { useEffect } from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import { generateDateMarks } from "@/lib/utils/helper";
interface GoogleMapOverlayTimeLineProps {
  changeData: () => void;
}

const GoogleMapOverlayTimeLine = ({ changeData }: GoogleMapOverlayTimeLineProps) => {
  const theme = useTheme();

  const [play, setPlay] = React.useState(false);

  const [sliderValue, setSliderValue] = React.useState(0);

  const marks = generateDateMarks(7);

  const playTimeline = () => {
    setPlay(!play);
  };

  useEffect(() => {
    if (play) {
      const interval = setInterval(() => {
        setSliderValue((prev) => {
          if (prev === 7) {
            setPlay(false);
            return 0;
          }
          return prev + 1;
        });
        changeData();
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [play, changeData]);

  return (
    <Box
      sx={{
        position: "absolute",
        zIndex: 20,
        width: "80%",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {/* <IconButton></IconButton>
      {!openDrawer && (
        <Button onClick={() => setOpenDrawer(true)} variant="contained">
          <KeyboardArrowUpIcon sx={{ fontSize: "26px" }} />
        </Button>
      )} */}

      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: theme.spacing(2),
          paddingLeft: `${theme.spacing(1)}`,
          paddingRight: `${theme.spacing(2)}`,
          // backgroundColor: "rgba(0, 0, 0, 0.4)",
          backgroundColor: "rgba(9, 132, 227,0.99)",
          borderTopRightRadius: "3px",
          borderTopLeftRadius: "3px",
        }}
      >
        <Box>
          {!play ? (
            <IconButton onClick={playTimeline}>
              <PlayCircleIcon
                sx={{
                  fontSize: 33,
                  borderRadius: "50%",
                  "& path": {
                    fill: "#fff",
                  },
                }}
              />
            </IconButton>
          ) : (
            <IconButton onClick={playTimeline}>
              <PauseCircleIcon
                sx={{
                  fontSize: 33,
                  borderRadius: "50%",
                  "& path": {
                    fill: "#fff",
                  },
                }}
              />
            </IconButton>
          )}
        </Box>

        <PrettoSlider
          value={sliderValue}
          onChange={(e: any, value: any) => {
            setSliderValue(value as number);
            changeData();
          }}
          sx={{ width: "95%", alignSelf: "flex-end" }}
          defaultValue={0}
          max={7}
          color="primary"
          marks={marks}
          size="medium"
        />
      </Box>

      {/* <Drawer
        PaperProps={{
          className: "horizontal-scrollbar-style",
          sx: {
            "&.MuiDrawer-paper": {
              backgroundColor: "#f8f8f8",
              minHeight: "100px",
              padding: theme.spacing(2),
            },
          },
        }}
        variant="persistent"
        anchor="bottom"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box>
          <Button variant="contained" onClick={() => setOpenDrawer(false)}>
            <KeyboardArrowDownIcon sx={{ fontSize: "26px" }} />
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5">Timeline</Typography>
        </Box>
      </Drawer> */}
    </Box>
  );
};

export default GoogleMapOverlayTimeLine;

const PrettoSlider = styled(Slider)({
  // color: "#09a4e3",
  color: "#fff",
  height: 5,
  position: "relative",
  top: 5,

  "& > .MuiSlider-mark[data-index='0']": {
    display: "none",
    visibility: "hidden",
    height: 0,
    width: 0,
  },

  "& .MuiSlider-mark": {
    // backgroundColor: "#ffffff",
    backgroundColor: "#8da6c2",
    width: 2,
    marginTop: -1,
    transformOrigin: "bottom",
    transform: "translateY(3px)",
    height: 28,
  },
  "& .MuiSlider-markLabel": {
    // color: "#2c3e50",
    color: "#fff",

    transform: "translateX(10%)",
    fontSize: 13,
    top: 25,
  },
  "& .MuiSlider-rail": {
    height: 5,
    borderRadius: 4,
    // backgroundColor: "#404040c7",
    backgroundColor: "#8da6c2",
    opacity: 1,
  },
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    display: "none",
    visibility: "hidden",
    height: 0,
    width: 0,
    backgroundColor: "#fff",
    border: "1px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&::before": {
      display: "none",
    },
  },
});
