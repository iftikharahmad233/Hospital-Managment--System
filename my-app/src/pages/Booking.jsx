import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  MenuItem,
  Alert,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

function Booking() {
  const location = useLocation();
  const navigate = useNavigate();

  // Get selected doctor
  const doctor = location.state?.doctor;

  const [formData, setFormData] = useState({
    patientName: "",
    date: "",
    time: "",
    reason: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Appointment:", {
      doctor,
      ...formData,
    });

    setSuccess(true);
  };

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 70px)",
        backgroundColor: "#f7f9fc",
        py: 6,
      }}
    >
      <Container maxWidth="md">
        {/* Heading */}
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          color="primary"
          mb={1}
        >
          Book Appointment
        </Typography>

        <Typography textAlign="center" color="text.secondary" mb={4}>
          Schedule an appointment with your selected doctor
        </Typography>

        {/* Success */}
        {success && (
          <Alert severity="success" sx={{ mb: 3 }}>
            Appointment booked successfully!
          </Alert>
        )}

        <Paper
          elevation={3}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 4,
          }}
        >
          {/* Doctor Information */}
          {doctor && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
                p: 2,
                mb: 4,
                backgroundColor: "#f1f5ff",
                borderRadius: 3,
              }}
            >
              <Box
                component="img"
                src={doctor.image}
                alt={doctor.name}
                sx={{
                  width: 90,
                  height: 90,
                  borderRadius: 2,
                  objectFit: "cover",
                }}
              />

              <Box>
                <Typography variant="h6" fontWeight="bold">
                  {doctor.name}
                </Typography>

                <Typography color="text.secondary">
                  {doctor.specialty}
                </Typography>

                <Typography
                  color="success.main"
                  variant="body2"
                  sx={{ mt: 0.5 }}
                >
                  ● Available
                </Typography>
              </Box>
            </Box>
          )}

          {!doctor && (
            <Alert severity="warning" sx={{ mb: 3 }}>
              No doctor selected. Please select a doctor first.
            </Alert>
          )}

          {/* Booking Form */}
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {/* Patient Name */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Patient Name"
                  name="patientName"
                  value={formData.patientName}
                  onChange={handleChange}
                  required
                />
              </Grid>

              {/* Date */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Appointment Date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>

              {/* Time */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  select
                  label="Appointment Time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="09:00 AM">09:00 AM</MenuItem>
                  <MenuItem value="10:00 AM">10:00 AM</MenuItem>
                  <MenuItem value="11:00 AM">11:00 AM</MenuItem>
                  <MenuItem value="02:00 PM">02:00 PM</MenuItem>
                  <MenuItem value="03:00 PM">03:00 PM</MenuItem>
                  <MenuItem value="04:00 PM">04:00 PM</MenuItem>
                </TextField>
              </Grid>

              {/* Reason */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Reason for Visit"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  placeholder="Enter your problem or reason for appointment"
                  required
                />
              </Grid>

              {/* Buttons */}
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    justifyContent: "center",
                    mt: 2,
                  }}
                >
                  <Button
                    variant="outlined"
                    onClick={() => navigate("/doctors")}
                    sx={{
                      borderRadius: 3,
                      px: 4,
                      textTransform: "none",
                    }}
                  >
                    Back
                  </Button>

                  <Button
                    type="submit"
                    variant="contained"
                    disabled={!doctor}
                    sx={{
                      borderRadius: 3,
                      px: 4,
                      textTransform: "none",
                    }}
                  >
                    Confirm Appointment
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Booking;