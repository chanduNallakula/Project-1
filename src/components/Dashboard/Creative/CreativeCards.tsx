"use client";
import {
  Card,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchBox from "@/components/SearchBox/SearchBox";
import TableItemsPerSelect from "@/components/Table/components/TableItemsPerSelect";

interface CreativeDataProps {
  cbName: string;
  ctId: number;
  csId: number;
  cszId: number;
}

interface CreativeCardsProps {
  creativeData: CreativeDataProps[];
}

const DEFAULT_IMAGES = [
  "https://kinsta.com/wp-content/uploads/2020/06/banner-sizes.jpg",
  "https://user-content.adbraze.com/a291a159-0ced-499d-a6d7-e259df77a615",
  "https://media.sproutsocial.com/uploads/2021/06/Always-up-to-date-list-of-facebook-ad-sizes-specs-Final.svg",
];

const CreativeCards: React.FC<CreativeCardsProps> = ({ creativeData }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [searchValue, setSearchValue] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(3); // Default is 3 cards per row

  const handleSetItemsPerPage = (value: number) => {
    setItemsPerPage(value);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const filteredData = creativeData.filter((card) =>
    card.cbName.toLowerCase().includes(searchValue.toLowerCase())
  );

  const getGridSize = () => {
    switch (itemsPerPage) {
      case 1:
        return 12;
      case 2:
        return 6;
      case 3:
        return 4;
      case 4:
        return 3;
      case 5:
        return 2.4;
      default:
        return 4;
    }
  };

  return (
    <div>
      <Grid container spacing={2} style={{ marginTop: "2%" }}>
        <Grid item xs={6}>
          <SearchBox
            inputValue={searchValue}
            handleSearch={handleSearch}
            placeholder="Search Creatives"
          />
        </Grid>
        <Grid item xs={6} alignSelf={"flex-end"}>
          <div className="flex justify-end">
            <TableItemsPerSelect
              text="Items per page"
              itemsPerPage={itemsPerPage}
              setItemsPerPage={handleSetItemsPerPage}
              itemsPerPageOptions={[2, 3, 4, 5]}
            />
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={2} style={{ marginTop: "2%" }}>
        {filteredData.map((card, index) => (
          <Grid item xs={12} sm={getGridSize()} key={index}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "10px",
                margin: "0px",
              }}
            >
              <div style={{ flex: 3 }}>
                <img
                  src={DEFAULT_IMAGES[index % DEFAULT_IMAGES.length]}
                  alt={card.cbName}
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                style={{
                  flex: 1,
                  marginTop: "20px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0px 10px",
                }}
              >
                <div>
                  <Typography
                    gutterBottom
                    sx={{
                      fontSize: 20,
                      fontWeight: "bold",
                    }}
                  >
                    {card.cbName}
                  </Typography>
                  <Typography
                    gutterBottom
                    sx={{ fontSize: 14, color: "text.secondary" }}
                  >
                    {`ctId: ${card.ctId} | csId: ${card.csId} | cszId: ${card.cszId}`}
                  </Typography>
                </div>
                <div>
                  <IconButton onClick={handleClick}>
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    PaperProps={{
                      style: { marginTop: "40px" },
                    }}
                  >
                    <MenuItem onClick={handleClose}>Menu Item 1</MenuItem>
                    <MenuItem onClick={handleClose}>Menu Item 2</MenuItem>
                    <MenuItem onClick={handleClose}>Menu Item 3</MenuItem>
                  </Menu>
                </div>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CreativeCards;
