import React, { useState } from "react";

import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import EmergencyOutlinedIcon from "@mui/icons-material/EmergencyOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <Box
      sx={{
        backgroundColor: "#F5FAFA",
        minHeight: "100vh",
      }}
    >
      {/* ===================================================== */}
      {/* HERO / HEADER */}
      {/* ===================================================== */}

      <Box
        sx={{
          background:
            "linear-gradient(135deg, #073B4C 0%, #0C5968 100%)",
          color: "#FFFFFF",
          py: { xs: 5, md: 7 },
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            alignItems="center"
            spacing={4}
          >
            <Grid item xs={12} md={8}>
              <Typography
                sx={{
                  color: "#7ED6D0",
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  mb: 1.5,
                }}
              >
                WE ARE HERE TO HELP
              </Typography>

              <Typography
                component="h1"
                sx={{
                  fontSize: {
                    xs: 36,
                    sm: 44,
                    md: 52,
                  },
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: "-0.04em",
                }}
              >
                Contact Our Hospital
              </Typography>

              <Typography
                sx={{
                  color: "#C5DADD",
                  mt: 1.8,
                  maxWidth: 650,
                  fontSize: 15,
                  lineHeight: 1.8,
                }}
              >
                Have a question about an appointment, doctor,
                medical service, or our hospital? Our support team
                is ready to help you.
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: {
                    xs: "flex-start",
                    md: "flex-end",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    backgroundColor:
                      "rgba(255,255,255,0.08)",
                    border:
                      "1px solid rgba(255,255,255,0.15)",
                    borderRadius: 3,
                    p: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 45,
                      height: 45,
                      borderRadius: 2,
                      backgroundColor: "#7ED6D0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <PhoneOutlinedIcon
                      sx={{ color: "#073B4C" }}
                    />
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        color: "#AFCED1",
                        fontSize: 10,
                      }}
                    >
                      Emergency Support
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: 17,
                        fontWeight: 800,
                      }}
                    >
                      +92 300 1234567
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ===================================================== */}
      {/* MAIN CONTACT AREA */}
      {/* ===================================================== */}

      <Container maxWidth="xl">
        <Grid
          container
          spacing={{ xs: 3, md: 4 }}
          sx={{
            py: { xs: 4, md: 6 },
          }}
        >
          {/* ================================================= */}
          {/* LEFT — HOSPITAL INFORMATION */}
          {/* ================================================= */}

          <Grid item xs={12} md={5}>
            <Card
              elevation={0}
              sx={{
                height: "100%",
                borderRadius: 4,
                border: "1px solid #E0EEEE",
                backgroundColor: "#FFFFFF",
                overflow: "hidden",
              }}
            >
              {/* Card Header */}

              <Box
                sx={{
                  backgroundColor: "#EAF7F7",
                  p: { xs: 2.5, md: 3 },
                }}
              >
                <Typography
                  sx={{
                    color: "#159DA9",
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: "0.1em",
                  }}
                >
                  GET IN TOUCH
                </Typography>

                <Typography
                  sx={{
                    color: "#173F4A",
                    fontSize: 25,
                    fontWeight: 800,
                    mt: 0.7,
                  }}
                >
                  Hospital Information
                </Typography>

                <Typography
                  sx={{
                    color: "#71868D",
                    fontSize: 13,
                    lineHeight: 1.7,
                    mt: 1,
                  }}
                >
                  Contact our hospital team for appointments,
                  general questions, or healthcare assistance.
                </Typography>
              </Box>

              <CardContent
                sx={{
                  p: { xs: 2.5, md: 3 },
                }}
              >
                {/* Address */}

                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    mb: 3,
                  }}
                >
                  <ContactIcon>
                    <LocationOnOutlinedIcon />
                  </ContactIcon>

                  <Box>
                    <Typography
                      sx={{
                        color: "#173F4A",
                        fontSize: 14,
                        fontWeight: 800,
                      }}
                    >
                      Hospital Address
                    </Typography>

                    <Typography
                      sx={{
                        color: "#71868D",
                        fontSize: 13,
                        lineHeight: 1.7,
                        mt: 0.4,
                      }}
                    >
                      Main Boulevard,
                      <br />
                      Lahore, Punjab, Pakistan
                    </Typography>
                  </Box>
                </Box>

                {/* Phone */}

                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    mb: 3,
                  }}
                >
                  <ContactIcon>
                    <PhoneOutlinedIcon />
                  </ContactIcon>

                  <Box>
                    <Typography
                      sx={{
                        color: "#173F4A",
                        fontSize: 14,
                        fontWeight: 800,
                      }}
                    >
                      Phone
                    </Typography>

                    <Typography
                      sx={{
                        color: "#71868D",
                        fontSize: 13,
                        mt: 0.4,
                      }}
                    >
                      +92 300 1234567
                    </Typography>

                    <Typography
                      sx={{
                        color: "#159DA9",
                        fontSize: 11,
                        mt: 0.3,
                      }}
                    >
                      Available for appointments
                    </Typography>
                  </Box>
                </Box>

                {/* Email */}

                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    mb: 3,
                  }}
                >
                  <ContactIcon>
                    <EmailOutlinedIcon />
                  </ContactIcon>

                  <Box>
                    <Typography
                      sx={{
                        color: "#173F4A",
                        fontSize: 14,
                        fontWeight: 800,
                      }}
                    >
                      Email
                    </Typography>

                    <Typography
                      sx={{
                        color: "#71868D",
                        fontSize: 13,
                        mt: 0.4,
                      }}
                    >
                      info@hospital.com
                    </Typography>

                    <Typography
                      sx={{
                        color: "#159DA9",
                        fontSize: 11,
                        mt: 0.3,
                      }}
                    >
                      We reply within 24 hours
                    </Typography>
                  </Box>
                </Box>

                {/* Working Hours */}

                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                  }}
                >
                  <ContactIcon>
                    <AccessTimeOutlinedIcon />
                  </ContactIcon>

                  <Box>
                    <Typography
                      sx={{
                        color: "#173F4A",
                        fontSize: 14,
                        fontWeight: 800,
                      }}
                    >
                      Working Hours
                    </Typography>

                    <Typography
                      sx={{
                        color: "#71868D",
                        fontSize: 13,
                        lineHeight: 1.7,
                        mt: 0.4,
                      }}
                    >
                      Monday - Sunday
                      <br />
                      8:00 AM - 10:00 PM
                    </Typography>
                  </Box>
                </Box>

                {/* Emergency Box */}

                <Box
                  sx={{
                    mt: 4,
                    p: 2,
                    borderRadius: 3,
                    backgroundColor: "#FFF5F4",
                    border:
                      "1px solid #F5D8D5",
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={1.5}
                    alignItems="center"
                  >
                    <Box
                      sx={{
                        width: 42,
                        height: 42,
                        borderRadius: 2,
                        backgroundColor: "#FFE5E2",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <EmergencyOutlinedIcon
                        sx={{
                          color: "#D94B3D",
                        }}
                      />
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          color: "#A52E25",
                          fontWeight: 800,
                          fontSize: 13,
                        }}
                      >
                        Medical Emergency?
                      </Typography>

                      <Typography
                        sx={{
                          color: "#8D6864",
                          fontSize: 11,
                          mt: 0.3,
                        }}
                      >
                        Call our emergency department
                        immediately.
                      </Typography>

                      <Typography
                        sx={{
                          color: "#D94B3D",
                          fontWeight: 800,
                          fontSize: 14,
                          mt: 0.5,
                        }}
                      >
                        +92 300 1234567
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* ================================================= */}
          {/* RIGHT — CONTACT FORM */}
          {/* ================================================= */}

          <Grid item xs={12} md={7}>
            <Card
              elevation={0}
              sx={{
                borderRadius: 4,
                border: "1px solid #E0EEEE",
                backgroundColor: "#FFFFFF",
              }}
            >
              <CardContent
                sx={{
                  p: {
                    xs: 2.5,
                    sm: 3,
                    md: 4,
                  },
                }}
              >
                <Box sx={{ mb: 3 }}>
                  <Typography
                    sx={{
                      color: "#159DA9",
                      fontSize: 12,
                      fontWeight: 800,
                      letterSpacing: "0.1em",
                    }}
                  >
                    SEND A MESSAGE
                  </Typography>

                  <Typography
                    sx={{
                      color: "#173F4A",
                      fontSize: 25,
                      fontWeight: 800,
                      mt: 0.7,
                    }}
                  >
                    How can we help you?
                  </Typography>

                  <Typography
                    sx={{
                      color: "#71868D",
                      fontSize: 13,
                      mt: 0.7,
                    }}
                  >
                    Fill out the form below and our team will
                    get back to you.
                  </Typography>
                </Box>

                {/* Success Message */}

                {submitted && (
                  <Alert
                    icon={<CheckCircleIcon />}
                    severity="success"
                    onClose={() => setSubmitted(false)}
                    sx={{
                      mb: 3,
                      borderRadius: 2,
                    }}
                  >
                    Your message has been submitted
                    successfully. Our team will contact you
                    soon.
                  </Alert>
                )}

                {/* Form */}

                <Box
                  component="form"
                  onSubmit={handleSubmit}
                >
                  <Grid container spacing={2.2}>
                    {/* Name */}

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                        sx={inputStyle}
                      />
                    </Grid>

                    {/* Email */}

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        sx={inputStyle}
                      />
                    </Grid>

                    {/* Phone */}

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        placeholder="+92 300 1234567"
                        sx={inputStyle}
                      />
                    </Grid>

                    {/* Subject */}

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="How can we help?"
                        sx={inputStyle}
                      />
                    </Grid>

                    {/* Message */}

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        multiline
                        rows={6}
                        placeholder="Write your message here..."
                        sx={inputStyle}
                      />
                    </Grid>

                    {/* Submit */}

                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        endIcon={<SendOutlinedIcon />}
                        sx={{
                          mt: 0.5,
                          py: 1.5,
                          borderRadius: 2.5,
                          backgroundColor: "#159DA9",
                          color: "#FFFFFF",
                          fontWeight: 800,
                          textTransform: "none",
                          fontSize: 14,
                          "&:hover": {
                            backgroundColor: "#107F89",
                          },
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* ================================================= */}
        {/* LOCATION SECTION */}
        {/* ================================================= */}

        <Box sx={{ pb: { xs: 5, md: 8 } }}>
          <Grid
            container
            spacing={3}
            alignItems="stretch"
          >
            {/* Map-style Area */}

            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  minHeight: {
                    xs: 280,
                    md: 350,
                  },
                  borderRadius: 4,
                  overflow: "hidden",
                  position: "relative",
                  backgroundColor: "#DDECEC",
                  backgroundImage:
                    "linear-gradient(135deg, rgba(21,157,169,0.12) 25%, transparent 25%), linear-gradient(45deg, rgba(21,157,169,0.08) 25%, transparent 25%)",
                  backgroundSize:
                    "60px 60px",
                }}
              >
                {/* Map content */}

                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor:
                        "rgba(255,255,255,0.95)",
                      borderRadius: 3,
                      p: 3,
                      textAlign: "center",
                      boxShadow:
                        "0 10px 30px rgba(15,70,85,0.12)",
                    }}
                  >
                    <LocationOnOutlinedIcon
                      sx={{
                        fontSize: 45,
                        color: "#159DA9",
                      }}
                    />

                    <Typography
                      sx={{
                        color: "#173F4A",
                        fontWeight: 800,
                        fontSize: 16,
                        mt: 0.5,
                      }}
                    >
                      Our Hospital
                    </Typography>

                    <Typography
                      sx={{
                        color: "#71868D",
                        fontSize: 12,
                        mt: 0.5,
                      }}
                    >
                      Main Boulevard, Lahore
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* Quick Contact */}

            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  height: "100%",
                  minHeight: 280,
                  backgroundColor: "#073B4C",
                  borderRadius: 4,
                  p: { xs: 3, md: 4 },
                  color: "#FFFFFF",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#7ED6D0",
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: "0.12em",
                  }}
                >
                  NEED QUICK HELP?
                </Typography>

                <Typography
                  sx={{
                    fontSize: 27,
                    fontWeight: 800,
                    mt: 1,
                    lineHeight: 1.2,
                  }}
                >
                  We're here for you.
                </Typography>

                <Typography
                  sx={{
                    color: "#C5DADD",
                    fontSize: 13,
                    lineHeight: 1.7,
                    mt: 1.5,
                  }}
                >
                  For appointments, general information, or
                  urgent healthcare support, our team is ready
                  to assist you.
                </Typography>

                <Button
                  href="tel:+923001234567"
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    alignSelf: "flex-start",
                    mt: 3,
                    backgroundColor: "#7ED6D0",
                    color: "#073B4C",
                    textTransform: "none",
                    fontWeight: 800,
                    borderRadius: 2,
                    px: 2.5,
                    "&:hover": {
                      backgroundColor: "#A4E5E0",
                    },
                  }}
                >
                  Call Hospital
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

/* ========================================================= */
/* CONTACT ICON COMPONENT */
/* ========================================================= */

const ContactIcon = ({ children }) => {
  return (
    <Box
      sx={{
        minWidth: 44,
        width: 44,
        height: 44,
        borderRadius: 2,
        backgroundColor: "#E8F7F7",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#159DA9",
      }}
    >
      {React.cloneElement(children, {
        fontSize: "small",
      })}
    </Box>
  );
};

/* ========================================================= */
/* TEXT FIELD STYLE */
/* ========================================================= */

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    borderRadius: 2,
    backgroundColor: "#FAFCFC",

    "& fieldset": {
      borderColor: "#DCE9EA",
    },

    "&:hover fieldset": {
      borderColor: "#9BCFD0",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#159DA9",
      borderWidth: 1,
    },
  },

  "& .MuiInputLabel-root": {
    color: "#71868D",
  },

  "& .MuiInputLabel-root.Mui-focused": {
    color: "#159DA9",
  },
};

export default Contact;
