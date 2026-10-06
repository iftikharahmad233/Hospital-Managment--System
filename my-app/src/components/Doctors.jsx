import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import VerifiedIcon from "@mui/icons-material/Verified";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";

import DoctorCard from "./DoctorCard";

// ======================================================
// DOCTORS DATA
// ======================================================

const doctors = [
  {
    id: 1,
    name: "Dr. Saba Ahmed",
    specialty: "Gynecologist",
    experience: "MBBS - Gynecologist | 5 Years",
    fee: 500,
    rating: 4.9,
    patients: "1.2K+",
    about:
      "Dr. Saba has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 2,
    name: "Dr. Ahmed Raza",
    specialty: "Dermatologist",
    experience: "MBBS - Dermatologist | 8 Years",
    fee: 800,
    rating: 4.8,
    patients: "950+",
    about:
      "Dr. Ahmed specializes in skin care, providing advanced treatments for various dermatological conditions.",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 3,
    name: "Dr. Muhammad Usman",
    specialty: "Pediatrician",
    experience: "MBBS - Pediatrician | 10 Years",
    fee: 600,
    rating: 4.9,
    patients: "1.5K+",
    about:
      "Dr. Usman is dedicated to providing the best possible care for infants, children, and adolescents.",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 4,
    name: "Dr. Rabia Shaheen",
    specialty: "Neurologist",
    experience: "MBBS - Neurologist | 7 Years",
    fee: 1000,
    rating: 4.8,
    patients: "870+",
    about:
      "Dr. Rabia is an expert in diagnosing and treating disorders of the nervous system.",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 5,
    name: "Dr. Ali Hassan",
    specialty: "Neurologist",
    experience: "MBBS - Neurologist | 6 Years",
    fee: 900,
    rating: 4.7,
    patients: "760+",
    about:
      "Dr. Ali focuses on comprehensive neurological evaluations and patient-centered care.",
    image:
      "https://images.unsplash.com/photo-1618498082410-b4aa22193b38?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 6,
    name: "Dr. Bilal Khan",
    specialty: "General Physician",
    experience: "MBBS - General Physician | 12 Years",
    fee: 400,
    rating: 4.9,
    patients: "2K+",
    about:
      "Dr. Bilal provides primary healthcare services for a wide range of common medical issues.",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 7,
    name: "Dr. Fahad Mahmood",
    specialty: "Gastroenterologist",
    experience: "MBBS - Gastroenterologist | 9 Years",
    fee: 1200,
    rating: 4.8,
    patients: "920+",
    about:
      "Dr. Fahad specializes in digestive health and treats conditions of the gastrointestinal tract.",
    image:
      "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 8,
    name: "Dr. Komal Riaz",
    specialty: "Dermatologist",
    experience: "MBBS - Dermatologist | 4 Years",
    fee: 700,
    rating: 4.7,
    patients: "640+",
    about:
      "Dr. Komal provides expert care for skin, hair, and nail conditions.",
    image:
      "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=600&q=80",
  },
];

// ======================================================
// DOCTORS SECTION
// ======================================================

