import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  InputAdornment,
  Alert,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link, useLocation, useNavigate } from "react-router-dom";

function CreateAccount() {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Password check
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Save user
    const user = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isLoggedIn", "true");

    navigate("/booking", { state: location.state });
  };

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 70px)",
        background: "linear-gradient(135deg, #F2FAFA 0%, #F7F9FC 55%, #EEF5F4 100%)",
        display: "flex",
        alignItems: "center",
        py: { xs: 3, sm: 5 },
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2.5, sm: 5 },
            borderRadius: 3,
            border: "1px solid #DCE7EC",
            boxShadow: "0 20px 55px rgba(23, 48, 66, 0.10)",
          }}
        >
          {/* Header */}
          <Box textAlign="center" mb={4}>
            <Box
              sx={{
                width: 54,
                height: 54,
                mx: "auto",
                mb: 2,
                display: "grid",
                placeItems: "center",
                borderRadius: "50%",
                color: "primary.dark",
                backgroundColor: "primary.light",
              }}
            >
              <VerifiedUserOutlinedIcon fontSize="medium" />
            </Box>
            <Typography sx={{ color: "primary.main", fontSize: 12, fontWeight: 800, letterSpacing: "0.14em" }}>
              PATIENT REGISTRATION
            </Typography>
            <Typography variant="h4" fontWeight="bold" color="text.primary" sx={{ mt: 0.75 }}>
              Create Account
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 1 }}>
              Your care journey starts here.
            </Typography>
          </Box>

          {/* Error */}
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          {/* Form */}
          <Box component="form" onSubmit={handleSubmit}>
            {/* Name */}
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              margin="normal"
              helperText="This is the name we will use when we contact you."
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon color="primary" />
                  </InputAdornment>
                ),
              }}
            />

            {/* Email */}
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              margin="normal"
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon color="primary" />
                  </InputAdornment>
                ),
              }}
            />

            {/* Password */}
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              margin="normal"
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon color="primary" />
                  </InputAdornment>
                ),
              }}
            />

            {/* Confirm Password */}
            <TextField
              fullWidth
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              margin="normal"
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon color="primary" />
                  </InputAdornment>
                ),
              }}
            />

            {/* Create Button */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{
                mt: 3,
                py: 1.5,
                fontSize: "16px",
              }}
              endIcon={<ArrowForwardIcon />}
            >
              Create Account
            </Button>

            {/* Login */}
            <Typography textAlign="center" color="text.secondary" sx={{ mt: 3 }}>
              Already have an account?{" "}
              <Button
                component={Link}
                to="/login"
                sx={{
                  textTransform: "none",
                  fontWeight: "bold",
                }}
              >
                Login
              </Button>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default CreateAccount;