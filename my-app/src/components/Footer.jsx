import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

function Footer() {
  return (
    <Box sx={{ py: { xs: 5, md: 7 }, backgroundColor: "#173042", color: "#fff" }}>

      <Container maxWidth="lg">

        <Grid container spacing={5}>

          {/* Logo */}

          <Grid item xs={12} md={5}>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 2,
              }}
            >
              <LocalHospitalIcon
                color="primary"
                fontSize="large"
              />

              <Typography
                variant="h6"
                fontWeight={700}
                color="#fff"
              >
                Prescripto
              </Typography>
            </Box>

            <Typography
              color="#B9CBD0"
              lineHeight={1.8}
            >
              Simplifying healthcare access through smart
              appointment management. Book your doctor anytime,
              anywhere with our easy-to-use system.
            </Typography>

          </Grid>

          {/* Company */}

          <Grid item xs={12} sm={6} md={3}>

            <Typography
              fontWeight={800}
              mb={2}
            >
              COMPANY
            </Typography>

            <Typography mb={1} color="#B9CBD0">
              Home
            </Typography>

            <Typography mb={1} color="#B9CBD0">
              About
            </Typography>

            <Typography color="#B9CBD0">
              Contact Us
            </Typography>

          </Grid>

          {/* Contact */}

          <Grid item xs={12} sm={6} md={4}>

            <Typography
              fontWeight={700}
              mb={2}
            >
              GET IN TOUCH
            </Typography>

            <Typography mb={1} color="#B9CBD0">
              📞 +92 343 2705821
            </Typography>

            <Typography color="#B9CBD0">
              ✉ hospital@example.com
            </Typography>

          </Grid>

        </Grid>

        <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.14)" }} />

        <Typography
          textAlign="center"
          color="#8EA8AF"
          variant="body2"
        >
          Copyright © 2026 Prescripto - All Rights Reserved.
        </Typography>

      </Container>

    </Box>
  );
}

export default Footer;