function Doctors() {
  return (
    <Box
      sx={{
        backgroundColor: "#F6FAFB",
        py: { xs: 6, md: 9 },
      }}
    >
      <Container maxWidth="xl">

        {/* ================================================= */}
        {/* SECTION HEADER */}
        {/* ================================================= */}

        <Box
          sx={{
            textAlign: "center",
            maxWidth: 700,
            mx: "auto",
            mb: { xs: 4, md: 6 },
          }}
        >
          {/* Small Label */}

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            sx={{ mb: 1.5 }}
          >
            <MedicalServicesOutlinedIcon
              sx={{
                color: "#159DA9",
                fontSize: 20,
              }}
            />

            <Typography
              sx={{
                color: "#159DA9",
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: "0.12em",
              }}
            >
              OUR MEDICAL EXPERTS
            </Typography>
          </Stack>

          {/* Main Heading */}

          <Typography
            component="h2"
            sx={{
              color: "#173F4A",
              fontSize: {
                xs: "30px",
                sm: "36px",
                md: "44px",
              },
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.035em",
            }}
          >
            Meet Our{" "}
            <Box
              component="span"
              sx={{
                color: "#159DA9",
              }}
            >
              Expert Doctors
            </Box>
          </Typography>

          {/* Description */}

          <Typography
            sx={{
              color: "#71868D",
              mt: 1.5,
              fontSize: {
                xs: 14,
                md: 15,
              },
              lineHeight: 1.7,
            }}
          >
            Connect with trusted and experienced healthcare professionals
            who are committed to providing quality care for you and your
            family.
          </Typography>
        </Box>

        {/* ================================================= */}
        {/* DOCTOR CARDS */}
        {/* ================================================= */}

        <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
          {doctors.map((doctor) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={doctor.id}
            >
              <Box
                sx={{
                  height: "100%",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E4EEEE",
                  borderRadius: 3,
                  overflow: "hidden",
                  transition: "all 0.3s ease",

                  "&:hover": {
                    transform: "translateY(-7px)",
                    boxShadow:
                      "0 15px 35px rgba(15, 70, 85, 0.12)",
                    borderColor: "#B5DDDF",
                  },
                }}
              >
                {/* ================================================= */}
                {/* DOCTOR IMAGE */}
                {/* ================================================= */}

                <Box
                  sx={{
                    position: "relative",
                    height: 245,
                    overflow: "hidden",
                    backgroundColor: "#EAF4F5",
                  }}
                >
                  <Box
                    component="img"
                    src={doctor.image}
                    alt={doctor.name}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.4s ease",

                      "&&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  />

                  {/* Verified Badge */}

                  <Chip
                    icon={
                      <VerifiedIcon
                        sx={{
                          fontSize: 16,
                        }}
                      />
                    }
                    label="Verified"
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 14,
                      left: 14,
                      backgroundColor: "#FFFFFF",
                      color: "#087D88",
                      fontWeight: 700,
                      fontSize: 11,
                      boxShadow:
                        "0 4px 12px rgba(0,0,0,0.10)",

                      "& .MuiChip-icon": {
                        color: "#159DA9",
                      },
                    }}
                  />

                  {/* Rating */}

                  <Box
                    sx={{
                      position: "absolute",
                      right: 14,
                      top: 14,
                      backgroundColor: "#FFFFFF",
                      borderRadius: 2,
                      px: 1,
                      py: 0.5,
                      display: "flex",
                      alignItems: "center",
                      gap: 0.4,
                      boxShadow:
                        "0 4px 12px rgba(0,0,0,0.10)",
                    }}
                  >
                    <StarIcon
                      sx={{
                        color: "#F5B83D",
                        fontSize: 16,
                      }}
                    />

                    <Typography
                      sx={{
                        color: "#173F4A",
                        fontSize: 12,
                        fontWeight: 700,
                      }}
                    >
                      {doctor.rating}
                    </Typography>
                  </Box>
                </Box>

                {/* ================================================= */}
                {/* DOCTOR INFORMATION */}
                {/* ================================================= */}

                <Box
                  sx={{
                    p: 2.2,
                  }}
                >
                  {/* Specialty */}

                  <Typography
                    sx={{
                      color: "#159DA9",
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {doctor.specialty}
                  </Typography>

                  {/* Name */}

                  <Typography
                    sx={{
                      color: "#173F4A",
                      fontSize: 18,
                      fontWeight: 800,
                      mt: 0.5,
                    }}
                  >
                    {doctor.name}
                  </Typography>

                  {/* Experience */}

                  <Typography
                    sx={{
                      color: "#788B92",
                      fontSize: 12,
                      mt: 0.8,
                    }}
                  >
                    {doctor.experience}
                  </Typography>

                  {/* Patients */}

                  <Typography
                    sx={{
                      color: "#788B92",
                      fontSize: 12,
                      mt: 0.4,
                    }}
                  >
                    {doctor.patients} patients treated
                  </Typography>

                  {/* Divider */}

                  <Box
                    sx={{
                      height: "1px",
                      backgroundColor: "#E9F0F1",
                      my: 2,
                    }}
                  />

                  {/* Fee + Button */}

                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    spacing={1}
                  >
                    <Box>
                      <Typography
                        sx={{
                          color: "#84969B",
                          fontSize: 10,
                        }}
                      >
                        Consultation
                      </Typography>

                      <Typography
                        sx={{
                          color: "#159DA9",
                          fontSize: 18,
                          fontWeight: 800,
                        }}
                      >
                        Rs. {doctor.fee}
                      </Typography>
                    </Box>

                    <Button
                      component={Link}
                      to={`/booking/${doctor.id}`}
                      variant="contained"
                      startIcon={
                        <CalendarMonthOutlinedIcon
                          sx={{ fontSize: 17 }}
                        />
                      }
                      sx={{
                        backgroundColor: "#159DA9",
                        color: "#FFFFFF",
                        borderRadius: 2,
                        px: 1.5,
                        py: 1,
                        fontSize: 11,
                        fontWeight: 700,
                        textTransform: "none",
                        boxShadow: "none",

                        "&:hover": {
                          backgroundColor: "#107F89",
                          boxShadow: "none",
                        },
                      }}
                    >
                      Book
                    </Button>
                  </Stack>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* ================================================= */}
        {/* VIEW ALL BUTTON */}
        {/* ================================================= */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 5,
          }}
        >
          <Button
            component={Link}
            to="/doctors"
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            sx={{
              px: 3,
              py: 1.3,
              borderRadius: 2.5,
              borderColor: "#159DA9",
              color: "#159DA9",
              fontWeight: 700,
              textTransform: "none",

              "&:hover": {
                borderColor: "#107F89",
                backgroundColor: "#EDF9F9",
              },
            }}
          >
            View All Doctors
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Doctors;