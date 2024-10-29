import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import styled from "@emotion/styled";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Alert,
  AlertTitle,
} from "@mui/material";
import { useDeckglPolygonModal, useMapUserData } from "@/store/googleMapStore";
import toast from "react-hot-toast";

function MultipleSelectChip({ selectedColumnsCount }: { selectedColumnsCount: string[] }) {
  const myAudiencesStore = useMapUserData.use.myAudiencesStore();
  const setMyAudiencesStore = useMapUserData.use.setMyAudiencesStore();
  const [audiences, setAudiences] = React.useState<string>("");

  const handleChange = (event: SelectChangeEvent<typeof audiences>) => {
    const {
      target: { value },
    } = event;
    setAudiences(value);
  };
  const [showError, setShowError] = React.useState(false);

  const handleAddAudience = () => {
    if (audiences.length === 0) {
      setShowError(true);
      return;
    }
    const count =
      selectedColumnsCount.length === 0
        ? 2345
        : selectedColumnsCount.reduce((acc, curr) => acc + parseInt(curr), 0);

    setShowError(false);
    const updatedAudiences = myAudiencesStore.map((audience) => {
      if (audiences === audience.name) {
        return { ...audience, count: audience.count + count };
      }
      return audience;
    });
    successAdded();

    setMyAudiencesStore(updatedAudiences);
    setOpenAddAudienceModalStore(false);
  };

  const handleCancle = () => {
    setOpenAddAudienceModalStore(false);
  };

  const setOpenAddAudienceModalStore = useDeckglPolygonModal.use.setOpenGeofenceForModal();

  const successAdded = () =>
    toast(
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        Audience added successfully.
      </Alert>
    );

  if (audiences.length !== 0 && showError) {
    setShowError(false);
  }
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          justifyContent: "space-between",
          alignItems: "flex-start",
          margin: "20px 0",
        }}
      >
        <Typography sx={{ whiteSpace: "nowrap", fontWeight: 500 }}>Add to Audience:</Typography>
        <FormControl fullWidth>
          <InputLabel
            sx={{
              color: "#323b4b",
            }}
            size="small"
            id="my-audience-select-label"
          >
            Select Audience
          </InputLabel>
          <Select
            size="small"
            labelId="my-audience-select-label"
            value={audiences}
            onChange={handleChange}
            label="Select Audience"
          >
            {myAudiencesStore.map((audience) => (
              <MenuItem key={audience.id} value={audience.name}>
                {audience.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 1,
        }}
      >
        {showError && audiences.length === 0 && (
          <Alert
            sx={{
              background: "transparent",
              alignSelf: "flex-end",
              p: 0,
              // "& .MuiAlert-icon": {
              //   color: "#0984e3",
              // },
            }}
            severity="error"
          >
            <Typography sx={{ fontSize: "14px" }} color={"error"}>
              Please select an audience to add.
            </Typography>
          </Alert>
        )}

        <Box
          sx={{
            marginLeft: "auto",
          }}
        >
          <Button color="error" onClick={handleCancle} variant="contained">
            Cancel
          </Button>
          &nbsp; &nbsp;
          <Button onClick={handleAddAudience} variant="contained">
            Add
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

function AddAudienceModalTable() {
  const selectedGeofenceStore = useMapUserData.use.selectedGeofenceForModal();

  const headers = ["1", "2", "3", "4", "5", "6", "7+"];

  const cellData = ["2345", "2123", "230", "174", "152", "12", "3"];

  const [selectedColumns, setSelectedColumns] = React.useState<string[]>([]);

  const handleColumnSelect = (column: string) => {
    if (selectedColumns.includes(column)) {
      setSelectedColumns(selectedColumns.filter((col) => col !== column));
    } else {
      setSelectedColumns([...selectedColumns, column]);
    }
  };

  const selectedColumnsStyles = {
    backgroundColor: "rgb(65,105,225, 0.8)",
    color: "white",
  };

  return (
    <Paper
      sx={{
        backgroundColor: "rgba(255,255,255,0.7)",
        padding: "20px",
      }}
      elevation={4}
    >
      {selectedGeofenceStore && (
        <Typography variant="h6" sx={{ fontWeight: 500, marginBottom: "20px" }}>
          Geofence: {selectedGeofenceStore}
        </Typography>
      )}

      <TableContainer component={Paper} sx={{ maxWidth: "600px" }}>
        <Table>
          <TableHead>
            <TableRow>
              {headers.map((header, index) => (
                <CustomTableCell
                  key={index}
                  sx={{
                    border: "1px solid whitesmoke",
                    backgroundColor: "rgb(65,105,225)",
                    color: "white",
                    textAlign: "center",
                    verticalAlign: "middle",
                    padding: "8px",
                    fontSize: "18px",
                    width: "5%",
                  }}
                >
                  {header}
                </CustomTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {cellData.map((cell, cellIndex) => (
                <CustomTableCell
                  onClick={() => handleColumnSelect(cell)}
                  key={cellIndex}
                  sx={{
                    border: "1px solid whitesmoke",
                    textAlign: "center",
                    verticalAlign: "middle",
                    fontWeight: 500,
                    padding: "8px",
                    fontSize: "16px",
                    width: "5%",
                    userSelect: "none",
                    ...(selectedColumns.includes(cell) ? selectedColumnsStyles : {}),
                  }}
                >
                  {cell}
                </CustomTableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <MultipleSelectChip selectedColumnsCount={selectedColumns} />
    </Paper>
  );
}

export default AddAudienceModalTable;

const CustomTableCell = styled(TableCell)`
  cursor: pointer;
`;
