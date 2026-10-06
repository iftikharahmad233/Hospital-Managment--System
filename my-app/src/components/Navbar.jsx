import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useState } from "react";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Link, useNavigate } from "react-router-dom";
import { clearSavedAccount, getSavedUser } from "../utils/account";

function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(getSavedUser);

  const handleLogout = () => {
    clearSavedAccount();
    setUser(null);
    navigate("/");
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#ffffff",
        color: "#173042",
        borderBottom: "1px solid #DCE7EC",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            minHeight: { xs: 64, md: 76 },
            display: "flex",
            justifyContent: "space-between",
            px: { xs: 0, md: 1 },
          }}
        >
          <Box
            component={Link}
            to="/"
            sx={{ display: "flex", alignItems: "center", gap: 1.2, textDecoration: "none" }}
          >
            <LocalHospitalIcon sx={{ color: "primary.main", fontSize: 32 }} />
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 800, color: "#173042", lineHeight: 1 }}>
                Prescripto
              </Typography>
              <Typography sx={{ color: "#6A7D87", fontSize: 10, letterSpacing: "0.12em", fontWeight: 700, mt: 0.5 }}>
                CARE MADE SIMPLE
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.5, alignItems: "center" }}>
            <Button component={Link} to="/" color="inherit">Home</Button>
            <Button component={Link} to="/doctors" color="inherit">Find a doctor</Button>
            <Button component={Link} to="/about" color="inherit">About</Button>
            <Button component={Link} to="/contact" color="inherit">Contact</Button>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 0.5, sm: 1.5 } }}>
            <Box sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center", gap: 1, mr: 1.5 }}>
              <PhoneInTalkOutlinedIcon sx={{ fontSize: 19, color: "primary.main" }} />
              <Box>
                <Typography sx={{ fontSize: 11, color: "#6A7D87" }}>Need help?</Typography>
                <Typography sx={{ fontSize: 13, fontWeight: 800, color: "#173042" }}>+92 343 2705821</Typography>
              </Box>
            </Box>
            {user ? (
              <>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.75,
                    maxWidth: { xs: 110, sm: 170 },
                    px: { xs: 0.75, sm: 1.25 },
                    py: 0.65,
                    borderRadius: 2,
                    backgroundColor: "#EAF6F7",
                    color: "#075766",
                  }}
                >
                  <AccountCircleOutlinedIcon sx={{ fontSize: 21, flexShrink: 0 }} />
                  <Typography
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      fontSize: { xs: 12, sm: 13 },
                      fontWeight: 800,
                    }}
                    title={user.name}
                  >
                    {user.name}
                  </Typography>
                </Box>
                <Button
                  onClick={handleLogout}
                  variant="outlined"
                  startIcon={<LogoutOutlinedIcon />}
                  sx={{
                    px: { xs: 1, sm: 1.75 },
                    minWidth: { xs: 0, sm: 100 },
                    "& .MuiButton-startIcon": { mr: { xs: 0, sm: 0.75 } },
                  }}
                >
                  <Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>
                    Logout
                  </Box>
                </Button>
              </>
            ) : (
              <Button
                component={Link}
                to="/create-account"
                variant="contained"
                sx={{ px: { xs: 1.5, sm: 2.5 }, minWidth: { xs: 0, sm: 130 } }}
              >
                Sign up
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
