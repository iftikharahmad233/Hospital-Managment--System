import {
  Avatar,
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const specialties = [
  {
    name: "General Physician",
    icon: "👨‍⚕️",
  },
  {
    name: "Gynecologist",
    icon: "👩‍⚕️",
  },
  {
    name: "Dermatologist",
    icon: "🧑‍⚕️",
  },
  {
    name: "Pediatricians",
    icon: "👶",
  },
  {
    name: "Neurologist",
    icon: "🧠",
  },
  {
    name: "Gastroenterologist",
    icon: "🩺",
  },
];

function Specialties() {
  return (
    <Box sx={{ py: { xs: 6, md: 9 } }}>
      <Container maxWidth="lg">

        <Typography
          variant="h3"
          textAlign="center"
          sx={{ fontSize: { xs: "28px", md: "36px" }, color: "#173042" }}
        >
          Find by{" "}
          <span style={{ color: "#0B7285" }}>
            Speciality
          </span>
        </Typography>

        <Typography
          textAlign="center"
          color="text.secondary"
          sx={{ mt: 1 }}
        >
          Browse through our extensive list of trusted specialists
        </Typography>

        <Grid
          container
          spacing={{ xs: 1.5, sm: 2.5 }}
          justifyContent="center"
          sx={{ mt: 4 }}
        >
          {specialties.map((item) => (
            <Grid
              item
              xs={6}
              sm={2}
              key={item.name}
            >
              <Box
                sx={{
                  textAlign: "center",
                  cursor: "pointer",
                  p: { xs: 1.5, sm: 2 },
                  border: "1px solid #DCE7EC",
                  borderRadius: 2,
                  backgroundColor: "#fff",
                  height: "100%",
                  transition: "0.2s ease",
                  "&:hover": { borderColor: "#7ED6D0", transform: "translateY(-3px)" },
                }}
              >
                <Avatar
                  sx={{
                    width: { xs: 54, sm: 68 },
                    height: { xs: 54, sm: 68 },
                    margin: "auto",
                    backgroundColor: "#E4F4F5",
                    fontSize: { xs: 23, sm: 28 },
                  }}
                >
                  {item.icon}
                </Avatar>

                <Typography
                  variant="body2"
                  sx={{ mt: 1.5, fontWeight: 700, color: "#395260", fontSize: { xs: 12, sm: 14 } }}
                >
                  {item.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
}

export default Specialties;