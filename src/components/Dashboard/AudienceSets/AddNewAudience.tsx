import {
  Card,
  Container,
  Typography,
  TextField,
  Button,
  InputLabel,
  FormHelperText,
  Dialog,
  Grid,
  Select,
  FormControl,
  MenuItem,
  SelectChangeEvent,
  CircularProgress,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { DashboardTitle } from "../DashboardContainer";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCountry } from "@/apis/country";
import { getMyState } from "@/apis/state";
import { getMyCity } from "@/apis/city";
import usePostCall from "@/hooks/usePostCall";
import toast from "react-hot-toast";

interface StateData {
  sId: number;
  sName: string;
  cId: number;
}

interface CityData {
  ctId: number;
  ctName: string;
  sId: number;
}

interface AddNewAudiencesProps {
  openDialog: boolean;
  handleDialogClose: () => void;
}

const AddNewAudiences = ({
  openDialog,
  handleDialogClose,
}: AddNewAudiencesProps) => {
  const [audienceName, setAudienceName] = useState<string>("");
  const [audienceDescription, setAudienceDescription] = useState<string>("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [error, setError] = useState<boolean>(false);

  // New States for Dropdowns
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedState, setSelectedState] = useState<number | string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");

  // State data from the API
  const [stateList, setStateList] = useState<StateData[]>([]);
  const [cityList, setCityList] = useState<CityData[]>([]);
  const [isLoadingStates, setIsLoadingStates] = useState(false);
  const [isLoadingCities, setIsLoadingCities] = useState(false);

  // Setup Query Client for refetching
  const queryClient = useQueryClient();

  // Handle form inputs
  const handleAudienceNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setAudienceName(event.target.value);

  const handleAudienceDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setAudienceDescription(event.target.value);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setUploadedFile(event.target.files[0]);
      setError(false);
    }
  };

  const handleCountryChange = async (event: SelectChangeEvent) => {
    const cId = event.target.value as string;
    setSelectedCountry(cId);
    setSelectedState(""); // Reset state when country changes
    setSelectedCity(""); // Reset city when country changes
    fetchStates(cId); // Fetch states whenever country changes
  };

  const handleStateChange = async (event: SelectChangeEvent) => {
    const stateId = event.target.value as string;
    setSelectedState(stateId);
    setSelectedCity(""); // Reset city when state changes
    fetchCities(stateId); // Fetch cities whenever state changes
  };

  const handleCityChange = (event: SelectChangeEvent) =>
    setSelectedCity(event.target.value as string);

  const fetchStates = async (cId: string) => {
    setIsLoadingStates(true);
    try {
      const states = await getMyState(parseInt(cId)); // Ensure correct type passed to the API
      setStateList(states);
    } catch (error) {
      console.error("Error fetching states:", error);
    } finally {
      setIsLoadingStates(false);
    }
  };

  const fetchCities = async (stateId: string) => {
    setIsLoadingCities(true);
    try {
      const cities = await getMyCity(parseInt(stateId)); // Fetch city data using the API
      setCityList(cities);
    } catch (error) {
      console.error("Error fetching cities:", error);
    } finally {
      setIsLoadingCities(false);
    }
  };

  const handleUpload = async () => {
    if (
      !audienceName ||
      !audienceDescription ||
      !uploadedFile ||
      !selectedCountry ||
      !selectedState ||
      !selectedCity
    ) {
      setError(true);
      return;
    }

    // Prepare formData to send to the API
    const formData = new FormData();
    formData.append("asName", audienceName);
    formData.append("cId", selectedCountry);
    formData.append("sId", selectedState.toString());
    formData.append("ctId", selectedCity);
    formData.append("asDesc", audienceDescription);
    formData.append("asPicPath", uploadedFile);
    formData.append("createdBy", "defaultUser");

    try {
      const response = await addAudienceset("/audiencesets/add", formData);
      if (response?.data.status === "success") {
        toast.success(response?.data.message);
        handleDialogClose();

        queryClient.invalidateQueries({
          queryKey: ["countries"],
        });
      } else {
        toast.error(response?.data.message);
      }
    } catch (error) {
      console.error("Error adding audience:", error);
      toast.error("Failed to create audience. Please try again.");
    }
  };

  const {
    data: countryList,
    isLoading: isLoadingCountries,
    isError: isCountryError,
  } = useQuery({
    queryKey: ["countries"],
    queryFn: getCountry,
  });

  const {
    postCall: addAudienceset,
    loading: addAudiencesetLoading,
    error: addAudiencesetError,
  } = usePostCall();

  return (
    <Dialog open={openDialog} maxWidth="lg" fullWidth>
      <div className="p-5">
        <DashboardTitle title="Add New Audience" />

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="audience-name-label"
              variant="outlined"
              label="Audience Name"
              fullWidth
              value={audienceName}
              onChange={handleAudienceNameChange}
              error={error && !audienceName}
            />
            {error && !audienceName && (
              <FormHelperText error>This field is required.</FormHelperText>
            )}
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel size="small" id="country-label">
                Select Country
              </InputLabel>
              {isLoadingCountries ? (
                <CircularProgress size={24} />
              ) : isCountryError ? (
                <Typography color="error">Failed to load countries</Typography>
              ) : (
                <Select
                  fullWidth
                  labelId="country-label"
                  id="country-select"
                  label="Select Country"
                  size="small"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                >
                  {countryList?.map((country) => (
                    <MenuItem key={country.cId} value={country.cId}>
                      {country.cName}
                    </MenuItem>
                  ))}
                </Select>
              )}
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel size="small">Select State</InputLabel>
              {isLoadingStates ? (
                <CircularProgress size={24} />
              ) : (
                <Select
                  fullWidth
                  label="Select State"
                  size="small"
                  value={selectedState.toString()}
                  onChange={handleStateChange}
                >
                  {stateList.length > 0 ? (
                    stateList.map((state) => (
                      <MenuItem key={state.sId} value={state.sId}>
                        {state.sName}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem disabled>No states available</MenuItem>
                  )}
                </Select>
              )}
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel size="small">Select City</InputLabel>
              {isLoadingCities ? (
                <CircularProgress size={24} />
              ) : (
                <Select
                  fullWidth
                  label="Select City"
                  size="small"
                  value={selectedCity}
                  onChange={handleCityChange}
                >
                  {cityList.length > 0 ? (
                    cityList.map((city) => (
                      <MenuItem key={city.ctId} value={city.ctId}>
                        {city.ctName}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem disabled>No cities available</MenuItem>
                  )}
                </Select>
              )}
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="audience-description-label"
              variant="outlined"
              label="Audience Description"
              fullWidth
              multiline
              rows={4}
              value={audienceDescription}
              onChange={handleAudienceDescriptionChange}
              error={error && !audienceDescription}
            />
            {error && !audienceDescription && (
              <FormHelperText error>This field is required.</FormHelperText>
            )}
          </Grid>

          <Grid item xs={12}>
            <TextField
              size="small"
              InputLabelProps={{ shrink: true }}
              fullWidth
              type="file"
              onChange={handleFileChange}
              error={error && !uploadedFile}
            />
            {error && !uploadedFile && (
              <FormHelperText error>This field is required.</FormHelperText>
            )}
          </Grid>

          <Grid
            container
            spacing={2}
            mt={1}
            display="flex"
            justifyContent="flex-end"
          >
            <Grid item xs={1} sm={1}>
              <Button
                variant="contained"
                color="error"
                fullWidth
                onClick={handleDialogClose}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item xs={1} sm={1}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleUpload}
              >
                {addAudiencesetLoading ? (
                  <CircularProgress size={24} />
                ) : (
                  "Create"
                )}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Dialog>
  );
};

export default AddNewAudiences;
