import React from "react";
import {
  Box,
  Button,
  Card,
  Grid,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import SearchBox from "@/components/SearchBox/SearchBox";
import TableItemsPerSelect from "@/components/Table/components/TableItemsPerSelect";
import ViewCampaigns from "./ViewCampaigns";

interface CampaignCardProps {
  cId: number;
  cName: string;
  cDescription: string;
  oId: number;
  asId: number;
  startDate: string;
  endDate: string;
  csId: number;
  budget: number;
  pixelId: number;
  callbackId: number;
  opens: number;
  clicks: number;
  oName: string;
  startTime: string;
  endTime: string;
  pixelResponse: string;
  callbackRedirectionURL: string;

  [key: string]: any;
}

interface CampaignCardsGridProps {
  data: CampaignCardProps[];
}

const CampaignCardsGrid: React.FC<CampaignCardsGridProps> = ({ data }) => {
  const [searchValue, setSearchValue] = React.useState("");
  const [itemsPerPage, setItemsPerPage] = React.useState(4);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [selectedCampaignId, setSelectedCampaignId] = React.useState<
    number | null
  >(null);

  const handleSetItemsPerPage = (value: number) => {
    setItemsPerPage(value);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleOpenDialog = (cId: number) => {
    setSelectedCampaignId(cId);
    setOpenDialog(true);
  };

  const filteredData = data.filter((item) =>
    item.cName.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Grid container spacing={2}>
      <Grid item container xs={12}>
        <Grid item xs={6}>
          <SearchBox
            inputValue={searchValue}
            handleSearch={handleSearch}
            placeholder="Search campaigns"
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
          {filteredData.map((item) => {
            return (
              <Grid
                xs={12}
                sm={6}
                md={4}
                lg={12 / itemsPerPage}
                item
                key={item.cId}
              >
                <CampaignCard {...item} onViewDetails={handleOpenDialog} />{" "}
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <Grid my={8} item xs={12}>
          <Typography variant="h6" align="center">
            No campaigns found
          </Typography>
        </Grid>
      )}

      {selectedCampaignId && (
        <ViewCampaigns
          openDialog={openDialog}
          handleDialogClose={() => setOpenDialog(false)}
          cId={selectedCampaignId}
        />
      )}
    </Grid>
  );
};

const CampaignCard: React.FC<
  CampaignCardProps & { onViewDetails: (cId: number) => void }
> = ({ cId, cName, startDate, endDate, budget, onViewDetails }) => {
  return (
    <Card
      elevation={1}
      sx={{ height: "100%", padding: "20px", backgroundColor: "white" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6">{cName}</Typography>
        <Chip
          label={`Active`}
          sx={{ backgroundColor: "#1e8c35", color: "white" }}
        />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="body2" color="text.secondary">
          Start Date: {new Date(startDate).toLocaleDateString()}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          End Date: {new Date(endDate).toLocaleDateString()}
        </Typography>
      </Box>
      <Stack direction={"row"} justifyContent={"space-between"} gap={3} my={5}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            Budget
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            {budget.toLocaleString()}
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            Opens
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            {0}
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            Clicks
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            {0}
          </Typography>
        </Box>
      </Stack>

      <Box sx={{ alignSelf: "stretch" }}>
        <Button fullWidth onClick={() => onViewDetails(cId)}>
          View Details
        </Button>{" "}
      </Box>
    </Card>
  );
};

export default CampaignCardsGrid;
