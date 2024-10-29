import React from "react";
import Select, { Props as ReactSelectProps } from "react-select";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

interface CustomSelectProps extends ReactSelectProps<OptionType, boolean> {
  // Add any additional custom props here
}

const MaterialSelect = styled(Select)<CustomSelectProps>(({ theme }) => ({
  "& .Select__control": {
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${
      theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.23)" : "rgba(0, 0, 0, 0.23)"
    }`,
    backgroundColor: theme.palette.background.paper,
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover": {
      borderColor: theme.palette.text.primary,
    },
    "&.Select__control--is-focused": {
      borderColor: theme.palette.primary.main,
      boxShadow: `0 0 0 2px ${theme.palette.primary.main}40`,
    },
  },
  "& .Select__menu": {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[2],
  },
  "& .Select__option": {
    padding: theme.spacing(1, 2),
    "&.Select__option--is-focused": {
      backgroundColor: theme.palette.action.hover,
    },
    "&.Select__option--is-selected": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  },
  "& .Select__single-value": {
    color: theme.palette.text.primary,
  },
  "& .Select__placeholder": {
    color: theme.palette.text.secondary,
  },
}));

type OptionType = {
  label: string;
  value: string | number;
};

export const CustomSelect: React.FC<CustomSelectProps> = (props) => {
  const theme = useTheme();
  return <MaterialSelect theme={theme} {...props} />;
};
