import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CircleIcon from "@mui/icons-material/Circle";
import { hasSavedAccount } from "../utils/account";

function DoctorCard({ doctor }) {
  const navigate = useNavigate();

  const handleDoctorClick = () => {
    navigate(hasSavedAccount() ? "/booking" : "/create-account", {
      state: {
        doctor: doctor,
      },
    });
  };

  return (
    <Card
      onClick={handleDoctorClick}
      sx={{
        border: "1px solid #DCE7EC",
        boxShadow: "0 8px 24px rgba(23, 48, 66, 0.04)",
        borderRadius: 2,
        overflow: "hidden",
        backgroundColor: "#fff",
        cursor: "pointer",
        height: "100%",
        transition: "0.2s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 14px 30px rgba(23, 48, 66, 0.1)",
          borderColor: "#9BCFD0",
        },
      }}
    >
      {/* Doctor Image */}
      <CardMedia
        component="img"
        height="205"
        image={doctor.image}
        alt={doctor.name}
        sx={{
          objectFit: "cover",
          backgroundColor: "#E4F4F5",
        }}
      />

      <CardContent sx={{ p: 2.2, "&:last-child": { pb: 2.2 } }}>
        {/* Available */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            mb: 1,
          }}
        >
          <CircleIcon
            sx={{
              fontSize: 9,
              color: "#2F9E72",
            }}
          />
          <Typography
            variant="body2"
            sx={{
              color: "#2F9E72",
              fontWeight: 700,
              fontSize: 12,
            }}
          >
            Available
          </Typography>
        </Box>

        {/* Doctor Name */}
        <Typography
          fontWeight={700}
          sx={{
            fontSize: 16,
            color: "#173042",
            lineHeight: 1.3,
          }}
        >
          {doctor.name}
        </Typography>

        {/* Specialty */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mt: 0.8,
            fontSize: 13,
          }}
        >
          {doctor.specialty}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default DoctorCard;