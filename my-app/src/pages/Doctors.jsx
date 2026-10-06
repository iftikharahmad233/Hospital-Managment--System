import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import { hasSavedAccount } from "../utils/account";
import { doctors } from "../data/doctors";
const specialties = [
  "General physician",
  "Gynecologist",
  "Dermatologist",
  "Pediatrician",
  "Neurologist",
  "Gastroenterologist",
  "Cardiologist",
  "Orthopedic Surgeon",
  "Psychiatrist",
  "ENT Specialist",
  "Ophthalmologist",
  "Urologist",
  "Endocrinologist",
  "Pulmonologist",
  "Oncologist",
];
function Doctors() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const filteredDoctors = selectedSpecialty
    ? doctors.filter(
        (doctor) =>
          doctor.specialty.toLowerCase() === selectedSpecialty.toLowerCase(),
      )
    : doctors;
  return (
    <Box
      sx={{
        backgroundColor: "#F5FAFA",
        minHeight: "100vh",
        py: { xs: 4, md: 6 },
      }}
    >
      {" "}
      <Container maxWidth="xl">
        {" "}
        {/* ================================================= */}{" "}
        {/* PAGE HEADER */}{" "}
        {/* ================================================= */}{" "}
        <Box sx={{ mb: 4 }}>
          {" "}
          <Typography
            sx={{
              color: "#159DA9",
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: "0.12em",
              mb: 1,
            }}
          >
            {" "}
            OUR MEDICAL SPECIALISTS{" "}
          </Typography>{" "}
          <Typography
            component="h1"
            sx={{
              color: "#173F4A",
              fontSize: { xs: 30, sm: 36, md: 42 },
              fontWeight: 800,
              letterSpacing: "-0.035em",
            }}
          >
            {" "}
            Find the Right Doctor{" "}
          </Typography>{" "}
          <Typography
            sx={{
              color: "#71868D",
              mt: 1,
              maxWidth: 650,
              fontSize: 15,
              lineHeight: 1.7,
            }}
          >
            {" "}
            Choose a medical specialty and find experienced doctors available
            for consultation and appointments.{" "}
          </Typography>{" "}
        </Box>{" "}
        {/* ================================================= */}{" "}
        {/* MAIN 30% / 70% LAYOUT */}{" "}
        {/* ================================================= */}{" "}
        <Grid container spacing={{ xs: 3, md: 0 }}>
          {" "}
          {/* ================================================= */}{" "}
          {/* LEFT — 30% SPECIALTIES */}{" "}
          {/* ================================================= */}{" "}
          <Grid
            item
            xs={12}
            sx={{
              width: { xs: "100%", md: "30%" },
              flexBasis: { xs: "100%", md: "30%" },
            }}
          >
            {" "}
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E2EEEE",
                borderRadius: 3,
                p: { xs: 2, md: 2.5 },
                position: { md: "sticky" },
                top: 20,
              }}
            >
              {" "}
              {/* Sidebar Header */}{" "}
              <Box sx={{ mb: 2.5 }}>
                {" "}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mb: 0.8,
                  }}
                >
                  {" "}
                  <Box
                    sx={{
                      width: 38,
                      height: 38,
                      borderRadius: 2,
                      backgroundColor: "#E8F8F8",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {" "}
                    <MedicalServicesIcon
                      sx={{ color: "#159DA9", fontSize: 21 }}
                    />{" "}
                  </Box>{" "}
                  <Typography
                    sx={{ color: "#173F4A", fontWeight: 800, fontSize: 18 }}
                  >
                    {" "}
                    Medical Specialties{" "}
                  </Typography>{" "}
                </Box>{" "}
                <Typography
                  sx={{ color: "#83959B", fontSize: 12, lineHeight: 1.6 }}
                >
                  {" "}
                  Select a specialty to find the right doctor for your
                  healthcare needs.{" "}
                </Typography>{" "}
              </Box>{" "}
              {/* All Doctors */}{" "}
              <Button
                fullWidth
                onClick={() => setSelectedSpecialty("")}
                sx={{
                  justifyContent: "space-between",
                  textAlign: "left",
                  textTransform: "none",
                  borderRadius: 2,
                  px: 2,
                  py: 1.3,
                  mb: 1,
                  fontWeight: 700,
                  fontSize: 14,
                  backgroundColor:
                    selectedSpecialty === "" ? "#159DA9" : "#F7FAFA",
                  color: selectedSpecialty === "" ? "#FFFFFF" : "#38535B",
                  border:
                    selectedSpecialty === ""
                      ? "1px solid #159DA9"
                      : "1px solid #E4EEEE",
                  "&:hover": {
                    backgroundColor:
                      selectedSpecialty === "" ? "#107F89" : "#EDF8F8",
                  },
                }}
              >
                {" "}
                <span>All Doctors</span>{" "}
                <Chip
                  label={doctors.length}
                  size="small"
                  sx={{
                    height: 23,
                    fontSize: 11,
                    fontWeight: 700,
                    backgroundColor:
                      selectedSpecialty === ""
                        ? "rgba(255,255,255,0.18)"
                        : "#E5F5F5",
                    color: selectedSpecialty === "" ? "#FFFFFF" : "#159DA9",
                  }}
                />{" "}
              </Button>{" "}
              {/* Specialty List */}{" "}
              <Box
                sx={{
                  maxHeight: { xs: 400, md: 600 },
                  overflowY: "auto",
                  pr: 0.5,
                  "&::-webkit-scrollbar": { width: 5 },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "#C7DDDF",
                    borderRadius: 10,
                  },
                }}
              >
                {" "}
                {specialties.map((specialty) => {
                  const count = doctors.filter(
                    (doctor) =>
                      doctor.specialty.toLowerCase() ===
                      specialty.toLowerCase(),
                  ).length;
                  const isSelected =
                    selectedSpecialty.toLowerCase() === specialty.toLowerCase();
                  return (
                    <Button
                      key={specialty}
                      fullWidth
                      onClick={() => setSelectedSpecialty(specialty)}
                      sx={{
                        justifyContent: "space-between",
                        textAlign: "left",
                        textTransform: "none",
                        borderRadius: 2,
                        px: 2,
                        py: 1.2,
                        mb: 0.7,
                        fontSize: 13,
                        fontWeight: isSelected ? 700 : 500,
                        color: isSelected ? "#159DA9" : "#526970",
                        backgroundColor: isSelected ? "#E9F8F8" : "transparent",
                        border: isSelected
                          ? "1px solid #B8E2E3"
                          : "1px solid transparent",
                        "&:hover": {
                          backgroundColor: "#F0F9F9",
                          color: "#159DA9",
                        },
                      }}
                    >
                      {" "}
                      <span>{specialty}</span>{" "}
                      {count > 0 && (
                        <Chip
                          label={count}
                          size="small"
                          sx={{
                            height: 21,
                            minWidth: 25,
                            fontSize: 10,
                            fontWeight: 700,
                            backgroundColor: isSelected ? "#D5F0F0" : "#F1F5F5",
                            color: isSelected ? "#159DA9" : "#809197",
                          }}
                        />
                      )}{" "}
                    </Button>
                  );
                })}{" "}
              </Box>{" "}
            </Box>{" "}
          </Grid>{" "}
          {/* ================================================= */}{" "}
          {/* RIGHT — 70% DOCTORS */}{" "}
          {/* ================================================= */}{" "}
          <Grid
            item
            xs={12}
            sx={{
              width: { xs: "100%", md: "70%" },
              flexBasis: { xs: "100%", md: "70%" },
            }}
          >
            {" "}
            {/* Doctors Header */}{" "}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center" },
                flexDirection: { xs: "column", sm: "row" },
                gap: 1,
                mb: 2.5,
              }}
            >
              {" "}
              <Box>
                {" "}
                <Typography
                  sx={{ color: "#173F4A", fontSize: 20, fontWeight: 800 }}
                >
                  {" "}
                  {selectedSpecialty ? selectedSpecialty : "All Doctors"}{" "}
                </Typography>{" "}
                <Typography sx={{ color: "#84959B", fontSize: 12, mt: 0.4 }}>
                  {" "}
                  {filteredDoctors.length} doctor{" "}
                  {filteredDoctors.length !== 1 ? "s" : ""} available{" "}
                </Typography>{" "}
              </Box>{" "}
              {selectedSpecialty && (
                <Button
                  onClick={() => setSelectedSpecialty("")}
                  size="small"
                  sx={{
                    color: "#159DA9",
                    textTransform: "none",
                    fontWeight: 700,
                  }}
                >
                  {" "}
                  Show all doctors{" "}
                </Button>
              )}{" "}
            </Box>{" "}
            {/* Doctor Grid */}{" "}
            <Grid container spacing={{ xs: 2, sm: 2.5 }}>
              {" "}
              {filteredDoctors.map((doctor) => (
                <Grid item xs={12} sm={6} md={6} lg={4} key={doctor.id}>
                  {" "}
                  <Link
                    to={hasSavedAccount() ? "/booking" : "/create-account"}
                    state={{ doctor }}
                    style={{
                      textDecoration: "none",
                      display: "block",
                      height: "100%",
                    }}
                  >
                    {" "}
                    <Card
                      sx={{
                        height: "100%",
                        borderRadius: 3,
                        border: "1px solid #E2EEEE",
                        boxShadow: "none",
                        overflow: "hidden",
                        backgroundColor: "#FFFFFF",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-6px)",
                          boxShadow: "0 15px 35px rgba(15,70,85,0.12)",
                          borderColor: "#B5DDDF",
                        },
                      }}
                    >
                      {" "}
                      {/* Doctor Image */}{" "}
                      <Box
                        sx={{
                          position: "relative",
                          height: 220,
                          backgroundColor: "#EAF5F6",
                        }}
                      >
                        {" "}
                        <CardMedia
                          component="img"
                          image={doctor.image}
                          alt={doctor.name}
                          sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />{" "}
                        {/* Available */}{" "}
                        <Box
                          sx={{
                            position: "absolute",
                            top: 12,
                            left: 12,
                            backgroundColor: "rgba(255,255,255,0.95)",
                            borderRadius: 5,
                            px: 1.2,
                            py: 0.5,
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                          }}
                        >
                          {" "}
                          <Box
                            sx={{
                              width: 7,
                              height: 7,
                              borderRadius: "50%",
                              backgroundColor: "#16A56A",
                            }}
                          />{" "}
                          <Typography
                            sx={{
                              color: "#148357",
                              fontSize: 10,
                              fontWeight: 700,
                            }}
                          >
                            {" "}
                            Available{" "}
                          </Typography>{" "}
                        </Box>{" "}
                        {/* Verified */}{" "}
                        <Box
                          sx={{
                            position: "absolute",
                            right: 12,
                            top: 12,
                            backgroundColor: "#FFFFFF",
                            borderRadius: 5,
                            px: 1,
                            py: 0.5,
                            display: "flex",
                            alignItems: "center",
                            gap: 0.4,
                          }}
                        >
                          {" "}
                          <CheckCircleIcon
                            sx={{ color: "#159DA9", fontSize: 14 }}
                          />{" "}
                          <Typography
                            sx={{
                              color: "#159DA9",
                              fontSize: 10,
                              fontWeight: 700,
                            }}
                          >
                            {" "}
                            Verified{" "}
                          </Typography>{" "}
                        </Box>{" "}
                      </Box>{" "}
                      {/* Doctor Information */}{" "}
                      <CardContent sx={{ p: 2 }}>
                        {" "}
                        <Typography
                          sx={{
                            color: "#159DA9",
                            fontSize: 10,
                            fontWeight: 800,
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                          }}
                        >
                          {" "}
                          {doctor.specialty}{" "}
                        </Typography>{" "}
                        <Typography
                          sx={{
                            color: "#173F4A",
                            fontSize: 17,
                            fontWeight: 800,
                            mt: 0.5,
                          }}
                        >
                          {" "}
                          {doctor.name}{" "}
                        </Typography>{" "}
                        <Typography
                          sx={{ color: "#71868D", fontSize: 12, mt: 0.6 }}
                        >
                          {" "}
                          {doctor.experience}{" "}
                        </Typography>{" "}
                        {/* Divider */}{" "}
                        <Box
                          sx={{
                            height: "1px",
                            backgroundColor: "#E8F0F1",
                            my: 1.7,
                          }}
                        />{" "}
                        {/* Bottom */}{" "}
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          {" "}
                          <Box>
                            {" "}
                            <Typography sx={{ color: "#89999E", fontSize: 9 }}>
                              {" "}
                              Consultation Fee{" "}
                            </Typography>{" "}
                            <Typography
                              sx={{
                                color: "#159DA9",
                                fontSize: 16,
                                fontWeight: 800,
                                mt: 0.2,
                              }}
                            >
                              {" "}
                              Rs. {doctor.fee}{" "}
                            </Typography>{" "}
                          </Box>{" "}
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 0.3,
                              color: "#159DA9",
                            }}
                          >
                            {" "}
                            <Typography sx={{ fontSize: 11, fontWeight: 700 }}>
                              {" "}
                              View{" "}
                            </Typography>{" "}
                            <ArrowForwardIcon sx={{ fontSize: 15 }} />{" "}
                          </Box>{" "}
                        </Box>{" "}
                      </CardContent>{" "}
                    </Card>{" "}
                  </Link>{" "}
                </Grid>
              ))}{" "}
            </Grid>{" "}
            {/* No Doctors */}{" "}
            {filteredDoctors.length === 0 && (
              <Box
                sx={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E2EEEE",
                  borderRadius: 3,
                  py: 8,
                  textAlign: "center",
                }}
              >
                {" "}
                <MedicalServicesIcon
                  sx={{ fontSize: 45, color: "#B8DCDD", mb: 1 }}
                />{" "}
                <Typography sx={{ color: "#526970", fontWeight: 700 }}>
                  {" "}
                  No doctors found{" "}
                </Typography>{" "}
                <Typography sx={{ color: "#8A999E", fontSize: 13, mt: 0.5 }}>
                  {" "}
                  Try selecting another specialty.{" "}
                </Typography>{" "}
                <Button
                  onClick={() => setSelectedSpecialty("")}
                  sx={{
                    mt: 2,
                    color: "#159DA9",
                    textTransform: "none",
                    fontWeight: 700,
                  }}
                >
                  {" "}
                  View all doctors{" "}
                </Button>{" "}
              </Box>
            )}{" "}
          </Grid>{" "}
        </Grid>{" "}
      </Container>{" "}
    </Box>
  );
}
export default Doctors;
