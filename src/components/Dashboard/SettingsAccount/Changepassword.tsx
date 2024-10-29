"use client";
import React, { useState } from "react";
import { TextField, Card, CardContent, Typography, Box, Paper, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

const StyledCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
}));

const InputRow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginBottom: theme.spacing(2),
  alignItems: "flex-start",
}));

function Changepassword() {
  const [formValues, setFormValues] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [isSaveEnabled, setIsSaveEnabled] = useState(false);
  const [errors, setErrors] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    const updatedFormValues = { ...formValues, [id]: value };
    setFormValues(updatedFormValues);

    const isFilled = Object.values(updatedFormValues).every((val) => val.trim() !== "");

    let newErrors = { newPassword: "", confirmPassword: "" };

    if (updatedFormValues.newPassword.length < 6) {
      newErrors.newPassword = "New Password must be at least 6 characters.";
    }
    if (updatedFormValues.newPassword !== updatedFormValues.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    setIsSaveEnabled(isFilled && !newErrors.newPassword && !newErrors.confirmPassword);
  };

  const handleSave = () => {
    console.log("Form values:", formValues);
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Change Password
      </Typography>
      <br />
      <form>
        <Grid rowGap={2} columnSpacing={2} container>
          <Grid item xs={12}>
            <Typography variant="body1">
              Old Password <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              id="oldPassword"
              fullWidth
              onChange={handleInputChange}
              required
              type="password"
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              New Password <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              id="newPassword"
              fullWidth
              onChange={handleInputChange}
              required
              type="password"
              size="small"
              error={!!errors.newPassword}
              helperText={errors.newPassword}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              Confirm Password <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              id="confirmPassword"
              fullWidth
              onChange={handleInputChange}
              required
              type="password"
              size="small"
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
            />
          </Grid>
          <Grid item xs={12} container justifyContent={"flex-end"}>
            <Button variant="contained" onClick={handleSave} disabled={!isSaveEnabled}>
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default Changepassword;
