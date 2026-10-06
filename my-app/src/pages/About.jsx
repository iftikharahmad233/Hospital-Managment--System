import React from "react";

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EmergencyOutlinedIcon from "@mui/icons-material/EmergencyOutlined";
import { Link } from "react-router-dom";

const About = () => {
  const services = [
    {
      icon: <MedicalServicesOutlinedIcon />,
      title: "Quality Healthcare",
      description:
        "We provide reliable medical services with modern facilities and patient-focused care.",
    },
    {
      icon: <PeopleAltOutlinedIcon />,
      title: "Expert Doctors",
      description:
        "Our experienced doctors provide professional treatment across multiple specialties.",
    },
    {
      icon: <AccessTimeOutlinedIcon />,
      title: "24/7 Emergency",
      description:
        "Our emergency services are available around the clock for urgent medical situations.",
    },
  ];

  const features = [
    "Experienced and qualified medical professionals",
    "Modern healthcare facilities and equipment",
    "Easy online doctor appointment booking",
    "Secure patient and medical record management",
    "Dedicated emergency and patient support",
    "Healthcare services for the whole family",
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#F5FAFA",
        minHeight: "100vh",
      }}
    >
      {/* ===================================================== */}
      {/* HERO SECTION */}
      {/* ===================================================== */}

      <Box
        sx={{
          background:
            "linear-gradient(135deg, #073B4C 0%, #0C5968 100%)",
          color: "#FFFFFF",
          py: { xs: 6, md: 9 },
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={{ xs: 4, md: 7 }}
            alignItems="center"
          >
            {/* LEFT CONTENT */}

            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  color: "#7ED6D0",
                  fontSize: 13,
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  mb: 2,
                }}
              >
                ABOUT OUR HEALTHCARE SYSTEM
              </Typography>

              <Typography
                component="h1"
                sx={{
                  fontSize: {
                    xs: "38px",
                    sm: "48px",
                    md: "56px",
                  },
                  fontWeight: 800,
                  lineHeight: 1.08,
                  letterSpacing: "-0.045em",
                }}
              >
                Caring for your health with{" "}
                <Box
                  component="span"
                  sx={{
                    color: "#7ED6D0",
                  }}
                >
                  trust and technology.
                </Box>
              </Typography>

              <Typography
                sx={{
                  color: "#C6DADD",
                  mt: 2.5,
                  fontSize: { xs: 14, md: 16 },
                  lineHeight: 1.8,
                  maxWidth: 560,
                }}
              >
                Our Hospital Management System connects patients,
                doctors, and hospital staff through a simple and
                efficient healthcare platform designed to improve
                the overall patient experience.
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ mt: 4 }}
              >
                <Button
                  component={Link}
                  to="/doctors"
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    backgroundColor: "#7ED6D0",
                    color: "#073B4C",
                    px: 3,
                    py: 1.4,
                    borderRadius: 2.5,
                    fontWeight: 700,
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#A4E5E0",
                    },
                  }}
                >
                  Find a Doctor
                </Button>

                <Button
                  component={Link}
                  to="/booking"
                  variant="outlined"
                  sx={{
                    color: "#FFFFFF",
                    borderColor: "rgba(255,255,255,0.45)",
                    px: 3,
                    py: 1.4,
                    borderRadius: 2.5,
                    fontWeight: 600,
                    textTransform: "none",
                    "&:hover": {
                      borderColor: "#7ED6D0",
                      backgroundColor:
                        "rgba(126,214,208,0.08)",
                    },
                  }}
                >
                  Book Appointment
                </Button>
              </Stack>
            </Grid>

            {/* RIGHT IMAGE */}

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: {
                    xs: 300,
                    sm: 400,
                    md: 460,
                  },
                  borderRadius: 4,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1000&q=85"
                  alt="Modern hospital"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                {/* Image Overlay */}

                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, transparent 50%, rgba(7,59,76,0.75) 100%)",
                  }}
                />

                {/* Emergency Card */}

                <Box
                  sx={{
                    position: "absolute",
                    bottom: 20,
                    left: 20,
                    right: 20,
                    backgroundColor:
                      "rgba(255,255,255,0.96)",
                    borderRadius: 3,
                    p: 2,
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={1.5}
                    alignItems="center"
                  >
                    <Box
                      sx={{
                        width: 45,
                        height: 45,
                        borderRadius: 2,
                        backgroundColor: "#E8F7F7",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <EmergencyOutlinedIcon
                        sx={{
                          color: "#159DA9",
                        }}
                      />
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          color: "#173F4A",
                          fontWeight: 800,
                          fontSize: 14,
                        }}
                      >
                        24/7 Emergency Care
                      </Typography>

                      <Typography
                        sx={{
                          color: "#7A8D93",
                          fontSize: 11,
                          mt: 0.3,
                        }}
                      >
                        Professional medical support
                        whenever you need it.
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ===================================================== */}
      {/* STATISTICS */}
      {/* ===================================================== */}

      <Container maxWidth="xl">
        <Grid
          container
          spacing={2}
          sx={{
            mt: { xs: 3, md: 4 },
            mb: { xs: 5, md: 7 },
          }}
        >
          {[
            {
              number: "150+",
              label: "Expert Doctors",
            },
            {
              number: "25+",
              label: "Medical Departments",
            },
            {
              number: "10K+",
              label: "Happy Patients",
            },
            {
              number: "24/7",
              label: "Emergency Support",
            },
          ].map((item, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Card
                elevation={0}
                sx={{
                  textAlign: "center",
                  p: { xs: 2, md: 2.5 },
                  borderRadius: 3,
                  border: "1px solid #E1EEEE",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <Typography
                  sx={{
                    color: "#159DA9",
                    fontSize: {
                      xs: 25,
                      md: 32,
                    },
                    fontWeight: 800,
                  }}
                >
                  {item.number}
                </Typography>

                <Typography
                  sx={{
                    color: "#74878D",
                    fontSize: {
                      xs: 11,
                      md: 13,
                    },
                    mt: 0.3,
                  }}
                >
                  {item.label}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ===================================================== */}
      {/* WHO WE ARE */}
      {/* ===================================================== */}

      <Container maxWidth="xl">
        <Grid
          container
          spacing={{ xs: 4, md: 8 }}
          alignItems="center"
          sx={{ mb: { xs: 7, md: 10 } }}
        >
          {/* IMAGE */}

          <Grid item xs={12} md={5}>
            <Box
              sx={{
                position: "relative",
              }}
            >
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85"
                alt="Doctor consulting patient"
                sx={{
                  width: "100%",
                  height: {
                    xs: 300,
                    md: 430,
                  },
                  objectFit: "cover",
                  borderRadius: 4,
                  display: "block",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  bottom: -20,
                  right: {
                    xs: 15,
                    md: -20,
                  },
                  backgroundColor: "#FFFFFF",
                  borderRadius: 3,
                  p: 2,
                  boxShadow:
                    "0 12px 35px rgba(15,70,85,0.15)",
                }}
              >
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                >
                  <VerifiedOutlinedIcon
                    sx={{
                      color: "#159DA9",
                    }}
                  />

                  <Box>
                    <Typography
                      sx={{
                        color: "#173F4A",
                        fontWeight: 800,
                        fontSize: 13,
                      }}
                    >
                      Trusted Healthcare
                    </Typography>

                    <Typography
                      sx={{
                        color: "#819196",
                        fontSize: 10,
                      }}
                    >
                      Patient-focused care
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Grid>

          {/* CONTENT */}

          <Grid item xs={12} md={7}>
            <Typography
              sx={{
                color: "#159DA9",
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: "0.12em",
                mb: 1.5,
              }}
            >
              WHO WE ARE
            </Typography>

            <Typography
              component="h2"
              sx={{
                color: "#173F4A",
                fontSize: {
                  xs: 30,
                  md: 42,
                },
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.035em",
              }}
            >
              Your health is at the heart of everything we do.
            </Typography>

            <Typography
              sx={{
                color: "#71868D",
                mt: 2,
                lineHeight: 1.8,
                fontSize: 15,
              }}
            >
              Our hospital provides comprehensive healthcare
              services designed around the needs of patients and
              their families. From finding the right doctor to
              managing appointments and medical information, our
              system makes healthcare easier and more accessible.
            </Typography>

            <Typography
              sx={{
                color: "#71868D",
                mt: 1.5,
                lineHeight: 1.8,
                fontSize: 15,
              }}
            >
              We combine experienced healthcare professionals,
              modern medical facilities, and digital technology to
              deliver a safe, efficient, and comfortable healthcare
              experience.
            </Typography>

            {/* Features */}

            <Grid
              container
              spacing={1.5}
              sx={{ mt: 2 }}
            >
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="flex-start"
                  >
                    <CheckCircleIcon
                      sx={{
                        color: "#159DA9",
                        fontSize: 19,
                        mt: 0.2,
                      }}
                    />

                    <Typography
                      sx={{
                        color: "#50666D",
                        fontSize: 13,
                      }}
                    >
                      {feature}
                    </Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {/* ===================================================== */}
      {/* MISSION / VISION */}
      {/* ===================================================== */}

      <Box
        sx={{
          backgroundColor: "#EAF6F6",
          py: { xs: 6, md: 8 },
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            {/* Mission */}

            <Grid item xs={12} md={6}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  p: { xs: 2, md: 3 },
                  border: "1px solid #D8EBEC",
                }}
              >
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="flex-start"
                >
                  <Box
                    sx={{
                      minWidth: 52,
                      height: 52,
                      borderRadius: 2,
                      backgroundColor: "#D8F2F2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FavoriteBorderOutlinedIcon
                      sx={{
                        color: "#159DA9",
                      }}
                    />
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        color: "#173F4A",
                        fontSize: 20,
                        fontWeight: 800,
                      }}
                    >
                      Our Mission
                    </Typography>

                    <Typography
                      sx={{
                        color: "#71868D",
                        mt: 1,
                        lineHeight: 1.8,
                        fontSize: 14,
                      }}
                    >
                      To provide accessible, reliable, and
                      patient-centered healthcare while using
                      technology to make hospital services
                      simpler and more efficient.
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>

            {/* Vision */}

            <Grid item xs={12} md={6}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  p: { xs: 2, md: 3 },
                  border: "1px solid #D8EBEC",
                }}
              >
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="flex-start"
                >
                  <Box
                    sx={{
                      minWidth: 52,
                      height: 52,
                      borderRadius: 2,
                      backgroundColor: "#D8F2F2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <SecurityOutlinedIcon
                      sx={{
                        color: "#159DA9",
                      }}
                    />
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        color: "#173F4A",
                        fontSize: 20,
                        fontWeight: 800,
                      }}
                    >
                      Our Vision
                    </Typography>

                    <Typography
                      sx={{
                        color: "#71868D",
                        mt: 1,
                        lineHeight: 1.8,
                        fontSize: 14,
                      }}
                    >
                      To build a modern healthcare environment
                      where patients receive quality care and
                      hospitals can manage their services
                      efficiently through digital solutions.
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ===================================================== */}
      {/* WHY CHOOSE US */}
      {/* ===================================================== */}

      <Container maxWidth="xl">
        <Box
          sx={{
            py: { xs: 7, md: 9 },
          }}
        >
          {/* Heading */}

          <Box
            sx={{
              textAlign: "center",
              maxWidth: 700,
              mx: "auto",
              mb: 5,
            }}
          >
            <Typography
              sx={{
                color: "#159DA9",
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: "0.12em",
              }}
            >
              WHY CHOOSE US
            </Typography>

            <Typography
              sx={{
                color: "#173F4A",
                fontSize: {
                  xs: 30,
                  md: 40,
                },
                fontWeight: 800,
                mt: 1,
              }}
            >
              Healthcare designed around you
            </Typography>

            <Typography
              sx={{
                color: "#71868D",
                mt: 1.5,
                fontSize: 14,
                lineHeight: 1.7,
              }}
            >
              We focus on providing a simple, secure, and
              comfortable experience for every patient.
            </Typography>
          </Box>

          {/* Service Cards */}

          <Grid container spacing={3}>
            {services.map((service, index) => (
              <Grid
                item
                xs={12}
                md={4}
                key={index}
              >
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    textAlign: "center",
                    p: { xs: 2.5, md: 3 },
                    borderRadius: 4,
                    border: "1px solid #E1EEEE",
                    backgroundColor: "#FFFFFF",
                    transition:
                      "all 0.3s ease",

                    "&:hover": {
                      transform:
                        "translateY(-7px)",
                      boxShadow:
                        "0 15px 35px rgba(15,70,85,0.10)",
                      borderColor: "#B5DDDF",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 65,
                      height: 65,
                      mx: "auto",
                      borderRadius: "50%",
                      backgroundColor: "#E8F8F8",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {React.cloneElement(
                      service.icon,
                      {
                        sx: {
                          color: "#159DA9",
                          fontSize: 30,
                        },
                      }
                    )}
                  </Box>

                  <CardContent>
                    <Typography
                      sx={{
                        color: "#173F4A",
                        fontSize: 19,
                        fontWeight: 800,
                      }}
                    >
                      {service.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#71868D",
                        fontSize: 13,
                        lineHeight: 1.7,
                        mt: 1,
                      }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;