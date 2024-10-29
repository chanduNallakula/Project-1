"use client";
import React, { useRef, useState } from "react";
import {
  TextField,
  Avatar,
  Button,
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  Container,
} from "@mui/material";
import { styled } from "@mui/system";

const AccountContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  paddingTop: theme.spacing(3),
  flexDirection: "column",
  paddingLeft: "20px",
  [theme.breakpoints.down("sm")]: {
    alignItems: "center",
    paddingLeft: 0,
  },
}));

const StyledCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  marginLeft: "20px",
  [theme.breakpoints.down("sm")]: {
    width: "90%",
    marginLeft: 0,
  },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const InputGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));

function SettingsAccount() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    role: "",
  });
  const [isSaveEnabled, setIsSaveEnabled] = useState(false);
  const [avatarImage, setAvatarImage] = useState<string | undefined>(undefined);
  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    role: "",
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setAvatarImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    const updatedFormValues = { ...formValues, [id]: value };
    setFormValues(updatedFormValues);

    let errorMessage = "";
    if (value.trim() === "") {
      errorMessage = `${id.charAt(0).toUpperCase() + id.slice(1)} is required.`;
    } else if (id === "email" && !/\S+@\S+\.\S+/.test(value)) {
      errorMessage = "Email is not valid.";
    } else if (id === "firstname" && value.length < 2) {
      errorMessage = "First Name must be at least 2 characters.";
    } else if (id === "lastname" && value.length < 2) {
      errorMessage = "Last Name must be at least 2 characters.";
    } else if (id === "role" && value.length < 3) {
      errorMessage = "Role must be at least 3 characters.";
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: errorMessage,
    }));

    const isFilled = Object.values(updatedFormValues).every(
      (val) =>
        val.trim() !== "" && !errors.firstname && !errors.lastname && !errors.email && !errors.role
    );
    setIsSaveEnabled(isFilled);
  };

  const handleSave = () => {
    console.log("Form values:", formValues);
  };

  const handleAvatarClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Account
      </Typography>
      <div>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar
            onClick={handleAvatarClick}
            src={avatarImage}
            sx={{
              width: 140,
              height: 140,
              mb: 1,
              cursor: "pointer",
            }}
          >
            MY
          </Avatar>
          <input
            hidden
            accept="image/*"
            id="profile-picture"
            type="file"
            onChange={handleFileChange}
            ref={fileInputRef}
          />
        </Box>

        <Box display="flex" justifyContent="flex-end" gap={2}>
          <Typography variant="subtitle2" color="textSecondary" fontSize="0.675rem">
            File format: PNG, JPG
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" fontSize="0.675rem">
            Maximum size: 2MB
          </Typography>
        </Box>
      </div>
      <Grid rowSpacing={4} columnSpacing={2} container>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">
            First Name <span style={{ color: "red" }}>*</span>
          </Typography>
          <TextField
            id="firstname"
            fullWidth
            onChange={handleInputChange}
            required
            type="text"
            size="small"
            error={!!errors.firstname}
            helperText={errors.firstname}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">
            Last Name <span style={{ color: "red" }}>*</span>
          </Typography>
          <TextField
            id="lastname"
            fullWidth
            onChange={handleInputChange}
            required
            type="text"
            size="small"
            error={!!errors.lastname}
            helperText={errors.lastname}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">
            Email <span style={{ color: "red" }}>*</span>
          </Typography>
          <TextField
            id="email"
            fullWidth
            onChange={handleInputChange}
            required
            type="email"
            error={!!errors.email}
            size="small"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">
            Role <span style={{ color: "red" }}>*</span>
          </Typography>
          <TextField
            id="role"
            fullWidth
            onChange={handleInputChange}
            required
            type="text"
            size="small"
            error={!!errors.role}
            helperText={errors.role}
          />
        </Grid>
      </Grid>

      <Button
        variant="contained"
        onClick={handleSave}
        disabled={!isSaveEnabled}
        sx={{
          mt: 2,
          backgroundColor: "blue",
          color: "white",
          float: "right",
        }}
      >
        Save
      </Button>
    </div>
  );
}

export default SettingsAccount;
