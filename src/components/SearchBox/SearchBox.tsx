import React from "react";

// material ui imports
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchOutlined from "@mui/icons-material/SearchOutlined";

interface SearchBoxProps {
  placeholder?: string;
  inputValue: string;
  theme?: "light" | "dark";
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ placeholder, inputValue, handleSearch, theme }: SearchBoxProps) => {
  return (
    <FormControl sx={{ width: { xs: "100%", md: 400 } }}>
      <OutlinedInput
        sx={{
          color: theme === "dark" ? "white" : "black",
          "& label.Mui-focused": {
            color: theme === "dark" ? "white" : "black",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: theme === "dark" ? "white !important" : "#e2e8f0 !important",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme === "dark" ? "white !important" : "#e2e8f0 !important",
          },
          "& .MuiOutlinedInput-root": {
            color: theme === "dark" ? "white" : "black",
            "& fieldset": {
              borderColor: theme === "dark" ? "white !important" : "#e2e8f0 !important",
            },
          },
        }}
        value={inputValue}
        onChange={handleSearch}
        id="header-search"
        startAdornment={
          <InputAdornment position="start" sx={{ mr: 0.5 }}>
            <SearchOutlined
              sx={{
                color: theme === "dark" ? "white" : "black",
                "&:hover": {
                  color: theme === "dark" ? "white" : "black",
                },
              }}
            />
          </InputAdornment>
        }
        aria-describedby="header-search-text"
        inputProps={{
          "aria-label": "weight",
        }}
        placeholder={placeholder ? placeholder : "Search..."}
      />
    </FormControl>
  );
};

export default SearchBox;
