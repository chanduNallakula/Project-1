"use client";

import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import LoginWrapper from "./LoginWrapper";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import HttpsRoundedIcon from "@mui/icons-material/HttpsRounded";
import { LoginLink } from "./LoginWrapper.style";
import { useRouter } from "next/navigation";
import { CircularProgress, IconButton, darken } from "@mui/material";
import toast from "react-hot-toast";
import usePostCall from "@/hooks/usePostCall";
import axios from "axios";
import { Visibility } from "@mui/icons-material";

const Login = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const { postCall } = usePostCall();
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const { email, password } = formData;
    const formDataObj = new FormData();
    formDataObj.append("emailId", email);
    formDataObj.append("password", password);

    try {
      const response = await axios.post("http://134.119.186.22/users/login", formDataObj);

      if (response && response.data && response.data.status === "success") {
        toast.success("Login successful!");
        router.push("/dashboard");
      } else {
        toast.error("Invalid email or password");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginWrapper text={"Welcome to"} coloredText={"Geo Saga"}>
      <form onSubmit={handleFormSubmit}>
        <Paper
          sx={{
            "&.MuiPaper-root": {
              backgroundColor: "#fff",
              maxWidth: "400px",
              display: "flex",
              margin: "30px auto",
              flexDirection: "column",
              gap: "20px",
              padding: "20px 20px",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            <TextField
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              fullWidth
              label="Email"
              id="email"
              placeholder="Your email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailRoundedIcon sx={{ color: "#000" }} />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              fullWidth
              label="Password"
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Your password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <HttpsRoundedIcon sx={{ color: "#000" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      sx={{ color: "#000" }}
                    >
                      <Visibility />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Button
              sx={{
                backgroundColor: "#2d9bf0",
                padding: "10px 0",
              }}
              variant="contained"
              type="submit"
              onClick={() => setLoading(true)}
              // disabled={loading}
            >
              {!loading ? (
                <Typography> Sign In</Typography>
              ) : (
                <CircularProgress color="inherit" size={20} />
              )}
            </Button>
            <Typography
              sx={{
                color: "#1e1e1e",
                textAlign: "center",
                margin: "10px 0",
                fontWeight: "600",
              }}
            >
              (or)
            </Typography>
            <Button
              sx={{
                backgroundColor: "#da0063",
                padding: "10px 0",
                "&:hover": {
                  backgroundColor: darken("#da0063", 0.3),
                },
              }}
              variant="contained"
            >
              <Typography sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <EmailRoundedIcon /> <span>Sign In with Google</span>
              </Typography>
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Link href={"#"}>
              <LoginLink underline={"true"}>Forgot Password?</LoginLink>
            </Link>
            <Link href={"#"}>
              <LoginLink underline={"true"}>Privacy</LoginLink>
            </Link>
          </Box>
        </Paper>
      </form>
    </LoginWrapper>
  );
};

export default Login;
