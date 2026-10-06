import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";

import { useNavigate } from "react-router-dom";

import hospitalHero from "../assets/hospital-hero.png";

function Hero() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: "#F6FAFB",
        py: { xs: 3, md: 6 },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            borderRadius: { xs: 3, md: 5 },
            overflow: "hidden",
            boxShadow: "0 12px 40px rgba(15, 70, 85, 0.10)",
          }}
        >
          <Grid
            container
            alignItems="stretch"
            sx={{
              minHeight: { md: 570 },
            }}
          >
            {/* ================================================= */}
            {/* LEFT SIDE - HOSPITAL IMAGE */}
            {/* ================================================= */}

            <Grid
              item
              xs={12}
              md={6}
              sx={{
                width: { xs: "100%", md: "50%" },
                flexBasis: { xs: "100%", md: "50%" },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: {
                    xs: 320,
                    sm: 430,
                    md: 570,
                  },
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src={hospitalHero}
                  alt="Professional healthcare doctor"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>
            </Grid>

            {/* ================================================= */}
            {/* RIGHT SIDE - CONTENT */}
            {/* ================================================= */}

            <Grid
              item
              xs={12}
              md={6}
              sx={{
                width: { xs: "100%", md: "50%" },
                flexBasis: { xs: "100%", md: "50%" },
              }}
            >
              <Box
                sx={{
                  height: { xs: "auto", md: "100%" },
                  display: "flex",
                  alignItems: "center",
                  px: {
                    xs: 3,
                    sm: 5,
                    md: 7,
                  },
                  py: {
                    xs: 5,
                    md: 6,
                  },
                }}
              >
                <Box sx={{ width: "100%" }}>

                  {/* Small Heading */}

                  <Typography
                    sx={{
                      color: "#149AA8",
                      fontSize: 13,
                      fontWeight: 800,
                      letterSpacing: "0.14em",
                      mb: 2,
                    }}
                  >
                    TRUSTED HEALTHCARE SYSTEM
                  </Typography>

                  {/* Main Heading */}

                  <Typography
                    component="h1"
                    sx={{
                      color: "#123B4A",
                      fontSize: {
                        xs: "38px",
                        sm: "46px",
                        md: "52px",
                      },
                      lineHeight: 1.08,
                      fontWeight: 800,
                      letterSpacing: "-0.045em",
                      maxWidth: 550,
                    }}
                  >
                    Your Health Is Our{" "}
                    <Box
                      component="span"
                      sx={{
                        color: "#159DA9",
                      }}
                    >
                      Priority
                    </Box>
                  </Typography>

                  {/* Description */}

                  <Typography
                    sx={{
                      mt: 2.5,
                      color: "#637D86",
                      fontSize: {
                        xs: 14,
                        md: 16,
                      },
                      lineHeight: 1.8,
                      maxWidth: 520,
                    }}
                  >
                    Find experienced doctors, explore medical departments,
                    check availability, and book your appointment easily —
                    all in one place.
                  </Typography>

                  {/* Buttons */}

                  <Stack
                    direction={{
                      xs: "column",
                      sm: "row",
                    }}
                    spacing={2}
                    sx={{
                      mt: 4,
                    }}
                  >
                    <Button
                      variant="contained"
                      endIcon={<ArrowForwardIcon />}
                      onClick={() => navigate("/doctors")}
                      sx={{
                        backgroundColor: "#159DA9",
                        color: "#FFFFFF",
                        px: 3,
                        py: 1.5,
                        borderRadius: 3,
                        fontSize: 14,
                        fontWeight: 700,
                        textTransform: "none",
                        boxShadow:
                          "0 8px 20px rgba(21, 157, 169, 0.25)",

                        "&:hover": {
                          backgroundColor: "#118894",
                          boxShadow:
                            "0 10px 25px rgba(21, 157, 169, 0.30)",
                        },
                      }}
                    >
                      Find a Doctor
                    </Button>

                    <Button
                      variant="outlined"
                      startIcon={<CalendarMonthIcon />}
                      onClick={() => navigate("/booking")}
                      sx={{
                        color: "#176273",
                        borderColor: "#9DD8DC",
                        px: 3,
                        py: 1.5,
                        borderRadius: 3,
                        fontSize: 14,
                        fontWeight: 700,
                        textTransform: "none",

                        "&:hover": {
                          borderColor: "#159DA9",
                          backgroundColor: "#F0FAFA",
                        },
                      }}
                    >
                      Book Appointment
                    </Button>
                  </Stack>

                  {/* ================================================= */}
                  {/* FEATURES */}
                  {/* ================================================= */}

                  <Grid
                    container
                    spacing={2}
                    sx={{
                      mt: 4,
                    }}
                  >
                    {/* Verified Doctors */}

                    <Grid item xs={12} sm={4}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 1,
                        }}
                      >
                        <Box
                          sx={{
                            minWidth: 42,
                            height: 42,
                            borderRadius: "50%",
                            backgroundColor: "#E5F7F7",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <VerifiedUserOutlinedIcon
                            sx={{
                              color: "#159DA9",
                              fontSize: 21,
                            }}
                          />
                        </Box>

                        <Box>
                          <Typography
                            sx={{
                              color: "#173F4A",
                              fontSize: 13,
                              fontWeight: 700,
                            }}
                          >
                            Verified
                          </Typography>

                          <Typography
                            sx={{
                              color: "#789099",
                              fontSize: 11,
                              mt: 0.3,
                            }}
                          >
                            Doctors
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>

                    {/* Easy Appointments */}

                    <Grid item xs={12} sm={4}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 1,
                        }}
                      >
                        <Box
                          sx={{
                            minWidth: 42,
                            height: 42,
                            borderRadius: "50%",
                            backgroundColor: "#E5F7F7",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <AccessTimeOutlinedIcon
                            sx={{
                              color: "#159DA9",
                              fontSize: 21,
                            }}
                          />
                        </Box>

                        <Box>
                          <Typography
                            sx={{
                              color: "#173F4A",
                              fontSize: 13,
                              fontWeight: 700,
                            }}
                          >
                            Easy
                          </Typography>

                          <Typography
                            sx={{
                              color: "#789099",
                              fontSize: 11,
                              mt: 0.3,
                            }}
                          >
                            Appointments
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>

                    {/* Quality Care */}

                    <Grid item xs={12} sm={4}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 1,
                        }}
                      >
                        <Box
                          sx={{
                            minWidth: 42,
                            height: 42,
                            borderRadius: "50%",
                            backgroundColor: "#E5F7F7",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <MedicalServicesOutlinedIcon
                            sx={{
                              color: "#159DA9",
                              fontSize: 21,
                            }}
                          />
                        </Box>

                        <Box>
                          <Typography
                            sx={{
                              color: "#173F4A",
                              fontSize: 13,
                              fontWeight: 700,
                            }}
                          >
                            Quality
                          </Typography>

                          <Typography
                            sx={{
                              color: "#789099",
                              fontSize: 11,
                              mt: 0.3,
                            }}
                          >
                            Care
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>

                  {/* Bottom Trust Text */}

                  <Box
                    sx={{
                      mt: 4,
                      pt: 2.5,
                      borderTop: "1px solid #E8F0F1",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#789099",
                        fontSize: 12,
                      }}
                    >
                      🏥 Trusted healthcare services for you and your family
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;