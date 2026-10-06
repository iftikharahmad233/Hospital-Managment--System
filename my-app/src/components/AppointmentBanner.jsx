import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function AppointmentBanner() {
  return (
    <Container maxWidth="lg" sx={{ pb: { xs: 5, md: 8 } }}>

      <Box
        sx={{
          backgroundColor: "#DCEFEF",
          borderRadius: { xs: 2, md: 3 },
          color: "white",
          overflow: "hidden",
          mb: 8,
        }}
      >
        <Grid container alignItems="center">

          <Grid item xs={12} md={7}>
            <Box sx={{ p: { xs: 3, sm: 5, md: 6 } }}>

              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "28px", md: "40px" },
                  lineHeight: 1.15,
                  color: "#173042",
                }}
              >
                Care that fits your life.
              </Typography>

              <Button
                component={Link}
                to="/create-account"
                variant="contained"
                sx={{
                  mt: 3,
                  backgroundColor: "#0B7285",
                  color: "white",
                  px: 2.5,

                  "&:hover": {
                    backgroundColor: "#075766",
                  },
                }}
              >
                Create Account
              </Button>

            </Box>
          </Grid>

          <Grid item xs={12} md={5}>

            <Box
              component="img"
              src="https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=700&q=80"
              alt="Doctor"
              sx={{
                width: "100%",
                height: 320,
                objectFit: "cover",
              }}
            />

          </Grid>

        </Grid>
      </Box>

    </Container>
  );
}

export default AppointmentBanner;