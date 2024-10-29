import React from "react";
import { Button, Typography } from "@mui/material";
import SearchBox from "@/components/SearchBox/SearchBox";
import { Grid } from "@mui/material";
import TableItemsPerSelect from "@/components/Table/components/TableItemsPerSelect";

const DEFAULT_IMAGES = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTctGLXN0qGt4eFVH3CxW9VEIyjKau_SI8kQw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP8ilOOdG4ONbQsczbLxri9mR4DrhmTf2g8g&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6y5vF1OvsPHX0d1nuVo0bi8IT8Yf_20PKw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAMtikgqiDqfxrSJ4lrMbVPSkkynlHYtHtHw&s",
];

export interface AudienceCardProps {
  asName: string;
  asStatus: number;
  ctId: number;
  asDesc: string;
  asPicPath: string;
  cId: number;
  sId: number;
  createdBy: number;
  createdOn: string;
  devices?: number;
  geofences?: number;
}

interface AudienceCardsGridProps {
  data: any[];
}

const AudienceCardsGrid = ({ data }: AudienceCardsGridProps) => {
  const [searchValue, setSearchValue] = React.useState("");
  const [itemsPerPage, setItemsPerPage] = React.useState(5);

  const handleSetItemsPerPage = (value: number) => {
    setItemsPerPage(value);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const filteredData = data.filter((item) => {
    return item.asName.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <Grid container spacing={2}>
      <Grid item container xs={12}>
        <Grid item xs={6}>
          <SearchBox
            inputValue={searchValue}
            handleSearch={handleSearch}
            placeholder="Search Audience"
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
      {filteredData.length > 0 ? (
        <Grid item container spacing={2}>
          {filteredData.map((item, index) => {
            return (
              <Grid xs={12} sm={6} md={4} lg={12 / itemsPerPage} item key={item.asName}>
                <AudienceCard {...item} key={index} />
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <Grid my={8} item xs={12}>
          <Typography variant="h6" align="center">
            No audience found
          </Typography>
        </Grid>
      )}

      <Grid container spacing={2}></Grid>
    </Grid>
  );
};

export default AudienceCardsGrid;

const AudienceCard = (props: AudienceCardProps) => {
  // Function to get a random image from DEFAULT_IMAGES
  const getRandomImage = () => {
    return DEFAULT_IMAGES[Math.floor(Math.random() * DEFAULT_IMAGES.length)];
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        borderRadius: "9px",
      }}
    >
      <div style={{ overflow: "hidden", flex: 1, maxHeight: "150px" }}>
        <img
          src={getRandomImage()} // Use the random image
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
          alt={props.asName || "Default image"}
        />
      </div>
      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          style={{
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          {props.asName}
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <Typography style={{ fontSize: "12px" }}>
            Device: {props.devices !== undefined ? props.devices : 0}
          </Typography>
          <Typography style={{ fontSize: "12px" }}>
            Geofences: {props.geofences !== undefined ? props.geofences : 0}
          </Typography>
        </div>

        <Button
          variant="contained"
          sx={{
            marginTop: "20px",
          }}
        >
          Add to Campaign
        </Button>
      </div>
    </div>
  );
};
