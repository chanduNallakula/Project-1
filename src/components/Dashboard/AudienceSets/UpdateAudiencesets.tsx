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
  CircularProgress,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { DashboardTitle } from "../DashboardContainer";
import { useQuery } from "@tanstack/react-query";
import { getCountry } from "@/apis/country";
import { getMyState } from "@/apis/state";
import { getMyCity } from "@/apis/city";
import usePostCall from "@/hooks/usePostCall";
import toast from "react-hot-toast";
import { getAudinceset } from "@/apis/audienceset";
import { SelectChangeEvent } from "@mui/material";

// Define the StateData and CityData interfaces
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

interface UpdateAudiencesetsProps {
  openDialog: boolean;
  handleDialogClose: () => void;
  asId: number;
}

const UpdateAudiencesets = ({ openDialog, handleDialogClose, asId }: UpdateAudiencesetsProps) => {
  const [formData, setFormData] = useState({
    audienceName: "",
    audienceDescription: "",
    uploadedFile: null as File | null,
    selectedCountry: "",
    selectedState: "",
    selectedCity: "",
  });
  const [error, setError] = useState(false);

  // State data from the API
  const [stateList, setStateList] = useState<StateData[]>([]);
  const [cityList, setCityList] = useState<CityData[]>([]);
  const [isLoadingStates, setIsLoadingStates] = useState(false);
  const [isLoadingCities, setIsLoadingCities] = useState(false);

  const { data: audiencesets } = useQuery({
    queryKey: ["audiencesets"],
    queryFn: () => getAudinceset(),
  });

  const audienceToEdit = audiencesets?.list?.find((audienceset) => audienceset?.asId === asId);

  useEffect(() => {
    if (audienceToEdit) {
      setFormData({
        audienceName: audienceToEdit.asName || "",
        audienceDescription: audienceToEdit.asDesc || "",
        uploadedFile: null,
        selectedCountry: audienceToEdit.cId?.toString() || "",
        selectedState: audienceToEdit.sId?.toString() || "",
        selectedCity: audienceToEdit.ctId?.toString() || "",
      });
    }
  }, [audienceToEdit]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleCountryChange = async (event: SelectChangeEvent<string>) => {
    const cId = event.target.value;
    setFormData((prev) => ({
      ...prev,
      selectedCountry: cId,
      selectedState: "",
      selectedCity: "",
    }));
    fetchStates(cId);
  };

  const handleStateChange = async (event: SelectChangeEvent<string>) => {
    const stateId = event.target.value;
    setFormData((prev) => ({
      ...prev,
      selectedState: stateId,
      selectedCity: "",
    }));
    fetchCities(stateId);
  };

  const handleCityChange = (event: SelectChangeEvent<string>) => {
    setFormData((prev) => ({
      ...prev,
      selectedCity: event.target.value,
    }));
  };

  const fetchStates = async (cId: string) => {
    setIsLoadingStates(true);
    try {
      const states = await getMyState(parseInt(cId));
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
      const cities = await getMyCity(parseInt(stateId));
      setCityList(cities);
    } catch (error) {
      console.error("Error fetching cities:", error);
    } finally {
      setIsLoadingCities(false);
    }
  };

  const handleUpload = async () => {
    const {
      audienceName,
      audienceDescription,
      uploadedFile,
      selectedCountry,
      selectedState,
      selectedCity,
    } = formData;

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

    const formDataToSend = new FormData();
    formDataToSend.append("asId", asId.toString());
    formDataToSend.append("asName", audienceName);
    formDataToSend.append("cId", selectedCountry);
    formDataToSend.append("sId", selectedState.toString());
    formDataToSend.append("ctId", selectedCity);
    formDataToSend.append("asDesc", audienceDescription);
    formDataToSend.append("asPicPath", uploadedFile as File);
    formDataToSend.append("createdBy", "defaultUser");

    try {
      const response = await Audienceset("/audiencesets/update", formDataToSend);
      if (response?.data.status === "success") {
        toast.success(response?.data.message);
        handleDialogClose();
      } else {
        toast.error(response?.data.message);
      }
    } catch (error) {
      console.error("Error updating audience:", error);
      toast.error("Failed to update audience. Please try again.");
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

  const { postCall: Audienceset, loading: addAudiencesetLoading } = usePostCall();

  return (
    <Dialog open={openDialog} maxWidth="lg" fullWidth>
      <div className="p-5">
        <DashboardTitle title="Edit Audience" />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="audienceName"
              id="audience-name-label"
              variant="outlined"
              label="Audience Name"
              fullWidth
              value={formData.audienceName}
              onChange={handleInputChange}
              error={error && !formData.audienceName}
            />
            {error && !formData.audienceName && (
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
                  value={formData.selectedCountry}
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

          {/* State and City Selectors */}
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
                  value={formData.selectedState}
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
                  value={formData.selectedCity}
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
              name="audienceDescription"
              label="Audience Description"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={formData.audienceDescription}
              onChange={handleInputChange}
              error={error && !formData.audienceDescription}
            />
            {error && !formData.audienceDescription && (
              <FormHelperText error>This field is required.</FormHelperText>
            )}
          </Grid>

          <Grid item xs={12}>
            <TextField type="file" name="uploadedFile" fullWidth onChange={handleInputChange} />

            {error && !formData.uploadedFile && (
              <FormHelperText error>File is required.</FormHelperText>
            )}
          </Grid>
        </Grid>

        <Grid container justifyContent="flex-end" spacing={2} marginTop={2}>
          <Grid item>
            <Button onClick={handleDialogClose} color="error">
              Cancel
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={handleUpload}
              disabled={addAudiencesetLoading}
            >
              {addAudiencesetLoading ? <CircularProgress size={24} /> : "Save"}
            </Button>
          </Grid>
        </Grid>
      </div>
    </Dialog>
  );
};

export default UpdateAudiencesets;
